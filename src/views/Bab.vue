<script setup>
import { computed } from 'vue'
import { getBab } from '../lib/content'
const props = defineProps({ id: String })
const b = computed(() => getBab(props.id))
</script>
<template>
  <section class="wrap">
    <nav class="crumb"><RouterLink to="/">Beranda</RouterLink> / <b>{{ b ? b.judul : 'Tidak ditemukan' }}</b></nav>
    <template v-if="b">
      <div class="mhead">
        <p class="meta"><span>Bab {{ b.no }}</span></p>
        <h1 class="hero sm">{{ b.judul }}</h1>
        <p class="lead">{{ b.deskripsi }}</p>
      </div>
      <template v-if="b.materi.length">
        <div class="cta2">
          <RouterLink :to="b.materi[0].to" class="btn">Mulai dari materi 1</RouterLink>
          <span class="count">{{ b.materi.length }} materi</span>
        </div>
        <div class="mlist">
          <RouterLink v-for="(m, i) in b.materi" :key="m.slug" :to="m.to" class="row" :style="{ '--i': i }">
            <span class="n">{{ String(m.no).padStart(2, '0') }}</span>
            <span class="t"><b>{{ m.judul }}</b><small>{{ m.deskripsi }}</small></span>
            <span class="go">→</span>
          </RouterLink>
        </div>
      </template>
      <p v-else class="note">Belum ada materi.</p>
    </template>
    <div v-else class="empty">
      <h1 class="hero sm">Bab tidak ditemukan</h1>
      <RouterLink to="/" class="btn">Kembali ke beranda</RouterLink>
    </div>
  </section>
</template>
