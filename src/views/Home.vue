<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { daftar, tersedia } from '../lib/content'
import kucingLaptop from '../assets/hero/kucing-laptop.webp'
import anjingGaming from '../assets/hero/anjing-gaming.webp'
import kucingTopeng from '../assets/hero/kucing-topeng.webp'
import hackerMainan from '../assets/hero/hacker-mainan.webp'

const q = ref('')
const hasil = computed(() => daftar.filter(p => (p.judul + ' ' + p.deskripsi).toLowerCase().includes(q.value.trim().toLowerCase())))

// Gambar hero, tampil bergantian
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
  <div class="hero-band">
    <div class="wrap hero-grid">
      <div class="hero-text">
        <h1 class="hero">Belajar webdev bareng kakak kelas.</h1>
        <p class="lead">JavaScript, Vue, Git, sampai backend. Baca modulnya, salin kodenya, langsung praktik.</p>
      </div>
      <div class="slides">
        <img v-for="(s, i) in slides" :key="s.src" :src="s.src" :alt="s.alt" :class="{ on: i === idx }" :aria-hidden="i !== idx" width="720" height="720" />
      </div>
    </div>
  </div>
  <section class="wrap list">
    <h2 class="sec">Semua pertemuan</h2>
    <div class="tools">
      <span class="count">{{ hasil.length }} hasil</span>
      <input v-model="q" type="search" placeholder="Cari pertemuan" aria-label="Cari pertemuan" />
    </div>
    <div class="grid">
      <component :is="tersedia(p, 'murid') ? 'RouterLink' : 'div'" v-for="(p, i) in hasil" :key="p.no" :style="{ '--i': i }" :to="`/pertemuan/${p.no}`" class="card" :class="{ off: !tersedia(p, 'murid') }">
        <span class="tag" :class="{ dim: !tersedia(p, 'murid') }">{{ tersedia(p, 'murid') ? 'Tersedia' : 'Belum ada materi' }}</span>
        <div class="body"><small>Pertemuan {{ p.no }}</small><h3>{{ p.judul }}</h3><p>{{ p.deskripsi }}</p></div>
      </component>
    </div>
    <p v-if="!hasil.length" class="note">Tidak ada pertemuan yang cocok.</p>
  </section>
</template>
