import type { FeatureCard } from '../../content/siteContent'

export function FeaturePanel({ card }: { card: FeatureCard }) {
  return (
    <article className="feature-panel">
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <span>{card.detail}</span>
    </article>
  )
}
