import { Navigate, Route, Routes } from 'react-router-dom'
import { pageOrder, siteContent, type Locale, type PageKey } from './content/siteContent'
import { utilityPageOrder, supportContent, type UtilityPageKey } from './content/supportContent'
import { buildPath, getPageTitle, type RouteKey } from './utils/navigation'
import { usePageMetadata } from './hooks/usePageMetadata'

import { SiteHeader, SiteFooter } from './components/layout'

import {
  HomePage,
  SolutionsPage,
  ApplicationsPage,
  TechnologyPage,
  AboutPage,
  NewsPage,
  ContactPage,
  DocumentUtilityPage,
  SitemapUtilityPage,
} from './pages'

function SitePage({ locale, page }: { locale: Locale; page: PageKey }) {
  const content = siteContent[locale]
  const description = content.meta.pageDescriptions[page] ?? content.meta.defaultDescription

  usePageMetadata({
    locale,
    page,
    title: getPageTitle(locale, page),
    description,
  })

  return (
    <div className="app-shell">
      <SiteHeader locale={locale} page={page} />
      <main className={`site-main site-main-${page}`}>
        {page === 'home' && <HomePage locale={locale} />}
        {page === 'solutions' && <SolutionsPage locale={locale} />}
        {page === 'applications' && <ApplicationsPage locale={locale} />}
        {page === 'technology' && <TechnologyPage locale={locale} />}
        {page === 'about' && <AboutPage locale={locale} />}
        {page === 'news' && <NewsPage locale={locale} />}
        {page === 'contact' && <ContactPage locale={locale} />}
      </main>
      <SiteFooter locale={locale} page={page} />
    </div>
  )
}

function UtilityPage({ locale, page }: { locale: Locale; page: UtilityPageKey }) {
  const utilityContent = supportContent[locale][page]

  usePageMetadata({
    locale,
    page,
    title: getPageTitle(locale, page),
    description: utilityContent.intro.description,
  })

  return (
    <div className="app-shell">
      <SiteHeader locale={locale} page={page} />
      <main className={`site-main site-main-support site-main-support-${page}`}>
        {page === 'sitemap' ? (
          <SitemapUtilityPage locale={locale} />
        ) : (
          <DocumentUtilityPage locale={locale} page={page} />
        )}
      </main>
      <SiteFooter locale={locale} page={page} />
    </div>
  )
}

function App() {
  return (
    <Routes>
      {/* Chinese routes */}
      {pageOrder.map((page) => (
        <Route
          key={`zh-${page}`}
          path={buildPath('zh', page)}
          element={<SitePage locale="zh" page={page} />}
        />
      ))}

      {/* English routes */}
      {pageOrder.map((page) => (
        <Route
          key={`en-${page}`}
          path={buildPath('en', page)}
          element={<SitePage locale="en" page={page} />}
        />
      ))}

      {/* Chinese utility routes */}
      {utilityPageOrder.map((page) => (
        <Route
          key={`zh-utility-${page}`}
          path={buildPath('zh', page)}
          element={<UtilityPage locale="zh" page={page} />}
        />
      ))}

      {/* English utility routes */}
      {utilityPageOrder.map((page) => (
        <Route
          key={`en-utility-${page}`}
          path={buildPath('en', page)}
          element={<UtilityPage locale="en" page={page} />}
        />
      ))}

      {/* Fallback to Chinese home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
