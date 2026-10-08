---
jenis: murid
bab: js
urutan: 4
judul: "Kondisi"
deskripsi: "Mengambil keputusan dalam kode dengan if, else if, else, switch, operator ternary, serta memahami nilai truthy dan falsy."
---

# Kondisi

Pada materi ini kamu akan mempelajari: cara mengambil keputusan dengan `if`, `else if`, dan `else`, nilai truthy dan falsy, `switch`, operator ternary, serta cara menulis kondisi yang rapi.

Sebelum mulai, pastikan kamu sudah memahami: operator perbandingan dan logika dari materi Operator.

---

## 1. if, else if, else

**Kondisi** membuat program menjalankan bagian kode yang berbeda tergantung situasi.

#### Cara menulis

```js
const nilai = 78

if (nilai >= 80) {
  console.log('Sangat baik')
  // dijalankan hanya jika nilai >= 80
} else if (nilai >= 60) {
  console.log('Cukup')
  // dijalankan jika syarat pertama salah, tetapi nilai >= 60
} else {
  console.log('Perlu belajar lagi')
  // dijalankan jika semua syarat di atas salah
}
```

Hasil: `Cukup`.

Aturan penting:

- Kondisi ditulis di dalam tanda kurung `( )`, dan isinya ditulis di dalam kurung kurawal `{ }`.
- Pemeriksaan berjalan **dari atas ke bawah**. Begitu satu syarat terpenuhi, sisanya dilewati.
- `else if` dan `else` bersifat opsional. `else` tidak punya kondisi.
- Satu `if` bisa tanpa `else`.

```js
const umur = 17
if (umur >= 17) {
  console.log('Boleh membuat KTP')
}
// tanpa else: jika syarat tidak terpenuhi, tidak terjadi apa-apa
```

Karena pemeriksaan berurutan, **urutan syarat penting**. Tulis syarat yang paling spesifik lebih dulu.

```js
const nilai = 95

if (nilai >= 60) {
  console.log('Cukup')
  // salah susunan: nilai 95 berhenti di sini
} else if (nilai >= 80) {
  console.log('Sangat baik')
  // tidak pernah tercapai
}
```

> **Ringkasan:** `if` menjalankan kode jika syarat benar, `else if` memeriksa syarat lain, dan `else` menangani sisanya. Urutan pemeriksaan dari atas ke bawah.

---

## 2. Menggabungkan Syarat

Syarat bisa digabung dengan operator logika.

```js
const umur = 20
const punyaKtp = true

if (umur >= 17 && punyaKtp) {
  console.log('Boleh mendaftar')
}
// kedua syarat harus terpenuhi

const hari = 'Sabtu'
if (hari === 'Sabtu' || hari === 'Minggu') {
  console.log('Akhir pekan')
}
// salah satu syarat cukup

const sedangLogin = false
if (!sedangLogin) {
  console.log('Silakan masuk')
}
// ! membalik nilai: berjalan jika sedangLogin salah
```

Kondisi bersarang juga boleh, tetapi jangan terlalu dalam.

```js
if (umur >= 17) {
  if (punyaKtp) {
    console.log('Boleh mendaftar')
  }
}
// sama artinya dengan umur >= 17 && punyaKtp, tetapi lebih panjang
```

> **Catatan:** Kondisi `if (x = 5)` dengan satu tanda sama dengan **menetapkan** nilai, bukan membandingkan. Gunakan `===` untuk membandingkan.

---

## 3. Truthy dan Falsy

Di dalam kondisi, JavaScript tidak hanya menerima `true` dan `false`. Nilai lain dianggap "mirip benar" (**truthy**) atau "mirip salah" (**falsy**).

**Nilai falsy** (hanya enam, hafalkan):

| Nilai | Keterangan |
|---|---|
| `false` | Boolean salah |
| `0` | Angka nol |
| `''` | String kosong |
| `null` | Sengaja kosong |
| `undefined` | Belum diberi nilai |
| `NaN` | Bukan angka |

**Semua nilai selain itu adalah truthy**, termasuk `'0'`, `'false'`, `[]` (array kosong), dan `{}` (object kosong).

```js
const nama = ''

if (nama) {
  console.log('Halo, ' + nama)
} else {
  console.log('Nama belum diisi')
}
// nama kosong adalah falsy, sehingga bagian else yang berjalan
```

Pola ini sering dipakai untuk memeriksa "apakah ada nilainya".

```js
const daftar = []
if (daftar.length) {
  console.log('Ada isinya')
} else {
  console.log('Kosong')
}
// 0 adalah falsy, sehingga daftar kosong dianggap salah. Array kosong sendiri truthy, jadi periksa length-nya.
```

> **Ringkasan:** Hanya enam nilai falsy: `false`, `0`, `''`, `null`, `undefined`, dan `NaN`. Semua nilai lain truthy, termasuk array dan object kosong.

---

## 4. switch

`switch` cocok untuk memeriksa **satu nilai** terhadap banyak kemungkinan yang pasti.

#### Cara menulis

```js
const hari = 3
let namaHari

switch (hari) {
  case 1:
    namaHari = 'Senin'
    break
    // break menghentikan switch agar tidak lanjut ke case berikutnya
  case 2:
    namaHari = 'Selasa'
    break
  case 3:
    namaHari = 'Rabu'
    break
  default:
    namaHari = 'Tidak dikenal'
    // default berjalan jika tidak ada case yang cocok
}

console.log(namaHari)
// Rabu
```

Hal yang perlu diperhatikan:

- Tanpa `break`, eksekusi akan **jatuh** ke `case` berikutnya. Kadang ini disengaja (misalnya beberapa `case` berbagi satu hasil), tetapi biasanya terjadi karena lupa.
- `switch` memakai pembandingan `===`.

```js
const bulan = 2
switch (bulan) {
  case 12:
  case 1:
  case 2:
    console.log('Musim hujan')
    break
    // tiga case berbagi satu hasil karena tidak ada break di antaranya
}
```

Untuk rentang nilai (misalnya nilai 80 ke atas), `if` lebih cocok. Untuk nilai pasti, `switch` lebih rapi.

> **Ringkasan:** `switch` mencocokkan satu nilai dengan beberapa `case`. Jangan lupa `break` dan `default`.

---

## 5. Operator Ternary

**Ternary** adalah cara singkat menulis `if-else` yang menghasilkan sebuah nilai.

#### Cara menulis

```js
const umur = 20
const status = umur >= 17 ? 'Dewasa' : 'Belum dewasa'
// format: kondisi ? nilaiJikaBenar : nilaiJikaSalah
console.log(status)
// Dewasa
```

Sama artinya dengan:

```js
let status
if (umur >= 17) {
  status = 'Dewasa'
} else {
  status = 'Belum dewasa'
}
```

Ternary berguna untuk pilihan sederhana, termasuk di dalam template literal.

```js
const jumlah = 1
console.log(`Ada ${jumlah} ${jumlah === 1 ? 'item' : 'items'}`)
// Ada 1 item
```

Jangan menumpuk ternary di dalam ternary, karena sulit dibaca. Untuk kasus yang rumit, pakai `if`.

> **Ringkasan:** `kondisi ? nilaiBenar : nilaiSalah` adalah `if-else` singkat yang menghasilkan nilai. Pakai untuk pilihan sederhana saja.

---

## 6. Menulis Kondisi yang Rapi

### 6.a Keluar Lebih Awal

Alih-alih menyarangkan `if` dalam-dalam, tangani kasus tidak valid lebih dulu dan keluar. Teknik ini dipakai di dalam fungsi (dibahas di materi Fungsi).

```js
function sapa(nama) {
  if (!nama) {
    return 'Nama belum diisi'
    // kasus tidak valid ditangani dan fungsi berhenti di sini
  }
  return `Halo, ${nama}`
  // jalur utama tetap lurus dan mudah dibaca
}
```

### 6.b Hindari Perbandingan Boolean yang Berlebihan

```js
const aktif = true

if (aktif === true) { }
// berlebihan
if (aktif) { }
// cukup dan lebih bersih
```

---

## 7. Latihan Singkat

1. Buat program yang mengubah nilai angka menjadi huruf (A, B, C, D) dengan `if-else if`.
2. Periksa apakah sebuah angka genap atau ganjil, dan tampilkan dengan ternary.
3. Buat `switch` yang mengubah angka 1 sampai 7 menjadi nama hari.
4. Periksa apakah sebuah nama kosong memakai nilai falsy, lalu tampilkan `'Tamu'` jika kosong.
5. Coba nilai `0`, `''`, `[]`, dan `'0'` di dalam `if` untuk melihat mana yang truthy.

---

## Rangkuman

- `if`, `else if`, dan `else` menjalankan kode sesuai kondisi, diperiksa dari atas ke bawah.
- Syarat bisa digabung dengan `&&`, `||`, dan `!`. Pakai `===` untuk membandingkan, bukan `=`.
- Falsy hanya `false`, `0`, `''`, `null`, `undefined`, dan `NaN`. Semua nilai lain truthy.
- `switch` memeriksa satu nilai terhadap beberapa `case`, dengan `break` dan `default`.
- Operator ternary `kondisi ? benar : salah` adalah `if-else` singkat untuk pilihan sederhana.
