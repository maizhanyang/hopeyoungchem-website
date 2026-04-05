import type { PageCtaContent, Locale } from '../../content/siteContent'
import { PageCtaHeader } from './PageCtaHeader'
import { PageCtaInlineLink } from './PageCtaInlineLink'
import { ButtonLink } from './ButtonLink'

export function AboutPageCta({
  locale,
  cta,
}: {
  locale: Locale
  cta: PageCtaContent
}) {
  return (
    <section className="content-section content-section-tight">
      <div className="page-cta page-cta-about">
        <PageCtaHeader cta={cta} />
        <div className="page-cta-about-stack">
          {cta.items.map((item) => (
            <article className="page-cta-about-row" key={item.title}>
              <div className="page-cta-about-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {item.action && <PageCtaInlineLink locale={locale} action={item.action} />}
            </article>
          ))}
        </div>
        <div className="page-cta-actions">
          <ButtonLink locale={locale} action={cta.primary} tone="primary" />
          {cta.secondary && <ButtonLink locale={locale} action={cta.secondary} tone="secondary" />}
        </div>
      </div>
    </section>
  )
}
