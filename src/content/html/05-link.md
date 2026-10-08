---
jenis: murid
bab: html
urutan: 5
judul: "Link"
deskripsi: "Membuat link dengan elemen a: alamat absolut dan relatif, link ke bagian halaman, tab baru, email, telepon, dan unduhan."
---

# Link

Pada materi ini kamu akan mempelajari: cara membuat link dengan elemen `a`, perbedaan alamat absolut dan relatif, link ke bagian dalam halaman, membuka link di tab baru, serta link khusus untuk email, telepon, dan unduhan.

Sebelum mulai, pastikan kamu sudah memahami: atribut dari materi Pengenalan HTML, struktur folder dari materi Struktur Dokumen, dan pengertian URL dari bab Web.

---

## 1. Link Dasar

Link (tautan) adalah ciri khas web. Dari sinilah istilah **HyperText** berasal: teks yang bisa menghubungkan ke halaman lain.

#### Cara menulis

```html
<a href="https://developer.mozilla.org">Buka MDN</a>
<!-- a adalah elemen link, href berisi alamat tujuan -->
```

- `<a>` (*anchor*) adalah elemen link.
- Atribut `href` (*hypertext reference*) berisi alamat tujuan.
- Isi di antara tag pembuka dan penutup adalah teks yang bisa diklik.

Teks link sebaiknya menjelaskan tujuannya. Hindari teks seperti "klik di sini", karena tidak jelas, terutama bagi pembaca layar dan mesin pencari.

```html
<a href="https://developer.mozilla.org">Dokumentasi web di MDN</a>
<!-- teks link menjelaskan tujuan -->
<a href="https://developer.mozilla.org">Klik di sini</a>
<!-- kurang baik, tidak menjelaskan apa-apa -->
```

Elemen lain juga bisa dijadikan link, misalnya gambar. Cukup bungkus gambar dengan `<a>`.

```html
<a href="https://developer.mozilla.org">
  <img src="logo.png" alt="Logo MDN">
</a>
<!-- gambar menjadi bisa diklik -->
```

> **Ringkasan:** `a` dengan atribut `href` membuat link. Isi elemen adalah bagian yang diklik.

---

## 2. Alamat Absolut dan Relatif

Nilai `href` bisa ditulis dengan dua cara.

### 2.a Alamat Absolut

**Alamat absolut** adalah URL lengkap, dipakai untuk menuju situs lain.

```html
<a href="https://www.wikipedia.org">Wikipedia</a>
<!-- URL lengkap dengan protokol -->
```

Jangan lupa menulis `https://` di depan. Tanpanya, browser menganggap itu nama file di folder yang sama, bukan alamat situs lain.

### 2.b Alamat Relatif

**Alamat relatif** dihitung dari lokasi file yang sedang dibuka, dipakai untuk menuju halaman lain di situs yang sama.

Misalkan susunan project seperti ini.

```text
situs/
├── index.html
├── tentang.html
└── belajar/
    ├── html.html
    └── css.html
```

Maka dari `index.html`:

```html
<a href="tentang.html">Tentang</a>
<!-- file di folder yang sama -->
<a href="belajar/html.html">Belajar HTML</a>
<!-- masuk ke folder belajar -->
```

Dan dari `belajar/html.html`:

```html
<a href="css.html">Belajar CSS</a>
<!-- file di folder yang sama (sama-sama di folder belajar) -->
<a href="../index.html">Beranda</a>
<!-- ../ naik satu tingkat ke folder induk, lalu ke index.html -->
<a href="../tentang.html">Tentang</a>
```

Simbol yang dipakai di alamat relatif:

| Simbol | Arti |
|---|---|
| `nama.html` | File di folder yang sama |
| `folder/nama.html` | File di dalam sebuah folder |
| `../nama.html` | File di folder induk |
| `/nama.html` | File dari akar situs (dipakai saat sudah ada server) |

Cara berpikirnya sama dengan `cd` dan `..` di terminal, yang dibahas di bab Tools.

> **Catatan:** Link ke halaman sendiri sebaiknya memakai alamat relatif. Dengan begitu, link tetap bekerja walaupun situsmu berpindah domain.

> **Ringkasan:** Alamat absolut (URL lengkap) untuk situs lain, alamat relatif untuk halaman di situs sendiri. `../` berarti naik satu folder.

---

## 3. Link ke Bagian dalam Halaman

Link bisa menuju bagian tertentu di dalam halaman yang sama (atau halaman lain). Caranya memakai atribut `id` sebagai penanda tujuan dan tanda `#` pada link.

#### Cara menulis

```html
<a href="#kesimpulan">Lompat ke kesimpulan</a>
<!-- # diikuti id tujuan, membuat halaman bergulir ke elemen tersebut -->

<!-- ... isi halaman yang panjang ... -->

<h2 id="kesimpulan">Kesimpulan</h2>
<!-- id menandai elemen sebagai tujuan -->
```

Beberapa variasi:

```html
<a href="#">Kembali ke atas</a>
<!-- # saja membawa ke bagian paling atas halaman -->
<a href="belajar/html.html#teks">Ke bagian Teks di halaman HTML</a>
<!-- menuju bagian tertentu di halaman lain -->
```

Aturan `id`: harus unik di satu halaman, tanpa spasi, dan huruf besar kecil dibedakan.

> **Ringkasan:** `#nama-id` pada `href` menuju elemen dengan `id` yang sama.

---

## 4. Membuka di Tab Baru

Secara bawaan, link membuka halaman di tab yang sama. Atribut `target="_blank"` membukanya di tab baru.

```html
<a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">Buka MDN</a>
<!-- target _blank membuka tab baru, rel noopener noreferrer menjaga keamanan -->
```

Atribut `rel="noopener noreferrer"` ditambahkan sebagai kebiasaan baik saat memakai `_blank`, agar halaman yang dibuka tidak punya akses ke halaman asalnya.

Gunakan tab baru dengan hemat, misalnya untuk link ke situs luar. Link ke halaman sendiri sebaiknya dibuka di tab yang sama, supaya pengguna tidak kebanjiran tab.

> **Ringkasan:** `target="_blank"` membuka tab baru, dilengkapi `rel="noopener noreferrer"` untuk keamanan.

---

## 5. Link Khusus

Atribut `href` tidak hanya untuk halaman web.

### 5.a Email

```html
<a href="mailto:halo@contoh.com">Kirim email</a>
<!-- membuka aplikasi email dengan alamat tujuan sudah terisi -->
<a href="mailto:halo@contoh.com?subject=Tanya%20Materi">Tanya materi</a>
<!-- ?subject= mengisi subjek email, spasi ditulis sebagai %20 -->
```

### 5.b Telepon

```html
<a href="tel:+6281234567890">Hubungi kami</a>
<!-- di ponsel akan membuka aplikasi telepon, tulis nomor dengan kode negara -->
```

### 5.c Unduhan

```html
<a href="materi/panduan.pdf" download>Unduh panduan</a>
<!-- atribut download membuat file diunduh, bukan dibuka di browser -->
```

Atribut `download` hanya bekerja untuk file dari situs yang sama.

> **Ringkasan:** `mailto:` untuk email, `tel:` untuk telepon, dan atribut `download` untuk mengunduh file.

---

## 6. Link untuk Navigasi

Menu navigasi website biasanya adalah daftar link. Kombinasi daftar (`ul`, `li`) dan link (`a`) ini dipakai hampir di semua situs.

```html
<ul>
  <li><a href="index.html">Beranda</a></li>
  <!-- setiap item daftar berisi satu link -->
  <li><a href="tentang.html">Tentang</a></li>
  <li><a href="kontak.html">Kontak</a></li>
</ul>
```

Pembungkus menu seperti ini nanti akan ditambah elemen semantik `nav`, dibahas di materi HTML Semantik. Tampilannya dibuat menjadi menu horizontal dengan CSS.

---

## 7. Latihan Singkat

Buat dua file, `index.html` dan `tentang.html`, di folder yang sama.

1. Di `index.html`, buat menu dengan `ul` berisi link ke `index.html` dan `tentang.html`. Salin menu yang sama ke `tentang.html`.
2. Tambahkan link ke situs luar yang membuka tab baru.
3. Buat halaman panjang (tambahkan banyak paragraf) dengan dua heading ber-`id`, lalu buat link di bagian atas yang melompat ke kedua heading tersebut.
4. Tambahkan link `mailto:` dan `tel:`.

---

## Rangkuman

- Link dibuat dengan `<a href="alamat">teks</a>`, dan teks link sebaiknya menjelaskan tujuannya.
- Alamat absolut (URL lengkap) dipakai untuk situs lain, alamat relatif untuk halaman di situs sendiri. `../` berarti naik satu folder.
- `href="#id"` menuju elemen dengan `id` yang sama di halaman.
- `target="_blank"` membuka tab baru, dilengkapi `rel="noopener noreferrer"`.
- `mailto:`, `tel:`, dan atribut `download` dipakai untuk email, telepon, dan unduhan.
- Menu navigasi umumnya berupa daftar berisi link.
