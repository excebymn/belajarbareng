---
jenis: murid
bab: vue
urutan: 19
judul: "Lifecycle Hooks"
deskripsi: "Memahami siklus hidup komponen dan memakai onMounted dan onUnmounted untuk menjalankan kode saat komponen muncul dan dibuang."
---

# Lifecycle Hooks

Pada materi ini kamu akan mempelajari: siklus hidup sebuah komponen, memakai `onMounted` untuk menjalankan kode saat komponen sudah tampil, `onUnmounted` untuk membersihkan saat komponen dibuang, mengakses elemen langsung dengan template ref, serta kapan hook lain dipakai.

Sebelum mulai, pastikan kamu sudah memahami: `ref` dan `watch` dari materi sebelumnya, `v-if` dari materi Tampilan Bersyarat dengan v-if, serta `setInterval` dan DOM dari bab JavaScript.

---

## 1. Siklus Hidup Komponen

Setiap komponen melewati beberapa tahap sejak dibuat sampai dibuang.

```text
dibuat → dipasang ke halaman → diperbarui (berkali-kali) → dibuang
```

| Tahap | Artinya |
|---|---|
| Dibuat | Komponen mulai dijalankan, `<script setup>` dieksekusi |
| Dipasang (*mounted*) | Komponen sudah tampil di halaman dan elemen DOM-nya sudah ada |
| Diperbarui (*updated*) | Data berubah, tampilan digambar ulang |
| Dibuang (*unmounted*) | Komponen dihapus dari halaman, misalnya karena `v-if` menjadi false |

**Lifecycle hook** adalah fungsi yang kita titipkan ke Vue agar dijalankan pada tahap tertentu.

> **Ringkasan:** Komponen punya tahap dibuat, dipasang, diperbarui, dan dibuang. Hook menjalankan kode pada tahap tertentu.

---

## 2. onMounted

`onMounted` menjalankan kode **sesaat setelah komponen tampil di halaman**. Ini hook yang paling sering dipakai.

#### Cara menulis

```vue
<script setup>
import { ref, onMounted } from 'vue'
// onMounted diimpor dari vue

const pesan = ref('Memuat...')

onMounted(() => {
  console.log('Komponen sudah tampil di halaman')
  pesan.value = 'Siap!'
  // kode di sini dijalankan sekali, setelah komponen dipasang
})
</script>

<template>
  <p>{{ pesan }}</p>
</template>
```

Kegunaan umum `onMounted`:

- Mengambil data dari server saat halaman dibuka (dibahas di materi Mengambil Data dari API di Vue).
- Membaca data dari `localStorage` lalu mengisinya ke `ref`.
- Mengakses elemen DOM langsung, karena baru sekarang elemennya ada.
- Memulai timer atau pendengar event.

Contoh membaca dari `localStorage` saat komponen dibuka:

```vue
<script setup>
import { ref, onMounted } from 'vue'

const nama = ref('')

onMounted(() => {
  nama.value = localStorage.getItem('nama') || 'Tamu'
  // isi nama dari penyimpanan browser saat komponen tampil
})
</script>
```

> **Ringkasan:** `onMounted(() => { ... })` menjalankan kode sekali setelah komponen tampil di halaman.

---

## 3. onUnmounted

`onUnmounted` menjalankan kode **saat komponen dibuang** dari halaman. Gunanya untuk **membersihkan**, yaitu menghentikan hal yang dimulai di `onMounted`.

Contoh paling jelas: jam digital yang memakai `setInterval`.

```vue
<!-- src/components/JamDigital.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const waktu = ref(new Date().toLocaleTimeString('id-ID'))
let timer = null
// timer disimpan di variabel biasa agar bisa dihentikan nanti

onMounted(() => {
  timer = setInterval(() => {
    waktu.value = new Date().toLocaleTimeString('id-ID')
    // memperbarui jam setiap detik
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
  // menghentikan timer saat komponen dibuang
})
</script>

<template>
  <p>Jam: {{ waktu }}</p>
</template>
```

Pakai komponen ini dengan `v-if` agar bisa dibuang dan dipasang kembali.

```vue
<script setup>
import { ref } from 'vue'
import JamDigital from './components/JamDigital.vue'

const tampil = ref(true)
</script>

<template>
  <button @click="tampil = !tampil">Tampilkan / Buang jam</button>
  <JamDigital v-if="tampil" />
</template>
```

Tanpa `clearInterval`, timer tetap berjalan di belakang layar walaupun komponennya sudah hilang. Timer yang menumpuk membuat halaman boros dan bisa menimbulkan error. Aturan praktisnya: **apa pun yang dimulai di `onMounted` dan terus berjalan (timer, pendengar event) harus dihentikan di `onUnmounted`.**

Pendengar event pada `window` mengikuti pola yang sama.

```js
function saatUkuranBerubah() {
  console.log(window.innerWidth)
}

onMounted(() => {
  window.addEventListener('resize', saatUkuranBerubah)
})

onUnmounted(() => {
  window.removeEventListener('resize', saatUkuranBerubah)
  // wajib dilepas, jika tidak pendengar menumpuk
})
```

> **Ringkasan:** `onUnmounted` dipakai untuk membersihkan timer dan pendengar event yang dimulai di `onMounted`.

---

## 4. Template Ref: Mengakses Elemen Langsung

Biasanya kita tidak menyentuh DOM di Vue. Namun kadang perlu, misalnya untuk memfokuskan input. Caranya dengan **template ref**.

```vue
<script setup>
import { ref, onMounted } from 'vue'

const inputNama = ref(null)
// nama variabel ini harus sama dengan nilai atribut ref di template

onMounted(() => {
  inputNama.value.focus()
  // inputNama.value adalah elemen input yang sebenarnya
})
</script>

<template>
  <input ref="inputNama" placeholder="Langsung aktif saat halaman dibuka">
  <!-- atribut ref menghubungkan elemen ini dengan variabel inputNama -->
</template>
```

Aturan penting:

- Isi `ref(null)` di awal, karena elemen belum ada saat `<script>` dijalankan.
- Nama variabel harus sama persis dengan teks di atribut `ref="..."`.
- Elemen baru tersedia **setelah `onMounted`**. Mengaksesnya sebelum itu menghasilkan `null`.
- Jika elemen berada dalam `v-if` yang false, nilainya juga `null`.

Hampir semua kebutuhan lain bisa diselesaikan dengan data reaktif, tanpa menyentuh elemen. Pakai template ref hanya untuk hal yang memang butuh DOM, seperti `focus()`.

> **Ringkasan:** `ref="nama"` di elemen dan `const nama = ref(null)` di script memberi akses ke elemen setelah komponen dipasang.

---

## 5. Hook Lain

Ada beberapa hook lain. Untuk pemula, `onMounted` dan `onUnmounted` hampir selalu cukup.

| Hook | Dijalankan saat |
|---|---|
| `onBeforeMount` | Sebelum komponen dipasang |
| `onMounted` | Setelah komponen dipasang |
| `onBeforeUpdate` | Sebelum tampilan diperbarui karena data berubah |
| `onUpdated` | Setelah tampilan diperbarui |
| `onBeforeUnmount` | Sebelum komponen dibuang |
| `onUnmounted` | Setelah komponen dibuang |

Jika yang kamu butuhkan adalah bereaksi terhadap **perubahan data tertentu**, pakai `watch`, bukan `onUpdated`.

---

## 6. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| Error `onMounted is not defined` | Lupa mengimpor | `import { ref, onMounted } from 'vue'` |
| Elemen `null` saat diakses | Mengakses template ref sebelum `onMounted` | Pindahkan kode ke dalam `onMounted` |
| Timer terus berjalan setelah komponen hilang | Lupa `clearInterval` di `onUnmounted` | Simpan id timer dan hentikan di `onUnmounted` |
| Template ref tidak terhubung | Nama variabel dan atribut `ref` berbeda | Samakan keduanya persis |
| Data tidak tampil saat halaman dibuka | Mengisi data di `onMounted` tanpa `ref`, atau lupa `.value` | Pakai `ref` dan tulis `.value` |

---

## 7. Latihan Singkat

1. Buat komponen yang menampilkan "Memuat..." lalu mengganti teksnya di `onMounted`.
2. Isi nama dari `localStorage` saat komponen dibuka, dengan nilai bawaan "Tamu".
3. Buat komponen `JamDigital` seperti bagian 3, lalu pakai dengan tombol `v-if` untuk menampilkan dan membuangnya.
4. Hapus `clearInterval` dari `onUnmounted`, buang komponen berkali-kali, lalu amati Console dan jelaskan masalahnya.
5. Buat input yang otomatis fokus saat halaman dibuka memakai template ref.
6. Buat komponen yang menampilkan lebar jendela dan memperbaruinya saat ukuran berubah, lengkap dengan pembersihan di `onUnmounted`.

---

## Rangkuman

- Komponen punya siklus hidup: dibuat, dipasang, diperbarui, dan dibuang. Lifecycle hook menjalankan kode pada tahap tertentu.
- `onMounted` menjalankan kode sekali setelah komponen tampil, cocok untuk mengambil data dan membaca `localStorage`.
- `onUnmounted` dipakai untuk membersihkan timer dan pendengar event yang dimulai di `onMounted`.
- Template ref (`ref="nama"` dan `const nama = ref(null)`) memberi akses ke elemen DOM setelah komponen dipasang.
- Untuk bereaksi terhadap perubahan data, pakai `watch`.
