import type { HeroContent, Locale } from '../../content/siteContent'
import { ButtonLink } from './ButtonLink'
import LazyImage from './LazyImage'

export function EditorialBanner({
  locale,
  hero,
  image,
  alt,
  theme,
  detailTitle,
  detailCopy,
}: {
  locale: Locale
  hero: HeroContent
  image: string
  alt: string
  theme: string
  detailTitle: string
  detailCopy: string
}) {
  return (
    <section className={`editorial-banner editorial-banner-${theme}`}>
      <div className="editorial-banner-shell">
        <div className="editorial-banner-copy-panel">
          <div className="editorial-banner-copy">
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1>{hero.title}</h1>
            <p className="editorial-banner-lead">{hero.lead}</p>
            <p className="editorial-banner-supporting">{hero.supporting}</p>
            <div className="hero-actions">
              <ButtonLink locale={locale} action={hero.primary} tone="primary" />
              <ButtonLink locale={locale} action={hero.secondary} tone="secondary" />
            </div>
          </div>
          <div className="editorial-banner-detail">
            <span className="contact-channel-label">{detailTitle}</span>
            <p>{detailCopy}</p>
            <strong>{hero.note}</strong>
          </div>
        </div>
        <div className="editorial-banner-media-panel">
          <div className="editorial-banner-media">
            <LazyImage src={image} alt={alt} />
          </div>
        </div>
      </div>
    </section>
  )
}
