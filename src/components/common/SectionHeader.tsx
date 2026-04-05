import type { SectionHeaderContent } from '../../content/siteContent'

export function SectionHeader({ section }: { section: SectionHeaderContent }) {
  return (
    <div className="section-header">
      <span className="eyebrow">{section.eyebrow}</span>
      <h2>{section.title}</h2>
      <p>{section.description}</p>
    </div>
  )
}
