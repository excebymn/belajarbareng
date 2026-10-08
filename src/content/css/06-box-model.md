---
jenis: murid
bab: css
urutan: 6
judul: "Box Model"
deskripsi: "Memahami setiap elemen sebagai kotak: content, padding, border, margin, box-sizing, memusatkan kotak, dan menangani isi yang melebihi kotak."
---

# Box Model

Pada materi ini kamu akan mempelajari: konsep box model (setiap elemen adalah sebuah kotak), cara mengatur `width`, `height`, `padding`, `border`, dan `margin`, perbedaan `box-sizing`, cara memusatkan kotak, serta cara menangani isi yang melebihi kotak.

Sebelum mulai, pastikan kamu sudah memahami: satuan ukuran dari materi Warna dan Satuan, serta selector dari materi Selector.

---

## 1. Setiap Elemen Adalah Kotak

Browser memperlakukan **setiap elemen HTML sebagai sebuah kotak**, bahkan elemen teks seperti paragraf. Kotak ini punya empat lapisan, dari dalam ke luar.

```text
┌──────────────── margin ────────────────┐
│  ┌──────────── border ──────────────┐  │
│  │  ┌──────── padding ───────────┐  │  │
│  │  │                            │  │  │
│  │  │          content           │  │  │
│  │  │                            │  │  │
│  │  └────────────────────────────┘  │  │
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘
```

| Lapisan | Fungsi |
|---|---|
| Content | Isi elemen (teks, gambar) |
| Padding | Jarak antara isi dan garis tepi (ruang **di dalam** kotak) |
| Border | Garis tepi kotak |
| Margin | Jarak antara kotak ini dan kotak lain (ruang **di luar** kotak) |

Cara mengingatnya: padding seperti bantalan di dalam kardus, margin seperti jarak antar kardus di rak.

Kamu bisa melihat box model sungguhan di DevTools. Pilih sebuah elemen di tab **Elements**, lalu lihat diagram warna-warni di panel **Computed** atau bagian bawah panel Styles.

> **Ringkasan:** Setiap elemen adalah kotak berlapis: content, padding, border, dan margin.

---

## 2. Ukuran Isi: width dan height

```css
.kotak {
  width: 300px;
  /* lebar area isi */
  height: 150px;
  /* tinggi area isi */
}
```

Dua catatan penting:

- **Elemen block** (seperti `div`, `p`, `h1`) secara bawaan selebar induknya, dan tingginya mengikuti isi. Biasanya cukup mengatur lebar saja.
- **Elemen inline** (seperti `span`, `a`) mengabaikan `width` dan `height`. Pembahasannya ada di materi Display dan Position.

Untuk ukuran yang fleksibel, pakai batas:

| Properti | Fungsi |
|---|---|
| `max-width` | Lebar tidak boleh lebih dari ini |
| `min-width` | Lebar tidak boleh kurang dari ini |
| `min-height` | Tinggi minimum, tetapi boleh bertambah jika isi banyak |

```css
.artikel {
  max-width: 700px;
  /* pada layar kecil mengecil, pada layar lebar berhenti di 700px */
}
```

Hindari mengatur `height` tetap pada kotak berisi teks. Jika isi bertambah, teks akan tumpah keluar kotak. Lebih aman memakai `min-height`.

> **Ringkasan:** `width` dan `height` mengatur ukuran isi. Pakai `max-width` dan `min-height` agar fleksibel.

---

## 3. Padding

Ruang di dalam kotak, antara isi dan garis tepi.

```css
.kartu {
  padding: 20px;
  /* jarak 20px di keempat sisi */
}
```

Padding punya singkatan dengan satu sampai empat nilai.

| Penulisan | Arti |
|---|---|
| `padding: 20px` | Semua sisi 20px |
| `padding: 10px 20px` | Atas dan bawah 10px, kiri dan kanan 20px |
| `padding: 10px 20px 30px` | Atas 10px, kiri dan kanan 20px, bawah 30px |
| `padding: 10px 20px 30px 40px` | Atas, kanan, bawah, kiri (searah jarum jam) |

Untuk satu sisi saja:

```css
.kartu {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}
```

Latar belakang (`background`) ikut mengisi area padding.

---

## 4. Border

Garis tepi kotak, terdiri dari tiga bagian: tebal, gaya, dan warna.

```css
.kartu {
  border: 2px solid #333;
  /* tebal 2px, gaya garis lurus, warna abu-abu tua */
}
```

| Nilai `border-style` | Tampilan |
|---|---|
| `solid` | Garis lurus |
| `dashed` | Garis putus-putus |
| `dotted` | Titik-titik |
| `none` | Tanpa garis |

Satu sisi saja:

```css
.judul {
  border-bottom: 3px solid gold;
  /* hanya garis di bawah */
}
```

Garis tepi menambah ukuran total kotak. Ini dibahas di bagian box-sizing di bawah.

---

## 5. Margin

Ruang di luar kotak, memisahkan kotak ini dari kotak lain. Penulisannya sama persis dengan padding.

```css
.kartu {
  margin: 20px;
  /* jarak 20px di luar keempat sisi */
}
.judul {
  margin-bottom: 8px;
  /* hanya jarak bawah */
}
```

### 5.a Memusatkan Kotak dengan margin auto

Untuk memusatkan kotak secara horizontal, beri lebar dan atur margin kiri dan kanan `auto`.

```css
.halaman {
  width: 600px;
  margin: 0 auto;
  /* margin atas dan bawah 0, kiri dan kanan otomatis sama besar sehingga kotak di tengah */
}
```

Trik ini hanya bekerja pada elemen block yang punya lebar (`width` atau `max-width`).

### 5.b Margin Collapse

Margin vertikal antara dua elemen yang bersebelahan **menyatu**, bukan dijumlahkan. Hasilnya diambil yang terbesar.

```css
.atas {
  margin-bottom: 30px;
}
.bawah {
  margin-top: 20px;
}
/* jarak di antara keduanya 30px, bukan 50px */
```

Hal ini hanya terjadi pada margin vertikal (atas dan bawah), bukan kiri dan kanan.

### 5.c Margin Bawaan Browser

Browser memberi margin dan padding bawaan pada banyak elemen, misalnya `body`, `p`, `h1`, dan `ul`. Banyak developer menghapusnya di awal agar mengatur jarak sendiri.

```css
* {
  margin: 0;
  padding: 0;
}
/* reset sederhana: nol-kan margin dan padding semua elemen */
```

> **Ringkasan:** Padding adalah jarak di dalam kotak, margin di luar kotak. `margin: 0 auto` memusatkan kotak, dan margin vertikal dapat menyatu.

---

## 6. box-sizing

Secara bawaan, `width` hanya mengatur area **content**. Padding dan border ditambahkan di luarnya, sehingga ukuran kotak sesungguhnya lebih besar.

```css
.kotak {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
/* lebar sesungguhnya: 300 + 20 + 20 + 5 + 5 = 350px */
```

Ini membingungkan. Solusinya adalah `box-sizing: border-box`, yang membuat `width` mencakup content, padding, **dan** border.

```css
.kotak {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
/* lebar total tetap 300px, area content menyusut menyesuaikan */
```

Hampir semua developer memasang aturan ini untuk semua elemen di awal project.

```css
*, *::before, *::after {
  box-sizing: border-box;
}
/* pasang di bagian paling atas CSS, supaya ukuran selalu sesuai perkiraan */
```

> **Ringkasan:** Pakai `box-sizing: border-box` pada semua elemen agar `width` sudah termasuk padding dan border.

---

## 7. Isi yang Melebihi Kotak

Jika isi lebih besar dari kotaknya (misalnya tinggi dibatasi), properti `overflow` mengatur apa yang terjadi.

```css
.kotak {
  height: 100px;
  overflow: auto;
}
```

| Nilai | Efek |
|---|---|
| `visible` | Isi tumpah keluar kotak (bawaan) |
| `hidden` | Bagian yang melebihi disembunyikan |
| `scroll` | Selalu muncul batang gulir |
| `auto` | Batang gulir muncul hanya jika dibutuhkan |

---

## 8. Latihan Singkat

1. Buat kotak berukuran 300px dengan padding 20px dan border 5px, tanpa `box-sizing: border-box`. Ukur lebarnya di DevTools.
2. Tambahkan `box-sizing: border-box`, lalu ukur lagi.
3. Pusatkan kotak itu di tengah halaman.
4. Buat dua kotak bersebelahan secara vertikal dengan margin berbeda, lalu amati margin collapse.
5. Buat kotak setinggi 100px berisi teks panjang, lalu coba tiap nilai `overflow`.

---

## Rangkuman

- Setiap elemen adalah kotak dengan empat lapisan: content, padding, border, dan margin.
- `padding` adalah jarak di dalam kotak, `margin` adalah jarak di luar kotak, dan keduanya punya singkatan satu sampai empat nilai.
- `border` ditulis dengan tebal, gaya, dan warna.
- `margin: 0 auto` memusatkan elemen block yang punya lebar, dan margin vertikal bisa menyatu (collapse).
- `box-sizing: border-box` membuat `width` mencakup padding dan border, dan sebaiknya dipasang untuk semua elemen.
- `overflow` mengatur isi yang melebihi kotak.
