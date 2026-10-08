---
jenis: murid
bab: os
urutan: 1
judul: "Memilih OS untuk Programming"
deskripsi: "Mengenal peran OS dalam pengembangan web dan tierlist Linux, macOS, dan Windows untuk programmer."
---

# Memilih OS untuk Programming

Pada materi ini kamu akan mempelajari: kenapa OS berpengaruh pada kenyamanan programming, apa itu sistem Unix-like, serta tierlist Linux, macOS, dan Windows untuk programmer.

Sebelum mulai, pastikan kamu sudah memahami: fungsi dasar sistem operasi, yaitu sebagai penghubung antara perangkat keras dan aplikasi.

---

## 1. Kenapa OS Berpengaruh

Hampir semua materi di kursus ini bisa dikerjakan di OS apa pun. Meski begitu, OS yang kamu pakai menentukan seberapa mulus alat-alat programming berjalan.

### 1.a Alat Programming dan OS

Seorang programmer web setiap hari memakai alat seperti terminal, Node.js, Git, Docker, dan berbagai server lokal. Alat-alat ini awalnya dibuat untuk lingkungan **Unix**, yaitu keluarga sistem operasi yang dipakai di mayoritas server di dunia.

Karena servermu nanti kemungkinan besar berjalan di Linux, bekerja di OS yang mirip dengan server membuat hasil di komputermu lebih mirip dengan hasil di server sebenarnya.

> **Ringkasan:** Alat programming banyak dibuat untuk lingkungan Unix, dan server umumnya memakai Linux. Itu sebabnya OS berpengaruh.

### 1.b Unix-like dan Bukan Unix-like

**Unix-like** adalah sistem operasi yang meniru atau diturunkan dari Unix. Linux dan macOS termasuk di dalamnya. Windows bukan Unix-like.

Akibatnya, Linux dan macOS punya banyak kesamaan:

- Perintah terminal hampir sama, misalnya `ls`, `cd`, dan `mkdir`.
- Alamat folder ditulis dengan garis miring biasa, misalnya `/home/budi/project`.
- Shell bawaannya mirip (bash atau zsh).

Windows berbeda:

- Alamat folder ditulis dengan garis miring terbalik dan huruf drive, misalnya `C:\Users\Budi\project`.
- Terminal bawaannya adalah PowerShell atau Command Prompt, dengan perintah yang berbeda.

> **Ringkasan:** Linux dan macOS sama-sama Unix-like sehingga cara kerjanya mirip. Windows memakai cara yang berbeda.

---

## 2. Tierlist OS untuk Programming

Berikut urutan rekomendasi untuk keperluan programming. Ini adalah rekomendasi untuk jangka panjang, bukan syarat untuk bisa mulai belajar.

| Tier | OS | Rekomendasi |
|---|---|---|
| 1 | Linux | Sangat direkomendasikan |
| 2 | macOS | Cukup direkomendasikan |
| 3 | Windows | Kurang direkomendasikan |

### 2.a Linux

**Linux** adalah pilihan paling direkomendasikan untuk programming. Alasannya:

- Terminal adalah bagian utama sistem, dan hampir semua alat programming bisa dipasang dengan satu atau dua perintah.
- Gratis dan terbuka, dengan banyak pilihan distro (versi Linux) sesuai tingkat kemampuanmu.
- Sama dengan sistem yang dipakai server sungguhan.
- Pemasangan paket lewat package manager cepat dan rapi.

Pilihan distro dan urutan belajarnya dibahas di materi berikutnya.

> **Catatan:** Linux butuh waktu adaptasi di awal. Wajar jika di minggu pertama kamu sering membuka panduan.

### 2.b macOS

**macOS** cukup direkomendasikan karena dasarnya adalah Unix. Perintah terminal di macOS sama dengan di Linux, sehingga cara kerja programmer di macOS masih berorientasi pada terminal.

Hal yang perlu kamu pertimbangkan:

- macOS hanya berjalan di perangkat Apple, yang harganya relatif mahal.
- Pemasangan alat umumnya memakai Homebrew (package manager untuk macOS).

### 2.c Windows

**Windows** kurang direkomendasikan untuk programming. Alasan yang sering muncul:

- Banyak alat web dikembangkan pertama kali untuk Linux atau macOS, sehingga di Windows sering butuh langkah tambahan.
- Perbedaan alamat folder, perintah terminal, dan aturan penulisan file membuat project kadang berperilaku berbeda dibanding di server.
- Pemasangan dan pembaruan alat tidak serapi package manager di Linux atau macOS.

Meski begitu, Windows tetap bisa dipakai untuk belajar. Windows punya fitur bernama **WSL** (Windows Subsystem for Linux) yang menjalankan Linux di dalam Windows. Dengan WSL, banyak kekurangan di atas teratasi. WSL dibahas di materi Windows dan macOS untuk programmer.

> **Ringkasan:** Urutan rekomendasi: Linux, lalu macOS, lalu Windows. Windows tetap bisa dipakai, terutama bersama WSL.

---

## 3. Memilih Sesuai Kondisimu

Kamu tidak harus mengganti OS hari ini. Pilih jalur yang sesuai perangkat dan kondisimu.

| Kondisimu | Langkah yang disarankan |
|---|---|
| Laptop Windows, belum pernah pakai Linux | Mulai belajar di Windows, pasang WSL, lalu coba Linux lewat live USB atau virtual machine |
| Laptop Windows, siap berpindah | Pasang Linux (dual boot atau diganti sepenuhnya), mulai dari Mint atau Ubuntu |
| Pakai Mac | Langsung belajar di macOS, pasang Homebrew |
| Sudah pakai Linux | Lanjut, dan naikkan distro secara bertahap |

Apa pun pilihanmu, cadangkan data pentingmu sebelum memasang OS baru.

> **Catatan:** Yang terpenting adalah mulai belajar. Kamu bisa berpindah OS kapan saja saat sudah lebih nyaman.

> **Ringkasan:** Pilih OS sesuai kondisi perangkatmu. Mulai saja dulu, dan berpindah ke OS yang lebih cocok saat siap.

---

## Rangkuman

- OS berpengaruh karena alat programming banyak dibuat untuk lingkungan Unix dan server umumnya memakai Linux.
- Linux dan macOS adalah Unix-like, sedangkan Windows bukan.
- Tierlist: Linux sangat direkomendasikan, macOS cukup direkomendasikan, Windows kurang direkomendasikan.
- Pengguna Windows bisa memakai WSL, live USB, atau virtual machine sebagai jembatan menuju Linux.
- Cadangkan data sebelum memasang OS baru.
