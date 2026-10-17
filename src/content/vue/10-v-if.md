---
jenis: murid
bab: vue
urutan: 10
judul: "Tampilan Bersyarat dengan v-if"
deskripsi: "Menampilkan atau menghilangkan elemen berdasarkan kondisi dengan v-if, v-else-if, v-else, dan template, serta memahami apa yang terjadi di DOM."
---

# Tampilan Bersyarat dengan v-if

Pada materi ini kamu akan mempelajari: cara menampilkan atau menghilangkan elemen berdasarkan kondisi dengan `v-if`, memakai `v-else-if` dan `v-else` untuk beberapa kemungkinan, mengelompokkan banyak elemen dengan `template`, serta apa yang sebenarnya terjadi pada elemen di DOM.

Sebelum mulai, pastikan kamu sudah memahami: `ref` dari materi Data Reaktif dengan ref, event dari materi Event dengan v-on, serta kondisi (`if`, `else`, truthy dan falsy) dari bab JavaScript.

---

## 1. Apa itu v-if

Di bab JavaScript, kamu memakai `if` untuk memilih kode mana yang dijalankan. Di template Vue, `v-if` melakukan hal serupa, tetapi untuk memilih **elemen mana yang tampil**.

`v-if` adalah **directive**, yaitu atribut khusus Vue yang diawali `v-`. Nilainya adalah ekspresi JavaScript. Jika hasilnya truthy, elemen tampil. Jika falsy, elemen tidak ada di halaman.

#### Cara menulis

```vue
<script setup>
import { ref } from 'vue'

const tampil = ref(false)
// tampil adalah data reaktif, awalnya false
</script>

<template>
  <button @click="tampil = !tampil">Tampilkan / Sembunyikan</button>
  <!-- setiap klik membalik nilai tampil: false jadi true, true jadi false -->
  <p v-if="tampil">Halo, aku muncul!</p>
  <!-- p hanya ada di halaman saat tampil bernilai true -->
</template>
```

Saat tombol diklik, nilai `tampil` berubah, dan Vue otomatis memperbarui halaman. Kamu tidak perlu menulis `querySelector` atau `appendChild` seperti di bab JavaScript.

> **Catatan:** Di dalam `<template>`, ref dipakai tanpa `.value`. Di dalam `<script>`, ref harus ditulis dengan `.value`. Hal ini dibahas di materi Data Reaktif dengan ref.

> **Ringkasan:** `v-if="kondisi"` menampilkan elemen jika kondisi truthy, dan menghilangkannya jika falsy.

---

## 2. v-else

`v-else` menampilkan elemen lain ketika kondisi `v-if` tidak terpenuhi.

#### Cara menulis

```vue
<script setup>
import { ref } from 'vue'

const sudahLogin = ref(false)
</script>

<template>
  <p v-if="sudahLogin">Selamat datang kembali!</p>
  <!-- tampil jika sudahLogin true -->
  <p v-else>Silakan login dulu.</p>
  <!-- tampil jika sudahLogin false -->
  <button @click="sudahLogin = !sudahLogin">Ubah status</button>
</template>
```

Aturan penting: elemen `v-else` harus **berada tepat setelah** elemen `v-if`. Jika ada elemen lain di antaranya, Vue tidak mengenalinya dan menampilkan error.

```vue
<!-- Salah: ada elemen lain di antara v-if dan v-else -->
<p v-if="sudahLogin">Selamat datang!</p>
<hr>
<p v-else>Silakan login.</p>
```

> **Ringkasan:** `v-else` adalah pasangan `v-if`, dan harus langsung menempel setelahnya.

---

## 3. v-else-if

Untuk lebih dari dua kemungkinan, sisipkan `v-else-if` di antara `v-if` dan `v-else`. Cara berpikirnya sama dengan `if`, `else if`, `else` di JavaScript.

#### Cara menulis

```vue
<script setup>
import { ref } from 'vue'

const nilai = ref(75)
</script>

<template>
  <p v-if="nilai >= 90">Predikat A</p>
  <!-- dicek pertama -->
  <p v-else-if="nilai >= 75">Predikat B</p>
  <!-- dicek jika kondisi di atas false -->
  <p v-else-if="nilai >= 60">Predikat C</p>
  <p v-else>Perlu belajar lagi</p>
  <!-- tampil jika semua kondisi di atas false -->

  <input type="number" v-model="nilai">
  <!-- v-model dibahas di materi Formulir dengan v-model -->
</template>
```

Vue memeriksa dari atas ke bawah dan hanya menampilkan **satu** elemen, yaitu yang kondisinya pertama kali terpenuhi. Urutan kondisi penting: jika `nilai >= 60` ditaruh paling atas, nilai 95 akan ikut tampil sebagai C.

Kondisi di `v-if` boleh berupa ekspresi apa saja, termasuk operator perbandingan dan logika dari bab JavaScript.

```vue
<p v-if="umur >= 17 && sudahDaftar">Boleh masuk</p>
<!-- && : kedua syarat harus terpenuhi -->
<p v-if="!sudahLogin">Kamu belum login</p>
<!-- ! : membalik nilai boolean -->
<p v-if="daftar.length === 0">Daftar masih kosong</p>
<!-- contoh yang sering dipakai: cek apakah array kosong -->
```

> **Ringkasan:** `v-else-if` menambah kemungkinan di tengah. Hanya satu elemen yang tampil, dan urutan kondisi berpengaruh.

---

## 4. Mengelompokkan dengan template

`v-if` ditulis pada satu elemen. Jika ingin menampilkan atau menyembunyikan **beberapa elemen sekaligus**, bungkus dengan `<template>`.

#### Cara menulis

```vue
<template>
  <template v-if="sudahLogin">
    <h2>Dashboard</h2>
    <p>Halo, {{ nama }}!</p>
    <button>Keluar</button>
  </template>
  <!-- template tidak ikut muncul di halaman, hanya isinya -->
  <template v-else>
    <h2>Masuk</h2>
    <button>Login</button>
  </template>
</template>
```

Elemen `<template>` hanya berfungsi sebagai pembungkus untuk Vue. Di halaman akhir, tag `<template>` tidak ada, sehingga struktur HTML kamu tetap bersih tanpa `div` tambahan.

> **Ringkasan:** `<template v-if>` mengontrol beberapa elemen sekaligus tanpa menambah pembungkus di halaman.

---

## 5. Apa yang Terjadi di DOM

Ketika kondisi `v-if` bernilai falsy, elemen **benar-benar dihapus dari DOM**, bukan hanya disembunyikan. Saat kondisi kembali truthy, Vue membuat elemen itu dari awal.

Kamu bisa melihatnya langsung:

1. Jalankan contoh pada bagian 1, lalu tekan `F12` dan buka tab **Elements**.
2. Saat `tampil` bernilai `false`, tidak ada `<p>` di sana. Vue hanya meninggalkan komentar `<!--v-if-->` sebagai penanda posisi.
3. Klik tombol, lalu perhatikan `<p>` muncul. Klik lagi, dan ia hilang kembali.

Akibatnya:

- Jika elemen berisi komponen atau isian formulir, isiannya akan **hilang** saat elemen dihapus lalu dibuat ulang.
- Mengganti elemen berkali-kali punya biaya kecil karena elemen dibuat dan dihapus. Untuk elemen yang sering bolak-balik tampil, ada alternatif `v-show` yang dibahas di materi berikutnya.

> **Ringkasan:** `v-if` menambah dan menghapus elemen dari DOM. Elemen yang tidak tampil tidak ada sama sekali di halaman.

---

## 6. Pola yang Sering Dipakai

Tiga pola ini akan sering kamu temui.

```vue
<p v-if="daftar.length === 0">Belum ada tugas.</p>
<!-- pola 1: pesan saat daftar kosong -->
<p v-if="loading">Memuat data...</p>
<!-- pola 2: tanda sedang memuat, dibahas lagi di materi fetch -->
<p v-if="error" class="pesan-error">{{ error }}</p>
<!-- pola 3: menampilkan pesan error hanya jika ada -->
```

> **Catatan:** Jangan menaruh `v-if` dan `v-for` pada elemen yang sama. Bungkus dengan `template` atau saring datanya dulu dengan `computed`. Keduanya dibahas di materi berikutnya.

---

## 7. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| Error saat memakai `v-else` | Ada elemen lain di antara `v-if` dan `v-else` | Letakkan `v-else` tepat setelah `v-if` |
| Kondisi tidak pernah berubah | Variabel ditulis tanpa `ref`, jadi bukan data reaktif | Buat dengan `ref(...)` |
| Di `<script>`, kondisi selalu truthy | Menulis `if (tampil)` tanpa `.value`, padahal ref adalah object | Tulis `if (tampil.value)` |
| Elemen tidak tampil padahal harusnya tampil | Nilai kondisi bertipe teks, misalnya `"false"` yang truthy | Pakai nilai boolean, bukan teks |

---

## 8. Latihan Singkat

1. Buat tombol yang memunculkan dan menyembunyikan sebuah paragraf, lalu amati tab **Elements** di DevTools.
2. Buat tombol "Login" dan "Logout" yang mengubah `sudahLogin`, lalu tampilkan salam berbeda dengan `v-if` dan `v-else`.
3. Buat input angka untuk nilai, lalu tampilkan predikat A, B, C, atau D memakai `v-else-if`.
4. Bungkus judul, paragraf, dan tombol dalam satu `<template v-if>`.
5. Buat `ref` berisi array kosong, tampilkan pesan "Belum ada data" saat panjang array nol, lalu tambah isi array dengan tombol.

---

## Rangkuman

- `v-if="kondisi"` menampilkan elemen jika kondisi truthy dan menghapusnya dari DOM jika falsy.
- `v-else` dan `v-else-if` harus ditulis tepat setelah elemen `v-if`, dan hanya satu elemen yang tampil.
- `<template v-if>` mengontrol beberapa elemen sekaligus tanpa pembungkus tambahan.
- Elemen yang tidak tampil benar-benar tidak ada di DOM, dan isiannya dibuat ulang saat tampil kembali.
- Pola yang umum: pesan saat daftar kosong, status loading, dan pesan error.
