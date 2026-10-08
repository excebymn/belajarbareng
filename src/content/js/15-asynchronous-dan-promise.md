---
jenis: murid
bab: js
urutan: 15
judul: "Asynchronous: Promise dan async/await"
deskripsi: "Memahami kode yang berjalan tanpa menunggu, setTimeout, Promise dengan then dan catch, async/await, penanganan error, dan Promise.all."
---

# Asynchronous: Promise dan async/await

Pada materi ini kamu akan mempelajari: perbedaan kode sinkron dan asinkron, `setTimeout` dan `setInterval`, konsep Promise (`then`, `catch`, `finally`), cara menulis kode asinkron yang rapi dengan `async` dan `await`, penanganan error dengan `try...catch`, serta menjalankan beberapa pekerjaan sekaligus dengan `Promise.all`.

Sebelum mulai, pastikan kamu sudah memahami: fungsi, arrow function, callback, serta `try...catch` dari materi JSON dan localStorage.

---

## 1. Sinkron dan Asinkron

Sejauh ini, kode kita berjalan **sinkron**: baris demi baris, dan baris berikutnya menunggu baris sebelumnya selesai.

Tetapi ada pekerjaan yang butuh waktu: mengambil data dari internet, menunggu beberapa detik, atau membaca file. Jika program berhenti menunggu, halaman akan **membeku** dan pengguna tidak bisa mengklik apa pun.

Solusinya adalah kode **asinkron**: pekerjaan yang lama dimulai, lalu program **melanjutkan ke baris berikutnya** tanpa menunggu. Saat pekerjaan itu selesai, hasilnya diurus kemudian.

Analogi restoran:

| Sinkron | Asinkron |
|---|---|
| Pelayan menunggu masakan matang di dapur, baru melayani pelanggan lain | Pelayan menyerahkan pesanan ke dapur, lalu melayani pelanggan lain sambil menunggu dipanggil |

### 1.a Contoh: setTimeout

`setTimeout` menjalankan sebuah fungsi setelah jeda waktu (dalam milidetik). Ini contoh paling sederhana dari kode asinkron.

```js
console.log('1. Mulai')

setTimeout(() => {
  console.log('2. Muncul setelah 2 detik')
}, 2000)

console.log('3. Selesai')
// urutan tampil: 1, 3, lalu 2
```

Perhatikan: pesan "3" tampil **sebelum** pesan "2". Program tidak berhenti menunggu 2 detik, melainkan terus berjalan, lalu kembali mengerjakan callback ketika waktunya tiba.

### 1.b setInterval

`setInterval` menjalankan fungsi **berulang** setiap jeda waktu tertentu, sampai dihentikan dengan `clearInterval`.

```js
let hitung = 0

const pewaktu = setInterval(() => {
  hitung++
  console.log('Detik ke-' + hitung)
  if (hitung === 3) {
    clearInterval(pewaktu)
    // menghentikan perulangan setelah tiga kali
  }
}, 1000)
```

> **Ringkasan:** Kode asinkron tidak membuat program menunggu. `setTimeout` menjalankan sesuatu sekali setelah jeda, dan `setInterval` menjalankannya berulang.

---

## 2. Masalah dengan Callback Bersarang

Cara klasik menangani pekerjaan asinkron adalah callback. Jika beberapa pekerjaan harus berurutan, callback saling bersarang.

```js
setTimeout(() => {
  console.log('Langkah 1')
  setTimeout(() => {
    console.log('Langkah 2')
    setTimeout(() => {
      console.log('Langkah 3')
    }, 1000)
  }, 1000)
}, 1000)
```

Semakin banyak langkah, semakin menjorok ke kanan dan semakin sulit dibaca (dikenal sebagai *callback hell*). **Promise** dan **async/await** diciptakan untuk mengatasinya.

---

## 3. Promise

**Promise** adalah object yang mewakili hasil dari pekerjaan asinkron yang **akan selesai nanti**. Ibaratnya sebuah janji: "aku akan memberimu hasilnya, atau memberi tahu kalau gagal".

Sebuah Promise berada di salah satu dari tiga keadaan:

| Keadaan | Artinya |
|---|---|
| `pending` | Sedang berjalan, belum ada hasil |
| `fulfilled` | Berhasil, hasil tersedia |
| `rejected` | Gagal, ada alasan kegagalan |

### 3.a Membuat Promise

Kamu jarang membuat Promise sendiri (biasanya kita memakai fungsi yang sudah mengembalikan Promise), tetapi membuatnya sekali membantu memahami cara kerjanya.

```js
function tunggu(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
    // resolve dipanggil setelah ms milidetik, menandai Promise berhasil
  })
}

function bagiAngka(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error('Tidak bisa dibagi nol'))
      // reject menandai Promise gagal beserta alasannya
    } else {
      resolve(a / b)
      // resolve menandai Promise berhasil beserta hasilnya
    }
  })
}
```

### 3.b then, catch, finally

Hasil Promise dipakai dengan method berikut.

```js
bagiAngka(10, 2)
  .then(hasil => {
    console.log('Hasil:', hasil)
    // berjalan jika berhasil: Hasil: 5
  })
  .catch(error => {
    console.log('Gagal:', error.message)
    // berjalan jika gagal
  })
  .finally(() => {
    console.log('Selesai, berhasil maupun gagal')
    // selalu berjalan
  })

bagiAngka(10, 0)
  .then(hasil => console.log(hasil))
  .catch(error => console.log('Gagal:', error.message))
// Gagal: Tidak bisa dibagi nol
```

`then` bisa disambung berurutan (*chaining*) karena setiap `then` mengembalikan Promise baru.

```js
tunggu(1000)
  .then(() => {
    console.log('Langkah 1')
    return tunggu(1000)
  })
  .then(() => {
    console.log('Langkah 2')
    return tunggu(1000)
  })
  .then(() => {
    console.log('Langkah 3')
  })
// rapi, lurus ke bawah, tidak menjorok seperti callback bersarang
```

> **Ringkasan:** Promise mewakili hasil yang akan datang, dengan keadaan `pending`, `fulfilled`, atau `rejected`. `then` menangani keberhasilan, `catch` kegagalan, dan `finally` selalu dijalankan.

---

## 4. async dan await

`async` dan `await` membuat kode asinkron **tampak seperti kode biasa yang berjalan berurutan**. Di balik layar, keduanya tetap memakai Promise.

#### Cara menulis

```js
async function jalankan() {
  console.log('Mulai')
  await tunggu(1000)
  // await menunggu Promise selesai sebelum lanjut ke baris berikutnya
  console.log('Satu detik berlalu')
  await tunggu(1000)
  console.log('Dua detik berlalu')
  return 'Selesai'
}

jalankan().then(hasil => console.log(hasil))
// fungsi async selalu mengembalikan Promise
```

Aturannya:

- Tulis `async` di depan fungsi yang di dalamnya memakai `await`.
- `await` hanya boleh dipakai di dalam fungsi `async` (atau di level atas modul).
- `await` menunggu Promise dan memberikan **hasilnya** langsung.
- "Menunggu" di sini hanya berlaku di dalam fungsi tersebut. Bagian lain dari program tetap berjalan.

```js
async function tampilkanHasil() {
  const hasil = await bagiAngka(10, 2)
  // hasil langsung berisi 5, tanpa then
  console.log('Hasil:', hasil)
}
tampilkanHasil()
```

Arrow function juga bisa `async`.

```js
const ambilData = async () => {
  await tunggu(500)
  return 'data'
}
```

Bandingkan versi `then` dan versi `await` dari urutan tiga langkah di atas. Versi `await` terbaca seperti resep biasa, dan itulah alasan gaya ini yang paling dipakai sekarang.

> **Ringkasan:** `async function` mengembalikan Promise, dan `await` menunggu sebuah Promise selesai lalu memberikan hasilnya, sehingga kode asinkron terbaca berurutan.

---

## 5. Menangani Error

Jika sebuah Promise gagal (`reject`), `await` akan **melempar error**. Tangani dengan `try...catch`, sama seperti pada materi JSON.

```js
async function hitung() {
  try {
    const hasil = await bagiAngka(10, 0)
    console.log('Hasil:', hasil)
    // tidak dijalankan karena Promise gagal
  } catch (error) {
    console.log('Terjadi masalah:', error.message)
    // Terjadi masalah: Tidak bisa dibagi nol
  } finally {
    console.log('Selesai')
  }
}
hitung()
```

Kebiasaan penting: **selalu tangani error** pada pekerjaan asinkron. Jika tidak, kegagalan tidak terlihat, dan program bisa berjalan dengan keadaan setengah rusak.

---

## 6. Beberapa Pekerjaan Sekaligus

Jika beberapa pekerjaan saling tidak bergantung, jalankan **bersamaan** agar lebih cepat.

```js
async function lambat() {
  await tunggu(1000)
  await tunggu(1000)
  // total sekitar 2 detik, karena berurutan
}

async function cepat() {
  await Promise.all([tunggu(1000), tunggu(1000)])
  // total sekitar 1 detik, karena berjalan bersamaan
}
```

`Promise.all` menerima array Promise dan baru selesai ketika **semuanya** selesai. Hasilnya berupa array berisi hasil masing-masing, dengan urutan sama seperti urutan masuknya.

```js
async function ambilDua() {
  const [a, b] = await Promise.all([
    bagiAngka(10, 2),
    bagiAngka(20, 4)
  ])
  console.log(a, b)
  // 5 5
}
```

Jika salah satu gagal, `Promise.all` ikut gagal. Karena itu, bungkus dengan `try...catch`.

> **Catatan:** Hindari `await` di dalam `forEach`, karena `forEach` tidak menunggu. Gunakan `for...of` untuk berurutan, atau `Promise.all` dengan `map` untuk bersamaan.

> **Ringkasan:** `Promise.all([...])` menjalankan beberapa Promise bersamaan dan menunggu semuanya selesai.

---

## 7. Hubungan dengan Materi Berikutnya

Hampir semua pekerjaan asinkron di web adalah **berkomunikasi dengan server**, yaitu mengirim request dan menunggu response. Fungsi `fetch`, yang dibahas di materi berikutnya, mengembalikan Promise. Dengan `async` dan `await`, kamu akan menulis pengambilan data dari server dengan rapi.

---

## 8. Latihan Singkat

1. Tampilkan pesan setelah 3 detik dengan `setTimeout`.
2. Buat penghitung mundur dari 5 ke 0 dengan `setInterval`, lalu hentikan dengan `clearInterval`.
3. Tulis fungsi `tunggu(ms)` yang mengembalikan Promise, lalu pakai dengan `await`.
4. Buat fungsi Promise yang berhasil jika angka genap dan gagal jika ganjil, lalu tangani dengan `then` dan `catch`.
5. Ubah latihan nomor 4 menjadi versi `async/await` dengan `try...catch`.
6. Jalankan tiga `tunggu(1000)` bersamaan dengan `Promise.all` dan ukur waktunya.

---

## Rangkuman

- Kode asinkron memulai pekerjaan yang lama lalu terus berjalan tanpa menunggu, sehingga halaman tidak membeku.
- `setTimeout` menjalankan sesuatu setelah jeda dan `setInterval` menjalankannya berulang sampai dihentikan dengan `clearInterval`.
- Promise mewakili hasil yang akan datang (`pending`, `fulfilled`, `rejected`) dan ditangani dengan `then`, `catch`, dan `finally`.
- `async` membuat fungsi mengembalikan Promise, dan `await` menunggu Promise selesai sehingga kode terbaca berurutan.
- Tangani kegagalan dengan `try...catch`, dan jalankan pekerjaan yang tidak saling bergantung bersamaan dengan `Promise.all`.
