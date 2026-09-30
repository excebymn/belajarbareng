---
jenis: pengajar
pertemuan: 1
judul: "JavaScript Dasar dan Pengenalan Vue"
deskripsi: "Contekan live coding pertemuan 1."
---

# Modul Pengajar: JavaScript Dasar + Vue

Scope materi: dari JavaScript dasar sampai **Component + Import**.

| Blok | Isi | Jeda |
|---|---|---|
| 1 | JavaScript dasar, struktur `.vue` | Jeda |
| 2 | `ref`, event, `v-if` | Jeda |
| 3 | `v-for`, input HTML, `v-model` | Jeda |
| 4 | Form, component + import | Selesai |

Roadmap:

```text
JavaScript dasar -> Struktur .vue -> Interpolation -> ref -> Event
-> v-if -> v-for -> Input HTML -> v-model -> Form -> Component + Import
```

Catatan: komentar di dalam kode diletakkan tepat di bawah baris yang dijelaskan.

---

# BLOK 1

## 1. JavaScript Dasar

### 1.a Variable

- **Apa itu variable:** tempat menyimpan nilai dan diberi nama.

```js
let nama = 'Bima'
// membuat variable bernama "nama" yang isinya 'Bima'
console.log(nama)
// menampilkan isi variable "nama" di console
```

- **`let`:** variable yang nilainya boleh diganti.

```js
let skor = 0
// buat variable "skor" dengan nilai awal 0
skor = 10
// ganti isinya jadi 10, tanpa "let" lagi karena variable-nya sudah ada
```

- **`const`:** variable yang nilainya tetap, tidak boleh diganti.

```js
const pi = 3.14
// "const" = konstan, nilainya dikunci setelah dibuat
```

- **Beda `let` dan `const`:** ganti nilai `let` boleh, `const` error.

```js
let a = 1
a = 2
// aman, karena "let" boleh diganti
const b = 1
b = 2
// error, karena "const" tidak boleh diganti
```

### 1.b Tipe Data

- **String:** teks.

```js
const nama = 'Bima'
// teks selalu diapit tanda kutip
```

- **Number:** angka.

```js
const umur = 15
// angka ditulis tanpa tanda kutip
```

- **Boolean:** benar atau salah.

```js
const lulus = true
// hanya ada dua nilai: true atau false
```

### 1.c Array

- **Apa itu array:** kumpulan nilai dalam satu variable, urutannya dimulai dari 0.

```js
const buah = ['apel', 'jeruk', 'mangga']
// array ditulis dengan [ ], isinya dipisah koma
console.log(buah[0])
// ambil isi urutan pertama (index 0), hasilnya 'apel'
```

- **Menambah dan menghitung isi:**

```js
buah.push('pisang')
// push = tambah item baru di akhir array
console.log(buah.length)
// length = jumlah isi array, hasilnya 4
```

### 1.d Object

- **Apa itu object:** kumpulan data berpasangan nama dan nilai.

```js
const siswa = { nama: 'Ayu', umur: 15 }
// object ditulis dengan { }, isinya pasangan "nama: nilai"
console.log(siswa.nama)
// ambil nilai lewat titik, hasilnya 'Ayu'
```

- **Mengubah isi object:**

```js
siswa.umur = 16
// ganti nilai "umur" jadi 16. Ini boleh walau siswa adalah const,
// karena yang dikunci adalah object-nya, bukan isinya
```

### 1.e Function

- **Apa itu function:** blok kode yang diberi nama dan bisa dipanggil berulang.

```js
function sapa() {
  console.log('Halo!')
}
// mendefinisikan function bernama "sapa", belum dijalankan
sapa()
// memanggil function, baru sekarang isinya jalan
```

- **Parameter dan argument:** parameter adalah "lubang" di function, argument adalah nilai yang kita masukkan.

```js
function sapa(nama) {
// "nama" = parameter, tempat menampung nilai yang dikirim
  console.log('Halo, ' + nama)
}
sapa('Bima')
// 'Bima' = argument, nilai yang dikirim ke parameter "nama"
```

- **`return`:** mengembalikan hasil dari function.

```js
function tambah(a, b) {
  return a + b
  // return = kirim hasil keluar dari function
}
const hasil = tambah(2, 3)
// hasil function disimpan ke variable "hasil", isinya 5
```

### 1.f Operator

- **Aritmatika:** `+ - * /`

```js
console.log(10 + 5, 10 - 5, 10 * 5, 10 / 5)
// tambah, kurang, kali, bagi, hasilnya 15, 5, 50, 2
```

- **Increment dan decrement:** `++` dan `--`

```js
let n = 0
n++
// naik 1, sekarang n = 1
n--
// turun 1, sekarang n = 0
```

- **Perbandingan:** hasilnya boolean.

```js
console.log(5 === 5, 5 !== 3, 5 > 3, 5 <= 3)
// sama dengan, tidak sama dengan, lebih besar, lebih kecil/sama
// hasilnya: true, true, true, false
```

### 1.g Kondisi

- **`if`:** jalankan kode kalau kondisi benar.

```js
if (umur >= 17) {
  // kode di dalam { } hanya jalan kalau kondisi di ( ) bernilai true
  console.log('Boleh')
}
```

- **`else` dan `else if`:**

```js
if (nilai >= 80) {
  console.log('Bagus')
  // dicek pertama, kalau benar langsung berhenti di sini
} else if (nilai >= 60) {
  console.log('Lumayan')
  // dicek kalau yang di atas salah
} else {
  console.log('Belajar lagi')
  // jalan kalau semua kondisi di atas salah
}
```

- **`&&`, `||`, `!`:** dan, atau, kebalikan.

```js
if (umur >= 17 && punyaKTP) { }
// && (dan): dua-duanya harus benar
if (hariIni === 'Sabtu' || hariIni === 'Minggu') { }
// || (atau): salah satu benar sudah cukup
if (!lulus) { }
// ! (bukan): membalik nilai, jalan kalau lulus bernilai false
```

## 2. Struktur Dasar Vue

### 2.a Tiga bagian file `.vue`

- **`<script setup>`:** tempat JavaScript.
- **`<template>`:** tempat HTML.
- **`<style>`:** tempat CSS.

```vue
<script setup>
// tempat data dan function (JavaScript)
</script>

<template>
  <!-- tempat tampilan (HTML) -->
</template>

<style>
/* tempat gaya (CSS) */
</style>
```

### 2.b HTML di dalam template

```vue
<template>
  <h1>Judul</h1>
  <p>Paragraf</p>
  <!-- HTML biasa, ditulis persis seperti di file .html -->
</template>
```

### 2.c Interpolation

- **`{{ }}`:** menampilkan data dari script ke template.

```vue
<script setup>
const nama = 'Bima'
// data dibuat di script
</script>

<template>
  <p>Halo, {{ nama }}</p>
  <!-- {{ nama }} diganti dengan isi variable "nama" saat tampil -->
</template>
```

### 2.d Attribute binding

- **`:`:** memasukkan data ke atribut HTML.

```vue
<script setup>
const gambar = 'https://picsum.photos/100'
// alamat gambar disimpan di variable
</script>

<template>
  <img :src="gambar">
  <!-- tanda ":" di depan src artinya nilainya diambil dari variable "gambar",
       bukan teks biasa. Tanpa ":" yang terbaca adalah tulisan "gambar" -->
</template>
```

### 2.e Style

```vue
<style>
h1 { color: teal; }
/* semua <h1> di component ini berwarna teal */
</style>
```

---

# BLOK 2

## 3. `ref`

### 3.a Kenapa butuh `ref`

- **Masalah:** variable biasa yang diubah tidak membuat tampilan ikut berubah.

```vue
<script setup>
let nama = 'Bima'
function ganti() { nama = 'Ayu' }
// nilai "nama" memang berubah di JavaScript...
</script>

<template>
  <p>{{ nama }}</p>
  <button @click="ganti">Ganti</button>
  <!-- ...tapi tampilan tetap 'Bima', karena Vue tidak memantau variable biasa -->
</template>
```

### 3.b Membuat `ref`

- **Import dan buat:**

```js
import { ref } from 'vue'
// ambil fitur "ref" dari Vue
const nama = ref('Bima')
// bungkus nilai awal 'Bima' dengan ref, sekarang Vue memantau perubahannya
```

- **Mental model:** `ref` adalah data yang perubahannya dipantau Vue.

### 3.c Mengubah nilai `ref`

- **Di JavaScript pakai `.value`:**

```js
nama.value = 'Ayu'
// isi asli ada di dalam ".value", jadi ubah lewat sana
```

### 3.d Memakai `ref` di template

- **Di template tanpa `.value`:**

```vue
<p>{{ nama }}</p>
<!-- di template, Vue otomatis membuka ".value", jadi cukup tulis nama -->
```

### 3.e Hasil akhir

```vue
<script setup>
import { ref } from 'vue'
const nama = ref('Bima')
// data yang dipantau Vue
function ganti() { nama.value = 'Ayu' }
// di dalam JavaScript wajib pakai .value
</script>

<template>
  <p>{{ nama }}</p>
  <!-- tampilan ikut berubah otomatis saat nama.value berubah -->
  <button @click="ganti">Ganti</button>
</template>
```

## 4. Event Handling

### 4.a `@click`

- **Apa itu event:** sesuatu yang terjadi karena aksi user.

```vue
<button @click="jumlah++">Tambah</button>
<!-- @click = "saat diklik, jalankan kode di dalam tanda kutip" -->
```

### 4.b Memanggil function

```vue
<script setup>
import { ref } from 'vue'
const jumlah = ref(0)
function tambah() {
  jumlah.value++
  // naikkan isi jumlah sebanyak 1
}
</script>

<template>
  <p>{{ jumlah }}</p>
  <button @click="tambah">Tambah</button>
  <!-- saat diklik, function "tambah" dipanggil -->
</template>
```

### 4.c Event dengan parameter

```vue
<script setup>
function sapa(nama) { alert('Halo, ' + nama) }
// function menerima parameter "nama"
</script>

<template>
  <button @click="sapa('Bima')">Sapa Bima</button>
  <!-- kirim 'Bima' sebagai argument saat diklik -->
  <button @click="sapa('Ayu')">Sapa Ayu</button>
  <!-- function sama, argument beda, hasil beda -->
</template>
```

## 5. Conditional Rendering

### 5.a `v-if`

- **Apa itu:** tampilkan elemen hanya kalau kondisi benar.

```vue
<p v-if="jumlah > 0">Ada barang</p>
<!-- <p> ini hanya ada di halaman kalau jumlah lebih dari 0 -->
```

### 5.b `v-else`

```vue
<p v-if="jumlah > 0">Ada barang</p>
<p v-else>Kosong</p>
<!-- v-else harus langsung setelah v-if.
     Kalau kondisi v-if salah, yang tampil adalah v-else -->
```

### 5.c `v-else-if`

```vue
<p v-if="nilai >= 80">Bagus</p>
<p v-else-if="nilai >= 60">Lumayan</p>
<p v-else>Belajar lagi</p>
<!-- dicek dari atas ke bawah, yang pertama benar itu yang tampil.
     Persis seperti if / else if / else di JavaScript -->
```

### 5.d Gabungan dengan event

```vue
<script setup>
import { ref } from 'vue'
const nilai = ref(50)
</script>

<template>
  <p>{{ nilai }}</p>
  <button @click="nilai += 10">Tambah nilai</button>
  <!-- tiap klik nilai naik 10, lalu kondisi di bawah dicek ulang otomatis -->
  <p v-if="nilai >= 80">Bagus</p>
  <p v-else-if="nilai >= 60">Lumayan</p>
  <p v-else>Belajar lagi</p>
</template>
```

- **Alur pikir:** data → kondisi → tampilan.

---

# BLOK 3

## 6. `v-for`

### 6.a Loop array

- **Apa itu:** buat satu tampilan untuk setiap item.

```vue
<script setup>
const buahBuahan = ['apel', 'jeruk', 'mangga']
// array yang isinya mau ditampilkan
</script>

<template>
  <li v-for="buah in buahBuahan">{{ buah }}</li>
  <!-- "buah in buahBuahan" dibaca: untuk setiap isi di buahBuahan,
       ambil satu-satu dan namai "buah". Nama "buah" bebas, itu cuma
       label untuk isi yang sedang diproses di putaran itu.
       <li> ini dibuat 3 kali, sesuai jumlah isi array -->
</template>
```

### 6.b `index`

```vue
<li v-for="(buah, index) in buahBuahan">
  <!-- tambah "index" di dalam kurung untuk dapat nomor urutnya (mulai dari 0) -->
  {{ index }} - {{ buah }}
  <!-- tampil: 0 - apel, 1 - jeruk, 2 - mangga -->
</li>
```

### 6.c `:key`

- **Fungsi:** penanda unik tiap item.

```vue
<li v-for="buah in buahBuahan" :key="buah">{{ buah }}</li>
<!-- :key = "KTP" tiap item supaya Vue tidak salah mengenali
     saat isi list bertambah, berkurang, atau berpindah.
     Nilainya harus unik untuk tiap item -->
```

### 6.d Dengan `ref`

```vue
<script setup>
import { ref } from 'vue'
const buahBuahan = ref(['apel', 'jeruk'])
// array dibungkus ref supaya perubahannya dipantau
function tambah() { buahBuahan.value.push('mangga') }
// tambah item lewat .value, karena ini di dalam JavaScript
</script>

<template>
  <ul>
    <li v-for="buah in buahBuahan" :key="buah">{{ buah }}</li>
    <!-- di template tetap tanpa .value -->
  </ul>
  <button @click="tambah">Tambah</button>
  <!-- tiap klik, array bertambah dan list di atas bertambah otomatis -->
</template>
```

### 6.e Event dengan `index`

```vue
<li v-for="(buah, index) in buahBuahan" :key="buah">
  {{ buah }}
  <button @click="buahBuahan.splice(index, 1)">Hapus</button>
  <!-- splice(index, 1) = hapus 1 item mulai dari posisi index.
       Tiap tombol membawa index item-nya sendiri, jadi yang terhapus
       tepat item yang tombolnya diklik -->
</li>
```

## 7. Input HTML

### 7.a `<input>` dan `type`

```html
<input type="text">
<!-- kolom teks biasa -->
<input type="number">
<!-- kolom angka -->
<input type="date">
<!-- pemilih tanggal -->
```

### 7.b `placeholder`

```html
<input type="text" placeholder="Nama kamu">
<!-- teks petunjuk abu-abu yang hilang saat mulai mengetik -->
```

### 7.c `value`

```html
<input type="text" value="Bima">
<!-- isi awal input -->
```

### 7.d Checkbox dan `checked`

```html
<input type="checkbox" checked> Setuju
<!-- kotak centang. "checked" = sudah tercentang dari awal -->
```

### 7.e Radio dan `name`

- **`name` sama:** radio dalam satu grup, hanya satu yang bisa dipilih.

```html
<input type="radio" name="pilihan" value="A"> A
<!-- name="pilihan" membuat A dan B satu grup -->
<input type="radio" name="pilihan" value="B"> B
<!-- value = nilai yang dibawa kalau pilihan ini yang dipilih -->
```

## 8. `v-model`

### 8.a Konsep

- **Apa itu:** menghubungkan input dengan data. Input berubah, data berubah. Data berubah, input ikut berubah.

### 8.b Input teks

```vue
<script setup>
import { ref } from 'vue'
const nama = ref('')
// tempat menyimpan isi input, awalnya kosong
</script>

<template>
  <input v-model="nama">
  <!-- v-model menghubungkan input dengan ref "nama".
       Apa yang diketik langsung masuk ke nama -->
  <p>Halo, {{ nama }}</p>
  <!-- tampil langsung berubah seiring mengetik -->
</template>
```

### 8.c Dua arah

```vue
<button @click="nama = 'Ayu'">Isi otomatis</button>
<!-- kita ubah data lewat kode, dan isi input ikut berubah.
     Itu yang disebut dua arah -->
```

### 8.d Checkbox

```vue
<script setup>
const setuju = ref(false)
// checkbox cocok dengan boolean: true kalau dicentang, false kalau tidak
</script>

<template>
  <input type="checkbox" v-model="setuju"> Setuju
  <p v-if="setuju">Terima kasih</p>
  <!-- muncul hanya saat dicentang -->
</template>
```

### 8.e Radio

```vue
<script setup>
const jawaban = ref('')
// menyimpan value dari radio yang dipilih
</script>

<template>
  <input type="radio" value="A" v-model="jawaban"> A
  <!-- dipilih -> jawaban jadi 'A' -->
  <input type="radio" value="B" v-model="jawaban"> B
  <!-- dipilih -> jawaban jadi 'B'. Satu ref dipakai untuk semua radio satu grup -->
  <p>Pilihanmu: {{ jawaban }}</p>
</template>
```

---

# BLOK 4

## 9. Form

### 9.a `<form>`

- **Apa itu:** pembungkus beberapa input yang diproses bersama.

```html
<form>
  <input type="text">
  <button type="submit">Kirim</button>
  <!-- tombol type="submit" memicu pengiriman form -->
</form>
```

### 9.b `@submit` dan `.prevent`

- **`@submit`:** jalan saat form dikirim.
- **`.prevent`:** mencegah halaman reload.

```vue
<form @submit.prevent="kirim">
  <!-- @submit = saat form dikirim, jalankan function "kirim".
       .prevent = batalkan perilaku bawaan browser yang me-reload halaman -->
```

### 9.c Function pemroses

```vue
<script setup>
function kirim() {
  alert('Terkirim!')
  // di sini tempat memproses data form
}
</script>

<template>
  <form @submit.prevent="kirim">
    <button type="submit">Kirim</button>
    <!-- klik tombol -> form submit -> function kirim jalan -->
  </form>
</template>
```

### 9.d Form dengan `v-model`

```vue
<script setup>
import { ref } from 'vue'
const nama = ref('')
// menampung isi input

function kirim() {
  alert('Halo, ' + nama.value)
  // ambil isi input lewat nama.value
  nama.value = ''
  // kosongkan input setelah dikirim
}
</script>

<template>
  <form @submit.prevent="kirim">
    <input v-model="nama" placeholder="Nama">
    <!-- isi input otomatis tersimpan di nama -->
    <button type="submit">Kirim</button>
  </form>
</template>
```

- **Alur pikir:** input mengumpulkan data → submit memproses data.

### 9.e Form + daftar

```vue
<script setup>
import { ref } from 'vue'
const nama = ref('')
// menampung isi input
const daftar = ref([])
// menampung semua nama yang sudah disimpan

function kirim() {
  daftar.value.push(nama.value)
  // masukkan nama saat ini ke dalam daftar
  nama.value = ''
  // kosongkan input agar siap diisi lagi
}
</script>

<template>
  <form @submit.prevent="kirim">
    <input v-model="nama" placeholder="Nama">
    <button type="submit">Simpan</button>
  </form>
  <ul>
    <li v-for="n in daftar" :key="n">{{ n }}</li>
    <!-- tiap nama di daftar ditampilkan sebagai satu <li> -->
  </ul>
</template>
```

## 10. Component & Import

### 10.a Apa itu component

- **Pengertian:** bagian kecil aplikasi yang dibuat dan dipakai secara terpisah.

### 10.b Kenapa dipisah

- Kode lebih rapi, bisa dipakai ulang, mudah dicari.

### 10.c Struktur folder

```text
src/
├── App.vue              <- component utama, tempat semua component dirakit
└── components/          <- folder khusus component kecil
    ├── Counter.vue
    ├── Question.vue
    └── Result.vue
```

### 10.d Membuat component

```vue
<!-- components/Counter.vue -->
<script setup>
import { ref } from 'vue'
const jumlah = ref(0)
// data ini milik Counter saja
</script>

<template>
  <button @click="jumlah++">Klik: {{ jumlah }}</button>
  <!-- component sama seperti file .vue biasa: ada script dan template -->
</template>
```

### 10.e Import dan pakai

```vue
<!-- App.vue -->
<script setup>
import Counter from './components/Counter.vue'
// ambil component dari file-nya. "./" artinya mulai dari folder saat ini
</script>

<template>
  <Counter />
  <!-- pakai seperti tag HTML. Nama tag harus sama dengan nama import -->
</template>
```

### 10.f Dipakai berulang

```vue
<template>
  <Counter />
  <Counter />
  <Counter />
  <!-- 3 counter, masing-masing punya jumlah sendiri,
       klik satu tidak memengaruhi yang lain -->
</template>
```

- **Hasil:** tiap `<Counter />` punya datanya sendiri.
