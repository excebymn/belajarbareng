---
jenis: murid
bab: css
urutan: 4
judul: "Warna dan Satuan"
deskripsi: "Menulis warna dengan nama, hex, rgb, dan hsl, mengatur transparansi, serta memahami satuan px, em, rem, persen, vw, dan vh."
---

# Warna dan Satuan

Pada materi ini kamu akan mempelajari: cara menulis warna di CSS (nama, hex, rgb, hsl), cara mengatur transparansi, kontras warna yang baik, serta satuan ukuran seperti `px`, `em`, `rem`, `%`, `vw`, dan `vh`.

Sebelum mulai, pastikan kamu sudah memahami: aturan CSS dan selector dari dua materi sebelumnya.

---

## 1. Warna

Properti yang paling sering memakai warna:

| Properti | Mengatur |
|---|---|
| `color` | Warna teks |
| `background-color` | Warna latar |
| `border-color` | Warna garis tepi |

```css
p {
  color: white;
  background-color: darkblue;
}
/* teks putih di atas latar biru tua */
```

### 1.a Nama Warna

CSS menyediakan sekitar 140 nama warna bawaan.

```css
h1 {
  color: tomato;
}
/* contoh nama warna: red, blue, green, orange, tomato, gold, navy, gray */
```

Mudah dibaca, tetapi pilihannya terbatas.

### 1.b Hex

Format yang paling umum dipakai. Ditulis `#` diikuti enam karakter, dua untuk tiap warna merah, hijau, dan biru (`#rrggbb`). Tiap pasangan bernilai `00` sampai `ff` (0 sampai 255 dalam hitungan heksadesimal).

```css
.contoh {
  color: #ff0000;
  /* merah penuh: ff merah, 00 hijau, 00 biru */
  background-color: #1e90ff;
  /* biru muda */
  border-color: #fff;
  /* bentuk singkat dari #ffffff (putih), bila tiap pasangan berulang */
}
```

### 1.c RGB

Menulis kadar merah, hijau, dan biru dalam angka 0 sampai 255.

```css
.contoh {
  color: rgb(255, 0, 0);
  /* merah penuh */
  background-color: rgb(30, 144, 255);
  /* sama dengan #1e90ff */
}
```

### 1.d HSL

Menulis warna dengan tiga nilai yang lebih mudah dipikirkan manusia: **hue** (warna dasar, sudut 0 sampai 360), **saturation** (kepekatan, 0% sampai 100%), dan **lightness** (terang, 0% sampai 100%).

```css
.contoh {
  color: hsl(210, 100%, 56%);
  /* biru. 0 merah, 120 hijau, 240 biru */
  background-color: hsl(210, 100%, 90%);
  /* biru yang sama, tetapi jauh lebih terang */
}
```

HSL berguna untuk membuat variasi satu warna: cukup mengubah nilai terang atau gelapnya, tanpa mengubah warna dasarnya.

| Format | Contoh | Cocok untuk |
|---|---|---|
| Nama | `tomato` | Percobaan cepat |
| Hex | `#1e90ff` | Salinan dari desain, paling umum |
| RGB | `rgb(30, 144, 255)` | Saat perlu transparansi (RGBA) |
| HSL | `hsl(210, 100%, 56%)` | Membuat variasi terang dan gelap |

> **Ringkasan:** Warna bisa ditulis dengan nama, hex, rgb, atau hsl. Hex paling umum, HSL paling mudah untuk membuat variasi.

---

## 2. Transparansi

### 2.a Alpha pada Warna

Tambahkan nilai keempat (alpha, 0 sampai 1) untuk membuat warna transparan.

```css
.lapisan {
  background-color: rgba(0, 0, 0, 0.5);
  /* hitam dengan 50 persen transparan */
}
.lapisan2 {
  background-color: hsla(210, 100%, 56%, 0.3);
  /* biru dengan 30 persen opasitas */
}
```

Nilai `0` berarti transparan penuh, dan `1` berarti padat penuh.

### 2.b Properti opacity

Properti `opacity` mengatur transparansi **seluruh elemen**, termasuk isi di dalamnya.

```css
.gambar {
  opacity: 0.6;
}
```

Perbedaan penting:

| | `rgba(0, 0, 0, 0.5)` pada background | `opacity: 0.5` |
|---|---|---|
| Yang menjadi transparan | Hanya warna latar | Seluruh elemen, termasuk teks dan anaknya |

Jika kamu ingin latar transparan tetapi teks tetap jelas, pakai alpha pada warna latar, bukan `opacity`.

> **Ringkasan:** Alpha pada `rgba` atau `hsla` membuat satu warna transparan. `opacity` membuat seluruh elemen transparan.

---

## 3. Kontras Warna

Warna teks harus cukup kontras dengan latarnya agar mudah dibaca, terutama bagi pengguna dengan penglihatan kurang baik.

| Contoh | Penilaian |
|---|---|
| Teks hitam di atas putih | Kontras sangat baik |
| Teks abu-abu muda di atas putih | Kontras buruk, sulit dibaca |
| Teks kuning di atas putih | Kontras buruk |

Panduan umum (standar WCAG) menyarankan rasio kontras minimal **4,5 berbanding 1** untuk teks biasa. Kamu tidak perlu menghitungnya sendiri: DevTools menampilkan rasio kontras saat memilih warna teks di panel Styles, dan banyak alat daring tersedia untuk memeriksanya.

> **Catatan:** Jangan menyampaikan informasi hanya lewat warna. Misalnya pesan galat sebaiknya tidak hanya berwarna merah, tetapi juga disertai teks atau ikon.

---

## 4. Satuan Ukuran

Banyak properti butuh ukuran: lebar, tinggi, jarak, ukuran huruf. Ada dua kelompok satuan.

### 4.a Satuan Absolut

`px` (piksel) adalah satuan tetap.

```css
.kotak {
  width: 300px;
  border: 2px solid black;
}
```

Ukuran `px` tidak menyesuaikan pengaturan pengguna maupun lebar layar.

### 4.b Satuan Relatif

Satuan relatif menyesuaikan diri dengan sesuatu yang lain.

| Satuan | Relatif terhadap | Contoh |
|---|---|---|
| `%` | Ukuran elemen induk | `width: 50%` berarti setengah lebar induk |
| `em` | Ukuran huruf elemen itu sendiri (atau induknya) | `padding: 1em` |
| `rem` | Ukuran huruf elemen akar (`html`) | `font-size: 1.5rem` |
| `vw` | 1% lebar jendela browser | `width: 50vw` |
| `vh` | 1% tinggi jendela browser | `height: 100vh` |

Ukuran huruf bawaan browser adalah 16px, sehingga `1rem` sama dengan 16px, `1.5rem` sama dengan 24px, dan seterusnya.

```css
html {
  font-size: 100%;
  /* mengikuti ukuran huruf bawaan browser pengguna */
}
h1 {
  font-size: 2rem;
  /* 2 kali ukuran dasar, sekitar 32px */
}
.banner {
  height: 100vh;
  /* tinggi tepat sepanjang tinggi jendela */
}
.kolom {
  width: 50%;
  /* setengah lebar induk */
}
```

### 4.c Memilih Satuan

| Kebutuhan | Satuan yang cocok |
|---|---|
| Ukuran huruf | `rem` |
| Garis tepi, bayangan | `px` |
| Lebar dan tinggi yang fleksibel | `%`, `vw`, `vh` |
| Jarak (padding, margin) | `rem` atau `px` |

`rem` untuk ukuran huruf dipilih karena menghormati pengaturan ukuran huruf di browser pengguna. Pengguna yang membesarkan huruf bawaan akan ikut terbantu, sedangkan `px` mengabaikannya.

### 4.d calc()

Fungsi `calc()` menghitung nilai dari campuran satuan.

```css
.konten {
  width: calc(100% - 200px);
  /* selebar induk dikurangi 200 piksel, misalnya untuk menyisakan ruang sidebar */
}
```

Ada spasi di kedua sisi tanda `+` dan `-` di dalam `calc()`.

> **Ringkasan:** `px` tetap, sedangkan `%`, `em`, `rem`, `vw`, dan `vh` relatif. Pakai `rem` untuk huruf, `px` untuk garis tepi, dan `%` atau `vw/vh` untuk ukuran fleksibel.

---

## 5. Latihan Singkat

1. Tulis satu warna biru dalam empat format (nama, hex, rgb, hsl), lalu pasang di empat kotak berbeda.
2. Buat kotak berlatar hitam transparan 50% dengan teks putih di atas gambar.
3. Cari dua pasang warna: satu dengan kontras bagus dan satu buruk. Cek rasionya di DevTools.
4. Buat `h1` berukuran `2rem`, lalu ubah ukuran huruf bawaan browser untuk melihat pengaruhnya.
5. Buat bagian halaman yang tingginya sepenuh jendela dengan `100vh`.

---

## Rangkuman

- Warna ditulis dengan nama, hex, `rgb()`, atau `hsl()`. Alpha membuat warna transparan.
- `opacity` mempengaruhi seluruh elemen, sedangkan alpha pada warna hanya mempengaruhi warna itu.
- Pastikan kontras teks dan latar cukup (minimal sekitar 4,5 berbanding 1).
- `px` adalah satuan tetap. `%`, `em`, `rem`, `vw`, dan `vh` adalah satuan relatif.
- Pakai `rem` untuk ukuran huruf dan `calc()` untuk menghitung campuran satuan.
