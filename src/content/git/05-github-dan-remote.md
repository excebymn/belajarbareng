---
jenis: murid
bab: git
urutan: 5
judul: "GitHub dan Remote: push, pull, dan clone"
deskripsi: "Membuat akun GitHub, menyiapkan autentikasi dengan SSH, menghubungkan repository lokal ke remote, serta memakai push, pull, fetch, dan clone."
---

# GitHub dan Remote: push, pull, dan clone

Pada materi ini kamu akan mempelajari: cara membuat akun GitHub dan repository online, cara menyiapkan autentikasi dengan kunci SSH, konsep remote, serta perintah `push`, `pull`, `fetch`, dan `clone`.

Sebelum mulai, pastikan kamu sudah memahami: `git add`, `git commit`, dan konsep branch dari materi sebelumnya.

---

## 1. Kenapa Perlu Remote

Sejauh ini seluruh riwayatmu hanya ada di **satu komputer**. Jika laptop rusak atau hilang, semuanya ikut hilang. Selain itu, bekerja bersama orang lain tidak mungkin tanpa tempat berbagi.

**Remote** adalah salinan repository yang berada di server lain, misalnya di GitHub. Dengan remote, kamu mendapatkan:

- **Cadangan** project di tempat yang aman.
- **Kolaborasi**: banyak orang bisa mengambil dan mengirim perubahan.
- **Portofolio**: orang lain (termasuk calon pemberi kerja) bisa melihat proyek-proyekmu.
- **Akses dari mana saja**: kamu bisa melanjutkan di komputer lain.

Hubungannya:

```text
Komputermu (repository lokal)  <---- push / pull ---->  GitHub (repository remote)
```

> **Ringkasan:** Remote adalah salinan repository di server (seperti GitHub) untuk cadangan, kolaborasi, dan portofolio.

---

## 2. Menyiapkan GitHub

### 2.a Membuat Akun

1. Buka `github.com`, lalu pilih **Sign up**.
2. Gunakan **email yang sama** dengan yang kamu atur di `git config user.email`.
3. Pilih username yang pantas dilihat orang lain, karena akan menjadi bagian dari alamat profilmu dan portofoliomu.
4. Aktifkan **autentikasi dua langkah** (2FA) di pengaturan keamanan akun.

### 2.b Membuat Repository di GitHub

1. Klik tombol **New** (atau ikon `+`, lalu **New repository**).
2. Isi **Repository name**, misalnya `latihan-git`.
3. Pilih **Public** (bisa dilihat siapa saja) atau **Private** (hanya kamu).
4. Untuk menghubungkan dengan project lokal yang sudah ada, **jangan centang** opsi menambahkan README, `.gitignore`, atau lisensi.
5. Klik **Create repository**.

GitHub menampilkan halaman berisi petunjuk dan alamat repository.

> **Ringkasan:** Buat akun GitHub dengan email yang sama dengan konfigurasi Git, aktifkan 2FA, lalu buat repository kosong.

---

## 3. Autentikasi dengan SSH

Saat mengirim kode ke GitHub, kamu harus membuktikan bahwa itu benar-benar kamu. GitHub **tidak lagi menerima kata sandi akun** untuk perintah Git lewat HTTPS. Dua cara yang umum: **SSH key** atau **personal access token**. Di sini kita pakai SSH karena sekali pasang langsung nyaman.

**Kunci SSH** adalah sepasang file: **kunci privat** (rahasia, tetap di komputermu) dan **kunci publik** (boleh dibagikan, dipasang di GitHub).

### 3.a Membuat Kunci

```text
ssh-keygen -t ed25519 -C "emailkamu@contoh.com"
# membuat sepasang kunci baru dengan algoritma ed25519
```

Tekan Enter untuk menerima lokasi bawaan. Kamu akan diminta memasukkan **passphrase** (kata sandi tambahan untuk melindungi kunci). Sangat disarankan mengisinya, walaupun boleh dikosongkan.

Dua file dibuat di folder `~/.ssh/`:

| File | Jenis | Boleh dibagikan? |
|---|---|---|
| `id_ed25519` | Kunci privat | **Tidak, jangan pernah** |
| `id_ed25519.pub` | Kunci publik | Ya |

### 3.b Memasang Kunci Publik di GitHub

1. Tampilkan kunci publik, lalu salin seluruh isinya.

```text
cat ~/.ssh/id_ed25519.pub
# menampilkan kunci publik, diawali ssh-ed25519
```

2. Di GitHub, buka **Settings** lalu **SSH and GPG keys**, kemudian klik **New SSH key**.
3. Beri judul (misalnya "Laptop saya"), tempel isi kunci publik, lalu klik **Add SSH key**.

### 3.c Menguji Koneksi

```text
ssh -T git@github.com
# menguji koneksi ke GitHub
```

Jika berhasil, muncul pesan seperti `Hi username! You've successfully authenticated...`. Pada koneksi pertama, kamu akan ditanya apakah mempercayai host GitHub. Ketik `yes`.

> **Peringatan:** Jangan pernah membagikan, mengunggah, atau menempelkan **kunci privat** (file tanpa `.pub`) di mana pun. Jika kunci privat bocor, hapus kunci publiknya dari GitHub dan buat pasangan baru.

> **Catatan:** Alternatifnya adalah memakai alamat HTTPS dengan **personal access token**, atau memakai alat bantu seperti GitHub CLI dan Git Credential Manager (sudah termasuk di installer Git for Windows). Semua cara itu valid. Yang penting jangan memakai kata sandi akun.

> **Ringkasan:** Buat pasangan kunci SSH dengan `ssh-keygen`, pasang kunci publik (`.pub`) di GitHub, dan jaga kunci privat tetap rahasia.

---

## 4. Menghubungkan ke Remote

### 4.a Alamat Repository

Di halaman repository GitHub, ada dua jenis alamat.

| Jenis | Bentuk | Autentikasi |
|---|---|---|
| SSH | `git@github.com:username/latihan-git.git` | Kunci SSH |
| HTTPS | `https://github.com/username/latihan-git.git` | Token atau credential manager |

Pilih **SSH** jika kamu sudah menyiapkan kunci.

### 4.b Menambahkan Remote

Di folder project lokal yang sudah punya commit:

```text
git remote add origin git@github.com:username/latihan-git.git
# menambahkan remote bernama origin yang menunjuk ke repository di GitHub
git remote -v
# menampilkan daftar remote beserta alamatnya
```

`origin` hanyalah **nama** untuk remote utama, dan sudah menjadi kesepakatan umum.

### 4.c Mengirim dengan push

```text
git push -u origin main
# mengirim branch main ke remote origin
```

Penjelasan:

- `origin` adalah remote tujuan, dan `main` adalah branch yang dikirim.
- Opsi `-u` mengingat pasangan ini, sehingga lain kali cukup mengetik `git push`.

Muat ulang halaman repository di GitHub. Seluruh file dan riwayat commit-mu sudah ada di sana.

Setelah itu, alurnya:

```text
git add .
git commit -m "Tambah fitur baru"
git push
# mengirim commit baru ke GitHub
```

> **Ringkasan:** `git remote add origin alamat` menghubungkan repository lokal ke GitHub, dan `git push -u origin main` mengirim commit untuk pertama kali. Berikutnya cukup `git push`.

---

## 5. Mengambil Perubahan dari Remote

### 5.a git pull

Jika remote punya commit baru (misalnya dari rekan, atau dari komputer lain), ambil dengan `git pull`.

```text
git pull
# mengambil commit baru dari remote dan langsung menggabungkannya ke branch aktif
```

Biasakan menjalankan `git pull` **sebelum mulai bekerja** dan **sebelum push**, agar kamu tidak tertinggal dari versi terbaru.

### 5.b git fetch

`git fetch` hanya **mengunduh** perubahan tanpa menggabungkannya. Berguna untuk melihat dulu apa yang berubah.

```text
git fetch
# mengunduh info commit baru dari remote tanpa mengubah folder kerja
git log --oneline main..origin/main
# melihat commit yang ada di remote tetapi belum ada di lokal
```

| | `git fetch` | `git pull` |
|---|---|---|
| Mengunduh perubahan | Ya | Ya |
| Menggabungkan ke branch aktif | Tidak | Ya (`fetch` lalu `merge`) |

### 5.c Push Ditolak

Jika remote punya commit yang belum kamu miliki, `git push` ditolak.

```text
! [rejected]        main -> main (fetch first)
```

Solusinya: `git pull` dulu, selesaikan konflik jika ada, lalu `git push` lagi. Jangan memakai `git push --force` kecuali kamu benar-benar paham akibatnya, karena opsi itu menimpa riwayat di remote dan bisa menghapus pekerjaan orang lain.

> **Ringkasan:** `git pull` mengambil dan menggabungkan perubahan remote, sedangkan `git fetch` hanya mengambil. Jika push ditolak, `git pull` dulu.

---

## 6. Mengambil Project dengan clone

`git clone` menyalin seluruh repository dari remote ke komputermu, lengkap dengan riwayat, dan otomatis menyiapkan remote `origin`.

```text
git clone git@github.com:username/latihan-git.git
# menyalin repository ke folder baru bernama latihan-git
cd latihan-git
# masuk ke folder hasil clone
git log --oneline
# riwayat lengkap sudah ada
```

Kamu bisa mengubah nama folder tujuan.

```text
git clone git@github.com:username/latihan-git.git folder-baru
```

Kegunaan `clone`:

- Melanjutkan project di komputer lain.
- Mengunduh project orang lain (proyek sumber terbuka) untuk dipelajari.
- Memulai bekerja dalam tim, yang sudah punya repository bersama.

> **Catatan:** Setelah meng-clone project yang memakai npm, jalankan `npm install` untuk mengunduh paketnya, karena `node_modules` tidak ikut tersimpan di Git.

> **Ringkasan:** `git clone alamat` menyalin repository lengkap dengan riwayatnya dan menyiapkan remote `origin` otomatis.

---

## 7. Branch dan Remote

Branch lain juga bisa dikirim ke GitHub.

```text
git switch -c fitur-footer
git push -u origin fitur-footer
# mengirim branch fitur-footer ke GitHub untuk pertama kali
```

Untuk melihat branch di remote:

```text
git branch -a
# menampilkan branch lokal dan remote
```

Branch di remote muncul dengan awalan `remotes/origin/`. Untuk mengerjakan branch yang ada di remote tetapi belum ada di komputermu:

```text
git fetch
git switch fitur-footer
# Git otomatis membuat branch lokal yang melacak remote
```

---

## 8. GitLab dan Layanan Lain

GitLab dan Bitbucket bekerja dengan cara yang **hampir sama**. Perbedaan yang paling terasa hanya pada istilah dan tampilan.

| Hal | GitHub | GitLab |
|---|---|---|
| Permintaan menggabungkan perubahan | Pull Request | Merge Request |
| Tempat menyimpan kunci SSH | Settings, SSH and GPG keys | Preferences, SSH Keys |
| Perintah Git | Sama | Sama |

Seluruh perintah `git remote`, `push`, `pull`, dan `clone` yang kamu pelajari berlaku di semuanya.

---

## 9. Latihan Singkat

1. Buat akun GitHub dan aktifkan 2FA.
2. Buat pasangan kunci SSH, pasang kunci publik di GitHub, lalu uji dengan `ssh -T git@github.com`.
3. Buat repository kosong di GitHub, lalu hubungkan dengan project lokal memakai `git remote add origin`.
4. Kirim project dengan `git push -u origin main`, lalu lihat hasilnya di GitHub.
5. Ubah file langsung di tampilan web GitHub (ikon pensil), commit di sana, lalu ambil ke lokal dengan `git pull`.
6. Clone repository yang sama ke folder lain, lalu ubah dan push dari salah satu, dan ambil dengan `git pull` dari yang lain.

---

## Rangkuman

- Remote adalah salinan repository di server (GitHub, GitLab) untuk cadangan, kolaborasi, dan portofolio.
- Autentikasi memakai kunci SSH (pasang kunci publik di GitHub) atau token, bukan kata sandi akun. Jaga kunci privat tetap rahasia.
- `git remote add origin alamat` menghubungkan repository lokal, dan `git push -u origin main` mengirim commit untuk pertama kali.
- `git pull` mengambil dan menggabungkan perubahan dari remote, sedangkan `git fetch` hanya mengambilnya. Jalankan `git pull` sebelum mulai bekerja dan sebelum push.
- `git clone alamat` menyalin repository lengkap dari remote.
- GitLab dan layanan lain memakai perintah Git yang sama, dengan perbedaan hanya pada istilah dan tampilan.
