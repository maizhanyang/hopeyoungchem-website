import { siteConfig, siteContent, type Locale, type PhotoCard } from '../content/siteContent'
import { buildPhoneHref, buildMailtoHref } from '../utils/links'
import {
  ButtonLink,
  SectionHeader,
  PortalEntryPanel,
  CredentialPanel,
} from '../components/common'
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
            <img
              className="home-hero-image"
              src={researchScene2Image}
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

function HomeProofSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale]

  return (
    <section className="content-section home-proof-section">
      <SectionHeader section={content.home.proofHeader} />
      <div className="home-proof-grid">
        {content.home.credentials.map((item) => (
          <CredentialPanel key={item.title} card={item} />
        ))}
      </div>
    </section>
  )
}

function HomeCorporateBand({ locale }: { locale: Locale }) {
  const content = siteContent[locale]
  const { phones, email, officeAddress, labAddress } = siteConfig.contacts
  const primaryPhone = siteConfig.contacts.phones[0]

  return (
    <section className="content-section content-section-tight">
      <div className="home-corporate-band">
        <div className="home-corporate-copy">
          <span className="eyebrow">{locale === 'zh' ? '企业信息' : 'Corporate Info'}</span>
          <h2>
            {locale === 'zh'
              ? '资料与项目沟通入口'
              : 'Documents and project contact'}
          </h2>
          <p>{content.footer.statement}</p>
          <div className="hero-actions">
            <a className="button-link" href={buildPhoneHref(primaryPhone.number)}>
              {primaryPhone.number}
            </a>
            <ButtonLink locale={locale} action={{ label: locale === 'zh' ? '进入联系页' : 'Open contact page', page: 'contact' }} tone="secondary" />
          </div>
          <a className="home-corporate-email" href={buildMailtoHref(email)}>
            {email}
          </a>
        </div>
        <div className="home-corporate-grid">
          <article className="home-corporate-card">
            <span className="contact-channel-label">{content.contact.channelLabels.phones}</span>
            <div className="home-corporate-phone-list">
              {phones.map((item) => (
                <a
                  key={`${item.name}-${item.number}`}
                  className="home-corporate-phone"
                  href={buildPhoneHref(item.number)}
                >
                  <strong>{item.name}</strong>
                  <span>{item.number}</span>
                </a>
              ))}
            </div>
          </article>
          <article className="home-corporate-card">
            <span className="contact-channel-label">{content.contact.channelLabels.wechat}</span>
            <div className="home-qr-shell">
              <img
                className="home-qr-image"
                src={siteConfig.assets.wechatQr.src}
                alt={siteConfig.assets.wechatQr.alt[locale]}
              />
            </div>
            <p>{content.contact.qrcodeCaption}</p>
          </article>
          <article className="home-corporate-card">
            <span className="contact-channel-label">{content.contact.channelLabels.address}</span>
            <div className="home-contact-addresses">
              <p className="home-contact-text">
                <strong>{locale === 'zh' ? '办公室' : 'Office'}</strong>
                <span>{officeAddress}</span>
              </p>
              <p className="home-contact-text">
                <strong>{locale === 'zh' ? '实验室' : 'Lab'}</strong>
                <span>{labAddress}</span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <HomeHero locale={locale} />
      <HomeMetricBand locale={locale} />
      <HomePortalSection locale={locale} />
      <HomeProofSection locale={locale} />
      <HomeCorporateBand locale={locale} />
    </>
  )
}
