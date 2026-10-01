---
jenis: pengajar
judul: "Pengenalan Web: Cara Kerja, Frontend-Backend, dan HTML Dasar"
deskripsi: "Memahami cara kerja web, perbedaan frontend dan backend, serta menulis halaman HTML pertama."
---

# Modul Pengajar: Pengenalan Web: Cara Kerja, Frontend-Backend, dan HTML Dasar

Scope materi: dari cara kerja web dan perbedaan frontend-backend sampai membuat halaman HTML pertama.

| Blok | Isi | Jeda |
|---|---|---|
| 1 | Cara kerja web, frontend dan backend | Jeda |
| 2 | HTML dasar | Selesai |

Catatan: komentar di dalam kode diletakkan tepat di bawah baris yang dijelaskan.

---

# BLOK 1

## 1. Cara Kerja Web

### 1.a Internet dan Web

- **Internet:** jaringan global yang menghubungkan komputer di seluruh dunia.
- **Web:** kumpulan halaman yang diakses lewat internet memakai browser, salah satu layanan di atas internet.

```text
Internet = jalan
# infrastruktur jaringan yang menghubungkan komputer
Web = salah satu kendaraan di jalan itu
# layanan halaman yang memakai internet (email dan game online juga memakai internet)
```

- **Mental model:** internet = jalur, web = layanan di atas jalur.

### 1.b Client dan Server

- **Client:** pihak yang meminta data, contohnya browser di perangkat kita.
- **Server:** pihak yang menyimpan dan mengirim data, biasanya menyala terus.

```text
Client  -> meminta
# contoh: browser di laptop atau ponsel
Server  -> melayani
# contoh: komputer yang menyimpan situs
```

### 1.c Browser

- **Browser:** program yang meminta halaman dari server lalu menampilkannya.
- **Dibaca langsung:** browser membaca HTML, CSS, dan JavaScript tanpa kompilasi seperti Java atau C++.

```text
Chrome, Firefox, Edge, Safari
# contoh browser yang umum dipakai
```

### 1.d URL

- **URL:** alamat sebuah sumber daya di web, terdiri dari protokol, domain, dan path.

```text
https://www.contoh.com/belajar/web.html
# URL lengkap, alamat satu halaman di web
https://
# protokol: aturan komunikasi, https adalah versi yang aman
www.contoh.com
# domain: nama server yang dituju
/belajar/web.html
# path: lokasi halaman di dalam server
```

- **DNS:** layanan yang mengubah nama domain menjadi alamat IP.

```text
www.contoh.com
# nama domain yang mudah diingat manusia
DNS
# menerjemahkan domain di atas menjadi alamat IP server
```

### 1.e Request dan Response

- **Request dan response:** browser mengirim permintaan, server membalas dengan isi halaman.

```text
GET /belajar/web.html
# request: browser meminta halaman web.html
200 OK
# response: server membalas berhasil dan mengirim isi halaman
404 Not Found
# response: server membalas bahwa halaman yang diminta tidak ada
```

- **Alur pikir:** ketik URL → cari server (DNS) → request → response → tampil.

## 2. Frontend dan Backend

### 2.a Frontend

- **Frontend:** bagian yang dilihat pengguna, berjalan di browser.
- **HTML:** menentukan struktur dan isi halaman.

```html
<button>Beli</button>
<!-- membuat sebuah tombol bertuliskan Beli -->
```

- **CSS:** mengatur tampilan.

```css
button { color: red; }
/* mewarnai tulisan semua tombol menjadi merah */
```

- **JavaScript:** menambah perilaku, mirip Java atau C++ dalam hal instruksi berurutan tetapi berjalan di browser.

```js
alert('Halo')
// memunculkan kotak pesan berisi Halo di browser
```

- **Mental model:** HTML = kerangka, CSS = penampilan, JavaScript = perilaku.

### 2.b Backend

- **Backend:** bagian yang berjalan di server untuk mengolah data, database, logika, dan keamanan.
- **Bahasa backend:** Java, Python, PHP, atau JavaScript (Node.js).

```text
Login: cek email dan kata sandi
# contoh tugas backend, mencocokkan input dengan data di database
```

### 2.c Cara Keduanya Bekerja Sama

- **Komunikasi:** frontend dan backend berkomunikasi lewat request dan response.

```text
Frontend: minta daftar produk
# frontend mengirim request ke backend
Backend: ambil daftar produk dari database, lalu kirim kembali
# backend mengolah request lalu membalas dengan data
Frontend: tampilkan daftar produk di halaman
# frontend menampilkan data yang diterima kepada pengguna
```

- **Perbandingan singkat:** frontend di browser dan terlihat pengguna, backend di server dan tidak terlihat.
- **Alur pikir:** pengguna → frontend → request → backend → database → response → frontend → tampilan.

---

# BLOK 2

## 3. HTML Dasar

### 3.a Apa itu HTML

- **HTML:** bahasa markup untuk menyusun struktur halaman, bukan bahasa pemrograman (tidak ada variabel, kondisi, perulangan).
- **Tag dan elemen:** tag pembuka + isi + tag penutup = satu elemen.

```html
<p>Halo, dunia!</p>
<!-- <p> tag pembuka, teks adalah isi, </p> tag penutup dengan garis miring -->
```

- **Nesting:** elemen boleh berada di dalam elemen lain, ditulis menjorok agar rapi.

```html
<ul>
  <li>Apel</li>
  <!-- li berada di dalam ul, dijorokkan satu tingkat -->
</ul>
```

### 3.b Struktur Dokumen HTML

- **Kerangka halaman:** setiap halaman memakai struktur yang sama.

```html
<!DOCTYPE html>
<!-- memberi tahu browser bahwa ini dokumen HTML modern -->
<html lang="id">
  <!-- elemen terluar pembungkus halaman, lang="id" menandai bahasa Indonesia -->
  <head>
    <!-- berisi informasi halaman yang tidak tampil di layar -->
    <meta charset="UTF-8">
    <!-- mengatur jenis karakter agar huruf dan simbol tampil benar -->
    <title>Halaman Pertamaku</title>
    <!-- judul yang tampil di tab browser -->
  </head>
  <body>
    <!-- berisi semua yang tampil di halaman -->
    <h1>Halo, Web!</h1>
    <!-- judul utama halaman -->
  </body>
</html>
```

- **Mental model:** head = informasi halaman, body = isi yang tampil.

### 3.c Teks: Heading dan Paragraf

- **Heading:** `h1` sampai `h6` dari terbesar ke terkecil, satu `h1` per halaman.

```html
<h1>Judul Utama</h1>
<!-- heading tingkat 1, judul utama halaman -->
<h2>Sub Judul</h2>
<!-- heading tingkat 2, di bawah judul utama -->
```

- **Paragraf dan penanda teks:** `p` untuk paragraf, `strong` untuk penting, `em` untuk penekanan.

```html
<p>Ini paragraf dengan kata <strong>penting</strong> dan <em>miring</em>.</p>
<!-- strong biasanya tampil tebal, em biasanya tampil miring -->
```

### 3.d Daftar

- **Daftar tak berurutan:** `ul` untuk bullet.

```html
<ul>
  <li>Apel</li>
  <!-- li adalah satu item di dalam daftar -->
  <li>Jeruk</li>
</ul>
```

- **Daftar berurutan:** `ol` untuk angka, cocok untuk langkah-langkah.

```html
<ol>
  <li>Buka browser</li>
  <!-- tampil sebagai nomor 1 -->
  <li>Ketik alamat</li>
  <!-- tampil sebagai nomor 2 -->
</ol>
```

### 3.e Atribut, Link, dan Gambar

- **Atribut:** informasi tambahan di tag pembuka dengan pola `nama="nilai"`.
- **Link:** elemen `a` dengan atribut `href`.

```html
<a href="https://developer.mozilla.org">Buka MDN</a>
<!-- href berisi alamat tujuan, tulisan di dalam elemen adalah bagian yang diklik -->
```

- **Gambar:** elemen `img` dengan `src` dan `alt`, tanpa tag penutup.

```html
<img src="kucing.jpg" alt="Foto seekor kucing">
<!-- src lokasi file gambar (satu folder dengan file HTML), alt teks pengganti bila gambar gagal dimuat -->
```

### 3.f Halaman Pertamaku

Gabungan semua elemen menjadi satu halaman utuh, disimpan sebagai `index.html` lalu dibuka di browser.

```html
<!DOCTYPE html>
<!-- dokumen HTML modern -->
<html lang="id">
  <!-- pembungkus halaman berbahasa Indonesia -->
  <head>
    <meta charset="UTF-8">
    <!-- karakter UTF-8 agar huruf tampil benar -->
    <title>Halaman Pertamaku</title>
    <!-- judul di tab browser -->
  </head>
  <body>
    <h1>Halaman Pertamaku</h1>
    <!-- judul utama halaman -->
    <p>Halo, ini halaman web pertama yang saya buat.</p>
    <!-- paragraf pembuka -->
    <h2>Hobi Saya</h2>
    <!-- sub judul untuk daftar di bawahnya -->
    <ul>
      <li>Ngoding</li>
      <!-- item pertama daftar -->
      <li>Main game</li>
      <!-- item kedua daftar -->
    </ul>
    <p>Belajar lebih lanjut di <a href="https://developer.mozilla.org">MDN Web Docs</a>.</p>
    <!-- paragraf berisi link ke MDN -->
  </body>
</html>
```

- **Alur pikir:** tulis kode → simpan sebagai `.html` → buka di browser → ubah → simpan → F5.
