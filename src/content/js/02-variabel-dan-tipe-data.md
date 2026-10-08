---
jenis: murid
bab: js
urutan: 2
judul: "Variabel dan Tipe Data"
deskripsi: "Menyimpan nilai dengan let dan const, mengenal tipe data string, number, boolean, null, dan undefined, template literal, serta konversi tipe."
---

# Variabel dan Tipe Data

Pada materi ini kamu akan mempelajari: cara membuat variabel dengan `let` dan `const`, aturan penamaan, tipe data dasar (`string`, `number`, `boolean`, `null`, `undefined`), `typeof`, template literal, method string yang sering dipakai, serta konversi antar tipe.

Sebelum mulai, pastikan kamu sudah memahami: cara menjalankan JavaScript dan memakai `console.log` dari materi Pengenalan JavaScript.

---

## 1. Variabel

**Variabel** adalah tempat menyimpan nilai agar bisa dipakai kembali.

### 1.a let dan const

Ada dua kata kunci yang dipakai untuk membuat variabel.

```js
let umur = 15
// let: nilai boleh diubah kemudian
umur = 16
// mengubah nilai variabel umur menjadi 16

const nama = 'Budi'
// const: nilai tidak boleh diganti setelah ditetapkan
// nama = 'Sari'   <- ini akan menimbulkan error
```

| | `let` | `const` |
|---|---|---|
| Nilai bisa diganti | Ya | Tidak |
| Wajib diisi saat dibuat | Tidak | Ya |
| Dipakai untuk | Nilai yang berubah (skor, penghitung) | Nilai yang tetap (nama, konfigurasi) |

**Aturan praktis:** mulai dengan `const`. Ganti menjadi `let` hanya jika kamu memang perlu mengubah nilainya. Dengan begitu, kode lebih mudah dipahami karena jelas mana nilai yang tetap.

### 1.b var (Gaya Lama)

Kamu akan menemukan `var` di kode lama dan contoh di internet. `var` masih berfungsi, tetapi punya perilaku ruang lingkup yang membingungkan. Di kursus ini kita **tidak memakai `var`**.

### 1.c Aturan Penamaan

- Boleh berisi huruf, angka, `_`, dan `$`, tetapi tidak boleh diawali angka.
- Tidak boleh sama dengan kata kunci bawaan seperti `let`, `const`, `if`, dan `for`.
- Huruf besar dan kecil dibedakan.
- Gunakan **camelCase**: huruf kecil di awal, huruf kapital di setiap kata berikutnya.

```js
let namaLengkap = 'Budi Santoso'
// camelCase: benar dan umum dipakai
let nilai1 = 90
// angka boleh asal tidak di awal
// let 1nilai = 90   <- salah, diawali angka
// let nama lengkap = 'x'   <- salah, ada spasi
```

Beri nama yang menjelaskan isinya: `jumlahSiswa` lebih baik daripada `x` atau `js`.

> **Ringkasan:** Pakai `const` untuk nilai tetap dan `let` untuk nilai yang berubah. Beri nama camelCase yang bermakna, dan hindari `var`.

---

## 2. Tipe Data

JavaScript menentukan tipe berdasarkan **nilainya**. Kamu tidak perlu menuliskan tipe di depan variabel, dan variabel yang sama boleh menyimpan tipe berbeda di waktu berbeda (selama dibuat dengan `let`).

### 2.a String

Teks, ditulis dengan tanda kutip tunggal atau ganda.

```js
const sapaan = 'Halo'
const nama = "Budi"
// kutip tunggal dan ganda sama saja, pilih satu gaya dan konsisten
const kalimat = 'Dia berkata "halo"'
// kutip lain boleh muncul di dalam teks
```

### 2.b Number

Angka, baik bulat maupun desimal. JavaScript hanya punya satu tipe angka (tidak ada pembedaan `int` dan `double`).

```js
const umur = 15
const harga = 19.99
const suhu = -5
```

Dua nilai khusus:

| Nilai | Arti | Contoh penyebab |
|---|---|---|
| `Infinity` | Tak terhingga | `1 / 0` |
| `NaN` | *Not a Number*, hasil perhitungan yang tidak valid | `'abc' * 2` |

### 2.c Boolean

Hanya dua nilai: `true` atau `false`. Dipakai untuk kondisi.

```js
const sudahLogin = true
const adalahAdmin = false
```

### 2.d null dan undefined

Dua nilai yang menyatakan "tidak ada nilai", dengan makna berbeda.

| | Arti | Siapa yang menetapkan |
|---|---|---|
| `undefined` | Variabel dibuat tetapi belum diberi nilai | Otomatis oleh JavaScript |
| `null` | Sengaja dikosongkan | Kamu sendiri |

```js
let alamat
console.log(alamat)
// undefined, karena belum diberi nilai

let pemenang = null
// sengaja kosong, nanti akan diisi
```

### 2.e Mengecek Tipe dengan typeof

```js
console.log(typeof 'Halo')
// string
console.log(typeof 42)
// number
console.log(typeof true)
// boolean
console.log(typeof undefined)
// undefined
console.log(typeof null)
// object (keanehan lama di JavaScript, bukan berarti null adalah object)
```

Tipe yang lebih kompleks seperti array dan object dibahas di materi tersendiri.

| Tipe | Contoh | Kegunaan |
|---|---|---|
| `string` | `'Halo'` | Teks |
| `number` | `42`, `3.14` | Angka |
| `boolean` | `true`, `false` | Benar atau salah |
| `undefined` | `undefined` | Belum diberi nilai |
| `null` | `null` | Sengaja kosong |

> **Ringkasan:** Tipe dasar adalah `string`, `number`, `boolean`, `undefined`, dan `null`. Tipe ditentukan oleh nilainya, dan dicek dengan `typeof`.

---

## 3. Bekerja dengan String

### 3.a Menggabungkan String

```js
const depan = 'Budi'
const belakang = 'Santoso'
console.log(depan + ' ' + belakang)
// Budi Santoso, digabung dengan operator +
```

### 3.b Template Literal

Cara yang lebih rapi: tulis dengan tanda **backtick** (`` ` ``, tombol di sebelah angka 1) dan sisipkan nilai dengan `${...}`.

```js
const nama = 'Budi'
const umur = 15
console.log(`Halo, nama saya ${nama}, umur ${umur} tahun.`)
// Halo, nama saya Budi, umur 15 tahun.
console.log(`Tahun depan umur saya ${umur + 1}.`)
// di dalam ${} boleh berisi ekspresi apa pun
```

Template literal juga boleh berisi beberapa baris.

```js
const surat = `Kepada Yth,
Bapak/Ibu Guru`
// baris baru ikut tersimpan
```

### 3.c Method String yang Sering Dipakai

```js
const teks = '  Belajar JavaScript  '

console.log(teks.length)
// 22, jumlah karakter termasuk spasi (length adalah properti, tanpa tanda kurung)
console.log(teks.trim())
// Belajar JavaScript, spasi di awal dan akhir dibuang
console.log(teks.toUpperCase())
// huruf kapital semua
console.log(teks.toLowerCase())
// huruf kecil semua
console.log(teks.includes('Java'))
// true, apakah teks mengandung kata Java
console.log(teks.trim().slice(0, 7))
// Belajar, mengambil karakter dari indeks 0 sampai sebelum 7
console.log(teks.trim().split(' '))
// ['Belajar', 'JavaScript'], memecah menjadi array
console.log(teks.replace('Belajar', 'Mengajar'))
// mengganti kemunculan pertama
```

Method pada string tidak mengubah string aslinya. Mereka mengembalikan string baru.

> **Ringkasan:** Gabungkan string dengan `+` atau (lebih rapi) template literal `` `...${nilai}...` ``. Method string seperti `trim`, `slice`, dan `includes` mengembalikan hasil baru.

---

## 4. Konversi Tipe

Kadang kita perlu mengubah satu tipe menjadi tipe lain, misalnya teks dari kolom isian (selalu berupa string) menjadi angka.

```js
console.log(Number('42'))
// 42, string menjadi number
console.log(Number('abc'))
// NaN, tidak bisa diubah
console.log(parseInt('42px'))
// 42, mengambil bilangan bulat dari awal teks
console.log(parseFloat('3.14abc'))
// 3.14
console.log(String(42))
// '42', number menjadi string
console.log(Boolean(0))
// false, angka 0 dianggap false
```

Perhatikan jebakan yang sering terjadi:

```js
console.log('5' + 3)
// '53', karena + dengan string berarti menggabungkan teks
console.log('5' - 3)
// 2, karena - memaksa string diubah menjadi angka
console.log(Number('5') + 3)
// 8, ubah dulu menjadi angka sebelum menjumlahkan
```

Jika sebuah hasil perhitungan menjadi `NaN` atau terlihat aneh, periksa dulu tipe datanya dengan `typeof`.

> **Catatan:** Nilai yang dibaca dari isian formulir (`input.value`) selalu berupa **string**, bahkan jika pengguna mengetik angka. Ubah dengan `Number()` sebelum menghitung.

> **Ringkasan:** `Number()`, `parseInt()`, `parseFloat()`, dan `String()` mengubah tipe. Operator `+` pada string menggabungkan teks, bukan menjumlahkan.

---

## 5. Latihan Singkat

1. Buat variabel `const` untuk namamu dan `let` untuk skor, lalu ubah nilai skor.
2. Tampilkan kalimat perkenalan memakai template literal.
3. Cek tipe dari lima nilai berbeda dengan `typeof`.
4. Ambil kata pertama dari kalimat `'  belajar web  '` setelah dirapikan dengan `trim`.
5. Hitung `'10' + 5` dan `'10' - 5`, lalu jelaskan perbedaannya.

---

## Rangkuman

- Variabel dibuat dengan `const` (nilai tetap) atau `let` (nilai berubah). Hindari `var`, dan pakai nama camelCase yang bermakna.
- Tipe dasar: `string`, `number`, `boolean`, `undefined`, dan `null`. Tipe ditentukan oleh nilai dan dicek dengan `typeof`.
- Template literal `` `Halo ${nama}` `` lebih rapi daripada menggabungkan string dengan `+`.
- Method string seperti `trim`, `toUpperCase`, `includes`, `slice`, `split`, dan `replace` mengembalikan hasil baru tanpa mengubah aslinya.
- `Number()`, `parseInt()`, `parseFloat()`, dan `String()` mengubah tipe data. Nilai dari `input.value` selalu string.
