---
jenis: murid
bab: vue
urutan: 15
judul: "Watch: Bereaksi terhadap Perubahan Data"
deskripsi: "Menjalankan kode saat data berubah dengan watch, perbedaannya dengan computed, serta contoh menyimpan ke localStorage otomatis."
---

# Watch: Bereaksi terhadap Perubahan Data

Pada materi ini kamu akan mempelajari: cara menjalankan kode setiap kali sebuah data berubah dengan `watch`, nilai baru dan nilai lama, memantau isi object atau array dengan `deep`, menjalankan watch saat pertama kali dengan `immediate`, serta perbedaannya dengan `computed`.

Sebelum mulai, pastikan kamu sudah memahami: `ref` dan array reaktif dari materi sebelumnya, `computed` dari materi Computed, serta JSON dan `localStorage` dari bab JavaScript.

---

## 1. Apa itu watch

`computed` menghitung **nilai baru** dari data lain. Namun kadang kita perlu **menjalankan aksi** saat data berubah, misalnya menyimpan ke `localStorage`, mencatat ke Console, atau memanggil server. Untuk itu ada `watch`.

#### Cara menulis

```vue
<script setup>
import { ref, watch } from 'vue'
// watch diimpor dari vue

const nama = ref('')

watch(nama, (baru, lama) => {
  console.log(`Nama berubah dari "${lama}" menjadi "${baru}"`)
  // fungsi ini dijalankan setiap kali nama berubah
})
</script>

<template>
  <input v-model="nama" placeholder="Ketik namamu">
  <p>Buka Console lalu ketik sesuatu.</p>
</template>
```

Penjelasan:

- Parameter pertama adalah **data yang dipantau** (`nama`, tanpa `.value`).
- Parameter kedua adalah **fungsi** yang dijalankan saat data berubah. Fungsi ini menerima **nilai baru** lalu **nilai lama**.
- `watch` tidak menjalankan fungsinya saat halaman pertama dibuka, hanya saat data **berubah**.

> **Ringkasan:** `watch(data, (baru, lama) => { ... })` menjalankan fungsi setiap kali data berubah.

---

## 2. watch atau computed

| | `computed` | `watch` |
|---|---|---|
| Tujuan | Menghasilkan nilai baru dari data lain | Menjalankan aksi saat data berubah |
| Mengembalikan nilai | Ya | Tidak |
| Dipakai di template | Ya | Tidak |
| Contoh | Total harga, hasil pencarian | Simpan ke `localStorage`, panggil API |

Pegangan sederhana: **jika kamu butuh nilai untuk ditampilkan, pakai `computed`. Jika kamu butuh melakukan sesuatu saat data berubah, pakai `watch`.**

Banyak pemula memakai `watch` untuk hal yang seharusnya `computed`, misalnya mengisi data lain saat data berubah. Jika hasil akhirnya hanya turunan dari data lain, `computed` hampir selalu lebih sederhana.

> **Ringkasan:** `computed` untuk nilai turunan, `watch` untuk aksi sampingan saat data berubah.

---

## 3. Memantau Object dan Array: deep

Jika data berupa object atau array, `watch` biasa hanya bereaksi saat **seluruh object diganti**, bukan saat isi di dalamnya berubah. Tambahkan opsi `deep: true` untuk memantau perubahan di dalamnya.

```vue
<script setup>
import { ref, watch } from 'vue'

const tugas = ref([
  { id: 1, teks: 'Belajar Vue', selesai: false }
])

watch(tugas, () => {
  console.log('Isi tugas berubah!')
}, { deep: true })
// deep: true membuat perubahan di dalam array dan object ikut terdeteksi
</script>

<template>
  <button @click="tugas[0].selesai = !tugas[0].selesai">Ubah status</button>
  <button @click="tugas.push({ id: Date.now(), teks: 'Baru', selesai: false })">Tambah</button>
</template>
```

Tanpa `deep: true`, kedua tombol di atas tidak memicu `watch`, karena yang berubah hanya isi di dalam array, bukan array-nya.

Catatan: pada `deep`, nilai baru dan nilai lama merujuk ke object yang sama, sehingga tidak bisa dibandingkan. Cukup gunakan `deep` bila kamu hanya perlu tahu bahwa **sesuatu telah berubah**.

> **Ringkasan:** Gunakan `{ deep: true }` untuk memantau perubahan di dalam object atau array.

---

## 4. Memantau Satu Properti

Untuk memantau satu properti dari sebuah object, bungkus dengan fungsi.

```js
const profil = ref({ nama: 'Budi', umur: 16 })

watch(() => profil.value.umur, (baru) => {
  console.log('Umur sekarang', baru)
  // hanya bereaksi saat umur berubah, bukan saat nama berubah
})
```

Bentuk `() => ...` disebut *getter*, yaitu fungsi yang mengembalikan nilai yang dipantau.

---

## 5. Menjalankan Saat Pertama Kali: immediate

Secara bawaan, `watch` baru bekerja setelah data berubah. Tambahkan `immediate: true` bila fungsinya juga harus dijalankan **sekali di awal**, dengan nilai awal.

```js
watch(kota, (baru) => {
  console.log('Kota dipilih:', baru)
}, { immediate: true })
// langsung dijalankan sekali saat komponen dibuat, lalu setiap data berubah
```

Pola ini berguna, misalnya, untuk memuat data dari server sesuai nilai awal sebuah pilihan.

---

## 6. Contoh: Menyimpan ke localStorage Otomatis

Pemakaian `watch` yang paling umum di aplikasi kecil: menyimpan data ke `localStorage` setiap kali berubah.

```vue
<script setup>
import { ref, watch } from 'vue'

const catatan = ref(localStorage.getItem('catatan') || '')
// ambil catatan yang tersimpan; jika belum ada, mulai dari teks kosong

watch(catatan, (baru) => {
  localStorage.setItem('catatan', baru)
  // simpan setiap kali isi catatan berubah
})
</script>

<template>
  <h2>Catatan</h2>
  <textarea v-model="catatan" rows="6" cols="40"></textarea>
  <p>Muat ulang halaman: catatanmu tetap ada.</p>
</template>
```

Untuk data berupa array atau object, ubah ke teks dengan JSON, seperti di bab JavaScript.

```vue
<script setup>
import { ref, watch } from 'vue'

const tugas = ref(JSON.parse(localStorage.getItem('tugas') || '[]'))
// JSON.parse mengubah teks kembali menjadi array

watch(tugas, (baru) => {
  localStorage.setItem('tugas', JSON.stringify(baru))
  // JSON.stringify mengubah array menjadi teks agar bisa disimpan
}, { deep: true })
// deep: true agar perubahan di dalam array ikut tersimpan
</script>
```

Pola ini akan kita pakai lagi di proyek akhir.

> **Ringkasan:** `watch` dengan `localStorage` membuat data tersimpan otomatis. Untuk array dan object, ubah dengan `JSON.stringify` dan `JSON.parse`, serta tambahkan `deep: true`.

---

## 7. Contoh: Bereaksi terhadap Pencarian

`watch` juga cocok untuk aksi yang bergantung pada input, misalnya memberi tahu pengguna bila hasil pencarian kosong.

```vue
<script setup>
import { ref, watch } from 'vue'

const kataKunci = ref('')
const pesan = ref('')

watch(kataKunci, (baru) => {
  if (baru.length > 0 && baru.length < 3) {
    pesan.value = 'Ketik minimal 3 huruf.'
  } else {
    pesan.value = ''
  }
})
</script>

<template>
  <input v-model="kataKunci" placeholder="Cari...">
  <p v-if="pesan">{{ pesan }}</p>
</template>
```

---

## 8. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| `watch` tidak berjalan saat isi array berubah | Lupa `deep: true` | Tambahkan `{ deep: true }` |
| `watch` tidak bereaksi pada properti object | Menulis `watch(profil.value.umur, ...)` | Bungkus dengan fungsi: `watch(() => profil.value.umur, ...)` |
| `watch` tidak berjalan saat halaman dibuka | `watch` hanya bereaksi pada perubahan | Tambahkan `{ immediate: true }` bila perlu |
| Error `watch is not defined` | Lupa mengimpor | `import { ref, watch } from 'vue'` |
| Data lain diisi dari dalam `watch` padahal hanya turunan | Seharusnya `computed` | Pindahkan ke `computed` |

---

## 9. Latihan Singkat

1. Buat input nama dan `watch` yang mencatat nilai lama dan baru ke Console.
2. Buat `ref` array, lalu `watch` dengan `deep: true` yang mencatat saat isinya berubah. Bandingkan dengan tanpa `deep`.
3. Buat catatan yang tersimpan otomatis ke `localStorage`, lalu muat ulang halaman untuk membuktikannya.
4. Buat daftar tugas yang tersimpan sebagai JSON di `localStorage`.
5. Buat input yang menampilkan pesan peringatan bila isinya kurang dari tiga huruf.
6. Tulis ulang salah satu latihan di atas memakai `computed` bila memungkinkan, lalu jelaskan kapan `watch` lebih tepat.

---

## Rangkuman

- `watch(data, (baru, lama) => { ... })` menjalankan fungsi setiap kali data berubah, dan tidak berjalan saat pertama kali.
- `computed` menghasilkan nilai turunan untuk ditampilkan, sedangkan `watch` menjalankan aksi saat data berubah.
- Pakai `{ deep: true }` untuk memantau perubahan di dalam object atau array, dan `{ immediate: true }` untuk menjalankan sekali di awal.
- Untuk memantau satu properti, bungkus dengan fungsi: `watch(() => objek.value.properti, ...)`.
- Pemakaian paling umum: menyimpan data ke `localStorage` secara otomatis.
