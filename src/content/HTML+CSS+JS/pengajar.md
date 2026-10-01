---
jenis: pengajar
judul: "HTML Lanjutan, CSS, dan JavaScript Dasar"
deskripsi: "Mempelajari div, tabel, dan form di HTML, dasar CSS dengan box model dan flexbox, serta JavaScript dasar dengan DOM dan event."
---

# Modul Pengajar: HTML Lanjutan, CSS, dan JavaScript Dasar

Scope materi: dari div, tabel, dan form di HTML, lalu dasar CSS sampai flexbox, sampai JavaScript dasar dengan DOM dan event.

| Blok | Isi | Jeda |
|---|---|---|
| 1 | Div, span, class, id, tabel, form dan input | Jeda |
| 2 | Dasar CSS, box model, flexbox | Jeda |
| 3 | Variabel, tipe data, kondisi, array, perulangan, function | Jeda |
| 4 | DOM dan event | Selesai |

Catatan: komentar di dalam kode diletakkan tepat di bawah baris yang dijelaskan.

---

# BLOK 1

## 1. Div, Span, Class, dan Id

### 1.a div dan span

- **div:** pembungkus netral bersifat block, mulai di baris baru dan memenuhi lebar.

```html
<div>
  <!-- pembungkus block untuk mengelompokkan elemen di dalamnya -->
  <p>Ini paragraf di dalam div.</p>
  <!-- dua paragraf ini menjadi satu kelompok karena dibungkus div -->
</div>
```

- **span:** pembungkus netral bersifat inline, hanya selebar isinya dan tetap sebaris dengan teks.

```html
<p>Harga: <span>Rp10.000</span></p>
<!-- span menandai sebagian teks tanpa memutus baris -->
```

- **Mental model:** div = kotak untuk mengelompokkan elemen, span = penanda untuk sebagian teks.

### 1.b class dan id

- **class:** nama kelompok, boleh dipakai banyak elemen dan satu elemen boleh punya beberapa class.

```html
<div class="kartu">Kartu biasa</div>
<!-- class kartu dipakai di banyak elemen sebagai nama kelompok -->
<div class="kartu penting">Kartu penting</div>
<!-- dua class dipisah spasi, elemen ini ikut kelompok kartu dan penting -->
```

- **id:** nama unik, satu id hanya boleh muncul sekali per halaman.

```html
<p id="judul-utama">Selamat Datang</p>
<!-- id judul-utama menandai satu elemen unik yang nanti dicari CSS dan JavaScript -->
```

## 2. Tabel

### 2.a Struktur Tabel

- **table, tr, th, td:** `table` pembungkus, `tr` baris, `th` judul kolom, `td` sel data.

```html
<table>
  <!-- pembungkus seluruh tabel -->
  <tr>
    <!-- satu baris, baris pertama berisi judul kolom -->
    <th>Nama</th>
    <!-- th adalah sel judul kolom -->
    <th>Kelas</th>
  </tr>
  <tr>
    <!-- baris kedua berisi data -->
    <td>Rani</td>
    <!-- td adalah sel data -->
    <td>10</td>
  </tr>
</table>
```

- **Tampilan bawaan:** tabel tampil tanpa garis, garis ditambahkan nanti lewat CSS.

### 2.b Header, Body, dan Penggabungan Sel

- **thead dan tbody:** mengelompokkan baris judul dan baris data.
- **colspan:** menggabungkan sel ke samping (`rowspan` untuk ke bawah).

```html
<table>
  <thead>
    <!-- kelompok baris judul -->
    <tr>
      <th>Nama</th>
      <th colspan="2">Nilai</th>
      <!-- colspan="2" membuat sel ini selebar dua kolom -->
    </tr>
  </thead>
  <tbody>
    <!-- kelompok baris data -->
    <tr>
      <td>Rani</td>
      <td>80</td>
      <td>90</td>
      <!-- dua nilai ini berada tepat di bawah sel Nilai yang digabung -->
    </tr>
  </tbody>
</table>
```

- **Mental model:** tabel hanya untuk data, bukan untuk tata letak halaman.

## 3. Form dan Input Dasar

### 3.a form, label, dan input Teks

- **form, label, input:** `form` pembungkus isian, `label` penjelas, `input` kolom isian.

```html
<form>
  <!-- pembungkus kumpulan isian -->
  <label for="nama">Nama</label>
  <!-- for berisi id input yang dijelaskan, klik label akan fokus ke input -->
  <input type="text" id="nama" name="nama" placeholder="Tulis namamu">
  <!-- type text = isian teks, id nama unik, name nama data, placeholder teks petunjuk -->
</form>
```

### 3.b Jenis Input Lain

- **Atribut type:** menentukan jenis isian (`text`, `password`, `number`, `email`, `checkbox`, `radio`).

```html
<input type="password" id="sandi">
<!-- teks yang diketik disamarkan -->
<input type="number" id="umur" min="1" max="100">
<!-- hanya angka, min dan max membatasi rentang -->
<input type="checkbox" id="setuju">
<!-- kotak centang, boleh pilih banyak -->
<label for="setuju">Saya setuju</label>
<!-- label untuk checkbox di atas lewat id setuju -->
```

- **Radio:** satu grup berbagi `name` yang sama sehingga hanya satu yang terpilih.

```html
<input type="radio" id="merah" name="warna" value="merah">
<!-- name warna menandai grup, value merah dibawa saat terpilih -->
<input type="radio" id="biru" name="warna" value="biru">
<!-- name sama dengan di atas, jadi hanya salah satu yang bisa dipilih -->
```

### 3.c textarea, select, dan button

- **textarea:** isian teks panjang, tinggi awal diatur `rows`.

```html
<textarea id="pesan" rows="4"></textarea>
<!-- rows="4" mengatur tinggi awal sebanyak empat baris -->
```

- **select dan option:** pilihan dari daftar, `value` di `option` adalah nilai yang dipilih.

```html
<select id="kelas">
  <!-- pembungkus daftar pilihan -->
  <option value="10">Kelas 10</option>
  <!-- value 10 adalah nilai yang terbaca bila opsi ini dipilih -->
  <option value="11">Kelas 11</option>
</select>
```

- **button:** `type="button"` mencegah tombol mengirim form dan memuat ulang halaman.

```html
<button type="button">Kirim</button>
<!-- type button = tombol biasa, tidak otomatis mengirim form -->
```

### 3.d Formulir Lengkap

Gabungan isian teks, angka, pilihan, teks panjang, dan checkbox menjadi satu formulir.

```html
<form>
  <h2>Pendaftaran</h2>
  <!-- judul formulir -->

  <label for="nama">Nama</label>
  <input type="text" id="nama" name="nama" placeholder="Tulis namamu">
  <!-- isian teks, id nama akan dipakai JavaScript nanti -->

  <label for="umur">Umur</label>
  <input type="number" id="umur" name="umur" min="1" max="100">
  <!-- isian angka dengan batas 1 sampai 100 -->

  <label for="kelas">Kelas</label>
  <select id="kelas" name="kelas">
    <!-- daftar pilihan kelas -->
    <option value="10">Kelas 10</option>
    <option value="11">Kelas 11</option>
    <option value="12">Kelas 12</option>
  </select>

  <label for="pesan">Pesan</label>
  <textarea id="pesan" name="pesan" rows="4"></textarea>
  <!-- isian teks panjang empat baris -->

  <input type="checkbox" id="setuju" name="setuju">
  <label for="setuju">Saya setuju</label>
  <!-- kotak centang beserta labelnya -->

  <button type="button">Daftar</button>
  <!-- tombol biasa, belum mengirim apa pun -->
</form>
```

- **Alur pikir:** form → label + input → pilih type yang sesuai → beri id unik.

---

# BLOK 2

## 4. Dasar CSS

### 4.a Menambahkan CSS ke HTML

- **Tiga cara:** file eksternal (disarankan), tag `<style>`, atau atribut `style` pada elemen.
- **File eksternal:** dihubungkan lewat `link` di dalam `head`.

```html
<head>
  <link rel="stylesheet" href="style.css">
  <!-- rel menandai file ini lembar gaya, href berisi lokasi file CSS -->
</head>
```

```css
p {
  color: blue;
  /* semua paragraf bertulisan biru */
}
```

### 4.b Selector dan Aturan

- **Aturan CSS:** selector + kurung kurawal berisi deklarasi `properti: nilai;`.

```css
p {
  color: blue;
  /* selector tag p memilih semua paragraf */
}
```

- **Class dan id:** class diawali titik, id diawali pagar.

```css
.kartu {
  background-color: lightyellow;
  /* titik memilih semua elemen ber-class kartu */
}

#judul-utama {
  color: darkred;
  /* pagar memilih satu elemen ber-id judul-utama */
}
```

- **Gabungan dan turunan:** koma untuk beberapa selector sekaligus, spasi untuk elemen di dalam elemen.

```css
h1, h2 {
  font-family: Arial, sans-serif;
  /* koma membuat aturan berlaku untuk h1 dan h2 sekaligus */
}

.kartu p {
  margin: 0;
  /* spasi memilih p yang berada di dalam elemen ber-class kartu */
}
```

- **Prioritas:** id lebih kuat dari class, class lebih kuat dari tag. Jika sama kuat, yang ditulis terakhir menang.

### 4.c Warna, Font, dan Teks

- **Warna dan huruf dasar:** diatur pada `body` agar berlaku untuk seluruh halaman.

```css
body {
  font-family: Arial, sans-serif;
  /* jenis huruf utama, sans-serif sebagai cadangan */
  font-size: 16px;
  /* ukuran huruf dasar dalam piksel */
  color: #333333;
  /* warna teks dengan kode hex */
  background-color: #f5f5f5;
  /* warna latar halaman */
}
```

- **Teks pada judul:** warna rgb, perataan, dan ketebalan.

```css
h1 {
  color: rgb(200, 30, 30);
  /* warna dari campuran merah, hijau, biru */
  text-align: center;
  /* meratakan teks ke tengah */
  font-weight: bold;
  /* menebalkan huruf */
}
```

- **Tiga cara menulis warna:** nama (`red`), hex (`#333333`), `rgb(...)`.

## 5. Box Model

### 5.a Content, Padding, Border, dan Margin

- **Empat lapisan:** content (isi), padding (jarak dalam), border (garis tepi), margin (jarak luar).

```css
.kartu {
  padding: 16px;
  /* jarak antara isi dan garis tepi, berada di dalam kotak */
  border: 2px solid black;
  /* garis tepi: tebal, jenis padat, warna hitam */
  margin: 12px;
  /* jarak kotak ke elemen lain, berada di luar kotak */
}
```

- **Dua nilai:** nilai pertama untuk atas-bawah, nilai kedua untuk kiri-kanan.

```css
.kartu {
  padding: 10px 20px;
  /* 10px untuk atas dan bawah, 20px untuk kiri dan kanan */
}
```

- **Garis pada tabel:** `border-collapse` menyatukan garis antar sel.

```css
table {
  border-collapse: collapse;
  /* garis antar sel disatukan agar tidak ganda */
}

th, td {
  border: 1px solid black;
  /* garis tipis hitam di setiap sel */
  padding: 8px;
  /* ruang di dalam sel agar teks tidak menempel garis */
}
```

- **Mental model:** elemen = kotak berlapis, dari dalam: content → padding → border → margin.

### 5.b Ukuran dan box-sizing

- **width dan height:** mengatur lebar dan tinggi. Secara bawaan (`content-box`) hanya mengukur content.
- **border-box:** ukuran sudah termasuk padding dan border.

```css
* {
  box-sizing: border-box;
  /* bintang memilih semua elemen, ukuran jadi sudah termasuk padding dan border */
}

.kartu {
  width: 200px;
  /* lebar total kartu, tetap 200px walaupun ada padding */
  height: 100px;
  /* tinggi total kartu */
  padding: 16px;
  /* padding tidak menambah ukuran total karena border-box */
}
```

## 6. Flexbox

### 6.a Container dan Item

- **Container dan item:** pembungkus diberi `display: flex`, anak langsungnya menjadi item.

```html
<div class="baris">
  <!-- container flexbox -->
  <div class="kotak">1</div>
  <div class="kotak">2</div>
  <div class="kotak">3</div>
  <!-- tiga item di dalam container -->
</div>
```

```css
.baris {
  display: flex;
  /* anak-anak langsung sejajar mendatar, tidak lagi menumpuk ke bawah */
}

.kotak {
  width: 80px;
  height: 80px;
  background-color: lightblue;
  /* ukuran dan warna kotak agar terlihat */
}
```

- **Arah susunan:** `flex-direction` bernilai `row` (mendatar, bawaan) atau `column` (menurun).

```css
.baris {
  flex-direction: column;
  /* mengubah susunan menjadi menurun */
}
```

### 6.b Perataan dan Jarak

- **Dua sumbu:** sumbu utama searah `flex-direction`, sumbu silang tegak lurus dengannya.

```css
.baris {
  display: flex;
  justify-content: space-between;
  /* meratakan item di sumbu utama, ruang tersebar di antara item */
  align-items: center;
  /* meratakan item di sumbu silang, sejajar di tengah */
  gap: 16px;
  /* jarak antar item */
}
```

- **Nilai justify-content:** `flex-start`, `center`, `flex-end`, `space-between`.
- **Nilai align-items:** `stretch` (bawaan), `flex-start`, `center`, `flex-end`.
- **Mental model:** pada `column`, sumbu utama jadi vertikal sehingga arah `justify-content` dan `align-items` bertukar.

### 6.c Deretan Kartu

Tiga kartu sejajar dengan lebar sama, gabungan box model dan flexbox.

```html
<div class="deretan">
  <!-- container flexbox untuk tiga kartu -->
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
  /* ukuran sudah termasuk padding dan border */
}

.deretan {
  display: flex;
  /* kartu-kartu sejajar mendatar */
  gap: 16px;
  /* jarak antar kartu */
}

.kartu {
  flex: 1;
  /* tiap kartu berbagi lebar yang tersedia secara sama rata */
  padding: 16px;
  /* ruang di dalam kartu */
  border: 1px solid #cccccc;
  /* garis tepi abu-abu tipis */
  background-color: white;
  /* latar putih */
}
```

- **Alur pikir:** container flex → item berbagi lebar → atur jarak dan perataan.

---

# BLOK 3

## 7. Variabel, Tipe Data, dan Kondisi

### 7.a Menambahkan JavaScript ke HTML

- **Elemen script:** dihubungkan ke file `script.js`, diletakkan di akhir `body`.

```html
<body>
  <h1>Halo</h1>
  <script src="script.js"></script>
  <!-- dimuat di akhir body agar semua elemen di atasnya sudah ada saat kode berjalan -->
</body>
```

- **console.log:** mencetak ke Console, dibuka dengan `F12` lalu tab Console.

```js
console.log('Halo dari JavaScript')
// mencetak teks ke Console browser
```

- **Titik koma:** boleh tidak ditulis di akhir baris, pada materi ini ditulis tanpa titik koma.

### 7.b Variabel dan Tipe Data

- **let dan const:** `let` untuk nilai yang boleh berubah, `const` untuk nilai tetap.

```js
let umur = 17
// let membuat variabel yang nilainya boleh diganti
const nama = 'Rani'
// const membuat variabel yang nilainya tidak boleh diganti
let lulus = true
// boolean: benar atau salah

umur = 18
// nilai umur diganti, boleh karena dibuat dengan let
console.log(nama, umur, lulus)
// mencetak ketiga nilai sekaligus
```

- **Tipe data dasar:** string (teks), number (angka), boolean (true atau false).
- **Beda dengan Java/C++:** tipe tidak ditulis saat deklarasi, tipe mengikuti nilai.

```js
let umur = 17
// di Java: int umur = 17; di JavaScript cukup let tanpa menulis tipe
```

- **Template string:** tanda kutip terbalik dan `${...}` untuk menyisipkan nilai ke teks.

```js
console.log(`Halo, ${nama}`)
// ${nama} diganti nilai variabel nama, hasilnya Halo, Rani
```

### 7.c Operator dan Kondisi

- **Operator:** aritmatika (`+ - * / %`), perbandingan (`=== !== > < >= <=`), logika (`&& || !`).
- **Gunakan `===`:** membandingkan nilai sekaligus tipenya.

```js
console.log(5 === '5')
// false, karena angka dan teks berbeda tipe
console.log(5 > 3 && 2 < 4)
// true, && berarti dua-duanya harus benar
```

- **if, else if, else:** diperiksa dari atas ke bawah, yang pertama benar dijalankan.

```js
const nilai = 75
// nilai yang akan diperiksa

if (nilai >= 80) {
  console.log('Sangat baik')
  // dijalankan bila nilai 80 ke atas
} else if (nilai >= 60) {
  console.log('Cukup')
  // dijalankan bila nilai 60 sampai 79, di sini yang tercetak
} else {
  console.log('Perlu belajar lagi')
  // dijalankan bila semua kondisi di atas salah
}
```

## 8. Array, Perulangan, dan Function

### 8.a Array

- **Array:** daftar nilai berurutan dalam satu variabel, indeks dimulai dari 0.

```js
const buah = ['apel', 'jeruk', 'mangga']
// array berisi tiga teks

console.log(buah[0])
// mengambil nilai indeks 0, hasilnya apel
console.log(buah.length)
// jumlah isi array, hasilnya 3
buah.push('pisang')
// menambahkan nilai baru di akhir array
```

- **const pada array:** isi array boleh berubah, yang tidak boleh mengganti variabelnya dengan array lain.

### 8.b Perulangan

- **for biasa:** sama seperti di Java/C++, memakai penghitung.

```js
for (let i = 0; i < buah.length; i++) {
  // i mulai dari 0, jalan selama i kurang dari jumlah isi, naik satu tiap putaran
  console.log(buah[i])
  // mencetak isi array pada indeks i
}
```

- **for...of:** lebih ringkas, tiap putaran mengambil satu nilai dari array.

```js
for (const item of buah) {
  // item berisi satu nilai dari buah secara berurutan
  console.log(item)
  // mencetak nilai tersebut
}
```

### 8.c Function

- **Function:** blok kode bernama dengan parameter masukan dan `return` untuk hasil.

```js
function sapa(nama) {
  // function bernama sapa dengan satu parameter nama
  return 'Halo, ' + nama
  // mengembalikan teks gabungan sebagai hasil
}

const pesan = sapa('Rani')
// memanggil function, hasil Halo, Rani disimpan di pesan
console.log(pesan)
// mencetak hasil
```

- **Function sebagai nilai:** function bisa disimpan di variabel dan dikirim ke tempat lain.

```js
const kali = function (a, b) {
  // function tanpa nama disimpan di variabel kali
  return a * b
  // mengembalikan hasil perkalian
}

console.log(kali(3, 4))
// memanggil lewat nama variabel, hasilnya 12
```

- **Mental model:** function = resep bernama yang bisa dipanggil berulang, dan bisa diserahkan sebagai nilai (dipakai di Event nanti).

---

# BLOK 4

## 9. DOM

### 9.a Memilih Elemen

- **DOM:** representasi halaman HTML sebagai objek yang bisa dibaca dan diubah JavaScript.
- **querySelector:** memilih satu elemen pertama yang cocok memakai selector CSS.

```html
<h1 id="judul-utama">Selamat Datang</h1>
<div class="kartu">Kartu 1</div>
<div class="kartu">Kartu 2</div>
```

```js
const judul = document.querySelector('#judul-utama')
// document mewakili halaman, querySelector memilih satu elemen dengan selector CSS
const semuaKartu = document.querySelectorAll('.kartu')
// querySelectorAll memilih semua elemen yang cocok sebagai daftar
```

- **Penelusuran daftar:** hasil `querySelectorAll` bisa ditelusuri dengan `for...of`.

```js
for (const kartu of semuaKartu) {
  // kartu berisi satu elemen dari daftar tiap putaran
  console.log(kartu.textContent)
  // mencetak teks tiap kartu
}
```

- **getElementById:** alternatif untuk memilih berdasarkan id, hasilnya sama dengan `querySelector('#id')`.

### 9.b Mengubah Isi dan Tampilan

- **textContent:** membaca atau mengganti teks di dalam elemen.

```js
judul.textContent = 'Halo, Dunia!'
// mengganti teks judul di halaman
```

- **style:** mengubah gaya langsung, nama properti memakai camelCase.

```js
judul.style.color = 'red'
// mengubah warna teks menjadi merah
judul.style.backgroundColor = 'yellow'
// background-color di CSS ditulis backgroundColor di JavaScript
```

- **classList:** menambah, menghapus, atau menukar class pada elemen.

```js
judul.classList.add('besar')
// menambahkan class besar
judul.classList.remove('besar')
// menghapus class besar
judul.classList.toggle('aktif')
// menambahkan class aktif bila belum ada, menghapusnya bila sudah ada
```

- **Mental model:** gaya tetap ditulis di CSS, JavaScript cukup menukar class lewat `classList`.

### 9.c Menambah Elemen Baru

- **createElement dan appendChild:** membuat elemen baru lalu memasangnya ke halaman.

```html
<ul id="daftar"></ul>
```

```js
const daftar = document.querySelector('#daftar')
// memilih daftar tempat elemen baru akan dipasang

const item = document.createElement('li')
// membuat elemen li baru, belum tampil di halaman
item.textContent = 'Apel'
// mengisi teks elemen baru
daftar.appendChild(item)
// memasang item sebagai anak terakhir daftar, mulai tampil di halaman
```

- **Alur pikir:** pilih wadah → buat elemen → isi → pasang.

## 10. Event

### 10.a Event Click

- **Event:** kejadian di halaman seperti klik atau mengetik.
- **addEventListener:** menerima jenis event dan function yang dijalankan tiap event terjadi.

```html
<button id="tombol">Klik saya</button>
<p id="pesan"></p>
```

```js
const tombol = document.querySelector('#tombol')
// memilih tombol
const pesan = document.querySelector('#pesan')
// memilih paragraf tempat pesan tampil

tombol.addEventListener('click', function () {
  // pasang pendengar event click, function di dalamnya dipanggil browser tiap tombol diklik
  pesan.textContent = 'Tombol diklik!'
  // mengganti teks paragraf saat klik terjadi
})
```

- **Jenis event umum:** `click`, `input`, `keydown`, `mouseover`.

### 10.b Membaca Nilai Input

- **value:** membaca isi input sebagai string, termasuk pada `type="number"`.

```html
<input type="text" id="nama">
<button id="tombol">Sapa</button>
<p id="hasil"></p>
```

```js
const inputNama = document.querySelector('#nama')
// memilih kolom isian
const tombol = document.querySelector('#tombol')
// memilih tombol
const hasil = document.querySelector('#hasil')
// memilih tempat hasil tampil

tombol.addEventListener('click', function () {
  // dijalankan setiap tombol diklik
  hasil.textContent = 'Halo, ' + inputNama.value
  // value berisi teks yang sedang diketik pengguna
})
```

- **Konversi:** pakai `Number(inputUmur.value)` bila butuh angka.

### 10.c Daftar Belanja

Gabungan DOM dan event: ketik nama barang, tekan tombol, barang masuk ke daftar.

```html
<h1>Daftar Belanja</h1>
<input type="text" id="input-barang" placeholder="Nama barang">
<button id="tombol-tambah">Tambah</button>
<ul id="daftar"></ul>
```

```js
const input = document.querySelector('#input-barang')
// memilih kolom isian nama barang
const tombol = document.querySelector('#tombol-tambah')
// memilih tombol tambah
const daftar = document.querySelector('#daftar')
// memilih daftar tempat barang dipasang

tombol.addEventListener('click', function () {
  // dijalankan setiap tombol Tambah diklik
  const nama = input.value
  // membaca teks dari kolom isian

  if (nama === '') {
    // memeriksa apakah kolom masih kosong
    return
    // berhenti, tidak menambahkan apa pun
  }

  const item = document.createElement('li')
  // membuat elemen li baru
  item.textContent = nama
  // mengisi li dengan nama barang
  daftar.appendChild(item)
  // memasang li ke daftar

  input.value = ''
  // mengosongkan kolom isian agar siap untuk barang berikutnya
})
```

- **Alur pikir:** tunggu event → baca data dari input → ubah halaman lewat DOM.
