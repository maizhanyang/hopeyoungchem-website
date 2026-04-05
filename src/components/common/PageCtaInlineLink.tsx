import { Link } from 'react-router-dom'
import type { ActionLink, Locale } from '../../content/siteContent'
import { buildPath } from '../../utils/navigation'

export function PageCtaInlineLink({
  locale,
  action,
}: {
  locale: Locale
  action: ActionLink
}) {
  return (
    <Link className="page-cta-inline-link" to={buildPath(locale, action.page)}>
      <span>{action.label}</span>
      <span aria-hidden="true">→</span>
    </Link>
  )
}
