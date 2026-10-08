---
jenis: murid
bab: css
urutan: 11
judul: "Responsive Design"
deskripsi: "Membuat halaman nyaman di semua ukuran layar dengan viewport, media query, pendekatan mobile-first, gambar fleksibel, dan pengujian lewat DevTools."
---

# Responsive Design

Pada materi ini kamu akan mempelajari: apa itu desain responsif, peran `meta viewport`, cara memakai media query, pendekatan mobile-first, gambar dan layout yang fleksibel, serta cara menguji tampilan di berbagai ukuran layar lewat DevTools.

Sebelum mulai, pastikan kamu sudah memahami: Flexbox dan Grid dari dua materi sebelumnya.

---

## 1. Apa itu Responsive Design

Halaman web dibuka di banyak perangkat: ponsel, tablet, laptop, dan monitor lebar. **Responsive design** berarti satu halaman yang sama bisa menyesuaikan tampilannya agar nyaman dipakai di semua ukuran layar.

Bagian yang biasanya berubah:

- Jumlah kolom (tiga kolom di layar lebar, satu kolom di ponsel).
- Ukuran huruf dan jarak.
- Bentuk menu (menu horizontal di desktop, menu ringkas di ponsel).
- Ukuran gambar.

Tiga komponen utama desain responsif: **viewport meta**, **layout dan ukuran yang fleksibel**, serta **media query**.

> **Ringkasan:** Responsive design membuat satu halaman menyesuaikan diri dengan ukuran layar apa pun.

---

## 2. Viewport

Tanpa pengaturan khusus, browser di ponsel menampilkan halaman seolah-olah layarnya selebar komputer (sekitar 980px), lalu mengecilkannya agar muat. Hasilnya tampilan kecil dan sulit dibaca.

Tag berikut di bagian `head` memperbaikinya.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- lebar halaman mengikuti lebar layar perangkat sebenarnya -->
```

Tanpa tag ini, CSS responsif tidak akan bekerja sebagaimana mestinya di ponsel. Tag ini sudah ada di kerangka halaman pada bab HTML, dan wajib ada di setiap halaman.

---

## 3. Layout yang Fleksibel

Sebelum memakai media query, banyak masalah bisa diselesaikan dengan ukuran fleksibel.

| Teknik | Contoh |
|---|---|
| Lebar maksimum, bukan lebar tetap | `max-width: 900px` |
| Persen atau `fr`, bukan piksel tetap | `width: 50%`, `1fr` |
| Gambar yang menyesuaikan | `max-width: 100%; height: auto;` |
| Flexbox yang membungkus | `flex-wrap: wrap` |
| Grid otomatis | `repeat(auto-fit, minmax(200px, 1fr))` |

```css
.halaman {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  /* di layar kecil lebarnya 90% layar, di layar besar berhenti di 900px dan berada di tengah */
}
img {
  max-width: 100%;
  height: auto;
  /* gambar tidak pernah lebih lebar dari wadahnya */
}
```

> **Ringkasan:** Pakai `max-width`, persen, `fr`, `flex-wrap`, dan `auto-fit` agar layout menyesuaikan diri secara alami.

---

## 4. Media Query

**Media query** menerapkan aturan CSS **hanya ketika kondisi tertentu terpenuhi**, misalnya lebar layar minimal tertentu.

#### Cara menulis

```css
.menu {
  display: none;
}
/* aturan dasar: menu disembunyikan */

@media (min-width: 768px) {
  .menu {
    display: flex;
  }
}
/* aturan di dalam kurung kurawal hanya berlaku jika lebar layar 768px atau lebih */
```

Cara membacanya: "Jika lebar jendela minimal 768px, terapkan aturan di dalam."

Dua kondisi yang paling sering dipakai:

| Kondisi | Arti |
|---|---|
| `(min-width: 768px)` | Lebar layar **768px atau lebih** |
| `(max-width: 767px)` | Lebar layar **767px atau kurang** |

Kondisi bisa digabung dengan `and`.

```css
@media (min-width: 600px) and (max-width: 1023px) {
  .kartu {
    width: 48%;
  }
}
/* hanya berlaku untuk lebar 600px sampai 1023px, misalnya tablet */
```

### 4.a Breakpoint

**Breakpoint** adalah lebar layar tempat tata letak berubah. Tidak ada angka yang mutlak, tetapi angka berikut umum dipakai sebagai patokan.

| Perangkat | Lebar kira-kira |
|---|---|
| Ponsel | Di bawah 600px |
| Tablet | 600px sampai 1024px |
| Laptop dan desktop | 1024px ke atas |

Cara terbaik menentukan breakpoint adalah memperkecil jendela hingga tampilan mulai rusak, lalu memasang breakpoint di titik itu.

### 4.b Pendekatan Mobile-first

Pendekatan **mobile-first**: tulis CSS dasar untuk layar kecil, lalu tambahkan media query dengan `min-width` untuk layar yang lebih besar.

```css
.kartu-wadah {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  /* dasar untuk ponsel: satu kolom */
}

@media (min-width: 600px) {
  .kartu-wadah {
    grid-template-columns: repeat(2, 1fr);
    /* tablet: dua kolom */
  }
}

@media (min-width: 1024px) {
  .kartu-wadah {
    grid-template-columns: repeat(3, 1fr);
    /* desktop: tiga kolom */
  }
}
```

Keunggulan mobile-first:

- CSS dasar sederhana dan ringan, cocok untuk perangkat yang paling terbatas.
- Perubahan ditambahkan secara berlapis ke layar yang lebih besar, lebih mudah dikelola.
- Pengguna ponsel (jumlahnya besar) mendapat pengalaman terbaik terlebih dulu.

> **Ringkasan:** Media query menerapkan aturan pada kondisi tertentu. Pendekatan mobile-first menulis CSS ponsel lebih dulu, lalu menambah `min-width` untuk layar lebih besar.

---

## 5. Contoh: Menu yang Berubah Bentuk

```html
<header>
  <h1>Belajar Web</h1>
  <nav>
    <ul>
      <li><a href="#">Beranda</a></li>
      <li><a href="#">Tentang</a></li>
      <li><a href="#">Kontak</a></li>
    </ul>
  </nav>
</header>
```

```css
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* ponsel: menu bertumpuk ke bawah */
}

@media (min-width: 768px) {
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav ul {
    flex-direction: row;
    gap: 24px;
    /* layar lebar: judul di kiri, menu horizontal di kanan */
  }
}
```

---

## 6. Ukuran Huruf Fleksibel

Teks juga perlu menyesuaikan. Cara sederhana adalah memakai `rem` dan mengubah ukuran dasar di breakpoint tertentu.

```css
html {
  font-size: 100%;
}
@media (min-width: 1024px) {
  html {
    font-size: 112.5%;
    /* semua ukuran rem ikut membesar sekitar 12 persen */
  }
}
```

Karena semua ukuran huruf memakai `rem`, mengubah satu nilai ini cukup untuk menyesuaikan seluruh halaman.

---

## 7. Menguji Tampilan di DevTools

Browser menyediakan **mode perangkat** untuk meniru ukuran layar ponsel dan tablet.

#### Langkah-langkah

1. Tekan `F12` untuk membuka DevTools.
2. Klik ikon perangkat (ikon ponsel dan tablet) di bagian atas DevTools, atau tekan `Ctrl+Shift+M`.
3. Pilih perangkat dari daftar (misalnya iPhone atau Pixel), atau seret tepi layar untuk mengubah lebarnya secara bebas.
4. Perhatikan titik tempat tampilan mulai tidak nyaman, lalu pasang breakpoint di sana.

Mode ini bagus untuk uji cepat, tetapi tetap sempatkan membuka halamanmu di ponsel sungguhan.

> **Catatan:** Sebuah halaman yang memunculkan batang gulir horizontal di ponsel biasanya punya elemen dengan lebar tetap yang terlalu besar. Cari elemen itu di DevTools, lalu ganti dengan `max-width` atau persen.

---

## 8. Latihan Singkat

1. Pastikan halamanmu punya `meta viewport`, lalu buka di mode perangkat DevTools.
2. Buat container dengan `width: 90%` dan `max-width`, lalu pusatkan.
3. Buat daftar kartu satu kolom di ponsel, dua kolom di tablet, tiga kolom di desktop dengan pendekatan mobile-first.
4. Buat menu yang bertumpuk di ponsel dan horizontal di layar lebar.
5. Pastikan semua gambar tidak melebihi lebar layar.

---

## Rangkuman

- Responsive design membuat satu halaman nyaman di semua ukuran layar.
- `meta viewport` wajib ada agar ponsel menampilkan halaman dengan lebar sebenarnya.
- Layout fleksibel (`max-width`, persen, `fr`, `flex-wrap`, `auto-fit`) menyelesaikan banyak masalah tanpa media query.
- Media query `@media (min-width: ...)` menerapkan aturan hanya saat kondisi terpenuhi.
- Mobile-first menulis CSS ponsel lebih dulu, lalu menambah media query `min-width` untuk layar lebih besar.
- DevTools mode perangkat (`Ctrl+Shift+M`) dipakai untuk menguji tampilan di berbagai ukuran layar.
