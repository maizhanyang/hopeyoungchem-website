import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { siteConfig, siteContent, type Locale, type PageKey } from '../../content/siteContent'
import { buildPath, type RouteKey } from '../../utils/navigation'
import { GlobeIcon, MailOutlineIcon, DocumentIcon, SearchIcon } from '../common/Icons'
import { LocaleSwitch } from '../common/LocaleSwitch'
import { MobileNav } from './MobileNav'

export function SiteHeader({ locale, page }: { locale: Locale; page: RouteKey }) {
  const content = siteContent[locale]
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isHeaderAtTop, setIsHeaderAtTop] = useState(true)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const primaryNav: PageKey[] = ['about', 'solutions', 'applications', 'technology']
  const secondaryNav: PageKey[] = ['contact', 'news']

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateHeader = () => {
      const currentScrollY = window.scrollY
      const nearTop = currentScrollY < 24
      setIsHeaderAtTop(nearTop)

      if (nearTop) {
        setIsHeaderVisible(true)
        lastScrollY = currentScrollY
        return
      }

      if (Math.abs(currentScrollY - lastScrollY) < 10) {
        return
      }

      setIsHeaderVisible(currentScrollY < lastScrollY)
      lastScrollY = currentScrollY
    }

    const handleScroll = () => {
      if (ticking) {
        return
      }

      ticking = true
      window.requestAnimationFrame(() => {
        updateHeader()
        ticking = false
      })
    }

    updateHeader()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header
        className={[
          'site-header',
          isHeaderVisible ? 'site-header-visible' : 'site-header-hidden',
          isHeaderAtTop ? 'site-header-top' : 'site-header-scrolled',
        ].join(' ')}
      >
        <div className="site-header-shell">
          <div className="site-header-toprow">
            <div className="brand-block">
              <Link
                to={buildPath(locale, 'home')}
                className="brand-link brand-link-full"
                aria-label={content.brand.fullName}
              >
                <span className="brand-logo-shell">
                  <img
                    className="brand-logo-image"
                    src={siteConfig.assets.logo.src}
                    alt={siteConfig.assets.logo.alt[locale]}
                  />
                </span>
              </Link>
            </div>

            {/* 桌面端工具栏 — 移动端隐藏 */}
            <div className="header-utility-strip header-utility-desktop">
              <Link
                className="header-utility-link"
                to={buildPath(locale, 'contact')}
                aria-label={locale === 'zh' ? '联系虹扬' : 'Contact Hope Young'}
              >
                <MailOutlineIcon />
              </Link>
              <Link
                className="header-utility-link"
                to={buildPath(locale, 'news')}
                aria-label={locale === 'zh' ? '新闻动态' : 'News and updates'}
              >
                <DocumentIcon />
              </Link>
              <div className="header-utility-locale">
                <GlobeIcon />
                <LocaleSwitch locale={locale} page={page} className="language-switch" />
              </div>
            </div>

            {/* 移动端汉堡按钮 — 桌面端隐藏 */}
            <button
              type="button"
              className="mobile-nav-trigger"
              aria-label={locale === 'zh' ? '打开导航' : 'Open navigation'}
              aria-controls="site-mobile-nav"
              aria-expanded={isMobileNavOpen}
              onClick={() => setIsMobileNavOpen(true)}
            >
              <span className="mobile-nav-trigger-bars">
                <span className="mobile-nav-trigger-bar" />
                <span className="mobile-nav-trigger-bar" />
                <span className="mobile-nav-trigger-bar" />
              </span>
            </button>
          </div>

          {/* 桌面端底部导航 — 移动端隐藏 */}
          <div className="site-header-bottomrow site-header-bottomrow-desktop">
            <div className="site-header-navrail">
              <nav
                className="site-nav site-nav-primary"
                aria-label={locale === 'zh' ? '主导航' : 'Primary navigation'}
              >
                {primaryNav.map((item) => (
                  <NavLink
                    key={item}
                    to={buildPath(locale, item)}
                    className={({ isActive }) =>
                      isActive ? 'nav-link nav-link-active' : 'nav-link'
                    }
                  >
                    {content.nav[item]}
                  </NavLink>
                ))}
              </nav>

              <nav
                className="site-nav site-nav-secondary"
                aria-label={locale === 'zh' ? '辅助导航' : 'Secondary navigation'}
              >
                {secondaryNav.map((item) => (
                  <NavLink
                    key={item}
                    to={buildPath(locale, item)}
                    className={({ isActive }) =>
                      isActive ? 'nav-link nav-link-active' : 'nav-link'
                    }
                  >
                    {content.nav[item]}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* 移动端抽屉导航 */}
      <MobileNav
        locale={locale}
        page={page}
        open={isMobileNavOpen}
        onOpenChange={setIsMobileNavOpen}
      />
    </>
  )
}
