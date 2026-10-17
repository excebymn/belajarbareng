---
jenis: murid
bab: vue
urutan: 6
judul: "Object dan Array Reaktif"
deskripsi: "Menyimpan object dan array sebagai data reaktif dengan ref dan reactive, mengubah isinya, serta memahami perbedaan keduanya."
---

# Object dan Array Reaktif

Pada materi ini kamu akan mempelajari: cara menyimpan object dan array sebagai data reaktif dengan `ref`, mengubah isinya dengan aman, mengenal `reactive` beserta batasannya, serta memilih antara `ref` dan `reactive`.

Sebelum mulai, pastikan kamu sudah memahami: `ref` dari materi Data Reaktif dengan ref, serta array, method array, dan object dari bab JavaScript.

---

## 1. Object dengan ref

`ref` bisa menyimpan object. Isi object itu ikut menjadi reaktif sampai ke properti terdalamnya.

#### Cara menulis

```vue
<script setup>
import { ref } from 'vue'

const profil = ref({
  nama: 'Budi',
  kota: 'Surabaya'
})
// object di dalam ref

function pindahKota() {
  profil.value.kota = 'Malang'
  // di script: .value dulu, baru properti
}
</script>

<template>
  <p>{{ profil.nama }} tinggal di {{ profil.kota }}</p>
  <!-- di template: langsung profil.kota, tanpa .value -->
  <button @click="pindahKota">Pindah ke Malang</button>
</template>
```

Aturan `.value` sama seperti sebelumnya: di `<script>` kita menulis `profil.value.kota`, sedangkan di template cukup `profil.kota`.

Mengganti seluruh object juga berfungsi dan tampilan ikut diperbarui.

```js
profil.value = { nama: 'Sari', kota: 'Jakarta' }
// mengganti seluruh isi object
```

> **Ringkasan:** `ref({ ... })` membuat object reaktif. Ubah isinya lewat `profil.value.properti`.

---

## 2. Array dengan ref

Array juga disimpan dengan `ref`. Method array dari bab JavaScript bisa dipakai, dan tampilan akan mengikuti.

#### Cara menulis

```vue
<script setup>
import { ref } from 'vue'

const buah = ref(['Apel', 'Jeruk'])

function tambah() {
  buah.value.push('Mangga')
  // push menambah item di akhir, tampilan ikut berubah
}

function hapusPertama() {
  buah.value.shift()
  // shift menghapus item pertama
}
</script>

<template>
  <p>Jumlah buah: {{ buah.length }}</p>
  <p>Buah pertama: {{ buah[0] }}</p>
  <button @click="tambah">Tambah</button>
  <button @click="hapusPertama">Hapus pertama</button>
</template>
```

Cara menampilkan seluruh isi array sebagai daftar dibahas di materi Menampilkan Daftar dengan v-for.

Method yang mengubah array langsung (seperti `push`, `pop`, `shift`, `splice`, dan `sort`) tampilannya terbarui otomatis. Method yang menghasilkan array baru (seperti `filter` dan `map`) tidak mengubah array lama, jadi hasilnya harus dimasukkan kembali ke `.value`.

```js
buah.value = buah.value.filter(item => item !== 'Apel')
// filter menghasilkan array baru, lalu array lama diganti dengannya
```

Cara ini sering dipakai untuk menghapus item dari daftar.

> **Catatan:** Menulis `buah = buah.filter(...)` salah. Itu mengganti variabel `ref`-nya, bukan isinya, dan `const` akan menolaknya. Selalu tulis `buah.value = ...`.

> **Ringkasan:** `ref([ ... ])` membuat array reaktif. Method yang mengubah array langsung bekerja otomatis, sedangkan hasil `filter` dan `map` harus disimpan kembali ke `.value`.

---

## 3. Array Berisi Object

Kombinasi yang paling sering dipakai: array berisi banyak object, seperti daftar tugas.

```vue
<script setup>
import { ref } from 'vue'

const tugas = ref([
  { id: 1, teks: 'Belajar Vue', selesai: false },
  { id: 2, teks: 'Mengerjakan latihan', selesai: true }
])

function tambah() {
  tugas.value.push({ id: Date.now(), teks: 'Tugas baru', selesai: false })
  // Date.now() menghasilkan angka unik, dipakai sebagai id sementara
}

function ubahStatus() {
  tugas.value[0].selesai = !tugas.value[0].selesai
  // mengubah properti dari object di dalam array
}
</script>

<template>
  <p>Jumlah tugas: {{ tugas.length }}</p>
  <button @click="tambah">Tambah tugas</button>
  <button @click="ubahStatus">Ubah status tugas pertama</button>
</template>
```

Perubahan pada object di dalam array, seperti `tugas.value[0].selesai`, juga terpantau. Vue memantau data sampai ke lapisan terdalam.

> **Ringkasan:** Array berisi object bisa diubah di semua lapisan, dan tampilan selalu mengikuti.

---

## 4. reactive: Alternatif untuk Object

Selain `ref`, Vue punya `reactive` yang khusus untuk object dan array.

```vue
<script setup>
import { reactive } from 'vue'

const profil = reactive({
  nama: 'Budi',
  kota: 'Surabaya'
})

function pindahKota() {
  profil.kota = 'Malang'
  // tanpa .value
}
</script>
```

Dengan `reactive`, kita tidak perlu menulis `.value`. Namun, ia punya batasan yang sering menjebak.

| | `ref` | `reactive` |
|---|---|---|
| Jenis data | Semua jenis (angka, teks, boolean, object, array) | Hanya object dan array |
| Akses di script | Lewat `.value` | Langsung |
| Mengganti seluruh isi | Boleh: `profil.value = { ... }` | **Tidak boleh**: `profil = { ... }` memutus reaktivitas |
| Dipecah dengan destructuring | Aman bila dipakai dengan benar | **Memutus reaktivitas** |

Contoh jebakan pada `reactive`:

```js
const profil = reactive({ nama: 'Budi' })

profil = { nama: 'Sari' }
// salah: const tidak mengizinkan, dan kalaupun diganti dengan let, reaktivitas hilang

const { nama } = profil
// nama sekarang hanya salinan teks biasa, tidak lagi terpantau
```

Karena batasan itu, di kursus ini kita memakai **`ref` untuk semua jenis data**, termasuk object dan array. Cukup satu cara yang konsisten, dan aman dari jebakan di atas. Kamu tetap perlu mengenal `reactive`, karena akan menemukannya di tutorial dan kode orang lain.

> **Ringkasan:** `reactive` khusus object dan array, tanpa `.value`, tetapi punya batasan. Kursus ini memakai `ref` untuk semuanya.

---

## 5. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| Tampilan tidak berubah setelah `filter` | Hasil `filter` tidak disimpan | `daftar.value = daftar.value.filter(...)` |
| Error `Cannot read properties of undefined` | Lupa `.value` di script, misalnya `profil.kota` | Tulis `profil.value.kota` |
| `Assignment to constant variable` | Mengganti ref langsung: `daftar = [...]` | Tulis `daftar.value = [...]` |
| Data tidak reaktif setelah dipecah | Destructuring pada `reactive` | Pakai `ref`, atau akses lewat nama object |

---

## 6. Latihan Singkat

1. Buat `ref` berisi object `{ nama, umur }`, lalu tampilkan di template dan tambahkan tombol yang menambah umur.
2. Buat `ref` berisi array nama teman, lalu tambahkan tombol yang menambah teman baru dengan `push`.
3. Tambahkan tombol yang menghapus teman pertama dengan `shift`, dan tombol yang menghapus teman bernama tertentu dengan `filter`.
4. Buat array berisi tiga object tugas, lalu tampilkan jumlah tugas dan tambahkan tombol yang mengubah status tugas pertama.
5. Tulis ulang latihan nomor 1 memakai `reactive`, lalu bandingkan penulisannya dengan versi `ref`.

---

## Rangkuman

- `ref` bisa menyimpan object dan array, dan isinya reaktif sampai lapisan terdalam.
- Di script, ubah isi lewat `data.value...`. Di template, tulis tanpa `.value`.
- Method yang mengubah array langsung (`push`, `shift`, dan sebagainya) bekerja otomatis, sedangkan hasil `filter` dan `map` disimpan kembali ke `.value`.
- `reactive` khusus object dan array tanpa `.value`, tetapi memutus reaktivitas saat diganti total atau di-destructuring.
- Kursus ini memakai `ref` untuk semua jenis data.
