---
jenis: murid
bab: css
urutan: 1
judul: "Pengenalan CSS"
deskripsi: "Memahami fungsi CSS, cara menulis aturan, tiga cara memasang CSS ke HTML, komentar, dan cara memeriksa gaya lewat DevTools."
---

# Pengenalan CSS

Pada materi ini kamu akan mempelajari: apa itu CSS, cara menulis sebuah aturan CSS, tiga cara memasang CSS ke halaman HTML, cara menulis komentar, serta cara memeriksa gaya lewat DevTools.

Sebelum mulai, pastikan kamu sudah memahami: dasar HTML (tag, elemen, atribut) dari bab HTML, serta cara menghubungkan file dari materi Struktur Dokumen HTML.

---

## 1. Apa itu CSS

**CSS** (Cascading Style Sheets) adalah bahasa untuk mengatur **tampilan** halaman web: warna, ukuran, jarak, huruf, tata letak, dan animasi. HTML menentukan isi dan struktur, sedangkan CSS menentukan bagaimana isi itu terlihat.

| | HTML | CSS |
|---|---|---|
| Fungsi | Struktur dan isi | Tampilan |
| Contoh | "Ini judul" | "Judul berwarna biru dan berukuran besar" |

Memisahkan keduanya membuat kita bisa mengubah seluruh tampilan situs tanpa menyentuh isinya. Sama seperti HTML, CSS bukan bahasa pemrograman: ia mendeskripsikan tampilan, bukan menjalankan logika.

> **Ringkasan:** CSS mengatur tampilan halaman, sedangkan HTML mengatur isinya.

---

## 2. Menulis Aturan CSS

Satu aturan CSS (*rule*) terdiri dari **selector** dan **blok deklarasi**.

#### Cara menulis

```css
h1 {
  color: blue;
  font-size: 32px;
}
/* h1 adalah selector, di dalam kurung kurawal ada dua deklarasi */
```

| Bagian | Contoh | Fungsi |
|---|---|---|
| Selector | `h1` | Memilih elemen mana yang diberi gaya |
| Properti | `color` | Aspek tampilan yang diubah |
| Nilai | `blue` | Nilai untuk properti tersebut |
| Deklarasi | `color: blue;` | Pasangan properti dan nilai, diakhiri titik koma |

Aturan penulisan yang perlu diingat:

- Properti dan nilai dipisah titik dua (`:`).
- Setiap deklarasi diakhiri titik koma (`;`).
- Satu selector boleh punya banyak deklarasi.
- Spasi dan baris baru tidak berpengaruh, tetapi tulis satu deklarasi per baris agar mudah dibaca.

> **Ringkasan:** Aturan CSS = selector + blok deklarasi `{ properti: nilai; }`.

---

## 3. Tiga Cara Memasang CSS

### 3.a CSS Eksternal (Disarankan)

Tulis CSS di file terpisah berakhiran `.css`, lalu hubungkan dari HTML dengan `link`.

```html
<head>
  <link rel="stylesheet" href="style.css">
  <!-- menghubungkan file style.css ke halaman ini -->
</head>
```

```css
/* isi file style.css */
body {
  background-color: lightyellow;
}
```

Keunggulannya: satu file CSS bisa dipakai banyak halaman, dan perubahan cukup dilakukan di satu tempat.

### 3.b CSS Internal

Tulis CSS di dalam elemen `style` di bagian `head`.

```html
<head>
  <style>
    body {
      background-color: lightyellow;
    }
  </style>
</head>
```

Cocok untuk percobaan cepat atau halaman tunggal, tetapi tidak bisa dipakai bersama halaman lain.

### 3.c CSS Inline

Tulis CSS langsung di atribut `style` pada sebuah elemen.

```html
<p style="color: red; font-size: 20px;">Teks merah</p>
<!-- gaya hanya berlaku untuk elemen p ini saja -->
```

Gaya inline sulit dirawat dan susah ditimpa. Hindari memakainya kecuali untuk hal sangat khusus.

| Cara | Lokasi | Kapan dipakai |
|---|---|---|
| Eksternal | File `.css` terpisah | Hampir selalu (standar) |
| Internal | Elemen `style` di `head` | Percobaan cepat |
| Inline | Atribut `style` | Dihindari |

> **Catatan:** Jika gaya tidak muncul, periksa dulu apakah `href` di `link` sudah benar. Cek tab **Network** di DevTools, dan pastikan file CSS berstatus `200`, bukan `404`.

> **Ringkasan:** Pakai CSS eksternal lewat `link rel="stylesheet"`. Internal untuk percobaan, inline dihindari.

---

## 4. Komentar

Komentar CSS ditulis dengan `/* ... */`, bisa satu baris atau beberapa baris, dan tidak berpengaruh pada tampilan.

```css
/* Pengaturan umum halaman */
body {
  /* warna latar halaman */
  background-color: #fafafa;
}
```

Di VS Code, tekan `Ctrl+/` untuk mengubah baris menjadi komentar.

---

## 5. Memeriksa Gaya di DevTools

DevTools adalah alat terbaik untuk belajar CSS.

#### Langkah-langkah

1. Tekan `F12`, lalu pilih tab **Elements**.
2. Klik elemen di struktur HTML (atau klik ikon panah di kiri atas DevTools, lalu klik elemen di halaman).
3. Lihat panel **Styles** di sisi kanan. Di sana terlihat semua aturan CSS yang berlaku pada elemen itu.
4. Coba ubah nilai atau centang dan hilangkan centang pada deklarasi. Halaman langsung berubah.

Perubahan di DevTools bersifat sementara dan hilang saat halaman dimuat ulang. Setelah menemukan nilai yang cocok, salin ke file CSS-mu.

> **Ringkasan:** DevTools tab Elements dan panel Styles dipakai untuk melihat dan mencoba CSS secara langsung.

---

## 6. Latihan Singkat

1. Buat `index.html` dengan satu `h1` dan dua `p`, lalu hubungkan dengan `style.css`.
2. Ubah warna `h1`, ukuran huruf `p`, dan warna latar `body`.
3. Coba tiga cara memasang CSS, lalu rasakan perbedaannya.
4. Buka DevTools, lalu ubah nilai warna `h1` secara langsung.

---

## Rangkuman

- CSS mengatur tampilan, HTML mengatur isi dan struktur.
- Aturan CSS terdiri dari selector dan deklarasi `properti: nilai;` di dalam `{ }`.
- Ada tiga cara memasang CSS: eksternal (disarankan), internal, dan inline (dihindari).
- Komentar CSS ditulis dengan `/* ... */`.
- DevTools tab Elements dan panel Styles dipakai untuk memeriksa dan mencoba CSS.
