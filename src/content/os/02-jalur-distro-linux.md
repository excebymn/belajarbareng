---
jenis: murid
bab: os
urutan: 2
judul: "Jalur Distro Linux: dari Mint sampai Arch"
deskripsi: "Mengenal distro Linux, tangga belajar dari Mint/Ubuntu sampai Arch, cara mencoba Linux dengan aman, dan perintah dasar package manager."
---

# Jalur Distro Linux: dari Mint sampai Arch

Pada materi ini kamu akan mempelajari: apa itu distro Linux, urutan distro dari yang ramah pemula sampai yang menantang, cara mencoba Linux tanpa risiko, serta perintah pemasangan paket di tiap distro.

Sebelum mulai, pastikan kamu sudah memahami: perbedaan Linux, macOS, dan Windows dari materi Memilih OS untuk Programming.

---

## 1. Apa itu Distro

### 1.a Linux dan Distro

Secara teknis, **Linux** hanyalah kernel, yaitu inti sistem yang mengatur perangkat keras. Agar bisa dipakai sehari-hari, kernel digabung dengan aplikasi, tampilan desktop, dan pengelola paket. Hasil gabungan inilah yang disebut **distro** (distribusi Linux).

Karena komponennya bisa dipilih bebas, ada banyak distro. Masing-masing punya tujuan dan kemudahan yang berbeda.

> **Ringkasan:** Linux adalah kernel. Distro adalah paket lengkap yang siap dipakai berisi kernel, aplikasi, dan desktop.

### 1.b Keluarga Distro

Banyak distro dibuat dari distro lain sehingga membentuk keluarga. Ini penting karena distro satu keluarga memakai cara pemasangan paket yang sama.

| Keluarga | Contoh distro | Package manager |
|---|---|---|
| Debian | Debian, Ubuntu, Linux Mint | `apt` |
| Red Hat | Fedora | `dnf` |
| Arch | Arch Linux | `pacman` |

> **Ringkasan:** Distro satu keluarga memakai package manager yang sama. Debian, Ubuntu, dan Mint memakai `apt`.

---

## 2. Tangga Distro

Urutan berikut adalah jalur belajar yang disarankan, dari yang paling mudah sampai yang paling menantang.

```text
Mint / Ubuntu  ->  Debian / Fedora (boleh dilewati)  ->  Arch  ->  LFS
```

### 2.a Linux Mint dan Ubuntu

**Linux Mint** dan **Ubuntu** adalah titik awal yang paling ramah untuk pemula. Instalasinya mirip memasang Windows: ada penginstal bergambar, dan hampir semua perangkat langsung terdeteksi.

- Tampilannya mudah dipahami oleh pengguna Windows.
- Komunitas besar, sehingga hampir semua masalah sudah pernah ditanyakan di forum.
- Linux Mint dibuat dari Ubuntu, dan Ubuntu dibuat dari Debian.

Tahap ini cocok untuk membiasakan diri memakai terminal, folder Linux, dan package manager.

### 2.b Debian dan Fedora

**Debian** terkenal stabil karena paketnya diuji lama sebelum dirilis. **Fedora** menyediakan versi paket yang lebih baru dan menjadi ajang uji teknologi baru di dunia Linux.

Tahap ini **boleh dilewati**. Jika kamu sudah nyaman di Mint atau Ubuntu, kamu bisa langsung lanjut ke Arch. Tahap ini berguna bila kamu ingin merasakan keluarga distro lain atau butuh sistem yang sangat stabil.

### 2.c Arch Linux

**Arch Linux** dianggap sebagai *sweet spot*, yaitu titik paling seimbang antara belajar dan penggunaan sehari-hari. Ciri-cirinya:

- **Memasang sendiri.** Kamu memilih sendiri komponen sistemnya, sehingga kamu belajar bagaimana Linux tersusun. Tersedia skrip bantu bernama `archinstall` jika ingin lebih mudah.
- **Rolling release.** Tidak ada versi besar yang harus diinstal ulang. Sistem diperbarui terus-menerus.
- **Dokumentasi sangat baik.** Arch Wiki adalah salah satu sumber belajar Linux terbaik, dan sering berguna walau kamu memakai distro lain.
- **Bisa dipakai harian.** Setelah terpasang, Arch nyaman dipakai untuk bekerja.

> **Catatan:** Arch tidak mengatur semuanya untukmu. Saat ada masalah, kamu diharapkan membaca dokumentasi. Kebiasaan ini justru yang membuat kemampuanmu naik.

### 2.d Linux From Scratch

**Linux From Scratch (LFS)** adalah panduan membangun sistem Linux dari nol, dengan mengompilasi setiap komponennya dari kode sumber secara manual.

LFS **tidak direkomendasikan untuk pemakaian harian**. Tujuannya murni belajar, yaitu memahami isi sebuah sistem Linux sampai ke bagian terdalamnya. Pembaruan dan perawatannya memakan waktu sehingga tidak praktis untuk bekerja.

> **Ringkasan:** Mulai dari Mint/Ubuntu, Debian/Fedora boleh dilewati, Arch adalah titik ideal, dan LFS hanya untuk belajar mendalam.

---

## 3. Mencoba Linux dengan Aman

Kamu tidak perlu langsung menghapus Windows atau macOS. Ada beberapa cara mencoba Linux dengan risiko kecil.

| Cara | Penjelasan | Risiko |
|---|---|---|
| Live USB | Menjalankan Linux dari flashdisk tanpa memasangnya | Sangat kecil |
| Virtual machine | Linux berjalan sebagai aplikasi di dalam OS-mu (contoh: VirtualBox) | Kecil |
| WSL (Windows) | Linux di dalam Windows | Kecil |
| Dual boot | Windows dan Linux terpasang berdampingan di satu perangkat | Sedang |
| Ganti sepenuhnya | Linux menjadi satu-satunya OS | Tinggi |

> **Catatan:** Sebelum dual boot atau mengganti OS, selalu cadangkan data pentingmu ke tempat lain. Kesalahan membagi partisi bisa menghapus data.

> **Ringkasan:** Mulai dari live USB atau virtual machine. Dual boot dan ganti sepenuhnya dilakukan setelah data dicadangkan.

---

## 4. Memasang Paket di Terminal

Di Linux, aplikasi dipasang lewat **package manager**. Perintahnya berbeda tiap keluarga distro, tetapi polanya sama.

#### Cara menulis

```text
sudo apt install git
# Debian, Ubuntu, Mint: memasang Git
sudo dnf install git
# Fedora: memasang Git
sudo pacman -S git
# Arch: memasang Git
```

Penjelasan:

- `sudo` menjalankan perintah dengan hak administrator, sehingga kamu akan diminta mengetik kata sandi.
- `apt`, `dnf`, dan `pacman` adalah nama package manager masing-masing keluarga.
- `git` adalah nama paket yang dipasang.

Perintah untuk memperbarui daftar paket dan sistem juga berbeda:

| Tujuan | Debian/Ubuntu/Mint | Fedora | Arch |
|---|---|---|---|
| Memperbarui sistem | `sudo apt update` lalu `sudo apt upgrade` | `sudo dnf upgrade` | `sudo pacman -Syu` |
| Memasang paket | `sudo apt install nama` | `sudo dnf install nama` | `sudo pacman -S nama` |
| Menghapus paket | `sudo apt remove nama` | `sudo dnf remove nama` | `sudo pacman -R nama` |

> **Catatan:** Saat mengetik kata sandi di terminal, layar tidak menampilkan apa pun, bahkan tanda bintang. Ini normal. Ketik saja lalu tekan Enter.

> **Ringkasan:** Pemasangan paket memakai `sudo` dan package manager sesuai keluarga distro: `apt`, `dnf`, atau `pacman`.

---

## Rangkuman

- Linux adalah kernel, dan distro adalah paket lengkap yang siap dipakai.
- Distro satu keluarga memakai package manager yang sama: `apt` (Debian), `dnf` (Fedora), `pacman` (Arch).
- Jalur belajar: Mint/Ubuntu, Debian/Fedora (boleh dilewati), Arch sebagai titik ideal, dan LFS hanya untuk belajar mendalam.
- Coba Linux dengan aman lewat live USB atau virtual machine sebelum dual boot.
- Selalu cadangkan data sebelum mengubah partisi atau mengganti OS.
