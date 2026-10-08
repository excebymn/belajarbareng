---
jenis: murid
bab: css
urutan: 10
judul: "CSS Grid"
deskripsi: "Menyusun tata letak dua dimensi dengan CSS Grid: kolom, baris, satuan fr, gap, menempatkan item, grid-template-areas, dan pola galeri responsif."
---

# CSS Grid

Pada materi ini kamu akan mempelajari: konsep CSS Grid, cara membuat kolom dan baris dengan `grid-template-columns` dan `grid-template-rows`, satuan `fr`, `gap`, menempatkan item di area tertentu, `grid-template-areas`, serta pola galeri responsif dengan `auto-fit` dan `minmax`.

Sebelum mulai, pastikan kamu sudah memahami: Flexbox dari materi sebelumnya.

---

## 1. Apa itu CSS Grid

**CSS Grid** adalah cara menyusun elemen dalam **dua dimensi sekaligus**, yaitu baris dan kolom, seperti kisi-kisi.

| | Flexbox | Grid |
|---|---|---|
| Dimensi | Satu (baris atau kolom) | Dua (baris dan kolom sekaligus) |
| Dasar pengaturan | Mengikuti isi item | Mengikuti kisi yang kamu tentukan |
| Cocok untuk | Menu, deretan kecil, perataan | Tata letak halaman, galeri, dashboard |

Keduanya tidak saling menggantikan. Tata letak sering memakai Grid untuk kerangka besar dan Flexbox untuk bagian dalamnya.

Seperti flexbox, grid punya dua peran:

| Peran | Penjelasan |
|---|---|
| **Grid container** | Elemen induk yang diberi `display: grid` |
| **Grid item** | Anak langsung dari container |

> **Ringkasan:** Grid menyusun elemen dalam baris dan kolom sekaligus, cocok untuk tata letak dua dimensi.

---

## 2. Membuat Kolom dan Baris

### 2.a grid-template-columns

```html
<div class="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  /* tiga kolom, masing-masing lebar 200px. Item mengisi kolom satu per satu, lalu turun ke baris baru */
}
```

Dengan enam item dan tiga kolom, grid otomatis membuat dua baris.

### 2.b Satuan fr

`fr` (*fraction*) adalah satuan khusus grid yang membagi **sisa ruang** sesuai perbandingan.

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* tiga kolom sama lebar */
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 2fr;
  /* kolom kedua dua kali lebih lebar dari kolom pertama */
}
.grid3 {
  display: grid;
  grid-template-columns: 250px 1fr;
  /* kolom pertama tetap 250px, kolom kedua mengisi sisanya (pola sidebar dan konten) */
}
```

### 2.c repeat()

Untuk kolom yang banyak dan sama, pakai `repeat(jumlah, ukuran)`.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* sama dengan 1fr 1fr 1fr */
}
```

### 2.d grid-template-rows

Mengatur tinggi baris. Jika tidak ditulis, tinggi baris mengikuti isinya.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px;
  /* baris pertama 100px, baris kedua 200px */
}
```

Untuk baris tambahan yang dibuat otomatis, atur tingginya dengan `grid-auto-rows`.

```css
.grid {
  grid-auto-rows: minmax(100px, auto);
  /* baris minimal 100px, tetapi bertambah jika isinya banyak */
}
```

> **Ringkasan:** `grid-template-columns` menentukan kolom, `fr` membagi sisa ruang, dan `repeat()` menyingkat penulisan kolom yang sama.

---

## 3. Gap

`gap` memberi jarak antar baris dan kolom.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  /* jarak 16px antar baris dan antar kolom */
}
```

Bisa juga dipisah: `row-gap` untuk jarak antar baris dan `column-gap` untuk jarak antar kolom.

---

## 4. Menempatkan Item

Secara bawaan item mengisi sel satu per satu. Kamu bisa mengatur satu item agar melebar ke beberapa kolom atau baris.

### 4.a Melebar dengan span

```css
.lebar {
  grid-column: span 2;
  /* item ini memakai dua kolom */
}
.tinggi {
  grid-row: span 2;
  /* item ini memakai dua baris */
}
```

### 4.b Menentukan Posisi

Grid punya **garis** yang diberi nomor mulai dari 1. Tiga kolom punya empat garis vertikal.

```text
 garis: 1     2     3     4
        │ kol1 │ kol2 │ kol3 │
```

```css
.spesial {
  grid-column: 1 / 3;
  /* mulai dari garis 1, berhenti di garis 3: memakai kolom 1 dan 2 */
}
.header {
  grid-column: 1 / -1;
  /* -1 berarti garis terakhir: melebar dari awal sampai akhir seluruh kolom */
}
```

> **Ringkasan:** `grid-column: span 2` membuat item melebar dua kolom, dan `grid-column: 1 / -1` membuatnya memenuhi seluruh lebar.

---

## 5. grid-template-areas

Cara paling mudah dibaca untuk menyusun tata letak halaman: beri nama area, lalu gambar tata letaknya dalam teks.

```html
<div class="halaman">
  <header>Header</header>
  <nav>Menu</nav>
  <main>Konten</main>
  <footer>Footer</footer>
</div>
```

```css
.halaman {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "atas atas"
    "menu isi"
    "bawah bawah";
  min-height: 100vh;
  gap: 8px;
}
header { grid-area: atas; }
nav    { grid-area: menu; }
main   { grid-area: isi; }
footer { grid-area: bawah; }
/* tiap elemen ditempatkan ke area yang bernama sama */
```

Tata letak yang dihasilkan:

```text
┌──────────────────────┐
│        header        │
├────────┬─────────────┤
│  menu  │    konten   │
├────────┴─────────────┤
│        footer        │
└──────────────────────┘
```

Untuk mengubah tata letak (misalnya pada layar kecil), cukup menulis ulang teks areanya. Hal ini dimanfaatkan di materi Responsive Design.

> **Ringkasan:** `grid-template-areas` menggambar tata letak dengan nama area, dan `grid-area` menempatkan elemen ke area tersebut.

---

## 6. Perataan di dalam Grid

Perataan di grid mirip dengan flexbox.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  /* meratakan isi tiap sel secara horizontal */
  align-items: center;
  /* meratakan isi tiap sel secara vertikal */
}
.pusat {
  display: grid;
  place-items: center;
  min-height: 100vh;
  /* cara singkat memusatkan satu elemen tepat di tengah (place-items = align-items + justify-items) */
}
```

---

## 7. Galeri Responsif dengan auto-fit dan minmax

Pola paling berguna di Grid: jumlah kolom menyesuaikan lebar layar secara otomatis, **tanpa media query**.

```css
.galeri {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
```

Cara membacanya:

- `minmax(200px, 1fr)`: setiap kolom minimal 200px, dan maksimal berbagi sisa ruang secara merata.
- `repeat(auto-fit, ...)`: buat sebanyak mungkin kolom yang muat.

Hasilnya: di layar lebar tampil banyak kolom, di layar sempit kolom berkurang, dan di ponsel menjadi satu kolom. Semua otomatis.

> **Ringkasan:** `repeat(auto-fit, minmax(200px, 1fr))` membuat jumlah kolom menyesuaikan lebar layar secara otomatis.

---

## 8. Memilih Flexbox atau Grid

| Situasi | Pilihan |
|---|---|
| Menu horizontal, deretan tombol | Flexbox |
| Memusatkan satu elemen | Flexbox atau `place-items: center` di Grid |
| Isi menentukan ukuran, mengalir ke samping | Flexbox |
| Kerangka halaman utuh (header, sidebar, konten, footer) | Grid |
| Galeri atau kumpulan kartu dengan kolom seragam | Grid |
| Butuh kendali baris dan kolom sekaligus | Grid |

---

## 9. Latihan Singkat

1. Buat grid tiga kolom sama lebar berisi enam kotak dengan `gap`.
2. Buat tata letak sidebar 250px dan konten yang mengisi sisanya.
3. Buat satu kotak yang melebar memakai dua kolom.
4. Buat kerangka halaman (header, menu, isi, footer) memakai `grid-template-areas`.
5. Buat galeri foto yang menyesuaikan jumlah kolom secara otomatis, lalu kecilkan jendela browser untuk mengujinya.

---

## Rangkuman

- Grid menyusun elemen dalam dua dimensi (baris dan kolom), dan dipakai dengan `display: grid` pada container.
- `grid-template-columns` menentukan kolom. `fr` membagi sisa ruang, dan `repeat()` menyingkat penulisan.
- `gap` memberi jarak, sedangkan `grid-column: span 2` dan `grid-column: 1 / -1` mengatur item yang melebar.
- `grid-template-areas` dan `grid-area` menyusun tata letak halaman dengan nama area.
- `repeat(auto-fit, minmax(200px, 1fr))` membuat galeri responsif tanpa media query.
- Flexbox untuk satu dimensi, Grid untuk dua dimensi, dan keduanya bisa dipakai bersama.
