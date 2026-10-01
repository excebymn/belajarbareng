// DAFTAR PERTEMUAN — edit file ini saja untuk menambah materi.
//
// Cara menambah materi:
//   1. Taruh file .md di src/content/pertemuan-XX/
//   2. Isi `murid` / `pengajar` dengan import file itu (lihat pertemuan 1).
//   3. Kalau belum ada file-nya, biarkan `null` → website menampilkan "Belum ada materi".
export const pertemuan = [
  {
    no: 1,
    judul: "Pengenalan Web",
    deskripsi: "Pengenalan konsep Web dan html dasar",
    murid: () => import("./Pengenalan-Web/murid.md?raw"),
    pengajar: () => import("./Pengenalan-Web/pengajar.md?raw"),
  },
  {
    no: 2,
    judul: "Web Lanjutan",
    deskripsi: "Mendalami HTML, CSS, dan JS dasar",
    murid: () => import("./HTML+CSS+JS/murid.md?raw"),
    pengajar: () => import("./HTML+CSS+JS/pengajar.md?raw"),
  },
  {
    no: 3,
    judul: "Pengenalan Framework dan Setup Vue",
    deskripsi: "Pengenalan framework Vue dan cara setup project.",
    murid: () => import("./Setup-Vue/murid.md?raw"),
    pengajar: () => import("./Setup-Vue/pengajar.md?raw"),
  },
  {
    no: 4,
    judul: "Vue dan JS dasar",
    deskripsi: "Sedikit Mendalami Vue dan JavaScript dasar.",
    murid: () => import("./Vue-JS-Dasar/murid.md?raw"),
    pengajar: () => import("./Vue-JS-Dasar/pengajar.md?raw"),
  },
];
