import { LocaleSwitch } from '../common/LocaleSwitch'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { siteContent, type Locale, type PageKey } from '@/content/siteContent'
import { buildPath, type RouteKey } from '@/utils/navigation'
import { Link, NavLink } from 'react-router-dom'

interface MobileNavProps {
  locale: Locale
  page: RouteKey
  open: boolean
  onOpenChange: (open: boolean) => void
}

const primaryNav: PageKey[] = ['about', 'solutions', 'applications', 'technology']
const secondaryNav: PageKey[] = ['contact', 'news']

export function MobileNav({ locale, page, open, onOpenChange }: MobileNavProps) {
  const content = siteContent[locale]

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        id="site-mobile-nav"
        side="right"
        className="flex h-full w-full max-w-xs flex-col border-l border-slate-200 bg-white px-0 sm:max-w-sm"
      >
        {/* 品牌标题 */}
        <div className="flex items-center border-b border-slate-200 px-6 py-5">
          <Link
            to={buildPath(locale, 'home')}
            className="text-lg font-semibold tracking-[0.18em] text-slate-900"
            onClick={() => onOpenChange(false)}
          >
            {content.brand.shortName}
          </Link>
        </div>

        {/* 主导航 */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <nav className="flex flex-col gap-6">
            <div className="space-y-2">
              {primaryNav.map((key) => (
                <NavLink
                  key={key}
                  to={buildPath(locale, key)}
                  end
                  onClick={() => onOpenChange(false)}
                  className={({ isActive }) =>
                    [
                      'flex items-center rounded-xl px-4 py-3 text-base font-medium transition-colors',
                      isActive || page === key
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
                    ].join(' ')
                  }
                >
                  {content.nav[key]}
                </NavLink>
              ))}
            </div>

            <div className="h-px w-full bg-slate-200" />

            {/* 辅助导航 */}
            <div className="space-y-2">
              {secondaryNav.map((key) => (
                <NavLink
                  key={key}
                  to={buildPath(locale, key)}
                  end
                  onClick={() => onOpenChange(false)}
                  className={({ isActive }) =>
                    [
                      'flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                      isActive || page === key
                        ? 'bg-slate-100 text-slate-900'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                    ].join(' ')
                  }
                >
                  {content.nav[key]}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>

        {/* 底部语言切换 */}
        <div className="border-t border-slate-200 px-6 py-5">
          <LocaleSwitch locale={locale} page={page} className="mobile-locale-switch" />
        </div>
      </SheetContent>
    </Sheet>
  )
}
