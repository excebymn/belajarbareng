---
jenis: murid
bab: vue
urutan: 11
judul: "v-show dan Perbedaannya dengan v-if"
deskripsi: "Menyembunyikan elemen dengan v-show lewat CSS display, serta memilih antara v-show dan v-if sesuai kebutuhan."
---

# v-show dan Perbedaannya dengan v-if

Pada materi ini kamu akan mempelajari: cara menyembunyikan elemen dengan `v-show`, apa yang terjadi di DOM, perbedaannya dengan `v-if`, serta cara memilih salah satunya.

Sebelum mulai, pastikan kamu sudah memahami: `v-if` dari materi Tampilan Bersyarat dengan v-if, serta properti `display` dari bab CSS.

---

## 1. Apa itu v-show

`v-show` juga menampilkan atau menyembunyikan elemen berdasarkan kondisi, seperti `v-if`. Bedanya ada pada **cara** menyembunyikannya.

#### Cara menulis

```vue
<script setup>
import { ref } from 'vue'

const tampil = ref(true)
</script>

<template>
  <button @click="tampil = !tampil">Tampilkan / Sembunyikan</button>
  <p v-show="tampil">Halo, aku bisa disembunyikan!</p>
  <!-- v-show tampil: elemen terlihat; false: elemen disembunyikan -->
</template>
```

Dari sisi pengguna, hasilnya sama persis dengan `v-if`. Perbedaannya hanya terlihat di DevTools.

> **Ringkasan:** `v-show="kondisi"` menampilkan atau menyembunyikan elemen berdasarkan kondisi.

---

## 2. Apa yang Terjadi di DOM

Jalankan contoh di atas, buka tab **Elements** di DevTools, lalu klik tombol berkali-kali.

- Saat `tampil` bernilai `true`, elemen `<p>` tampil normal.
- Saat `tampil` bernilai `false`, elemen `<p>` **tetap ada** di DOM, tetapi Vue menambahkan gaya `display: none`.

```html
<p style="display: none;">Halo, aku bisa disembunyikan!</p>
<!-- elemen masih ada di DOM, hanya disembunyikan oleh CSS -->
```

Bandingkan dengan `v-if`, yang menghapus elemen dari DOM saat kondisi falsy, dan membuatnya kembali dari awal saat kondisi truthy.

> **Ringkasan:** `v-show` hanya mengubah CSS `display`. Elemennya tetap ada di DOM.

---

## 3. Perbedaan v-show dan v-if

| | `v-if` | `v-show` |
|---|---|---|
| Cara menyembunyikan | Menghapus elemen dari DOM | Memberi `display: none` |
| Biaya saat berpindah tampil dan sembunyi | Lebih besar (elemen dibuat dan dihapus) | Sangat kecil (hanya mengganti CSS) |
| Biaya saat halaman dibuka | Kecil jika kondisi awal false (elemen tidak dibuat) | Elemen selalu dibuat walau disembunyikan |
| Isi formulir saat disembunyikan | Hilang | Tetap tersimpan |
| Bisa dipakai dengan `v-else` | Ya | **Tidak** |
| Bisa dipakai pada `<template>` | Ya | **Tidak** |

Contoh perbedaan isi formulir: kolom isian di dalam elemen yang disembunyikan dengan `v-show` tetap menyimpan ketikan saat ditampilkan lagi. Dengan `v-if`, kolom dibuat ulang dan ketikan hilang.

> **Ringkasan:** `v-if` menghapus dan membuat ulang elemen, `v-show` hanya menyembunyikannya. `v-show` tidak mendukung `v-else` dan `<template>`.

---

## 4. Kapan Memakai yang Mana

| Situasi | Pilihan |
|---|---|
| Elemen sering muncul dan hilang, seperti dropdown, tab, atau panel | `v-show` |
| Kondisi jarang berubah, atau elemen mungkin tidak pernah tampil | `v-if` |
| Butuh `v-else` atau `v-else-if` | `v-if` |
| Isian formulir di dalamnya harus tetap tersimpan | `v-show` |
| Isi elemen berat dan sebaiknya tidak dibuat bila belum perlu | `v-if` |

Jika ragu, mulai dengan `v-if`. Ganti dengan `v-show` hanya bila kamu memang menemui kebutuhan yang cocok.

---

## 5. Contoh: Panel Lipat

```vue
<script setup>
import { ref } from 'vue'

const terbuka = ref(false)
</script>

<template>
  <button @click="terbuka = !terbuka">
    {{ terbuka ? 'Tutup' : 'Buka' }} Detail
  </button>
  <div v-show="terbuka" class="panel">
    <p>Ini isi panel yang sering dibuka dan ditutup.</p>
  </div>
  <!-- panel sering berganti, sehingga v-show lebih cocok -->
</template>

<style scoped>
.panel {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-top: 0.5rem;
}
</style>
```

---

## 6. Latihan Singkat

1. Buat tombol yang menampilkan dan menyembunyikan sebuah paragraf dengan `v-show`, lalu amati perubahannya di tab **Elements**.
2. Ulangi dengan `v-if`, lalu bandingkan apa yang terlihat di DevTools untuk keduanya.
3. Letakkan sebuah input di dalam elemen dengan `v-show`, ketik sesuatu, sembunyikan, lalu tampilkan lagi. Ulangi dengan `v-if` dan amati perbedaannya.
4. Buat panel lipat seperti bagian 5, lalu tambahkan teks tombol yang berubah ("Buka" dan "Tutup").
5. Coba tambahkan `v-else` setelah elemen `v-show`, lalu baca pesan error di Console.

---

## Rangkuman

- `v-show` menyembunyikan elemen dengan `display: none`, sehingga elemennya tetap ada di DOM.
- `v-if` menghapus elemen dari DOM dan membuatnya ulang saat kondisi truthy.
- `v-show` tidak mendukung `v-else` dan `<template>`.
- Pakai `v-show` untuk elemen yang sering berganti tampil, dan `v-if` untuk kondisi yang jarang berubah atau butuh `v-else`.
