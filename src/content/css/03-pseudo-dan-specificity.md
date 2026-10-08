---
jenis: murid
bab: css
urutan: 3
judul: "Pseudo-class, Specificity, dan Cascade"
deskripsi: "Memakai pseudo-class dan pseudo-element, serta memahami aturan specificity, urutan, dan inheritance saat beberapa aturan CSS bertabrakan."
---

# Pseudo-class, Specificity, dan Cascade

Pada materi ini kamu akan mempelajari: pseudo-class seperti `:hover` dan `:nth-child`, pseudo-element seperti `::before`, aturan mana yang menang saat beberapa aturan CSS bertabrakan (specificity dan cascade), serta inheritance.

Sebelum mulai, pastikan kamu sudah memahami: selector tag, class, id, dan kombinator dari materi Selector.

---

## 1. Pseudo-class

**Pseudo-class** memilih elemen berdasarkan **keadaan**-nya, misalnya sedang disorot kursor atau sedang menjadi anak pertama. Ditulis dengan satu titik dua (`:`) setelah selector.

### 1.a Berdasarkan Interaksi

```css
a:hover {
  color: red;
}
/* link berubah merah saat kursor berada di atasnya */
button:active {
  transform: scale(0.95);
}
/* tombol sedikit mengecil saat sedang ditekan */
input:focus {
  border-color: blue;
}
/* isian berubah saat sedang aktif (kursor mengetik di dalamnya) */
```

| Pseudo-class | Aktif saat |
|---|---|
| `:hover` | Kursor berada di atas elemen |
| `:active` | Elemen sedang ditekan |
| `:focus` | Elemen sedang dipilih (misalnya isian yang sedang diketik) |
| `:focus-visible` | Elemen dipilih lewat papan ketik (Tab) |
| `:visited` | Link yang sudah pernah dikunjungi |
| `:checked` | Checkbox atau radio sedang tercentang |
| `:disabled` | Elemen sedang dinonaktifkan |

> **Catatan:** Jangan menghapus tampilan fokus (`outline: none`) tanpa menggantinya dengan penanda lain. Pengguna papan ketik bergantung pada penanda tersebut untuk tahu posisinya.

### 1.b Berdasarkan Posisi

```css
li:first-child {
  font-weight: bold;
}
/* li yang menjadi anak pertama dari induknya */
li:last-child {
  border-bottom: none;
}
/* li yang menjadi anak terakhir */
tr:nth-child(even) {
  background-color: #f2f2f2;
}
/* baris genap diberi latar abu-abu muda, membuat tabel bergaris selang-seling */
li:nth-child(3) {
  color: red;
}
/* hanya elemen ketiga */
```

Nilai di dalam `nth-child()` bisa berupa angka, `even` (genap), `odd` (ganjil), atau rumus seperti `3n` (setiap kelipatan 3).

### 1.c Pengecualian dengan :not

```css
li:not(.selesai) {
  color: black;
}
/* semua li yang tidak punya class selesai */
```

> **Ringkasan:** Pseudo-class memilih berdasarkan keadaan atau posisi, misalnya `:hover`, `:focus`, `:first-child`, dan `:nth-child()`.

---

## 2. Pseudo-element

**Pseudo-element** memilih atau membuat **bagian tertentu** dari sebuah elemen. Ditulis dengan dua titik dua (`::`).

```css
p::first-line {
  font-weight: bold;
}
/* hanya baris pertama paragraf */
p::first-letter {
  font-size: 2em;
}
/* hanya huruf pertama paragraf */
::selection {
  background-color: yellow;
}
/* tampilan teks saat disorot dengan kursor */
input::placeholder {
  color: gray;
}
/* teks petunjuk (placeholder) di dalam isian */
```

### 2.a before dan after

`::before` dan `::after` menyisipkan isi tambahan sebelum dan sesudah isi sebuah elemen, memakai properti `content`.

```css
a[target="_blank"]::after {
  content: " ↗";
}
/* menambahkan tanda panah di akhir link yang membuka tab baru */
h2::before {
  content: "# ";
  color: gray;
}
/* menambahkan tanda # di depan setiap h2 */
```

Properti `content` wajib ada agar pseudo-element tampil. Isi yang disisipkan hanya untuk hiasan, bukan untuk informasi penting, karena tidak ada di HTML.

> **Ringkasan:** Pseudo-element memilih bagian dari elemen. `::before` dan `::after` menyisipkan isi lewat `content`.

---

## 3. Saat Aturan Bertabrakan

Satu elemen bisa terkena beberapa aturan sekaligus, dan aturan-aturan itu bisa bertentangan.

```css
p {
  color: blue;
}
.penting {
  color: red;
}
```

```html
<p class="penting">Teks ini berwarna apa?</p>
```

Jawabannya merah. Browser menentukan pemenangnya lewat tiga hal, diperiksa berurutan: **specificity**, **urutan**, dan **sumber**. Inilah makna kata *cascading* di CSS.

### 3.a Specificity

**Specificity** adalah tingkat kekhususan sebuah selector. Selector yang lebih khusus mengalahkan yang kurang khusus, apa pun urutannya.

Urutan dari yang terkuat:

| Tingkat | Contoh | Bobot |
|---|---|---|
| Inline style | `style="color: red"` | Paling kuat |
| Id | `#kepala` | Kuat |
| Class, atribut, pseudo-class | `.penting`, `[type="text"]`, `:hover` | Sedang |
| Tag dan pseudo-element | `p`, `::before` | Lemah |
| Universal | `*` | Tidak ada |

Cara menghitungnya: tulis tiga angka `(id, class, tag)`.

| Selector | (id, class, tag) |
|---|---|
| `p` | (0, 0, 1) |
| `.penting` | (0, 1, 0) |
| `p.penting` | (0, 1, 1) |
| `nav a:hover` | (0, 1, 2) |
| `#kepala` | (1, 0, 0) |
| `#kepala .menu a` | (1, 1, 1) |

Bandingkan angka dari kiri. Satu id selalu mengalahkan sebanyak apa pun class. Satu class selalu mengalahkan sebanyak apa pun tag.

### 3.b Urutan

Jika specificity sama, **aturan yang ditulis paling akhir menang**.

```css
p {
  color: blue;
}
p {
  color: green;
}
/* hasilnya hijau, karena ditulis belakangan */
```

Urutan ini juga berlaku pada file: CSS dari file yang dihubungkan belakangan menimpa yang dihubungkan lebih dulu.

### 3.c !important

`!important` memaksa sebuah deklarasi menang atas semuanya.

```css
p {
  color: red !important;
}
```

Hindari memakainya. Ia membuat CSS sulit diubah dan mendorong penggunaan `!important` lain untuk menimpanya. Cara yang lebih baik adalah menyusun selector atau urutan dengan benar.

> **Catatan:** DevTools panel Styles menampilkan aturan yang kalah dengan **coretan** pada deklarasinya. Jika gayamu tidak muncul, periksa di sini untuk melihat aturan mana yang menimpa.

> **Ringkasan:** Aturan yang menang ditentukan specificity (inline > id > class > tag), lalu urutan (yang paling akhir menang). Hindari `!important`.

---

## 4. Inheritance

**Inheritance** (pewarisan) berarti sebagian properti diturunkan dari elemen induk ke anak-anaknya.

```css
body {
  color: darkslategray;
  font-family: Arial, sans-serif;
}
/* semua elemen di dalam body ikut berwarna dan berhuruf seperti ini */
```

Tidak semua properti diwariskan.

| Diwariskan | Tidak diwariskan |
|---|---|
| `color` | `margin`, `padding` |
| `font-family`, `font-size` | `border` |
| `line-height`, `text-align` | `background` |

Masuk akal: kalau `border` diwariskan, setiap anak dari sebuah kotak akan ikut berbingkai.

Nilai khusus untuk mengendalikan pewarisan:

```css
a {
  color: inherit;
}
/* link memakai warna yang sama dengan induknya, bukan warna biru bawaan */
.reset {
  margin: initial;
}
/* mengembalikan ke nilai awal bawaan CSS */
```

Memanfaatkan pewarisan membuat CSS singkat. Atur gaya umum seperti font dan warna teks pada `body`, lalu cukup ubah bagian yang berbeda.

> **Ringkasan:** Properti teks seperti `color` dan `font-family` diwariskan ke anak, sedangkan properti kotak seperti `margin` dan `border` tidak.

---

## 5. Latihan Singkat

1. Buat tabel dengan baris selang-seling memakai `:nth-child(even)`.
2. Buat link yang berubah warna saat `:hover` dan punya penanda saat `:focus-visible`.
3. Tambahkan ikon kecil lewat `::after` pada link yang membuka tab baru.
4. Buat tiga aturan yang saling bertabrakan untuk satu paragraf, tebak warna hasilnya, lalu cek di DevTools.
5. Atur font dan warna teks hanya di `body`, lalu amati pewarisannya di elemen lain.

---

## Rangkuman

- Pseudo-class (`:`) memilih berdasarkan keadaan atau posisi, seperti `:hover`, `:focus`, `:first-child`, `:nth-child()`, dan `:not()`.
- Pseudo-element (`::`) memilih atau membuat bagian elemen, seperti `::before`, `::after`, dan `::first-line`.
- Saat aturan bertabrakan, specificity menentukan pemenang (inline > id > class > tag), lalu aturan yang paling akhir menang.
- Hindari `!important`, dan periksa aturan yang menimpa lewat coretan di panel Styles DevTools.
- Properti seperti `color` dan `font-family` diwariskan ke anak, sedangkan `margin`, `border`, dan `background` tidak.
