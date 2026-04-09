import { useEffect, useEffectEvent, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  siteConfig,
  siteContent,
  type Locale,
  type LocaleContent,
} from '../content/siteContent'
import { buildMailtoHref, buildPhoneHref } from '../utils/links'
import { buildPath } from '../utils/navigation'
import { ButtonLink, LazyImage, MailOutlineIcon, PhoneIcon } from '../components/common'
import { OrganizationJsonLd } from '../components/seo'

function HomeReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return true

    return !('IntersectionObserver' in window)
  })
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    if (isVisible || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries

        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <div
      ref={elementRef}
      className={['home-reveal', isVisible ? 'is-visible' : '', className].filter(Boolean).join(' ')}
      style={{ '--home-reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}

function HomeStatementSection({
  locale,
  content,
}: {
  locale: Locale
  content: LocaleContent['home']
}) {
  const statement = content.statement
  const [activeFrameIndex, setActiveFrameIndex] = useState(0)
  const totalFrames = statement.visual.primaryFrames.length

  const advanceFrame = useEffectEvent(() => {
    setActiveFrameIndex((current) => (current + 1) % totalFrames)
  })

  useEffect(() => {
    if (typeof window === 'undefined' || totalFrames <= 1) {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      return
    }

    const intervalId = window.setInterval(() => {
      advanceFrame()
    }, 4200)

    return () => window.clearInterval(intervalId)
  }, [totalFrames])

  return (
    <section className="home-manifesto">
      <div className="home-manifesto__backdrop">
        {statement.visual.primaryFrames.map((frame, index) => (
          <div
            key={frame.label}
            className={[
              'home-manifesto__backdrop-layer',
              index === activeFrameIndex ? 'is-active' : '',
            ].join(' ')}
            aria-hidden={index !== activeFrameIndex}
          >
            <LazyImage
              className="home-manifesto__backdrop-image"
              src={frame.image}
              alt={frame.alt}
              placeholder="blur"
            />
          </div>
        ))}
      </div>

      <div className="home-manifesto__shell">
        <HomeReveal className="home-manifesto__copy" delay={40}>
          <span className="home-manifesto__eyebrow">{statement.eyebrow}</span>
          <h1>{statement.title}</h1>
          <p className="home-manifesto__lead">{statement.lead}</p>
          <p className="home-manifesto__supporting">{statement.supporting}</p>
          <div className="home-manifesto__proofs" aria-label={locale === 'zh' ? '首页硬性证明' : 'Homepage proof points'}>
            {statement.proofItems.map((item) => (
              <div className="home-manifesto__proof-item" key={`${item.value}-${item.label}`}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="home-manifesto__actions">
            <ButtonLink locale={locale} action={statement.primary} tone="primary" />
            <ButtonLink locale={locale} action={statement.secondary} tone="secondary" />
          </div>

          <p className="home-manifesto__note">{statement.note}</p>

          <div className="home-manifesto__tags" aria-label={locale === 'zh' ? '首页标签' : 'Homepage tags'}>
            {statement.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </HomeReveal>

        <HomeReveal className="home-manifesto__aside" delay={180}>
          <div className="home-manifesto__secondary-media">
            {statement.visual.secondaryFrames.map((frame, index) => (
              <div
                key={frame.label}
                className={[
                  'home-manifesto__secondary-layer',
                  index === activeFrameIndex ? 'is-active' : '',
                ].join(' ')}
                aria-hidden={index !== activeFrameIndex}
              >
                <LazyImage
                  className="home-manifesto__secondary-image"
                  src={frame.image}
                  alt={frame.alt}
                  placeholder="blur"
                />
              </div>
            ))}
            <div className="home-manifesto__frame-indicator" aria-label={locale === 'zh' ? '首页画面切换' : 'Hero image rotation'}>
              {statement.visual.primaryFrames.map((frame, index) => (
                <button
                  key={frame.label}
                  type="button"
                  className={[
                    'home-manifesto__frame-dot',
                    index === activeFrameIndex ? 'is-active' : '',
                  ].join(' ')}
                  aria-label={frame.label}
                  onClick={() => setActiveFrameIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="home-manifesto__caption">
            <span>{statement.visual.captionEyebrow}</span>
            <strong>{statement.visual.captionTitle}</strong>
            <p>{statement.visual.captionDescription}</p>
            <div className="home-manifesto__caption-meta">
              <em>{statement.visual.primaryFrames[activeFrameIndex]?.label}</em>
              <em>{statement.visual.secondaryFrames[activeFrameIndex]?.label}</em>
            </div>
          </div>
        </HomeReveal>
      </div>
    </section>
  )
}

function HomeResultStripSection({ content }: { content: LocaleContent['home'] }) {
  const resultStrip = content.resultStrip

  return (
    <section className="content-section home-section home-results">
      <div className="home-results__layout">
        <HomeReveal className="home-section__intro home-results__intro" delay={40}>
          <span className="home-section__eyebrow">{resultStrip.eyebrow}</span>
          <h2>{resultStrip.title}</h2>
          <p>{resultStrip.description}</p>
        </HomeReveal>

        <div className="home-results__grid">
          {resultStrip.items.map((item, index) => (
            <HomeReveal key={`${item.value}-${item.label}`} className="home-results__item" delay={index * 90}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <p>{item.detail}</p>
            </HomeReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function HomeProblemRoutesSection({
  locale,
  content,
}: {
  locale: Locale
  content: LocaleContent['home']
}) {
  const problemRoutes = content.problemRoutes

  return (
    <section className="content-section home-section home-routes">
      <HomeReveal className="home-section__intro home-routes__intro" delay={40}>
        <span className="home-section__eyebrow">{problemRoutes.eyebrow}</span>
        <h2>{problemRoutes.title}</h2>
        <p>{problemRoutes.description}</p>
      </HomeReveal>

      <div className="home-routes__list">
        {problemRoutes.items.map((item, index) => (
          <HomeReveal key={item.title} className="home-routes__item" delay={index * 110}>
            <div className="home-routes__meta">
              <span>{item.eyebrow}</span>
              <h3>{item.title}</h3>
            </div>

            <div className="home-routes__body">
              <p>{item.description}</p>
              <strong>{item.outcome}</strong>
            </div>

            <Link className="home-routes__link" to={buildPath(locale, item.page)}>
              {locale === 'zh' ? '查看这一页' : 'Open page'}
            </Link>
          </HomeReveal>
        ))}
      </div>
    </section>
  )
}

function HomeTrustShowcaseSection({ content }: { content: LocaleContent['home'] }) {
  const trustShowcase = content.trustShowcase

  return (
    <section className="content-section home-section home-trust">
      <div className="home-trust__layout">
        <HomeReveal className="home-trust__copy" delay={40}>
          <span className="home-section__eyebrow">{trustShowcase.eyebrow}</span>
          <h2>{trustShowcase.title}</h2>
          <p>{trustShowcase.description}</p>
          <blockquote>{trustShowcase.quote}</blockquote>
        </HomeReveal>

        <div className="home-trust__panels">
          {trustShowcase.panels.map((panel, index) => (
            <HomeReveal key={panel.title} className="home-trust__panel" delay={index * 110}>
              <div className="home-trust__panel-media">
                <LazyImage
                  className="home-trust__panel-image"
                  src={panel.image}
                  alt={panel.alt}
                  placeholder="blur"
                />
              </div>
              <div className="home-trust__panel-copy">
                <span>{panel.eyebrow}</span>
                <h3>{panel.title}</h3>
                <p>{panel.description}</p>
              </div>
            </HomeReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function HomeConversionSection({
  locale,
  content,
}: {
  locale: Locale
  content: LocaleContent['home']
}) {
  const conversionCta = content.conversionCta
  const { primaryPhone } = siteConfig.contacts

  return (
    <section className="content-section home-section home-conversion">
      <div className="home-conversion__band">
        <HomeReveal className="home-conversion__copy" delay={40}>
          <span className="home-section__eyebrow">{conversionCta.eyebrow}</span>
          <h2>{conversionCta.title}</h2>
          <p>{conversionCta.description}</p>

          <ul className="home-conversion__points">
            {conversionCta.quickPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="home-conversion__actions">
            <ButtonLink locale={locale} action={conversionCta.primary} tone="primary" />
            <ButtonLink locale={locale} action={conversionCta.secondary} tone="secondary" />
          </div>
        </HomeReveal>

        <HomeReveal className="home-conversion__contact" delay={180}>
          <div className="home-conversion__contact-card">
            <span>{locale === 'zh' ? '快速联系' : 'Direct contact'}</span>
            <strong>{primaryPhone.number}</strong>
            <p>{primaryPhone.name}</p>
          </div>

          <a className="home-conversion__contact-link" href={buildPhoneHref(primaryPhone.number)}>
            <PhoneIcon />
            <span>{locale === 'zh' ? '电话沟通' : 'Call now'}</span>
          </a>

          <a className="home-conversion__contact-link" href={buildMailtoHref(siteConfig.contacts.email)}>
            <MailOutlineIcon />
            <span>{siteConfig.contacts.email}</span>
          </a>
        </HomeReveal>
      </div>
    </section>
  )
}

export function HomePage({ locale }: { locale: Locale }) {
  const content = siteContent[locale]

  return (
    <>
      <OrganizationJsonLd
        name={content.brand.fullName}
        description={content.meta.defaultDescription}
        url={siteConfig.legal.websiteUrl ?? 'https://www.hopeyoungchem.com'}
        logo={`${siteConfig.legal.websiteUrl ?? 'https://www.hopeyoungchem.com'}${siteConfig.assets.logo.src}`}
        address={{
          streetAddress: siteConfig.contacts.address,
          addressLocality: '广州',
          addressRegion: '广东',
          postalCode: '510000',
          addressCountry: 'CN',
        }}
        contactPoint={{
          telephone: siteConfig.contacts.primaryPhone.number,
          contactType: 'customer service',
          availableLanguage: ['Chinese', 'English'],
        }}
      />

      <HomeStatementSection locale={locale} content={content.home} />
      <HomeResultStripSection content={content.home} />
      <HomeProblemRoutesSection locale={locale} content={content.home} />
      <HomeTrustShowcaseSection content={content.home} />
      <HomeConversionSection locale={locale} content={content.home} />
    </>
  )
}
