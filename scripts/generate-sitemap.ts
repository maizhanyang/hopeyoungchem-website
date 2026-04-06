/**
 * 生成 sitemap.xml
 * 运行: npx tsx scripts/generate-sitemap.ts > public/sitemap.xml
 *
 * 注意：不依赖 siteContent.ts（含图片 import），独立维护路由列表
 */

const baseUrl = 'https://www.hopeyoungchem.com'

const pageOrder = ['home', 'solutions', 'applications', 'technology', 'about', 'news', 'contact']
const utilityPageOrder = ['sitemap', 'copyright', 'terms', 'privacy']
const pageSlugs = {
  home: '', solutions: 'solutions', applications: 'applications',
  technology: 'technology', about: 'about', news: 'news', contact: 'contact',
}
const utilityPageSlugs = { privacy: 'privacy', terms: 'terms', copyright: 'copyright', sitemap: 'sitemap' }

const allPages = [...pageOrder, ...utilityPageOrder]
const locales = ['zh', 'en']

function buildPath(locale, page) {
  const isUtility = page in utilityPageSlugs
  const slug = isUtility ? utilityPageSlugs[page] : pageSlugs[page]
  if (locale === 'zh') return slug ? `/${slug}` : '/'
  return slug ? `/en/${slug}` : '/en'
}

const pages = []
for (const locale of locales) {
  for (const page of allPages) {
    const path = buildPath(locale, page)
    pages.push({
      path,
      priority: page === 'home' ? '1.0' : page === 'news' ? '0.7' : '0.8',
      changefreq: page === 'news' ? 'daily' : 'weekly',
    })
  }
}

const today = new Date().toISOString().split('T')[0]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map((p) => {
  const loc = `${baseUrl}${p.path}`
  const isZh = !p.path.startsWith('/en')
  const alternatePath = isZh
    ? (p.path === '/' ? '/en' : `/en${p.path}`)
    : (p.path === '/en' ? '/' : p.path.replace('/en', ''))

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
    <xhtml:link rel="alternate" hreflang="zh" href="${baseUrl}${isZh ? p.path : alternatePath}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${isZh ? alternatePath : p.path}"/>
  </url>`
}).join('\n')}
</urlset>
`

console.log(xml)
