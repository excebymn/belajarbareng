---
jenis: murid
bab: vue
urutan: 17
judul: "Emit: Mengirim Kejadian ke Komponen Induk"
deskripsi: "Memberi tahu komponen induk dari komponen anak dengan defineEmits, mengirim data lewat event, dan pola props turun, event naik."
---

# Emit: Mengirim Kejadian ke Komponen Induk

Pada materi ini kamu akan mempelajari: cara komponen anak memberi tahu induk bahwa sesuatu terjadi dengan `defineEmits`, mengirim data bersama event, menangkapnya di induk dengan `@`, pola "props turun, event naik", serta `v-model` pada komponen.

Sebelum mulai, pastikan kamu sudah memahami: props dari materi Props, `v-on` dari materi Event dengan v-on, serta `v-for` dari materi Menampilkan Daftar dengan v-for.

---

## 1. Masalah: Anak Tidak Boleh Mengubah Data Induk

Di materi Props, kamu belajar bahwa komponen anak tidak boleh mengubah props. Lalu bagaimana jika sebuah tombol "Hapus" ada di dalam komponen anak, sedangkan datanya milik induk?

Solusinya: anak **tidak menghapus sendiri**, tetapi **memberi tahu induk** bahwa tombol diklik. Induklah yang kemudian mengubah datanya. Pemberitahuan itu disebut **emit** (memancarkan event).

> **Ringkasan:** Anak tidak mengubah data induk. Anak mengirim event, dan induk yang bertindak.

---

## 2. Mengirim Event dengan defineEmits

#### Cara menulis

Komponen anak mendeklarasikan event apa saja yang bisa ia kirim dengan `defineEmits`, lalu mengirimnya dengan fungsi `emit`.

```vue
<!-- src/components/TombolSapa.vue -->
<script setup>
const emit = defineEmits(['sapa'])
// daftar event yang bisa dikirim komponen ini; tidak perlu diimpor

function klik() {
  emit('sapa')
  // mengirim event bernama "sapa" ke induk
}
</script>

<template>
  <button @click="klik">Sapa</button>
</template>
```

Komponen induk menangkap event itu dengan `@`, persis seperti menangkap event klik biasa.

```vue
<!-- src/App.vue -->
<script setup>
import { ref } from 'vue'
import TombolSapa from './components/TombolSapa.vue'

const pesan = ref('')

function tampilkanSapaan() {
  pesan.value = 'Halo dari komponen anak!'
}
</script>

<template>
  <TombolSapa @sapa="tampilkanSapaan" />
  <!-- saat anak mengirim event sapa, fungsi tampilkanSapaan dijalankan -->
  <p>{{ pesan }}</p>
</template>
```

Alurnya:

1. Pengguna mengklik tombol di komponen anak.
2. Anak menjalankan `emit('sapa')`.
3. Induk menerima event `sapa` dan menjalankan fungsinya.

Di template anak, `emit` juga bisa dipanggil langsung tanpa fungsi tambahan:

```vue
<button @click="emit('sapa')">Sapa</button>
<!-- cara singkat untuk emit sederhana -->
```

> **Ringkasan:** Anak mengirim dengan `emit('namaEvent')`, induk menangkap dengan `@namaEvent="fungsi"`.

---

## 3. Mengirim Data Bersama Event

Event bisa membawa data. Tulis data sebagai argumen setelah nama event.

```vue
<!-- src/components/ItemTugas.vue -->
<script setup>
const props = defineProps({
  tugas: { type: Object, required: true }
})
const emit = defineEmits(['hapus', 'ubahStatus'])
</script>

<template>
  <li>
    <input
      type="checkbox"
      :checked="tugas.selesai"
      @change="emit('ubahStatus', tugas.id)"
    >
    <span>{{ tugas.teks }}</span>
    <button @click="emit('hapus', tugas.id)">Hapus</button>
    <!-- id dikirim bersama event agar induk tahu tugas mana yang dimaksud -->
  </li>
</template>
```

```vue
<!-- src/App.vue -->
<script setup>
import { ref } from 'vue'
import ItemTugas from './components/ItemTugas.vue'

const daftar = ref([
  { id: 1, teks: 'Belajar Vue', selesai: false },
  { id: 2, teks: 'Mengerjakan latihan', selesai: false }
])

function hapus(id) {
  daftar.value = daftar.value.filter(t => t.id !== id)
}

function ubahStatus(id) {
  const tugas = daftar.value.find(t => t.id === id)
  if (tugas) tugas.selesai = !tugas.selesai
}
</script>

<template>
  <ul>
    <ItemTugas
      v-for="t in daftar"
      :key="t.id"
      :tugas="t"
      @hapus="hapus"
      @ubahStatus="ubahStatus"
    />
    <!-- data dikirim ke bawah lewat props, kejadian dikirim ke atas lewat event -->
  </ul>
</template>
```

Perhatikan bagaimana `@hapus="hapus"` otomatis meneruskan `id` yang dikirim anak sebagai argumen fungsi `hapus`. Tidak perlu menulis `hapus(id)` di template.

> **Ringkasan:** Data dikirim sebagai argumen setelah nama event, dan menjadi argumen fungsi penanganan di induk.

---

## 4. Pola: Props Turun, Event Naik

Dua materi terakhir membentuk satu pola penting di Vue.

```text
        Induk (pemilik data)
         │ props ↓      ↑ event
        Anak (hanya menampilkan dan melapor)
```

| Arah | Cara | Contoh |
|---|---|---|
| Induk ke anak | Props | `:tugas="t"` |
| Anak ke induk | Event (`emit`) | `emit('hapus', id)` |

Dengan pola ini, **data hanya dimiliki oleh satu komponen** (induk), sehingga mudah dilacak. Anak cukup menampilkan data yang diberikan dan melaporkan aksi pengguna.

---

## 5. Aturan Penamaan Event

- Nama event pada `emit` sebaiknya **camelCase** (`ubahStatus`) atau satu kata (`hapus`). Kursus ini memakai camelCase.
- Di induk, tulis dengan `@` diikuti nama yang sama: `@ubahStatus="..."`.
- Pilih nama yang menjelaskan **apa yang terjadi**, bukan apa yang dilakukan induk: `hapus` atau `selesai` lebih baik daripada `jalankanFungsiHapus`.

Mendeklarasikan event di `defineEmits` juga berguna sebagai dokumentasi: siapa pun yang membuka komponen langsung tahu event apa yang dikirimnya.

---

## 6. v-model pada Komponen

Kamu sudah memakai `v-model` pada `input`. Komponen buatanmu juga bisa mendukungnya dengan `defineModel`, sehingga induk cukup menulis `v-model` seperti biasa.

```vue
<!-- src/components/InputNama.vue -->
<script setup>
const nilai = defineModel()
// nilai berperilaku seperti ref yang tersambung ke induk
</script>

<template>
  <input v-model="nilai" placeholder="Nama">
  <!-- mengetik mengubah nilai, dan perubahannya otomatis sampai ke induk -->
</template>
```

```vue
<!-- src/App.vue -->
<script setup>
import { ref } from 'vue'
import InputNama from './components/InputNama.vue'

const nama = ref('')
</script>

<template>
  <InputNama v-model="nama" />
  <!-- data nama di induk terhubung dua arah dengan input di anak -->
  <p>Halo, {{ nama }}!</p>
</template>
```

`defineModel` menyembunyikan props dan emit di balik layar, sehingga kamu tidak perlu menulis keduanya sendiri. Fitur ini tersedia pada Vue versi 3.4 ke atas, dan project hasil `npm create vue@latest` sudah memenuhinya. Jika menemukan tutorial lama, kamu mungkin melihat cara manual dengan props `modelValue` dan event `update:modelValue`, yang hasilnya sama.

---

## 7. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| Event tidak diterima induk | Nama event di anak dan induk tidak sama | Samakan, misalnya `emit('hapus')` dan `@hapus` |
| Peringatan "Component emitted event ... but it is not declared" | Lupa mendaftarkan di `defineEmits` | Tambahkan nama event di `defineEmits([...])` |
| Fungsi induk tidak menerima data | Lupa mengirim argumen di `emit` | Tulis `emit('hapus', tugas.id)` |
| Induk menjalankan fungsi dua kali atau salah argumen | Menulis `@hapus="hapus(id)"` padahal `id` tidak ada di induk | Tulis `@hapus="hapus"` agar argumen dari anak diteruskan |
| Anak mengubah props sebagai ganti emit | Mencoba mengubah data induk langsung | Kirim event, biarkan induk yang mengubah |

---

## 8. Latihan Singkat

1. Buat komponen `TombolSapa` yang mengirim event `sapa`, lalu tangkap di `App.vue` dan tampilkan pesan.
2. Buat komponen `ItemTugas` dengan tombol "Hapus" yang mengirim `id` lewat event, lalu hapus tugas dari array di induk.
3. Tambahkan checkbox pada `ItemTugas` yang mengirim event `ubahStatus`.
4. Buat komponen `FormTugas` berisi input dan tombol yang mengirim event `tambah` dengan teks tugas baru.
5. Gabungkan ketiganya di `App.vue`: formulir, daftar, dan item, semuanya berkomunikasi lewat props dan event.
6. Buat komponen `InputNama` dengan `defineModel`, lalu pakai dengan `v-model` di induk.

---

## Rangkuman

- Anak tidak mengubah data induk. Anak mengirim event dengan `emit`, dan induk yang mengubah datanya.
- Event dideklarasikan dengan `defineEmits`, dikirim dengan `emit('nama', data)`, dan ditangkap induk dengan `@nama="fungsi"`.
- Data yang dikirim bersama event menjadi argumen fungsi penanganan di induk.
- Pola utama: props turun dari induk ke anak, event naik dari anak ke induk.
- `defineModel` memudahkan komponen mendukung `v-model`.
