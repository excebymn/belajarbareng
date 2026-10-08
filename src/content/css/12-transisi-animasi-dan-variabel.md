---
jenis: murid
bab: css
urutan: 12
judul: "Transisi, Animasi, dan Variabel CSS"
deskripsi: "Membuat perubahan halus dengan transition dan transform, animasi dengan keyframes, serta menyimpan nilai yang dipakai berulang dengan variabel CSS."
---

# Transisi, Animasi, dan Variabel CSS

Pada materi ini kamu akan mempelajari: cara membuat perubahan yang halus dengan `transition`, cara menggeser, memutar, dan membesarkan elemen dengan `transform`, cara membuat animasi dengan `@keyframes`, serta cara menyimpan nilai yang dipakai berulang dengan variabel CSS.

Sebelum mulai, pastikan kamu sudah memahami: pseudo-class `:hover` dari materi Pseudo-class dan Specificity, serta warna dan satuan.

---

## 1. Transition

Secara bawaan, perubahan gaya terjadi **seketika**. Misalnya warna tombol langsung berganti saat kursor menyentuhnya. `transition` membuat perubahan itu berlangsung halus.

#### Cara menulis

```css
.tombol {
  background-color: royalblue;
  color: white;
  transition: background-color 0.3s ease;
  /* jika background-color berubah, lakukan dalam 0,3 detik secara halus */
}
.tombol:hover {
  background-color: navy;
}
```

Tanpa `transition`, warna langsung melompat. Dengan `transition`, warna bergeser perlahan dari biru royal ke biru tua.

Transition didefinisikan pada **keadaan awal** elemen (bukan pada `:hover`), sehingga berlaku saat masuk maupun keluar dari keadaan hover.

### 1.a Bagian-bagian transition

| Bagian | Contoh | Fungsi |
|---|---|---|
| Properti | `background-color` | Properti mana yang diubah dengan halus. `all` berarti semua. |
| Durasi | `0.3s` | Lama perubahan |
| Fungsi waktu | `ease` | Pola kecepatan perubahan |
| Jeda (opsional) | `0.1s` | Tunda sebelum dimulai |

Nilai fungsi waktu yang umum: `ease` (bawaan, melambat di akhir), `linear` (kecepatan tetap), `ease-in`, `ease-out`, dan `ease-in-out`.

Beberapa properti sekaligus dipisah koma:

```css
.kartu {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
```

> **Catatan:** Durasi 0,2 sampai 0,4 detik terasa responsif untuk efek hover. Terlalu lama membuat antarmuka terasa lambat.

> **Ringkasan:** `transition: properti durasi fungsi-waktu` membuat perubahan gaya berjalan halus, ditulis pada keadaan awal elemen.

---

## 2. Transform

`transform` mengubah bentuk atau posisi elemen **tanpa mengganggu tata letak elemen lain**.

| Fungsi | Efek | Contoh |
|---|---|---|
| `translate(x, y)` | Menggeser | `translate(10px, 20px)` |
| `scale(n)` | Membesarkan atau mengecilkan | `scale(1.1)` berarti 110% |
| `rotate(sudut)` | Memutar | `rotate(45deg)` |
| `skew(sudut)` | Memiringkan | `skew(10deg)` |

```css
.kartu {
  transition: transform 0.2s ease;
}
.kartu:hover {
  transform: translateY(-4px) scale(1.02);
  /* kartu terangkat 4px dan sedikit membesar saat disentuh kursor */
}
.ikon {
  transform: rotate(90deg);
}
```

Beberapa fungsi bisa digabung dalam satu `transform`, dipisah spasi.

Karena `transform` tidak menggeser elemen lain, ia lebih ringan dan lebih halus daripada mengubah `margin` atau `top`. Untuk animasi gerak, utamakan `transform` dan `opacity`.

> **Ringkasan:** `transform` menggeser, membesarkan, dan memutar elemen tanpa mengganggu elemen lain, dan cocok dipadukan dengan `transition`.

---

## 3. Animasi dengan Keyframes

`transition` hanya berpindah dari satu keadaan ke keadaan lain saat ada pemicu. Untuk gerakan yang berjalan sendiri atau lebih dari dua tahap, pakai **animasi**.

Langkahnya dua: **definisikan** animasinya dengan `@keyframes`, lalu **pasang** ke elemen dengan properti `animation`.

#### Cara menulis

```css
@keyframes muncul {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* mendefinisikan animasi bernama muncul: dari transparan dan agak ke bawah, ke jelas dan di posisi asli */

.kartu {
  animation: muncul 0.6s ease;
  /* memasang animasi muncul berdurasi 0,6 detik */
}
```

Untuk lebih dari dua tahap, pakai persentase.

```css
@keyframes denyut {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}

.notifikasi {
  animation: denyut 1.5s ease-in-out infinite;
  /* berulang tanpa henti */
}
```

### 3.a Properti animation

| Bagian | Contoh | Fungsi |
|---|---|---|
| Nama | `denyut` | Nama dari `@keyframes` |
| Durasi | `1.5s` | Lama satu putaran |
| Fungsi waktu | `ease-in-out` | Pola kecepatan |
| Jeda | `0.5s` | Tunda sebelum mulai |
| Pengulangan | `infinite` atau `3` | Berapa kali berulang |
| Arah | `alternate` | Bolak-balik maju mundur |
| Mengisi | `forwards` | Tetap di keadaan akhir setelah selesai |

### 3.b Menghormati Pengguna yang Tidak Nyaman dengan Gerakan

Sebagian pengguna merasa pusing oleh animasi dan mengaktifkan pengaturan "kurangi gerakan" di perangkatnya. CSS bisa membaca pengaturan itu.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
/* mematikan animasi dan transisi untuk pengguna yang memintanya */
```

> **Ringkasan:** `@keyframes` mendefinisikan tahapan animasi, dan `animation` memasangnya ke elemen. Hormati `prefers-reduced-motion`.

---

## 4. Variabel CSS

Sebuah warna atau ukuran sering dipakai di banyak tempat. Jika ingin mengubahnya, kamu harus mencari dan mengganti satu per satu. **Variabel CSS** (*custom properties*) menyimpan nilai itu di satu tempat.

#### Cara menulis

```css
:root {
  --warna-utama: #3366ff;
  --warna-teks: #222222;
  --jarak: 16px;
  --radius: 8px;
}
/* mendefinisikan variabel di :root agar bisa dipakai di seluruh halaman */

.tombol {
  background-color: var(--warna-utama);
  color: white;
  padding: var(--jarak);
  border-radius: var(--radius);
}
/* var() memakai nilai variabel */

a {
  color: var(--warna-utama);
}
```

Aturan penting:

- Nama variabel **diawali dua tanda hubung** (`--`).
- `:root` mewakili elemen `html`, sehingga variabel di dalamnya tersedia di seluruh halaman.
- Nilai dipakai dengan `var(--nama)`.
- Variabel bisa memiliki nilai cadangan: `var(--warna-aksen, orange)`.

### 4.a Variabel untuk Mengganti Tema

Karena variabel bisa ditimpa, mengganti tema (misalnya mode gelap) cukup dengan mengganti nilainya.

```css
:root {
  --latar: white;
  --teks: #222;
}

@media (prefers-color-scheme: dark) {
  :root {
    --latar: #1a1a1a;
    --teks: #f0f0f0;
  }
}
/* jika perangkat memakai mode gelap, nilai variabel berganti dan seluruh halaman ikut berubah */

body {
  background-color: var(--latar);
  color: var(--teks);
}
```

Cukup menulis ulang beberapa nilai variabel, tanpa menyentuh aturan lain.

### 4.b Manfaat Variabel

| Manfaat | Penjelasan |
|---|---|
| Satu tempat perubahan | Ubah `--warna-utama` sekali, seluruh halaman ikut |
| Konsistensi | Semua tombol dan link memakai warna yang persis sama |
| Mudah dibaca | `var(--warna-utama)` lebih bermakna daripada `#3366ff` |
| Mudah ganti tema | Cukup ganti nilai variabel |

> **Ringkasan:** Variabel CSS didefinisikan dengan `--nama` di `:root` dan dipakai dengan `var(--nama)`, sehingga satu perubahan berlaku di seluruh halaman.

---

## 5. Latihan Singkat

1. Buat tombol yang berubah warna dengan halus saat disentuh kursor.
2. Buat kartu yang terangkat sedikit dan bayangannya menebal saat `:hover`.
3. Buat animasi `muncul` untuk kartu yang tampil saat halaman dibuka.
4. Buat ikon lonceng yang berdenyut tanpa henti.
5. Pindahkan semua warna dan jarak yang berulang di CSS-mu menjadi variabel di `:root`.
6. Tambahkan mode gelap dengan `prefers-color-scheme: dark`.

---

## Rangkuman

- `transition` membuat perubahan gaya berjalan halus, ditulis pada keadaan awal elemen dengan properti, durasi, dan fungsi waktu.
- `transform` (`translate`, `scale`, `rotate`) mengubah bentuk dan posisi tanpa mengganggu elemen lain.
- `@keyframes` mendefinisikan animasi, dan `animation` memasangnya ke elemen. Hormati pengaturan `prefers-reduced-motion`.
- Variabel CSS ditulis `--nama` di `:root` dan dipakai dengan `var(--nama)`.
- Dengan variabel, mengubah warna, jarak, atau tema cukup di satu tempat.
