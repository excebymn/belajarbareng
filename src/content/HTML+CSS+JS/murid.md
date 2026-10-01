---
jenis: murid
judul: "HTML Lanjutan, CSS, dan JavaScript Dasar"
deskripsi: "Mempelajari div, tabel, dan form di HTML, dasar CSS dengan box model dan flexbox, serta JavaScript dasar dengan DOM dan event."
---

# HTML Lanjutan, CSS, dan JavaScript Dasar

Pada materi ini kamu akan mempelajari: `div`, `span`, class, dan id, tabel, form dan input dasar, dasar CSS, box model, flexbox, dasar JavaScript, DOM, dan event.

Sebelum mulai, pastikan kamu sudah memahami: dasar HTML (tag, elemen, atribut, heading, paragraf, daftar, link, dan gambar) dari materi Pengenalan Web, serta dasar pemrograman dari Java atau C++.

Untuk berlatih, siapkan satu folder berisi tiga file: `index.html`, `style.css`, dan `script.js`.

---

## 1. Div, Span, Class, dan Id

Sejauh ini setiap elemen HTML punya arti tertentu, seperti judul atau paragraf. Kadang kita butuh pembungkus yang netral untuk mengelompokkan elemen dan memberinya nama, supaya nanti bisa ditata oleh CSS dan dikendalikan oleh JavaScript.

### 1.a div dan span

**`div`** adalah elemen pembungkus netral yang bersifat *block*: ia selalu mulai di baris baru dan memenuhi lebar yang tersedia. **`span`** adalah pembungkus netral yang bersifat *inline*: ia hanya selebar isinya dan tetap sebaris dengan teks di sekitarnya.

#### Cara menulis

```html
<div>
  <p>Ini paragraf di dalam div.</p>
  <p>Harga: <span>Rp10.000</span></p>
</div>
```

Elemen `div` membungkus dua paragraf sehingga keduanya menjadi satu kelompok. Elemen `span` membungkus sebagian teks di dalam paragraf tanpa memutus barisnya.

| | `div` | `span` |
|---|---|---|
| Jenis | Block | Inline |
| Posisi | Mulai di baris baru | Sebaris dengan teks |
| Dipakai untuk | Mengelompokkan elemen | Menandai sebagian teks |

> **Ringkasan:** `div` adalah pembungkus block untuk mengelompokkan elemen, dan `span` adalah pembungkus inline untuk menandai sebagian teks.

### 1.b class dan id

**`class`** dan **`id`** adalah atribut yang memberi nama pada sebuah elemen. Nama ini dipakai oleh CSS dan JavaScript untuk menemukan elemen tersebut.

#### Cara menulis

```html
<div class="kartu">Kartu biasa</div>
<div class="kartu penting">Kartu penting</div>
<p id="judul-utama">Selamat Datang</p>
```

Dua elemen pertama memakai class `kartu`, dan elemen kedua memakai dua class sekaligus yang dipisah spasi. Elemen terakhir memiliki id `judul-utama`.

| | `class` | `id` |
|---|---|---|
| Dipakai pada | Banyak elemen | Satu elemen saja |
| Jumlah per elemen | Boleh lebih dari satu | Hanya satu |
| Kegunaan | Mengelompokkan elemen yang tampil serupa | Menandai satu elemen yang unik |

> **Catatan:** Tulis nama dengan huruf kecil, tanpa spasi, dan pakai tanda hubung (`-`) sebagai pemisah kata. Satu id tidak boleh muncul dua kali dalam satu halaman.

> **Ringkasan:** `class` untuk kelompok elemen, `id` untuk satu elemen unik. Keduanya adalah nama yang dipakai CSS dan JavaScript.

---

## 2. Tabel

Tabel dipakai untuk menampilkan data dalam bentuk baris dan kolom, seperti daftar nilai atau jadwal.

### 2.a Struktur Tabel

**Tabel** dibuat dengan elemen `table`. Di dalamnya ada `tr` (*table row*) untuk satu baris, `th` (*table header*) untuk sel judul kolom, dan `td` (*table data*) untuk sel data.

#### Cara menulis

```html
<table>
  <tr>
    <th>Nama</th>
    <th>Kelas</th>
  </tr>
  <tr>
    <td>Rani</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Budi</td>
    <td>11</td>
  </tr>
</table>
```

Baris pertama berisi dua judul kolom, yaitu Nama dan Kelas. Dua baris berikutnya masing-masing berisi satu data siswa. Secara bawaan, browser menampilkan tabel tanpa garis. Garisnya akan kita tambahkan dengan CSS nanti.

> **Ringkasan:** `table` membungkus tabel, `tr` adalah baris, `th` adalah judul kolom, dan `td` adalah sel data.

### 2.b Header, Body, dan Penggabungan Sel

Agar struktur tabel lebih jelas, bagian judul dan bagian data bisa dikelompokkan dengan `thead` dan `tbody`. Sebuah sel juga bisa digabung dengan sel di sebelahnya memakai atribut `colspan`.

#### Cara menulis

```html
<table>
  <thead>
    <tr>
      <th>Nama</th>
      <th colspan="2">Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Rani</td>
      <td>80</td>
      <td>90</td>
    </tr>
  </tbody>
</table>
```

`thead` membungkus baris judul dan `tbody` membungkus baris data. Atribut `colspan="2"` membuat sel "Nilai" selebar dua kolom, sehingga pas di atas dua nilai milik Rani. Untuk menggabung sel ke arah bawah, gunakan `rowspan`.

> **Catatan:** Tabel hanya untuk menampilkan data. Jangan memakainya untuk mengatur tata letak halaman, karena untuk itu ada CSS.

> **Ringkasan:** `thead` dan `tbody` mengelompokkan isi tabel, dan `colspan` menggabungkan sel ke samping.

---

## 3. Form dan Input Dasar

**Form** dipakai untuk mengumpulkan data dari pengguna, seperti nama atau pilihan. Pada materi ini kita fokus pada tampilan form dan cara membaca nilainya dengan JavaScript. Pengiriman data ke server dibahas di materi lain.

### 3.a form, label, dan input Teks

Elemen **`form`** membungkus kumpulan kolom isian. Elemen **`input`** adalah kolom isian itu sendiri, dan elemen **`label`** adalah tulisan yang menjelaskan kolom tersebut.

#### Cara menulis

```html
<form>
  <label for="nama">Nama</label>
  <input type="text" id="nama" name="nama" placeholder="Tulis namamu">
</form>
```

Penjelasan:

- `label` memakai atribut `for` yang berisi id dari input yang dijelaskan. Dengan begitu, mengeklik label akan mengarahkan kursor ke input tersebut.
- `type="text"` membuat kolom isian teks biasa.
- `id` adalah nama unik untuk input, dan `name` adalah nama data yang dikirim bersama form.
- `placeholder` adalah teks petunjuk yang hilang saat pengguna mulai mengetik.

> **Ringkasan:** `form` membungkus isian, `label` menjelaskan, dan `input` dengan `type="text"` menerima teks.

### 3.b Jenis Input Lain

Atribut `type` pada `input` menentukan jenis isiannya.

| `type` | Fungsi |
|---|---|
| `text` | Teks biasa |
| `password` | Teks yang disamarkan |
| `number` | Angka |
| `email` | Alamat email |
| `checkbox` | Kotak centang (boleh pilih banyak) |
| `radio` | Tombol pilihan (hanya satu yang terpilih dalam satu grup) |

#### Cara menulis

```html
<input type="password" id="sandi">

<input type="number" id="umur" min="1" max="100">

<input type="checkbox" id="setuju">
<label for="setuju">Saya setuju</label>

<input type="radio" id="merah" name="warna" value="merah">
<label for="merah">Merah</label>
<input type="radio" id="biru" name="warna" value="biru">
<label for="biru">Biru</label>
```

Input `number` memakai `min` dan `max` untuk membatasi rentang angka. Dua tombol radio memakai `name` yang sama, yaitu `warna`, sehingga keduanya satu grup dan hanya satu yang bisa dipilih. Atribut `value` adalah nilai yang dibawa tombol saat terpilih.

> **Catatan:** Tombol radio dalam satu grup harus memiliki `name` yang sama.

> **Ringkasan:** Atribut `type` menentukan jenis isian. Radio dalam satu grup berbagi `name` yang sama.

### 3.c textarea, select, dan button

Selain `input`, ada elemen lain untuk isian: **`textarea`** untuk teks panjang, **`select`** untuk memilih dari daftar, dan **`button`** untuk tombol.

#### Cara menulis

```html
<textarea id="pesan" rows="4"></textarea>

<select id="kelas">
  <option value="10">Kelas 10</option>
  <option value="11">Kelas 11</option>
  <option value="12">Kelas 12</option>
</select>

<button type="button">Kirim</button>
```

`textarea` memakai `rows` untuk mengatur tinggi awalnya. Elemen `select` berisi beberapa `option`, dan `value` pada tiap `option` adalah nilai yang dipilih. Pada `button`, `type="button"` membuat tombol tidak mengirim form secara otomatis. Di dalam `form`, tombol tanpa `type` akan mengirim form dan memuat ulang halaman.

> **Ringkasan:** `textarea` untuk teks panjang, `select` dengan `option` untuk daftar pilihan, dan `button` untuk tombol.

### 3.d Formulir Lengkap

Gabungan semua elemen di atas menjadi satu formulir pendaftaran sederhana.

```html
<form>
  <h2>Pendaftaran</h2>

  <label for="nama">Nama</label>
  <input type="text" id="nama" name="nama" placeholder="Tulis namamu">

  <label for="umur">Umur</label>
  <input type="number" id="umur" name="umur" min="1" max="100">

  <label for="kelas">Kelas</label>
  <select id="kelas" name="kelas">
    <option value="10">Kelas 10</option>
    <option value="11">Kelas 11</option>
    <option value="12">Kelas 12</option>
  </select>

  <label for="pesan">Pesan</label>
  <textarea id="pesan" name="pesan" rows="4"></textarea>

  <input type="checkbox" id="setuju" name="setuju">
  <label for="setuju">Saya setuju</label>

  <button type="button">Daftar</button>
</form>
```

Formulir ini berisi isian teks, angka, pilihan, teks panjang, dan kotak centang. Setiap isian memiliki `id` unik yang nanti akan dipakai JavaScript untuk membaca nilainya.

> **Ringkasan:** Form dibangun dari kombinasi `label`, `input`, `select`, `textarea`, dan `button`. Setiap isian diberi `id` unik.

---

## 4. Dasar CSS

**CSS** (Cascading Style Sheets) adalah bahasa untuk mengatur tampilan halaman, seperti warna, ukuran huruf, dan jarak. Jika HTML adalah kerangka, CSS adalah penampilannya.

### 4.a Menambahkan CSS ke HTML

Ada tiga cara menambahkan CSS: file eksternal, tag `<style>` di dalam HTML, dan atribut `style` langsung pada elemen. Cara yang disarankan adalah **file eksternal**, karena memisahkan tampilan dari struktur dan bisa dipakai di banyak halaman.

#### Cara menulis

Di dalam `<head>` pada `index.html`, hubungkan file CSS dengan elemen `link`.

```html
<head>
  <meta charset="UTF-8">
  <title>Belajar CSS</title>
  <link rel="stylesheet" href="style.css">
</head>
```

Lalu tulis aturan CSS di file `style.css`.

```css
p {
  color: blue;
}
```

Atribut `rel="stylesheet"` memberi tahu browser bahwa file yang dihubungkan adalah lembar gaya, dan `href` berisi lokasi file tersebut. Aturan di `style.css` akan membuat semua paragraf bertulisan biru.

> **Ringkasan:** Hubungkan file `style.css` ke HTML dengan `link` di dalam `head`, lalu tulis aturan CSS di file tersebut.

### 4.b Selector dan Aturan

Sebuah **aturan CSS** terdiri dari **selector** (elemen yang dituju) dan **deklarasi** (apa yang diubah) di dalam kurung kurawal. Setiap deklarasi berbentuk `properti: nilai;`.

#### Cara menulis

```css
p {
  color: blue;
}

.kartu {
  background-color: lightyellow;
}

#judul-utama {
  color: darkred;
}

h1, h2 {
  font-family: Arial, sans-serif;
}

.kartu p {
  margin: 0;
}
```

| Selector | Contoh | Memilih |
|---|---|---|
| Tag | `p` | Semua elemen `p` |
| Class | `.kartu` | Semua elemen dengan class `kartu` (diawali titik) |
| Id | `#judul-utama` | Elemen dengan id `judul-utama` (diawali pagar) |
| Gabungan | `h1, h2` | Semua `h1` dan `h2` (dipisah koma) |
| Turunan | `.kartu p` | Elemen `p` yang berada di dalam `.kartu` (dipisah spasi) |

> **Catatan:** Jika dua aturan bertabrakan, id lebih kuat daripada class, dan class lebih kuat daripada tag. Jika kekuatannya sama, aturan yang ditulis paling akhir yang berlaku.

> **Ringkasan:** Aturan CSS berbentuk `selector { properti: nilai; }`. Selector bisa berupa tag, `.class`, atau `#id`.

### 4.c Warna, Font, dan Teks

Properti paling umum untuk mengatur tampilan teks dan warna.

#### Cara menulis

```css
body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #333333;
  background-color: #f5f5f5;
}

h1 {
  color: rgb(200, 30, 30);
  text-align: center;
  font-weight: bold;
}
```

| Properti | Fungsi |
|---|---|
| `color` | Warna teks |
| `background-color` | Warna latar |
| `font-family` | Jenis huruf, bisa berisi beberapa cadangan |
| `font-size` | Ukuran huruf |
| `font-weight` | Ketebalan huruf |
| `text-align` | Perataan teks (`left`, `center`, `right`) |

Warna bisa ditulis dengan tiga cara: nama (`red`), kode hex (`#333333`), atau `rgb` (`rgb(200, 30, 30)`). Pada kode hex dan `rgb`, nilai menunjukkan campuran merah, hijau, dan biru. Ukuran biasanya memakai satuan `px` (piksel).

> **Ringkasan:** `color` dan `background-color` mengatur warna, `font-family` dan `font-size` mengatur huruf, dan `text-align` mengatur perataan teks.

---

## 5. Box Model

Dalam CSS, setiap elemen dianggap sebagai sebuah kotak. Memahami kotak ini penting karena menentukan jarak dan ukuran elemen.

### 5.a Content, Padding, Border, dan Margin

Setiap kotak terdiri dari empat lapisan, dari dalam ke luar:

| Lapisan | Pengertian |
|---|---|
| Content | Isi elemen, seperti teks atau gambar |
| Padding | Jarak antara isi dan garis tepi (di dalam kotak) |
| Border | Garis tepi kotak |
| Margin | Jarak antara kotak ini dan elemen lain (di luar kotak) |

#### Cara menulis

```css
.kartu {
  padding: 16px;
  border: 2px solid black;
  margin: 12px;
}
```

`padding: 16px` memberi jarak 16 piksel antara isi dan garis tepi. `border: 2px solid black` membuat garis setebal 2 piksel, berjenis padat (`solid`), berwarna hitam. `margin: 12px` memberi jarak 12 piksel dari elemen di sekitarnya.

Dua nilai seperti `padding: 10px 20px` berarti 10 piksel untuk atas dan bawah, serta 20 piksel untuk kiri dan kanan.

#### Contoh pada tabel

Tabel dari bagian sebelumnya bisa diberi garis dengan border dan padding.

```css
table {
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 8px;
}
```

`border-collapse: collapse` menyatukan garis antar sel agar tidak ganda.

> **Ringkasan:** Kotak elemen terdiri dari content, padding, border, dan margin, dari dalam ke luar.

### 5.b Ukuran dan box-sizing

Ukuran kotak diatur dengan `width` (lebar) dan `height` (tinggi). Secara bawaan, ukuran itu hanya berlaku untuk bagian content, sehingga padding dan border akan menambah ukuran total kotak.

#### Cara menulis

```css
* {
  box-sizing: border-box;
}

.kartu {
  width: 200px;
  height: 100px;
  padding: 16px;
}
```

| `box-sizing` | Arti `width` |
|---|---|
| `content-box` (bawaan) | Lebar content saja, padding dan border ditambahkan di luarnya |
| `border-box` | Lebar total, sudah termasuk padding dan border |

Selector `*` memilih semua elemen. Dengan `border-box`, kartu di atas tetap selebar 200 piksel walaupun punya padding, sehingga ukuran lebih mudah diperkirakan. Banyak developer menuliskan aturan ini di awal setiap `style.css`.

> **Ringkasan:** `box-sizing: border-box` membuat `width` dan `height` sudah termasuk padding dan border.

---

## 6. Flexbox

**Flexbox** adalah cara menyusun elemen secara fleksibel dalam satu arah, baik mendatar maupun menurun. Ini adalah alat utama untuk mengatur tata letak di CSS modern.

### 6.a Container dan Item

Flexbox bekerja dengan dua peran: **container** (elemen pembungkus yang diberi `display: flex`) dan **item** (elemen-elemen anak langsung di dalamnya).

#### Cara menulis

```html
<div class="baris">
  <div class="kotak">1</div>
  <div class="kotak">2</div>
  <div class="kotak">3</div>
</div>
```

```css
.baris {
  display: flex;
}

.kotak {
  width: 80px;
  height: 80px;
  background-color: lightblue;
}
```

Tanpa flexbox, tiga `div` akan tersusun ke bawah. Dengan `display: flex` pada `.baris`, ketiga kotak menjadi sejajar mendatar.

Arah susunan diatur dengan `flex-direction`:

| Nilai | Arah |
|---|---|
| `row` (bawaan) | Mendatar, dari kiri ke kanan |
| `column` | Menurun, dari atas ke bawah |

> **Ringkasan:** `display: flex` pada pembungkus menyusun anak-anaknya sejajar. `flex-direction` menentukan arahnya.

### 6.b Perataan dan Jarak

Flexbox memiliki dua sumbu: **sumbu utama** (searah `flex-direction`) dan **sumbu silang** (tegak lurus dengannya). Perataan diatur dengan properti berikut.

#### Cara menulis

```css
.baris {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
```

| Properti | Mengatur | Nilai umum |
|---|---|---|
| `justify-content` | Perataan di sumbu utama | `flex-start`, `center`, `flex-end`, `space-between` |
| `align-items` | Perataan di sumbu silang | `stretch` (bawaan), `flex-start`, `center`, `flex-end` |
| `gap` | Jarak antar item | Ukuran, misalnya `16px` |

Pada contoh di atas, item tersebar dengan ruang di antaranya (`space-between`), sejajar di tengah secara vertikal (`center`), dan berjarak 16 piksel satu sama lain.

> **Catatan:** Pada `flex-direction: column`, sumbu utama menjadi vertikal, sehingga fungsi `justify-content` dan `align-items` ikut bertukar arah.

> **Ringkasan:** `justify-content` meratakan di sumbu utama, `align-items` di sumbu silang, dan `gap` mengatur jarak antar item.

### 6.c Deretan Kartu

Gabungan box model dan flexbox untuk membuat tiga kartu sejajar dengan lebar sama.

```html
<div class="deretan">
  <div class="kartu">
    <h2>Kartu 1</h2>
    <p>Isi kartu pertama.</p>
  </div>
  <div class="kartu">
    <h2>Kartu 2</h2>
    <p>Isi kartu kedua.</p>
  </div>
  <div class="kartu">
    <h2>Kartu 3</h2>
    <p>Isi kartu ketiga.</p>
  </div>
</div>
```

```css
* {
  box-sizing: border-box;
}

.deretan {
  display: flex;
  gap: 16px;
}

.kartu {
  flex: 1;
  padding: 16px;
  border: 1px solid #cccccc;
  background-color: white;
}
```

Properti `flex: 1` pada tiap kartu membuat ketiganya berbagi lebar yang tersedia secara sama rata. Padding dan border memberi ruang dan garis tepi pada setiap kartu.

> **Ringkasan:** `flex: 1` membuat item berbagi lebar secara merata. Kombinasi flexbox dan box model cukup untuk membuat tata letak sederhana.

---

## 7. Variabel, Tipe Data, dan Kondisi

**JavaScript** adalah bahasa pemrograman yang berjalan di browser dan membuat halaman web menjadi interaktif. Konsep seperti variabel, kondisi, dan perulangan sama dengan yang kamu kenal dari Java atau C++, hanya penulisannya berbeda.

### 7.a Menambahkan JavaScript ke HTML

Seperti CSS, JavaScript paling rapi ditulis di file terpisah lalu dihubungkan ke HTML dengan elemen `script`.

#### Cara menulis

Tambahkan `script` di bagian akhir `body` pada `index.html`.

```html
<body>
  <h1>Halo</h1>

  <script src="script.js"></script>
</body>
```

Lalu tulis kode di file `script.js`.

```js
console.log('Halo dari JavaScript')
```

Atribut `src` berisi lokasi file JavaScript. Elemen `script` diletakkan di akhir `body` agar semua elemen di atasnya sudah dimuat sebelum kode berjalan. Perintah `console.log` mencetak sesuatu ke **Console**, yaitu panel khusus di browser. Buka dengan menekan `F12`, lalu pilih tab **Console**.

> **Catatan:** Di JavaScript, tanda titik koma di akhir baris boleh tidak ditulis. Pada materi ini kita menulisnya tanpa titik koma.

> **Ringkasan:** Hubungkan `script.js` dengan `script` di akhir `body`, dan lihat hasil `console.log` di tab Console (`F12`).

### 7.b Variabel dan Tipe Data

**Variabel** adalah tempat menyimpan nilai. JavaScript memiliki dua kata kunci utama untuk membuatnya: `let` untuk nilai yang boleh berubah, dan `const` untuk nilai yang tetap.

#### Cara menulis

```js
let umur = 17
const nama = 'Rani'
let lulus = true

umur = 18
console.log(nama, umur, lulus)
console.log(`Halo, ${nama}`)
```

Variabel `umur` dibuat dengan `let` sehingga bisa diubah menjadi 18. Variabel `nama` dibuat dengan `const` sehingga tidak boleh diberi nilai baru. Baris terakhir memakai tanda kutip terbalik (`` ` ``) dan `${...}` untuk menyisipkan nilai variabel ke dalam teks.

Tipe data dasar:

| Tipe | Contoh | Arti |
|---|---|---|
| String | `'Rani'` | Teks |
| Number | `17`, `3.5` | Angka (bulat maupun desimal) |
| Boolean | `true`, `false` | Benar atau salah |

Berbeda dengan Java dan C++, kamu tidak menuliskan tipe saat membuat variabel. Tipe ditentukan oleh nilainya.

| | Java / C++ | JavaScript |
|---|---|---|
| Contoh | `int umur = 17;` | `let umur = 17` |
| Tipe variabel | Ditulis saat deklarasi | Mengikuti nilai yang disimpan |

> **Ringkasan:** `let` untuk nilai yang bisa berubah dan `const` untuk nilai tetap. Tipe data ditentukan oleh nilainya, tidak ditulis di deklarasi.

### 7.c Operator dan Kondisi

**Operator** adalah simbol untuk menghitung atau membandingkan nilai. **Kondisi** memakai hasil perbandingan untuk memilih kode yang dijalankan.

| Jenis | Operator |
|---|---|
| Aritmatika | `+`, `-`, `*`, `/`, `%` (sisa bagi) |
| Perbandingan | `===`, `!==`, `>`, `<`, `>=`, `<=` |
| Logika | `&&` (dan), `\|\|` (atau), `!` (bukan) |

> **Catatan:** Untuk memeriksa kesamaan, gunakan `===`, bukan `==`. Operator `===` membandingkan nilai sekaligus tipenya sehingga hasilnya lebih dapat diprediksi.

#### Cara menulis

```js
const nilai = 75

if (nilai >= 80) {
  console.log('Sangat baik')
} else if (nilai >= 60) {
  console.log('Cukup')
} else {
  console.log('Perlu belajar lagi')
}
```

Kondisi diperiksa dari atas ke bawah. Karena `nilai` bernilai 75, kondisi pertama salah, kondisi kedua benar, sehingga yang tercetak adalah `Cukup`.

> **Ringkasan:** `if`, `else if`, dan `else` memilih kode berdasarkan perbandingan. Pakai `===` untuk memeriksa kesamaan.

---

## 8. Array, Perulangan, dan Function

Tiga alat ini dipakai hampir di setiap program: array untuk menyimpan banyak nilai, perulangan untuk mengulang tugas, dan function untuk membungkus kode agar bisa dipakai ulang.

### 8.a Array

**Array** adalah daftar nilai berurutan yang disimpan dalam satu variabel. Setiap nilai punya nomor urut (indeks) yang dimulai dari 0.

#### Cara menulis

```js
const buah = ['apel', 'jeruk', 'mangga']

console.log(buah[0])
console.log(buah.length)
buah.push('pisang')
console.log(buah)
```

Baris `buah[0]` mengambil nilai pertama, yaitu `apel`. `buah.length` menghasilkan jumlah isi array, yaitu 3. Perintah `buah.push('pisang')` menambahkan nilai baru di akhir array. Array yang dibuat dengan `const` tetap boleh diisi atau diubah isinya. Yang tidak boleh adalah mengganti variabelnya dengan array lain.

> **Ringkasan:** Array menyimpan daftar nilai dengan indeks dari 0. Gunakan `length` untuk jumlah dan `push` untuk menambah.

### 8.b Perulangan

**Perulangan** menjalankan kode yang sama berulang kali. Cara paling umum untuk menelusuri array adalah `for`.

#### Cara menulis

```js
for (let i = 0; i < buah.length; i++) {
  console.log(buah[i])
}

for (const item of buah) {
  console.log(item)
}
```

Perulangan pertama sama seperti di Java atau C++: variabel `i` mulai dari 0, berjalan selama `i < buah.length`, dan naik satu setiap putaran. Perulangan kedua memakai `for...of` yang lebih ringkas: tiap putaran, `item` berisi satu nilai dari array secara berurutan. Keduanya mencetak isi `buah` satu per satu.

> **Ringkasan:** `for` biasa mengulang dengan penghitung, sedangkan `for...of` mengambil isi array satu per satu.

### 8.c Function

**Function** adalah blok kode bernama yang bisa dipanggil berulang kali. Function dapat menerima nilai masukan (*parameter*) dan mengembalikan hasil dengan `return`.

#### Cara menulis

```js
function sapa(nama) {
  return 'Halo, ' + nama
}

const pesan = sapa('Rani')
console.log(pesan)
```

Function `sapa` menerima satu parameter bernama `nama`, lalu mengembalikan teks gabungan. Saat dipanggil dengan `sapa('Rani')`, hasilnya `Halo, Rani` disimpan ke variabel `pesan`.

#### Function sebagai nilai

Function juga bisa disimpan di variabel dan dikirim sebagai nilai ke tempat lain.

```js
const kali = function (a, b) {
  return a * b
}

console.log(kali(3, 4))
```

Variabel `kali` berisi sebuah function tanpa nama. Pemanggilan `kali(3, 4)` mencetak `12`. Kemampuan ini akan terpakai pada bagian Event, saat kita menyerahkan function ke browser untuk dijalankan kelak.

> **Ringkasan:** Function membungkus kode agar bisa dipakai ulang, menerima parameter, dan mengembalikan hasil dengan `return`. Function juga bisa disimpan di variabel.

---

## 9. DOM

**DOM** (Document Object Model) adalah representasi halaman HTML sebagai kumpulan objek yang bisa dibaca dan diubah oleh JavaScript. Dengan DOM, JavaScript bisa mengganti teks, mengubah tampilan, dan menambah elemen tanpa memuat ulang halaman.

### 9.a Memilih Elemen

Sebelum mengubah sebuah elemen, kita harus memilihnya dulu. Objek `document` mewakili seluruh halaman dan menyediakan perintah untuk memilih elemen.

#### Cara menulis

```html
<h1 id="judul-utama">Selamat Datang</h1>
<div class="kartu">Kartu 1</div>
<div class="kartu">Kartu 2</div>
```

```js
const judul = document.querySelector('#judul-utama')
const semuaKartu = document.querySelectorAll('.kartu')
```

`querySelector` menerima selector CSS dan mengembalikan **satu** elemen pertama yang cocok. `querySelectorAll` mengembalikan **semua** elemen yang cocok sebagai daftar, yang bisa ditelusuri dengan `for...of`. Karena memakai selector CSS, `#` dipakai untuk id dan `.` untuk class, sama seperti di CSS.

> **Catatan:** Ada juga `document.getElementById('judul-utama')` untuk memilih berdasarkan id. Hasilnya sama dengan `querySelector('#judul-utama')`.

> **Ringkasan:** `querySelector` memilih satu elemen dan `querySelectorAll` memilih semua elemen yang cocok, memakai selector CSS.

### 9.b Mengubah Isi dan Tampilan

Setelah elemen terpilih, kita bisa mengubah teks dan tampilannya lewat properti elemen tersebut.

#### Cara menulis

```js
judul.textContent = 'Halo, Dunia!'
judul.style.color = 'red'
judul.style.backgroundColor = 'yellow'

judul.classList.add('besar')
judul.classList.remove('besar')
judul.classList.toggle('aktif')
```

- `textContent` membaca atau mengganti teks di dalam elemen.
- `style` mengubah gaya langsung. Nama properti CSS yang memakai tanda hubung ditulis dengan huruf besar di awal kata berikutnya, misalnya `background-color` menjadi `backgroundColor`.
- `classList` mengatur class pada elemen. `add` menambah class, `remove` menghapus class, dan `toggle` menambahkannya bila belum ada atau menghapusnya bila sudah ada.

Mengubah tampilan lewat `classList` biasanya lebih rapi, karena aturan gayanya tetap ditulis di CSS dan JavaScript hanya menukar class.

> **Ringkasan:** `textContent` mengubah teks, `style` mengubah gaya langsung, dan `classList` menambah atau menghapus class.

### 9.c Menambah Elemen Baru

JavaScript juga bisa membuat elemen baru dan memasangnya ke halaman.

#### Cara menulis

```html
<ul id="daftar"></ul>
```

```js
const daftar = document.querySelector('#daftar')

const item = document.createElement('li')
item.textContent = 'Apel'
daftar.appendChild(item)
```

`createElement('li')` membuat elemen `li` baru yang belum tampil di halaman. Teksnya diisi lewat `textContent`. Perintah `daftar.appendChild(item)` memasang `item` sebagai anak terakhir dari `daftar`, sehingga ia mulai tampil.

> **Ringkasan:** `createElement` membuat elemen baru, dan `appendChild` memasangnya ke dalam elemen lain agar tampil.

---

## 10. Event

**Event** adalah kejadian yang terjadi di halaman, seperti pengguna mengeklik tombol atau mengetik di kolom isian. Dengan JavaScript, kita bisa menjalankan kode setiap kali event tertentu terjadi.

### 10.a Event Click

Cara memasang kode yang berjalan saat event terjadi adalah dengan `addEventListener`. Function yang diberikan akan dipanggil browser setiap kali event itu muncul.

#### Cara menulis

```html
<button id="tombol">Klik saya</button>
<p id="pesan"></p>
```

```js
const tombol = document.querySelector('#tombol')
const pesan = document.querySelector('#pesan')

tombol.addEventListener('click', function () {
  pesan.textContent = 'Tombol diklik!'
})
```

Perintah `addEventListener` menerima dua nilai: jenis event (`'click'`) dan function yang dijalankan saat event terjadi. Function itu tidak langsung berjalan. Ia baru dipanggil setiap kali tombol diklik, lalu mengganti teks pada elemen `pesan`.

Beberapa jenis event yang umum:

| Event | Terjadi saat |
|---|---|
| `click` | Elemen diklik |
| `input` | Isi kolom isian berubah |
| `keydown` | Sebuah tombol keyboard ditekan |
| `mouseover` | Kursor masuk ke area elemen |

> **Ringkasan:** `addEventListener(jenis, function)` menjalankan function setiap kali event terjadi pada elemen.

### 10.b Membaca Nilai Input

Isi dari `input` dibaca lewat properti `value`.

#### Cara menulis

```html
<input type="text" id="nama">
<button id="tombol">Sapa</button>
<p id="hasil"></p>
```

```js
const inputNama = document.querySelector('#nama')
const tombol = document.querySelector('#tombol')
const hasil = document.querySelector('#hasil')

tombol.addEventListener('click', function () {
  hasil.textContent = 'Halo, ' + inputNama.value
})
```

Saat tombol diklik, function membaca `inputNama.value`, yaitu teks yang sedang diketik pengguna, lalu menampilkannya bersama kata "Halo" di elemen `hasil`.

> **Catatan:** `value` selalu bertipe string, termasuk pada `input` dengan `type="number"`. Gunakan `Number(inputUmur.value)` bila kamu perlu mengubahnya menjadi angka.

> **Ringkasan:** `value` membaca isi sebuah input sebagai string.

### 10.c Daftar Belanja

Gabungan DOM dan event untuk membuat daftar belanja sederhana: pengguna mengetik nama barang, lalu menekan tombol untuk menambahkannya ke daftar.

```html
<h1>Daftar Belanja</h1>
<input type="text" id="input-barang" placeholder="Nama barang">
<button id="tombol-tambah">Tambah</button>
<ul id="daftar"></ul>
```

```js
const input = document.querySelector('#input-barang')
const tombol = document.querySelector('#tombol-tambah')
const daftar = document.querySelector('#daftar')

tombol.addEventListener('click', function () {
  const nama = input.value

  if (nama === '') {
    return
  }

  const item = document.createElement('li')
  item.textContent = nama
  daftar.appendChild(item)

  input.value = ''
})
```

Setiap kali tombol diklik, function membaca teks dari input. Jika kosong, function berhenti dengan `return`. Jika terisi, function membuat elemen `li` baru, mengisinya dengan teks tersebut, memasangnya ke daftar, lalu mengosongkan kolom input agar siap menerima barang berikutnya.

> **Ringkasan:** Alurnya: tunggu event, baca data dari input, ubah halaman lewat DOM. Pola ini dipakai di hampir semua halaman interaktif.

---

## Rangkuman Pertemuan

- `div` adalah pembungkus block, `span` adalah pembungkus inline, `class` untuk kelompok elemen, dan `id` untuk satu elemen unik.
- Tabel dibuat dengan `table`, `tr`, `th`, dan `td`. Form dibangun dari `form`, `label`, `input`, `textarea`, `select`, dan `button`.
- CSS ditulis di file terpisah dengan pola `selector { properti: nilai; }` dan dihubungkan lewat `link`.
- Box model terdiri dari content, padding, border, dan margin. `box-sizing: border-box` membuat ukuran sudah termasuk padding dan border.
- Flexbox menyusun elemen dengan `display: flex`, lalu diatur dengan `justify-content`, `align-items`, dan `gap`.
- JavaScript memakai `let`, `const`, `if`, `for`, array, dan function, dengan tipe yang mengikuti nilai.
- DOM memungkinkan JavaScript memilih elemen (`querySelector`), mengubah isi dan tampilan, serta menambah elemen baru.
- Event dipasang dengan `addEventListener`, dan nilai input dibaca lewat `value`.
