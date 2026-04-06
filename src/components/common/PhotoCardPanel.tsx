import type { PhotoCard } from '../../content/siteContent'
import LazyImage from './LazyImage'

export function PhotoCardPanel({ photo }: { photo: PhotoCard }) {
  return (
    <article className="photo-card">
      <div className="photo-card-media">
        <LazyImage src={photo.src} alt={photo.alt} />
      </div>
      <div className="photo-card-copy">
        <h3>{photo.title}</h3>
        <p>{photo.description}</p>
      </div>
    </article>
  )
}
