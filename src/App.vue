<script setup>
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { authed, keluar } from './lib/gate'
import { daftar, tersedia } from './lib/content'
const open = ref(false), route = useRoute(), router = useRouter()
const scrolled = ref(false), progress = ref(0)
const isModul = computed(() => /\/pertemuan\/\d+$/.test(route.path))
watch(() => route.fullPath, () => (open.value = false))
watch(open, v => (document.body.style.overflow = v ? 'hidden' : ''))
let raf = 0
function onScroll() {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - innerHeight
    scrolled.value = scrollY > 4
    progress.value = max > 0 ? Math.min(1, scrollY / max) : 0
  })
}
onMounted(() => addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => removeEventListener('scroll', onScroll))
function logout() { keluar(); router.push('/pengajar') }
</script>
<template>
  <header class="bar" :class="{ scrolled }">
    <button class="icon" aria-label="Buka menu" @click="open = true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
    <RouterLink to="/" class="logo"><b>belajar</b>bareng</RouterLink>
    <div class="topnav"><RouterLink to="/tentang">Tentang</RouterLink><RouterLink to="/pengajar" class="pill">Pengajar</RouterLink></div>
    <div v-if="isModul" class="progress" :style="{ '--p': progress }"></div>
  </header>
  <Transition name="fade"><div v-if="open" class="scrim" @click="open = false"></div></Transition>
  <nav class="drawer" :class="{ on: open }" :aria-hidden="!open">
    <button class="icon x" aria-label="Tutup menu" @click="open = false">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 5l14 14M19 5L5 19"/></svg>
    </button>
    <RouterLink to="/">Beranda</RouterLink>
    <RouterLink to="/tentang">Tentang</RouterLink>
    <div class="sect">Senior / Pengajar</div>
    <RouterLink to="/pengajar">{{ authed ? 'Panel pengajar' : 'Masuk pengajar' }}</RouterLink>
    <template v-if="authed">
      <template v-for="p in daftar" :key="p.no"><RouterLink v-if="tersedia(p, 'pengajar')" :to="`/pengajar/pertemuan/${p.no}`" class="sub">Pertemuan {{ p.no }}</RouterLink></template>
      <RouterLink to="/pengajar/template" class="sub">Template &amp; panduan</RouterLink>
      <a href="#" class="sub" @click.prevent="logout">Keluar</a>
    </template>
  </nav>
  <main>
    <RouterView v-slot="{ Component, route: r }">
      <Transition name="page" mode="out-in"><component :is="Component" :key="r.path.split('/pertemuan/')[0] + (r.path.includes('/pertemuan/') ? '/m' : r.path)" /></Transition>
    </RouterView>
  </main>
</template>
