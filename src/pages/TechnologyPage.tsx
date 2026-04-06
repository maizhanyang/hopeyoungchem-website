import { siteContent, type Locale, type PhotoCard } from '../content/siteContent'
import {
  EditorialBanner,
  SectionHeader,
  FeaturePanel,
  CredentialPanel,
  TechnologyGalleryTile,
  ButtonLink,
  LazyImage,
} from '../components/common'
import labHoodImage from '../assets/media/provided/lab-hood.jpg'

function TechnologyIntroSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale].technology
  const galleryLead = content.gallery[0]

  return (
    <section className="content-section editorial-intro-section technology-intro-section">
      <div className="technology-intro-shell">
        <div className="technology-intro-copy">
          <SectionHeader
            section={{
              eyebrow: locale === 'zh' ? '技术背书' : 'Technical Backing',
              title:
                locale === 'zh'
                  ? '把团队、方法和验证逻辑放到同一页'
                  : 'Bring team method and validation into one page',
              description: content.overview,
            }}
          />
        </div>
        <div className="technology-intro-media">
          <LazyImage src={galleryLead.src} alt={galleryLead.alt} />
          <div className="technology-intro-caption">
            <span className="contact-channel-label">{galleryLead.title}</span>
            <p>{galleryLead.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TechnologyMethodSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale].technology

  return (
    <section className="content-section technology-method-section">
      <SectionHeader
        section={{
          eyebrow: locale === 'zh' ? '协同方法' : 'Working Method',
          title:
            locale === 'zh'
              ? '让客户看到研发判断如何进入真实项目'
              : 'Show how research judgement enters real projects',
          description:
            locale === 'zh'
              ? '技术页的重点不是堆资历，而是把硕博团队、华工合作背景和应用导向验证方法，转译成客户能理解的合作价值。'
              : 'The goal is not to stack credentials, but to translate the graduate-level team, SCUT collaboration background and application-led validation into collaboration value that customers can understand.',
        }}
      />
      <div className="technology-method-grid">
        {content.pillars.map((item) => (
          <FeaturePanel key={item.title} card={item} />
        ))}
      </div>
    </section>
  )
}

function TechnologyGallerySection({ locale }: { locale: Locale }) {
  const content = siteContent[locale].technology

  return (
    <section className="content-section technology-gallery-section">
      <SectionHeader section={content.galleryHeader} />
      <div className="technology-gallery-mosaic">
        {content.gallery.map((photo) => (
          <TechnologyGalleryTile key={photo.title} photo={photo} />
        ))}
      </div>
    </section>
  )
}

function TechnologyProofSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale].technology

  return (
    <section className="content-section technology-proof-section">
      <SectionHeader section={content.labHeader} />
      <div className="technology-proof-grid">
        {content.labCards.map((item) => (
          <CredentialPanel key={item.title} card={item} />
        ))}
      </div>
    </section>
  )
}

function TechnologyPageCta({ locale }: { locale: Locale }) {
  const cta = siteContent[locale].technology.pageCta

  return (
    <section className="content-section content-section-tight">
      <div className="page-cta page-cta-technology">
        <div className="page-cta-technology-lead">
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
        <div className="page-cta-technology-grid">
          {cta.items.map((item) => (
            <article className="page-cta-technology-card" key={item.title}>
              {item.eyebrow && <span className="page-cta-chip">{item.eyebrow}</span>}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TechnologyPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale].technology

  return (
    <>
      <EditorialBanner
        locale={locale}
        hero={content.hero}
        image={labHoodImage}
        alt={
          locale === 'zh'
            ? '真实实验室设备与研发环境'
            : 'Real laboratory equipment and R&D environment'
        }
        theme="technology"
        detailTitle={locale === 'zh' ? '研发协同' : 'R&D Collaboration'}
        detailCopy={content.hero.note}
      />

      <TechnologyIntroSection locale={locale} />
      <TechnologyMethodSection locale={locale} />
      <TechnologyGallerySection locale={locale} />
      <TechnologyProofSection locale={locale} />
      <TechnologyPageCta locale={locale} />
    </>
  )
}
