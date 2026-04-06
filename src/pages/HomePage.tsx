import { siteConfig, siteContent, type Locale, type PhotoCard } from '../content/siteContent'
import { buildPhoneHref, buildMailtoHref } from '../utils/links'
import { LazyImage } from '../components/common'
import {
  ButtonLink,
  SectionHeader,
  PortalEntryPanel,
  CredentialPanel,
} from '../components/common'
import { OrganizationJsonLd } from '../components/seo'
import researchScene2Image from '../assets/media/provided/research-scene-2.jpg'

function HomeHero({ locale }: { locale: Locale }) {
  const content = siteContent[locale]

  return (
    <section className="home-hero">
      <div className="home-hero-shell">
        <div className="home-hero-copy-panel">
          <div className="home-hero-copy">
            <span className="eyebrow">{content.home.hero.eyebrow}</span>
            <h1>{content.home.hero.title}</h1>
            <p className="home-hero-lead">{content.home.hero.lead}</p>
            <p className="home-hero-supporting">{content.home.hero.supporting}</p>
            <div className="hero-actions">
              <ButtonLink locale={locale} action={content.home.hero.primary} tone="primary" />
              <ButtonLink locale={locale} action={content.home.hero.secondary} tone="secondary" />
            </div>
            <p className="home-hero-note">{content.home.hero.note}</p>
          </div>
        </div>
        <div className="home-hero-media-panel">
          <div className="home-hero-media">
            <LazyImage
              className="home-hero-image"
              src={researchScene2Image}
              placeholder="blur"
              alt={
                locale === 'zh'
                  ? '压敏胶研发场景主视觉'
                  : 'Acrylic PSA research hero visual'
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function HomePortalSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale]

  return (
    <section className="content-section">
      <div className="home-portal-lead">
        <SectionHeader section={content.home.brandIntro} />
      </div>
      <div className="home-portal-grid">
        {content.home.portalEntries.map((entry) => (
          <PortalEntryPanel key={entry.title} entry={entry} locale={locale} />
        ))}
      </div>
    </section>
  )
}

function HomeMetricBand({ locale }: { locale: Locale }) {
  const metrics = siteContent[locale].common.metrics

  return (
    <section className="content-section content-section-tight">
      <div className="home-metric-band">
        {metrics.map((item) => (
          <article className="home-metric-item" key={`${item.value}-${item.label}`}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function HomeContactCta({ locale }: { locale: Locale }) {
  const content = siteContent[locale]

  return (
    <section className="content-section content-section-tight">
      <div className="home-cta-band">
        <div className="home-cta-copy">
          <h2>
            {locale === 'zh'
              ? '有粘接需求？让我们聊聊'
              : 'Have a bonding challenge? Let\'s talk.'}
          </h2>
          <p>
            {locale === 'zh'
              ? '从材料选型到样品验证，一个电话即可启动。'
              : 'From material selection to sample validation, one call to start.'}
          </p>
          <div className="hero-actions">
            <ButtonLink locale={locale} action={content.home.hero.primary} tone="primary" />
            <ButtonLink locale={locale} action={{ label: locale === 'zh' ? '进入联系页' : 'Contact us', page: 'contact' }} tone="secondary" />
          </div>
        </div>
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
          telephone: siteConfig.contacts.phones[0].number,
          contactType: 'customer service',
          availableLanguage: ['Chinese', 'English'],
        }}
      />
      <HomeHero locale={locale} />
      <HomeMetricBand locale={locale} />
      <HomePortalSection locale={locale} />
      <HomeContactCta locale={locale} />
    </>
  )
}
