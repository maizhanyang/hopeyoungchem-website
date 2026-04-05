import type { PageCtaContent, Locale } from '../../content/siteContent'
import { PageCtaHeader } from './PageCtaHeader'
import { PageCtaInlineLink } from './PageCtaInlineLink'
import { ButtonLink } from './ButtonLink'

export function NewsPageCta({
  locale,
  cta,
}: {
  locale: Locale
  cta: PageCtaContent
}) {
  return (
    <section className="content-section content-section-tight">
      <div className="page-cta page-cta-news">
        <div className="page-cta-news-copy">
          <PageCtaHeader cta={cta} />
          <div className="page-cta-actions">
            <ButtonLink locale={locale} action={cta.primary} tone="primary" />
            {cta.secondary && <ButtonLink locale={locale} action={cta.secondary} tone="secondary" />}
          </div>
        </div>
        <div className="page-cta-news-grid">
          {cta.items.map((item) => (
            <article className="page-cta-news-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.action && <PageCtaInlineLink locale={locale} action={item.action} />}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
