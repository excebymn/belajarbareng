---
jenis: murid
bab: css
urutan: 2
judul: "Selector"
deskripsi: "Memilih elemen dengan selector tag, class, id, universal, grup, kombinator keturunan dan anak, serta selector atribut."
---

# Selector

Pada materi ini kamu akan mempelajari: cara memilih elemen dengan selector tag, class, dan id, menggabungkan selector, memilih berdasarkan hubungan antar elemen (kombinator), serta memilih berdasarkan atribut.

Sebelum mulai, pastikan kamu sudah memahami: aturan CSS dari materi Pengenalan CSS, serta atribut `class` dan `id` dari bab HTML.

---

## 1. Selector Dasar

Selector menentukan **elemen mana** yang diberi gaya. Tiga selector yang paling sering dipakai adalah tag, class, dan id.

### 1.a Selector Tag

Memilih semua elemen dengan nama tag tertentu.

```css
p {
  color: gray;
}
/* semua elemen p di halaman menjadi berwarna abu-abu */
```

### 1.b Selector Class

Memilih elemen yang punya atribut `class` tertentu. Ditulis dengan titik (`.`) di depan nama class.

```html
<p class="penting">Teks penting</p>
<p>Teks biasa</p>
<p class="penting besar">Teks penting dan besar</p>
<!-- satu elemen boleh punya lebih dari satu class, dipisah spasi -->
```

```css
.penting {
  color: red;
}
/* semua elemen ber-class penting berwarna merah */
.besar {
  font-size: 24px;
}
```

Class boleh dipakai berulang di banyak elemen, dan satu elemen boleh punya banyak class. Itulah sebabnya class menjadi selector utama untuk memberi gaya.

### 1.c Selector Id

Memilih satu elemen dengan atribut `id` tertentu. Ditulis dengan tanda pagar (`#`).

```html
<header id="kepala">...</header>
```

```css
#kepala {
  background-color: navy;
}
/* hanya elemen dengan id kepala yang terpengaruh */
```

`id` harus unik di satu halaman. Untuk memberi gaya, utamakan class. Id lebih cocok untuk tujuan khusus seperti link ke bagian halaman atau pegangan untuk JavaScript.

### 1.d Selector Universal

Tanda bintang (`*`) memilih semua elemen.

```css
* {
  margin: 0;
}
/* menghapus margin bawaan pada semua elemen */
```

| Selector | Penulisan | Memilih |
|---|---|---|
| Tag | `p` | Semua elemen `p` |
| Class | `.penting` | Elemen dengan `class="penting"` |
| Id | `#kepala` | Elemen dengan `id="kepala"` |
| Universal | `*` | Semua elemen |

### 1.e Aturan Penamaan Class

- Huruf kecil, tanpa spasi, pisahkan kata dengan tanda hubung: `kartu-produk`, bukan `KartuProduk` atau `kartu produk`.
- Beri nama berdasarkan **fungsi**, bukan tampilan. `peringatan` lebih baik daripada `merah`, karena warnanya bisa berubah kapan saja.
- Jangan diawali angka.

> **Ringkasan:** Tag memilih semua elemen sejenis, class (`.`) memilih kelompok elemen, id (`#`) memilih satu elemen, dan `*` memilih semuanya.

---

## 2. Menggabungkan Selector

### 2.a Selector Grup

Pisahkan beberapa selector dengan koma untuk memberi gaya yang sama sekaligus.

```css
h1, h2, h3 {
  font-family: Georgia, serif;
}
/* h1, h2, dan h3 sama-sama memakai font Georgia */
```

### 2.b Tag dan Class Digabung

Tulis tanpa spasi untuk memilih elemen yang memenuhi **kedua** syarat.

```css
p.penting {
  color: red;
}
/* hanya elemen p yang punya class penting, bukan elemen lain ber-class penting */
```

### 2.c Beberapa Class Digabung

```css
.kartu.aktif {
  border-color: green;
}
/* hanya elemen yang punya class kartu DAN aktif sekaligus */
```

> **Catatan:** Perhatikan perbedaan spasi. `.kartu.aktif` (tanpa spasi) berarti satu elemen dengan dua class. `.kartu .aktif` (dengan spasi) berarti elemen ber-class `aktif` yang berada **di dalam** elemen ber-class `kartu`. Itu adalah kombinator, yang dibahas di bawah.

> **Ringkasan:** Koma untuk menggabungkan gaya banyak selector, tanpa spasi untuk menggabungkan syarat pada satu elemen.

---

## 3. Kombinator

**Kombinator** memilih elemen berdasarkan hubungannya dengan elemen lain.

### 3.a Keturunan (spasi)

Memilih elemen di **dalam** elemen lain, pada tingkat berapa pun.

```css
nav a {
  color: white;
}
/* semua link a yang berada di dalam nav, termasuk yang bersarang dalam ul dan li */
```

### 3.b Anak Langsung (>)

Memilih elemen yang berada **langsung** di dalam elemen lain (satu tingkat saja).

```css
ul > li {
  list-style: square;
}
/* hanya li yang langsung berada di dalam ul, bukan li dari daftar bersarang di bawahnya */
```

### 3.c Saudara Berikutnya (+)

Memilih elemen yang **tepat setelah** elemen tertentu dan setingkat.

```css
h2 + p {
  font-weight: bold;
}
/* hanya paragraf pertama yang langsung muncul setelah h2 */
```

### 3.d Semua Saudara Berikutnya (~)

```css
h2 ~ p {
  color: gray;
}
/* semua paragraf setingkat yang muncul setelah h2 */
```

| Kombinator | Penulisan | Arti |
|---|---|---|
| Keturunan | `A B` | B di dalam A, tingkat berapa pun |
| Anak langsung | `A > B` | B langsung di dalam A |
| Saudara berikutnya | `A + B` | B tepat setelah A |
| Semua saudara berikutnya | `A ~ B` | Semua B setelah A, setingkat |

> **Catatan:** Jangan membuat rantai selector terlalu panjang seperti `main section article p span`. Selector yang panjang sulit dibaca dan sulit ditimpa. Lebih baik beri class pada elemen yang dituju.

> **Ringkasan:** Spasi untuk keturunan, `>` untuk anak langsung, `+` untuk saudara tepat setelahnya, dan `~` untuk semua saudara setelahnya.

---

## 4. Selector Atribut

Memilih elemen berdasarkan atribut yang dimilikinya, ditulis dengan kurung siku.

```css
a[target="_blank"] {
  color: orange;
}
/* link yang atribut target-nya bernilai _blank */
input[type="text"] {
  border: 1px solid gray;
}
/* hanya input bertipe text */
a[href^="https"] {
  color: green;
}
/* ^= berarti nilai href diawali dengan https */
a[href$=".pdf"] {
  font-weight: bold;
}
/* $= berarti nilai href diakhiri dengan .pdf */
```

| Penulisan | Arti |
|---|---|
| `[atribut]` | Elemen yang punya atribut tersebut |
| `[atribut="nilai"]` | Atribut bernilai persis sama |
| `[atribut^="awal"]` | Nilai diawali teks tertentu |
| `[atribut$="akhir"]` | Nilai diakhiri teks tertentu |
| `[atribut*="isi"]` | Nilai mengandung teks tertentu |

> **Ringkasan:** Kurung siku memilih elemen berdasarkan atribut dan nilainya.

---

## 5. Latihan Singkat

Buat halaman dengan `nav` berisi daftar link, tiga `article` dengan paragraf, serta beberapa elemen ber-class. Lalu:

1. Beri warna berbeda untuk link di dalam `nav`.
2. Beri garis bawah hanya pada paragraf pertama yang tepat setelah `h2` memakai `h2 + p`.
3. Buat class `.penting` dan pakai di dua paragraf.
4. Beri warna khusus untuk semua link yang membuka tab baru memakai selector atribut.

---

## Rangkuman

- Selector tag memilih semua elemen sejenis, class (`.`) memilih kelompok elemen, id (`#`) memilih satu elemen, dan `*` memilih semuanya.
- Koma menggabungkan beberapa selector. Menulis tanpa spasi menggabungkan syarat pada satu elemen.
- Kombinator memilih berdasarkan hubungan: spasi (keturunan), `>` (anak langsung), `+` (saudara berikutnya), `~` (semua saudara berikutnya).
- Selector atribut `[atribut="nilai"]` memilih elemen berdasarkan atributnya.
- Utamakan class untuk memberi gaya, beri nama berdasarkan fungsi, dan hindari selector yang terlalu panjang.
