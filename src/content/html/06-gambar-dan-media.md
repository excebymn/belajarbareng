---
jenis: murid
bab: html
urutan: 6
judul: "Gambar dan Media"
deskripsi: "Menampilkan gambar dengan img, menulis alt yang baik, figure dan figcaption, serta menyisipkan audio, video, dan konten dari situs lain."
---

# Gambar dan Media

Pada materi ini kamu akan mempelajari: cara menampilkan gambar dengan `img`, atribut `src`, `alt`, `width`, dan `height`, format gambar yang umum, `figure` dan `figcaption`, serta cara menyisipkan audio, video, dan konten dari situs lain.

Sebelum mulai, pastikan kamu sudah memahami: atribut dari materi Pengenalan HTML dan alamat relatif dari materi Link.

---

## 1. Menampilkan Gambar

#### Cara menulis

```html
<img src="img/kucing.jpg" alt="Seekor kucing oren sedang tidur di sofa">
<!-- img adalah elemen kosong, src lokasi gambar, alt deskripsi gambar -->
```

`<img>` adalah elemen kosong, jadi tidak punya tag penutup. Dua atribut yang wajib ada:

| Atribut | Fungsi |
|---|---|
| `src` | Lokasi file gambar. Ditulis dengan alamat relatif (gambar di project sendiri) atau URL lengkap (gambar di situs lain). |
| `alt` | Teks pengganti yang menjelaskan isi gambar |

Alamat `src` mengikuti aturan yang sama dengan alamat `href` di materi Link.

```html
<img src="kucing.jpg" alt="Kucing">
<!-- gambar di folder yang sama dengan file HTML -->
<img src="img/kucing.jpg" alt="Kucing">
<!-- gambar di dalam folder img -->
<img src="../img/kucing.jpg" alt="Kucing">
<!-- gambar di folder img yang berada di tingkat atas folder ini -->
```

> **Catatan:** Jika gambar tidak muncul, penyebab paling umum adalah `src` salah: nama file keliru (huruf besar kecil berpengaruh), folder tidak tepat, atau lupa ekstensi. Periksa tab **Network** di DevTools untuk melihat status `404`.

> **Ringkasan:** `img` dengan `src` dan `alt` menampilkan gambar. Jika gambar tidak muncul, periksa alamat `src`.

---

## 2. Atribut alt

`alt` adalah teks pengganti gambar. Ia dipakai dalam tiga situasi:

- Gambar gagal dimuat, sehingga teks `alt` tampil sebagai gantinya.
- Pengguna tunanetra memakai pembaca layar yang membacakan isi gambar lewat `alt`.
- Mesin pencari memahami isi gambar lewat `alt`.

### 2.a Menulis alt yang Baik

| Situasi | alt yang baik |
|---|---|
| Foto informatif | Jelaskan isi gambar secara singkat dan jelas: `alt="Siswa sedang belajar coding di laptop"` |
| Gambar yang berfungsi sebagai link | Jelaskan tujuan link: `alt="Kembali ke beranda"` |
| Gambar hanya hiasan | Kosongkan: `alt=""` (pembaca layar akan melewatinya) |

```html
<img src="grafik.png" alt="Grafik penjualan naik dari 100 menjadi 300 unit dalam tiga bulan">
<!-- alt menjelaskan informasi yang tampak di gambar -->
<img src="garis-hias.png" alt="">
<!-- gambar hiasan: alt dikosongkan, bukan dihapus -->
```

Jangan menulis "gambar dari" atau "foto dari" di awal `alt`, karena pembaca layar sudah menyebutkan bahwa itu gambar.

> **Ringkasan:** Atribut `alt` menjelaskan isi atau fungsi gambar. Kosongkan (`alt=""`) hanya untuk gambar hiasan.

---

## 3. Ukuran Gambar

Atribut `width` dan `height` mengatur ukuran gambar dalam piksel.

```html
<img src="img/kucing.jpg" alt="Kucing" width="300" height="200">
<!-- gambar ditampilkan dengan lebar 300 piksel dan tinggi 200 piksel -->
```

Dua catatan penting:

- Jika hanya `width` yang ditulis, tinggi menyesuaikan otomatis sesuai perbandingan gambar.
- Mengisi `width` dan `height` membantu browser menyisihkan ruang sebelum gambar selesai dimuat, sehingga halaman tidak "melompat" ketika gambar muncul.

Untuk ukuran yang lebih fleksibel (misalnya gambar menyesuaikan lebar layar), ukuran diatur dengan CSS, dibahas di bab CSS.

> **Catatan:** Jangan memperkecil gambar besar hanya lewat `width`. Gambar tetap diunduh dalam ukuran penuh sehingga halaman terasa lambat. Kecilkan ukuran file gambarnya sebelum dipakai.

### 3.a Memuat Gambar Secara Malas

```html
<img src="img/foto-besar.jpg" alt="Pemandangan gunung" loading="lazy">
<!-- gambar baru diunduh saat mendekati layar, menghemat kuota dan mempercepat halaman -->
```

Atribut `loading="lazy"` cocok untuk gambar yang berada jauh di bagian bawah halaman.

> **Ringkasan:** `width` dan `height` mengatur ukuran, `loading="lazy"` menunda pengunduhan gambar yang belum terlihat.

---

## 4. Format Gambar

| Format | Cocok untuk | Catatan |
|---|---|---|
| JPG / JPEG | Foto | Ukuran kecil, tidak mendukung latar transparan |
| PNG | Logo, tangkapan layar, gambar dengan latar transparan | Kualitas tajam, ukuran lebih besar dari JPG untuk foto |
| GIF | Animasi sederhana | Warna terbatas |
| SVG | Ikon, logo, ilustrasi vektor | Tetap tajam di ukuran berapa pun, ukuran file kecil |
| WebP | Foto dan grafis secara umum | Ukuran lebih kecil dari JPG dan PNG, didukung semua browser modern |

Nama file gambar sebaiknya huruf kecil tanpa spasi, misalnya `foto-kegiatan.jpg`.

> **Ringkasan:** Pakai JPG atau WebP untuk foto, PNG untuk gambar tajam dengan latar transparan, dan SVG untuk ikon dan logo.

---

## 5. figure dan figcaption

Jika gambar punya keterangan (caption), bungkus dengan `<figure>` dan beri keterangan memakai `<figcaption>`.

#### Cara menulis

```html
<figure>
  <img src="img/kucing.jpg" alt="Kucing oren tidur di sofa">
  <!-- gambar yang diberi keterangan -->
  <figcaption>Gambar 1. Kucing sedang beristirahat siang hari.</figcaption>
  <!-- figcaption adalah keterangan gambar -->
</figure>
```

Dengan elemen ini, browser dan mesin pencari tahu bahwa keterangan itu milik gambar tersebut. `figure` juga bisa dipakai untuk blok kode, diagram, atau kutipan yang punya keterangan.

> **Ringkasan:** `figure` membungkus gambar dan keterangannya, `figcaption` berisi keterangan.

---

## 6. Audio dan Video

### 6.a Audio

```html
<audio src="media/lagu.mp3" controls>
  Browser kamu tidak mendukung audio.
  <!-- teks di dalam audio tampil bila browser tidak mendukung -->
</audio>
```

### 6.b Video

```html
<video src="media/profil.mp4" controls width="480">
  Browser kamu tidak mendukung video.
</video>
```

Atribut yang umum dipakai:

| Atribut | Fungsi |
|---|---|
| `controls` | Menampilkan tombol putar, jeda, dan volume |
| `autoplay` | Memutar otomatis (biasanya diblokir browser kecuali video dibisukan) |
| `loop` | Mengulang terus |
| `muted` | Membisukan suara |
| `poster` | Gambar sampul yang tampil sebelum video diputar |

Jika ingin menyediakan lebih dari satu format file agar didukung lebih banyak browser, pakai elemen `source`.

```html
<video controls width="480">
  <source src="media/profil.mp4" type="video/mp4">
  <source src="media/profil.webm" type="video/webm">
  <!-- browser memilih format pertama yang bisa dimainkannya -->
  Browser kamu tidak mendukung video.
</video>
```

> **Catatan:** Hindari `autoplay` dengan suara karena mengganggu pengguna. Berikan selalu atribut `controls` agar pengguna bisa mengatur sendiri.

> **Ringkasan:** `audio` dan `video` menampilkan media dengan `controls`. Pakai `source` untuk menyediakan beberapa format.

---

## 7. Konten dari Situs Lain dengan iframe

Elemen `<iframe>` menampilkan halaman lain di dalam halaman kita. Contoh yang paling umum adalah video YouTube dan peta.

```html
<iframe
  src="https://www.youtube.com/embed/ID_VIDEO"
  title="Video pembelajaran HTML"
  width="560"
  height="315"
  allowfullscreen>
</iframe>
<!-- ID_VIDEO diganti dengan kode video; title wajib agar pembaca layar tahu isinya -->
```

Biasanya kamu tidak perlu menulisnya dari nol. Situs seperti YouTube dan Google Maps menyediakan tombol **Share** lalu **Embed**, yang memberimu kode `iframe` siap salin.

> **Catatan:** Tidak semua situs mengizinkan dirinya dimasukkan ke `iframe`. Gunakan iframe hanya dari sumber yang kamu percaya, karena isinya dikendalikan pihak lain.

> **Ringkasan:** `iframe` menyisipkan halaman atau konten situs lain. Salin kode embed resmi dari situs sumbernya.

---

## 8. Latihan Singkat

1. Buat folder `img` di project, lalu simpan satu foto di dalamnya.
2. Tampilkan foto itu dengan `img` lengkap dengan `alt`, `width`, dan `height`.
3. Bungkus dengan `figure` dan beri `figcaption`.
4. Jadikan gambar kedua sebagai link ke halaman lain.
5. Sisipkan satu video dari YouTube memakai kode embed.
6. Sengaja ubah `src` menjadi nama yang salah, lalu lihat tab **Network** di DevTools untuk melihat status `404`.

---

## Rangkuman

- `img` menampilkan gambar dengan `src` (lokasi) dan `alt` (teks pengganti). Alamat `src` mengikuti aturan alamat relatif.
- `alt` menjelaskan isi atau fungsi gambar, dan dikosongkan hanya untuk gambar hiasan.
- `width`, `height`, dan `loading="lazy"` membantu ukuran dan kecepatan halaman.
- Pakai JPG atau WebP untuk foto, PNG untuk gambar dengan latar transparan, dan SVG untuk ikon dan logo.
- `figure` dan `figcaption` memberi keterangan pada gambar.
- `audio` dan `video` menampilkan media dengan `controls`, dan `iframe` menyisipkan konten dari situs lain.
