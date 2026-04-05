import { Link } from 'react-router-dom'
import type { Locale } from '../../content/siteContent'
import { buildPath, type RouteKey } from '../../utils/navigation'

export function LocaleSwitch({
  locale,
  page,
  className,
}: {
  locale: Locale
  page: RouteKey
  className: string
}) {
  return (
    <div className={className} aria-label={locale === 'zh' ? '语言切换' : 'Language switch'}>
      <Link
        className={locale === 'zh' ? 'locale-switch-link locale-switch-link-active' : 'locale-switch-link'}
        to={buildPath('zh', page)}
      >
        中文
      </Link>
      <span className="locale-switch-separator" aria-hidden="true">
        |
      </span>
      <Link
        className={locale === 'en' ? 'locale-switch-link locale-switch-link-active' : 'locale-switch-link'}
        to={buildPath('en', page)}
      >
        English
      </Link>
    </div>
  )
}
