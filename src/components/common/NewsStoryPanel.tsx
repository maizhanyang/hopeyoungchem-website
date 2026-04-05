import type { NewsStory } from '../../content/siteContent'

export function NewsStoryPanel({
  story,
  featured = false,
}: {
  story: NewsStory
  featured?: boolean
}) {
  return (
    <article className={featured ? 'news-story news-story-featured' : 'news-story'}>
      <div className="news-story-meta">
        <span>{story.category}</span>
        <strong>{story.date}</strong>
      </div>
      <h3>{story.title}</h3>
      <p>{story.summary}</p>
      <div className="news-story-detail">
        <span className="bullet-mark" />
        <p>{story.detail}</p>
      </div>
    </article>
  )
}
