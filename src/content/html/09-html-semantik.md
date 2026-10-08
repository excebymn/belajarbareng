---
jenis: murid
bab: html
urutan: 9
judul: "HTML Semantik"
deskripsi: "Memahami elemen semantik seperti header, nav, main, section, article, aside, dan footer, serta kapan memakai div dan span."
---

# HTML Semantik

Pada materi ini kamu akan mempelajari: apa arti semantik di HTML, elemen penyusun tata letak halaman seperti `header`, `nav`, `main`, `section`, `article`, `aside`, dan `footer`, perbedaannya dengan `div` dan `span`, serta cara menyusun halaman yang baik.

Sebelum mulai, pastikan kamu sudah memahami: heading, daftar, dan link dari materi sebelumnya di bab HTML.

---

## 1. Apa itu Semantik

**Semantik** berarti "memiliki makna". Elemen semantik adalah elemen yang namanya sudah menjelaskan fungsi isinya, seperti `<nav>` untuk navigasi dan `<footer>` untuk bagian kaki halaman.

Bandingkan dua cara menulis halaman berikut.

```html
<!-- Tanpa semantik: nama elemen tidak memberi petunjuk apa pun -->
<div class="atas">
  <div class="menu">...</div>
</div>
<div class="isi">...</div>
<div class="bawah">...</div>
```

```html
<!-- Dengan semantik: nama elemen menjelaskan fungsinya -->
<header>
  <nav>...</nav>
</header>
<main>...</main>
<footer>...</footer>
```

Keduanya bisa tampil sama setelah diberi CSS. Perbedaannya ada pada **makna** yang dibaca mesin dan manusia.

### 1.a Manfaat Semantik

| Manfaat | Penjelasan |
|---|---|
| Aksesibilitas | Pembaca layar bisa memberi tahu pengguna tunanetra bagian apa yang sedang dibaca, dan melompat antar bagian dengan cepat |
| SEO | Mesin pencari lebih memahami mana isi utama, navigasi, dan bagian pendukung (dibahas di bab SEO) |
| Keterbacaan kode | Kode lebih mudah dipahami oleh kamu dan rekan setim |
| Perawatan | Mudah mencari bagian yang ingin diubah |

> **Ringkasan:** Elemen semantik menjelaskan fungsi isinya, sehingga bermanfaat untuk aksesibilitas, SEO, dan keterbacaan kode.

---

## 2. Elemen Penyusun Halaman

Berikut gambaran umum tata letak halaman dengan elemen semantik.

```text
┌───────────────────────────────┐
│ header                        │
│   nav                         │
├───────────────────┬───────────┤
│ main              │ aside     │
│   article         │           │
│   section         │           │
├───────────────────┴───────────┤
│ footer                        │
└───────────────────────────────┘
```

### 2.a header

`<header>` berisi bagian pembuka sebuah halaman atau sebuah bagian. Umumnya berisi logo, judul situs, dan navigasi.

```html
<header>
  <h1>Belajar Web</h1>
  <!-- judul situs atau judul utama halaman -->
</header>
```

`header` juga bisa dipakai di dalam `article` atau `section` sebagai pembuka bagian tersebut.

### 2.b nav

`<nav>` membungkus kumpulan link navigasi utama, seperti menu situs.

```html
<nav>
  <ul>
    <li><a href="index.html">Beranda</a></li>
    <!-- menu navigasi ditulis sebagai daftar berisi link -->
    <li><a href="tentang.html">Tentang</a></li>
    <li><a href="kontak.html">Kontak</a></li>
  </ul>
</nav>
```

Tidak semua kumpulan link perlu dibungkus `nav`. Pakai untuk blok navigasi utama saja, bukan untuk setiap link.

### 2.c main

`<main>` berisi **isi utama** halaman, yaitu bagian yang unik untuk halaman tersebut. Header, navigasi, dan footer yang berulang di setiap halaman berada di luar `main`.

```html
<main>
  <h2>Selamat Datang</h2>
  <p>Isi utama halaman ditulis di sini.</p>
</main>
```

Aturan: hanya **satu `main`** per halaman.

### 2.d section

`<section>` mengelompokkan isi yang bertema sama, dan biasanya diberi heading.

```html
<section>
  <h2>Tentang Kami</h2>
  <!-- section sebaiknya punya heading yang menjelaskan temanya -->
  <p>Kami adalah komunitas belajar web.</p>
</section>
```

### 2.e article

`<article>` berisi isi yang **bisa berdiri sendiri** dan tetap masuk akal bila dipisahkan dari halaman, seperti artikel berita, postingan blog, atau komentar.

```html
<article>
  <h2>Mengenal HTML</h2>
  <p>HTML adalah bahasa markup untuk menyusun halaman web.</p>
  <!-- isi ini utuh, bisa dipindah ke halaman lain dan tetap bermakna -->
</article>
```

Cara membedakan `article` dan `section`:

| | `article` | `section` |
|---|---|---|
| Berdiri sendiri | Ya | Tidak, merupakan bagian dari isi yang lebih besar |
| Contoh | Postingan blog, berita, kartu produk | Bab dalam sebuah halaman, kelompok isi bertema |

### 2.f aside

`<aside>` berisi isi pendukung yang kurang berkaitan langsung dengan isi utama, seperti sidebar, kotak info tambahan, atau daftar artikel terkait.

```html
<aside>
  <h2>Artikel Terkait</h2>
  <ul>
    <li><a href="css.html">Mengenal CSS</a></li>
  </ul>
</aside>
```

### 2.g footer

`<footer>` berisi bagian kaki halaman atau sebuah bagian, biasanya berisi hak cipta, kontak, dan link tambahan.

```html
<footer>
  <p>&copy; 2026 Belajar Web</p>
  <!-- &copy; adalah entitas untuk simbol hak cipta -->
</footer>
```

> **Ringkasan:** `header` pembuka, `nav` navigasi, `main` isi utama (hanya satu), `section` kelompok bertema, `article` isi mandiri, `aside` isi pendukung, `footer` kaki halaman.

---

## 3. Elemen Semantik Lain

| Elemen | Fungsi |
|---|---|
| `<figure>` dan `<figcaption>` | Gambar atau ilustrasi dengan keterangan (dibahas di materi Gambar dan Media) |
| `<time>` | Menandai tanggal atau waktu agar bisa dibaca mesin |
| `<address>` | Informasi kontak pembuat halaman atau artikel |
| `<mark>` | Teks yang disorot |
| `<button>` | Tombol aksi |

```html
<p>Diterbitkan pada <time datetime="2026-10-06">6 Oktober 2026</time>.</p>
<!-- datetime berisi format baku yang mudah dibaca mesin, teks di dalamnya tampil ke pembaca -->
```

> **Ringkasan:** Banyak elemen lain yang juga semantik, seperti `figure`, `time`, dan `address`.

---

## 4. div dan span

Elemen `div` dan `span` **tidak punya makna**. Keduanya hanya pembungkus.

| Elemen | Jenis | Dipakai untuk |
|---|---|---|
| `<div>` | Pembungkus blok (tampil di baris sendiri) | Mengelompokkan elemen agar bisa diatur dengan CSS atau JavaScript |
| `<span>` | Pembungkus dalam baris | Membungkus sepotong teks agar bisa diberi gaya |

```html
<div class="kartu">
  <!-- div mengelompokkan beberapa elemen menjadi satu kartu -->
  <h3>Judul Kartu</h3>
  <p>Harga: <span class="harga">Rp 50.000</span></p>
  <!-- span membungkus harga saja, tanpa memecah kalimat -->
</div>
```

Aturan memilihnya: **utamakan elemen semantik**. Jika tidak ada elemen semantik yang cocok dan kamu hanya butuh pembungkus (misalnya untuk tata letak), pakai `div` atau `span`.

| Situasi | Pilihan |
|---|---|
| Menu situs | `nav` |
| Isi utama | `main` |
| Kartu berisi kumpulan elemen untuk tata letak saja | `div` |
| Sepotong teks yang ingin diwarnai | `span` |

> **Catatan:** Hindari "div soup", yaitu halaman yang seluruhnya terdiri dari `div` bersarang. Selain sulit dibaca, halaman seperti itu tidak punya makna bagi mesin.

> **Ringkasan:** `div` dan `span` adalah pembungkus tanpa makna. Pakai elemen semantik terlebih dahulu, dan `div` atau `span` saat tidak ada yang cocok.

---

## 5. Contoh Halaman Lengkap

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Belajar Web</title>
  </head>
  <body>
    <header>
      <h1>Belajar Web</h1>
      <nav>
        <ul>
          <li><a href="index.html">Beranda</a></li>
          <li><a href="tentang.html">Tentang</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <article>
        <h2>Mengenal HTML</h2>
        <p>HTML adalah bahasa markup untuk menyusun halaman web.</p>
        <section>
          <h3>Tag dan Elemen</h3>
          <p>Elemen terdiri dari tag pembuka, isi, dan tag penutup.</p>
        </section>
      </article>
      <aside>
        <h2>Artikel Terkait</h2>
        <p>Mengenal CSS.</p>
      </aside>
    </main>

    <footer>
      <p>&copy; 2026 Belajar Web</p>
    </footer>
  </body>
</html>
```

Tampilannya masih polos karena belum diberi CSS. Perhatikan bahwa kerangka halaman sudah jelas hanya dari nama-nama elemennya.

---

## 6. Latihan Singkat

1. Ambil halaman yang sudah kamu buat di materi sebelumnya, lalu rapikan dengan elemen semantik.
2. Pindahkan menu ke dalam `nav` di dalam `header`.
3. Bungkus isi unik halaman dengan `main`, dan tambahkan satu `footer`.
4. Tentukan mana bagian yang cocok jadi `article`, `section`, atau `aside`.
5. Buka DevTools tab **Elements**, lalu lihat struktur situs favoritmu. Cari elemen semantik yang mereka pakai.

---

## Rangkuman

- Semantik berarti elemen yang namanya sudah menjelaskan fungsi isinya, bermanfaat untuk aksesibilitas, SEO, dan keterbacaan.
- Elemen penyusun halaman: `header`, `nav`, `main` (hanya satu), `section`, `article`, `aside`, dan `footer`.
- `article` untuk isi yang bisa berdiri sendiri, `section` untuk kelompok isi bertema, dan `aside` untuk isi pendukung.
- `div` dan `span` adalah pembungkus tanpa makna. Utamakan elemen semantik, dan pakai `div` atau `span` saat tidak ada pilihan yang cocok.
- Hindari halaman yang seluruhnya terdiri dari `div` bersarang.
