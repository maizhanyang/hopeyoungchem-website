import { siteContent, type Locale } from '../content/siteContent'
import {
  EditorialBanner,
  SectionHeader,
  NewsStoryPanel,
  NewsTimelineStory,
  ButtonLink,
} from '../components/common'
import officePersonImage from '../assets/media/provided/office-person-1.jpg'
import { Link } from 'react-router-dom'
import { buildPath } from '../utils/navigation'

function NewsFeaturedSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale].news

  return (
    <section className="content-section editorial-intro-section editorial-news-section">
      <div className="page-editorial-lead">
        <SectionHeader
          section={{
            eyebrow: locale === 'zh' ? '置顶动态' : 'Featured Update',
            title:
              locale === 'zh'
                ? '先看一个重点更新，再顺着时间继续浏览'
                : 'Start with one key update, then continue through the stream',
            description:
              locale === 'zh'
                ? '动态页更像品牌更新流，而不是传统新闻中心。第一版先建立稳定的公开表达方式，再逐步增加更多内容。'
                : 'This page works more like a brand update stream than a traditional newsroom. The first release focuses on a stable public-facing format before adding more content over time.',
          }}
        />
        <article className="news-story news-story-featured news-story-featured-stage">
          <NewsStoryPanel story={content.featured} featured />
        </article>
      </div>
    </section>
  )
}

function NewsStreamSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale].news

  return (
    <section className="content-section editorial-stream-section">
      <SectionHeader section={content.latestHeader} />
      <div className="news-stream-list">
        {content.items.map((story, index) => (
          <NewsTimelineStory
            key={story.title}
            story={story}
            index={index}
            locale={locale}
          />
        ))}
      </div>
      <p className="news-archive-note">{content.archiveNote}</p>
    </section>
  )
}

function NewsPageCta({ locale }: { locale: Locale }) {
  const cta = siteContent[locale].news.pageCta

  return (
    <section className="content-section content-section-tight">
      <div className="page-cta page-cta-news">
        <div className="page-cta-news-copy">
          <div className="page-cta-header">
            <span className="eyebrow">{cta.eyebrow}</span>
            <h2>{cta.title}</h2>
            <p>{cta.description}</p>
          </div>
          <div className="page-cta-actions">
            <ButtonLink locale={locale} action={cta.primary} tone="primary" />
            {cta.secondary && <ButtonLink locale={locale} action={cta.secondary} tone="secondary" />}
          </div>
        </div>
        <div className="page-cta-news-grid">
          {cta.items.map((item) => (
            <article className="page-cta-news-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.action && (
                <Link className="page-cta-inline-link" to={buildPath(locale, item.action.page)}>
                  <span>{item.action.label}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function NewsPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale].news

  return (
    <>
      <EditorialBanner
        locale={locale}
        hero={content.hero}
        image={officePersonImage}
        alt={
          locale === 'zh'
            ? '真实办公中的业务协同场景'
            : 'Real business coordination scene in the office'
        }
        theme="news"
        detailTitle={locale === 'zh' ? '发布方式' : 'Publishing Approach'}
        detailCopy={content.intro}
      />

      <NewsFeaturedSection locale={locale} />
      <NewsStreamSection locale={locale} />
      <NewsPageCta locale={locale} />
    </>
  )
}
