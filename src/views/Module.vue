<script setup>
import { ref, watchEffect } from 'vue'
import ModuleView from '../components/ModuleView.vue'
import { daftar, get, tersedia, muat } from '../lib/content'
import { render } from '../lib/markdown'
const props = defineProps({ no: Number, role: String })
const s = ref({ loading: true })
const base = () => props.role === 'murid' ? '/pertemuan/' : '/pengajar/pertemuan/'
watchEffect(async () => {
  s.value = { loading: true }
  const m = await muat(props.no, props.role)
  if (!m) { s.value = { missing: true }; return }
  const nos = daftar.filter(p => tersedia(p, props.role)).map(p => p.no)
  const i = nos.indexOf(props.no)
  s.value = { m, ...render(m.body), prev: i > 0 && base() + nos[i - 1], next: i < nos.length - 1 && base() + nos[i + 1] }
})
</script>
<template>
  <section class="wrap">
    <nav class="crumb"><RouterLink to="/">Beranda</RouterLink> / <RouterLink v-if="role === 'pengajar'" to="/pengajar">Pengajar</RouterLink><span v-if="role === 'pengajar'"> / </span><b>Pertemuan {{ no }}</b></nav>
    <p v-if="s.loading" class="note">Memuat…</p>
    <div v-else-if="s.missing" class="empty">
      <h1 class="hero sm">Belum ada materi</h1>
      <p>Modul {{ role }} untuk pertemuan {{ no }} belum tersedia.</p>
      <RouterLink to="/" class="btn">Kembali ke beranda</RouterLink>
    </div>
    <template v-else>
      <h1 class="hero sm">{{ s.m.judul }}</h1>
      <ModuleView :html="s.html" :toc="s.toc" :prev="s.prev" :next="s.next" />
    </template>
  </section>
</template>
