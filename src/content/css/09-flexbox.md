---
jenis: murid
bab: css
urutan: 9
judul: "Flexbox"
deskripsi: "Menyusun elemen dalam satu dimensi dengan flexbox: arah, perataan, jarak, pembungkusan, dan ukuran fleksibel, lengkap dengan pola yang sering dipakai."
---

# Flexbox

Pada materi ini kamu akan mempelajari: konsep flexbox, sumbu utama dan sumbu silang, properti pada container (`flex-direction`, `justify-content`, `align-items`, `flex-wrap`, `gap`), properti pada item (`flex`, `align-self`, `order`), serta pola tata letak yang sering dipakai.

Sebelum mulai, pastikan kamu sudah memahami: box model serta `display` dan `position` dari materi sebelumnya.

---

## 1. Apa itu Flexbox

**Flexbox** adalah cara menyusun elemen dalam **satu arah** (baris atau kolom) dengan mudah: mengatur jarak, perataan, dan pembagian ruang. Sebelum flexbox, hal sederhana seperti memusatkan sebuah elemen secara vertikal sangat merepotkan.

Flexbox bekerja dengan dua peran:

| Peran | Penjelasan |
|---|---|
| **Flex container** | Elemen induk yang diberi `display: flex` |
| **Flex item** | Elemen anak langsung dari container |

#### Cara menulis

```html
<div class="wadah">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.wadah {
  display: flex;
  /* wadah menjadi flex container, ketiga item otomatis berjajar ke samping */
}
.item {
  padding: 20px;
  background-color: lightblue;
}
```

Hanya **anak langsung** dari container yang menjadi flex item. Cucunya tidak ikut diatur.

> **Ringkasan:** `display: flex` pada induk membuat anak-anaknya tersusun dalam satu arah dan bisa diatur dengan properti flexbox.

---

## 2. Sumbu Utama dan Sumbu Silang

Flexbox punya dua sumbu yang saling tegak lurus.

```text
flex-direction: row (bawaan)

 ──────── sumbu utama (main axis) ────────►
 ┌──────┐ ┌──────┐ ┌──────┐
 │  1   │ │  2   │ │  3   │      │ sumbu silang
 └──────┘ └──────┘ └──────┘      ▼ (cross axis)
```

- **Sumbu utama** (*main axis*) adalah arah susunan item.
- **Sumbu silang** (*cross axis*) tegak lurus dengannya.

Ini penting karena properti perataan bergantung pada sumbu: `justify-content` bekerja di sumbu utama, dan `align-items` bekerja di sumbu silang. Ketika arah berubah dari baris ke kolom, kedua sumbu ikut bertukar.

---

## 3. Properti pada Container

### 3.a flex-direction

Mengatur arah sumbu utama.

```css
.wadah {
  display: flex;
  flex-direction: column;
  /* item tersusun ke bawah */
}
```

| Nilai | Arah |
|---|---|
| `row` (bawaan) | Kiri ke kanan |
| `row-reverse` | Kanan ke kiri |
| `column` | Atas ke bawah |
| `column-reverse` | Bawah ke atas |

### 3.b justify-content

Meratakan item di **sumbu utama**.

```css
.wadah {
  display: flex;
  justify-content: space-between;
  /* item tersebar, item pertama di tepi kiri dan terakhir di tepi kanan */
}
```

| Nilai | Efek |
|---|---|
| `flex-start` (bawaan) | Rapat di awal |
| `center` | Di tengah |
| `flex-end` | Rapat di akhir |
| `space-between` | Tersebar, tanpa ruang di tepi |
| `space-around` | Tersebar, ruang di tepi setengah dari ruang antar item |
| `space-evenly` | Tersebar, semua jarak sama besar |

### 3.c align-items

Meratakan item di **sumbu silang**.

```css
.wadah {
  display: flex;
  align-items: center;
  /* item sejajar di tengah secara vertikal (untuk flex-direction row) */
  height: 200px;
}
```

| Nilai | Efek |
|---|---|
| `stretch` (bawaan) | Item memanjang memenuhi tinggi container |
| `flex-start` | Rapat di awal sumbu silang |
| `center` | Di tengah |
| `flex-end` | Rapat di akhir |

### 3.d gap

Jarak antar item. Lebih mudah daripada memberi margin pada tiap item.

```css
.wadah {
  display: flex;
  gap: 16px;
  /* jarak 16px antar item, tidak ada jarak di tepi luar */
}
```

### 3.e flex-wrap

Secara bawaan semua item dipaksa muat dalam satu baris. Dengan `flex-wrap: wrap`, item yang tidak muat turun ke baris berikutnya.

```css
.wadah {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.item {
  width: 200px;
  /* banyak item berukuran tetap akan membungkus ke baris baru bila layar sempit */
}
```

> **Ringkasan:** `flex-direction` mengatur arah, `justify-content` meratakan di sumbu utama, `align-items` di sumbu silang, `gap` memberi jarak, dan `flex-wrap` membungkus item ke baris baru.

---

## 4. Properti pada Item

### 4.a flex

Mengatur bagaimana item berbagi ruang. Yang paling sering dipakai adalah `flex: 1`.

```css
.wadah {
  display: flex;
  gap: 16px;
}
.sidebar {
  width: 200px;
  /* lebar tetap */
}
.konten {
  flex: 1;
  /* mengisi seluruh sisa ruang */
}
```

Jika beberapa item punya `flex` angka berbeda, ruang dibagi sesuai perbandingannya.

```css
.a { flex: 1; }
.b { flex: 2; }
/* b mendapat dua kali lebih banyak ruang daripada a */
```

Secara teknis `flex` adalah singkatan dari tiga properti: `flex-grow` (boleh melebar), `flex-shrink` (boleh menyusut), dan `flex-basis` (ukuran awal). Untuk pemula, mengingat `flex: 1` sudah cukup.

### 4.b align-self

Mengatur perataan satu item saja di sumbu silang, menimpa `align-items`.

```css
.item-khusus {
  align-self: flex-end;
}
```

### 4.c order

Mengubah urutan tampil item tanpa mengubah HTML.

```css
.item-pertama {
  order: -1;
  /* tampil paling awal walaupun ditulis belakangan di HTML */
}
```

> **Catatan:** Pembaca layar dan pengguna papan ketik mengikuti urutan di HTML, bukan hasil `order`. Gunakan `order` dengan hemat.

> **Ringkasan:** `flex: 1` membuat item mengisi sisa ruang, `align-self` mengatur satu item, dan `order` mengubah urutan tampil.

---

## 5. Pola yang Sering Dipakai

### 5.a Memusatkan Elemen di Tengah

```css
.tengah {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* isi berada tepat di tengah layar, horizontal dan vertikal */
}
```

### 5.b Navigasi Horizontal

```html
<nav>
  <ul>
    <li><a href="#">Beranda</a></li>
    <li><a href="#">Tentang</a></li>
    <li><a href="#">Kontak</a></li>
  </ul>
</nav>
```

```css
nav ul {
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
  /* daftar menjadi menu horizontal tanpa bullet */
}
```

### 5.c Logo di Kiri, Menu di Kanan

```css
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* dua anak header terdorong ke tepi kiri dan kanan, sejajar vertikal */
```

### 5.d Footer yang Menempel di Bawah

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
  /* main memanjang mengisi sisa tinggi, footer terdorong ke dasar layar */
}
```

### 5.e Deretan Kartu

```css
.daftar-kartu {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.kartu {
  flex: 1 1 250px;
  /* tumbuh, menyusut, ukuran awal 250px: kartu membesar mengisi ruang dan turun baris bila sempit */
}
```

> **Ringkasan:** Flexbox cocok untuk menu, memusatkan elemen, header, footer, dan deretan kartu.

---

## 6. Flexbox untuk Satu Dimensi

Flexbox menyusun dalam **satu dimensi** (baris atau kolom). Untuk tata letak dua dimensi sekaligus (baris dan kolom), seperti galeri atau tata letak halaman utuh, gunakan CSS Grid yang dibahas di materi berikutnya.

---

## 7. Latihan Singkat

1. Buat menu navigasi horizontal dari daftar `ul`.
2. Pusatkan satu kotak tepat di tengah layar.
3. Buat header berisi judul di kiri dan menu di kanan.
4. Buat tiga kolom dengan `flex: 1`, lalu ubah angkanya menjadi 1, 2, 1.
5. Buat deretan kartu yang turun baris saat layar menyempit.

---

## Rangkuman

- `display: flex` pada induk membuat anak langsungnya menjadi flex item yang tersusun dalam satu arah.
- Ada sumbu utama (arah susunan) dan sumbu silang (tegak lurus), dan `justify-content` serta `align-items` bekerja di sumbu masing-masing.
- Properti container: `flex-direction`, `justify-content`, `align-items`, `gap`, dan `flex-wrap`.
- Properti item: `flex` (terutama `flex: 1`), `align-self`, dan `order`.
- Pola umum: memusatkan elemen, menu horizontal, header dua sisi, footer di dasar layar, dan deretan kartu.
