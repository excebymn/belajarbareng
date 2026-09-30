import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js/lib/core'
import js from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
hljs.registerLanguage('javascript', js)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)
hljs.registerAliases(['js'], { languageName: 'javascript' })
hljs.registerAliases(['vue', 'html'], { languageName: 'xml' })

const md = new MarkdownIt({
  html: false, linkify: true,
  highlight: (code, lang) => hljs.getLanguage(lang)
    ? hljs.highlight(code, { language: lang }).value
    : md.utils.escapeHtml(code)
})
const fence = md.renderer.rules.fence
md.renderer.rules.fence = (...a) =>
  `<div class="code"><button class="copy-btn" type="button">Salin</button>${fence(...a)}</div>`
md.renderer.rules.table_open = () => '<div class="scroll"><table>'
md.renderer.rules.table_close = () => '</table></div>'

const slug = t => t.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '') || 'bagian'

export function render(src) {
  const env = {}, toc = [], used = {}
  const tokens = md.parse(src, env)
  tokens.forEach((t, i) => {
    if (t.type !== 'heading_open') return
    const text = tokens[i + 1].content
    let id = slug(text)
    used[id] = (used[id] || 0) + 1
    if (used[id] > 1) id += '-' + used[id]
    t.attrSet('id', id)
    if (t.tag === 'h1' && /^BLOK\b/i.test(text)) t.attrJoin('class', 'blok')
    if (t.tag === 'h2' || t.tag === 'h3') toc.push({ id, text, level: +t.tag[1] })
  })
  return { html: md.renderer.render(tokens, md.options, env), toc }
}

// Parser frontmatter sederhana (tanpa gray-matter / Buffer).
export function parseFM(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!m) return { data: {}, body: raw }
  const data = {}
  for (const line of m[1].split(/\r?\n/)) {
    const k = line.match(/^(\w+):\s*(.*)$/)
    if (!k) continue
    const q = k[2].match(/^"(.*?)"|^'(.*?)'/)
    data[k[1]] = q ? (q[1] ?? q[2]) : k[2].replace(/\s+#.*$/, '').trim()
  }
  if (data.pertemuan !== undefined) data.pertemuan = Number(data.pertemuan)
  return { data, body: m[2] }
}
