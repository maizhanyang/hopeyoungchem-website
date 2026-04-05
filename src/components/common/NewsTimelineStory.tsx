import type { NewsStory, Locale } from '../../content/siteContent'

export function NewsTimelineStory({
  story,
  index,
  locale,
}: {
  story: NewsStory
  index: number
  locale: Locale
}) {
  return (
    <article className="news-stream-item">
      <div className="news-stream-meta">
        <span>{locale === 'zh' ? `更新 0${index + 1}` : `Update 0${index + 1}`}</span>
        <strong>{story.date}</strong>
      </div>
      <div className="news-stream-body">
        <span className="contact-channel-label">{story.category}</span>
        <h3>{story.title}</h3>
        <p>{story.summary}</p>
        <div className="news-story-detail">
          <span className="bullet-mark" />
          <p>{story.detail}</p>
        </div>
      </div>
    </article>
  )
}
