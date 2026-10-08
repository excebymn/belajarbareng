---
jenis: murid
bab: css
urutan: 8
judul: "Display dan Position"
deskripsi: "Memahami elemen block, inline, dan inline-block, menyembunyikan elemen, serta memposisikan elemen dengan relative, absolute, fixed, sticky, dan z-index."
---

# Display dan Position

Pada materi ini kamu akan mempelajari: perbedaan elemen block, inline, dan inline-block lewat properti `display`, cara menyembunyikan elemen, cara memindahkan elemen dengan `position` (`relative`, `absolute`, `fixed`, `sticky`), serta urutan tumpukan dengan `z-index`.

Sebelum mulai, pastikan kamu sudah memahami: box model dari materi sebelumnya.

---

## 1. Display

Properti `display` menentukan **jenis kotak** sebuah elemen, dan ini mempengaruhi cara elemen itu diatur di halaman.

### 1.a Block dan Inline

| | `block` | `inline` |
|---|---|---|
| Mulai di baris baru | Ya | Tidak, mengalir bersama teks |
| Lebar bawaan | Selebar induknya | Hanya seukuran isinya |
| `width` dan `height` | Berlaku | Diabaikan |
| `margin` dan `padding` vertikal | Berlaku | Tidak mendorong elemen lain secara vertikal |
| Contoh elemen | `div`, `p`, `h1`, `ul`, `section` | `span`, `a`, `strong`, `em`, `img` |

```html
<p>Ini paragraf dengan <span>span</span> dan <a href="#">link</a> di dalamnya.</p>
```

Paragraf (`block`) tampil di barisnya sendiri, sedangkan `span` dan `a` (`inline`) mengalir di dalam teks tanpa memotong baris.

### 1.b Inline-block

`inline-block` adalah gabungan: elemen mengalir seperti teks (tidak memulai baris baru), tetapi boleh diatur `width`, `height`, `margin`, dan `padding` seperti block.

```css
.tombol {
  display: inline-block;
  width: 120px;
  padding: 10px;
  text-align: center;
}
/* beberapa tombol bisa berjajar di satu baris, namun tetap punya ukuran sendiri */
```

### 1.c Mengubah Jenis Display

Kamu bisa mengubah perilaku elemen dengan `display`.

```css
a {
  display: block;
  padding: 12px;
}
/* link kini menjadi kotak penuh yang seluruh areanya bisa diklik */
li {
  display: inline-block;
}
/* item daftar berjajar ke samping */
```

Dua nilai penting lain, `flex` dan `grid`, dibahas di materi Flexbox dan Grid.

> **Ringkasan:** Block memulai baris baru dan punya ukuran penuh, inline mengalir bersama teks, inline-block mengalir namun bisa diatur ukurannya.

---

## 2. Menyembunyikan Elemen

Ada beberapa cara menyembunyikan elemen, dengan efek berbeda.

| Cara | Efek |
|---|---|
| `display: none` | Elemen hilang total dan tidak memakan ruang. Pembaca layar pun tidak membacanya. |
| `visibility: hidden` | Elemen tidak terlihat tetapi **ruangnya tetap ada** |
| `opacity: 0` | Elemen transparan, ruang tetap ada, dan masih bisa diklik |

```css
.sembunyi {
  display: none;
}
/* elemen seolah tidak ada di halaman */
.kosong {
  visibility: hidden;
}
/* elemen tak terlihat, tetapi tempatnya tetap tersisa */
```

`display: none` sangat sering dipakai untuk menu yang muncul dan hilang, karena JavaScript tinggal menambah atau menghapus class yang memuat aturan ini.

> **Ringkasan:** `display: none` menghilangkan elemen beserta ruangnya, sedangkan `visibility: hidden` hanya menyembunyikannya.

---

## 3. Position

Properti `position` mengatur **cara sebuah elemen ditempatkan** di halaman. Properti `top`, `right`, `bottom`, dan `left` menentukan geseran, tetapi baru bekerja jika `position` bukan `static`.

### 3.a static

Nilai bawaan. Elemen berada di posisi normalnya mengikuti alur halaman, dan `top`, `left`, dan sejenisnya tidak berpengaruh.

### 3.b relative

Elemen digeser **dari posisi normalnya**, tetapi ruang aslinya tetap tersisa sehingga elemen lain tidak bergeser.

```css
.geser {
  position: relative;
  top: 10px;
  left: 20px;
  /* elemen tampil 10px lebih ke bawah dan 20px lebih ke kanan dari posisi aslinya */
}
```

`relative` sering dipakai bukan untuk menggeser, melainkan untuk menjadi **acuan** bagi elemen anak yang memakai `absolute`.

### 3.c absolute

Elemen dikeluarkan dari alur halaman (tidak memakan ruang) dan diposisikan relatif terhadap **induk terdekat yang punya `position` selain `static`**. Jika tidak ada, acuannya adalah halaman.

```html
<div class="kartu">
  <span class="label">Baru</span>
  <p>Isi kartu</p>
</div>
```

```css
.kartu {
  position: relative;
  /* menjadi acuan bagi elemen absolute di dalamnya */
}
.label {
  position: absolute;
  top: 8px;
  right: 8px;
  /* label menempel di pojok kanan atas kartu */
}
```

Pola **induk `relative`, anak `absolute`** adalah cara yang paling sering dipakai untuk menempelkan lencana, tombol tutup, atau ikon di pojok sebuah kotak.

### 3.d fixed

Elemen diposisikan relatif terhadap **jendela browser** dan tetap di tempat walaupun halaman digulir.

```css
.tombol-atas {
  position: fixed;
  bottom: 20px;
  right: 20px;
  /* tombol selalu berada di pojok kanan bawah layar */
}
```

Cocok untuk menu navigasi yang selalu terlihat atau tombol kembali ke atas.

### 3.e sticky

Gabungan relative dan fixed: elemen mengikuti alur normal, lalu **menempel** saat halaman digulir sampai batas yang ditentukan.

```css
header {
  position: sticky;
  top: 0;
  /* header ikut bergulir, lalu menempel di tepi atas layar */
}
```

| Nilai | Diposisikan terhadap | Memakan ruang | Ikut bergulir |
|---|---|---|---|
| `static` | Alur normal | Ya | Ya |
| `relative` | Posisi normalnya | Ya | Ya |
| `absolute` | Induk berposisi terdekat | Tidak | Ikut induk |
| `fixed` | Jendela browser | Tidak | Tidak |
| `sticky` | Alur normal, lalu menempel | Ya | Ya, sampai menempel |

> **Catatan:** Jika `absolute` tampil di tempat yang tak terduga, hampir selalu karena induknya lupa diberi `position: relative`.

> **Ringkasan:** `relative` menggeser dari posisi normal, `absolute` menempel pada induk berposisi, `fixed` menempel pada layar, `sticky` menempel setelah digulir.

---

## 4. z-index

Ketika elemen saling menumpuk (misalnya karena `absolute` atau `fixed`), `z-index` menentukan siapa yang berada di atas. Nilai yang lebih besar berada di depan.

```css
.menu {
  position: fixed;
  z-index: 100;
  /* menu berada di atas elemen lain */
}
.latar {
  position: absolute;
  z-index: 1;
}
```

Hal penting:

- `z-index` hanya bekerja pada elemen yang `position`-nya bukan `static` (atau elemen flex dan grid).
- Pakai angka secukupnya, misalnya 1, 10, 100. Hindari angka raksasa seperti 99999.
- Elemen yang berada di dalam sebuah "tumpukan" (stacking context) tidak bisa melewati batas tumpukan induknya, sehingga kadang `z-index` besar pun tetap tertutup.

> **Ringkasan:** `z-index` mengatur urutan tumpukan elemen berposisi. Nilai lebih besar berada di depan.

---

## 5. Latihan Singkat

1. Buat tiga `span` dan tiga `div`, lalu beri warna latar dan amati perbedaan perilaku block dan inline.
2. Ubah `a` di menu menjadi `inline-block` dengan padding sehingga area klik lebih besar.
3. Buat kartu dengan lencana "Baru" di pojok kanan atas memakai `relative` dan `absolute`.
4. Buat header yang menempel di atas layar saat digulir dengan `sticky`.
5. Buat tombol "kembali ke atas" yang tetap di pojok kanan bawah dengan `fixed`.

---

## Rangkuman

- `display` menentukan jenis kotak: `block` memulai baris baru, `inline` mengalir bersama teks, `inline-block` mengalir dan bisa diatur ukurannya.
- `display: none` menghilangkan elemen beserta ruangnya, `visibility: hidden` hanya menyembunyikan.
- `position` menentukan cara penempatan: `relative`, `absolute`, `fixed`, dan `sticky`. `top`, `right`, `bottom`, dan `left` baru bekerja jika `position` bukan `static`.
- Pola induk `relative` dengan anak `absolute` dipakai untuk menempelkan elemen di pojok kotak.
- `z-index` mengatur urutan tumpukan elemen berposisi, dan nilai lebih besar berada di depan.
