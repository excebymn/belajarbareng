---
jenis: murid
bab: git
urutan: 4
judul: "Branch dan Merge"
deskripsi: "Bekerja di cabang terpisah dengan branch, berpindah dengan switch, menggabungkan dengan merge, dan menyelesaikan konflik penggabungan."
---

# Branch dan Merge

Pada materi ini kamu akan mempelajari: konsep branch (cabang), cara membuat dan berpindah branch, cara menggabungkan branch dengan `merge`, cara menyelesaikan konflik, serta cara menghapus branch yang sudah selesai dipakai.

Sebelum mulai, pastikan kamu sudah memahami: `git add`, `git commit`, `git log`, dan cara membatalkan perubahan dari materi sebelumnya.

---

## 1. Apa itu Branch

**Branch** (cabang) adalah jalur riwayat yang terpisah dalam satu repository. Kamu bisa mengerjakan fitur baru di sebuah branch tanpa mengganggu versi utama yang sudah berjalan baik. Jika fiturnya berhasil, branch digabungkan. Jika gagal, branch dibuang tanpa merusak apa pun.

Analogi: bayangkan kamu menulis laporan. Daripada langsung mengubah naskah utama, kamu **menyalin naskah ke ruang percobaan**, mencoba ide barumu di sana, lalu hanya jika bagus, kamu memasukkannya ke naskah utama.

```text
main:     A --- B --- C ------------------- F
                       \                   /
fitur-login:            D --- E ----------
```

- Cabang utama bernama `main`.
- Di commit `C`, dibuat cabang `fitur-login`, yang berisi commit `D` dan `E`.
- Di commit `F`, cabang itu digabungkan kembali ke `main`.

Branch di Git sangat ringan: sebuah branch hanyalah **penunjuk** ke sebuah commit, bukan salinan seluruh project. Membuatnya hampir seketika, sehingga kita bebas membuat banyak branch.

Kegunaan branch:

| Kegunaan | Contoh nama branch |
|---|---|
| Mengembangkan fitur baru | `fitur-login`, `fitur-keranjang` |
| Memperbaiki bug | `perbaiki-tombol-hapus` |
| Mencoba eksperimen | `coba-tema-gelap` |
| Bekerja bersama tanpa saling mengganggu | Satu branch per orang atau per tugas |

> **Ringkasan:** Branch adalah jalur riwayat terpisah. Kerjakan fitur baru di branch, lalu gabungkan ke `main` setelah berhasil.

---

## 2. Membuat dan Berpindah Branch

```text
git branch
# menampilkan daftar branch, tanda * menunjukkan branch yang sedang aktif
```

```text
* main
```

### 2.a Membuat Branch Baru

```text
git switch -c fitur-footer
# membuat branch bernama fitur-footer sekaligus pindah ke sana (-c berarti create)
git branch
```

```text
* fitur-footer
  main
```

### 2.b Berpindah Branch

```text
git switch main
# pindah ke branch main
git switch fitur-footer
# pindah kembali ke fitur-footer
```

Saat berpindah, **isi folder project ikut berubah** sesuai keadaan branch tujuan. File yang ada di satu branch bisa tidak ada di branch lain. Itu normal dan bukan file yang hilang.

> **Catatan:** Sebelum berpindah branch, sebaiknya commit dulu semua perubahan (`git status` bersih). Jika ada perubahan yang belum di-commit dan berbenturan dengan branch tujuan, Git akan menolak berpindah dan memberi tahu alasannya.

> **Catatan:** Pada versi Git lama, kamu mungkin menemukan `git checkout`. Fungsinya mirip, dan `git switch` dibuat agar lebih jelas untuk berpindah branch.

### 2.c Aturan Penamaan Branch

- Huruf kecil, tanpa spasi, pisahkan dengan tanda hubung.
- Nama menjelaskan tujuan: `perbaiki-validasi-form`, bukan `branch1`.

> **Ringkasan:** `git switch -c nama` membuat dan berpindah ke branch baru, dan `git switch nama` berpindah ke branch yang sudah ada.

---

## 3. Bekerja di Branch

Setelah berada di `fitur-footer`, bekerjalah seperti biasa.

```text
echo "<footer>Hak cipta 2026</footer>" > footer.html
git add footer.html
git commit -m "Tambah footer"
git log --oneline
```

```text
b2c3d4e Tambah footer
a1b2c3d Tambah README
```

Sekarang pindah ke `main` dan periksa:

```text
git switch main
ls
# footer.html tidak ada di sini, karena commit "Tambah footer" hanya ada di fitur-footer
```

Dua branch kini menyimpan keadaan yang berbeda. Itulah gunanya: pekerjaan di `fitur-footer` tidak mengganggu `main`.

---

## 4. Menggabungkan dengan merge

Setelah fitur selesai dan diuji, gabungkan ke branch utama.

#### Cara menulis

```text
git switch main
# pindah ke branch TUJUAN penggabungan (yang akan menerima perubahan)
git merge fitur-footer
# menggabungkan isi fitur-footer ke branch yang sedang aktif (main)
```

Aturan yang perlu diingat: **kamu berada di branch penerima, lalu memanggil branch yang akan digabungkan.**

Hasilnya, pada kasus sederhana:

```text
Updating a1b2c3d..b2c3d4e
Fast-forward
 footer.html | 1 +
 1 file changed, 1 insertion(+)
```

`footer.html` kini ada di `main`.

### 4.a Fast-forward dan Merge Commit

Ada dua cara Git menggabungkan.

| | Fast-forward | Merge commit |
|---|---|---|
| Kapan terjadi | `main` tidak berubah sejak branch dibuat | Kedua branch sama-sama punya commit baru |
| Yang dilakukan Git | Menggeser `main` maju ke commit terakhir branch | Membuat commit penggabungan baru dengan dua induk |
| Bentuk riwayat | Lurus | Bercabang dan menyatu |

```text
Fast-forward:
main:  A -- B -- C
                  \
fitur:             D -- E       ->  main:  A -- B -- C -- D -- E

Merge commit:
main:  A -- B -- C ---- F        F adalah commit hasil penggabungan
                \      /
fitur:           D -- E
```

Untuk merge commit, Git membuka editor untuk pesan penggabungan. Terima saja pesan bawaannya (simpan dan tutup editor).

### 4.b Menghapus Branch yang Selesai

Setelah tergabung, branch-nya tidak diperlukan lagi.

```text
git branch -d fitur-footer
# menghapus branch yang sudah digabung (aman, Git menolak jika belum tergabung)
git branch -D fitur-eksperimen
# memaksa menghapus branch yang belum digabung (hati-hati, pekerjaannya hilang)
```

Commit-nya sendiri tidak hilang, karena sudah menjadi bagian dari riwayat `main`.

> **Ringkasan:** Berpindah ke branch penerima (`main`), lalu `git merge nama-branch`. Hapus branch yang sudah selesai dengan `git branch -d`.

---

## 5. Konflik Penggabungan

**Konflik** terjadi saat dua branch mengubah **bagian yang sama dari file yang sama**, sehingga Git tidak tahu versi mana yang harus dipakai. Ini normal dan bukan tanda kamu salah, terutama saat bekerja bersama.

### 5.a Membuat Konflik untuk Latihan

```text
git switch -c versi-a
echo "Judul: Belajar Web" > judul.txt
git add judul.txt
git commit -m "Tambah judul versi A"

git switch main
git switch -c versi-b
echo "Judul: Belajar Pemrograman" > judul.txt
git add judul.txt
git commit -m "Tambah judul versi B"

git switch main
git merge versi-a
# berhasil (fast-forward)
git merge versi-b
# KONFLIK: kedua branch menulis baris judul yang berbeda
```

### 5.b Membaca Penanda Konflik

```text
Auto-merging judul.txt
CONFLICT (add/add): Merge conflict in judul.txt
Automatic merge failed; fix conflicts and then commit the result.
```

Git menandai bagian bermasalah di dalam file.

```text
<<<<<<< HEAD
Judul: Belajar Web
=======
Judul: Belajar Pemrograman
>>>>>>> versi-b
```

| Penanda | Artinya |
|---|---|
| `<<<<<<< HEAD` | Awal versi dari branch yang sedang aktif (`main`) |
| `=======` | Pemisah dua versi |
| `>>>>>>> versi-b` | Akhir versi dari branch yang digabungkan |

### 5.c Menyelesaikan Konflik

1. Buka file yang berkonflik di editor. VS Code menampilkan tombol bantuan seperti **Accept Current Change**, **Accept Incoming Change**, dan **Accept Both Changes**.
2. Putuskan isi akhir yang benar. Kamu boleh memilih salah satu, menggabungkan keduanya, atau menulis ulang.
3. **Hapus semua penanda** (`<<<<<<<`, `=======`, `>>>>>>>`).
4. Simpan file, lalu selesaikan penggabungan.

```text
Judul: Belajar Web dan Pemrograman
```

```text
git add judul.txt
# menandai konflik pada file ini sudah diselesaikan
git commit
# menyelesaikan penggabungan (pesan bawaan sudah cukup)
```

Jika penggabungan terlalu membingungkan dan ingin dibatalkan sepenuhnya:

```text
git merge --abort
# membatalkan merge dan kembali ke keadaan sebelum merge
```

Kiat mengurangi konflik:

- Lakukan commit **kecil dan sering**.
- **Gabungkan sering**, jangan membiarkan branch hidup berminggu-minggu.
- Komunikasikan dengan rekan agar tidak mengedit bagian yang sama.

> **Ringkasan:** Konflik terjadi saat dua branch mengubah bagian yang sama. Selesaikan dengan memilih isi akhir, menghapus penanda konflik, lalu `git add` dan `git commit`. Gunakan `git merge --abort` untuk membatalkan.

---

## 6. Alur Kerja dengan Branch

Pola sederhana yang cocok untuk semua project:

```text
1. git switch main
2. git switch -c fitur-baru
3. ...edit, git add, git commit (berulang)...
4. git switch main
5. git merge fitur-baru
6. git branch -d fitur-baru
```

Dengan pola ini, `main` selalu berisi versi yang **berfungsi**, sedangkan pekerjaan yang belum selesai berada di branch masing-masing.

---

## 7. Latihan Singkat

1. Buat repository, commit satu file, lalu buat branch `fitur-menu`.
2. Tambah dan commit dua perubahan di branch itu, lalu pindah ke `main` dan lihat bahwa perubahan itu belum ada.
3. Gabungkan `fitur-menu` ke `main`, lalu hapus branch-nya.
4. Buat konflik sengaja (seperti contoh di atas), lalu selesaikan.
5. Coba `git merge --abort` pada konflik lain.
6. Jalankan `git log --oneline --graph --all` untuk melihat bentuk percabangan riwayatmu.

---

## Rangkuman

- Branch adalah jalur riwayat terpisah yang ringan, dipakai untuk fitur baru, perbaikan, dan eksperimen tanpa mengganggu `main`.
- `git switch -c nama` membuat dan berpindah ke branch baru, dan `git switch nama` berpindah ke branch yang ada.
- `git merge nama-branch` dijalankan dari branch penerima. Hasilnya bisa fast-forward atau merge commit.
- Konflik terjadi saat dua branch mengubah bagian yang sama. Selesaikan dengan mengedit file, menghapus penanda, lalu `git add` dan `git commit`.
- `git merge --abort` membatalkan penggabungan, dan `git branch -d` menghapus branch yang sudah tergabung.
