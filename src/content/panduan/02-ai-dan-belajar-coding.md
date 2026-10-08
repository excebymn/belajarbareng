---
jenis: murid
bab: panduan
urutan: 2
judul: "AI dan Belajar Coding"
deskripsi: "Kapan sebaiknya tidak memakai AI saat belajar coding, bagaimana memanfaatkannya dengan sehat, memilih jenis AI sesuai kebutuhan, serta batasan dan etikanya."
disarankan_setelah: "dibaca sebelum memulai bab apa pun, dan dibaca ulang saat masuk bab Vue"
---

# AI dan Belajar Coding

Pada materi ini kamu akan mempelajari: kenapa saat belajar sebaiknya kamu tidak meminta AI menulis kode untukmu, bagaimana memanfaatkan AI dengan cara yang justru mempercepat belajar, bagaimana memilih jenis AI sesuai kebutuhan, serta batasan dan etika yang perlu dijaga.

Sebelum mulai, pastikan kamu sudah memahami: materi Cara Belajar Programming yang Efektif.

---

## 1. Rekomendasi Utama: Saat Belajar, Tulis Kodenya Sendiri

Rekomendasi untuk kursus ini sederhana: **selama tahap belajar, jangan memakai AI untuk menulis kode.**

Alasannya bukan karena AI buruk. Alasannya karena tujuan belajar berbeda dari tujuan bekerja.

| | Tujuan bekerja | Tujuan belajar |
|---|---|---|
| Yang dikejar | Hasil jadi secepat mungkin | Kemampuan di kepalamu |
| Ukuran sukses | Programnya jalan | Kamu paham kenapa programnya jalan |
| Peran AI | Mempercepat pekerjaan | Bisa menggantikan proses belajarnya |

Kalau AI yang mengetik kodenya, programmu mungkin jalan, tetapi **otakmu tidak mendapat latihan**. Itu seperti belajar renang dengan menonton orang lain berenang.

### 1.a Masalah yang Sering Muncul

Siswa yang terlalu cepat bergantung pada AI sering mengalami hal seperti ini:

- Kode berhasil dibuat, tetapi tidak bisa menjelaskan **kenapa** kode itu bekerja.
- Muncul error kecil, lalu **tidak bisa memperbaikinya sendiri**.
- Merasa paham saat membaca jawaban AI, tetapi **kosong saat menghadapi halaman kosong**.

Contoh paling nyata adalah kesalahan ringan seperti ini:

```js
let sudahLogin = false

if (sudahLogin === true) {
  console.log('Selamat datang')
}
// program tidak menampilkan apa pun, dan penyebabnya sederhana: nilainya sudah false
```

Atau kode yang tidak jalan hanya karena **kurang satu tanda kurung** atau **salah mengetik `ture` alih-alih `true`**. Penyelesaiannya bisa kurang dari satu menit kalau kamu terbiasa membaca kodemu sendiri. Namun siswa yang terbiasa menyerahkan semuanya ke AI akan kembali bertanya ke AI, lalu menunggu jawaban atas masalah yang sebenarnya sederhana.

Kemampuan **troubleshooting ringan** seperti ini hanya terbentuk jika kamu pernah bergulat dengan kode sendiri.

> **Ringkasan:** Saat belajar, tujuannya adalah kemampuanmu, bukan sekadar hasil. Menyerahkan penulisan kode ke AI membuat kamu tidak terlatih, termasuk dalam memperbaiki kesalahan kecil.

---

## 2. Memanfaatkan AI dengan Sehat

Bukan berarti AI harus dijauhi sepenuhnya. Ada cara memakainya yang **membantu belajar tanpa menggantikannya**.

### 2.a Aturan Tiga Langkah

Sebelum bertanya ke AI, lakukan tiga hal berikut.

1. **Coba sendiri** minimal 15 sampai 20 menit.
2. **Baca pesan error** dan cari di dokumentasi.
3. **Tuliskan pertanyaanmu** selengkap mungkin (apa yang ingin dicapai, apa yang terjadi, apa yang sudah dicoba).

Jika masih buntu setelah ketiganya, barulah bertanya.

### 2.b Minta Penjelasan, Bukan Jawaban Jadi

| Cenderung merugikan | Cenderung membantu |
|---|---|
| "Buatkan aku aplikasi todo list." | "Apa bedanya `map` dan `forEach`? Beri contoh kecil." |
| "Perbaiki kodeku ini." | "Aku mendapat error ini di baris 12. Apa artinya, tanpa langsung memberikan kode perbaikannya?" |
| "Tulis fungsi untuk menghitung rata-rata." | "Aku menulis fungsi ini. Apa kekurangannya?" |

Perhatikan polanya: pertanyaan di kolom kanan meminta **pemahaman**, sedangkan kolom kiri meminta **hasil**.

### 2.c Kegunaan yang Tepat Saat Belajar

- Menjelaskan konsep dengan analogi lain saat penjelasan di materi belum masuk.
- Menjelaskan arti sebuah pesan error.
- Memberi petunjuk bertahap (bukan jawaban akhir) saat kamu buntu.
- Memeriksa **kode yang sudah kamu tulis sendiri** dan memberi masukan.
- Membuat soal latihan tambahan.

### 2.d Kegunaan Setelah Dasar Kuat

Setelah kamu benar-benar menguasai dasar (misalnya setelah bab JS dan Vue), AI sangat berguna untuk mempercepat pekerjaan yang sudah kamu pahami, seperti menulis kode berulang, menyusun kerangka, atau menerjemahkan kode dari satu bahasa ke bahasa lain. Perbedaannya: kamu sekarang mampu **menilai dan memperbaiki** hasilnya.

> **Catatan:** Tolok ukur sederhana: jika AI memberimu kode, bisakah kamu menjelaskan setiap barisnya tanpa melihat penjelasan? Jika tidak, jangan pakai dulu. Pelajari dulu sampai bisa.

> **Ringkasan:** Pakai AI untuk meminta penjelasan dan petunjuk setelah mencoba sendiri. Hindari meminta jawaban jadi selama belajar. Setelah dasar kuat, AI menjadi alat percepatan kerja.

---

## 3. Memilih Jenis AI Sesuai Kebutuhan

Satu alat tidak cocok untuk semua pekerjaan. Dalam jangka panjang, kamu akan memakai beberapa jenis alat AI sesuai kekuatannya.

| Kebutuhan | Jenis alat yang cocok |
|---|---|
| Mengobrol, menjelaskan konsep, brainstorming | Chatbot AI serbaguna |
| Menulis dan membaca kode langsung di editor | Asisten kode yang terpasang di editor |
| Mencari informasi terbaru lengkap dengan sumbernya | AI dengan fitur pencarian web |
| Membaca dokumen panjang atau banyak file | AI yang mendukung konteks panjang dan unggah file |
| Membuat gambar, ikon, atau ilustrasi | AI pembuat gambar |

Tips memilih:

- Setiap produk AI terus berubah. **Cobalah beberapa** untuk tugas yang sama, lalu bandingkan sendiri mana yang paling cocok untuk gaya belajarmu.
- Jangan terpaku pada satu alat. Kemampuan tiap alat berbeda dan berubah dari waktu ke waktu.
- Cek apakah sebuah alat mendukung pencarian web atau sumber rujukan, supaya jawabannya bisa kamu periksa.

---

## 4. Batasan AI yang Harus Kamu Tahu

AI bisa membuat kesalahan, dan sering kali dengan nada yang sangat meyakinkan.

| Batasan | Penjelasan |
|---|---|
| Jawaban keliru | AI bisa menulis kode yang tampak benar tetapi salah atau tidak jalan |
| Informasi usang | AI bisa merujuk versi lama sebuah pustaka atau fitur yang sudah diganti |
| Mengarang | AI kadang membuat nama fungsi atau pustaka yang sebenarnya tidak ada |
| Tidak melihat konteks penuh | AI hanya tahu apa yang kamu tunjukkan |
| Kode yang bisa dijalankan belum tentu aman | Kode yang jalan bisa saja punya celah keamanan |

Kebiasaan yang perlu dibangun:

- **Jalankan dan uji** setiap kode dari AI. Jangan percaya begitu saja.
- **Cocokkan dengan dokumentasi resmi** untuk hal-hal penting.
- **Tanyakan "kenapa"** jika kamu tidak mengerti sebuah bagian, jangan hanya menerimanya.

> **Ringkasan:** AI bisa salah, usang, atau mengarang. Selalu jalankan, uji, dan cocokkan dengan dokumentasi resmi.

---

## 5. Privasi dan Etika

### 5.a Jangan Kirim Data Rahasia

Hindari menempelkan hal-hal berikut ke alat AI:

- Kata sandi, kunci API, token, dan isi file `.env`.
- Data pribadi orang lain (nama lengkap, nomor telepon, alamat, nomor identitas).
- Kode atau dokumen rahasia milik sekolah atau perusahaan tanpa izin.

Jika kodemu mengandung rahasia, hapus atau ganti dengan nilai palsu sebelum menempelkannya.

### 5.b Jujur soal Pemakaian

- Ikuti aturan sekolah atau pengajar tentang pemakaian AI untuk tugas.
- Jika sebagian pekerjaanmu dibantu AI, **akui dengan jujur** saat diminta.
- Kemampuan yang kamu tunjukkan di portofolio harus benar-benar kemampuanmu.

> **Ringkasan:** Jangan mengirim kata sandi, kunci API, atau data pribadi ke AI. Ikuti aturan pemakaian dan bersikap jujur.

---

## 6. Rangkuman Aturan Praktis

| Fase | Sikap terhadap AI |
|---|---|
| Baru belajar konsep | Tulis kode sendiri. AI hanya untuk penjelasan. |
| Buntu setelah mencoba | AI untuk petunjuk bertahap, bukan jawaban jadi. |
| Selesai menulis kode sendiri | AI untuk memeriksa dan memberi masukan. |
| Dasar sudah kuat | AI untuk mempercepat pekerjaan yang sudah kamu pahami. |
| Selalu | Uji hasilnya, jaga rahasia, dan bersikap jujur. |

---

## Rangkuman

- Selama belajar, tulis kodenya sendiri. Tujuannya adalah kemampuanmu, bukan sekadar program yang jalan.
- Ketergantungan pada AI membuat kamu tidak terlatih memperbaiki kesalahan ringan, seperti salah nilai `true` dan `false` atau kurang satu tanda kurung.
- Pakai AI untuk meminta penjelasan dan petunjuk setelah mencoba sendiri dengan aturan tiga langkah.
- Setiap jenis alat AI punya kekuatan berbeda, jadi cobalah beberapa dan bandingkan.
- AI bisa salah, usang, atau mengarang, jadi selalu uji dan cocokkan dengan dokumentasi resmi.
- Jangan mengirim data rahasia, dan bersikap jujur tentang pemakaian AI.
