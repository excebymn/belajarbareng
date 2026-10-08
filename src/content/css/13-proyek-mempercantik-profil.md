---
jenis: murid
bab: css
urutan: 13
judul: "Proyek: Mempercantik Halaman Profil"
deskripsi: "Memberi tampilan pada situs profil dari bab HTML dengan variabel, flexbox, grid, kartu, tabel, formulir, responsive, animasi, dan mode gelap."
---

# Proyek: Mempercantik Halaman Profil

Pada materi ini kamu akan memakai semua yang sudah dipelajari di bab CSS untuk mempercantik situs profil dua halaman yang kamu buat di akhir bab HTML (Proyek: Halaman Profil).

Sebelum mulai, pastikan kamu sudah memahami: seluruh materi di bab CSS, dan sudah memiliki folder `profil-saya` dengan `index.html`, `kontak.html`, dan folder `img` dari proyek sebelumnya.

---

## 1. Gambaran Proyek

Target tampilan akhir:

| Bagian | Teknik yang dipakai |
|---|---|
| Warna dan jarak konsisten | Variabel CSS |
| Header menempel di atas, menu horizontal | `position: sticky` dan Flexbox |
| Isi berbentuk kartu | Box model, `border-radius`, `box-shadow` |
| Tata letak dua kolom di layar lebar | CSS Grid |
| Foto profil bulat, galeri rapi | `object-fit`, Grid `auto-fit` |
| Tabel jadwal bergaris selang-seling | `:nth-child`, `:hover` |
| Formulir yang rapi | Selector atribut, `:focus` |
| Nyaman di ponsel | Media query, mobile-first |
| Efek halus dan mode gelap | `transition`, `@keyframes`, `prefers-color-scheme` |

Semua gaya ditulis dalam **satu file** `style.css`, dikerjakan bertahap. Setelah tiap langkah, simpan lalu lihat hasilnya di browser.

---

## 2. Persiapan HTML

Ada empat perubahan kecil di HTML agar CSS punya "pegangan".

### 2.a Hubungkan CSS

Buat file `style.css` di folder `profil-saya`, lalu tambahkan baris ini di bagian `head` **kedua halaman**.

```html
<link rel="stylesheet" href="style.css">
```

### 2.b Hapus border="1"

Atribut `border="1"` pada `table` di `index.html` hanya untuk latihan di bab HTML. Hapus atribut itu, karena garis tabel akan diatur oleh CSS.

### 2.c Bungkus Bagian-bagian Isi

Di `index.html`, bungkus semua `section` di dalam `main` dengan satu `div` ber-class `konten`. Elemen `aside` dibiarkan di luar pembungkus.

```html
<main>
  <div class="konten">
    <section>...Tentang Saya...</section>
    <section>...Hobi...</section>
    <section>...Jadwal Belajar...</section>
    <section>...Kegiatan...</section>
  </div>
  <aside>...</aside>
</main>
```

### 2.d Bungkus Galeri

Di bagian Kegiatan, bungkus kedua gambar dengan `div` ber-class `galeri`.

```html
<section>
  <h2>Kegiatan</h2>
  <div class="galeri">
    <img src="img/kegiatan-1.jpg" alt="Kegiatan belajar bersama" loading="lazy">
    <img src="img/kegiatan-2.jpg" alt="Kegiatan olahraga pagi" loading="lazy">
  </div>
</section>
```

> **Ringkasan:** Hubungkan `style.css`, hapus `border="1"`, tambahkan `div.konten` dan `div.galeri` sebagai pegangan untuk CSS.

---

## 3. Menulis style.css

Tulis potongan-potongan berikut berurutan dalam satu file.

### 3.a Variabel dan Reset

```css
:root {
  --warna-utama: #3366ff;
  --warna-utama-gelap: #2447c7;
  --warna-teks: #222222;
  --warna-latar: #f5f7fb;
  --warna-kartu: #ffffff;
  --warna-garis: #dde3ee;
  --warna-samar: #667085;
  --radius: 12px;
  --bayangan: 0 2px 8px rgba(0, 0, 0, 0.08);
}
/* semua warna dan ukuran yang dipakai berulang disimpan di sini */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
/* reset: semua ukuran sudah termasuk padding dan border, dan margin bawaan browser dihapus */
```

### 3.b Pengaturan Dasar

```css
body {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
  color: var(--warna-teks);
  background-color: var(--warna-latar);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* kolom penuh setinggi layar, supaya footer bisa menempel di dasar */
}

h1, h2 {
  line-height: 1.2;
}
h2 {
  margin-bottom: 0.75rem;
}
p {
  margin-bottom: 0.75rem;
}
a {
  color: var(--warna-utama);
}
a:hover {
  color: var(--warna-utama-gelap);
}
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

### 3.c Header dan Menu

```css
header {
  background-color: var(--warna-utama);
  color: white;
  padding: 1rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* ponsel: judul di atas, menu di bawahnya */
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}
nav a {
  color: white;
  text-decoration: none;
  padding: 0.25rem 0;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;
}
nav a:hover {
  color: white;
  border-bottom-color: white;
}

@media (min-width: 768px) {
  header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* layar lebar: judul di kiri, menu di kanan */
  }
}
```

### 3.d Tata Letak Utama

```css
main {
  flex: 1;
  width: 100%;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  /* ponsel: satu kolom, flex: 1 mendorong footer ke dasar layar */
}

.konten {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  main {
    grid-template-columns: 2fr 1fr;
    align-items: start;
    /* layar lebar: konten di kolom lebar, aside di kolom sempit */
  }
}
```

### 3.e Kartu

```css
section, aside {
  background-color: var(--warna-kartu);
  padding: 1.25rem;
  border-radius: var(--radius);
  box-shadow: var(--bayangan);
  overflow-x: auto;
  /* tabel yang terlalu lebar bisa digeser, bukan melebihi kartu */
}

main ul {
  padding-left: 1.25rem;
}
```

### 3.f Foto Profil dan Galeri

```css
figure {
  margin-bottom: 1rem;
}
figure img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  /* foto persegi menjadi lingkaran tanpa gepeng */
}
figcaption {
  font-size: 0.875rem;
  color: var(--warna-samar);
  margin-top: 0.5rem;
}

.galeri {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  /* jumlah kolom menyesuaikan lebar kartu secara otomatis */
}
.galeri img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.2s ease;
}
.galeri img:hover {
  transform: scale(1.03);
}
```

### 3.g Tabel

```css
table {
  width: 100%;
  border-collapse: collapse;
}
caption {
  text-align: left;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
th, td {
  padding: 0.6rem 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--warna-garis);
}
thead th {
  background-color: var(--warna-utama);
  color: white;
}
tbody tr:nth-child(even) {
  background-color: var(--warna-latar);
  /* baris genap diberi warna selang-seling */
}
tbody tr:hover {
  background-color: #e8eefc;
}
```

### 3.h Formulir

```css
fieldset {
  border: 1px solid var(--warna-garis);
  border-radius: 8px;
  padding: 1rem;
}
legend {
  padding: 0 0.5rem;
  font-weight: 700;
}
label {
  font-weight: 600;
}

input,
select,
textarea {
  width: 100%;
  padding: 0.6rem 0.75rem;
  margin-top: 0.25rem;
  border: 1px solid var(--warna-garis);
  border-radius: 8px;
  font: inherit;
  /* isian memakai font yang sama dengan halaman */
}
input:focus,
select:focus,
textarea:focus {
  outline: 2px solid var(--warna-utama);
  border-color: var(--warna-utama);
  /* penanda jelas untuk isian yang sedang aktif */
}

button {
  font: inherit;
  padding: 0.6rem 1.25rem;
  border: none;
  border-radius: 8px;
  background-color: var(--warna-utama);
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}
button:hover {
  background-color: var(--warna-utama-gelap);
}
button:active {
  transform: scale(0.97);
}
button[type="reset"] {
  background-color: #8a94a6;
}
button[type="reset"]:hover {
  background-color: #6f7a8d;
}
```

### 3.i Footer

```css
footer {
  text-align: center;
  padding: 1.5rem;
  color: var(--warna-samar);
}
```

### 3.j Animasi

```css
@keyframes muncul {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

section, aside {
  animation: muncul 0.5s ease both;
  /* kartu muncul perlahan dari bawah saat halaman dibuka */
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

### 3.k Mode Gelap

```css
@media (prefers-color-scheme: dark) {
  :root {
    --warna-teks: #e8eaf0;
    --warna-latar: #12141a;
    --warna-kartu: #1c2029;
    --warna-garis: #2e3442;
    --warna-samar: #9aa3b5;
    --bayangan: 0 2px 8px rgba(0, 0, 0, 0.4);
  }
  tbody tr:nth-child(even) {
    background-color: #20242e;
  }
  tbody tr:hover {
    background-color: #283046;
  }
}
/* di perangkat bermode gelap, hanya nilai variabel yang diganti */
```

> **Catatan:** Jika kamu menulis potongan-potongan ini ke satu file, urutannya penting. Aturan yang ditulis belakangan menimpa aturan yang lebih awal bila specificity-nya sama.

---

## 4. Pemeriksaan Akhir

| Pemeriksaan | Sudah? |
|---|---|
| Kedua halaman tertaut ke `style.css` dan tampilannya konsisten | |
| Header menempel di atas saat halaman digulir | |
| Di layar lebar: isi dua kolom. Di ponsel: satu kolom | |
| Foto profil bulat dan tidak gepeng | |
| Galeri menyesuaikan jumlah kolom saat jendela diperkecil | |
| Tabel bergaris selang-seling dan berubah saat disentuh kursor | |
| Isian formulir punya penanda jelas saat aktif | |
| Footer berada di dasar layar walau isi sedikit | |
| Tampilan nyaman di mode perangkat DevTools (`Ctrl+Shift+M`) | |
| Mode gelap berfungsi jika sistem diatur ke mode gelap | |

Jika ada yang tidak berjalan sesuai harapan:

1. Buka DevTools, pilih elemen, lalu lihat panel **Styles**. Aturan yang kalah akan tercoret.
2. Pastikan nama class di HTML dan CSS persis sama.
3. Periksa tanda kurung kurawal dan titik koma, karena satu kesalahan bisa membuat aturan sesudahnya tidak terbaca.

---

## 5. Tantangan Tambahan

1. Ganti `--warna-utama` dengan warna favoritmu dan lihat seluruh situs ikut berubah.
2. Buat tombol "kembali ke atas" yang tetap di pojok kanan bawah dengan `position: fixed`.
3. Beri lencana "Baru" di salah satu kartu dengan pola `relative` dan `absolute`.
4. Ganti font dengan salah satu font dari Google Fonts.
5. Tambahkan breakpoint ketiga untuk layar lebar di atas 1200px.

---

## Rangkuman

- Variabel CSS menyimpan warna dan ukuran di satu tempat, sehingga mengganti tema cukup dengan mengganti nilai variabel.
- Flexbox dipakai untuk header dan menu, sedangkan Grid dipakai untuk kerangka halaman dan galeri.
- Kartu dibuat dari padding, `border-radius`, dan `box-shadow`, dan foto bulat dari `object-fit` dengan `border-radius: 50%`.
- Pendekatan mobile-first menulis CSS ponsel lebih dulu, lalu menambah media query `min-width`.
- `transition`, `@keyframes`, dan `prefers-color-scheme` menambah kehalusan dan kenyamanan, dengan tetap menghormati `prefers-reduced-motion`.
- Bab CSS selesai. Situs yang sama akan dihidupkan dengan JavaScript di bab JS.
