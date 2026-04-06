import type { CredentialCard } from '../../content/siteContent'
import LazyImage from './LazyImage'

export function CredentialPanel({ card }: { card: CredentialCard }) {
  return (
    <article className="credential-panel">
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      {card.imageSrc && card.imageAlt && (
        <div className="credential-panel-media">
          <LazyImage src={card.imageSrc} alt={card.imageAlt} />
          {card.imageCaption && <span>{card.imageCaption}</span>}
        </div>
      )}
    </article>
  )
}
