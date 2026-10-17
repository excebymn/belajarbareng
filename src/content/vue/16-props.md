---
jenis: murid
bab: vue
urutan: 16
judul: "Props: Mengirim Data ke Komponen Anak"
deskripsi: "Mengirim data dari komponen induk ke anak dengan defineProps, memberi tipe dan nilai bawaan, serta aturan bahwa props tidak boleh diubah anak."
---

# Props: Mengirim Data ke Komponen Anak

Pada materi ini kamu akan mempelajari: cara mengirim data dari komponen induk ke komponen anak dengan props, menerimanya dengan `defineProps`, memberi tipe, nilai bawaan, dan kewajiban, mengirim angka dan object dengan `v-bind`, serta aturan bahwa props tidak boleh diubah oleh komponen anak.

Sebelum mulai, pastikan kamu sudah memahami: komponen dari materi Komponen dan File .vue, `v-bind` dari materi Binding Atribut dengan v-bind, serta `v-for` dari materi Menampilkan Daftar dengan v-for.

---

## 1. Masalah: Komponen dengan Data Tetap

Di materi Komponen dan File .vue, `KartuProfil` menampilkan nama dan kota yang tertulis tetap di dalam komponen. Jika dipakai tiga kali, ketiganya menampilkan data yang sama. Padahal kita ingin tiap kartu menampilkan orang yang berbeda.

Solusinya: komponen induk **mengirim data** ke komponen anak lewat atribut. Data kiriman itu disebut **props** (singkatan *properties*).

> **Ringkasan:** Props adalah cara komponen induk mengirim data ke komponen anak.

---

## 2. Mengirim dan Menerima Props

### 2.a Menerima Props di Komponen Anak

Komponen anak mendeklarasikan props apa saja yang ia terima dengan `defineProps`.

```vue
<!-- src/components/KartuProfil.vue -->
<script setup>
defineProps({
  nama: String,
  kota: String
})
// defineProps tidak perlu diimpor; langsung bisa dipakai di script setup
</script>

<template>
  <div class="kartu">
    <h2>{{ nama }}</h2>
    <!-- props bisa langsung dipakai di template seperti variabel biasa -->
    <p>Kota: {{ kota }}</p>
  </div>
</template>

<style scoped>
.kartu {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
}
</style>
```

Isi `defineProps` adalah object: nama props di kiri, **tipe data** di kanan (`String`, `Number`, `Boolean`, `Array`, `Object`).

### 2.b Mengirim Props dari Komponen Induk

Induk mengirim props seperti menulis atribut HTML.

```vue
<!-- src/App.vue -->
<script setup>
import KartuProfil from './components/KartuProfil.vue'
</script>

<template>
  <KartuProfil nama="Budi" kota="Surabaya" />
  <KartuProfil nama="Sari" kota="Malang" />
  <KartuProfil nama="Dewi" kota="Jakarta" />
  <!-- komponen yang sama, data berbeda -->
</template>
```

Sekarang satu komponen menampilkan tiga orang yang berbeda. Itulah kegunaan utama props: membuat komponen yang bisa dipakai ulang dengan data yang berbeda.

> **Ringkasan:** Anak menerima dengan `defineProps`, induk mengirim lewat atribut.

---

## 3. Mengirim Data Selain Teks

Atribut biasa selalu berisi **teks**. Untuk mengirim angka, boolean, array, object, atau data dari variabel, pakai `v-bind` (singkatan `:`).

```vue
<script setup>
import { ref } from 'vue'
import KartuProfil from './components/KartuProfil.vue'

const orang = ref({ nama: 'Budi', kota: 'Surabaya' })
const umur = ref(16)
</script>

<template>
  <KartuProfil nama="Budi" umur="16" />
  <!-- salah untuk angka: umur diterima sebagai teks "16" -->
  <KartuProfil nama="Budi" :umur="16" />
  <!-- benar: :umur mengirim angka 16 -->
  <KartuProfil :nama="orang.nama" :umur="umur" />
  <!-- mengirim isi variabel -->
  <KartuProfil :profil="orang" />
  <!-- mengirim seluruh object -->
</template>
```

Aturan: **jika nilainya bukan teks biasa, pakai titik dua.**

Untuk props boolean, penulisan tanpa nilai berarti `true`.

```vue
<KartuProfil nama="Budi" aktif />
<!-- sama dengan :aktif="true" -->
```

> **Ringkasan:** Pakai `:namaProps="..."` untuk mengirim angka, boolean, array, object, dan isi variabel.

---

## 4. Mendefinisikan Props Lebih Lengkap

Selain tipe, props bisa diberi **nilai bawaan** dan ditandai **wajib**.

```vue
<script setup>
defineProps({
  nama: {
    type: String,
    required: true
    // wajib dikirim; jika tidak, Vue menampilkan peringatan di Console
  },
  kota: {
    type: String,
    default: 'Belum diisi'
    // dipakai bila induk tidak mengirim kota
  },
  umur: {
    type: Number,
    default: 0
  },
  hobi: {
    type: Array,
    default: () => []
    // untuk array dan object, nilai bawaan harus berupa fungsi yang mengembalikannya
  }
})
</script>
```

Aturan pentingnya: nilai bawaan untuk **array dan object** ditulis sebagai fungsi (`() => []` atau `() => ({})`). Jika tidak, semua komponen berbagi satu array yang sama.

Jika tipe data yang dikirim tidak sesuai (misalnya teks untuk props `Number`), Vue menampilkan peringatan di Console saat pengembangan. Peringatan ini sangat membantu menemukan kesalahan, sehingga biasakan menulis tipe.

Untuk props yang hanya teks sederhana dan kamu belum perlu tipe, bentuk array juga ada, tetapi kursus ini selalu memakai bentuk object karena lebih aman.

```js
defineProps(['nama', 'kota'])
// bentuk array: ringkas tetapi tanpa pemeriksaan tipe
```

> **Ringkasan:** Tulis props dengan `type`, `required`, dan `default`. Nilai bawaan array dan object harus berupa fungsi.

---

## 5. Memakai Props di Script

Di `<template>`, props dipakai langsung dengan namanya. Jika kamu perlu memakainya di `<script>`, simpan hasil `defineProps` ke variabel.

```vue
<script setup>
import { computed } from 'vue'

const props = defineProps({
  harga: Number,
  diskon: { type: Number, default: 0 }
})
// props adalah object berisi semua props

const hargaAkhir = computed(() => {
  return props.harga - (props.harga * props.diskon) / 100
  // di script, akses lewat props.namaProps, bukan .value
})
</script>

<template>
  <p>Harga: Rp {{ hargaAkhir.toLocaleString('id-ID') }}</p>
</template>
```

Perhatikan: props diakses lewat `props.harga`, **tanpa `.value`**. `.value` hanya untuk `ref`.

Penamaan: di `defineProps` dan di script, nama ditulis **camelCase** (`namaLengkap`). Di template komponen induk, boleh ditulis camelCase atau kebab-case (`nama-lengkap`). Kursus ini memakai camelCase di keduanya agar konsisten.

---

## 6. Aturan: Props Tidak Boleh Diubah Anak

Aliran data di Vue bersifat **satu arah**: dari induk turun ke anak. Komponen anak **tidak boleh mengubah** props yang diterimanya.

```vue
<script setup>
const props = defineProps({ jumlah: Number })

function tambah() {
  props.jumlah++
  // salah: props bersifat hanya-baca, Vue menampilkan peringatan
}
</script>
```

Mengapa dilarang? Jika anak boleh mengubah data milik induk, kita tidak lagi tahu siapa yang mengubah data itu, sehingga sulit melacak bug.

Jika anak butuh versi yang bisa diubah, buat salinan lokal dengan `ref`.

```vue
<script setup>
import { ref } from 'vue'

const props = defineProps({ jumlahAwal: Number })
const jumlah = ref(props.jumlahAwal)
// salinan lokal yang boleh diubah; nilai awalnya dari props

function tambah() {
  jumlah.value++
}
</script>
```

Jika anak perlu **memberi tahu** induk bahwa sesuatu terjadi, misalnya tombol hapus diklik, caranya bukan mengubah props, tetapi mengirim kejadian ke atas dengan emit. Hal ini dibahas di materi berikutnya.

> **Ringkasan:** Props hanya dibaca oleh anak. Untuk versi yang bisa diubah, salin ke `ref`. Untuk memberi tahu induk, pakai emit.

---

## 7. Contoh: Daftar Kartu dengan v-for

Props paling sering dipakai bersama `v-for`.

```vue
<!-- src/components/KartuProduk.vue -->
<script setup>
defineProps({
  nama: { type: String, required: true },
  harga: { type: Number, required: true },
  stok: { type: Number, default: 0 }
})
</script>

<template>
  <div class="kartu">
    <h3>{{ nama }}</h3>
    <p>Rp {{ harga.toLocaleString('id-ID') }}</p>
    <p v-if="stok > 0">Stok: {{ stok }}</p>
    <p v-else class="habis">Stok habis</p>
  </div>
</template>

<style scoped>
.kartu { border: 1px solid #ccc; padding: 1rem; border-radius: 8px; }
.habis { color: crimson; }
</style>
```

```vue
<!-- src/App.vue -->
<script setup>
import { ref } from 'vue'
import KartuProduk from './components/KartuProduk.vue'

const produk = ref([
  { id: 1, nama: 'Buku Tulis', harga: 5000, stok: 20 },
  { id: 2, nama: 'Pensil', harga: 3000, stok: 0 },
  { id: 3, nama: 'Penghapus', harga: 2000, stok: 8 }
])
</script>

<template>
  <KartuProduk
    v-for="p in produk"
    :key="p.id"
    :nama="p.nama"
    :harga="p.harga"
    :stok="p.stok"
  />
  <!-- satu komponen diulang untuk setiap produk -->
</template>
```

Cara lain yang lebih ringkas, yaitu mengirim satu object utuh, bisa dipakai bila props-nya banyak.

```vue
<KartuProduk v-for="p in produk" :key="p.id" :produk="p" />
<!-- komponen menerima props bernama produk, bertipe Object -->
```

---

## 8. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| Angka diterima sebagai teks | Lupa titik dua: `umur="16"` | Tulis `:umur="16"` |
| Props tidak tampil | Nama di induk tidak sama dengan nama di `defineProps` | Samakan penulisannya |
| Peringatan "Invalid prop: type check failed" | Tipe data yang dikirim tidak sesuai | Kirim tipe yang benar atau ubah tipe di `defineProps` |
| Peringatan "Attempting to mutate prop" | Mengubah props di anak | Salin ke `ref`, atau gunakan emit |
| Semua komponen berbagi satu array | Nilai bawaan array ditulis `[]` | Tulis `default: () => []` |
| Error `.value` pada props | Memperlakukan props seperti ref | Tulis `props.nama`, tanpa `.value` |

---

## 9. Latihan Singkat

1. Buat komponen `KartuProfil` dengan props `nama` dan `kota`, lalu pakai tiga kali dengan data berbeda.
2. Tambahkan props `umur` bertipe angka dan kirimkan dengan `:umur`. Coba kirim tanpa titik dua, lalu baca peringatan di Console.
3. Tambahkan nilai bawaan untuk `kota`, lalu pakai komponen tanpa mengirim kota.
4. Tandai `nama` sebagai wajib, lalu coba memakai komponen tanpa nama dan lihat peringatannya.
5. Buat komponen `KartuProduk` dan tampilkan array produk dengan `v-for`.
6. Buat komponen yang memakai props di `<script>` lewat `computed`, misalnya menghitung harga setelah diskon.

---

## Rangkuman

- Props adalah cara komponen induk mengirim data ke komponen anak, diterima dengan `defineProps`.
- Atribut biasa mengirim teks. Untuk angka, boolean, array, object, dan variabel, pakai `:namaProps`.
- Props bisa diberi `type`, `required`, dan `default`. Nilai bawaan array dan object harus berupa fungsi.
- Di `<script>`, props diakses lewat `props.nama`, tanpa `.value`.
- Props bersifat hanya-baca di komponen anak. Untuk memberi tahu induk, pakai emit.
