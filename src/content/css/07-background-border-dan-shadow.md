---
jenis: murid
bab: css
urutan: 7
judul: "Background, Border Radius, dan Shadow"
deskripsi: "Memakai latar belakang warna, gambar, dan gradien, membulatkan sudut, memberi bayangan, serta mengatur gambar dengan object-fit."
---

# Background, Border Radius, dan Shadow

Pada materi ini kamu akan mempelajari: latar belakang berupa warna, gambar, dan gradien, sudut membulat dengan `border-radius`, bayangan dengan `box-shadow` dan `text-shadow`, serta cara mengatur ukuran gambar dengan `object-fit`.

Sebelum mulai, pastikan kamu sudah memahami: warna dan satuan serta box model dari materi sebelumnya.

---

## 1. Background

### 1.a Warna dan Gambar Latar

```css
.hero {
  background-color: #f0f4ff;
  /* warna latar */
  background-image: url("img/pemandangan.jpg");
  /* gambar latar, alamat ditulis seperti alamat di HTML */
}
```

Alamat `url()` di file CSS dihitung **dari lokasi file CSS itu**, bukan dari file HTML. Jika `style.css` berada di folder yang sama dengan `index.html`, hasilnya sama. Jika CSS berada di folder `css/`, alamat gambar perlu `../img/pemandangan.jpg`.

### 1.b Mengatur Gambar Latar

Secara bawaan gambar latar diulang (*repeat*) memenuhi kotak. Beberapa properti mengaturnya.

```css
.hero {
  background-image: url("img/pemandangan.jpg");
  background-repeat: no-repeat;
  /* gambar tidak diulang */
  background-size: cover;
  /* gambar membesar menutupi seluruh kotak, bagian berlebih dipotong */
  background-position: center;
  /* gambar diposisikan di tengah */
}
```

| Properti | Nilai umum | Fungsi |
|---|---|---|
| `background-repeat` | `repeat`, `no-repeat`, `repeat-x` | Mengulang atau tidak |
| `background-size` | `cover`, `contain`, `200px` | Ukuran gambar |
| `background-position` | `center`, `top`, `left bottom` | Posisi gambar |
| `background-attachment` | `scroll`, `fixed` | Ikut bergulir atau tetap |

Perbedaan `cover` dan `contain`:

| Nilai | Perilaku |
|---|---|
| `cover` | Gambar menutupi seluruh kotak tanpa ruang kosong, bagian yang berlebih terpotong |
| `contain` | Seluruh gambar terlihat, bisa tersisa ruang kosong |

Kamu bisa menulis semuanya dengan satu singkatan.

```css
.hero {
  background: #f0f4ff url("img/pemandangan.jpg") center / cover no-repeat;
  /* warna, gambar, posisi / ukuran, pengulangan */
}
```

> **Catatan:** Gambar yang terkait isi (foto berita, foto produk) sebaiknya ditulis dengan `img` di HTML agar punya `alt`. Gunakan `background-image` untuk gambar hiasan.

### 1.c Gradien

Gradien adalah perpaduan warna yang halus. Ia ditulis sebagai nilai `background-image`.

```css
.latar1 {
  background-image: linear-gradient(to right, #ff7e5f, #feb47b);
  /* dari kiri ke kanan, oranye kemerahan ke oranye muda */
}
.latar2 {
  background-image: linear-gradient(135deg, #667eea, #764ba2);
  /* arah diagonal dengan sudut 135 derajat */
}
.latar3 {
  background-image: radial-gradient(circle, white, lightblue);
  /* gradien melingkar dari tengah */
}
```

> **Ringkasan:** `background-color`, `background-image`, dan gradien mengatur latar. `cover` menutupi seluruh kotak, `contain` menampilkan seluruh gambar.

---

## 2. Sudut Membulat

Properti `border-radius` membulatkan sudut kotak.

```css
.tombol {
  border-radius: 8px;
  /* semua sudut membulat 8px */
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* 50% pada kotak persegi menghasilkan lingkaran sempurna */
}
.tab {
  border-radius: 10px 10px 0 0;
  /* sudut atas membulat, sudut bawah tetap: kiri-atas, kanan-atas, kanan-bawah, kiri-bawah */
}
```

`border-radius: 50%` pada gambar atau kotak persegi menghasilkan lingkaran, dan banyak dipakai untuk foto profil.

---

## 3. Bayangan

### 3.a box-shadow

Memberi bayangan di sekitar kotak, sehingga tampak terangkat.

```css
.kartu {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

Urutan nilainya:

| Nilai | Contoh | Arti |
|---|---|---|
| Offset horizontal | `0` | Geser ke kanan (positif) atau kiri (negatif) |
| Offset vertikal | `4px` | Geser ke bawah (positif) atau atas (negatif) |
| Blur | `12px` | Seberapa kabur bayangan |
| Spread (opsional) | `2px` | Seberapa melebar bayangan |
| Warna | `rgba(0, 0, 0, 0.15)` | Warna bayangan, biasanya hitam transparan |

Bayangan halus dengan hitam transparan terlihat lebih alami daripada hitam pekat. Untuk bayangan di bagian dalam kotak, tambahkan `inset`.

```css
.cekung {
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.2);
}
```

Beberapa bayangan bisa digabung dengan koma.

```css
.kartu {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.1);
}
```

### 3.b text-shadow

Bayangan untuk teks. Tidak punya nilai spread.

```css
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
```

> **Ringkasan:** `box-shadow` memberi bayangan pada kotak dan `text-shadow` pada teks, dengan nilai offset, blur, dan warna.

---

## 4. Mengatur Gambar dengan object-fit

Gambar yang dipaksa ke ukuran tertentu bisa gepeng atau melar. Properti `object-fit` mengatur bagaimana gambar mengisi kotaknya.

```css
.foto {
  width: 300px;
  height: 200px;
  object-fit: cover;
  /* gambar menutupi kotak tanpa gepeng, bagian berlebih terpotong */
}
```

| Nilai | Perilaku |
|---|---|
| `fill` | Gambar dipaksa memenuhi kotak, bisa gepeng (bawaan) |
| `cover` | Menutupi kotak tanpa mengubah perbandingan, bagian berlebih terpotong |
| `contain` | Seluruh gambar terlihat tanpa mengubah perbandingan, bisa ada ruang kosong |

Kombinasi `object-fit: cover` dengan lebar dan tinggi tetap sangat berguna untuk galeri foto agar semua gambar seragam.

Untuk gambar yang menyesuaikan lebar kotaknya:

```css
img {
  max-width: 100%;
  height: auto;
}
/* gambar tidak pernah lebih lebar dari induknya, dan tingginya mengikuti perbandingan asli */
```

> **Ringkasan:** `object-fit: cover` membuat gambar mengisi kotak tanpa gepeng, dan `max-width: 100%` mencegah gambar melebihi induknya.

---

## 5. Latihan Singkat

1. Buat bagian `hero` dengan gambar latar yang menutupi seluruh kotak dan teks di tengahnya.
2. Buat latar gradien diagonal dua warna.
3. Buat kartu berbayangan halus dengan sudut membulat.
4. Buat foto profil berbentuk lingkaran.
5. Buat tiga foto dengan ukuran berbeda menjadi seragam memakai `object-fit: cover`.

---

## Rangkuman

- `background-color`, `background-image`, `background-size`, `background-position`, dan `background-repeat` mengatur latar belakang. `linear-gradient()` membuat gradien.
- Alamat `url()` di CSS dihitung dari lokasi file CSS.
- `border-radius` membulatkan sudut, dan `50%` pada kotak persegi menghasilkan lingkaran.
- `box-shadow` dan `text-shadow` memberi bayangan. Bayangan hitam transparan yang halus tampak lebih alami.
- `object-fit: cover` membuat gambar mengisi kotak tanpa gepeng, dan `max-width: 100%` dengan `height: auto` membuat gambar tidak melebihi induknya.
