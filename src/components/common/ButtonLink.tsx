import { Link } from 'react-router-dom'
import type { ActionLink, Locale } from '../../content/siteContent'
import { buildPath } from '../../utils/navigation'

export function ButtonLink({
  locale,
  action,
  tone,
}: {
  locale: Locale
  action: ActionLink
  tone: 'primary' | 'secondary'
}) {
  return (
    <Link
      className={tone === 'primary' ? 'button-link' : 'button-link button-link-secondary'}
      to={buildPath(locale, action.page)}
    >
      {action.label}
    </Link>
  )
}
