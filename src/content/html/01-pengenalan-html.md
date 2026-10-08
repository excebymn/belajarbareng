---
jenis: murid
bab: html
urutan: 1
judul: "Pengenalan HTML"
deskripsi: "Memahami HTML sebagai bahasa markup, cara menulis tag, elemen, atribut, komentar, dan membuat file HTML pertamamu."
---

# Pengenalan HTML

Pada materi ini kamu akan mempelajari: apa itu HTML, perbedaannya dengan bahasa pemrograman, cara menulis tag, elemen, dan atribut, aturan nesting, komentar, serta cara membuat dan membuka file HTML pertamamu.

Sebelum mulai, pastikan kamu sudah memahami: cara kerja web dan peran browser (bab Web), serta cara membuka folder di VS Code (bab Tools).

---

## 1. Apa itu HTML

### 1.a Pengertian

**HTML** (HyperText Markup Language) adalah bahasa markup untuk menyusun struktur dan isi halaman web. **Markup** berarti menandai isi, seperti "bagian ini judul" atau "bagian ini paragraf".

- **HyperText** berarti teks yang bisa terhubung ke teks lain lewat link.
- **Markup Language** berarti bahasa yang bekerja dengan menandai isi, bukan memberi perintah.

Semua halaman web, sesederhana atau sekompleks apa pun, berawal dari HTML. Browser membaca HTML lalu menampilkannya.

> **Ringkasan:** HTML menandai struktur dan isi halaman. Semua halaman web berawal dari HTML.

### 1.b HTML Bukan Bahasa Pemrograman

Jika kamu sudah pernah belajar Java atau C++, perhatikan perbedaannya.

| | Bahasa pemrograman (Java, C++) | HTML |
|---|---|---|
| Fungsi | Memberi instruksi untuk dijalankan | Menjelaskan isi dan struktur halaman |
| Variabel, kondisi, perulangan | Ada | Tidak ada |
| Dikompilasi | Ya | Tidak, browser langsung membacanya |

HTML hanya menjelaskan **apa** isi sebuah halaman. Untuk menambah logika dan interaksi, kita memakai JavaScript, yang dibahas di bab JS. Untuk mengatur tampilan, kita memakai CSS, yang dibahas di bab CSS.

> **Ringkasan:** HTML hanya menjelaskan isi halaman. Logika ditangani JavaScript dan tampilan ditangani CSS.

---

## 2. Tag, Elemen, dan Atribut

### 2.a Tag dan Elemen

HTML ditulis dengan **tag**, yaitu kata di dalam tanda `<` dan `>`.

#### Cara menulis

```html
<p>Halo, dunia!</p>
<!-- <p> adalah tag pembuka, "Halo, dunia!" adalah isi, </p> adalah tag penutup -->
```

Contoh di atas terdiri dari:

- `<p>` adalah **tag pembuka**.
- `Halo, dunia!` adalah **isi**.
- `</p>` adalah **tag penutup**, ditandai dengan garis miring.

Gabungan tag pembuka, isi, dan tag penutup disebut **elemen**.

> **Catatan:** Istilah "tag" dan "elemen" sering dipakai bergantian dalam percakapan sehari-hari. Secara tepat, tag adalah penandanya, sedangkan elemen adalah keseluruhan bagiannya.

### 2.b Elemen Kosong

Sebagian elemen tidak punya isi sehingga tidak butuh tag penutup. Elemen seperti ini disebut **elemen kosong** (*void element*).

```html
<br>
<!-- pindah baris, tidak punya isi dan tidak punya tag penutup -->
<hr>
<!-- garis pemisah horizontal -->
<img src="foto.jpg" alt="Foto">
<!-- gambar, dibahas di materi Gambar dan Media -->
```

Elemen kosong yang akan sering kamu temui: `br`, `hr`, `img`, `input`, `meta`, dan `link`.

### 2.c Atribut

**Atribut** adalah informasi tambahan pada sebuah elemen. Atribut ditulis di dalam tag pembuka dengan pola `nama="nilai"`.

```html
<a href="https://developer.mozilla.org">Buka MDN</a>
<!-- href adalah atribut yang berisi alamat tujuan link -->
<p id="pembuka" class="penting">Selamat datang</p>
<!-- id dan class adalah dua atribut yang bisa dipakai di hampir semua elemen -->
```

Beberapa aturan penulisan atribut:

- Ditulis di tag pembuka, dipisah spasi, tidak di tag penutup.
- Nilainya diapit tanda kutip, disarankan kutip ganda (`"`).
- Satu elemen boleh punya banyak atribut.

Dua atribut umum yang akan sering dipakai:

| Atribut | Fungsi |
|---|---|
| `id` | Nama unik untuk satu elemen, tidak boleh sama dengan elemen lain di halaman yang sama |
| `class` | Nama kelompok, boleh sama di banyak elemen. Dipakai untuk CSS dan JavaScript. |

> **Ringkasan:** Atribut menambah informasi pada elemen dengan pola `nama="nilai"` di tag pembuka.

---

## 3. Nesting dan Indentasi

Elemen boleh berada di dalam elemen lain. Penulisan seperti ini disebut **nesting** (bersarang).

```html
<ul>
  <li>Apel</li>
  <!-- li berada di dalam ul, dijorokkan satu tingkat -->
  <li>Jeruk</li>
</ul>
```

Elemen luar disebut **parent** (induk) dan elemen di dalamnya disebut **child** (anak). Pada contoh di atas, `ul` adalah parent dari dua `li`.

Aturan penting nesting: elemen yang dibuka belakangan harus ditutup lebih dulu.

```html
<p>Kata <strong>penting</strong> di sini</p>
<!-- benar: strong dibuka dan ditutup di dalam p -->
<p>Kata <strong>penting</p></strong>
<!-- salah: tag penutup saling bersilangan -->
```

Gunakan **indentasi** (menjorokkan baris) setiap masuk ke dalam elemen, biasanya 2 spasi. Browser tidak peduli dengan indentasi, tetapi kode jadi jauh lebih mudah dibaca. Extension Prettier di VS Code bisa merapikannya otomatis.

> **Ringkasan:** Elemen bisa bersarang. Tutup elemen dalam lebih dulu, dan gunakan indentasi agar rapi.

---

## 4. Komentar dan Spasi

### 4.a Komentar

**Komentar** adalah catatan di dalam kode yang tidak tampil di halaman.

```html
<!-- Ini komentar, tidak akan tampil di browser -->
<p>Ini tampil</p>
```

Komentar berguna untuk menjelaskan kode atau menonaktifkan sebagian kode sementara. Di VS Code, tekan `Ctrl+/` untuk menjadikan baris yang dipilih sebagai komentar.

### 4.b Spasi dan Baris Baru Diabaikan

Browser menggabungkan spasi dan baris baru berurutan menjadi satu spasi.

```html
<p>Halo     dunia
     dari      HTML</p>
<!-- tampil sebagai: Halo dunia dari HTML -->
```

Untuk pindah baris di dalam paragraf, gunakan `<br>`. Untuk membuat paragraf baru, gunakan elemen `<p>` baru. Hal ini dibahas di materi Teks.

> **Ringkasan:** Komentar ditulis dengan `<!-- -->`. Spasi dan baris baru di dalam HTML digabung oleh browser.

---

## 5. Membuat File HTML Pertamamu

### 5.a Aturan Nama File

- Berakhiran `.html`.
- Huruf kecil, tanpa spasi. Pakai tanda hubung jika butuh pemisah, misalnya `tentang-saya.html`.
- Halaman utama sebuah situs biasanya diberi nama `index.html`.

### 5.b Langkah-langkah

1. Buat folder baru, misalnya `belajar-html`, lalu buka di VS Code.
2. Buat file baru bernama `index.html`.
3. Salin kode berikut ke dalamnya, lalu simpan dengan `Ctrl+S`.

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <title>Halaman Pertamaku</title>
  </head>
  <body>
    <h1>Halo, Web!</h1>
    <p>Ini halaman HTML pertamaku.</p>
  </body>
</html>
```

4. Buka file dengan salah satu cara berikut:
   - Klik dua kali file `index.html` di folder, atau seret ke jendela browser.
   - Klik kanan file di VS Code, lalu pilih **Open with Live Server** (jika extension sudah terpasang).
5. Ubah teks di dalam `<h1>`, simpan, lalu muat ulang browser dengan `F5` (dengan Live Server, halaman otomatis ikut berubah).

Arti dari kerangka halaman di atas dibahas di materi berikutnya, yaitu Struktur Dokumen HTML.

> **Catatan:** Pastikan nama file berakhiran `.html`, bukan `.html.txt`. Di Notepad, pilih **All files** pada kolom jenis file saat menyimpan.

> **Ringkasan:** Simpan kode dalam file `.html`, lalu buka lewat browser. Muat ulang dengan `F5` untuk melihat perubahan.

---

## Rangkuman

- HTML adalah bahasa markup untuk menandai struktur dan isi halaman, bukan bahasa pemrograman.
- Satu elemen terdiri dari tag pembuka, isi, dan tag penutup. Elemen kosong seperti `br`, `hr`, dan `img` tidak punya tag penutup.
- Atribut menambah informasi pada elemen dengan pola `nama="nilai"` di tag pembuka.
- Elemen bisa bersarang. Elemen yang dibuka belakangan harus ditutup lebih dulu.
- Komentar ditulis dengan `<!-- -->`, dan spasi berurutan di HTML digabung oleh browser.
- File HTML berakhiran `.html`, dan halaman utama biasanya bernama `index.html`.
