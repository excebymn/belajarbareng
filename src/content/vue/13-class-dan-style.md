---
jenis: murid
bab: vue
urutan: 13
judul: "Binding Class dan Style"
deskripsi: "Mengubah class dan style elemen secara dinamis dengan object dan array, misalnya untuk tombol aktif, status selesai, dan mode gelap."
---

# Binding Class dan Style

Pada materi ini kamu akan mempelajari: cara mengubah class elemen secara dinamis dengan `:class` dalam bentuk object, ternary, dan array, mengubah gaya langsung dengan `:style`, serta contoh pemakaian seperti status selesai dan mode gelap.

Sebelum mulai, pastikan kamu sudah memahami: `v-bind` dari materi Binding Atribut dengan v-bind, `v-for` dari materi sebelumnya, serta selector class dan variabel CSS dari bab CSS.

---

## 1. Mengapa Perlu Class Dinamis

Banyak tampilan berubah mengikuti data: tugas yang selesai dicoret, tombol aktif diberi warna, atau halaman beralih ke mode gelap. Cara yang rapi adalah menyiapkan class di CSS, lalu **memasang atau melepas class** itu dari data.

`class` adalah atribut HTML, sehingga cara mengikatnya sama dengan atribut lain, yaitu `v-bind` (disingkat `:class`). Khusus untuk `class`, Vue menyediakan beberapa bentuk penulisan yang praktis.

> **Ringkasan:** Siapkan class di CSS, lalu pasang atau lepas class itu dari data dengan `:class`.

---

## 2. Bentuk Object

Bentuk yang paling sering dipakai. Tiap pasangan berisi **nama class** dan **kondisi** apakah class itu dipasang.

#### Cara menulis

```vue
<script setup>
import { ref } from 'vue'

const aktif = ref(false)
</script>

<template>
  <button :class="{ aktif: aktif }" @click="aktif = !aktif">
    Tombol
  </button>
  <!-- class "aktif" hanya dipasang saat nilai aktif true -->
</template>

<style scoped>
.aktif {
  background: teal;
  color: white;
}
</style>
```

Bagian `{ aktif: aktif }` berarti: pasang class bernama `aktif` jika data `aktif` bernilai truthy. Jika nama class dan nama data sama, boleh ditulis lebih singkat:

```vue
<button :class="{ aktif }">Tombol</button>
<!-- sama dengan { aktif: aktif } -->
```

Satu object boleh berisi beberapa class.

```vue
<p :class="{ penting: genting, selesai: sudahSelesai, redup: !terlihat }">Teks</p>
<!-- setiap class dipasang atau tidak, tergantung kondisinya masing-masing -->
```

Jika nama class mengandung tanda hubung, tulis dalam tanda kutip.

```vue
<div :class="{ 'mode-gelap': gelap }">...</div>
<!-- nama class dengan tanda hubung harus diberi kutip -->
```

> **Ringkasan:** `:class="{ namaClass: kondisi }"` memasang class bila kondisinya truthy.

---

## 3. Bergabung dengan Class Biasa

Atribut `class` biasa dan `:class` boleh dipakai bersamaan di satu elemen. Keduanya digabung.

```vue
<li class="item" :class="{ selesai: t.selesai }">{{ t.teks }}</li>
<!-- class "item" selalu ada; class "selesai" ada bila t.selesai true -->
```

Class yang selalu dipasang ditulis di `class`, sedangkan class yang bergantung pada data ditulis di `:class`.

---

## 4. Bentuk Ternary dan Array

### 4.a Ternary

Untuk memilih satu dari dua class, pakai ternary.

```vue
<p :class="lulus ? 'hijau' : 'merah'">Status kelulusan</p>
<!-- lulus true: class hijau; false: class merah -->
```

### 4.b Array

Untuk beberapa class sekaligus yang dipilih dari data, pakai array.

```vue
<p :class="[ukuran, warna]">Teks</p>
<!-- jika ukuran = 'besar' dan warna = 'biru', class yang terpasang: besar biru -->
<p :class="['dasar', { aktif: terpilih }]">Teks</p>
<!-- array boleh dicampur dengan object -->
```

Bagi pemula, bentuk object dan ternary biasanya sudah cukup untuk hampir semua kebutuhan.

> **Ringkasan:** Pakai ternary untuk memilih satu dari dua class, dan array untuk beberapa class dari data.

---

## 5. Binding Style

Selain class, gaya inline juga bisa diikat dengan `:style`. Nilainya berupa object berisi properti CSS.

```vue
<script setup>
import { ref } from 'vue'

const warna = ref('crimson')
const ukuran = ref(24)
</script>

<template>
  <p :style="{ color: warna, fontSize: ukuran + 'px' }">Teks berwarna</p>
  <!-- properti CSS ditulis camelCase: fontSize, bukan font-size -->
  <button @click="ukuran += 4">Perbesar</button>
</template>
```

Aturan penulisan:

- Nama properti memakai **camelCase** (`fontSize`, `backgroundColor`), atau boleh memakai kutip dan tanda hubung (`'font-size'`).
- Nilai berupa teks atau variabel. Satuan seperti `px` harus ditulis sendiri.

Contoh yang praktis: slider untuk mengubah ukuran huruf.

```vue
<input type="range" min="12" max="48" v-model.number="ukuran">
<p :style="{ fontSize: ukuran + 'px' }">Geser slider untuk mengubah ukuran</p>
```

> **Catatan:** `:style` dipakai untuk nilai yang **benar-benar dinamis**, seperti angka dari slider atau warna pilihan pengguna. Untuk gaya tetap atau yang hanya berganti antara beberapa keadaan, lebih baik memakai class dan CSS.

> **Ringkasan:** `:style="{ propertiCamelCase: nilai }"` mengatur gaya inline yang berasal dari data.

---

## 6. Contoh: Status Selesai pada Daftar

```vue
<script setup>
import { ref } from 'vue'

const tugas = ref([
  { id: 1, teks: 'Belajar Vue', selesai: true },
  { id: 2, teks: 'Mengerjakan latihan', selesai: false }
])

function ubahStatus(t) {
  t.selesai = !t.selesai
  // t adalah object di dalam array; mengubahnya otomatis memperbarui tampilan
}
</script>

<template>
  <ul>
    <li
      v-for="t in tugas"
      :key="t.id"
      :class="{ selesai: t.selesai }"
      @click="ubahStatus(t)"
    >
      {{ t.teks }}
    </li>
  </ul>
</template>

<style scoped>
li {
  cursor: pointer;
}
.selesai {
  text-decoration: line-through;
  color: gray;
}
</style>
```

Klik sebuah tugas dan ia tercoret. Klik lagi dan coretannya hilang.

---

## 7. Contoh: Mode Gelap

Gunakan variabel CSS dari bab CSS, lalu ganti class di pembungkus halaman.

```vue
<script setup>
import { ref } from 'vue'

const gelap = ref(false)
</script>

<template>
  <div class="halaman" :class="{ gelap }">
    <h1>Halo, Vue!</h1>
    <button @click="gelap = !gelap">
      {{ gelap ? 'Mode terang' : 'Mode gelap' }}
    </button>
  </div>
</template>

<style scoped>
.halaman {
  --latar: white;
  --teks: black;
  background: var(--latar);
  color: var(--teks);
  min-height: 100vh;
  padding: 1rem;
}
.halaman.gelap {
  --latar: #1a1a1a;
  --teks: #eee;
}
/* class gelap mengganti nilai variabel, sehingga warna berubah */
</style>
```

Hanya satu class yang berganti, tetapi seluruh warna di dalamnya ikut berubah, karena semuanya memakai variabel CSS.

---

## 8. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| Class tidak terpasang | Lupa titik dua, sehingga `class="{ aktif }"` dianggap teks | Tulis `:class="{ aktif }"` |
| Error pada class dengan tanda hubung | `{ mode-gelap: gelap }` dibaca sebagai pengurangan | Tulis `{ 'mode-gelap': gelap }` |
| Gaya tidak berlaku | Class ada di DevTools, tetapi CSS-nya tidak cocok atau tertutup `scoped` | Periksa nama class dan tempat CSS ditulis |
| `fontSize` tidak bekerja | Tanpa satuan, atau salah menulis | Tulis `fontSize: ukuran + 'px'` |
| Gaya tidak berubah | Memakai variabel biasa, bukan `ref` | Buat dengan `ref(...)` |

---

## 9. Latihan Singkat

1. Buat tombol yang berganti warna latar saat diklik dengan `:class="{ aktif }"`.
2. Buat teks "Lulus" atau "Tidak lulus" dengan warna berbeda memakai ternary, lalu tambahkan input nilai untuk mengubahnya.
3. Buat daftar tugas yang tercoret saat diklik, seperti bagian 6.
4. Buat slider yang mengubah ukuran huruf sebuah paragraf dengan `:style`.
5. Buat tombol mode gelap seperti bagian 7 dengan variabel CSS.
6. Pasang class `item` biasa dan `:class` dinamis pada elemen yang sama, lalu periksa hasilnya di DevTools.

---

## Rangkuman

- `:class` mengikat class ke data. Bentuk object `{ nama: kondisi }` adalah yang paling sering dipakai.
- `class` biasa dan `:class` boleh dipakai bersamaan di satu elemen.
- Ternary cocok untuk memilih satu dari dua class, dan array untuk beberapa class dari data.
- `:style` mengikat gaya inline dalam bentuk object dengan properti camelCase, dan dipakai untuk nilai yang benar-benar dinamis.
- Untuk perubahan tampilan yang kompleks, ganti class pada pembungkus dan biarkan CSS (misalnya variabel) yang bekerja.
