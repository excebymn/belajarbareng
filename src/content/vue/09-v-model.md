---
jenis: murid
bab: vue
urutan: 9
judul: "Formulir dengan v-model"
deskripsi: "Menghubungkan input, textarea, checkbox, radio, dan select dengan data lewat v-model dua arah, serta modifier trim dan number."
---

# Formulir dengan v-model

Pada materi ini kamu akan mempelajari: cara menghubungkan isian formulir dengan data memakai `v-model`, penggunaannya pada input teks, textarea, checkbox, radio, dan select, modifier `.trim` dan `.number`, serta cara mengelola banyak isian dalam satu object.

Sebelum mulai, pastikan kamu sudah memahami: `ref` dari materi Data Reaktif dengan ref, `v-bind` dan `v-on` dari dua materi sebelumnya, serta elemen formulir dari bab HTML.

---

## 1. Masalah: Mengambil Isi Input

Dengan yang sudah kita pelajari, mengambil isi input butuh dua langkah: mengikat nilai ke input dengan `v-bind`, dan menangkap ketikan dengan `v-on`.

```vue
<script setup>
import { ref } from 'vue'

const nama = ref('')
</script>

<template>
  <input :value="nama" @input="nama = $event.target.value">
  <!-- data masuk ke input lewat :value, ketikan keluar lewat @input -->
  <p>Halo, {{ nama }}!</p>
</template>
```

Cara ini berhasil, tetapi panjang. Untuk setiap isian, kita harus menulis pasangan yang sama. Karena itu, Vue menyediakan `v-model`.

> **Ringkasan:** Menghubungkan input dengan data butuh `:value` dan `@input` sekaligus. `v-model` meringkasnya.

---

## 2. v-model

`v-model` menghubungkan isian formulir dan data secara **dua arah**: jika data berubah, isian ikut berubah, dan jika pengguna mengetik, data ikut berubah.

#### Cara menulis

```vue
<script setup>
import { ref } from 'vue'

const nama = ref('')
</script>

<template>
  <label for="nama">Nama</label>
  <input id="nama" type="text" v-model="nama">
  <!-- v-model menggantikan :value dan @input sekaligus -->
  <p>Halo, {{ nama }}!</p>
  <!-- teks berubah seiring kamu mengetik -->
  <button @click="nama = ''">Kosongkan</button>
  <!-- mengubah data, input ikut kosong -->
</template>
```

Dua arah itulah kekuatan `v-model`. Tombol "Kosongkan" mengubah data, dan isian di layar ikut dikosongkan tanpa kode tambahan.

> **Catatan:** `v-model` mengabaikan atribut `value`, `checked`, dan `selected` yang ditulis di HTML. Nilai awal ditentukan dari data, yaitu isi `ref(...)`.

> **Ringkasan:** `v-model="data"` menghubungkan isian dan data dua arah.

---

## 3. v-model pada Berbagai Isian

### 3.a Teks dan textarea

```vue
<script setup>
import { ref } from 'vue'

const email = ref('')
const pesan = ref('')
</script>

<template>
  <input type="email" v-model="email" placeholder="contoh@email.com">
  <textarea v-model="pesan" rows="3"></textarea>
  <!-- pada textarea, jangan menulis {{ pesan }} di dalamnya; pakai v-model -->
</template>
```

### 3.b Checkbox tunggal

Satu checkbox terhubung ke data **boolean**.

```vue
<script setup>
import { ref } from 'vue'

const setuju = ref(false)
</script>

<template>
  <label><input type="checkbox" v-model="setuju"> Saya setuju</label>
  <p v-if="setuju">Terima kasih!</p>
  <button :disabled="!setuju">Daftar</button>
  <!-- tombol baru aktif setelah kotak dicentang -->
</template>
```

### 3.c Checkbox banyak

Beberapa checkbox yang memakai `v-model` ke **array yang sama** akan mengumpulkan nilai yang dicentang.

```vue
<script setup>
import { ref } from 'vue'

const hobi = ref([])
// array kosong; isinya bertambah saat kotak dicentang
</script>

<template>
  <label><input type="checkbox" value="ngoding" v-model="hobi"> Ngoding</label>
  <label><input type="checkbox" value="musik" v-model="hobi"> Musik</label>
  <label><input type="checkbox" value="olahraga" v-model="hobi"> Olahraga</label>
  <p>Hobi: {{ hobi }}</p>
  <!-- tampil misalnya: [ "ngoding", "musik" ] -->
</template>
```

Atribut `value` pada tiap checkbox berisi nilai yang dimasukkan ke array saat dicentang.

### 3.d Radio

Radio memakai `v-model` ke **satu data** yang sama. Nilai radio yang dipilih disimpan di sana.

```vue
<script setup>
import { ref } from 'vue'

const jenjang = ref('sma')
// nilai awal: radio "sma" terpilih
</script>

<template>
  <label><input type="radio" value="smp" v-model="jenjang"> SMP</label>
  <label><input type="radio" value="sma" v-model="jenjang"> SMA</label>
  <label><input type="radio" value="kuliah" v-model="jenjang"> Kuliah</label>
  <p>Jenjang: {{ jenjang }}</p>
</template>
```

Dengan `v-model`, atribut `name` pada radio tidak wajib untuk mengelompokkan pilihan. Namun tetap bagus ditulis bila formulir akan dikirim dengan cara HTML biasa.

### 3.e Select

```vue
<script setup>
import { ref } from 'vue'

const kota = ref('')
</script>

<template>
  <select v-model="kota">
    <option value="">-- Pilih kota --</option>
    <option value="surabaya">Surabaya</option>
    <option value="malang">Malang</option>
    <option value="jakarta">Jakarta</option>
  </select>
  <!-- v-model dipasang di select, bukan di option -->
  <p>Kota: {{ kota }}</p>
</template>
```

> **Ringkasan:** Teks dan textarea menyimpan teks, satu checkbox menyimpan boolean, banyak checkbox menyimpan array, radio dan select menyimpan satu nilai.

---

## 4. Modifier v-model

| Modifier | Fungsi |
|---|---|
| `.trim` | Membuang spasi di awal dan akhir teks |
| `.number` | Mengubah isian menjadi angka |
| `.lazy` | Memperbarui data saat selesai mengisi (event `change`), bukan setiap ketikan |

```vue
<input v-model.trim="nama">
<!-- "  Budi  " tersimpan sebagai "Budi" -->
<input v-model.number="umur" type="number">
<!-- tersimpan sebagai angka, bukan teks "16" -->
```

Tanpa `.number`, isian angka tetap disimpan sebagai teks. Hal ini bisa menimbulkan hasil yang aneh saat dijumlahkan, seperti yang dibahas di bab JavaScript: `"16" + 1` menghasilkan `"161"`.

---

## 5. Banyak Isian dalam Satu Object

Untuk formulir dengan banyak isian, lebih rapi menyimpan semuanya dalam satu object.

```vue
<script setup>
import { ref } from 'vue'

const form = ref({
  nama: '',
  email: '',
  jenjang: 'sma',
  setuju: false
})
// satu ref berisi semua isian

function kirim() {
  console.log('Data terkirim:', form.value)
  // di sini data nanti dikirim ke server, dibahas di materi Mengambil Data dari API di Vue
}
</script>

<template>
  <form @submit.prevent="kirim">
    <input v-model.trim="form.nama" placeholder="Nama" required>
    <input v-model.trim="form.email" type="email" placeholder="Email" required>
    <select v-model="form.jenjang">
      <option value="smp">SMP</option>
      <option value="sma">SMA</option>
    </select>
    <label><input type="checkbox" v-model="form.setuju"> Saya setuju</label>
    <button type="submit" :disabled="!form.setuju">Daftar</button>
  </form>
  <pre>{{ form }}</pre>
  <!-- pre menampilkan isi object, berguna untuk melihat data saat belajar -->
</template>
```

`@submit.prevent` mencegah halaman dimuat ulang, dan validasi bawaan HTML seperti `required` tetap bekerja sebelum `kirim` dipanggil.

> **Ringkasan:** Simpan banyak isian dalam satu `ref` berisi object, lalu hubungkan tiap isian dengan `v-model="form.namaIsian"`.

---

## 6. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| Isian tidak berubah saat diketik | Variabel biasa, bukan `ref` | Buat dengan `ref(...)` |
| Nilai awal di atribut `value` diabaikan | `v-model` mengambil nilai awal dari data | Isi nilai awal di `ref('...')` |
| Beberapa checkbox saling mengikuti | Checkbox berbagi data boolean yang sama | Pakai array untuk checkbox banyak |
| Hasil penjumlahan menjadi gabungan teks | Isian angka tersimpan sebagai teks | Tambahkan `.number` atau `type="number"` dengan `.number` |
| `v-model` di textarea tidak jalan | Menulis `{{ pesan }}` di dalam tag textarea | Hapus isinya, pakai `v-model` |

---

## 7. Latihan Singkat

1. Buat input nama yang menampilkan sapaan "Halo, [nama]!" secara langsung saat mengetik.
2. Tambahkan tombol yang mengosongkan input, lalu amati bahwa input ikut kosong.
3. Buat checkbox "Saya setuju" yang mengaktifkan tombol kirim hanya saat dicentang.
4. Buat tiga checkbox hobi yang terhubung ke satu array, lalu tampilkan isi arraynya.
5. Buat radio jenjang dan select kota, lalu tampilkan pilihan keduanya.
6. Buat formulir pendaftaran dengan semua isian disimpan dalam satu object `form`, tampilkan isinya di `<pre>`, lalu tangani pengiriman dengan `@submit.prevent`.

---

## Rangkuman

- `v-model` menghubungkan isian formulir dan data secara dua arah, menggantikan pasangan `:value` dan `@input`.
- Teks dan textarea menyimpan teks, satu checkbox menyimpan boolean, banyak checkbox menyimpan array, radio dan select menyimpan satu nilai.
- Modifier `.trim`, `.number`, dan `.lazy` mengatur cara data diperbarui.
- Banyak isian bisa disimpan dalam satu `ref` berisi object.
- Kombinasikan `@submit.prevent` dengan `v-model` untuk menangani formulir tanpa memuat ulang halaman.
