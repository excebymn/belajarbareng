---
jenis: murid
bab: html
urutan: 2
judul: "Struktur Dokumen HTML"
deskripsi: "Memahami kerangka halaman HTML: doctype, html, head, body, meta, title, serta struktur folder project web sederhana."
---

# Struktur Dokumen HTML

Pada materi ini kamu akan mempelajari: kerangka yang dimiliki setiap halaman HTML, isi bagian `head` dan `body`, elemen `meta` yang umum dipakai, serta cara menyusun folder project web sederhana.

Sebelum mulai, pastikan kamu sudah memahami: tag, elemen, atribut, dan nesting dari materi Pengenalan HTML.

---

## 1. Kerangka Halaman

Setiap halaman HTML memiliki kerangka yang sama. Kerangka ini menjadi titik awal setiap kali kamu membuat halaman baru.

#### Cara menulis

```html
<!DOCTYPE html>
<!-- memberi tahu browser bahwa ini dokumen HTML modern -->
<html lang="id">
  <!-- elemen terluar pembungkus halaman, lang="id" menandai bahasa Indonesia -->
  <head>
    <!-- berisi informasi halaman yang tidak tampil di layar -->
    <meta charset="UTF-8">
    <!-- mengatur jenis karakter agar huruf dan simbol tampil benar -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- mengatur tampilan agar pas di layar ponsel -->
    <title>Judul Halaman</title>
    <!-- judul yang tampil di tab browser -->
  </head>
  <body>
    <!-- berisi semua yang tampil di halaman -->
    <h1>Halo, Web!</h1>
  </body>
</html>
```

Mental model yang mudah diingat:

| Bagian | Isi |
|---|---|
| `head` | Informasi tentang halaman (tidak tampil di layar) |
| `body` | Isi halaman (yang tampil di layar) |

> **Ringkasan:** Halaman HTML punya kerangka tetap. `head` berisi informasi halaman, `body` berisi isi yang tampil.

---

## 2. Bagian-bagian Kerangka

### 2.a DOCTYPE

`<!DOCTYPE html>` selalu ditulis di baris pertama. Fungsinya memberi tahu browser bahwa halaman ini memakai standar HTML modern. Tanpanya, browser bisa menampilkan halaman dengan cara lama yang tidak konsisten.

DOCTYPE bukan elemen HTML biasa, sehingga tidak punya tag penutup.

### 2.b Elemen html dan Atribut lang

`<html>` membungkus seluruh isi halaman. Atribut `lang` menandai bahasa halaman.

```html
<html lang="id">
<!-- halaman berbahasa Indonesia -->
<html lang="en">
<!-- halaman berbahasa Inggris -->
```

Atribut `lang` membantu pembaca layar (*screen reader*) mengucapkan teks dengan logat yang tepat, dan membantu browser menawarkan terjemahan. Ia juga dipakai mesin pencari.

### 2.c Elemen head

`<head>` berisi informasi **tentang** halaman, bukan isi halaman itu sendiri. Isinya tidak tampil di layar, tetapi dibaca oleh browser dan mesin pencari.

Elemen yang umum ada di dalam `head`:

| Elemen | Fungsi |
|---|---|
| `<meta charset="UTF-8">` | Mengatur karakter agar huruf dan simbol (misalnya é, ©, emoji) tampil benar |
| `<meta name="viewport" ...>` | Mengatur lebar halaman di perangkat seluler |
| `<title>` | Judul yang tampil di tab browser, dan menjadi judul saat halaman disimpan sebagai bookmark |
| `<meta name="description" ...>` | Ringkasan halaman untuk mesin pencari |
| `<link>` | Menghubungkan file lain, misalnya file CSS |
| `<script>` | Memuat atau menulis kode JavaScript |

### 2.d Elemen body

`<body>` berisi semua yang tampil di halaman: teks, gambar, tombol, dan sebagainya. Hampir semua materi di bab HTML berikutnya ditulis di dalam `body`.

> **Ringkasan:** `DOCTYPE` menandai HTML modern, `html lang` membungkus halaman dan menandai bahasa, `head` berisi info halaman, `body` berisi isi tampil.

---

## 3. Elemen meta yang Penting

### 3.a charset

```html
<meta charset="UTF-8">
<!-- memakai UTF-8, standar yang mendukung hampir semua huruf dan simbol -->
```

Tanpa baris ini, huruf tertentu bisa tampil rusak (misalnya menjadi tanda tanya atau karakter aneh). Tulis baris ini di bagian paling atas `head`.

### 3.b viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- lebar halaman mengikuti lebar layar perangkat, tanpa pembesaran awal -->
```

Tanpa baris ini, browser di ponsel menampilkan halaman seolah-olah layarnya selebar komputer, lalu mengecilkannya. Tampilannya jadi kecil dan sulit dibaca. Baris ini wajib ada untuk halaman yang nyaman dibuka di ponsel (dibahas lebih lanjut di bab CSS tentang responsive).

### 3.c description

```html
<meta name="description" content="Halaman belajar HTML untuk pemula.">
<!-- ringkasan yang sering tampil di bawah judul pada hasil pencarian Google -->
```

Atribut `name` menyebutkan jenis informasinya, dan `content` berisi nilainya. Pembahasan lengkap tentang pengaruhnya pada pencarian ada di bab SEO.

> **Ringkasan:** `charset` untuk karakter, `viewport` untuk tampilan di ponsel, `description` untuk ringkasan di mesin pencari.

---

## 4. Menghubungkan CSS dan JavaScript

Halaman biasanya terdiri dari tiga file terpisah: HTML untuk struktur, CSS untuk tampilan, dan JavaScript untuk perilaku. Ketiganya dihubungkan lewat HTML.

```html
<head>
  <link rel="stylesheet" href="style.css">
  <!-- menghubungkan file style.css sebagai file tampilan -->
  <script src="script.js" defer></script>
  <!-- memuat file script.js, defer menunda eksekusi sampai HTML selesai dibaca -->
</head>
```

Penjelasan:

- `rel="stylesheet"` memberi tahu browser bahwa file yang dihubungkan adalah file CSS, dan `href` berisi lokasinya.
- `src` pada `script` berisi lokasi file JavaScript.
- `defer` memastikan JavaScript baru dijalankan setelah seluruh HTML dibaca, supaya kode tidak error karena elemennya belum ada.
- `<script>` selalu butuh tag penutup, walaupun kosong.

Isi file CSS dan JavaScript dipelajari di bab CSS dan bab JS. Untuk sekarang, cukup tahu cara menghubungkannya.

> **Ringkasan:** `link` menghubungkan CSS, dan `script` dengan `src` menghubungkan JavaScript. `defer` menunda eksekusi sampai HTML selesai dibaca.

---

## 5. Struktur Folder Project

Setiap file yang dihubungkan harus bisa ditemukan oleh browser. Susunan folder yang rapi memudahkan hal ini.

```text
belajar-html/
├── index.html
├── style.css
├── script.js
└── img/
    └── kucing.jpg
```

Dengan susunan di atas, `index.html` menghubungkan file lain memakai path relatif.

```html
<link rel="stylesheet" href="style.css">
<!-- style.css berada di folder yang sama dengan index.html -->
<img src="img/kucing.jpg" alt="Foto seekor kucing">
<!-- kucing.jpg berada di dalam folder img -->
```

Aturan penamaan yang sebaiknya selalu diikuti:

- Gunakan huruf kecil semua.
- Jangan pakai spasi. Gunakan tanda hubung (`-`).
- Halaman utama diberi nama `index.html`.

Aturan huruf kecil penting karena server Linux membedakan huruf besar dan kecil. Nama `Foto.jpg` dan `foto.jpg` dianggap dua file berbeda. Hal ini dibahas di bab OS.

> **Ringkasan:** Susun file dalam folder yang rapi, hubungkan dengan path relatif, dan pakai nama file huruf kecil tanpa spasi.

---

## 6. Melihat Struktur di DevTools

Setelah membuka halaman, tekan `F12` dan pilih tab **Elements**. Kamu akan melihat struktur `html`, `head`, dan `body` dari halaman yang sedang dibuka, lengkap dengan elemen di dalamnya. Coba lakukan pada beberapa situs favoritmu untuk melihat bagaimana mereka menyusun `head` dan `body`.

> **Catatan:** Elements menampilkan HTML yang sudah dibaca browser, jadi bisa sedikit berbeda dari file aslinya, terutama pada situs yang memakai JavaScript.

---

## Rangkuman

- Kerangka HTML terdiri dari `<!DOCTYPE html>`, `<html lang>`, `<head>`, dan `<body>`.
- `head` berisi informasi halaman yang tidak tampil, sedangkan `body` berisi isi yang tampil.
- `meta charset="UTF-8"` agar karakter tampil benar, `meta viewport` agar nyaman di ponsel, dan `meta description` untuk ringkasan di mesin pencari.
- `link rel="stylesheet"` menghubungkan CSS, dan `script src` menghubungkan JavaScript (dengan `defer` untuk menunda eksekusi).
- Susun file dengan rapi, pakai nama huruf kecil tanpa spasi, dan beri nama `index.html` untuk halaman utama.
