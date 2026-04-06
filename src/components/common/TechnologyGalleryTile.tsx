import type { PhotoCard } from '../../content/siteContent'
import LazyImage from './LazyImage'

export function TechnologyGalleryTile({
  photo,
  featured = false,
}: {
  photo: PhotoCard
  featured?: boolean
}) {
  return (
    <article className={featured ? 'technology-gallery-tile technology-gallery-tile-featured' : 'technology-gallery-tile'}>
      <div className="technology-gallery-tile-media">
        <LazyImage src={photo.src} alt={photo.alt} />
      </div>
      <div className="technology-gallery-tile-copy">
        <h3>{photo.title}</h3>
        <p>{photo.description}</p>
      </div>
    </article>
  )
}
