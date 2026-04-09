import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { siteStatus } from './config/siteStatus'
import { pageOrder, siteContent, type Locale, type PageKey } from './content/siteContent'
import { utilityPageOrder, supportContent, type UtilityPageKey } from './content/supportContent'
import { buildPath, getPageTitle } from './utils/navigation'
import { usePageMetadata } from './hooks/usePageMetadata'
import { SiteOfflinePage } from './pages/SiteOfflinePage'

import { SiteHeader, SiteFooter } from './components/layout'
import { PageLoader } from './components/common/PageLoader'

const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })))
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(m => ({ default: m.SolutionsPage })))
const ApplicationsPage = lazy(() => import('./pages/ApplicationsPage').then(m => ({ default: m.ApplicationsPage })))
const TechnologyPage = lazy(() => import('./pages/TechnologyPage').then(m => ({ default: m.TechnologyPage })))
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })))
const NewsPage = lazy(() => import('./pages/NewsPage').then(m => ({ default: m.NewsPage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })))
const DocumentUtilityPage = lazy(() => import('./pages/UtilityPage').then(m => ({ default: m.DocumentUtilityPage })))
const SitemapUtilityPage = lazy(() => import('./pages/UtilityPage').then(m => ({ default: m.SitemapUtilityPage })))

function getSitePageComponent(page: PageKey) {
  switch (page) {
    case 'home':
      return HomePage
    case 'solutions':
      return SolutionsPage
    case 'applications':
      return ApplicationsPage
    case 'technology':
      return TechnologyPage
    case 'about':
      return AboutPage
    case 'news':
      return NewsPage
    case 'contact':
      return ContactPage
  }

  const exhaustiveCheck: never = page
  throw new Error(`Unhandled site page: ${exhaustiveCheck}`)
}

function SitePage({ locale, page }: { locale: Locale; page: PageKey }) {
  const content = siteContent[locale]
  const description = content.meta.pageDescriptions[page] ?? content.meta.defaultDescription

  usePageMetadata({
    locale,
    page,
    title: getPageTitle(locale, page),
    description,
  })

  const PageComponent = getSitePageComponent(page)

  return (
    <div className="app-shell">
      <SiteHeader locale={locale} page={page} />
      <main className={`site-main site-main-${page}`}>
        <Suspense fallback={<PageLoader />}>
          <PageComponent locale={locale} />
        </Suspense>
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
        <Suspense fallback={<PageLoader />}>
          {page === 'sitemap' ? (
            <SitemapUtilityPage locale={locale} />
          ) : (
            <DocumentUtilityPage locale={locale} page={page} />
          )}
        </Suspense>
      </main>
      <SiteFooter locale={locale} page={page} />
    </div>
  )
}

function App() {
  if (siteStatus.isOffline) {
    return (
      <Routes>
        <Route path="*" element={<SiteOfflinePage />} />
      </Routes>
    )
  }

  return (
    <Routes>
      {pageOrder.map((page) => (
        <Route
          key={`zh-${page}`}
          path={buildPath('zh', page)}
          element={<SitePage locale="zh" page={page} />}
        />
      ))}

      {pageOrder.map((page) => (
        <Route
          key={`en-${page}`}
          path={buildPath('en', page)}
          element={<SitePage locale="en" page={page} />}
        />
      ))}

      {utilityPageOrder.map((page) => (
        <Route
          key={`zh-utility-${page}`}
          path={buildPath('zh', page)}
          element={<UtilityPage locale="zh" page={page} />}
        />
      ))}

      {utilityPageOrder.map((page) => (
        <Route
          key={`en-utility-${page}`}
          path={buildPath('en', page)}
          element={<UtilityPage locale="en" page={page} />}
        />
      ))}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
