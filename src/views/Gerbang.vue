<script setup>
import { ref } from 'vue'
import { authed, masuk } from '../lib/gate'
import { daftarPengajar } from '../lib/content'
const q1 = ref(''), q2 = ref(''), pw = ref(''), gagal = ref(false)
function submit() { gagal.value = !masuk(q1.value, q2.value, pw.value) }
</script>
<template>
  <section class="wrap narrow">
    <template v-if="authed">
      <h1 class="hero sm">Panel pengajar</h1>
      <div class="grid">
        <RouterLink v-for="(p, i) in daftarPengajar" :key="p.id" :to="p.to" :style="{ '--i': i }" class="card"><span class="tag">Modul pengajar</span><div class="body"><h3>{{ p.judul }}</h3><p>{{ p.deskripsi }}</p></div></RouterLink>
        <RouterLink to="/pengajar/template" class="card"><span class="tag">Unduhan</span><div class="body"><h3>Template &amp; panduan</h3><p>Untuk membuat modul baru dengan AI.</p></div></RouterLink>
      </div>
      <p v-if="!daftarPengajar.length" class="note">Belum ada modul pengajar.</p>
    </template>
    <form v-else @submit.prevent="submit" class="form" autocomplete="off">
      <h1 class="hero sm">Masuk pengajar</h1>
      <label>Apa makanan kesukaan Bima?<input v-model="q1" /></label>
      <label>Apa minuman kesukaan Abid?<input v-model="q2" /></label>
      <label>Password<input v-model="pw" type="password" autocomplete="off" /></label>
      <button class="btn">Masuk</button>
      <p v-if="gagal" class="err" role="alert">Akses ditolak.</p>
    </form>
  </section>
</template>
