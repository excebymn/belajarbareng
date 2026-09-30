---
jenis: murid
pertemuan: 1
judul: "JavaScript Dasar dan Pengenalan Vue"
deskripsi: "Dari dasar JavaScript sampai membuat tampilan interaktif dengan Vue: ref, event, kondisi, perulangan, input, form, dan component."
---

# JavaScript Dasar dan Pengenalan Vue

Pada pertemuan ini kamu akan mempelajari: dasar JavaScript, struktur file Vue, `ref`, event, kondisi dengan `v-if`, perulangan dengan `v-for`, input HTML, `v-model`, form, serta component dan import.

Sebelum mulai, pastikan kamu sudah bisa membuat project, memahami struktur file di dalamnya, dan mengenal cara `import` secara dasar.

---

## 1. JavaScript Dasar

JavaScript adalah bahasa pemrograman yang membuat halaman web bisa menyimpan data, menghitung, dan mengambil keputusan. Vue dibangun di atas JavaScript, jadi bagian ini adalah fondasi untuk semua materi berikutnya.

### 1.a Variable

**Variable** adalah tempat untuk menyimpan sebuah nilai di dalam program. Setiap variable punya **nama**, dan nama itu dipakai untuk mengambil atau mengubah nilainya kapan saja.

JavaScript punya dua cara utama membuat variable: `let` dan `const`.

#### `let`

Gunakan `let` untuk nilai yang **boleh berubah**.

```js
let skor = 0;
skor = 10;
console.log(skor);
```

Pada contoh di atas, `skor` dibuat dengan nilai awal `0`, lalu diganti menjadi `10`. Kata `let` hanya ditulis satu kali, yaitu saat variable dibuat. Untuk mengganti nilainya, cukup tulis nama variable dan nilai baru. Fungsi `console.log()` menampilkan nilai di console browser.

#### `const`

Gunakan `const` untuk nilai yang **tidak akan berubah**.

```js
const pi = 3.14;
```

Jika nilai `const` diubah, JavaScript akan menampilkan error.

#### Perbedaan `let` dan `const`

|                     | `let`              | `const`          |
| ------------------- | ------------------ | ---------------- |
| Nilai boleh diganti | Ya                 | Tidak            |
| Cocok untuk         | Nilai yang berubah | Nilai yang tetap |

```js
let a = 1;
a = 2; // aman

const b = 1;
b = 2; // error
```

> **Ringkasan:** variable menyimpan nilai. Pakai `let` jika nilainya akan berubah, pakai `const` jika nilainya tetap.

### 1.b Tipe Data

**Tipe data** menunjukkan jenis nilai yang disimpan di dalam sebuah variable. Tiga tipe data yang paling sering dipakai adalah string, number, dan boolean.

| Tipe    | Kegunaan         | Contoh          |
| ------- | ---------------- | --------------- |
| String  | Teks             | `'Rusdi'`       |
| Number  | Angka            | `15`            |
| Boolean | Benar atau salah | `true`, `false` |

```js
const nama = "Rusdi"; // string
const umur = 15; // number
const lulus = true; // boolean
```

Teks (string) selalu ditulis di antara tanda kutip, sedangkan angka ditulis tanpa tanda kutip. Boolean hanya memiliki dua kemungkinan nilai: `true` atau `false`.

> **Ringkasan:** string untuk teks, number untuk angka, boolean untuk benar atau salah.

### 1.c Array

**Array** adalah kumpulan beberapa nilai yang disimpan dalam satu variable. Array ditulis dengan tanda kurung siku `[ ]`, dan setiap isinya dipisahkan dengan koma.

```js
const buah = ["apel", "jeruk", "mangga"];
console.log(buah[0]); // apel
console.log(buah[2]); // mangga
```

Setiap isi array punya nomor urut yang disebut **index**. Index dimulai dari **0**, bukan 1. Jadi `buah[0]` adalah isi pertama.

Beberapa hal yang sering dilakukan pada array:

```js
buah.push("pisang"); // menambah isi di bagian akhir
console.log(buah.length); // 4, jumlah isi array
```

> **Ringkasan:** array menyimpan banyak nilai berurutan. Index dimulai dari 0. `push` menambah isi, `length` menghitung jumlah isi.

### 1.d Object

**Object** adalah kumpulan data yang berpasangan antara **nama** dan **nilai**. Object ditulis dengan tanda kurung kurawal `{ }`. Object cocok untuk menggambarkan satu benda yang punya beberapa sifat, misalnya seorang siswa.

```js
const siswa = { nama: "Gatot", umur: 15 };
console.log(siswa.nama); // Gatot
console.log(siswa.umur); // 15
```

Nilai di dalam object diambil dengan menulis nama object, tanda titik, lalu nama sifatnya.

Nilai di dalam object juga bisa diubah:

```js
siswa.umur = 16;
```

Perubahan ini diperbolehkan walaupun `siswa` dibuat dengan `const`. Yang dikunci oleh `const` adalah variable-nya, sedangkan isi di dalam object tetap bisa diubah.

> **Ringkasan:** object menyimpan pasangan nama dan nilai. Ambil nilainya dengan tanda titik.

### 1.e Function

**Function** adalah blok kode yang diberi nama dan bisa dijalankan berulang kali. Dengan function, kita tidak perlu menulis kode yang sama berkali-kali.

```js
function sapa() {
  console.log("Halo!");
}

sapa(); // Halo!
sapa(); // Halo!
```

Function dibuat dengan kata `function`, diikuti nama, tanda kurung `( )`, dan isi di dalam `{ }`. Function baru dijalankan saat **dipanggil** dengan menulis namanya diikuti tanda kurung.

#### Parameter dan argument

Function bisa menerima data dari luar. Tempat penerimanya di dalam function disebut **parameter**, sedangkan nilai yang dikirim saat memanggil function disebut **argument**.

```js
function sapa(nama) {
  // nama = parameter
  console.log("Halo, " + nama);
}

sapa("Rusdi"); // 'Rusdi' = argument
sapa("Gatot");
```

Setiap kali dipanggil dengan argument berbeda, hasilnya ikut berbeda.

#### `return`

Function bisa mengembalikan hasil menggunakan `return`. Hasil tersebut bisa disimpan ke dalam variable.

```js
function tambah(a, b) {
  return a + b;
}

const hasil = tambah(2, 3);
console.log(hasil); // 5
```

> **Ringkasan:** function adalah blok kode bernama yang dipanggil kapan saja. Parameter menerima data, `return` mengembalikan hasil.

### 1.f Operator

**Operator** adalah simbol untuk melakukan suatu operasi pada nilai.

#### Operator aritmatika

| Operator | Fungsi | Contoh   | Hasil |
| -------- | ------ | -------- | ----- |
| `+`      | Tambah | `10 + 5` | `15`  |
| `-`      | Kurang | `10 - 5` | `5`   |
| `*`      | Kali   | `10 * 5` | `50`  |
| `/`      | Bagi   | `10 / 5` | `2`   |

#### Increment dan decrement

`++` menambah nilai sebanyak 1, dan `--` menguranginya sebanyak 1.

```js
let n = 0;
n++; // n menjadi 1
n--; // n kembali menjadi 0
```

#### Operator perbandingan

Operator perbandingan membandingkan dua nilai dan menghasilkan boolean (`true` atau `false`).

| Operator | Arti                  | Contoh    | Hasil   |
| -------- | --------------------- | --------- | ------- |
| `===`    | Sama dengan           | `5 === 5` | `true`  |
| `!==`    | Tidak sama dengan     | `5 !== 3` | `true`  |
| `>`      | Lebih besar           | `5 > 3`   | `true`  |
| `<`      | Lebih kecil           | `5 < 3`   | `false` |
| `>=`     | Lebih besar atau sama | `5 >= 5`  | `true`  |
| `<=`     | Lebih kecil atau sama | `5 <= 3`  | `false` |

> **Catatan:** satu tanda sama dengan (`=`) berarti mengisi nilai, sedangkan tiga tanda sama dengan (`===`) berarti membandingkan.

> **Ringkasan:** operator aritmatika untuk menghitung, `++`/`--` untuk naik turun 1, operator perbandingan menghasilkan `true` atau `false`.

### 1.g Kondisi

**Kondisi** membuat program bisa mengambil keputusan: menjalankan kode tertentu hanya jika syarat terpenuhi.

#### `if`

```js
if (umur >= 17) {
  console.log("Boleh");
}
```

Kode di dalam `{ }` hanya dijalankan jika kondisi di dalam `( )` bernilai `true`.

#### `else` dan `else if`

`else` dijalankan jika kondisi `if` salah. `else if` menambah kondisi lain untuk dicek berikutnya.

```js
if (nilai >= 80) {
  console.log("Bagus");
} else if (nilai >= 60) {
  console.log("Lumayan");
} else {
  console.log("Belajar lagi");
}
```

Kondisi dicek dari atas ke bawah. Begitu ada yang benar, bagian itu dijalankan dan sisanya dilewati.

#### `&&`, `||`, dan `!`

Ketiganya dipakai untuk menggabungkan atau membalik kondisi.

| Operator | Nama  | Arti                         |
| -------- | ----- | ---------------------------- |
| `&&`     | Dan   | Dua-duanya harus benar       |
| `\|\|`   | Atau  | Salah satu benar sudah cukup |
| `!`      | Bukan | Membalik nilai               |

```js
if (umur >= 17 && punyaKTP) {
}
if (hariIni === "Sabtu" || hariIni === "Minggu") {
}
if (!lulus) {
}
```

> **Ringkasan:** `if`, `else if`, dan `else` memilih kode yang dijalankan berdasarkan kondisi. Gabungkan kondisi dengan `&&`, `||`, dan `!`.

---

## 2. Struktur Dasar Vue

**Vue** adalah framework JavaScript untuk membuat tampilan web yang interaktif. Kode Vue ditulis di file berakhiran `.vue`, dan satu file mewakili satu bagian dari aplikasi.

### 2.a Tiga bagian file `.vue`

Sebuah file `.vue` terdiri dari tiga bagian:

| Bagian           | Isi                                |
| ---------------- | ---------------------------------- |
| `<script setup>` | Kode JavaScript: data dan function |
| `<template>`     | Tampilan dalam bentuk HTML         |
| `<style>`        | Gaya tampilan dalam bentuk CSS     |

```vue
<script setup>
// JavaScript
</script>

<template>
  <!-- HTML -->
</template>

<style>
/* CSS */
</style>
```

Ketiga bagian ini akan selalu kamu temui di setiap file Vue.

> **Ringkasan:** `script` untuk logika, `template` untuk tampilan, `style` untuk gaya.

### 2.b HTML di dalam template

Di dalam `<template>`, kamu menulis HTML seperti biasa.

```vue
<template>
  <h1>Judul</h1>
  <p>Paragraf</p>
</template>
```

Semua tag HTML yang sudah kamu kenal bisa dipakai di sini.

> **Ringkasan:** isi `<template>` adalah HTML biasa.

### 2.c Interpolation

**Interpolation** adalah cara menampilkan data dari `<script>` ke dalam `<template>`, menggunakan tanda kurung kurawal ganda `{{ }}`.

```vue
<script setup>
const nama = "Rusdi";
</script>

<template>
  <p>Halo, {{ nama }}</p>
</template>
```

Saat halaman tampil, `{{ nama }}` diganti dengan isi variable `nama`, sehingga hasilnya adalah: **Halo, Rusdi**.

> **Ringkasan:** `{{ }}` menampilkan nilai variable di dalam template.

### 2.d Attribute binding

**Attribute binding** adalah cara memasukkan data ke dalam atribut HTML (seperti `src`, `href`, atau `class`). Caranya dengan menambahkan tanda titik dua `:` di depan nama atribut.

```vue
<script setup>
const gambar = "https://picsum.photos/100";
</script>

<template>
  <img :src="gambar" />
</template>
```

Tanda `:` di depan `src` memberi tahu Vue bahwa nilainya diambil dari variable `gambar`. Tanpa tanda `:`, yang terbaca hanyalah tulisan biasa "gambar".

> **Ringkasan:** gunakan `:` di depan atribut untuk mengisinya dengan data dari variable.

### 2.e Style

Bagian `<style>` berisi CSS yang mengatur tampilan.

```vue
<style>
h1 {
  color: teal;
}
</style>
```

Pada contoh ini, semua `<h1>` di component tersebut akan berwarna teal.

> **Ringkasan:** tulis CSS di dalam `<style>` untuk mengatur tampilan template.

---

## 3. `ref`

Sampai sekarang, data yang kita tampilkan bersifat tetap. Agar tampilan bisa **berubah mengikuti data**, Vue menyediakan `ref`.

### 3.a Kenapa butuh `ref`

Perhatikan contoh berikut, yang memakai variable biasa:

```vue
<script setup>
let nama = "Rusdi";

function ganti() {
  nama = "Gatot";
}
</script>

<template>
  <p>{{ nama }}</p>
  <button @click="ganti">Ganti</button>
</template>
```

Saat tombol diklik, nilai `nama` di JavaScript memang berubah menjadi `'Gatot'`, tetapi tulisan di halaman tetap `Rusdi`. Penyebabnya, Vue tidak memantau variable biasa, sehingga tidak tahu bahwa tampilan perlu diperbarui.

> **Ringkasan:** variable biasa yang berubah tidak membuat tampilan ikut berubah.

### 3.b Membuat `ref`

**`ref`** adalah cara membuat data yang perubahannya dipantau oleh Vue. Setiap kali nilainya berubah, tampilan yang memakainya ikut diperbarui.

`ref` harus diimpor dari Vue terlebih dahulu:

```js
import { ref } from "vue";

const nama = ref("Rusdi");
```

Nilai di dalam tanda kurung, yaitu `'Rusdi'`, adalah **nilai awal**.

> **Ringkasan:** `ref` adalah data yang perubahannya dipantau Vue. Impor dari `'vue'`, lalu isi nilai awalnya di dalam tanda kurung.

### 3.c Mengubah nilai `ref`

Nilai asli sebuah `ref` tersimpan di dalam properti `.value`. Karena itu, di dalam JavaScript, nilainya dibaca dan diubah lewat `.value`.

```js
console.log(nama.value); // Rusdi
nama.value = "Gatot";
```

> **Ringkasan:** di dalam `<script>`, baca dan ubah `ref` lewat `.value`.

### 3.d Memakai `ref` di template

Di dalam `<template>`, `ref` ditulis **tanpa** `.value`. Vue sudah membukanya secara otomatis.

```vue
<template>
  <p>{{ nama }}</p>
</template>
```

> **Catatan:** aturan mudahnya, `.value` dipakai di `<script>`, dan tidak dipakai di `<template>`.

> **Ringkasan:** di template cukup tulis nama `ref`-nya.

### 3.e Hasil akhir

Contoh sebelumnya sekarang bisa diperbaiki dengan `ref`:

```vue
<script setup>
import { ref } from "vue";

const nama = ref("Rusdi");

function ganti() {
  nama.value = "Gatot";
}
</script>

<template>
  <p>{{ nama }}</p>
  <button @click="ganti">Ganti</button>
</template>
```

Saat tombol diklik, `nama.value` berubah, dan tulisan di halaman langsung ikut berganti menjadi **Gatot**.

> **Ringkasan:** `ref` membuat tampilan ikut berubah otomatis saat datanya berubah.

---

## 4. Event Handling

**Event** adalah sesuatu yang terjadi karena aksi pengguna, misalnya klik tombol, mengetik, atau mengirim form. Vue memungkinkan kita menjalankan kode saat event terjadi.

### 4.a `@click`

`@click` menjalankan kode saat sebuah elemen diklik. Kode yang dijalankan ditulis di dalam tanda kutip.

```vue
<button @click="jumlah++">Tambah</button>
```

Setiap kali tombol diklik, `jumlah` bertambah 1.

> **Ringkasan:** `@click="..."` menjalankan kode saat elemen diklik.

### 4.b Memanggil function

Untuk kode yang lebih panjang, kita membuat function di `<script>` lalu memanggilnya dari event.

```vue
<script setup>
import { ref } from "vue";

const jumlah = ref(0);

function tambah() {
  jumlah.value++;
}
</script>

<template>
  <p>{{ jumlah }}</p>
  <button @click="tambah">Tambah</button>
</template>
```

Alurnya: pengguna klik tombol, function `tambah` dijalankan, nilai `jumlah` berubah, lalu tampilan ikut diperbarui.

> **Ringkasan:** function yang mengubah `ref` bisa dipanggil lewat `@click`.

### 4.c Event dengan parameter

Function yang dipanggil dari event juga bisa menerima argument.

```vue
<script setup>
function sapa(nama) {
  alert("Halo, " + nama);
}
</script>

<template>
  <button @click="sapa('Rusdi')">Sapa Rusdi</button>
  <button @click="sapa('Gatot')">Sapa Gatot</button>
</template>
```

Kedua tombol memanggil function yang sama, tetapi dengan argument berbeda, sehingga hasilnya berbeda.

> **Ringkasan:** kirim data ke function dengan menulis argument di dalam tanda kurung, misalnya `@click="sapa('Rusdi')"`.

---

## 5. Conditional Rendering

**Conditional rendering** berarti menampilkan atau menyembunyikan bagian tampilan berdasarkan suatu kondisi. Alur pikirnya: **data → kondisi → tampilan**.

### 5.a `v-if`

`v-if` menampilkan sebuah elemen hanya jika kondisinya bernilai `true`.

```vue
<p v-if="jumlah > 0">Ada barang</p>
```

Elemen `<p>` ini hanya ada di halaman ketika `jumlah` lebih besar dari 0.

> **Ringkasan:** `v-if` menampilkan elemen jika kondisinya benar.

### 5.b `v-else`

`v-else` menampilkan elemen pengganti jika kondisi `v-if` salah. `v-else` harus berada tepat setelah elemen `v-if`.

```vue
<p v-if="jumlah > 0">Ada barang</p>
<p v-else>Kosong</p>
```

> **Ringkasan:** `v-else` tampil ketika `v-if` di atasnya tidak terpenuhi.

### 5.c `v-else-if`

`v-else-if` dipakai untuk kondisi bertingkat, seperti `else if` di JavaScript.

```vue
<p v-if="nilai >= 80">Bagus</p>
<p v-else-if="nilai >= 60">Lumayan</p>
<p v-else>Belajar lagi</p>
```

Kondisi dicek dari atas ke bawah, dan hanya elemen pertama yang kondisinya benar yang ditampilkan.

> **Ringkasan:** `v-if`, `v-else-if`, dan `v-else` bekerja seperti `if`, `else if`, dan `else`.

### 5.d Gabungan dengan event

Dengan menggabungkan `ref`, event, dan `v-if`, tampilan bisa berubah setiap kali pengguna berinteraksi.

```vue
<script setup>
import { ref } from "vue";

const nilai = ref(50);
</script>

<template>
  <p>{{ nilai }}</p>
  <button @click="nilai += 10">Tambah nilai</button>

  <p v-if="nilai >= 80">Bagus</p>
  <p v-else-if="nilai >= 60">Lumayan</p>
  <p v-else>Belajar lagi</p>
</template>
```

Setiap klik menambah `nilai` sebanyak 10. Vue lalu mengecek ulang kondisi di bawahnya, sehingga pesan yang tampil ikut berubah dari "Belajar lagi" menjadi "Lumayan", lalu "Bagus".

> **Ringkasan:** data berubah, kondisi dicek ulang, dan tampilan menyesuaikan secara otomatis.

---

## 6. `v-for`

**`v-for`** membuat satu tampilan untuk setiap item dalam sebuah kumpulan data (array). Dengan begitu, kita tidak perlu menulis elemen yang sama berulang kali.

### 6.a Loop array

```vue
<script setup>
const buahBuahan = ["apel", "jeruk", "mangga"];
</script>

<template>
  <li v-for="buah in buahBuahan">{{ buah }}</li>
</template>
```

Penulisan `buah in buahBuahan` dibaca: _untuk setiap isi di `buahBuahan`, ambil satu per satu dan beri nama `buah`_. Nama `buah` bebas ditentukan, karena hanya menjadi label untuk isi yang sedang diproses pada putaran itu.

Karena array berisi tiga item, elemen `<li>` dibuat sebanyak tiga kali.

> **Ringkasan:** `v-for="item in daftar"` membuat satu elemen untuk setiap isi `daftar`.

### 6.b `index`

Untuk mendapatkan nomor urut setiap item, tambahkan `index` di dalam tanda kurung.

```vue
<li v-for="(buah, index) in buahBuahan">
  {{ index }} - {{ buah }}
</li>
```

Hasilnya: `0 - apel`, `1 - jeruk`, `2 - mangga`. Seperti pada array biasa, index dimulai dari 0.

> **Ringkasan:** `(item, index) in daftar` memberikan item sekaligus nomor urutnya.

### 6.c `:key`

**`:key`** adalah penanda unik untuk setiap item dalam `v-for`. Penanda ini membantu Vue mengenali item mana yang bertambah, berkurang, atau berpindah tempat.

```vue
<li v-for="buah in buahBuahan" :key="buah">{{ buah }}</li>
```

Nilai `:key` harus **unik** untuk setiap item. Pada contoh ini, nama buahnya sendiri dipakai sebagai penanda.

> **Ringkasan:** selalu tambahkan `:key` dengan nilai unik pada `v-for`.

### 6.d Dengan `ref`

Agar daftar bisa berubah dan tampilan ikut diperbarui, array dibungkus dengan `ref`.

```vue
<script setup>
import { ref } from "vue";

const buahBuahan = ref(["apel", "jeruk"]);

function tambah() {
  buahBuahan.value.push("mangga");
}
</script>

<template>
  <ul>
    <li v-for="buah in buahBuahan" :key="buah">{{ buah }}</li>
  </ul>
  <button @click="tambah">Tambah</button>
</template>
```

Di `<script>` array diakses lewat `.value`, sedangkan di `<template>` cukup ditulis `buahBuahan`. Setiap klik menambah satu buah baru, dan daftar di halaman bertambah otomatis.

> **Ringkasan:** array di dalam `ref` yang berubah akan membuat hasil `v-for` ikut diperbarui.

### 6.e Event dengan `index`

`index` bisa dikirim ke function atau kode event, misalnya untuk menghapus item tertentu.

```vue
<li v-for="(buah, index) in buahBuahan" :key="buah">
  {{ buah }}
  <button @click="buahBuahan.splice(index, 1)">Hapus</button>
</li>
```

`splice(index, 1)` menghapus satu item mulai dari posisi `index`. Setiap tombol membawa `index` item-nya sendiri, sehingga item yang terhapus adalah item yang tombolnya diklik.

> **Ringkasan:** gunakan `index` dari `v-for` untuk mengolah item tertentu.

---

## 7. Input HTML

**Input** adalah elemen HTML tempat pengguna memasukkan data. Bentuk input ditentukan oleh atribut `type`.

### 7.a `<input>` dan `type`

```html
<input type="text" />
<input type="number" />
<input type="date" />
```

| `type`   | Bentuk input     |
| -------- | ---------------- |
| `text`   | Kolom teks biasa |
| `number` | Kolom angka      |
| `date`   | Pemilih tanggal  |

Tidak perlu menghafal semua tipe. Cukup kenali yang paling sering dipakai.

> **Ringkasan:** `<input>` menerima data dari pengguna, dan `type` menentukan bentuknya.

### 7.b `placeholder`

`placeholder` adalah teks petunjuk yang tampil samar di dalam input dan hilang saat pengguna mulai mengetik.

```html
<input type="text" placeholder="Nama kamu" />
```

> **Ringkasan:** `placeholder` memberi petunjuk isi input.

### 7.c `value`

`value` adalah isi dari sebuah input. Jika `value` ditulis langsung, isi tersebut menjadi nilai awal.

```html
<input type="text" value="Rusdi" />
```

> **Ringkasan:** `value` menentukan isi input.

### 7.d Checkbox dan `checked`

**Checkbox** adalah kotak centang untuk pilihan ya atau tidak. Atribut `checked` membuat kotak sudah tercentang sejak awal.

```html
<input type="checkbox" checked /> Setuju
```

> **Ringkasan:** `type="checkbox"` membuat kotak centang, `checked` membuatnya tercentang dari awal.

### 7.e Radio dan `name`

**Radio** adalah pilihan yang hanya boleh dipilih satu dari beberapa. Radio yang memiliki `name` yang sama dianggap satu kelompok, sehingga memilih satu akan membatalkan pilihan lainnya.

```html
<input type="radio" name="pilihan" value="A" /> A
<input type="radio" name="pilihan" value="B" /> B
```

Atribut `value` menentukan nilai yang dibawa oleh pilihan tersebut.

> **Ringkasan:** radio dengan `name` yang sama membentuk satu kelompok, dan hanya satu yang bisa dipilih.

---

## 8. `v-model`

### 8.a Konsep

**`v-model`** menghubungkan sebuah input dengan data. Hubungannya berlaku **dua arah**:

- Input berubah, maka data ikut berubah.
- Data berubah, maka input ikut berubah.

Dengan `v-model`, kita tidak perlu menulis kode terpisah untuk membaca isi input.

> **Ringkasan:** `v-model` menyambungkan input dan data secara dua arah.

### 8.b Input teks

```vue
<script setup>
import { ref } from "vue";

const nama = ref("");
</script>

<template>
  <input v-model="nama" />
  <p>Halo, {{ nama }}</p>
</template>
```

`nama` dibuat dengan nilai awal kosong. Setiap huruf yang diketik langsung masuk ke `nama`, dan tulisan "Halo, ..." di bawahnya berubah seketika.

> **Ringkasan:** `v-model="nama"` menyimpan isi input ke dalam `ref` bernama `nama`.

### 8.c Dua arah

Selain dari input ke data, arah sebaliknya juga berlaku.

```vue
<button @click="nama = 'Gatot'">Isi otomatis</button>
```

Saat tombol diklik, `nama` diubah lewat kode, dan isi kolom input ikut berubah menjadi `Gatot`.

> **Ringkasan:** mengubah data lewat kode juga mengubah isi input.

### 8.d Checkbox

Untuk checkbox, `v-model` dihubungkan dengan data bertipe boolean. Nilainya `true` jika dicentang dan `false` jika tidak.

```vue
<script setup>
import { ref } from "vue";

const setuju = ref(false);
</script>

<template>
  <input type="checkbox" v-model="setuju" /> Setuju
  <p v-if="setuju">Terima kasih</p>
</template>
```

Tulisan "Terima kasih" hanya muncul ketika kotak dicentang.

> **Ringkasan:** checkbox dengan `v-model` menghasilkan `true` atau `false`.

### 8.e Radio

Untuk radio, semua pilihan dalam satu kelompok memakai `v-model` yang sama. Nilai yang tersimpan adalah `value` dari radio yang dipilih.

```vue
<script setup>
import { ref } from "vue";

const jawaban = ref("");
</script>

<template>
  <input type="radio" value="A" v-model="jawaban" /> A
  <input type="radio" value="B" v-model="jawaban" /> B
  <p>Pilihanmu: {{ jawaban }}</p>
</template>
```

Saat pilihan A dipilih, `jawaban` berisi `'A'`. Saat pilihan B dipilih, `jawaban` berisi `'B'`.

> **Ringkasan:** radio dengan `v-model` menyimpan `value` dari pilihan yang dipilih.

---

## 9. Form

**Form** adalah pembungkus untuk beberapa input yang datanya dikirim dan diproses bersama-sama. Alur pikirnya: **input mengumpulkan data, submit memproses data**.

### 9.a `<form>`

```html
<form>
  <input type="text" />
  <button type="submit">Kirim</button>
</form>
```

Tombol dengan `type="submit"` di dalam form akan mengirim form tersebut saat diklik. Menekan tombol Enter di dalam input juga mengirim form.

> **Ringkasan:** `<form>` membungkus input, dan tombol `submit` mengirimnya.

### 9.b `@submit` dan `.prevent`

Di Vue, `@submit` menjalankan kode saat form dikirim. Secara bawaan, browser me-reload halaman ketika form dikirim. Modifier **`.prevent`** mencegah perilaku bawaan tersebut.

```vue
<form @submit.prevent="kirim">
```

Dibaca: _saat form dikirim, cegah reload halaman, lalu jalankan function `kirim`._

> **Ringkasan:** `@submit.prevent="kirim"` menjalankan function `kirim` tanpa me-reload halaman.

### 9.c Function pemroses

Function yang dipanggil oleh `@submit` adalah tempat data form diproses.

```vue
<script setup>
function kirim() {
  alert("Terkirim!");
}
</script>

<template>
  <form @submit.prevent="kirim">
    <button type="submit">Kirim</button>
  </form>
</template>
```

Saat tombol diklik, form dikirim, dan function `kirim` dijalankan.

> **Ringkasan:** function pemroses berisi apa yang dilakukan setelah form dikirim.

### 9.d Form dengan `v-model`

Form menjadi berguna ketika digabung dengan `v-model`, karena isi input sudah tersimpan di dalam data dan siap diproses.

```vue
<script setup>
import { ref } from "vue";

const nama = ref("");

function kirim() {
  alert("Halo, " + nama.value);
  nama.value = "";
}
</script>

<template>
  <form @submit.prevent="kirim">
    <input v-model="nama" placeholder="Nama" />
    <button type="submit">Kirim</button>
  </form>
</template>
```

Saat form dikirim, function `kirim` membaca isi input lewat `nama.value`, menampilkannya, lalu mengosongkan input dengan mengisi `nama.value` menjadi teks kosong.

> **Ringkasan:** `v-model` mengumpulkan data, `@submit.prevent` memprosesnya.

### 9.e Form + daftar

Materi-materi sebelumnya bisa digabung menjadi satu aplikasi kecil: form untuk menambah nama, dan daftar untuk menampilkannya.

```vue
<script setup>
import { ref } from "vue";

const nama = ref("");
const daftar = ref([]);

function kirim() {
  daftar.value.push(nama.value);
  nama.value = "";
}
</script>

<template>
  <form @submit.prevent="kirim">
    <input v-model="nama" placeholder="Nama" />
    <button type="submit">Simpan</button>
  </form>

  <ul>
    <li v-for="n in daftar" :key="n">{{ n }}</li>
  </ul>
</template>
```

Alurnya:

1. Pengguna mengetik nama, isinya tersimpan di `nama` lewat `v-model`.
2. Saat form dikirim, `kirim` memasukkan nama ke `daftar`, lalu mengosongkan input.
3. `v-for` menampilkan setiap nama dalam `daftar` sebagai satu `<li>`.

> **Ringkasan:** `ref`, event, `v-for`, `v-model`, dan form bekerja sama membentuk aplikasi yang interaktif.

---

## 10. Component & Import

### 10.a Apa itu component

**Component** adalah bagian kecil dari aplikasi yang dibuat dan digunakan secara terpisah. Setiap component ditulis dalam satu file `.vue` sendiri, dan berisi `<script>`, `<template>`, serta `<style>` miliknya.

> **Ringkasan:** component adalah potongan aplikasi yang berdiri sendiri dalam satu file `.vue`.

### 10.b Kenapa dipisah

Aplikasi yang besar akan sulit dibaca jika semua kodenya ada dalam satu file. Dengan component:

- Kode lebih rapi dan mudah dicari.
- Satu component bisa dipakai berkali-kali.
- Perubahan pada satu bagian tidak mengacaukan bagian lain.

> **Ringkasan:** component membuat kode lebih rapi dan bisa dipakai ulang.

### 10.c Struktur folder

Component biasanya disimpan dalam folder khusus bernama `components`.

```text
src/
├── App.vue
└── components/
    ├── Counter.vue
    ├── Question.vue
    └── Result.vue
```

`App.vue` adalah component utama tempat semua component lain dirakit, sedangkan folder `components` berisi component-component kecilnya.

> **Ringkasan:** simpan component di folder `components`, dan rakit di `App.vue`.

### 10.d Membuat component

Sebuah component dibuat seperti file `.vue` biasa. Berikut component `Counter` sederhana:

```vue
<!-- components/Counter.vue -->
<script setup>
import { ref } from "vue";

const jumlah = ref(0);
</script>

<template>
  <button @click="jumlah++">Klik: {{ jumlah }}</button>
</template>
```

Data `jumlah` milik `Counter` sendiri.

> **Ringkasan:** component adalah file `.vue` yang berisi bagian kecil dari tampilan.

### 10.e Import dan pakai

Untuk memakai component, kita **mengimpornya** di file yang membutuhkan, lalu menulisnya seperti tag HTML.

```vue
<!-- App.vue -->
<script setup>
import Counter from "./components/Counter.vue";
</script>

<template>
  <Counter />
</template>
```

Pada `import`, tanda `./` berarti "mulai dari folder saat ini". Nama yang dipakai sebagai tag, yaitu `<Counter />`, harus sama dengan nama saat diimpor.

> **Ringkasan:** `import` mengambil component dari file-nya, lalu dipakai seperti tag HTML.

### 10.f Dipakai berulang

Satu component bisa dipakai beberapa kali.

```vue
<template>
  <Counter />
  <Counter />
  <Counter />
</template>
```

Hasilnya tiga tombol, dan masing-masing punya `jumlah` sendiri. Mengklik satu tombol tidak memengaruhi tombol lainnya.

> **Ringkasan:** satu component bisa dipakai berkali-kali, dan setiap pemakaian punya datanya sendiri.

---

## Rangkuman Pertemuan

- **JavaScript dasar:** variable (`let`, `const`), tipe data, array, object, function, operator, dan kondisi.
- **Struktur Vue:** file `.vue` terdiri dari `script`, `template`, dan `style`. Data ditampilkan dengan `{{ }}` dan `:atribut`.
- **`ref`:** data yang perubahannya dipantau Vue. Pakai `.value` di `<script>`, tanpa `.value` di `<template>`.
- **Event:** `@click` menjalankan kode saat pengguna beraksi.
- **`v-if`, `v-else-if`, `v-else`:** menampilkan elemen berdasarkan kondisi.
- **`v-for`:** membuat elemen untuk setiap item dalam array, lengkap dengan `:key`.
- **Input dan `v-model`:** mengumpulkan data dari pengguna, terhubung dua arah dengan data.
- **Form:** `@submit.prevent` memproses data yang terkumpul.
- **Component dan import:** memecah aplikasi menjadi bagian-bagian kecil yang bisa dipakai ulang.
