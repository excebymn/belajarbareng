<script setup>
const files = [
  ['panduan-membuat-modul.md', 'Instruksi lengkap untuk AI dalam menulis modul.'],
  ['template-murid.md', 'Kerangka modul murid bergaya buku pelajaran.'],
  ['template-pengajar.md', 'Kerangka modul pengajar berupa contekan bertahap.']
]
function semua() {
  files.forEach(([f], i) => setTimeout(() => {
    const a = document.createElement('a'); a.href = '/templates/' + f; a.download = f; a.click()
  }, i * 400))
}
</script>
<template>
  <section class="wrap narrow">
    <h1 class="hero sm">Template &amp; panduan</h1>
    <p>Alur: unduh → kirim ke AI beserta topik pertemuan → terima <code>murid.md</code> dan <code>pengajar.md</code> → taruh di <code>src/content/pertemuan-XX/</code>.</p>
    <div class="grid">
      <div v-for="([f, d], i) in files" :key="f" :style="{ '--i': i }" class="card"><span class="tag">.md</span><div class="body"><h3>{{ f }}</h3><p>{{ d }}</p><a :href="`/templates/${f}`" :download="f" class="btn">Unduh</a></div></div>
    </div>
    <button class="btn" @click="semua">Unduh semuanya</button>
  </section>
</template>
