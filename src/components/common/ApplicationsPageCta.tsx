import type { PageCtaContent, Locale } from '../../content/siteContent'
import { PageCtaHeader } from './PageCtaHeader'
import { PageCtaInlineLink } from './PageCtaInlineLink'

export function ApplicationsPageCta({
  locale,
  cta,
}: {
  locale: Locale
  cta: PageCtaContent
}) {
  return (
    <section className="content-section content-section-tight">
      <div className="page-cta page-cta-applications">
        <PageCtaHeader cta={cta} />
        <div className="page-cta-application-stack">
          {cta.items.map((item, index) => (
            <article className="page-cta-application-row" key={item.title}>
              <span className="page-cta-row-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="page-cta-row-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {item.action && <PageCtaInlineLink locale={locale} action={item.action} />}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
