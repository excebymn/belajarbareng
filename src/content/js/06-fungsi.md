---
jenis: murid
bab: js
urutan: 6
judul: "Fungsi"
deskripsi: "Membuat dan memanggil fungsi, memakai parameter dan return, arrow function, ruang lingkup variabel, dan konsep callback."
---

# Fungsi

Pada materi ini kamu akan mempelajari: cara membuat dan memanggil fungsi, parameter dan nilai balik (`return`), nilai bawaan parameter, arrow function, ruang lingkup variabel (*scope*), serta konsep callback.

Sebelum mulai, pastikan kamu sudah memahami: variabel, kondisi, dan perulangan dari materi sebelumnya.

---

## 1. Apa itu Fungsi

**Fungsi** adalah blok kode yang diberi nama dan bisa dipanggil berulang kali. Fungsi mencegah kita menulis kode yang sama berkali-kali, dan membuat program lebih terstruktur.

Jika kamu pernah memakai Java atau C++, fungsi di JavaScript setara dengan *method* atau fungsi di sana, dengan perbedaan: tidak perlu menulis tipe parameter maupun tipe nilai balik.

---

## 2. Membuat dan Memanggil Fungsi

#### Cara menulis

```js
function sapa() {
  console.log('Halo, selamat datang!')
}
// membuat fungsi bernama sapa, tetapi belum dijalankan

sapa()
// memanggil fungsi, kodenya baru berjalan di sini
sapa()
// bisa dipanggil berulang kali
```

Dua tahap yang harus dibedakan:

| Tahap | Penulisan | Efek |
|---|---|---|
| Mendefinisikan | `function sapa() { ... }` | Hanya menyimpan kode, belum berjalan |
| Memanggil | `sapa()` | Menjalankan kode di dalam fungsi |

Tanda kurung `()` saat memanggil wajib ditulis. `sapa` tanpa kurung hanya merujuk pada fungsinya, tidak menjalankannya.

> **Ringkasan:** `function nama() { }` membuat fungsi, dan `nama()` memanggilnya.

---

## 3. Parameter dan Argumen

Fungsi bisa menerima data masukan lewat **parameter**.

```js
function sapa(nama) {
  console.log('Halo, ' + nama + '!')
}

sapa('Budi')
// Halo, Budi!
sapa('Sari')
// Halo, Sari!
```

Istilah yang sering tertukar:

| Istilah | Arti | Contoh |
|---|---|---|
| Parameter | Nama di definisi fungsi | `nama` pada `function sapa(nama)` |
| Argumen | Nilai yang dikirim saat memanggil | `'Budi'` pada `sapa('Budi')` |

Parameter boleh lebih dari satu, dipisah koma.

```js
function jumlahkan(a, b) {
  console.log(a + b)
}
jumlahkan(3, 4)
// 7
```

Jika argumen yang dikirim kurang dari parameter, parameter yang tidak terisi bernilai `undefined`. Jika berlebih, kelebihannya diabaikan.

### 3.a Nilai Bawaan Parameter

```js
function sapa(nama = 'Tamu') {
  console.log('Halo, ' + nama + '!')
}
sapa()
// Halo, Tamu!, karena tidak ada argumen, dipakai nilai bawaan
sapa('Budi')
// Halo, Budi!
```

> **Ringkasan:** Parameter menerima data masukan. Nilai bawaan (`nama = 'Tamu'`) dipakai jika argumen tidak dikirim.

---

## 4. Nilai Balik dengan return

Fungsi bisa **mengembalikan** hasil dengan `return`, sehingga hasilnya bisa dipakai di tempat lain.

```js
function jumlahkan(a, b) {
  return a + b
  // mengirim hasil keluar dari fungsi
}

const hasil = jumlahkan(3, 4)
// hasil bernilai 7
console.log(hasil)
console.log(jumlahkan(10, 20) * 2)
// 60, hasil fungsi bisa langsung dipakai dalam ekspresi
```

Poin penting tentang `return`:

- Begitu `return` dijalankan, **fungsi langsung berhenti**. Kode di bawahnya tidak dijalankan.
- Fungsi tanpa `return` mengembalikan `undefined`.
- Bedakan `console.log` dan `return`: `console.log` hanya **menampilkan** untuk dilihat manusia, sedangkan `return` **menyerahkan nilai** agar bisa dipakai kode lain.

```js
function cekUmur(umur) {
  if (umur < 0) {
    return 'Umur tidak valid'
    // fungsi berhenti di sini jika umur negatif
  }
  if (umur >= 17) {
    return 'Dewasa'
  }
  return 'Belum dewasa'
}

console.log(cekUmur(20))
// Dewasa
```

Pola mengembalikan lebih awal seperti ini membuat kode lurus dan mudah dibaca.

> **Ringkasan:** `return` menyerahkan hasil dan menghentikan fungsi. Berbeda dengan `console.log` yang hanya menampilkan.

---

## 5. Fungsi sebagai Nilai

Di JavaScript, fungsi adalah nilai biasa yang bisa disimpan di variabel dan dikirim ke fungsi lain.

### 5.a Function Expression

```js
const kali = function (a, b) {
  return a * b
}
console.log(kali(3, 4))
// 12
```

### 5.b Arrow Function

Cara penulisan lebih singkat dengan tanda panah `=>`. Sangat umum dipakai dalam JavaScript modern, termasuk di Vue.

```js
const kali = (a, b) => {
  return a * b
}
// bentuk lengkap

const kali2 = (a, b) => a * b
// bentuk singkat: tanpa kurung kurawal dan return, hasil ekspresi langsung dikembalikan

const kuadrat = x => x * x
// satu parameter boleh tanpa kurung

const sapa = () => console.log('Halo')
// tanpa parameter, kurung kosong wajib
```

| Bentuk | Contoh |
|---|---|
| Function declaration | `function kali(a, b) { return a * b }` |
| Function expression | `const kali = function (a, b) { return a * b }` |
| Arrow function | `const kali = (a, b) => a * b` |

Ketiganya menghasilkan fungsi yang bisa dipanggil dengan `kali(3, 4)`. Perbedaan halus di antara mereka akan kamu temui seiring berjalannya waktu. Untuk sekarang, gunakan `function` untuk fungsi utama dan arrow function untuk fungsi singkat.

> **Ringkasan:** Fungsi adalah nilai. Arrow function (`(a, b) => a + b`) adalah penulisan singkat yang sangat umum.

---

## 6. Scope (Ruang Lingkup)

**Scope** menentukan di mana sebuah variabel bisa dipakai.

```js
const salam = 'Halo'
// variabel global: bisa dipakai di mana saja

function tampilkan() {
  const nama = 'Budi'
  // variabel lokal: hanya ada di dalam fungsi ini
  console.log(salam + ', ' + nama)
}

tampilkan()
// Halo, Budi
console.log(nama)
// error: nama is not defined, karena nama hanya hidup di dalam fungsi
```

Variabel yang dibuat dengan `let` dan `const` juga terbatas pada **blok** `{ }` tempat ia dibuat.

```js
if (true) {
  const rahasia = 123
}
console.log(rahasia)
// error: rahasia hanya ada di dalam blok if
```

Aturan umum: fungsi bisa membaca variabel di **luar** tempatnya dibuat, tetapi bagian luar tidak bisa membaca variabel di **dalam** fungsi.

Praktik yang baik: buat variabel sedekat mungkin dengan tempat pemakaiannya, dan hindari terlalu banyak variabel global.

> **Ringkasan:** Variabel `let` dan `const` hanya hidup di dalam blok tempat dibuat. Fungsi bisa membaca variabel luar, tetapi luar tidak bisa membaca isi fungsi.

---

## 7. Callback

Karena fungsi adalah nilai, kita bisa mengirim fungsi sebagai **argumen** ke fungsi lain. Fungsi yang dikirim itu disebut **callback**.

```js
function ulangi(jumlah, aksi) {
  for (let i = 1; i <= jumlah; i++) {
    aksi(i)
    // memanggil fungsi yang dikirim sebagai argumen
  }
}

ulangi(3, function (nomor) {
  console.log('Putaran ' + nomor)
})
// menampilkan Putaran 1, Putaran 2, Putaran 3

ulangi(2, nomor => console.log('Ke-' + nomor))
// versi arrow function, hasil: Ke-1, Ke-2
```

Callback sangat sering dipakai di JavaScript, misalnya untuk menjalankan kode saat tombol diklik (materi Event) dan mengolah isi array (materi Method Array).

```js
setTimeout(() => {
  console.log('Muncul setelah 2 detik')
}, 2000)
// setTimeout menjalankan callback setelah jeda waktu (dalam milidetik)
```

> **Ringkasan:** Callback adalah fungsi yang dikirim sebagai argumen ke fungsi lain, untuk dijalankan di waktu yang tepat.

---

## 8. Latihan Singkat

1. Buat fungsi `luasPersegiPanjang(panjang, lebar)` yang mengembalikan luasnya.
2. Buat fungsi `apakahGenap(n)` yang mengembalikan `true` atau `false`.
3. Buat fungsi `sapa(nama)` dengan nilai bawaan `'Tamu'`.
4. Ubah fungsi nomor 1 menjadi arrow function satu baris.
5. Buat fungsi `ulangi(jumlah, aksi)` seperti di atas, lalu pakai untuk menampilkan tiga kalimat.

---

## Rangkuman

- Fungsi adalah blok kode bernama yang dibuat dengan `function nama() { }` dan dijalankan dengan `nama()`.
- Parameter menerima masukan, dan nilai bawaan bisa diberikan dengan `parameter = nilai`.
- `return` menyerahkan hasil dan menghentikan fungsi, berbeda dengan `console.log` yang hanya menampilkan.
- Arrow function `(a, b) => a + b` adalah penulisan singkat fungsi.
- Variabel `let` dan `const` hanya hidup di dalam blok tempat dibuat.
- Callback adalah fungsi yang dikirim sebagai argumen ke fungsi lain.
