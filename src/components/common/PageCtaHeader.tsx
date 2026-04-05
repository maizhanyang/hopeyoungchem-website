import type { PageCtaContent } from '../../content/siteContent'

export function PageCtaHeader({ cta }: { cta: PageCtaContent }) {
  return (
    <div className="page-cta-header">
      <span className="eyebrow">{cta.eyebrow}</span>
      <h2>{cta.title}</h2>
      <p>{cta.description}</p>
    </div>
  )
}
