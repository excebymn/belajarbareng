---
jenis: murid
bab: vue
urutan: 22
judul: "Pinia: Data Bersama Antar Komponen"
deskripsi: "Menyimpan data yang dipakai banyak komponen dengan Pinia: membuat store, state, getters, actions, dan memakainya di komponen."
---

# Pinia: Data Bersama Antar Komponen

Pada materi ini kamu akan mempelajari: masalah berbagi data antar banyak komponen, apa itu Pinia dan store, cara memasang dan membuat store dengan state, getters, dan actions, memakai store di komponen, serta menyimpan data store ke `localStorage`.

Sebelum mulai, pastikan kamu sudah memahami: `ref`, `computed`, dan `watch` dari materi sebelumnya, props dan emit dari dua materi sebelumnya, serta modul `import` dan `export` dari bab JavaScript.

---

## 1. Masalah: Data yang Dibutuhkan Banyak Komponen

Dengan props dan emit, data mengalir lewat pohon komponen: induk ke anak, lalu anak ke cucu.

```text
App                 ← data tugas ada di sini
└── HalamanTugas
    └── DaftarTugas
        └── ItemTugas   ← butuh data, harus dikirim lewat tiga lapis props
```

Jika komponen yang jauh, misalnya menu di header yang menampilkan jumlah tugas, juga butuh data yang sama, kita harus mengoper props melewati banyak komponen yang sebenarnya tidak memakainya. Hal ini merepotkan dan mudah salah.

Solusinya adalah menyimpan data bersama di **satu tempat di luar pohon komponen**, yang bisa dibaca dan diubah oleh komponen mana pun. Alat resmi Vue untuk ini adalah **Pinia**, dan tempat penyimpanannya disebut **store**.

> **Ringkasan:** Pinia menyimpan data bersama di satu tempat (store) yang bisa dipakai komponen mana pun tanpa mengoper props berlapis.

---

## 2. Memasang Pinia

Jika belum dipilih saat `npm create vue`, pasang secara manual.

```bash
npm install pinia
# memasang Pinia ke project
```

Lalu aktifkan di `src/main.js`.

```js
// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
// memasang Pinia ke aplikasi
app.mount('#app')
```

Jika kamu juga memakai router dari materi sebelumnya, tambahkan `app.use(router)` di antaranya. Urutan pemasangan keduanya tidak berpengaruh.

---

## 3. Membuat Store

Store ditulis di folder `src/stores`, satu file untuk satu topik data. Pinia menyediakan gaya penulisan yang sama dengan yang sudah kamu kenal: `ref` untuk data, `computed` untuk data turunan, dan fungsi biasa untuk aksi.

#### Cara menulis

```js
// src/stores/hitung.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHitungStore = defineStore('hitung', () => {
  // 'hitung' adalah nama unik untuk store ini

  const angka = ref(0)
  // state: data milik store

  const duaKali = computed(() => angka.value * 2)
  // getter: nilai turunan dari state

  function tambah() {
    angka.value++
  }
  // action: fungsi yang mengubah state

  return { angka, duaKali, tambah }
  // semua yang ingin dipakai komponen harus dikembalikan
})
```

Bentuk di atas tidak asing: isinya sama dengan yang kamu tulis di `<script setup>`, hanya saja berada di file terpisah dan di dalam `defineStore`.

| Bagian store | Ditulis dengan | Fungsi |
|---|---|---|
| State | `ref(...)` | Data yang disimpan |
| Getters | `computed(...)` | Data turunan dari state |
| Actions | Fungsi biasa | Mengubah state atau menjalankan logika |

Aturan penting: **semua yang ingin dipakai komponen harus dimasukkan di `return`**. Yang tidak dikembalikan bersifat privat dan tidak bisa diakses dari luar store.

Konvensi penamaan: fungsi pembuat store diawali `use` dan diakhiri `Store`, seperti `useHitungStore`. File-nya diberi nama sesuai topik.

> **Ringkasan:** Store dibuat dengan `defineStore`, berisi `ref` (state), `computed` (getters), dan fungsi (actions), lalu semuanya dikembalikan lewat `return`.

---

## 4. Memakai Store di Komponen

Panggil fungsi `useHitungStore()` di komponen mana pun, lalu pakai isinya.

```vue
<!-- src/components/TombolHitung.vue -->
<script setup>
import { useHitungStore } from '../stores/hitung'

const hitung = useHitungStore()
// hitung berisi semua yang dikembalikan store
</script>

<template>
  <button @click="hitung.tambah">Tambah</button>
  <!-- memanggil action -->
</template>
```

```vue
<!-- src/components/TampilanHitung.vue -->
<script setup>
import { useHitungStore } from '../stores/hitung'

const hitung = useHitungStore()
</script>

<template>
  <p>Angka: {{ hitung.angka }}, dua kali: {{ hitung.duaKali }}</p>
  <!-- di template, state dan getters dipakai tanpa .value -->
</template>
```

Kedua komponen di atas **tidak berhubungan** sebagai induk dan anak, tetapi berbagi data yang sama. Klik tombol di `TombolHitung`, dan angka di `TampilanHitung` otomatis berubah. Tidak ada props dan emit sama sekali.

Perhatikan bahwa `useHitungStore()` mengembalikan **store yang sama** setiap kali dipanggil, dari komponen mana pun.

Di Vue DevTools, tab **Pinia** menampilkan isi store dan perubahannya secara langsung, sangat berguna saat mencari bug.

> **Ringkasan:** Panggil `useXxxStore()` di komponen mana pun untuk memakai data bersama yang sama.

---

## 5. Hati-hati: Destructuring Memutus Reaktivitas

Godaan yang umum adalah memecah store dengan destructuring.

```js
const { angka, tambah } = useHitungStore()
// angka sekarang hanya salinan angka biasa, tidak lagi reaktif
```

Cara yang benar untuk state dan getters adalah `storeToRefs`.

```vue
<script setup>
import { storeToRefs } from 'pinia'
import { useHitungStore } from '../stores/hitung'

const hitung = useHitungStore()
const { angka, duaKali } = storeToRefs(hitung)
// angka dan duaKali tetap reaktif, bisa dipakai di template seperti ref
const { tambah } = hitung
// actions adalah fungsi biasa, boleh di-destructure langsung
</script>

<template>
  <p>{{ angka }} dan {{ duaKali }}</p>
  <button @click="tambah">Tambah</button>
</template>
```

Aturan sederhana: **state dan getters lewat `storeToRefs`, actions langsung**. Atau, paling aman, tidak usah di-destructure dan pakai `hitung.angka` serta `hitung.tambah` seperti contoh sebelumnya.

---

## 6. Contoh: Store Tugas

Store untuk daftar tugas, dengan state, getters, dan actions.

```js
// src/stores/tugas.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTugasStore = defineStore('tugas', () => {
  const daftar = ref([
    { id: 1, teks: 'Belajar Pinia', selesai: false },
    { id: 2, teks: 'Mengerjakan latihan', selesai: true }
  ])
  // state: daftar tugas

  const sisa = computed(() => {
    return daftar.value.filter(t => !t.selesai).length
  })
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

  return { daftar, sisa, tambah, hapus, ubahStatus }
})
```

Dua komponen yang tidak berhubungan sama-sama memakainya.

```vue
<!-- src/components/MenuAtas.vue -->
<script setup>
import { useTugasStore } from '../stores/tugas'

const tugas = useTugasStore()
</script>

<template>
  <header>
    <h1>Tugasku ({{ tugas.sisa }} belum selesai)</h1>
    <!-- header menampilkan jumlah sisa tugas dari store -->
  </header>
</template>
```

```vue
<!-- src/components/DaftarTugas.vue -->
<script setup>
import { useTugasStore } from '../stores/tugas'

const tugas = useTugasStore()
</script>

<template>
  <ul>
    <li v-for="t in tugas.daftar" :key="t.id">
      <input type="checkbox" :checked="t.selesai" @change="tugas.ubahStatus(t.id)">
      {{ t.teks }}
      <button @click="tugas.hapus(t.id)">Hapus</button>
    </li>
  </ul>
</template>
```

Saat tugas dicentang atau dihapus di `DaftarTugas`, angka di `MenuAtas` ikut berubah, tanpa props dan emit.

---

## 7. Menyimpan Store ke localStorage

Data di store hilang saat halaman dimuat ulang. Gunakan `watch` dan `localStorage` dari materi Watch, di dalam store itu sendiri.

```js
// src/stores/tugas.js (versi dengan penyimpanan)
import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useTugasStore = defineStore('tugas', () => {
  const daftar = ref(JSON.parse(localStorage.getItem('tugas') || '[]'))
  // ambil data tersimpan; jika belum ada, mulai dari array kosong

  watch(daftar, (baru) => {
    localStorage.setItem('tugas', JSON.stringify(baru))
  }, { deep: true })
  // simpan setiap kali daftar berubah, termasuk perubahan di dalam item

  const sisa = computed(() => daftar.value.filter(t => !t.selesai).length)

  function tambah(teks) {
    daftar.value.push({ id: Date.now(), teks, selesai: false })
  }

  return { daftar, sisa, tambah }
})
```

Dengan begini, komponen tidak perlu tahu soal penyimpanan. Semua urusan itu terkumpul di satu tempat.

---

## 8. Kapan Memakai Pinia

| Situasi | Pilihan |
|---|---|
| Data hanya dipakai satu komponen | `ref` biasa di komponen itu |
| Data dibagi antara induk dan anak langsung | Props dan emit |
| Data dipakai banyak komponen yang berjauhan | Pinia |
| Data harus bertahan saat pindah halaman | Pinia |

Jangan memindahkan semua data ke Pinia hanya karena bisa. Data yang cuma dipakai satu komponen cukup disimpan di komponen itu sendiri. Pakai Pinia hanya ketika data memang dibagi.

---

## 9. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| Error `getActivePinia()` was called but there was no active Pinia | Lupa `app.use(createPinia())` | Tambahkan di `main.js` |
| Komponen tidak bisa mengakses data store | Lupa memasukkan ke `return` di store | Tambahkan ke `return { ... }` |
| Data tidak reaktif setelah dipecah | Destructuring langsung | Pakai `storeToRefs` atau akses lewat `store.nama` |
| Perubahan tidak tersimpan setelah muat ulang | Tidak ada penyimpanan | Tambahkan `watch` dengan `localStorage` |
| Hasil `JSON.parse` error | `localStorage` berisi teks rusak | Hapus data lama lewat DevTools tab **Application** |

---

## 10. Latihan Singkat

1. Pasang Pinia dan aktifkan di `main.js`.
2. Buat store `hitung` dengan state `angka`, getter `duaKali`, dan action `tambah`.
3. Buat dua komponen terpisah yang memakai store itu: satu tombol dan satu tampilan. Buktikan keduanya terhubung.
4. Buat store `tugas` dengan state, getter jumlah sisa, dan action tambah, hapus, dan ubah status.
5. Pakai store tugas di dua komponen yang tidak berhubungan: header dan daftar.
6. Simpan store tugas ke `localStorage` dengan `watch`, lalu muat ulang halaman untuk membuktikannya.
7. Buka tab **Pinia** di Vue DevTools dan amati perubahan state saat kamu mengklik.

---

## Rangkuman

- Pinia menyimpan data bersama di store, sehingga komponen mana pun bisa memakainya tanpa mengoper props berlapis.
- Store dibuat dengan `defineStore`: `ref` untuk state, `computed` untuk getters, fungsi biasa untuk actions, dan semuanya dikembalikan lewat `return`.
- Komponen memakai store dengan memanggil `useXxxStore()`, dan di template tidak perlu `.value`.
- Jangan destructure state dan getters langsung. Pakai `storeToRefs`, atau akses lewat `store.nama`.
- Store bisa menyimpan data ke `localStorage` dengan `watch`.
- Pakai Pinia hanya untuk data yang dibagi banyak komponen.
