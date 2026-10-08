---
jenis: murid
bab: panduan
urutan: 3
judul: "Debugging Dasar"
deskripsi: "Memahami jenis kesalahan di kode, membaca pesan error, teknik mencari bug dengan console.log dan DevTools, kesalahan pemula yang paling umum, dan latihan mencari bug."
disarankan_setelah: "bab html (dasar), lalu dibaca ulang setelah bab js"
---

# Debugging Dasar

Pada materi ini kamu akan mempelajari: apa itu debugging, tiga jenis kesalahan di kode, cara membaca pesan error, teknik mencari sumber bug, daftar kesalahan pemula yang paling sering terjadi, serta latihan mencari bug.

Sebelum mulai, pastikan kamu sudah memahami: dasar HTML, serta cara membuka DevTools (`F12`). Sebagian contoh memakai JavaScript, dan akan lebih bermakna jika dibaca ulang setelah bab JS.

---

## 1. Apa itu Debugging

**Bug** adalah kesalahan di dalam program, dan **debugging** adalah proses menemukan dan memperbaikinya. Programmer berpengalaman menghabiskan **sebagian besar waktunya** untuk debugging, jadi ini adalah keterampilan inti, bukan tanda bahwa kamu kurang pintar.

Debugging yang baik bukan menebak-nebak, melainkan **mencari bukti** secara berurutan, seperti detektif.

> **Ringkasan:** Debugging adalah mencari dan memperbaiki kesalahan secara sistematis, dan merupakan bagian besar dari pekerjaan programmer.

---

## 2. Tiga Jenis Kesalahan

| Jenis | Kapan terdeteksi | Contoh | Tingkat kesulitan |
|---|---|---|---|
| **Syntax error** (salah penulisan) | Sebelum kode berjalan | Kurang tanda kurung, salah ketik kata kunci | Mudah, pesannya jelas |
| **Runtime error** (error saat berjalan) | Saat kode berjalan | Memanggil fungsi yang tidak ada, membaca properti dari `undefined` | Sedang, ada pesan dan nomor baris |
| **Logic error** (salah logika) | Tidak ada pesan error | Program jalan, tetapi hasilnya salah | Sulit, tidak ada petunjuk otomatis |

Contoh ketiganya dalam JavaScript:

```js
console.log('Halo'
// syntax error: kurang tanda kurung penutup
```

```js
const nama = 'Budi'
console.log(namaa)
// runtime error: namaa is not defined (salah ketik, ada huruf a tambahan)
```

```js
function rataRata(a, b) {
  return a + b / 2
  // logic error: tidak ada pesan, tetapi hasilnya salah karena pembagian dikerjakan lebih dulu
  // seharusnya (a + b) / 2
}
console.log(rataRata(4, 6))
// menampilkan 7, bukan 5
```

Logic error paling licin karena program tampak sehat. Satu-satunya cara menemukannya adalah **memeriksa nilai di tiap langkah**, seperti dijelaskan di bawah.

> **Ringkasan:** Syntax error terdeteksi sebelum berjalan, runtime error muncul saat berjalan dengan pesan, dan logic error tidak punya pesan sama sekali.

---

## 3. Membaca Pesan Error

Pesan error adalah **petunjuk gratis** yang sering diabaikan. Biasakan membacanya dari atas ke bawah dengan teliti.

```text
Uncaught TypeError: Cannot read properties of null (reading 'textContent')
    at script.js:5
```

Cara membacanya:

| Bagian | Artinya |
|---|---|
| `Uncaught` | Error tidak ditangani oleh kode |
| `TypeError` | Jenis error: operasi dilakukan pada tipe yang salah |
| `Cannot read properties of null` | Kamu mencoba membaca isi dari sesuatu yang bernilai `null` |
| `(reading 'textContent')` | Properti yang sedang dicoba dibaca |
| `at script.js:5` | Lokasi: file `script.js`, baris 5 |

Terjemahan lengkapnya: "di baris 5, kamu mengambil `textContent` dari sebuah elemen, tetapi elemen itu tidak ditemukan." Penyebab paling umum: salah menulis selector, atau script berjalan sebelum elemennya ada.

Beberapa jenis error yang sering ditemui:

| Pesan | Biasanya berarti |
|---|---|
| `X is not defined` | Variabel atau fungsi belum dibuat, atau salah ketik |
| `X is not a function` | Sesuatu yang dipanggil dengan `()` ternyata bukan fungsi |
| `Cannot read properties of undefined/null` | Mengakses properti dari sesuatu yang kosong |
| `Unexpected token` | Salah penulisan, misalnya kurang atau lebih tanda baca |
| `Assignment to constant variable` | Mengubah nilai variabel yang dibuat dengan `const` |
| `Failed to load resource: 404` | File yang dipanggil tidak ditemukan (periksa alamat) |

> **Ringkasan:** Baca pesan error dari awal: jenis error, penjelasan, dan lokasinya (file dan baris). Pesan itu hampir selalu menunjuk ke akar masalah.

---

## 4. Teknik Mencari Bug

### 4.a Tampilkan Nilai dengan console.log

Cara paling sederhana dan paling sering dipakai: tampilkan nilai di titik-titik penting untuk melihat di mana hasilnya mulai tidak sesuai harapan.

```js
function hitungTotal(harga, jumlah) {
  console.log('harga:', harga, typeof harga)
  console.log('jumlah:', jumlah, typeof jumlah)
  // memeriksa nilai dan tipenya
  const total = harga * jumlah
  console.log('total:', total)
  return total
}
```

Selalu periksa juga **tipe**-nya. Banyak bug terjadi karena angka ternyata berupa string.

### 4.b Perkecil Area Pencarian

Gunakan prinsip **belah dua** (*binary search*).

1. Tambahkan `console.log` di tengah program.
2. Jika nilai di titik itu sudah salah, bug ada di bagian sebelumnya. Jika masih benar, bug ada di bagian sesudahnya.
3. Ulangi di setengah area yang tersisa.

Dengan cara ini, bug di program 200 baris bisa ditemukan dalam sekitar 8 langkah, bukan 200.

### 4.c Nonaktifkan Sebagian Kode

Beri komentar pada bagian kode yang dicurigai, lalu lihat apakah masalahnya hilang. Jika hilang, kamu tahu bug ada di bagian itu. Di VS Code, tekan `Ctrl+/`.

### 4.d Buat Contoh Sekecil Mungkin

Salin bagian bermasalah ke file baru, lalu buang semua yang tidak berkaitan. Banyak bug langsung terlihat setelah kodenya cukup kecil.

### 4.e Ubah Satu Hal pada Satu Waktu

Setiap kali mencoba perbaikan, ubah **satu hal saja**, lalu uji. Jika mengubah banyak hal sekaligus dan berhasil, kamu tidak tahu mana yang sebenarnya memperbaiki. Jika gagal, kamu tidak tahu mana yang memperburuk.

### 4.f Jelaskan Kodemu dengan Suara Keras

Jelaskan kodemu baris demi baris seolah kepada orang lain (atau sebuah boneka, dikenal sebagai teknik *rubber duck*). Ketika mengucapkan apa yang **seharusnya** terjadi, kamu sering menyadari bahwa yang **tertulis** berbeda.

> **Ringkasan:** Tampilkan nilai dan tipenya, belah area pencarian, nonaktifkan sebagian kode, kecilkan contoh, ubah satu hal sekaligus, dan jelaskan kodemu dengan suara keras.

---

## 5. Alat Debugging di Browser

### 5.a Console

Tampilkan pesan error dan hasil `console.log`. Selalu buka Console lebih dulu saat ada yang aneh.

### 5.b Tab Elements

Memeriksa struktur HTML dan CSS yang sedang aktif.

- Elemen tidak tampil sesuai harapan? Klik elemennya dan lihat panel **Styles**. Aturan yang kalah akan tercoret.
- Elemen tidak ada? Periksa apakah elemen itu memang muncul di struktur.

### 5.c Tab Network

Memeriksa file yang diminta browser. Status `404` berarti file tidak ditemukan, biasanya karena alamat salah, huruf besar kecil tidak cocok, atau lokasi file keliru.

### 5.d Tab Sources dan Breakpoint

Untuk menghentikan program di tengah jalan dan memeriksa nilai satu per satu.

1. Buka tab **Sources**, lalu pilih file `script.js`.
2. Klik nomor baris untuk memasang **breakpoint** (titik biru).
3. Lakukan aksi yang menjalankan baris itu. Program berhenti di sana.
4. Arahkan kursor ke variabel untuk melihat nilainya, atau gunakan tombol langkah untuk berjalan baris demi baris.

Alternatif cepat: tulis kata kunci `debugger` di kode. Saat DevTools terbuka, program otomatis berhenti di baris itu.

```js
function hitung(a, b) {
  debugger
  // program berhenti di sini jika DevTools sedang terbuka
  return a + b
}
```

> **Ringkasan:** Console untuk error, Elements untuk HTML dan CSS, Network untuk file yang gagal dimuat, dan Sources dengan breakpoint untuk mengikuti jalannya program baris demi baris.

---

## 6. Kesalahan Pemula yang Paling Umum

Sebelum mencari yang rumit, periksa dulu daftar ini. Sebagian besar bug pemula ada di sini.

| Gejala | Penyebab yang sering |
|---|---|
| Perubahan tidak terlihat | File belum disimpan, atau halaman belum dimuat ulang (`Ctrl+S`, lalu `F5`) |
| `is not defined` | Salah ketik nama, atau huruf besar dan kecil tidak cocok (`nama` dan `Nama` berbeda) |
| Gambar atau CSS tidak muncul | Alamat file salah, nama berbeda huruf besar kecil, atau lokasi folder keliru (periksa tab Network) |
| Elemen tidak ditemukan (`null`) | Selector salah, `id` tidak cocok, atau script berjalan sebelum HTML dibaca (butuh `defer`) |
| Kondisi `if` tidak berjalan | Memakai `=` alih-alih `===`, atau membandingkan angka dengan string |
| Hasil penjumlahan aneh (`'53'` bukan `8`) | Nilai dari `input` adalah string, perlu `Number()` |
| Kode di bawah sebuah baris tidak jalan | Tanda kurung, kurung kurawal, atau tanda kutip tidak berpasangan |
| Gaya CSS tidak berlaku | Selector tidak cocok, tertimpa aturan lain, atau salah tulis properti (`colour`, titik koma kurang) |
| Form me-refresh halaman | Lupa `event.preventDefault()` |
| Perulangan tidak berhenti | Kondisi tidak pernah berubah menjadi salah |

Kebiasaan yang mencegah banyak masalah:

- Aktifkan **Prettier** dan indentasi otomatis di VS Code. Tanda kurung yang tidak berpasangan akan langsung kelihatan.
- Perhatikan **garis bergelombang merah** di editor, yang menandai kemungkinan kesalahan.
- Simpan dan uji **sedikit demi sedikit**, jangan menulis 100 baris sebelum menjalankan pertama kali.

> **Ringkasan:** Periksa dulu penyebab klasik: lupa simpan, salah ketik, huruf besar kecil, alamat file, tanda kurung, `=` versus `===`, dan tipe data string.

---

## 7. Latihan: Cari Bug-nya

Bacalah tiap potongan kode dan temukan kesalahannya sebelum melihat jawaban.

### Soal 1

```js
const umur = 17

if (umur = 17) {
  console.log('Tepat 17 tahun')
}
```

### Soal 2

```js
const harga = '15000'
const jumlah = 3
console.log(harga + jumlah)
// diharapkan 45000
```

### Soal 3

```html
<img src="Foto/kucing.JPG" alt="Kucing">
<!-- file aslinya: foto/kucing.jpg, gambar tidak muncul -->
```

### Soal 4

```js
const tombol = document.querySelector('#tombol')
tombol.addEventListener('click', tampilkan())

function tampilkan() {
  console.log('Diklik')
}
```

### Soal 5

```css
.kartu {
  background-colour: lightblue;
  padding: 20px
  border-radius: 8px;
}
```

### Jawaban

1. `=` menetapkan nilai, bukan membandingkan. Seharusnya `umur === 17`. Pada `const`, ini bahkan menimbulkan error `Assignment to constant variable`.
2. `harga` adalah string, sehingga `+` menggabungkan teks menjadi `'150003'`. Ubah dulu dengan `Number(harga) * jumlah`. Perhatikan juga operatornya: untuk menghitung total yang diharapkan, pakai `*`, bukan `+`.
3. Nama folder dan ekstensi berbeda huruf besar dan kecil (`Foto` dengan `foto`, `.JPG` dengan `.jpg`). Server Linux membedakannya, jadi tulis persis sama dengan nama file.
4. `tampilkan()` dengan kurung langsung **menjalankan** fungsi saat baris itu dibaca, bukan saat diklik. Seharusnya `tombol.addEventListener('click', tampilkan)`.
5. Dua kesalahan: `background-colour` salah eja (seharusnya `background-color`), dan baris `padding: 20px` kurang titik koma sehingga baris sesudahnya ikut tidak terbaca dengan benar.

---

## 8. Alur Berpikir Saat Menemui Bug

Ringkasnya, ikuti urutan ini setiap kali ada yang tidak berjalan.

1. **Baca** pesan error dan lokasinya.
2. **Periksa** daftar kesalahan klasik.
3. **Tampilkan** nilai di titik-titik penting.
4. **Persempit** area pencarian dengan membagi dua.
5. **Ubah satu hal**, lalu uji.
6. **Istirahat** jika sudah buntu terlalu lama.
7. **Tanyakan** dengan pertanyaan yang lengkap jika masih belum ketemu.

---

## Rangkuman

- Debugging adalah mencari dan memperbaiki kesalahan secara sistematis, dan merupakan keterampilan inti programmer.
- Ada tiga jenis kesalahan: syntax error, runtime error, dan logic error (paling sulit karena tidak ada pesan).
- Pesan error memuat jenis, penjelasan, dan lokasi (file dan baris), dan harus dibaca dengan teliti.
- Teknik utama: `console.log` nilai dan tipe, belah area pencarian, nonaktifkan sebagian kode, kecilkan contoh, ubah satu hal sekaligus.
- DevTools menyediakan Console, Elements, Network, dan Sources (breakpoint) untuk menelusuri masalah.
- Banyak bug pemula berasal dari penyebab klasik seperti lupa simpan, salah ketik, huruf besar kecil, alamat file, `=` versus `===`, dan tipe string.
