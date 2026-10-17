---
jenis: murid
bab: vue
urutan: 5
judul: "Data Reaktif dengan ref"
deskripsi: "Menyimpan data yang otomatis memperbarui tampilan dengan ref, mengakses nilainya lewat .value di script, dan kesalahan umum pemula."
---

# Data Reaktif dengan ref

Pada materi ini kamu akan mempelajari: mengapa variabel biasa tidak memperbarui tampilan, cara membuat data reaktif dengan `ref`, aturan `.value` di script dan template, serta kesalahan umum yang sering dialami pemula.

Sebelum mulai, pastikan kamu sudah memahami: interpolasi dari materi Template dan Interpolasi, serta `let`, `const`, dan fungsi dari bab JavaScript.

---

## 1. Variabel Biasa Tidak Memperbarui Tampilan

Coba kode berikut. Tombol mengubah variabel `hitungan`, tetapi tampilan tidak berubah.

```vue
<script setup>
let hitungan = 0

function tambah() {
  hitungan++
  console.log(hitungan)
  // nilai di Console bertambah, tetapi tampilan tetap 0
}
</script>

<template>
  <p>Hitungan: {{ hitungan }}</p>
  <button @click="tambah">Tambah</button>
  <!-- @click dibahas di materi Event dengan v-on -->
</template>
```

Klik tombol dan buka Console. Angka di Console bertambah, tetapi halaman tetap menampilkan 0. Alasannya, Vue tidak tahu bahwa variabel `hitungan` berubah. Variabel biasa tidak dipantau.

> **Ringkasan:** Variabel biasa tidak dipantau Vue, sehingga perubahannya tidak memperbarui tampilan.

---

## 2. ref: Data yang Dipantau Vue

`ref` membuat data **reaktif**, yaitu data yang dipantau Vue. Setiap kali nilainya berubah, tampilan yang memakainya diperbarui otomatis.

#### Cara menulis

```vue
<script setup>
import { ref } from 'vue'
// ref harus diimpor dari vue

const hitungan = ref(0)
// membuat data reaktif dengan nilai awal 0

function tambah() {
  hitungan.value++
  // di script, nilai ref diakses lewat .value
}
</script>

<template>
  <p>Hitungan: {{ hitungan }}</p>
  <!-- di template, ditulis tanpa .value -->
  <button @click="tambah">Tambah</button>
</template>
```

Sekarang setiap klik tombol menambah angka di halaman. Perubahan data otomatis sampai ke tampilan, dan kamu tidak perlu menyentuh DOM.

> **Ringkasan:** `ref(nilaiAwal)` membuat data reaktif. Setiap perubahan nilainya memperbarui tampilan.

---

## 3. Aturan .value

Ini bagian yang paling sering membingungkan pemula, jadi perhatikan baik-baik.

`ref(0)` tidak menghasilkan angka `0`. Ia menghasilkan sebuah **object** yang membungkus nilai itu, dan nilainya disimpan di properti `.value`.

```js
const hitungan = ref(0)

console.log(hitungan)
// tampil object (bukan angka 0)
console.log(hitungan.value)
// tampil 0

hitungan.value = 5
// mengubah nilai
hitungan.value++
// sekarang 6
```

| Tempat | Cara menulis |
|---|---|
| Di `<script>` | `hitungan.value` |
| Di `<template>` | `hitungan` (tanpa `.value`) |

Di template, Vue otomatis membuka bungkusnya, sehingga `.value` tidak perlu (dan tidak boleh) ditulis.

Mengapa dibuat begitu? Karena JavaScript tidak bisa memantau variabel angka atau teks biasa. Dengan membungkusnya dalam object, Vue bisa mengetahui kapan `.value` dibaca dan diubah.

> **Catatan:** Jika tampilan tidak berubah atau muncul nilai aneh seperti `[object Object]`, kemungkinan besar kamu lupa menulis `.value` di `<script>`.

> **Ringkasan:** Di `<script>`, akses ref lewat `.value`. Di `<template>`, tulis namanya saja.

---

## 4. ref untuk Berbagai Jenis Data

`ref` bisa menyimpan semua jenis data.

```vue
<script setup>
import { ref } from 'vue'

const nama = ref('Budi')
// teks
const umur = ref(16)
// angka
const aktif = ref(true)
// boolean
const hobi = ref(['ngoding', 'membaca'])
// array (dibahas lebih lanjut di materi berikutnya)
const profil = ref({ nama: 'Budi', kota: 'Surabaya' })
// object (dibahas lebih lanjut di materi berikutnya)
</script>

<template>
  <p>{{ nama }}, {{ umur }} tahun</p>
  <button @click="aktif = !aktif">Ubah status</button>
  <!-- di template, ref boleh diubah langsung -->
  <p>Status: {{ aktif ? 'Aktif' : 'Nonaktif' }}</p>
</template>
```

Di template, kamu boleh mengubah ref secara langsung, seperti `aktif = !aktif`, untuk ekspresi pendek. Untuk logika yang lebih panjang, buat fungsi di `<script>` lalu panggil dari template.

---

## 5. const atau let?

Perhatikan bahwa ref dideklarasikan dengan **`const`**, padahal nilainya berubah.

```js
const hitungan = ref(0)
hitungan.value++
// boleh, karena yang berubah adalah isi object, bukan variabel hitungan
```

`const` hanya melarang mengganti **variabel**-nya dengan nilai lain, seperti `hitungan = 5`. Mengubah `hitungan.value` tidak melanggar aturan itu. Karena itu, kebiasaan yang baik adalah selalu memakai `const` untuk ref.

> **Ringkasan:** Pakai `const` untuk ref. Yang berubah adalah `.value`, bukan variabelnya.

---

## 6. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| Tampilan tidak berubah | Memakai variabel biasa, bukan `ref` | Buat dengan `ref(...)` |
| Error `ref is not defined` | Lupa `import { ref } from 'vue'` | Tambahkan import |
| Hasil `[object Object]` atau perubahan tidak terbaca | Lupa `.value` di `<script>` | Tulis `nama.value` |
| Error atau tampilan kosong di template | Menulis `.value` di `<template>` | Tulis nama ref saja |
| `hitungan = 5` tidak mengubah apa pun, atau error | Mengganti ref dengan angka, bukan mengubah `.value` | Tulis `hitungan.value = 5` |

---

## 7. Latihan Singkat

1. Tulis ulang contoh penghitung dari bagian 1 dengan `ref`, lalu pastikan tampilan berubah saat tombol diklik.
2. Tambahkan tombol "Kurangi" dan "Reset" untuk penghitung itu.
3. Buat `ref` bernama `nama`, lalu tambahkan tombol yang mengganti nilainya menjadi nama lain.
4. Buat `ref` boolean `gelap`, lalu tampilkan teks "Mode gelap" atau "Mode terang" yang berubah saat tombol diklik.
5. Cetak sebuah ref dengan `console.log(hitungan)` dan `console.log(hitungan.value)`, lalu bandingkan hasilnya.
6. Kembali ke latihan nomor 4 di materi Komponen dan File .vue, lalu lengkapi komponen `TombolHitung.vue` dan buktikan dua salinannya menghitung sendiri-sendiri.

---

## Rangkuman

- Variabel biasa tidak dipantau Vue, jadi perubahannya tidak memperbarui tampilan.
- `ref(nilaiAwal)` membuat data reaktif, dan perubahan nilainya otomatis memperbarui tampilan.
- Di `<script>`, nilai ref diakses lewat `.value`. Di `<template>`, ditulis tanpa `.value`.
- Deklarasikan ref dengan `const`, karena yang berubah adalah `.value`.
- Kesalahan paling umum: memakai variabel biasa, lupa import, dan salah menaruh `.value`.
