---
jenis: murid
bab: css
urutan: 5
judul: "Teks dan Font"
deskripsi: "Mengatur jenis huruf, ukuran, ketebalan, jarak baris, perataan, dan dekorasi teks, serta memakai Google Fonts."
---

# Teks dan Font

Pada materi ini kamu akan mempelajari: cara mengatur jenis huruf (`font-family`), ukuran, ketebalan, jarak antar baris, perataan teks, dekorasi teks, serta cara memakai font dari Google Fonts.

Sebelum mulai, pastikan kamu sudah memahami: warna dan satuan dari materi sebelumnya, serta elemen teks di HTML.

---

## 1. Jenis Huruf

### 1.a font-family

Properti `font-family` menentukan jenis huruf. Tulis beberapa pilihan, dipisah koma, dari yang paling diinginkan. Browser memakai yang pertama tersedia di perangkat pengguna.

```css
body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}
/* coba Helvetica Neue, jika tidak ada pakai Arial, jika tidak ada pakai sans-serif apa pun */
```

Nama font yang mengandung spasi harus diberi tanda kutip. Daftar paling akhir sebaiknya berupa **keluarga generik**, sebagai cadangan terakhir.

| Keluarga generik | Ciri | Contoh font |
|---|---|---|
| `serif` | Berkait di ujung huruf | Times New Roman, Georgia |
| `sans-serif` | Tanpa kait, bersih | Arial, Helvetica |
| `monospace` | Lebar setiap huruf sama | Courier New, Consolas |
| `cursive` | Mirip tulisan tangan | |

Untuk teks bacaan di layar, `sans-serif` paling umum dipakai. Untuk kode, pakai `monospace`.

### 1.b System Font Stack

Daftar yang memakai font bawaan tiap sistem operasi sehingga tampil cepat dan terasa "native".

```css
body {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}
```

> **Ringkasan:** `font-family` berisi daftar pilihan huruf dan diakhiri keluarga generik sebagai cadangan.

---

## 2. Ukuran, Ketebalan, dan Gaya

```css
p {
  font-size: 1rem;
  /* ukuran huruf, disarankan memakai rem */
  font-weight: 400;
  /* ketebalan: 400 normal, 700 tebal */
  font-style: italic;
  /* miring */
}
```

| Properti | Nilai umum | Fungsi |
|---|---|---|
| `font-size` | `1rem`, `18px`, `120%` | Ukuran huruf |
| `font-weight` | `100` sampai `900`, `normal` (400), `bold` (700) | Ketebalan |
| `font-style` | `normal`, `italic` | Miring atau tidak |

Ketebalan dengan angka (kelipatan 100) hanya berpengaruh jika font yang dipakai punya varian ketebalan tersebut.

> **Catatan:** Untuk membuat teks tebal atau miring karena maknanya, pakai elemen `strong` dan `em` di HTML. Gunakan CSS untuk urusan tampilan semata.

---

## 3. Jarak dan Perataan

### 3.a line-height

Jarak antar baris dalam paragraf. Nilainya sebaiknya **tanpa satuan**, yang berarti kelipatan dari ukuran hurufnya.

```css
p {
  line-height: 1.6;
  /* tinggi baris 1,6 kali ukuran huruf, nyaman untuk bacaan panjang */
}
```

Nilai antara 1.4 dan 1.8 umumnya nyaman untuk paragraf.

### 3.b text-align

```css
h1 {
  text-align: center;
  /* left, right, center, atau justify */
}
```

`text-align` meratakan teks di dalam elemennya, bukan memindahkan elemen. Untuk memusatkan kotak, caranya berbeda dan dibahas di materi Box Model dan Flexbox.

### 3.c letter-spacing dan word-spacing

```css
.judul {
  letter-spacing: 2px;
  /* jarak antar huruf */
  word-spacing: 4px;
  /* jarak antar kata */
}
```

> **Ringkasan:** `line-height` tanpa satuan mengatur jarak baris, `text-align` meratakan teks, dan `letter-spacing` mengatur jarak antar huruf.

---

## 4. Dekorasi dan Transformasi Teks

### 4.a text-decoration

```css
a {
  text-decoration: none;
  /* menghilangkan garis bawah bawaan link */
}
.dicoret {
  text-decoration: line-through;
}
.garis-bawah {
  text-decoration: underline;
}
```

> **Catatan:** Link yang tidak punya garis bawah sulit dikenali sebagai link. Jika kamu menghilangkannya, beri penanda lain seperti warna yang jelas atau garis bawah saat `:hover`.

### 4.b text-transform

```css
.judul {
  text-transform: uppercase;
  /* MENJADI HURUF KAPITAL SEMUA, tanpa mengubah teks di HTML */
}
.nama {
  text-transform: capitalize;
  /* Huruf Pertama Tiap Kata Kapital */
}
```

Nilai lain: `lowercase` dan `none`.

### 4.c Menangani Teks Panjang

```css
.ringkas {
  white-space: nowrap;
  /* teks tidak pindah baris */
  overflow: hidden;
  /* bagian yang melebihi kotak disembunyikan */
  text-overflow: ellipsis;
  /* diganti tanda titik tiga di akhir */
}
```

Ketiganya dipakai bersama untuk memotong teks satu baris menjadi "contoh teks yang terlalu pan...".

> **Ringkasan:** `text-decoration` mengatur garis pada teks, `text-transform` mengubah kapitalisasi tampilan, dan kombinasi tiga properti membuat teks terpotong dengan titik-titik.

---

## 5. Font dari Google Fonts

Font bawaan sistem tidak sama di setiap perangkat. Untuk tampilan yang konsisten, kita bisa memuat font dari layanan seperti **Google Fonts**.

#### Langkah-langkah

1. Buka `fonts.google.com`, lalu pilih font (misalnya Inter).
2. Pilih ketebalan yang akan dipakai (misalnya Regular 400 dan Bold 700).
3. Salin kode `link` yang disediakan, lalu tempel di `head` sebelum file CSS-mu.

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- mempercepat koneksi ke server font -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <!-- memuat font Inter ketebalan 400 dan 700 -->
  <link rel="stylesheet" href="style.css">
</head>
```

4. Pakai di CSS dengan menyertakan cadangan.

```css
body {
  font-family: "Inter", sans-serif;
}
```

Beberapa hal yang perlu diingat:

- Muat hanya ketebalan yang benar-benar dipakai agar halaman tidak lambat.
- Kode `link` yang kamu salin dari situs Google Fonts bisa sedikit berbeda dari contoh di atas. Selalu gunakan kode yang diberikan situsnya.
- Font yang dimuat dari internet butuh koneksi, sehingga cadangan `sans-serif` tetap wajib ditulis.

> **Ringkasan:** Google Fonts dimuat lewat `link` di `head`, lalu dipakai di `font-family` dengan cadangan generik.

---

## 6. Singkatan font

Beberapa properti font bisa ditulis sekaligus dengan `font`.

```css
p {
  font: italic 700 1.2rem/1.5 "Inter", sans-serif;
  /* gaya, ketebalan, ukuran/tinggi baris, lalu keluarga huruf */
}
```

Urutannya harus tepat, dan `font-size` serta `font-family` wajib ada. Untuk pemula, menulis satu properti per baris lebih mudah dibaca.

---

## 7. Latihan Singkat

1. Atur `body` dengan font, ukuran dasar, dan `line-height` yang nyaman dibaca.
2. Buat `h1` berhuruf kapital dengan `letter-spacing`.
3. Hilangkan garis bawah link, lalu munculkan kembali saat `:hover`.
4. Muat satu font dari Google Fonts dan pakai untuk judul.
5. Potong satu baris teks panjang dengan titik-titik di akhir.

---

## Rangkuman

- `font-family` berisi daftar pilihan huruf dan diakhiri keluarga generik seperti `sans-serif`.
- `font-size` sebaiknya memakai `rem`, `font-weight` mengatur ketebalan, dan `font-style` mengatur miring.
- `line-height` tanpa satuan (misalnya 1.6) membuat paragraf nyaman dibaca. `text-align` meratakan teks.
- `text-decoration` dan `text-transform` mengatur garis dan kapitalisasi tampilan teks.
- Google Fonts dimuat lewat `link` di `head`, dan hanya muat ketebalan yang dipakai.
