import { Link } from 'react-router-dom'
import type { PortalEntry, Locale } from '../../content/siteContent'
import { buildPath } from '../../utils/navigation'
import LazyImage from './LazyImage'

export function PortalEntryPanel({
  entry,
  locale,
}: {
  entry: PortalEntry
  locale: Locale
}) {
  return (
    <Link className="portal-entry" to={buildPath(locale, entry.page)}>
      <div className="portal-entry-media">
        <LazyImage src={entry.image} alt={entry.alt} />
      </div>
      <div className="portal-entry-copy">
        <span>{entry.eyebrow}</span>
        <h3>{entry.title}</h3>
        <p>{entry.description}</p>
        <strong>{locale === 'zh' ? '进入内容' : 'Explore'}</strong>
      </div>
    </Link>
  )
}
