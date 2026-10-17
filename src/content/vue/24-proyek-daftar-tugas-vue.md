---
jenis: murid
bab: vue
urutan: 24
judul: "Proyek: Daftar Tugas dengan Vue"
deskripsi: "Membangun ulang aplikasi daftar tugas dari bab JavaScript dengan Vue: komponen, v-for, v-model, computed, Pinia, dan penyimpanan di localStorage."
---

# Proyek: Daftar Tugas dengan Vue

Pada materi ini kamu akan menggabungkan hampir semua yang sudah dipelajari di bab Vue untuk membangun aplikasi daftar tugas: menambah, mencentang, menghapus, menyaring, dan menyimpan tugas di browser.

Sebelum mulai, pastikan kamu sudah memahami: seluruh materi di bab Vue sampai Pinia. Jika kamu pernah membuat daftar tugas di bab JavaScript, bandingkan nanti seberapa singkat kodenya sekarang.

---

## 1. Gambaran Proyek

Aplikasi ini punya lima fitur.

| Fitur | Materi yang dipakai |
|---|---|
| Menambah tugas lewat formulir | `v-model`, `@submit.prevent`, emit |
| Menampilkan daftar tugas | `v-for`, `:key`, props |
| Mencentang dan menghapus tugas | `v-on`, emit, `:class` |
| Menyaring Semua, Aktif, dan Selesai, serta menghitung sisa | `computed` |
| Menyimpan tugas setelah halaman dimuat ulang | Pinia, `watch`, `localStorage` |

Pembagian komponennya:

```text
App.vue
├── FormTugas.vue      (formulir tambah tugas)
├── FilterTugas.vue    (tombol Semua, Aktif, Selesai)
└── DaftarTugas.vue    (daftar, atau pesan kosong)
    └── ItemTugas.vue  (satu tugas)
```

Data tugas disimpan di satu store Pinia, yang dibaca oleh beberapa komponen.

> **Catatan:** Kerjakan dengan mengetik sendiri, bukan menyalin seluruhnya. Gunakan materi sebelumnya sebagai acuan, dan coba aplikasi di browser setelah setiap langkah.

---

## 2. Persiapan

1. Buat project baru bernama `daftar-tugas` dengan `npm create vue@latest`, seperti di materi Membuat Project Vue dengan Vite. Pilih **No** untuk semua pilihan tambahan.
2. Masuk ke folder project, lalu jalankan `npm install`.
3. Pasang Pinia dengan `npm install pinia`.
4. Bersihkan isi bawaan: kosongkan folder `src/components` dan `src/assets`, lalu ganti isi `App.vue` dengan kerangka kosong.
5. Buat folder `src/stores`, lalu file `src/assets/main.css`.
6. Jalankan `npm run dev` dan biarkan terminal itu terbuka.

Struktur akhir folder `src`:

```text
src/
├── assets/
│   └── main.css
├── components/
│   ├── DaftarTugas.vue
│   ├── FilterTugas.vue
│   ├── FormTugas.vue
│   └── ItemTugas.vue
├── stores/
│   └── tugas.js
├── App.vue
└── main.js
```

---

## 3. Mengaktifkan Pinia dan CSS

Ubah `src/main.js`.

```js
// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'
// CSS global diimpor di sini

createApp(App).use(createPinia()).mount('#app')
// memasang Pinia lalu menampilkan aplikasi
```

Isi `src/assets/main.css` dengan gaya dasar yang berlaku untuk seluruh halaman.

```css
/* src/assets/main.css */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #f4f6f8;
  color: #222;
}

button {
  cursor: pointer;
}
```

---

## 4. Membuat Store

Semua data dan logika tugas dikumpulkan di satu tempat. Buat `src/stores/tugas.js`.

```js
// src/stores/tugas.js
import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useTugasStore = defineStore('tugas', () => {
  const daftar = ref(JSON.parse(localStorage.getItem('tugas') || '[]'))
  // state: ambil tugas yang tersimpan; jika belum ada, mulai dari array kosong
  const filter = ref('semua')
  // state: filter yang sedang dipilih (semua, aktif, atau selesai)

  const tampil = computed(() => {
    if (filter.value === 'aktif') return daftar.value.filter(t => !t.selesai)
    if (filter.value === 'selesai') return daftar.value.filter(t => t.selesai)
    return daftar.value
  })
  // getter: daftar yang ditampilkan sesuai filter

  const sisa = computed(() => daftar.value.filter(t => !t.selesai).length)
  // getter: jumlah tugas yang belum selesai

  function tambah(teks) {
    daftar.value.push({ id: Date.now(), teks, selesai: false })
  }

  function hapus(id) {
    daftar.value = daftar.value.filter(t => t.id !== id)
  }

  function ubahStatus(id) {
    const tugas = daftar.value.find(t => t.id === id)
    if (tugas) tugas.selesai = !tugas.selesai
  }
  // actions: tiga cara mengubah daftar

  watch(daftar, (baru) => {
    localStorage.setItem('tugas', JSON.stringify(baru))
  }, { deep: true })
  // simpan otomatis setiap kali daftar berubah

  return { daftar, filter, tampil, sisa, tambah, hapus, ubahStatus }
})
```

Perhatikan bahwa store tidak tahu apa pun tentang tampilan. Ia hanya mengurus data, sehingga mudah dipahami dan diuji.

---

## 5. Komponen ItemTugas

`ItemTugas` hanya menampilkan satu tugas dan melaporkan aksi pengguna. Ia tidak mengubah data sendiri.

```vue
<!-- src/components/ItemTugas.vue -->
<script setup>
defineProps({
  tugas: { type: Object, required: true }
})
const emit = defineEmits(['ubah', 'hapus'])
</script>

<template>
  <li class="item" :class="{ selesai: tugas.selesai }">
    <label>
      <input
        type="checkbox"
        :checked="tugas.selesai"
        @change="emit('ubah', tugas.id)"
      >
      <span>{{ tugas.teks }}</span>
    </label>
    <button type="button" @click="emit('hapus', tugas.id)" aria-label="Hapus tugas">Hapus</button>
  </li>
</template>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0.8rem;
  background: white;
  border-radius: 6px;
  margin-bottom: 0.5rem;
}
.selesai span {
  text-decoration: line-through;
  color: gray;
}
</style>
```

---

## 6. Komponen DaftarTugas

`DaftarTugas` membaca daftar dari store, mengulangnya dengan `v-for`, dan menghubungkan event dari `ItemTugas` ke action store.

```vue
<!-- src/components/DaftarTugas.vue -->
<script setup>
import { useTugasStore } from '../stores/tugas'
import ItemTugas from './ItemTugas.vue'

const store = useTugasStore()
</script>

<template>
  <p v-if="store.tampil.length === 0" class="kosong">Belum ada tugas di sini.</p>
  <ul v-else>
    <ItemTugas
      v-for="t in store.tampil"
      :key="t.id"
      :tugas="t"
      @ubah="store.ubahStatus"
      @hapus="store.hapus"
    />
    <!-- props turun (tugas), event naik (ubah dan hapus) -->
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.kosong {
  text-align: center;
  color: gray;
}
</style>
```

---

## 7. Komponen FormTugas dan FilterTugas

`FormTugas` menyimpan teks yang sedang diketik di dirinya sendiri, lalu mengirimnya ke atas lewat emit.

```vue
<!-- src/components/FormTugas.vue -->
<script setup>
import { ref } from 'vue'

const emit = defineEmits(['tambah'])
const teks = ref('')

function kirim() {
  const bersih = teks.value.trim()
  if (bersih === '') return
  // abaikan jika kosong atau hanya spasi
  emit('tambah', bersih)
  teks.value = ''
  // kosongkan input setelah dikirim
}
</script>

<template>
  <form @submit.prevent="kirim">
    <input
      type="text"
      v-model="teks"
      placeholder="Tulis tugas baru..."
      aria-label="Tugas baru"
    >
    <button type="submit">Tambah</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
input {
  flex: 1;
  padding: 0.5rem;
}
</style>
```

`FilterTugas` memakai store secara langsung, karena pilihan filter memang data bersama.

```vue
<!-- src/components/FilterTugas.vue -->
<script setup>
import { useTugasStore } from '../stores/tugas'

const store = useTugasStore()

const pilihan = [
  { nilai: 'semua', label: 'Semua' },
  { nilai: 'aktif', label: 'Aktif' },
  { nilai: 'selesai', label: 'Selesai' }
]
// daftar tombol disimpan sebagai data, lalu ditampilkan dengan v-for
</script>

<template>
  <div class="filter">
    <button
      v-for="p in pilihan"
      :key="p.nilai"
      type="button"
      :class="{ aktif: store.filter === p.nilai }"
      @click="store.filter = p.nilai"
    >
      {{ p.label }}
    </button>
    <!-- store.filter boleh diubah langsung dari komponen -->
  </div>
</template>

<style scoped>
.filter {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.aktif {
  background: teal;
  color: white;
}
</style>
```

---

## 8. Merakit di App.vue

Terakhir, rakit semua komponen di `App.vue`.

```vue
<!-- src/App.vue -->
<script setup>
import { useTugasStore } from './stores/tugas'
import FormTugas from './components/FormTugas.vue'
import FilterTugas from './components/FilterTugas.vue'
import DaftarTugas from './components/DaftarTugas.vue'

const store = useTugasStore()
</script>

<template>
  <main class="aplikasi">
    <h1>Daftar Tugas</h1>
    <p>{{ store.sisa }} tugas belum selesai</p>
    <FormTugas @tambah="store.tambah" />
    <!-- FormTugas mengirim teks lewat event, lalu action tambah menyimpannya -->
    <FilterTugas />
    <DaftarTugas />
  </main>
</template>

<style scoped>
.aplikasi {
  max-width: 480px;
  margin: 2rem auto;
  padding: 0 1rem;
}
</style>
```

Buka browser dan coba semua fitur. Tambahkan beberapa tugas, centang, hapus, pindah filter, lalu **muat ulang halaman**. Tugasmu seharusnya tetap ada.

Untuk melihat data yang tersimpan, buka DevTools, pilih tab **Application**, lalu **Local Storage**. Kamu akan melihat kunci `tugas` berisi teks JSON. Tab **Pinia** di Vue DevTools juga menampilkan isi store secara langsung.

> **Ringkasan:** Proyek ini tersusun dari store (data dan logika), tiga komponen tampilan, satu komponen item, dan `App.vue` sebagai perakit.

---

## 9. Pemeriksaan Akhir

| Pemeriksaan | Sudah? |
|---|---|
| Tugas bisa ditambah, dan input kosong setelah menambah | |
| Tugas kosong atau hanya spasi tidak bisa ditambah | |
| Mencentang tugas mencoret teksnya, dan jumlah sisa berubah | |
| Tombol hapus menghilangkan tugas yang benar | |
| Filter Semua, Aktif, dan Selesai menampilkan daftar yang sesuai | |
| Pesan "Belum ada tugas di sini" muncul saat daftar kosong | |
| Tugas tetap ada setelah halaman dimuat ulang | |
| Setiap `v-for` memiliki `:key` yang unik | |
| Tidak ada peringatan merah di Console | |

Jika ada yang tidak berfungsi, cek urutan berikut:

1. Apakah ada pesan error di Console DevTools? Baca pesannya dengan tenang, biasanya menyebut nama file dan baris.
2. Apakah Pinia sudah dipasang di `main.js` dengan `.use(createPinia())`?
3. Apakah semua yang dipakai komponen sudah dimasukkan ke `return` di store?
4. Apakah nama event di `emit` dan di `@...` sama persis?
5. Apakah `.value` ditulis di `<script>` dan tidak ditulis di `<template>`?

---

## 10. Tantangan Tambahan

Jika ingin mencoba lebih jauh:

1. Tambahkan tombol "Hapus semua yang selesai" sebagai action baru di store.
2. Tambahkan fitur mengedit teks tugas dengan klik dua kali (`@dblclick`) pada item, memakai `v-if` untuk berganti ke input.
3. Tambahkan Vue Router dengan dua halaman: daftar tugas dan halaman detail `/tugas/:id`.
4. Tambahkan tombol "Impor contoh" yang mengambil beberapa tugas dari `https://jsonplaceholder.typicode.com/todos?_limit=5` dengan `fetch`, lengkap dengan status loading dan error.
5. Tambahkan mode gelap dengan `:class` dan variabel CSS, lalu simpan pilihannya di `localStorage`.
6. Tambahkan input pencarian dengan `computed` yang bekerja bersama filter.

---

## Rangkuman

- Proyek ini menggabungkan komponen, `v-for`, `v-model`, `v-on`, `:class`, `computed`, `watch`, props, emit, dan Pinia.
- Data dan logika dikumpulkan di satu store Pinia, sedangkan komponen hanya menampilkan dan melaporkan aksi pengguna.
- Pola props turun dan event naik menjaga setiap komponen tetap kecil dan mudah dipahami.
- `watch` dengan `localStorage` membuat data tersimpan otomatis tanpa kode tambahan di komponen.
- Dibandingkan dengan versi DOM manual di bab JavaScript, kita tidak lagi menyentuh elemen secara langsung. Kita hanya mengubah data.
