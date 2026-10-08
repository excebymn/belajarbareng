---
jenis: murid
bab: tools
urutan: 1
judul: "Terminal Dasar"
deskripsi: "Memakai terminal untuk berpindah folder, membuat, menyalin, memindah, dan menghapus file, lengkap dengan tips agar bekerja lebih cepat."
---

# Terminal Dasar

Pada materi ini kamu akan mempelajari: apa itu terminal, cara membaca alamat folder (path), perintah dasar untuk navigasi, cara mengelola file dan folder, serta tips agar bekerja lebih cepat.

Sebelum mulai, pastikan kamu sudah memahami: konsep file dan folder di komputer.

---

## 1. Mengenal Terminal

Terminal adalah tempat kita memberi perintah ke komputer lewat teks. Hampir semua alat pengembangan web dijalankan dari sini.

### 1.a Terminal, Shell, dan Prompt

Tiga istilah ini sering tertukar:

| Istilah | Pengertian |
|---|---|
| Terminal | Jendela tempat kamu mengetik dan melihat hasilnya |
| Shell | Program di dalam terminal yang membaca perintahmu lalu menjalankannya (contoh: bash, zsh, PowerShell) |
| Prompt | Baris awal yang menunggu perintahmu, biasanya menampilkan lokasi folder |

```text
budi@laptop:~/project$
```

Contoh prompt di atas menunjukkan nama pengguna (`budi`), nama komputer (`laptop`), dan lokasi folder saat ini (`~/project`). Tampilan prompt berbeda-beda di tiap OS.

> **Ringkasan:** Terminal adalah jendelanya, shell adalah penerjemah perintahnya, dan prompt adalah tempat kamu mengetik.

### 1.b Cara Membuka

- **Windows:** cari **Terminal** atau **PowerShell** di menu Start. Jika memakai WSL, buka **Ubuntu**.
- **macOS:** buka **Terminal** lewat Spotlight (`Cmd+Space`).
- **Linux:** buka **Terminal** dari menu aplikasi, atau tekan `Ctrl+Alt+T` di banyak distro.

Ketik perintah, lalu tekan **Enter** untuk menjalankannya.

### 1.c Folder Kerja

Setiap perintah yang kamu jalankan bekerja di sebuah folder yang disebut **folder kerja saat ini** (*current working directory*). Saat terminal baru dibuka, biasanya kamu berada di folder home milikmu.

> **Ringkasan:** Perintah dijalankan di folder kerja saat ini. Selalu perhatikan lokasi folder di prompt.

---

## 2. Path dan Navigasi

### 2.a Path Absolut dan Relatif

**Path** adalah alamat sebuah file atau folder. Ada dua cara menulisnya:

- **Path absolut:** alamat lengkap dari akar sistem. Contoh: `/home/budi/project`.
- **Path relatif:** alamat dihitung dari folder kerja saat ini. Contoh: `project/index.html`.

Beberapa simbol khusus yang perlu dihafal:

| Simbol | Arti |
|---|---|
| `/` | Akar (root) sistem, atau pemisah antar folder |
| `~` | Folder home milikmu |
| `.` | Folder saat ini |
| `..` | Folder induk (satu tingkat di atas) |

> **Ringkasan:** Path absolut dimulai dari akar, path relatif dihitung dari folder saat ini. `~` adalah home, `.` folder ini, dan `..` folder induk.

### 2.b pwd, ls, dan cd

Tiga perintah ini dipakai paling sering.

#### Cara menulis

```text
pwd
# menampilkan lokasi folder kerja saat ini
ls
# menampilkan isi folder saat ini
ls -l
# menampilkan isi folder dalam bentuk daftar lengkap (ukuran, tanggal)
ls -a
# menampilkan semua file, termasuk file tersembunyi yang diawali titik
cd Documents
# masuk ke folder Documents
cd ..
# naik satu tingkat ke folder induk
cd ~
# pindah ke folder home dari mana saja
cd
# tanpa tujuan, juga kembali ke folder home
```

Tanda `-l` dan `-a` disebut **opsi** (*flag*), yaitu tambahan yang mengubah cara kerja perintah. Opsi bisa digabung, misalnya `ls -la`.

> **Catatan:** Di PowerShell, `ls` dan `cd` tetap bisa dipakai, tetapi opsinya berbeda (misalnya `ls -a` tidak ada). Di Command Prompt (cmd), gunakan `dir` sebagai pengganti `ls`.

> **Ringkasan:** `pwd` untuk melihat lokasi, `ls` untuk melihat isi, `cd` untuk berpindah folder.

### 2.c Tab dan Riwayat

Dua kebiasaan ini menghemat banyak waktu:

- **Tombol Tab:** melengkapi nama file atau folder otomatis. Ketik `cd Doc` lalu tekan Tab, maka terminal melengkapi menjadi `cd Documents`. Tekan Tab dua kali untuk melihat pilihan jika ada beberapa kemungkinan.
- **Panah atas dan bawah:** menampilkan perintah-perintah yang pernah kamu ketik, sehingga tidak perlu mengetik ulang.

> **Ringkasan:** Pakai Tab untuk melengkapi nama dan panah atas untuk mengulang perintah.

---

## 3. Mengelola File dan Folder

### 3.a Membuat

#### Cara menulis

```text
mkdir belajar
# membuat folder baru bernama belajar
mkdir -p belajar/html/latihan
# membuat folder bersarang sekaligus (-p membuat folder induknya juga)
touch index.html
# membuat file kosong bernama index.html
```

> **Catatan:** `touch` tidak tersedia di PowerShell. Sebagai gantinya, pakai `New-Item index.html`. Pengguna WSL, macOS, dan Linux bisa memakai `touch` biasa.

### 3.b Menyalin dan Memindah

#### Cara menulis

```text
cp index.html salinan.html
# menyalin file index.html menjadi salinan.html
cp -r belajar cadangan
# menyalin seluruh folder belajar (-r berarti termasuk isinya)
mv salinan.html baru.html
# mengganti nama file (memindah ke nama baru di folder yang sama)
mv baru.html belajar/
# memindahkan file baru.html ke dalam folder belajar
```

`mv` punya dua fungsi: memindah file ke folder lain dan mengganti nama file.

### 3.c Menghapus

#### Cara menulis

```text
rm baru.html
# menghapus file
rm -r belajar
# menghapus folder beserta seluruh isinya
```

> **Peringatan:** Di terminal, penghapusan bersifat permanen. File tidak masuk ke tempat sampah dan tidak bisa dikembalikan. Periksa kembali nama yang kamu ketik sebelum menekan Enter, terutama saat memakai `rm -r`.

### 3.d Melihat Isi File

```text
cat index.html
# menampilkan seluruh isi file di terminal
```

`cat` cocok untuk file pendek. Untuk file panjang, buka di editor.

### 3.e Nama dengan Spasi

Jika nama file atau folder mengandung spasi, apitlah dengan tanda kutip, atau hindari spasi dengan memakai tanda hubung.

```text
mkdir "folder baru"
# membuat folder dengan spasi di nama, harus diberi tanda kutip
mkdir folder-baru
# lebih disarankan: pakai tanda hubung agar tidak perlu kutip
```

> **Ringkasan:** `mkdir` membuat folder, `touch` membuat file, `cp` menyalin, `mv` memindah atau mengganti nama, `rm` menghapus permanen.

---

## 4. Tips Bekerja di Terminal

| Kebutuhan | Cara |
|---|---|
| Membersihkan layar | `clear` (atau `Ctrl+L`) |
| Menghentikan perintah yang sedang berjalan | `Ctrl+C` |
| Melihat bantuan sebuah perintah | `ls --help` (di macOS: `man ls`) |
| Menyalin dan menempel | `Ctrl+Shift+C` dan `Ctrl+Shift+V` di terminal Linux/Windows, `Cmd+C` dan `Cmd+V` di macOS |
| Mengulang perintah sebelumnya | Panah atas |

> **Catatan:** Di terminal, `Ctrl+C` berarti menghentikan perintah, bukan menyalin. Untuk menyalin teks di terminal Linux dan Windows, gunakan `Ctrl+Shift+C`.

Latihan singkat untuk mencoba semuanya:

1. Buka terminal dan jalankan `pwd`.
2. Buat folder `latihan` dengan `mkdir latihan`, lalu masuk dengan `cd latihan`.
3. Buat file `catatan.txt` dengan `touch catatan.txt`, lalu cek dengan `ls`.
4. Salin menjadi `catatan2.txt` dengan `cp`.
5. Ganti nama `catatan2.txt` menjadi `salinan.txt` dengan `mv`.
6. Keluar dengan `cd ..`, lalu hapus seluruh folder `latihan` dengan `rm -r latihan`.

> **Ringkasan:** Gunakan Tab, panah atas, dan `Ctrl+C` untuk bekerja lebih cepat. Latih dengan membuat dan menghapus folder percobaan.

---

## Rangkuman

- Terminal adalah jendela, shell adalah penerjemah perintah, prompt adalah tempat mengetik.
- Path absolut dimulai dari akar (`/`), path relatif dihitung dari folder saat ini. `~` adalah home, `.` folder ini, `..` folder induk.
- `pwd`, `ls`, dan `cd` dipakai untuk melihat lokasi, melihat isi, dan berpindah folder.
- `mkdir`, `touch`, `cp`, `mv`, dan `rm` dipakai untuk membuat, menyalin, memindah, dan menghapus. Penghapusan di terminal bersifat permanen.
- Tab melengkapi nama otomatis, panah atas mengulang perintah, dan `Ctrl+C` menghentikan perintah.
