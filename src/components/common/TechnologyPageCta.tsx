import type { PageCtaContent, Locale } from '../../content/siteContent'
import { PageCtaHeader } from './PageCtaHeader'
import { ButtonLink } from './ButtonLink'

export function TechnologyPageCta({
  locale,
  cta,
}: {
  locale: Locale
  cta: PageCtaContent
}) {
  return (
    <section className="content-section content-section-tight">
      <div className="page-cta page-cta-technology">
        <div className="page-cta-technology-lead">
          <PageCtaHeader cta={cta} />
          <div className="page-cta-actions">
            <ButtonLink locale={locale} action={cta.primary} tone="primary" />
            {cta.secondary && <ButtonLink locale={locale} action={cta.secondary} tone="secondary" />}
          </div>
        </div>
        <div className="page-cta-technology-grid">
          {cta.items.map((item) => (
            <article className="page-cta-technology-card" key={item.title}>
              {item.eyebrow && <span className="page-cta-chip">{item.eyebrow}</span>}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
