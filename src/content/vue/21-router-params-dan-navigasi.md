---
jenis: murid
bab: vue
urutan: 21
judul: "Router: Parameter dan Navigasi Lewat Kode"
deskripsi: "Membuat route dinamis dengan parameter, membaca useRoute, berpindah halaman dengan useRouter, dan halaman 404."
---

# Router: Parameter dan Navigasi Lewat Kode

Pada materi ini kamu akan mempelajari: cara membuat route dinamis dengan parameter seperti `/tugas/3`, membaca parameter dan query dengan `useRoute`, berpindah halaman lewat kode dengan `useRouter`, memakai nama route, serta membuat halaman 404.

Sebelum mulai, pastikan kamu sudah memahami: Vue Router dasar dari materi Vue Router: Halaman dan Navigasi, `v-for` dari materi sebelumnya, serta query string dari bab Web.

---

## 1. Masalah: Satu Halaman untuk Banyak Data

Bayangkan aplikasi daftar tugas. Kita ingin alamat `/tugas/1`, `/tugas/2`, `/tugas/3` masing-masing menampilkan detail tugas yang berbeda. Membuat satu route dan satu file untuk setiap tugas jelas tidak masuk akal.

Solusinya: **route dinamis**. Satu route dengan bagian alamat yang berubah-ubah, yang disebut **parameter**.

> **Ringkasan:** Route dinamis memakai satu halaman untuk banyak alamat yang polanya sama.

---

## 2. Route dengan Parameter

Tulis parameter dengan diawali titik dua di `path`.

#### Cara menulis

```js
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import BerandaView from '../views/BerandaView.vue'
import DetailTugasView from '../views/DetailTugasView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'beranda', component: BerandaView },
    { path: '/tugas/:id', name: 'detail-tugas', component: DetailTugasView }
    // :id adalah parameter; /tugas/1, /tugas/2, dan /tugas/abc semuanya cocok
  ]
})

export default router
```

Bagian `:id` cocok dengan apa saja di posisi itu. Nilai yang cocok bisa dibaca oleh halaman.

> **Ringkasan:** `path: '/tugas/:id'` membuat satu route yang cocok dengan banyak alamat. `:id` adalah parameter.

---

## 3. Membaca Parameter dengan useRoute

Di halaman, ambil informasi alamat saat ini dengan `useRoute`.

```vue
<!-- src/views/DetailTugasView.vue -->
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// route berisi informasi alamat yang sedang dibuka

const id = computed(() => Number(route.params.id))
// route.params.id selalu berupa teks, jadi diubah menjadi angka dengan Number
</script>

<template>
  <main>
    <h1>Detail Tugas</h1>
    <p>Kamu membuka tugas nomor {{ id }}.</p>
  </main>
</template>
```

Dua hal penting:

- Parameter ada di `route.params`, misalnya `route.params.id`.
- **Parameter selalu berupa teks (string)**, meskipun isinya angka. Jika kamu mencocokkannya dengan `id` bertipe angka, ubah dulu dengan `Number(...)`. Jika tidak, `1 === '1'` bernilai `false`.

Contoh mencari data berdasarkan parameter:

```vue
<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const tugas = ref([
  { id: 1, teks: 'Belajar Vue', selesai: true },
  { id: 2, teks: 'Mengerjakan latihan', selesai: false }
])

const tugasIni = computed(() => {
  return tugas.value.find(t => t.id === Number(route.params.id))
  // find mengembalikan undefined bila tidak ada yang cocok
})
</script>

<template>
  <main v-if="tugasIni">
    <h1>{{ tugasIni.teks }}</h1>
    <p>Status: {{ tugasIni.selesai ? 'Selesai' : 'Belum selesai' }}</p>
  </main>
  <main v-else>
    <h1>Tugas tidak ditemukan</h1>
  </main>
  <!-- v-else penting: alamat /tugas/99 cocok dengan route, tetapi datanya tidak ada -->
</template>
```

Memakai `computed` membuat tampilan otomatis menyesuaikan jika parameter berubah, misalnya saat berpindah dari `/tugas/1` ke `/tugas/2`. Vue memakai ulang komponen yang sama dalam kasus itu, sehingga kode yang hanya ditulis di `onMounted` tidak dijalankan ulang.

> **Ringkasan:** Baca parameter lewat `useRoute().params`. Nilainya selalu teks, jadi ubah dengan `Number(...)` bila perlu.

---

## 4. Link ke Route Dinamis

Pakai `RouterLink` dengan alamat yang disusun dari data.

```vue
<script setup>
import { ref } from 'vue'

const tugas = ref([
  { id: 1, teks: 'Belajar Vue' },
  { id: 2, teks: 'Mengerjakan latihan' }
])
</script>

<template>
  <ul>
    <li v-for="t in tugas" :key="t.id">
      <RouterLink :to="`/tugas/${t.id}`">{{ t.teks }}</RouterLink>
      <!-- :to dengan template literal menghasilkan /tugas/1, /tugas/2, dan seterusnya -->
    </li>
  </ul>
</template>
```

Cara yang lebih rapi dan tidak bergantung pada bentuk alamat adalah memakai **nama route**.

```vue
<RouterLink :to="{ name: 'detail-tugas', params: { id: t.id } }">
  {{ t.teks }}
</RouterLink>
<!-- berpindah ke route bernama detail-tugas dengan parameter id -->
```

Jika suatu hari alamat `/tugas/:id` diganti menjadi `/todo/:id`, link yang memakai nama route tetap bekerja tanpa diubah.

---

## 5. Berpindah Halaman Lewat Kode

`RouterLink` untuk link yang diklik pengguna. Kadang kita perlu berpindah halaman dari kode, misalnya setelah formulir berhasil dikirim. Untuk itu pakai `useRouter`.

```vue
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
// router adalah alat untuk berpindah halaman

function simpan() {
  // ... proses menyimpan data ...
  router.push('/')
  // berpindah ke beranda
}

function lihatDetail(id) {
  router.push({ name: 'detail-tugas', params: { id } })
  // berpindah dengan nama route dan parameter
}

function kembali() {
  router.back()
  // mundur satu langkah, seperti tombol Back di browser
}
</script>

<template>
  <button @click="simpan">Simpan</button>
  <button @click="lihatDetail(2)">Lihat tugas 2</button>
  <button @click="kembali">Kembali</button>
</template>
```

Perhatikan perbedaan dua nama yang mirip:

| Nama | Fungsi |
|---|---|
| `useRoute()` | **Membaca** informasi alamat saat ini (`params`, `query`) |
| `useRouter()` | **Berpindah** halaman (`push`, `back`) |

`route` untuk membaca, `router` untuk bergerak. Tambahan huruf **r** di akhir nama memudahkan mengingatnya: `router` berperan seperti "pengarah jalan".

> **Ringkasan:** `useRoute()` membaca alamat saat ini, `useRouter()` berpindah halaman dengan `push` dan `back`.

---

## 6. Query String

Selain parameter di jalur alamat, ada **query string**, yaitu bagian setelah tanda tanya seperti `/cari?kata=vue`. Bentuk ini sama dengan yang kamu lihat di bab Web dan formulir `method="get"`.

```vue
<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

function cari(kata) {
  router.push({ path: '/cari', query: { kata } })
  // berpindah ke /cari?kata=...
}
</script>

<template>
  <p>Kata kunci: {{ route.query.kata }}</p>
  <!-- route.query berisi pasangan nama dan nilai dari query string -->
</template>
```

| Pakai | Untuk |
|---|---|
| Parameter (`/tugas/3`) | Menunjuk satu data tertentu |
| Query (`/cari?kata=vue`) | Pilihan opsional seperti pencarian dan filter |

---

## 7. Halaman 404

Jika pengguna membuka alamat yang tidak terdaftar, sebaiknya tampilkan halaman khusus. Tambahkan route "tangkap semua" di **paling akhir** daftar route.

```js
// src/router/index.js (di akhir array routes)
{
  path: '/:pathMatch(.*)*',
  name: 'tidak-ditemukan',
  component: () => import('../views/TidakDitemukanView.vue')
}
// cocok dengan alamat apa pun yang tidak cocok dengan route di atasnya
```

```vue
<!-- src/views/TidakDitemukanView.vue -->
<template>
  <main>
    <h1>404</h1>
    <p>Halaman yang kamu cari tidak ditemukan.</p>
    <RouterLink to="/">Kembali ke beranda</RouterLink>
  </main>
</template>
```

Bentuk `() => import(...)` pada contoh di atas disebut *lazy loading*: komponen baru dimuat saat dibutuhkan. Untuk sekarang, anggap itu sebagai cara lain untuk mendaftarkan komponen yang boleh kamu pakai. Mengimpor di bagian atas file juga tetap benar.

Letakkan route ini paling akhir, karena Vue Router memeriksa route dari atas ke bawah, dan route ini cocok dengan semua alamat.

---

## 8. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| Data tidak ditemukan padahal ada | Membandingkan teks parameter dengan angka | `Number(route.params.id)` |
| `route.params.id` bernilai `undefined` | Nama parameter di route berbeda dengan yang dibaca | Samakan: `:id` di route dan `params.id` di kode |
| Tidak bisa berpindah dengan `route.push` | Tertukar `useRoute` dan `useRouter` | `push` ada di `useRouter()` |
| Halaman 404 muncul untuk semua alamat | Route tangkap-semua diletakkan di awal | Pindahkan ke paling akhir |
| Error saat berpindah dengan nama route | Lupa mengirim parameter yang dibutuhkan | Tambahkan `params: { id }` |
| Tampilan tidak berubah saat pindah antar `/tugas/1` dan `/tugas/2` | Data hanya diambil sekali di `onMounted` | Pakai `computed` atau `watch` pada `route.params` |

---

## 9. Latihan Singkat

1. Tambahkan route `/tugas/:id` dan halaman `DetailTugasView` yang menampilkan nomor tugas dari parameter.
2. Cari data tugas berdasarkan id dengan `find`, lalu tampilkan detailnya. Buat pesan "tidak ditemukan" untuk id yang tidak ada.
3. Buat daftar tugas di beranda yang setiap itemnya adalah `RouterLink` ke halaman detailnya.
4. Ubah link itu agar memakai nama route dan `params`.
5. Tambahkan tombol "Kembali" di halaman detail dengan `router.back()`.
6. Buat halaman 404 dengan route tangkap-semua, lalu coba buka alamat sembarang.
7. Buat input pencarian yang berpindah ke `/cari?kata=...` dan tampilkan `route.query.kata`.

---

## Rangkuman

- Route dinamis memakai parameter, seperti `/tugas/:id`, sehingga satu halaman melayani banyak alamat.
- `useRoute()` membaca alamat saat ini (`route.params`, `route.query`), dan parameter selalu berupa teks.
- `useRouter()` berpindah halaman lewat kode dengan `push` dan `back`.
- `RouterLink` dengan nama route dan `params` lebih tahan perubahan alamat daripada menulis alamat langsung.
- Route tangkap-semua `/:pathMatch(.*)*` di akhir daftar membuat halaman 404.
