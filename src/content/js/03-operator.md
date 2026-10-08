---
jenis: murid
bab: js
urutan: 3
judul: "Operator"
deskripsi: "Memakai operator aritmetika, assignment, perbandingan (== dan ===), logika (&&, ||, !, ??), serta memahami urutan pengerjaan operator."
---

# Operator

Pada materi ini kamu akan mempelajari: operator aritmetika, assignment, perbandingan (termasuk perbedaan `==` dan `===`), operator logika (`&&`, `||`, `!`, `??`), serta urutan pengerjaan operator.

Sebelum mulai, pastikan kamu sudah memahami: variabel dan tipe data dari materi sebelumnya.

---

## 1. Operator Aritmetika

| Operator | Fungsi | Contoh | Hasil |
|---|---|---|---|
| `+` | Penjumlahan | `7 + 2` | `9` |
| `-` | Pengurangan | `7 - 2` | `5` |
| `*` | Perkalian | `7 * 2` | `14` |
| `/` | Pembagian | `7 / 2` | `3.5` |
| `%` | Sisa bagi (modulus) | `7 % 2` | `1` |
| `**` | Pangkat | `7 ** 2` | `49` |

```js
console.log(7 / 2)
// 3.5, pembagian di JavaScript selalu menghasilkan desimal (tidak ada pembagian bulat)
console.log(Math.floor(7 / 2))
// 3, membulatkan ke bawah untuk mendapatkan hasil bulat
console.log(10 % 3)
// 1, sisa dari 10 dibagi 3
```

Operator `%` sering dipakai untuk memeriksa **genap atau ganjil**: bilangan genap jika `n % 2` hasilnya `0`.

### 1.a Penambahan dan Pengurangan 1

```js
let hitung = 0
hitung++
// menambah 1, sekarang hitung bernilai 1
hitung--
// mengurangi 1, kembali ke 0
```

### 1.b Floating-point

Komputer menyimpan desimal dengan pendekatan, sehingga kadang muncul hasil tak terduga.

```js
console.log(0.1 + 0.2)
// 0.30000000000000004, bukan tepat 0.3
console.log((0.1 + 0.2).toFixed(2))
// '0.30', toFixed membulatkan ke dua angka desimal (hasilnya string)
```

Ini terjadi di hampir semua bahasa pemrograman, termasuk Java dan C++. Untuk uang, kerjakan dalam satuan terkecil (misalnya sen atau rupiah bulat).

> **Ringkasan:** Operator aritmetika: `+ - * / % **`. `/` selalu menghasilkan desimal, dan `%` memberi sisa bagi.

---

## 2. Operator Assignment

Operator `=` menyimpan nilai ke variabel. Ada singkatan untuk operasi sekaligus penyimpanan.

| Penulisan | Sama dengan |
|---|---|
| `x += 5` | `x = x + 5` |
| `x -= 5` | `x = x - 5` |
| `x *= 2` | `x = x * 2` |
| `x /= 2` | `x = x / 2` |

```js
let skor = 10
skor += 5
// skor menjadi 15
skor *= 2
// skor menjadi 30

let pesan = 'Halo'
pesan += ', dunia'
// pesan menjadi 'Halo, dunia', operator += juga berlaku untuk string
```

> **Ringkasan:** `+=`, `-=`, `*=`, dan `/=` menyingkat operasi dan penyimpanan sekaligus.

---

## 3. Operator Perbandingan

Menghasilkan nilai `true` atau `false`.

| Operator | Arti |
|---|---|
| `>` | Lebih besar |
| `<` | Lebih kecil |
| `>=` | Lebih besar atau sama dengan |
| `<=` | Lebih kecil atau sama dengan |
| `===` | Sama persis (nilai dan tipe) |
| `!==` | Tidak sama persis |
| `==` | Sama setelah dikonversi (hindari) |
| `!=` | Tidak sama setelah dikonversi (hindari) |

```js
console.log(10 > 5)
// true
console.log(10 <= 5)
// false
console.log('a' < 'b')
// true, string dibandingkan menurut urutan abjad
```

### 3.a == dan ===

Ini perbedaan yang paling penting di JavaScript.

- `===` membandingkan **nilai dan tipe**. Hasilnya sesuai dugaan.
- `==` mengubah tipe lebih dulu secara diam-diam, sehingga hasilnya sering mengejutkan.

```js
console.log(5 === 5)
// true
console.log(5 === '5')
// false, tipenya berbeda (number dan string)
console.log(5 == '5')
// true, karena '5' diam-diam diubah menjadi angka
console.log(0 == false)
// true, mengejutkan
console.log(0 === false)
// false, tipenya berbeda (number dan boolean)
```

**Aturan praktis:** selalu pakai `===` dan `!==`. Hindari `==` dan `!=`.

> **Catatan:** Berbeda dengan Java, di JavaScript membandingkan string dengan `===` sudah membandingkan **isinya**, bukan alamat memorinya. Kamu tidak perlu `.equals()`.

> **Ringkasan:** Operator perbandingan menghasilkan `true` atau `false`. Selalu pakai `===` dan `!==` supaya tipe ikut diperiksa.

---

## 4. Operator Logika

Menggabungkan atau membalik nilai boolean.

| Operator | Nama | Arti |
|---|---|---|
| `&&` | AND | Benar jika **kedua** sisi benar |
| `\|\|` | OR | Benar jika **salah satu** sisi benar |
| `!` | NOT | Membalik nilai |

```js
const umur = 17
const punyaKtp = true

console.log(umur >= 17 && punyaKtp)
// true, kedua syarat terpenuhi
console.log(umur < 17 || punyaKtp)
// true, syarat kedua terpenuhi
console.log(!punyaKtp)
// false, dibalik dari true
```

Tabel kebenaran:

| A | B | `A && B` | `A \|\| B` |
|---|---|---|---|
| true | true | true | true |
| true | false | false | true |
| false | true | false | true |
| false | false | false | false |

### 4.a Hubungan dengan Nilai Bawaan

`&&` dan `||` sebenarnya mengembalikan **salah satu nilai operandnya**, bukan hanya `true` atau `false`. Ini sering dipakai untuk nilai bawaan.

```js
const namaInput = ''
const nama = namaInput || 'Tamu'
// namaInput kosong (dianggap false), sehingga yang dipakai adalah 'Tamu'
console.log(nama)
// Tamu

const pengguna = { nama: 'Budi' }
console.log(pengguna && pengguna.nama)
// Budi, hanya mengambil nama jika pengguna ada
```

### 4.b Nullish Coalescing (??)

`||` menganggap `0` dan teks kosong sebagai "tidak ada", sehingga bisa menimpa nilai yang sebenarnya sah. Operator `??` hanya menimpa jika nilainya `null` atau `undefined`.

```js
const skor = 0
console.log(skor || 100)
// 100, padahal 0 adalah skor yang sah
console.log(skor ?? 100)
// 0, karena skor tidak null maupun undefined
```

> **Ringkasan:** `&&` (dan), `||` (atau), `!` (bukan) menggabungkan kondisi. `||` dan `??` dipakai untuk nilai bawaan, dengan `??` hanya menimpa `null` dan `undefined`.

---

## 5. Urutan Pengerjaan

Seperti di matematika, operator punya urutan prioritas. Secara garis besar: kurung, lalu pangkat, lalu `*` `/` `%`, lalu `+` `-`, lalu perbandingan, lalu `&&`, lalu `||`.

```js
console.log(2 + 3 * 4)
// 14, perkalian dikerjakan lebih dulu
console.log((2 + 3) * 4)
// 20, kurung diutamakan
console.log(true || false && false)
// true, && dikerjakan sebelum ||
```

Saat ragu, **pakai kurung**. Kodenya jadi lebih jelas dibaca.

---

## 6. Latihan Singkat

1. Hitung `17 % 5`, `17 / 5`, dan `Math.floor(17 / 5)`.
2. Buat variabel `skor`, tambahkan 10 dengan `+=`, lalu kalikan 2.
3. Prediksi hasil `5 == '5'`, `5 === '5'`, dan `null == undefined`, lalu cek di Console.
4. Tulis ekspresi yang bernilai `true` jika sebuah angka genap dan lebih dari 10.
5. Buat variabel `nama` yang bernilai `'Tamu'` jika input kosong, memakai `||`.

---

## Rangkuman

- Operator aritmetika: `+ - * / % **`, dengan `++` dan `--` untuk menambah dan mengurangi 1.
- `+=`, `-=`, `*=`, dan `/=` menyingkat operasi dan penyimpanan.
- Operator perbandingan menghasilkan `true` atau `false`. Selalu pakai `===` dan `!==`, hindari `==` dan `!=`.
- Operator logika `&&`, `||`, dan `!` menggabungkan kondisi. `||` dan `??` dipakai untuk nilai bawaan.
- Saat ragu dengan urutan pengerjaan operator, pakai kurung.
