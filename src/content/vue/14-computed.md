---
jenis: murid
bab: vue
urutan: 14
judul: "Computed: Data Turunan"
deskripsi: "Membuat nilai yang dihitung dari data lain dengan computed, bedanya dengan fungsi biasa, serta contoh pencarian dan filter daftar."
---

# Computed: Data Turunan

Pada materi ini kamu akan mempelajari: apa itu data turunan, cara membuatnya dengan `computed`, perbedaannya dengan fungsi biasa, serta contoh pemakaian seperti total harga, pencarian, dan filter daftar.

Sebelum mulai, pastikan kamu sudah memahami: `ref` dan array reaktif dari materi sebelumnya, `v-for` dari materi Menampilkan Daftar dengan v-for, serta `filter` dan `reduce` dari bab JavaScript.

---

## 1. Masalah: Ekspresi yang Makin Panjang

Sering kali kita perlu menampilkan nilai yang **dihitung dari data lain**, misalnya jumlah tugas yang belum selesai.

```vue
<script setup>
import { ref } from 'vue'

const tugas = ref([
  { id: 1, teks: 'Belajar Vue', selesai: true },
  { id: 2, teks: 'Latihan', selesai: false },
  { id: 3, teks: 'Membaca', selesai: false }
])
</script>

<template>
  <p>Sisa tugas: {{ tugas.filter(t => !t.selesai).length }}</p>
  <!-- bisa berjalan, tetapi ekspresi panjang membuat template sulit dibaca -->
</template>
```

Ekspresi seperti ini berjalan, tetapi sulit dibaca, dan akan berantakan jika dipakai di banyak tempat. Untuk kebutuhan ini, Vue menyediakan `computed`.

> **Ringkasan:** Nilai yang dihitung dari data lain sebaiknya tidak ditulis panjang-panjang di template. Pakai `computed`.

---

## 2. computed

`computed` membuat **data turunan**: nilai yang dihitung otomatis dari data lain, dan dihitung ulang setiap data asalnya berubah.

#### Cara menulis

```vue
<script setup>
import { ref, computed } from 'vue'
// computed diimpor dari vue, seperti ref

const tugas = ref([
  { id: 1, teks: 'Belajar Vue', selesai: true },
  { id: 2, teks: 'Latihan', selesai: false },
  { id: 3, teks: 'Membaca', selesai: false }
])

const sisa = computed(() => {
  return tugas.value.filter(t => !t.selesai).length
  // dihitung dari tugas; hasilnya otomatis diperbarui saat tugas berubah
})
</script>

<template>
  <p>Sisa tugas: {{ sisa }}</p>
  <!-- dipakai seperti ref biasa; di template tanpa .value -->
  <button @click="tugas[1].selesai = true">Selesaikan tugas 2</button>
</template>
```

Setelah tombol diklik, jumlah sisa tugas turun otomatis. Kita tidak perlu menulis kode untuk memperbarui angka itu.

Aturan penting:

- `computed` menerima **fungsi** yang mengembalikan nilai (`return`).
- Hasilnya dipakai seperti `ref`: di `<script>` lewat `.value`, di `<template>` tanpa `.value`.
- Nilainya **hanya bisa dibaca**. Jangan mencoba mengisinya langsung seperti `sisa.value = 5`.

> **Ringkasan:** `computed(() => ...)` menghitung nilai dari data lain dan memperbaruinya otomatis.

---

## 3. computed atau Fungsi Biasa

Kamu bisa saja menulis fungsi biasa dan memanggilnya di template.

```vue
<script setup>
function hitungSisa() {
  return tugas.value.filter(t => !t.selesai).length
}
</script>

<template>
  <p>{{ hitungSisa() }}</p>
</template>
```

Hasilnya sama. Bedanya ada pada **penyimpanan hasil** (*cache*).

| | `computed` | Fungsi biasa |
|---|---|---|
| Cara pakai di template | `{{ sisa }}` | `{{ hitungSisa() }}` |
| Hasil | Disimpan, dihitung ulang hanya saat data asalnya berubah | Dihitung ulang setiap tampilan digambar ulang |
| Cocok untuk | Nilai yang dihitung dari data | Aksi yang dipicu event, seperti klik |

Jika `sisa` dipakai di lima tempat, `computed` hanya menghitung sekali, sedangkan fungsi biasa menghitung lima kali. Untuk daftar besar, perbedaannya terasa.

Pegangan sederhana: **jika hasilnya hanya bergantung pada data lain, pakai `computed`. Jika perlu menjalankan aksi (mengubah data, memanggil server), pakai fungsi biasa.**

> **Ringkasan:** `computed` menyimpan hasil dan hanya menghitung ulang saat data asal berubah. Fungsi biasa untuk aksi.

---

## 4. Contoh: Total Harga

```vue
<script setup>
import { ref, computed } from 'vue'

const keranjang = ref([
  { id: 1, nama: 'Buku', harga: 25000, jumlah: 2 },
  { id: 2, nama: 'Pensil', harga: 3000, jumlah: 5 }
])

const total = computed(() => {
  return keranjang.value.reduce((jumlahAkhir, item) => {
    return jumlahAkhir + item.harga * item.jumlah
  }, 0)
  // reduce dari bab JavaScript: menjumlahkan harga x jumlah semua item
})
</script>

<template>
  <ul>
    <li v-for="item in keranjang" :key="item.id">
      {{ item.nama }} x
      <input type="number" min="0" v-model.number="item.jumlah">
    </li>
  </ul>
  <p>Total: Rp {{ total.toLocaleString('id-ID') }}</p>
  <!-- ubah jumlah pada input, total otomatis ikut berubah -->
</template>
```

---

## 5. Contoh: Pencarian dan Filter Daftar

Pola paling berguna dari `computed`: menyaring daftar berdasarkan input pengguna, tanpa mengubah data aslinya.

```vue
<script setup>
import { ref, computed } from 'vue'

const kataKunci = ref('')
const filter = ref('semua')

const tugas = ref([
  { id: 1, teks: 'Belajar Vue', selesai: true },
  { id: 2, teks: 'Mengerjakan latihan', selesai: false },
  { id: 3, teks: 'Membaca dokumentasi', selesai: false }
])

const tugasTampil = computed(() => {
  return tugas.value
    .filter(t => t.teks.toLowerCase().includes(kataKunci.value.toLowerCase()))
    // saring berdasarkan kata kunci, tanpa membedakan huruf besar kecil
    .filter(t => {
      if (filter.value === 'aktif') return !t.selesai
      if (filter.value === 'selesai') return t.selesai
      return true
      // filter "semua": tidak ada yang dibuang
    })
})
</script>

<template>
  <input v-model="kataKunci" placeholder="Cari tugas...">
  <button @click="filter = 'semua'">Semua</button>
  <button @click="filter = 'aktif'">Aktif</button>
  <button @click="filter = 'selesai'">Selesai</button>

  <p v-if="tugasTampil.length === 0">Tidak ada tugas yang cocok.</p>
  <ul v-else>
    <li v-for="t in tugasTampil" :key="t.id">{{ t.teks }}</li>
  </ul>
</template>
```

Perhatikan bahwa `tugas` (data asli) tidak pernah diubah. `computed` membuat daftar baru khusus untuk ditampilkan. Inilah cara yang aman, dan juga solusi untuk masalah `v-if` bersama `v-for` yang disebut di materi sebelumnya.

> **Ringkasan:** Untuk mencari atau menyaring daftar, buat `computed` yang menghasilkan daftar hasil saringan, lalu tampilkan dengan `v-for`.

---

## 6. Jangan Mengubah Data di Dalam computed

Isi `computed` sebaiknya hanya **menghitung dan mengembalikan nilai**. Jangan mengubah data lain di dalamnya.

```js
const total = computed(() => {
  jumlah.value++
  // salah: mengubah data di dalam computed menimbulkan perilaku tak terduga
  return harga.value * jumlah.value
})
```

Jika kamu perlu menjalankan aksi saat data berubah, misalnya menyimpan ke `localStorage`, itu tugas `watch`, yang dibahas di materi berikutnya.

Satu jebakan lagi: method `sort()` mengubah array aslinya. Di dalam `computed`, buat salinan dulu.

```js
const terurut = computed(() => {
  return [...tugas.value].sort((a, b) => a.teks.localeCompare(b.teks))
  // [...tugas.value] membuat salinan, sehingga array asli tidak ikut berubah
})
```

---

## 7. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| Error `computed is not defined` | Lupa mengimpor | `import { ref, computed } from 'vue'` |
| `computed` mengembalikan `undefined` | Lupa `return` | Tambahkan `return` di dalam fungsi |
| Hasil tidak berubah saat data berubah | Memakai variabel biasa di dalamnya, bukan `ref` | Pastikan data asalnya adalah `ref` |
| Nilai computed tidak bisa diisi | Mencoba `total.value = ...` | Ubah data asalnya, bukan computed-nya |
| Urutan data asli ikut berubah | Memakai `sort()` langsung | Salin dulu dengan `[...array]` |

---

## 8. Latihan Singkat

1. Buat daftar tugas dan tampilkan jumlah tugas yang belum selesai dengan `computed`.
2. Tambahkan `computed` yang menampilkan persentase tugas selesai.
3. Buat keranjang belanja dengan input jumlah dan tampilkan total harga dengan `computed`.
4. Buat input pencarian yang menyaring daftar tugas berdasarkan teks.
5. Tambahkan tombol filter Semua, Aktif, dan Selesai yang bekerja bersama pencarian.
6. Buat `computed` untuk nama lengkap dari dua input, nama depan dan nama belakang.

---

## Rangkuman

- `computed` membuat data turunan: nilai yang dihitung dari data lain dan diperbarui otomatis.
- Hasil `computed` disimpan dan hanya dihitung ulang saat data asalnya berubah, berbeda dengan fungsi biasa.
- Di `<script>`, nilai computed diakses lewat `.value`. Di `<template>`, tanpa `.value`.
- `computed` sangat cocok untuk total, pencarian, dan filter daftar, tanpa mengubah data asli.
- Isi `computed` hanya menghitung dan mengembalikan nilai, bukan mengubah data atau menjalankan aksi.
