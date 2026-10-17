---
jenis: murid
bab: vue
urutan: 3
judul: "Komponen dan File .vue"
deskripsi: "Memahami komponen, tiga bagian file .vue (template, script setup, style), memakai komponen di dalam komponen lain, dan scoped style."
---

# Komponen dan File .vue

Pada materi ini kamu akan mempelajari: apa itu komponen, tiga bagian dalam file `.vue`, cara membuat dan memakai komponen di komponen lain, aturan penamaan, serta `scoped` pada style.

Sebelum mulai, pastikan kamu sudah memahami: project Vue dari materi Membuat Project Vue dengan Vite, serta HTML dan CSS dasar.

---

## 1. Apa itu Komponen

**Komponen** adalah potongan tampilan yang berdiri sendiri: punya HTML, logika, dan gayanya sendiri, dan bisa dipakai berkali-kali. Contohnya kartu produk, tombol, atau menu navigasi.

Di Vue, satu komponen ditulis dalam satu file berakhiran `.vue`. File seperti ini disebut **SFC** (*Single File Component*), karena tampilan, logika, dan gaya berada dalam satu file.

> **Ringkasan:** Komponen adalah potongan tampilan yang bisa dipakai ulang, dan satu komponen ditulis dalam satu file `.vue`.

---

## 2. Tiga Bagian File .vue

#### Cara menulis

```vue
<script setup>
const nama = 'Budi'
// logika dan data komponen ditulis di sini
</script>

<template>
  <p class="sapaan">Halo, {{ nama }}!</p>
  <!-- tampilan komponen ditulis di sini -->
</template>

<style>
.sapaan {
  color: teal;
}
/* gaya komponen ditulis di sini, sama seperti CSS biasa */
</style>
```

| Bagian | Isi |
|---|---|
| `<script setup>` | JavaScript: data, fungsi, dan import |
| `<template>` | HTML yang ditampilkan |
| `<style>` | CSS untuk komponen |

Ketiganya bersifat opsional, tetapi `template` hampir selalu ada. Urutan penulisan tidak berpengaruh, tetapi kursus ini memakai urutan `script`, `template`, `style`.

Data yang dideklarasikan di `<script setup>` bisa langsung dipakai di `<template>`. Pada contoh di atas, `nama` ditampilkan dengan `{{ nama }}`, yang dibahas di materi Template dan Interpolasi.

> **Ringkasan:** File `.vue` terdiri dari `script setup` (logika), `template` (tampilan), dan `style` (gaya).

---

## 3. Membuat dan Memakai Komponen

Kita buat komponen kartu profil, lalu memakainya di `App.vue`.

### 3.a Membuat Komponen

Buat file `src/components/KartuProfil.vue`.

```vue
<script setup>
const nama = 'Budi'
const kota = 'Surabaya'
</script>

<template>
  <div class="kartu">
    <h2>{{ nama }}</h2>
    <p>Kota: {{ kota }}</p>
  </div>
</template>

<style>
.kartu {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
}
</style>
```

### 3.b Memakai Komponen

Di `src/App.vue`, impor komponen itu dan tulis seperti tag HTML.

```vue
<script setup>
import KartuProfil from './components/KartuProfil.vue'
// import komponen; nama variabel menjadi nama tag di template
</script>

<template>
  <h1>Daftar Profil</h1>
  <KartuProfil />
  <!-- komponen dipakai seperti tag -->
  <KartuProfil />
  <!-- boleh dipakai berkali-kali -->
</template>
```

Dengan `<script setup>`, komponen yang di-`import` otomatis bisa dipakai di template. Tidak perlu mendaftarkannya lagi.

Pada contoh ini, kedua kartu menampilkan data yang sama karena datanya tertulis tetap di dalam komponen. Cara membuat tiap kartu menampilkan data berbeda dibahas di materi Props.

> **Catatan:** Tulis `.vue` di akhir path saat `import` komponen. Tanpanya, project bisa menampilkan error bahwa file tidak ditemukan.

> **Ringkasan:** Buat komponen di file `.vue`, `import` di komponen lain, lalu pakai seperti tag HTML.

---

## 4. Aturan Penamaan

| Aturan | Contoh |
|---|---|
| Nama file memakai **PascalCase** (setiap kata diawali huruf kapital, tanpa spasi) | `KartuProfil.vue` |
| Nama komponen sebaiknya **terdiri dari dua kata atau lebih** | `KartuProfil`, `TombolKirim` |
| Tag di template ditulis sama dengan nama komponen | `<KartuProfil />` |

Nama dua kata menghindari bentrok dengan elemen HTML bawaan, seperti `Header` atau `Button`. Pengecualiannya hanya `App.vue`, karena itu nama komponen utama.

Komponen yang tidak punya isi di antara tag pembuka dan penutup boleh ditulis dengan penutup sendiri, yaitu `<KartuProfil />`, bukan `<KartuProfil></KartuProfil>`. Keduanya sama artinya, tetapi bentuk pertama lebih singkat dan lebih umum dipakai.

---

## 5. Style Scoped

Secara bawaan, CSS di `<style>` berlaku untuk **seluruh halaman**, bukan hanya komponen itu. Jika dua komponen sama-sama memakai class `.kartu` dengan gaya berbeda, keduanya akan saling menimpa.

Tambahkan atribut `scoped` agar gaya hanya berlaku di komponen itu.

```vue
<style scoped>
.kartu {
  border: 1px solid #ccc;
}
/* hanya memengaruhi elemen di dalam komponen ini */
</style>
```

Dengan `scoped`, Vue menambahkan penanda unik pada elemen komponen, sehingga gayanya tidak bocor ke komponen lain. Buka DevTools tab **Elements** dan kamu akan melihat atribut seperti `data-v-xxxx` pada elemen.

Mulai sekarang, biasakan menulis `<style scoped>` pada komponen. Untuk gaya yang berlaku di seluruh aplikasi (misalnya reset CSS), taruh di file CSS terpisah di `src/assets/` lalu impor di `main.js`.

> **Ringkasan:** `<style scoped>` membuat CSS hanya berlaku di komponen itu sendiri.

---

## 6. Pohon Komponen

Komponen boleh dipakai di dalam komponen lain, membentuk pohon.

```text
App.vue
└── DaftarProfil.vue
    ├── KartuProfil.vue
    └── KartuProfil.vue
```

```vue
<!-- DaftarProfil.vue -->
<script setup>
import KartuProfil from './KartuProfil.vue'
// path relatif, sama aturannya dengan alamat relatif di bab HTML
</script>

<template>
  <section>
    <KartuProfil />
    <KartuProfil />
  </section>
</template>
```

Setiap komponen yang dipakai memiliki **datanya sendiri-sendiri**. Jika sebuah komponen punya data penghitung, dua salinan komponen itu menghitung secara terpisah. Hal ini kita lihat langsung di latihan.

---

## 7. Latihan Singkat

1. Buat komponen `KartuProfil.vue` seperti bagian 3.a, lalu tampilkan di `App.vue`.
2. Pakai komponen itu tiga kali, lalu ubah teks di `KartuProfil.vue` dan lihat ketiganya ikut berubah.
3. Ubah `<style>` menjadi `<style scoped>`, lalu periksa di DevTools atribut `data-v-...` pada elemen.
4. Buat komponen `TombolHitung.vue` berisi data `hitungan` dan tombol (isinya akan kamu lengkapi setelah materi Data Reaktif dengan ref dan Event dengan v-on). Pakai dua salinannya, dan nanti buktikan bahwa keduanya menghitung sendiri-sendiri.
5. Buat komponen `DaftarProfil.vue` yang berisi beberapa `KartuProfil`, lalu pakai di `App.vue`.

---

## Rangkuman

- Komponen adalah potongan tampilan yang bisa dipakai ulang, ditulis dalam satu file `.vue`.
- File `.vue` terdiri dari `<script setup>`, `<template>`, dan `<style>`.
- Komponen dipakai dengan `import` lalu ditulis seperti tag HTML di template.
- Nama file memakai PascalCase dan sebaiknya terdiri dari dua kata atau lebih.
- `<style scoped>` membuat CSS hanya berlaku di komponen itu.
