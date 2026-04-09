/**
 * 构建后预渲染脚本
 * 为每个路由生成带正确 meta 标签的静态 HTML 文件
 * 用法: node scripts/prerender.mjs
 *
 * 原理: 读取 dist/index.html 作为模板，替换 head 中的 meta 标签，
 * 为每个路由生成独立的 HTML 文件，实现 SEO 预渲染。
 * 客户端 JS 正常接管页面，无需 SSR。
 */

import { readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname, join } from 'path'

// ===================== 路由配置 =====================

const offlineMode = true

const pageOrder = ['home', 'solutions', 'applications', 'technology', 'about', 'news', 'contact']
const utilityPageOrder = ['sitemap', 'copyright', 'terms', 'privacy']
const pageSlugs = {
  home: '', solutions: 'solutions', applications: 'applications',
  technology: 'technology', about: 'about', news: 'news', contact: 'contact',
}
const utilityPageSlugs = { privacy: 'privacy', terms: 'terms', copyright: 'copyright', sitemap: 'sitemap' }

function buildPath(locale, page) {
  const isUtility = page in utilityPageSlugs
  const slug = isUtility ? utilityPageSlugs[page] : pageSlugs[page]
  if (locale === 'zh') return slug ? `/${slug}` : '/'
  return slug ? `/en/${slug}` : '/en'
}

// ===================== Meta 数据 =====================

const siteInfo = {
  name: { zh: '广州虹扬化工科技有限公司', en: 'Guangzhou Hope Young Chemical Technology Co., Ltd.' },
  shortName: { zh: '虹扬化工', en: 'Hope Young' },
  defaultDescription: {
    zh: '广州虹扬化工科技有限公司官方网站，聚焦高端材料粘接方案、项目协同开发与工业场景应用。',
    en: 'Official website of Guangzhou Hope Young Chemical Technology Co., Ltd., focused on advanced material bonding solutions, collaborative development and industrial applications.',
  },
  url: 'https://www.hopeyoungchem.com',
}

const pageTitles = {
  zh: {
    home: '广州虹扬化工科技有限公司',
    solutions: '解决方案 | 虹扬化工',
    applications: '应用领域 | 虹扬化工',
    technology: '技术实力 | 虹扬化工',
    about: '关于虹扬 | 虹扬化工',
    news: '新闻资讯 | 虹扬化工',
    contact: '联系我们 | 虹扬化工',
    sitemap: '网站地图 | 虹扬化工',
    copyright: '版权声明 | 虹扬化工',
    terms: '服务条款 | 虹扬化工',
    privacy: '隐私政策 | 虹扬化工',
  },
  en: {
    home: 'Hope Young Chemical Technology',
    solutions: 'Solutions | Hope Young',
    applications: 'Applications | Hope Young',
    technology: 'Technology | Hope Young',
    about: 'About | Hope Young',
    news: 'News | Hope Young',
    contact: 'Contact | Hope Young',
    sitemap: 'Sitemap | Hope Young',
    copyright: 'Copyright | Hope Young',
    terms: 'Terms | Hope Young',
    privacy: 'Privacy | Hope Young',
  },
}

const pageDescriptions = {
  zh: {
    home: '广州虹扬化工科技有限公司，聚焦高端材料粘接方案、项目协同开发与工业场景应用。',
    solutions: '虹扬化工提供专业的压敏胶(PSA)粘接解决方案，涵盖标签、胶带、保护膜等多个领域。',
    applications: '虹扬化工产品广泛应用于标签印刷、工业胶带、保护膜、医疗敷料等领域。',
    technology: '虹扬化工拥有先进的压敏胶研发实力，配备专业实验室和检测设备。',
    about: '广州虹扬化工科技有限公司 — 了解我们的品牌故事、团队与资质认证。',
    news: '虹扬化工最新动态、行业资讯与企业新闻。',
    contact: '联系虹扬化工 — 电话、邮箱、地址，获取专业粘接方案咨询。',
    sitemap: '广州虹扬化工科技有限公司网站地图。',
    copyright: '广州虹扬化工科技有限公司版权声明。',
    terms: '广州虹扬化工科技有限公司网站服务条款。',
    privacy: '广州虹扬化工科技有限公司隐私政策。',
  },
  en: {
    home: 'Hope Young Chemical Technology - Advanced material bonding solutions, collaborative development and industrial applications.',
    solutions: 'Professional PSA bonding solutions for labels, tapes, protective films and more.',
    applications: 'Applications spanning label printing, industrial tapes, protective films, medical dressings and more.',
    technology: 'Advanced PSA R&D capabilities with professional laboratory and testing equipment.',
    about: 'Learn about Hope Young Chemical Technology - our brand story, team and certifications.',
    news: 'Latest updates, industry news and company announcements from Hope Young.',
    contact: 'Contact Hope Young Chemical - phone, email, address for professional bonding solutions.',
    sitemap: 'Hope Young Chemical Technology sitemap.',
    copyright: 'Hope Young Chemical Technology copyright notice.',
    terms: 'Hope Young Chemical Technology terms of service.',
    privacy: 'Hope Young Chemical Technology privacy policy.',
  },
}

const offlineTitles = {
  zh: '网站暂停访问 | 虹扬化工',
  en: 'Site Temporarily Offline | Hope Young',
}

const offlineDescriptions = {
  zh: '因备案与审核安排，虹扬官网当前暂停访问。审核完成后将恢复正常浏览。',
  en: 'The Hope Young website is temporarily offline for filing and review. Access will resume once the review is complete.',
}

// ===================== 生成 HTML =====================

function generateHtml(template, { title, description, locale, url, lang }) {
  let html = template

  // 替换 lang
  html = html.replace(/<html\s+lang="[^"]*"/, `<html lang="${lang}"`)

  // 替换 title
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)

  // 替换 meta description
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"/,
    `<meta name="description" content="${description}"`,
  )

  // 替换 apple-mobile-web-app-title
  html = html.replace(
    /<meta\s+name="apple-mobile-web-app-title"\s+content="[^"]*"/,
    `<meta name="apple-mobile-web-app-title" content="${siteInfo.shortName[locale]}"`,
  )

  // 静态 JSON-LD 结构化数据（搜索引擎可直接抓取）
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteInfo.name[locale],
    description,
    url,
    logo: `${siteInfo.url}/icon-512.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '东莞市庄路110号E栋308-2',
      addressLocality: '广州',
      addressRegion: '广东',
      postalCode: '510000',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-181-4892-8019',
      contactType: 'customer service',
      availableLanguage: ['Chinese', 'English'],
    },
  })

  // 添加 OG 标签、JSON-LD 和 canonical（在 </head> 之前）
  const ogTags = `
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${siteInfo.name[locale]}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:locale" content="${locale === 'zh' ? 'zh_CN' : 'en_US'}" />
    <link rel="canonical" href="${url}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <script type="application/ld+json">${jsonLd}</script>`

  // 移除之前可能添加的 OG 标签
  html = html.replace(/<!-- PRERENDER_OG_START -->[\s\S]*?<!-- PRERENDER_OG_END -->/g, '')

  html = html.replace('</head>', `<!-- PRERENDER_OG_START -->${ogTags}\n  <!-- PRERENDER_OG_END -->\n  </head>`)

  return html
}

// ===================== 主流程 =====================

function main() {
  const distDir = resolve(process.cwd(), 'dist')
  const templatePath = join(distDir, 'index.html')

  if (!existsSync(templatePath)) {
    console.error('❌ dist/index.html not found. Run "npm run build" first.')
    process.exit(1)
  }

  const template = readFileSync(templatePath, 'utf-8')
  const allPages = [...pageOrder, ...utilityPageOrder]
  const locales = ['zh', 'en']
  let count = 0

  for (const locale of locales) {
    for (const page of allPages) {
      const path = buildPath(locale, page)
      const title = offlineMode ? offlineTitles[locale] : pageTitles[locale][page]
      const description = offlineMode ? offlineDescriptions[locale] : pageDescriptions[locale][page]
      const fullUrl = `${siteInfo.url}${path}`
      const lang = locale === 'zh' ? 'zh-CN' : 'en'

      const html = generateHtml(template, { title, description, locale, url: fullUrl, lang })

      // 确定输出路径
      let outputDir
      if (path === '/') {
        outputDir = distDir
      } else {
        outputDir = join(distDir, path)
      }

      mkdirSync(outputDir, { recursive: true })
      writeFileSync(join(outputDir, 'index.html'), html, 'utf-8')
      count++
      console.log(`  ✓ ${path} → ${title}`)
    }
  }

  // 保留原始 index.html 作为 SPA fallback

  // P0 修复：确保 robots.txt 复制到 dist
  const robotsSrc = resolve(process.cwd(), 'public', 'robots.txt')
  const robotsDst = join(distDir, 'robots.txt')
  if (existsSync(robotsSrc) && !existsSync(robotsDst)) {
    copyFileSync(robotsSrc, robotsDst)
    console.log('  ✓ robots.txt copied to dist/')
  }

  // 确保 sitemap.xml 复制到 dist
  const sitemapSrc = resolve(process.cwd(), 'public', 'sitemap.xml')
  const sitemapDst = join(distDir, 'sitemap.xml')
  if (existsSync(sitemapSrc)) {
    copyFileSync(sitemapSrc, sitemapDst)
    console.log('  ✓ sitemap.xml copied to dist/')
  }

  console.log(`\n✅ Prerendered ${count} pages in dist/`)
}

main()
