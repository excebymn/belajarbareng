<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { daftarBab, semuaMateri } from '../lib/content'
import kucingLaptop from '../assets/hero/kucing-laptop.webp'
import anjingGaming from '../assets/hero/anjing-gaming.webp'
import kucingTopeng from '../assets/hero/kucing-topeng.webp'
import hackerMainan from '../assets/hero/hacker-mainan.webp'

const q = ref('')
const kata = computed(() => q.value.trim().toLowerCase())
// Saat mencari, tampilkan daftar materi (dari semua bab); kalau kosong, tampilkan kartu bab.
const hasil = computed(() => semuaMateri.filter(m => `${m.judul} ${m.deskripsi} ${m.babJudul}`.toLowerCase().includes(kata.value)))
const ringkas = `${daftarBab.length} bab · ${semuaMateri.length} materi`

const slides = [
  { src: kucingLaptop, alt: 'Kucing duduk di depan laptop yang menampilkan kode' },
  { src: anjingGaming, alt: 'Anjing memakai headset di depan komputer' },
  { src: kucingTopeng, alt: 'Kucing setengah wajah bertopeng dengan latar kode hijau' },
  { src: hackerMainan, alt: 'Orang berkacamata mengetik di laptop mainan dengan latar kode hijau' },
]
const idx = ref(0)
let timer
onMounted(() => { timer = setInterval(() => (idx.value = (idx.value + 1) % slides.length), 3500) })
onBeforeUnmount(() => clearInterval(timer))
</script>
<template>
  <div class="home">
    <div class="hero-band">
      <div class="wrap hero-grid">
        <div class="hero-text">
          <h1 class="hero">Belajar webdev bareng bareng.</h1>
          <p class="lead">Belajar WebDev lebih lanjut agar kita #selangkahlebihmaju</p>
        </div>
        <div class="slides">
          <img v-for="(s, i) in slides" :key="s.src" :src="s.src" :alt="s.alt" :class="{ on: i === idx }" :aria-hidden="i !== idx" width="720" height="720" />
        </div>
      </div>
    </div>
    <section class="wrap list">
      <h2 class="sec">Semua bab</h2>
      <div class="tools">
        <span class="count">{{ kata ? `${hasil.length} materi cocok` : ringkas }}</span>
        <input v-model="q" type="search" placeholder="Cari materi, mis. flexbox" aria-label="Cari materi" />
      </div>
      <template v-if="kata">
        <div class="mlist">
          <RouterLink v-for="(m, i) in hasil.slice(0, 30)" :key="m.to" :to="m.to" class="row" :style="{ '--i': i }">
            <span class="n">{{ m.babJudul }}</span>
            <span class="t"><b>{{ m.judul }}</b><small>{{ m.deskripsi }}</small></span>
            <span class="go">→</span>
          </RouterLink>
        </div>
        <p v-if="!hasil.length" class="note">Tidak ada materi yang cocok.</p>
      </template>
      <div v-else class="grid">
        <RouterLink v-for="(b, i) in daftarBab" :key="b.id" :to="`/bab/${b.id}`" class="card" :style="{ '--i': i }">
          <span class="tag" :class="{ dim: !b.materi.length }">{{ b.materi.length ? `${b.materi.length} materi` : 'Belum ada materi' }}</span>
          <div class="body"><small>Bab {{ b.no }}</small><h3>{{ b.judul }}</h3><p>{{ b.deskripsi }}</p></div>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
