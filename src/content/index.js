// DAFTAR MATERI — edit file ini untuk menambah / mengubah materi.
//
// Struktur:  bab  →  materi (file .md di src/content/<id-bab>/)
//
// Menambah materi baru di bab yang sudah ada:
//   1. Taruh file .md di src/content/<id-bab>/  (contoh: css/14-judul-baru.md)
//   2. Tambahkan satu baris di `materi:` bab itu, ikuti contoh baris lain.
//   Urutan tampil = urutan baris di bawah.
//
// Bab tanpa materi (materi: []) tampil sebagai "Belum ada materi".
// `saran` (opsional) = catatan "disarankan" yang tampil di atas isi materi.

export const bab = [
  {
    id: 'panduan',
    judul: "Panduan Belajar",
    deskripsi: "Cara belajar yang efektif, memakai AI dengan bijak, dan debugging. Dibaca sebelum bab teknis.",
    materi: [
      { slug: '01-cara-belajar-programming', judul: "Cara Belajar Programming yang Efektif", deskripsi: "Kebiasaan belajar yang membuat cepat mahir: mengetik sendiri, membaca error, belajar lewat proyek, mengelola waktu, dan bertanya dengan baik.", saran: "dibaca sebelum memulai bab apa pun", load: () => import('./panduan/01-cara-belajar-programming.md?raw') },
      { slug: '02-ai-dan-belajar-coding', judul: "AI dan Belajar Coding", deskripsi: "Kapan sebaiknya tidak memakai AI saat belajar coding, bagaimana memanfaatkannya dengan sehat, memilih jenis AI sesuai kebutuhan, serta batasan dan etikanya.", saran: "dibaca sebelum memulai bab apa pun, dan dibaca ulang saat masuk bab Vue", load: () => import('./panduan/02-ai-dan-belajar-coding.md?raw') },
      { slug: '03-debugging-dasar', judul: "Debugging Dasar", deskripsi: "Memahami jenis kesalahan di kode, membaca pesan error, teknik mencari bug dengan console.log dan DevTools, kesalahan pemula yang paling umum, dan latihan mencari bug.", saran: "bab html (dasar), lalu dibaca ulang setelah bab js", load: () => import('./panduan/03-debugging-dasar.md?raw') },
    ],
  },
  {
    id: 'web',
    judul: "Dasar Web",
    deskripsi: "Cara kerja web serta peran frontend dan backend.",
    materi: [
      { slug: '01-cara-kerja-web', judul: "Cara Kerja Web", deskripsi: "Memahami internet vs web, client dan server, browser, URL, DNS, request dan response, status code, dan cara melihatnya langsung di DevTools.", load: () => import('./web/01-cara-kerja-web.md?raw') },
      { slug: '02-frontend-dan-backend', judul: "Frontend dan Backend", deskripsi: "Memahami pembagian tugas frontend, backend, dan database, cara keduanya berkomunikasi lewat API, serta peta belajar di kursus ini.", load: () => import('./web/02-frontend-dan-backend.md?raw') },
    ],
  },
  {
    id: 'os',
    judul: "Sistem Operasi",
    deskripsi: "Memilih OS yang nyaman untuk programming.",
    materi: [
      { slug: '01-pilihan-os', judul: "Memilih OS untuk Programming", deskripsi: "Mengenal peran OS dalam pengembangan web dan tierlist Linux, macOS, dan Windows untuk programmer.", load: () => import('./os/01-pilihan-os.md?raw') },
      { slug: '02-jalur-distro-linux', judul: "Jalur Distro Linux: dari Mint sampai Arch", deskripsi: "Mengenal distro Linux, tangga belajar dari Mint/Ubuntu sampai Arch, cara mencoba Linux dengan aman, dan perintah dasar package manager.", load: () => import('./os/02-jalur-distro-linux.md?raw') },
      { slug: '03-windows-dan-macos-untuk-programmer', judul: "Windows dan macOS untuk Programmer", deskripsi: "Menyiapkan Windows dengan WSL dan macOS dengan Homebrew agar nyaman dipakai programming, serta perbandingan ketiga OS.", load: () => import('./os/03-windows-dan-macos-untuk-programmer.md?raw') },
    ],
  },
  {
    id: 'tools',
    judul: "Alat Programmer",
    deskripsi: "Terminal, Node.js dan npm, serta VS Code.",
    materi: [
      { slug: '01-terminal-dasar', judul: "Terminal Dasar", deskripsi: "Memakai terminal untuk berpindah folder, membuat, menyalin, memindah, dan menghapus file, lengkap dengan tips agar bekerja lebih cepat.", load: () => import('./tools/01-terminal-dasar.md?raw') },
      { slug: '02-nodejs-dan-npm', judul: "Node.js dan npm", deskripsi: "Memasang Node.js, menjalankan JavaScript di luar browser, dan memakai npm untuk mengelola paket dan script project.", load: () => import('./tools/02-nodejs-dan-npm.md?raw') },
      { slug: '03-vscode', judul: "VS Code", deskripsi: "Mengenal tampilan Visual Studio Code, membuka folder project, memakai terminal terintegrasi, memasang extension, dan shortcut penting.", load: () => import('./tools/03-vscode.md?raw') },
    ],
  },
  {
    id: 'html',
    judul: "HTML",
    deskripsi: "Struktur halaman web: teks, daftar, link, gambar, tabel, form, dan HTML semantik.",
    materi: [
      { slug: '01-pengenalan-html', judul: "Pengenalan HTML", deskripsi: "Memahami HTML sebagai bahasa markup, cara menulis tag, elemen, atribut, komentar, dan membuat file HTML pertamamu.", load: () => import('./html/01-pengenalan-html.md?raw') },
      { slug: '02-struktur-dokumen', judul: "Struktur Dokumen HTML", deskripsi: "Memahami kerangka halaman HTML: doctype, html, head, body, meta, title, serta struktur folder project web sederhana.", load: () => import('./html/02-struktur-dokumen.md?raw') },
      { slug: '03-teks-heading-paragraf', judul: "Teks: Heading, Paragraf, dan Penanda Teks", deskripsi: "Menulis teks di HTML dengan heading, paragraf, pindah baris, garis pemisah, penanda teks, kutipan, kode, dan karakter khusus.", load: () => import('./html/03-teks-heading-paragraf.md?raw') },
      { slug: '04-daftar', judul: "Daftar", deskripsi: "Membuat daftar tak berurutan, berurutan, bersarang, dan daftar deskripsi di HTML, serta kapan memakai masing-masing.", load: () => import('./html/04-daftar.md?raw') },
      { slug: '05-link', judul: "Link", deskripsi: "Membuat link dengan elemen a: alamat absolut dan relatif, link ke bagian halaman, tab baru, email, telepon, dan unduhan.", load: () => import('./html/05-link.md?raw') },
      { slug: '06-gambar-dan-media', judul: "Gambar dan Media", deskripsi: "Menampilkan gambar dengan img, menulis alt yang baik, figure dan figcaption, serta menyisipkan audio, video, dan konten dari situs lain.", load: () => import('./html/06-gambar-dan-media.md?raw') },
      { slug: '07-tabel', judul: "Tabel", deskripsi: "Membuat tabel di HTML dengan baris, kolom, judul kolom, bagian thead tbody tfoot, caption, serta menggabungkan sel dengan colspan dan rowspan.", load: () => import('./html/07-tabel.md?raw') },
      { slug: '08-form-dan-input', judul: "Form dan Input", deskripsi: "Membuat formulir dengan form, label, berbagai jenis input, textarea, select, button, validasi bawaan, dan mencoba mengirimnya tanpa backend.", load: () => import('./html/08-form-dan-input.md?raw') },
      { slug: '09-html-semantik', judul: "HTML Semantik", deskripsi: "Memahami elemen semantik seperti header, nav, main, section, article, aside, dan footer, serta kapan memakai div dan span.", load: () => import('./html/09-html-semantik.md?raw') },
      { slug: '10-proyek-halaman-profil', judul: "Proyek: Halaman Profil", deskripsi: "Menggabungkan semua materi HTML untuk membuat situs profil pribadi dua halaman dengan struktur semantik, gambar, tabel, daftar, link, dan formulir kontak.", load: () => import('./html/10-proyek-halaman-profil.md?raw') },
    ],
  },
  {
    id: 'css',
    judul: "CSS",
    deskripsi: "Tampilan halaman: selector, warna, box model, flexbox, grid, responsive, dan animasi.",
    materi: [
      { slug: '01-pengenalan-css', judul: "Pengenalan CSS", deskripsi: "Memahami fungsi CSS, cara menulis aturan, tiga cara memasang CSS ke HTML, komentar, dan cara memeriksa gaya lewat DevTools.", load: () => import('./css/01-pengenalan-css.md?raw') },
      { slug: '02-selector', judul: "Selector", deskripsi: "Memilih elemen dengan selector tag, class, id, universal, grup, kombinator keturunan dan anak, serta selector atribut.", load: () => import('./css/02-selector.md?raw') },
      { slug: '03-pseudo-dan-specificity', judul: "Pseudo-class, Specificity, dan Cascade", deskripsi: "Memakai pseudo-class dan pseudo-element, serta memahami aturan specificity, urutan, dan inheritance saat beberapa aturan CSS bertabrakan.", load: () => import('./css/03-pseudo-dan-specificity.md?raw') },
      { slug: '04-warna-dan-satuan', judul: "Warna dan Satuan", deskripsi: "Menulis warna dengan nama, hex, rgb, dan hsl, mengatur transparansi, serta memahami satuan px, em, rem, persen, vw, dan vh.", load: () => import('./css/04-warna-dan-satuan.md?raw') },
      { slug: '05-teks-dan-font', judul: "Teks dan Font", deskripsi: "Mengatur jenis huruf, ukuran, ketebalan, jarak baris, perataan, dan dekorasi teks, serta memakai Google Fonts.", load: () => import('./css/05-teks-dan-font.md?raw') },
      { slug: '06-box-model', judul: "Box Model", deskripsi: "Memahami setiap elemen sebagai kotak: content, padding, border, margin, box-sizing, memusatkan kotak, dan menangani isi yang melebihi kotak.", load: () => import('./css/06-box-model.md?raw') },
      { slug: '07-background-border-dan-shadow', judul: "Background, Border Radius, dan Shadow", deskripsi: "Memakai latar belakang warna, gambar, dan gradien, membulatkan sudut, memberi bayangan, serta mengatur gambar dengan object-fit.", load: () => import('./css/07-background-border-dan-shadow.md?raw') },
      { slug: '08-display-dan-position', judul: "Display dan Position", deskripsi: "Memahami elemen block, inline, dan inline-block, menyembunyikan elemen, serta memposisikan elemen dengan relative, absolute, fixed, sticky, dan z-index.", load: () => import('./css/08-display-dan-position.md?raw') },
      { slug: '09-flexbox', judul: "Flexbox", deskripsi: "Menyusun elemen dalam satu dimensi dengan flexbox: arah, perataan, jarak, pembungkusan, dan ukuran fleksibel, lengkap dengan pola yang sering dipakai.", load: () => import('./css/09-flexbox.md?raw') },
      { slug: '10-grid', judul: "CSS Grid", deskripsi: "Menyusun tata letak dua dimensi dengan CSS Grid: kolom, baris, satuan fr, gap, menempatkan item, grid-template-areas, dan pola galeri responsif.", load: () => import('./css/10-grid.md?raw') },
      { slug: '11-responsive-design', judul: "Responsive Design", deskripsi: "Membuat halaman nyaman di semua ukuran layar dengan viewport, media query, pendekatan mobile-first, gambar fleksibel, dan pengujian lewat DevTools.", load: () => import('./css/11-responsive-design.md?raw') },
      { slug: '12-transisi-animasi-dan-variabel', judul: "Transisi, Animasi, dan Variabel CSS", deskripsi: "Membuat perubahan halus dengan transition dan transform, animasi dengan keyframes, serta menyimpan nilai yang dipakai berulang dengan variabel CSS.", load: () => import('./css/12-transisi-animasi-dan-variabel.md?raw') },
      { slug: '13-proyek-mempercantik-profil', judul: "Proyek: Mempercantik Halaman Profil", deskripsi: "Memberi tampilan pada situs profil dari bab HTML dengan variabel, flexbox, grid, kartu, tabel, formulir, responsive, animasi, dan mode gelap.", load: () => import('./css/13-proyek-mempercantik-profil.md?raw') },
    ],
  },
  {
    id: 'js',
    judul: "JavaScript",
    deskripsi: "Dari variabel dan fungsi sampai DOM, event, async, dan fetch API.",
    materi: [
      { slug: '01-pengenalan-javascript', judul: "Pengenalan JavaScript", deskripsi: "Memahami peran JavaScript di web, cara memasangnya ke HTML, console.log, DevTools Console, komentar, dan perbedaannya dengan Java atau C++.", load: () => import('./js/01-pengenalan-javascript.md?raw') },
      { slug: '02-variabel-dan-tipe-data', judul: "Variabel dan Tipe Data", deskripsi: "Menyimpan nilai dengan let dan const, mengenal tipe data string, number, boolean, null, dan undefined, template literal, serta konversi tipe.", load: () => import('./js/02-variabel-dan-tipe-data.md?raw') },
      { slug: '03-operator', judul: "Operator", deskripsi: "Memakai operator aritmetika, assignment, perbandingan (== dan ===), logika (&&, ||, !, ??), serta memahami urutan pengerjaan operator.", load: () => import('./js/03-operator.md?raw') },
      { slug: '04-kondisi', judul: "Kondisi", deskripsi: "Mengambil keputusan dalam kode dengan if, else if, else, switch, operator ternary, serta memahami nilai truthy dan falsy.", load: () => import('./js/04-kondisi.md?raw') },
      { slug: '05-perulangan', judul: "Perulangan", deskripsi: "Mengulang kode dengan for, while, do...while, for...of, serta mengendalikan perulangan dengan break dan continue.", load: () => import('./js/05-perulangan.md?raw') },
      { slug: '06-fungsi', judul: "Fungsi", deskripsi: "Membuat dan memanggil fungsi, memakai parameter dan return, arrow function, ruang lingkup variabel, dan konsep callback.", load: () => import('./js/06-fungsi.md?raw') },
      { slug: '07-array', judul: "Array", deskripsi: "Menyimpan banyak nilai dalam array: membuat, mengakses lewat indeks, menambah dan menghapus elemen, mencari, menyalin, dan menelusuri isinya.", load: () => import('./js/07-array.md?raw') },
      { slug: '08-method-array', judul: "Method Array: forEach, map, filter, find, reduce, dan sort", deskripsi: "Mengolah array dengan method modern forEach, map, filter, find, some, every, reduce, dan sort, lengkap dengan method chaining.", load: () => import('./js/08-method-array.md?raw') },
      { slug: '09-object', judul: "Object", deskripsi: "Menyimpan data berpasangan nama dan nilai dengan object: membuat, mengakses, mengubah, method, destructuring, spread, dan menelusuri object.", load: () => import('./js/09-object.md?raw') },
      { slug: '10-json-dan-localstorage', judul: "JSON dan localStorage", deskripsi: "Memahami format JSON, mengubah object menjadi teks dan sebaliknya dengan JSON.stringify dan JSON.parse, serta menyimpan data di browser dengan localStorage.", load: () => import('./js/10-json-dan-localstorage.md?raw') },
      { slug: '11-dom', judul: "DOM: Memilih dan Mengubah Elemen", deskripsi: "Memahami DOM sebagai pohon elemen halaman, memilih elemen dengan querySelector, mengubah teks, atribut, class, dan gaya, serta membuat dan menghapus elemen.", load: () => import('./js/11-dom.md?raw') },
      { slug: '12-event', judul: "Event", deskripsi: "Merespons aksi pengguna dengan addEventListener: click, input, submit, keydown, object event, preventDefault, bubbling, dan event delegation.", load: () => import('./js/12-event.md?raw') },
      { slug: '13-modul-import-export', judul: "Modul: import dan export", deskripsi: "Memecah kode JavaScript menjadi beberapa file dengan export dan import, perbedaan named dan default export, serta cara menjalankannya di browser.", load: () => import('./js/13-modul-import-export.md?raw') },
      { slug: '14-proyek-todo-list', judul: "Proyek: Aplikasi Daftar Tugas", deskripsi: "Membuat aplikasi daftar tugas yang bisa menambah, menandai selesai, menghapus, dan menyimpan data di localStorage dengan semua materi bab JavaScript.", load: () => import('./js/14-proyek-todo-list.md?raw') },
      { slug: '15-asynchronous-dan-promise', judul: "Asynchronous: Promise dan async/await", deskripsi: "Memahami kode yang berjalan tanpa menunggu, setTimeout, Promise dengan then dan catch, async/await, penanganan error, dan Promise.all.", load: () => import('./js/15-asynchronous-dan-promise.md?raw') },
      { slug: '16-fetch-dan-api-publik', judul: "Fetch: Mengambil Data dari API", deskripsi: "Mengambil dan mengirim data ke server dengan fetch, memahami response dan status, menangani loading dan error, serta menampilkan data API publik di halaman.", load: () => import('./js/16-fetch-dan-api-publik.md?raw') },
    ],
  },
  {
    id: 'git',
    judul: "Git & GitHub",
    deskripsi: "Menyimpan riwayat kode, bercabang, dan berkolaborasi lewat GitHub.",
    materi: [
      { slug: '01-pengenalan-dan-instalasi-git', judul: "Pengenalan dan Instalasi Git", deskripsi: "Memahami fungsi version control, perbedaan Git dan GitHub, memasang Git di Windows, macOS, dan Linux, serta konfigurasi awal.", load: () => import('./git/01-pengenalan-dan-instalasi-git.md?raw') },
      { slug: '02-repository-pertama', judul: "Repository Pertama: init, add, commit, dan log", deskripsi: "Membuat repository, memantau perubahan dengan status, menyimpan riwayat dengan add dan commit, menulis pesan commit yang baik, serta membaca riwayat dengan log dan diff.", load: () => import('./git/02-repository-pertama.md?raw') },
      { slug: '03-gitignore-dan-membatalkan-perubahan', judul: ".gitignore dan Membatalkan Perubahan", deskripsi: "Mengecualikan file dari Git dengan .gitignore, serta membatalkan perubahan dengan restore, amend, revert, dan reset beserta risikonya.", load: () => import('./git/03-gitignore-dan-membatalkan-perubahan.md?raw') },
      { slug: '04-branch-dan-merge', judul: "Branch dan Merge", deskripsi: "Bekerja di cabang terpisah dengan branch, berpindah dengan switch, menggabungkan dengan merge, dan menyelesaikan konflik penggabungan.", load: () => import('./git/04-branch-dan-merge.md?raw') },
      { slug: '05-github-dan-remote', judul: "GitHub dan Remote: push, pull, dan clone", deskripsi: "Membuat akun GitHub, menyiapkan autentikasi dengan SSH, menghubungkan repository lokal ke remote, serta memakai push, pull, fetch, dan clone.", load: () => import('./git/05-github-dan-remote.md?raw') },
      { slug: '06-kolaborasi-pull-request', judul: "Kolaborasi: Pull Request, Fork, dan Issue", deskripsi: "Bekerja bersama di GitHub dengan feature branch workflow, pull request, review kode, fork, issue, dan menulis README yang baik.", load: () => import('./git/06-kolaborasi-pull-request.md?raw') },
      { slug: '07-proyek-portofolio-github', judul: "Proyek: Portofolio di GitHub", deskripsi: "Mengunggah proyek profil dan daftar tugas ke GitHub dengan riwayat commit rapi, README, branch fitur, pull request, dan profil GitHub yang siap dilihat orang.", load: () => import('./git/07-proyek-portofolio-github.md?raw') },
    ],
  },
    {
    id: 'vue',
    judul: "Vue",
    deskripsi: "Membangun tampilan interaktif dengan Vue: komponen, data reaktif, directive, router, Pinia, dan fetch API.",
    materi: [
      { slug: '01-pengenalan-vue', judul: "Pengenalan Vue", deskripsi: "Memahami apa itu Vue dan framework frontend, mengapa JavaScript biasa mulai merepotkan, konsep data reaktif dan komponen, serta gambaran isi bab ini.", saran: "bab JavaScript (sampai Event dan Modul) serta materi Node.js dan npm", load: () => import('./vue/01-pengenalan-vue.md?raw') },
      { slug: '02-membuat-project-vue', judul: "Membuat Project Vue dengan Vite", deskripsi: "Membuat project dengan npm create vue, mengenal struktur folder, menjalankan dev server, memasang extension Vue di VS Code, dan memakai Vue DevTools.", load: () => import('./vue/02-membuat-project-vue.md?raw') },
      { slug: '03-komponen-dan-file-vue', judul: "Komponen dan File .vue", deskripsi: "Memahami komponen, tiga bagian file .vue (template, script setup, style), memakai komponen di dalam komponen lain, dan scoped style.", load: () => import('./vue/03-komponen-dan-file-vue.md?raw') },
      { slug: '04-template-dan-interpolasi', judul: "Template dan Interpolasi", deskripsi: "Menampilkan data dengan kurung kurawal ganda, memakai ekspresi JavaScript sederhana di template, dan mengenal v-html beserta risikonya.", load: () => import('./vue/04-template-dan-interpolasi.md?raw') },
      { slug: '05-data-reaktif-dengan-ref', judul: "Data Reaktif dengan ref", deskripsi: "Menyimpan data yang otomatis memperbarui tampilan dengan ref, mengakses nilainya lewat .value di script, dan kesalahan umum pemula.", load: () => import('./vue/05-data-reaktif-dengan-ref.md?raw') },
      { slug: '06-object-dan-array-reaktif', judul: "Object dan Array Reaktif", deskripsi: "Menyimpan object dan array sebagai data reaktif dengan ref dan reactive, mengubah isinya, serta memahami perbedaan keduanya.", load: () => import('./vue/06-object-dan-array-reaktif.md?raw') },
      { slug: '07-v-bind', judul: "Binding Atribut dengan v-bind", deskripsi: "Mengikat atribut seperti src, href, dan disabled ke data dengan v-bind beserta singkatan titik dua.", load: () => import('./vue/07-v-bind.md?raw') },
      { slug: '08-v-on', judul: "Event dengan v-on", deskripsi: "Merespons klik dan input dengan v-on beserta singkatan @, memanggil fungsi, memakai object event, dan modifier seperti prevent.", load: () => import('./vue/08-v-on.md?raw') },
      { slug: '09-v-model', judul: "Formulir dengan v-model", deskripsi: "Menghubungkan input, textarea, checkbox, radio, dan select dengan data lewat v-model dua arah, serta modifier trim dan number.", load: () => import('./vue/09-v-model.md?raw') },
      { slug: '10-v-if', judul: "Tampilan Bersyarat dengan v-if", deskripsi: "Menampilkan atau menghilangkan elemen berdasarkan kondisi dengan v-if, v-else-if, v-else, dan template, serta memahami apa yang terjadi di DOM.", load: () => import('./vue/10-v-if.md?raw') },
      { slug: '11-v-show', judul: "v-show dan Perbedaannya dengan v-if", deskripsi: "Menyembunyikan elemen dengan v-show lewat CSS display, serta memilih antara v-show dan v-if sesuai kebutuhan.", load: () => import('./vue/11-v-show.md?raw') },
      { slug: '12-v-for', judul: "Menampilkan Daftar dengan v-for", deskripsi: "Menampilkan array dan object dengan v-for, memakai indeks, kenapa atribut key penting, dan menambah serta menghapus item dari daftar.", load: () => import('./vue/12-v-for.md?raw') },
      { slug: '13-class-dan-style', judul: "Binding Class dan Style", deskripsi: "Mengubah class dan style elemen secara dinamis dengan object dan array, misalnya untuk tombol aktif, status selesai, dan mode gelap.", load: () => import('./vue/13-class-dan-style.md?raw') },
      { slug: '14-computed', judul: "Computed: Data Turunan", deskripsi: "Membuat nilai yang dihitung dari data lain dengan computed, bedanya dengan fungsi biasa, serta contoh pencarian dan filter daftar.", load: () => import('./vue/14-computed.md?raw') },
      { slug: '15-watch', judul: "Watch: Bereaksi terhadap Perubahan Data", deskripsi: "Menjalankan kode saat data berubah dengan watch, perbedaannya dengan computed, serta contoh menyimpan ke localStorage otomatis.", load: () => import('./vue/15-watch.md?raw') },
      { slug: '16-props', judul: "Props: Mengirim Data ke Komponen Anak", deskripsi: "Mengirim data dari komponen induk ke anak dengan defineProps, memberi tipe dan nilai bawaan, serta aturan bahwa props tidak boleh diubah anak.", load: () => import('./vue/16-props.md?raw') },
      { slug: '17-emit', judul: "Emit: Mengirim Kejadian ke Komponen Induk", deskripsi: "Memberi tahu komponen induk dari komponen anak dengan defineEmits, mengirim data lewat event, dan pola props turun, event naik.", load: () => import('./vue/17-emit.md?raw') },
      { slug: '18-slot', judul: "Slot: Isi Komponen yang Fleksibel", deskripsi: "Membuat komponen yang isinya bisa diatur dari luar dengan slot, slot bernama, dan isi bawaan slot.", load: () => import('./vue/18-slot.md?raw') },
      { slug: '19-lifecycle-hooks', judul: "Lifecycle Hooks", deskripsi: "Memahami siklus hidup komponen dan memakai onMounted dan onUnmounted untuk menjalankan kode saat komponen muncul dan dibuang.", load: () => import('./vue/19-lifecycle-hooks.md?raw') },
      { slug: '20-vue-router-dasar', judul: "Vue Router: Halaman dan Navigasi", deskripsi: "Membuat aplikasi banyak halaman dengan Vue Router: mendaftarkan route, RouterLink, RouterView, dan perbedaan folder views dan components.", load: () => import('./vue/20-vue-router-dasar.md?raw') },
      { slug: '21-router-params-dan-navigasi', judul: "Router: Parameter dan Navigasi Lewat Kode", deskripsi: "Membuat route dinamis dengan parameter, membaca useRoute, berpindah halaman dengan useRouter, dan halaman 404.", load: () => import('./vue/21-router-params-dan-navigasi.md?raw') },
      { slug: '22-pinia', judul: "Pinia: Data Bersama Antar Komponen", deskripsi: "Menyimpan data yang dipakai banyak komponen dengan Pinia: membuat store, state, getters, actions, dan memakainya di komponen.", load: () => import('./vue/22-pinia.md?raw') },
      { slug: '23-fetch-api-di-vue', judul: "Mengambil Data dari API di Vue", deskripsi: "Memakai fetch di dalam komponen dengan onMounted, menampilkan status loading dan error dengan v-if, serta menampilkan data API publik.", load: () => import('./vue/23-fetch-api-di-vue.md?raw') },
      { slug: '24-proyek-daftar-tugas-vue', judul: "Proyek: Daftar Tugas dengan Vue", deskripsi: "Membangun ulang aplikasi daftar tugas dari bab JavaScript dengan Vue: komponen, v-for, v-model, computed, Pinia, dan penyimpanan di localStorage.", load: () => import('./vue/24-proyek-daftar-tugas-vue.md?raw') },
    ],
  },

]

// MODUL PENGAJAR (opsional, di balik gerbang). Kosong = "Belum ada modul pengajar".
// Contoh:
//   { id: 'vue-1', judul: 'Contekan Vue 1', deskripsi: '...', load: () => import('./pengajar/vue-1.md?raw') },
export const pengajar = []
