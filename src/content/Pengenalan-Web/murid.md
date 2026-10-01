---
jenis: murid
judul: "Pengenalan Web: Cara Kerja, Frontend-Backend, dan HTML Dasar"
deskripsi: "Memahami cara kerja web, perbedaan frontend dan backend, serta menulis halaman HTML pertama."
---

# Pengenalan Web: Cara Kerja, Frontend-Backend, dan HTML Dasar

Pada materi ini kamu akan mempelajari: cara kerja web, perbedaan frontend dan backend, serta dasar HTML.

Sebelum mulai, pastikan kamu sudah memahami: dasar pemrograman (misalnya dari Java atau C++), seperti variabel dan alur program.

---

## 1. Cara Kerja Web

Sebelum menulis kode web, ada baiknya kita tahu bagaimana sebuah halaman bisa sampai ke layarmu. Bagian ini menjelaskan alurnya dari awal.

### 1.a Internet dan Web

**Internet** adalah jaringan global yang menghubungkan jutaan komputer di seluruh dunia. **Web** (World Wide Web) adalah kumpulan halaman dan sumber daya yang bisa diakses lewat internet menggunakan browser.

Internet dan web sering dianggap sama, padahal berbeda. Internet adalah jalurnya, sedangkan web adalah salah satu layanan yang memakai jalur itu.

| | Internet | Web |
|---|---|---|
| Pengertian | Jaringan yang menghubungkan komputer | Kumpulan halaman yang diakses lewat internet |
| Contoh | Kabel, Wi-Fi, jaringan seluler | Situs berita, toko online, wikipedia |
| Hubungan | Infrastruktur dasar | Salah satu layanan di atas internet |

> **Catatan:** Email dan game online juga memakai internet, tetapi bukan bagian dari web.

> **Ringkasan:** Internet adalah jaringan penghubung komputer. Web adalah kumpulan halaman yang berjalan di atasnya.

### 1.b Client dan Server

**Client** adalah pihak yang meminta data, sedangkan **server** adalah pihak yang menyimpan dan mengirimkan data. Pola ini disebut model client-server.

Komputer atau ponselmu yang sedang membuka sebuah situs berperan sebagai client. Komputer yang menyimpan situs tersebut berperan sebagai server. Server biasanya menyala terus supaya bisa melayani permintaan kapan saja.

Sebagai gambaran, client mirip pelanggan di restoran yang memesan makanan, dan server mirip dapur yang menyiapkan lalu mengirimkan pesanannya.

> **Ringkasan:** Client meminta, server melayani. Browser di perangkatmu adalah client.

### 1.c Browser

**Browser** adalah program yang meminta halaman dari server lalu menampilkannya di layar. Contohnya Chrome, Firefox, Edge, dan Safari.

Browser mampu membaca tiga jenis kode utama, yaitu HTML, CSS, dan JavaScript. Ketiganya akan dibahas di bagian berikutnya. Karena itu, kode web tidak perlu dikompilasi seperti program Java atau C++. Browser langsung membaca dan menjalankannya.

> **Ringkasan:** Browser meminta halaman dari server, lalu membaca dan menampilkan kodenya langsung.

### 1.d URL

**URL** (Uniform Resource Locator) adalah alamat dari sebuah sumber daya di web, misalnya satu halaman atau satu gambar.

#### Cara menulis

```text
https://www.contoh.com/belajar/web.html
```

URL di atas terdiri dari tiga bagian utama:

| Bagian | Contoh | Fungsi |
|---|---|---|
| Protokol | `https://` | Aturan komunikasi. `https` adalah versi yang aman. |
| Domain | `www.contoh.com` | Nama server yang dituju. |
| Path | `/belajar/web.html` | Lokasi halaman di dalam server. |

Komputer sebenarnya mengenali server lewat alamat angka yang disebut alamat IP. Layanan bernama **DNS** bertugas mengubah nama domain menjadi alamat IP tersebut, seperti buku telepon untuk internet.

> **Ringkasan:** URL adalah alamat sebuah sumber daya, terdiri dari protokol, domain, dan path.

### 1.e Request dan Response

**Request** adalah permintaan dari browser ke server, dan **response** adalah balasan dari server ke browser. Setiap kali kamu membuka halaman, pasangan ini terjadi.

#### Alur kerja

1. Kamu mengetik URL di browser, lalu menekan Enter.
2. Browser mencari alamat server lewat DNS.
3. Browser mengirim request ke server.
4. Server mengirim response berisi isi halaman, biasanya berupa HTML.
5. Browser membaca isi tersebut dan menampilkannya.

```text
GET /belajar/web.html
200 OK
404 Not Found
```

Baris pertama adalah contoh request: browser meminta halaman `web.html`. Dua baris berikutnya adalah contoh response. Angka `200` artinya permintaan berhasil, sedangkan `404` artinya halaman yang diminta tidak ditemukan. Angka ini disebut status code.

> **Ringkasan:** Browser mengirim request, server membalas dengan response. Status code `200` berarti berhasil dan `404` berarti tidak ditemukan.

---

## 2. Frontend dan Backend

Sebuah aplikasi web terdiri dari dua sisi yang bekerja sama. Satu sisi berjalan di perangkat pengguna, sisi lainnya berjalan di server.

### 2.a Frontend

**Frontend** adalah bagian web yang dilihat dan dipakai langsung oleh pengguna, dan berjalan di browser. Tampilan halaman, tombol, dan formulir termasuk frontend.

Frontend dibangun dengan tiga teknologi dasar:

| Teknologi | Peran |
|---|---|
| HTML | Menentukan struktur dan isi halaman |
| CSS | Mengatur tampilan, seperti warna dan ukuran |
| JavaScript | Menambah perilaku, seperti bereaksi saat tombol diklik |

Berikut gambaran singkat ketiganya. Kamu belum perlu memahami detailnya sekarang.

```html
<button>Beli</button>
```

```css
button { color: red; }
```

```js
alert('Halo')
```

Kode HTML membuat sebuah tombol bertuliskan "Beli". Kode CSS mewarnai tulisan tombol menjadi merah. Kode JavaScript memunculkan kotak pesan "Halo" di browser. JavaScript mirip Java atau C++ dalam hal menjalankan instruksi secara berurutan, tetapi ia berjalan langsung di browser.

> **Ringkasan:** Frontend adalah sisi yang dilihat pengguna di browser, dibangun dengan HTML, CSS, dan JavaScript.

### 2.b Backend

**Backend** adalah bagian web yang berjalan di server dan tidak terlihat langsung oleh pengguna. Tugasnya mengolah data, menyimpannya di database, menjalankan logika aplikasi, dan menjaga keamanan.

Backend bisa ditulis dengan banyak bahasa, misalnya Java, Python, PHP, atau JavaScript (lewat Node.js). Jadi pengetahuan Java atau C++ yang sudah kamu miliki tetap relevan, terutama untuk sisi backend.

Contohnya, saat kamu login ke sebuah situs, backend yang memeriksa apakah email dan kata sandimu cocok dengan data di database.

> **Ringkasan:** Backend berjalan di server untuk mengolah data, menyimpan ke database, dan menjaga keamanan.

### 2.c Cara Keduanya Bekerja Sama

Frontend dan backend saling berkomunikasi lewat request dan response. Frontend meminta data, backend mengolahnya lalu membalas.

```text
Frontend: minta daftar produk
Backend: ambil daftar produk dari database, lalu kirim kembali
Frontend: tampilkan daftar produk di halaman
```

Dengan cara ini, tampilan dan pengolahan data dipisah sehingga masing-masing bisa dikembangkan sendiri.

| | Frontend | Backend |
|---|---|---|
| Berjalan di | Browser | Server |
| Dilihat pengguna | Ya | Tidak |
| Tugas utama | Tampilan dan interaksi | Data, logika, dan keamanan |
| Contoh teknologi | HTML, CSS, JavaScript | Java, Python, PHP, Node.js |

> **Ringkasan:** Frontend meminta data dan menampilkannya, backend mengolah dan menyediakan data. Keduanya terhubung lewat request dan response.

---

## 3. HTML Dasar

Mulai bagian ini kita praktik langsung. HTML adalah teknologi frontend pertama yang akan kita pelajari, karena semua halaman web berawal dari HTML.

### 3.a Apa itu HTML

**HTML** (HyperText Markup Language) adalah bahasa markup untuk menyusun struktur dan isi halaman web. Bahasa markup berfungsi menandai isi, seperti "ini judul" atau "ini paragraf".

HTML bukan bahasa pemrograman seperti Java atau C++. Di HTML tidak ada variabel, kondisi, atau perulangan. HTML hanya menjelaskan apa isi sebuah halaman.

#### Cara menulis

HTML ditulis dengan **tag**, yaitu kata di dalam tanda `<` dan `>`.

```html
<p>Halo, dunia!</p>
```

Contoh di atas terdiri dari:

- `<p>` adalah tag pembuka.
- `Halo, dunia!` adalah isi.
- `</p>` adalah tag penutup, ditandai dengan garis miring.

Gabungan tag pembuka, isi, dan tag penutup disebut **elemen**. Elemen juga bisa berada di dalam elemen lain. Penulisan seperti ini disebut nesting, dan biasanya ditulis dengan menjorok (indentasi) agar mudah dibaca.

> **Ringkasan:** HTML menandai struktur halaman dengan tag. Satu elemen terdiri dari tag pembuka, isi, dan tag penutup.

### 3.b Struktur Dokumen HTML

Setiap halaman HTML memiliki kerangka yang sama.

#### Cara menulis

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <title>Halaman Pertamaku</title>
  </head>
  <body>
    <h1>Halo, Web!</h1>
  </body>
</html>
```

Penjelasan tiap bagian:

- `<!DOCTYPE html>` memberi tahu browser bahwa ini dokumen HTML modern.
- `<html lang="id">` adalah elemen terluar yang membungkus seluruh halaman. `lang="id"` menandakan bahasa halaman adalah Indonesia.
- `<head>` berisi informasi tentang halaman yang tidak tampil di layar.
- `<meta charset="UTF-8">` mengatur jenis karakter agar huruf dan simbol tampil dengan benar.
- `<title>` berisi judul yang tampil di tab browser.
- `<body>` berisi semua yang tampil di halaman.

> **Ringkasan:** Halaman HTML punya kerangka tetap. `head` berisi informasi halaman, `body` berisi isi yang tampil.

### 3.c Teks: Heading dan Paragraf

HTML menyediakan elemen khusus untuk teks, yaitu heading untuk judul dan paragraf untuk isi.

#### Cara menulis

```html
<h1>Judul Utama</h1>
<h2>Sub Judul</h2>
<p>Ini adalah paragraf dengan kata <strong>penting</strong> dan kata <em>miring</em>.</p>
```

- `<h1>` sampai `<h6>` adalah heading dari tingkat terbesar sampai terkecil. Gunakan satu `<h1>` per halaman sebagai judul utama.
- `<p>` membuat paragraf.
- `<strong>` menandai teks penting, biasanya tampil tebal.
- `<em>` menandai teks yang ditekankan, biasanya tampil miring.

> **Ringkasan:** `h1` sampai `h6` untuk judul, `p` untuk paragraf, `strong` dan `em` untuk menandai teks.

### 3.d Daftar

HTML memiliki dua jenis daftar: daftar tak berurutan dan daftar berurutan.

| | Daftar tak berurutan | Daftar berurutan |
|---|---|---|
| Tag pembungkus | `<ul>` | `<ol>` |
| Tampilan | Titik (bullet) | Angka |
| Cocok untuk | Item tanpa urutan | Langkah-langkah |

#### Cara menulis

```html
<ul>
  <li>Apel</li>
  <li>Jeruk</li>
</ul>

<ol>
  <li>Buka browser</li>
  <li>Ketik alamat</li>
</ol>
```

Setiap item daftar ditulis dengan `<li>` di dalam `<ul>` atau `<ol>`.

> **Ringkasan:** `ul` untuk daftar bullet, `ol` untuk daftar angka, dan setiap item memakai `li`.

### 3.e Atribut, Link, dan Gambar

**Atribut** adalah informasi tambahan pada sebuah tag, ditulis di dalam tag pembuka dengan pola `nama="nilai"`.

#### Cara menulis

```html
<a href="https://developer.mozilla.org">Buka MDN</a>
<img src="kucing.jpg" alt="Foto seekor kucing">
```

- `<a>` membuat link. Atribut `href` berisi alamat tujuan, dan isi elemen adalah tulisan yang diklik.
- `<img>` menampilkan gambar. Atribut `src` berisi lokasi file gambar, dan `alt` berisi teks pengganti bila gambar gagal dimuat.
- `<img>` tidak punya tag penutup karena tidak memiliki isi.

> **Catatan:** File gambar `kucing.jpg` harus berada di folder yang sama dengan file HTML agar `src="kucing.jpg"` ditemukan.

> **Ringkasan:** Atribut menambah informasi pada tag. `a` dengan `href` membuat link, `img` dengan `src` dan `alt` menampilkan gambar.

### 3.f Halaman Pertamaku

Sekarang kita gabungkan semuanya menjadi satu halaman utuh.

#### Langkah-langkah

1. Buka editor teks, misalnya Notepad atau VS Code.
2. Salin kode berikut, lalu simpan dengan nama `index.html`.
3. Buka file tersebut dengan klik dua kali, atau seret ke jendela browser.

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <title>Halaman Pertamaku</title>
  </head>
  <body>
    <h1>Halaman Pertamaku</h1>
    <p>Halo, ini halaman web pertama yang saya buat.</p>
    <h2>Hobi Saya</h2>
    <ul>
      <li>Ngoding</li>
      <li>Main game</li>
    </ul>
    <p>Belajar lebih lanjut di <a href="https://developer.mozilla.org">MDN Web Docs</a>.</p>
  </body>
</html>
```

Halaman ini memiliki judul, paragraf, daftar hobi, dan sebuah link. Untuk melihat perubahan setelah mengedit, simpan file lalu muat ulang halaman di browser dengan `F5`.

> **Catatan:** Pastikan nama file berakhiran `.html`, bukan `.html.txt`. Di Notepad, pilih **All files** pada kolom jenis file saat menyimpan.

> **Ringkasan:** Halaman HTML disimpan sebagai file `.html` lalu dibuka dengan browser. Muat ulang dengan `F5` untuk melihat perubahan.

---

## Rangkuman Pertemuan

- Web berjalan dengan model client-server: browser (client) mengirim request, server membalas dengan response.
- URL terdiri dari protokol, domain, dan path. Status code `200` berarti berhasil dan `404` berarti tidak ditemukan.
- Frontend berjalan di browser (HTML, CSS, JavaScript), sedangkan backend berjalan di server untuk mengolah data.
- HTML adalah bahasa markup yang menyusun halaman dengan tag dan elemen, bukan bahasa pemrograman.
- Kerangka halaman HTML terdiri dari `head` untuk informasi dan `body` untuk isi.
- Elemen dasar yang sudah dipelajari: heading, paragraf, daftar, link, dan gambar.
