---
jenis: murid
bab: vue
urutan: 23
judul: "Mengambil Data dari API di Vue"
deskripsi: "Memakai fetch di dalam komponen dengan onMounted, menampilkan status loading dan error dengan v-if, serta menampilkan data API publik."
---

# Mengambil Data dari API di Vue

Pada materi ini kamu akan mempelajari: cara mengambil data dari API memakai `fetch` di dalam komponen Vue, menjalankannya dengan `onMounted`, menampilkan status loading dan error dengan `v-if`, mengambil ulang data saat parameter berubah, serta mencari dan menyaring data hasil fetch.

Sebelum mulai, pastikan kamu sudah memahami: `fetch`, `async`/`await`, dan `try`/`catch` dari bab JavaScript, `onMounted` dari materi Lifecycle Hooks, `v-if` dan `v-for` dari materi sebelumnya, serta konsep API dan JSON dari bab Web.

---

## 1. Pola Dasar

Di bab JavaScript, kamu mengambil data dengan `fetch` lalu menyusun elemen lewat DOM. Di Vue, pola yang sama dipakai, tetapi hasilnya disimpan di `ref`, dan tampilan mengikuti otomatis.

Pola lengkapnya memakai **tiga data**:

| Data | Fungsi |
|---|---|
| `data` | Menyimpan hasil dari server |
| `loading` | Menandai bahwa data sedang diambil |
| `error` | Menyimpan pesan bila gagal |

Dengan tiga data ini, tampilan punya tiga keadaan yang jelas: memuat, gagal, dan berhasil.

> **Ringkasan:** Simpan hasil fetch di `ref`, ditambah penanda `loading` dan `error` untuk mengatur tampilan.

---

## 2. Contoh Lengkap

Contoh ini memakai API publik JSONPlaceholder, yang menyediakan data contoh untuk latihan.

```vue
<!-- src/components/DaftarArtikel.vue -->
<script setup>
import { ref, onMounted } from 'vue'

const artikel = ref([])
// hasil dari server; awalnya array kosong
const loading = ref(true)
// awalnya true karena pengambilan data langsung dimulai
const error = ref('')
// awalnya kosong; berisi pesan bila ada kesalahan

async function ambilArtikel() {
  try {
    const respons = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    // mengambil 10 artikel dari server

    if (!respons.ok) {
      throw new Error('Gagal mengambil data (status ' + respons.status + ')')
      // fetch tidak error untuk status 404 atau 500, jadi kita periksa sendiri
    }

    artikel.value = await respons.json()
    // mengubah isi respons dari JSON menjadi array
  } catch (e) {
    error.value = e.message
    // simpan pesan error agar bisa ditampilkan
  } finally {
    loading.value = false
    // dijalankan baik berhasil maupun gagal: loading selesai
  }
}

onMounted(ambilArtikel)
// jalankan ambilArtikel sekali saat komponen tampil
</script>

<template>
  <p v-if="loading">Memuat artikel...</p>
  <p v-else-if="error" class="error">Terjadi kesalahan: {{ error }}</p>
  <ul v-else>
    <li v-for="a in artikel" :key="a.id">
      <strong>{{ a.title }}</strong>
    </li>
  </ul>
  <!-- tiga keadaan: memuat, gagal, atau berhasil -->
</template>

<style scoped>
.error {
  color: crimson;
}
</style>
```

Urutan kejadiannya:

1. Komponen tampil, `loading` bernilai `true`, sehingga tampil "Memuat artikel...".
2. `onMounted` menjalankan `ambilArtikel`, yang meminta data ke server.
3. Jika berhasil, `artikel` terisi. Jika gagal, `error` terisi.
4. `finally` mengubah `loading` menjadi `false`, dan tampilan beralih ke daftar atau pesan error.

Perhatikan bagaimana tidak ada kode untuk menyentuh DOM. Kita hanya mengubah data, dan `v-if`, `v-else-if`, serta `v-for` yang mengatur tampilan.

> **Catatan:** Tulis `onMounted(ambilArtikel)` tanpa tanda kurung. Dengan kurung, fungsi dijalankan saat itu juga, bukan saat komponen sudah tampil.

> **Ringkasan:** Ambil data di `onMounted` dengan `try`/`catch`/`finally`, lalu atur tampilan dengan `v-if` berdasarkan `loading` dan `error`.

---

## 3. Memeriksa respons.ok

`fetch` hanya gagal (masuk ke `catch`) jika **jaringan bermasalah**, misalnya tidak ada internet. Jika server membalas dengan status 404 atau 500, `fetch` tetap dianggap berhasil.

Karena itu, selalu periksa `respons.ok`.

```js
const respons = await fetch(alamat)
if (!respons.ok) {
  throw new Error('Status ' + respons.status)
  // melempar error agar ditangkap oleh catch
}
```

Untuk mencoba tampilan error, ubah alamat menjadi alamat yang salah, misalnya `https://jsonplaceholder.typicode.com/halaman-salah`, lalu lihat pesan error muncul. Kamu juga bisa mematikan koneksi internet sementara untuk menguji.

---

## 4. Mencari dan Menyaring Hasil Fetch

Data hasil fetch bisa diproses seperti array biasa, misalnya dengan `computed` dari materi Computed.

```vue
<script setup>
import { ref, computed, onMounted } from 'vue'

const artikel = ref([])
const loading = ref(true)
const error = ref('')
const kataKunci = ref('')

const hasil = computed(() => {
  return artikel.value.filter(a =>
    a.title.toLowerCase().includes(kataKunci.value.toLowerCase())
  )
  // menyaring judul berdasarkan kata kunci, tanpa membedakan huruf besar kecil
})

async function ambilArtikel() {
  try {
    const respons = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=30')
    if (!respons.ok) throw new Error('Status ' + respons.status)
    artikel.value = await respons.json()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}

onMounted(ambilArtikel)
</script>

<template>
  <input v-model="kataKunci" placeholder="Cari judul...">
  <p v-if="loading">Memuat...</p>
  <p v-else-if="error">Gagal: {{ error }}</p>
  <p v-else-if="hasil.length === 0">Tidak ada yang cocok.</p>
  <ul v-else>
    <li v-for="a in hasil" :key="a.id">{{ a.title }}</li>
  </ul>
</template>
```

Data diambil sekali dari server, lalu pencarian dilakukan di browser dengan `computed`. Tidak ada permintaan baru ke server setiap kali mengetik.

---

## 5. Mengambil Ulang Saat Parameter Berubah

Di materi Router: Parameter dan Navigasi Lewat Kode, kamu belajar bahwa halaman `/tugas/1` dan `/tugas/2` memakai komponen yang sama. Jika data diambil dengan `onMounted`, pindah dari tugas 1 ke tugas 2 tidak mengambil data baru, karena komponen tidak dibuat ulang.

Solusinya: pakai `watch` dengan `immediate: true`, sehingga data diambil saat pertama kali dan setiap parameter berubah.

```vue
<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const tugas = ref(null)
const loading = ref(true)
const error = ref('')

async function ambilTugas(id) {
  loading.value = true
  error.value = ''
  // atur ulang keadaan sebelum mengambil data baru
  try {
    const respons = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if (!respons.ok) throw new Error('Status ' + respons.status)
    tugas.value = await respons.json()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}

watch(() => route.params.id, (idBaru) => {
  ambilTugas(idBaru)
}, { immediate: true })
// immediate: true menjalankan sekali saat awal, lalu setiap id berubah
</script>

<template>
  <p v-if="loading">Memuat...</p>
  <p v-else-if="error">Gagal: {{ error }}</p>
  <main v-else>
    <h1>{{ tugas.title }}</h1>
    <p>Status: {{ tugas.completed ? 'Selesai' : 'Belum selesai' }}</p>
  </main>
</template>
```

Dengan pola ini, `onMounted` tidak diperlukan, karena `watch` dengan `immediate` sudah menjalankan pengambilan data di awal.

> **Ringkasan:** Untuk data yang bergantung pada parameter, pakai `watch(..., { immediate: true })` agar data diambil ulang setiap parameter berubah.

---

## 6. Mengirim Data dengan POST

Selain mengambil, `fetch` juga bisa mengirim data. Contoh mengirim tugas baru ke server latihan:

```js
async function kirimTugas(teks) {
  try {
    const respons = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // memberi tahu server bahwa isi kiriman berupa JSON
      body: JSON.stringify({ title: teks, completed: false })
      // mengubah object menjadi teks JSON untuk dikirim
    })
    if (!respons.ok) throw new Error('Status ' + respons.status)
    const hasil = await respons.json()
    console.log('Server membalas:', hasil)
  } catch (e) {
    console.error(e.message)
  }
}
```

JSONPlaceholder hanya pura-pura menyimpan data. Balasannya terlihat benar, tetapi data tidak benar-benar tersimpan. Untuk menyimpan data sungguhan, kamu butuh backend, yang dibahas di bab backend.

---

## 7. Menyederhanakan dengan Fungsi Bantu

Pola `data`, `loading`, dan `error` akan kamu tulis berulang di banyak komponen. Kamu boleh memindahkannya ke satu fungsi sendiri, yang dalam dunia Vue disebut **composable**.

```js
// src/composables/useFetch.js
import { ref } from 'vue'

export function useFetch(alamat) {
  const data = ref(null)
  const loading = ref(true)
  const error = ref('')

  async function muat() {
    loading.value = true
    error.value = ''
    try {
      const respons = await fetch(alamat)
      if (!respons.ok) throw new Error('Status ' + respons.status)
      data.value = await respons.json()
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  muat()
  // langsung mengambil data saat fungsi dipanggil

  return { data, loading, error, muat }
}
```

```vue
<script setup>
import { useFetch } from '../composables/useFetch'

const { data: artikel, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
// data diganti nama menjadi artikel; ref hasil destructuring tetap reaktif karena ini objek biasa berisi ref
</script>

<template>
  <p v-if="loading">Memuat...</p>
  <p v-else-if="error">Gagal: {{ error }}</p>
  <ul v-else>
    <li v-for="a in artikel" :key="a.id">{{ a.title }}</li>
  </ul>
</template>
```

Bagian ini bersifat tambahan. Kamu boleh melewatinya dulu, dan kembali setelah merasa nyaman dengan pola di bagian 2. Ide dasarnya: kode yang berulang bisa dipindahkan ke fungsi, sama seperti di bab JavaScript.

---

## 8. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| Daftar tidak muncul | Lupa `.value` saat mengisi: `artikel = await ...` | Tulis `artikel.value = await ...` |
| Error `Cannot read properties of null` | Template memakai `data.title` saat `data` masih `null` | Bungkus dengan `v-if`, atau tunggu `loading` selesai |
| Pesan error tidak muncul padahal server error | Lupa memeriksa `respons.ok` | Tambahkan pengecekan dan `throw new Error` |
| Loading tidak pernah selesai | `loading.value = false` tidak dipanggil saat gagal | Taruh di `finally` |
| Data diambil berulang tanpa henti | Memanggil fetch langsung di `<script setup>` dalam `watch` atau `computed` | Panggil di `onMounted` atau `watch` yang tepat |
| Error CORS di Console | Server tujuan tidak mengizinkan akses dari browser | Pakai API yang mengizinkan, atau atur di backend |

---

## 9. Latihan Singkat

1. Ambil 10 artikel dari JSONPlaceholder dan tampilkan judulnya dengan `v-for`.
2. Tambahkan status `loading` dan `error`, lalu ujilah dengan alamat yang salah.
3. Tambahkan input pencarian dengan `computed` yang menyaring judul.
4. Ubah `_limit` menjadi nilai dari `ref`, lalu buat tombol "Muat lebih banyak" yang menambah nilainya.
5. Buat halaman detail dengan route `/artikel/:id` yang mengambil satu artikel dengan `watch` dan `immediate`.
6. Pindahkan pola `data`, `loading`, dan `error` ke composable `useFetch`, lalu pakai di dua komponen berbeda.

---

## Rangkuman

- Hasil `fetch` disimpan di `ref`, ditambah `loading` dan `error` untuk mengatur tampilan dengan `v-if`.
- Ambil data di `onMounted`, dan selalu periksa `respons.ok` karena `fetch` tidak gagal untuk status 404 atau 500.
- Pakai `try`, `catch`, dan `finally` agar `loading` selalu selesai, baik berhasil maupun gagal.
- Hasil fetch bisa diproses dengan `computed`, misalnya untuk pencarian dan filter.
- Untuk data yang bergantung pada parameter route, pakai `watch(..., { immediate: true })`.
- Kode pengambilan data yang berulang bisa dipindahkan ke fungsi bantu (composable).
