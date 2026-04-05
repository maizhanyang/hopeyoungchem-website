import { siteConfig, siteContent, type Locale, type PhotoCard, type SectionHeaderContent } from '../content/siteContent'
import {
  EditorialBanner,
  SectionHeader,
  FeaturePanel,
  CredentialPanel,
  ButtonLink,
} from '../components/common'
import officeEntranceImage from '../assets/media/provided/office-entry-real.jpg'
import companyBrandWall1Image from '../assets/media/provided/company-brand-wall-1.jpg'
import companyBrandWall2Image from '../assets/media/provided/company-brand-wall-2.jpg'

function AboutBrandSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale].about

  return (
    <section className="content-section about-brand-section">
      <div className="about-brand-shell">
        <div className="about-brand-plaque">
          <img
            src={siteConfig.assets.logo.src}
            alt={siteConfig.assets.logo.alt[locale]}
          />
        </div>
        <div className="about-brand-copy">
          <span className="eyebrow">{locale === 'zh' ? '品牌识别' : 'Brand Identity'}</span>
          <h2>
            {locale === 'zh'
              ? '把品牌、技术方法和合作方式放在一起看'
              : 'See the brand, technical method and partnership style together'}
          </h2>
          <p>{content.story}</p>
          <div className="hero-actions">
            <ButtonLink locale={locale} action={content.hero.primary} tone="primary" />
            <ButtonLink locale={locale} action={content.hero.secondary} tone="secondary" />
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutGallerySection({ locale }: { locale: Locale }) {
  const brandPhotos: PhotoCard[] = [
    {
      src: companyBrandWall1Image,
      alt:
        locale === 'zh'
          ? '公司前台品牌墙与接待空间'
          : 'Front-desk brand wall and reception area',
      title: locale === 'zh' ? '品牌前台与接待位' : 'Brand Reception Wall',
      description:
        locale === 'zh'
          ? '把真实品牌位放进关于页后，站点的正式企业感会比单纯使用 logo 更完整。'
          : 'Using the real reception-side brand wall gives the about page a more formal corporate presence than a logo alone.',
    },
    {
      src: companyBrandWall2Image,
      alt:
        locale === 'zh'
          ? '品牌墙近景与办公接待环境'
          : 'Brand wall close-up and office reception setting',
      title: locale === 'zh' ? '正式品牌露出场景' : 'Formal Brand Presence',
      description:
        locale === 'zh'
          ? '这组素材直接支撑官网中的品牌识别、来访预期和主体可信度表达。'
          : 'This material supports the public website\'s brand recognition, visitor expectation and entity credibility.',
    },
  ]

  return (
    <section className="content-section about-gallery-section">
      <SectionHeader
        section={{
          eyebrow: locale === 'zh' ? '品牌露出' : 'Brand Presence',
          title:
            locale === 'zh'
              ? '把附件 6 里的真实品牌素材接进正式关于页'
              : 'Bring the approved brand-wall imagery into the formal about page',
          description:
            locale === 'zh'
              ? '这组品牌墙素材现在直接承担关于页的正式视觉露出，也让品牌、空间和接待感受有了更真实的公开表达。'
              : 'The approved brand-wall set now carries a formal visual role on the about page and gives the public story a more real sense of place and reception.',
        }}
      />
      <div className="about-gallery-grid">
        {brandPhotos.map((photo) => (
          <PhotoCardPanel key={photo.title} photo={photo} />
        ))}
      </div>
    </section>
  )
}

function AboutValuesSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale].about

  return (
    <section className="content-section about-values-section">
      <div className="about-values-shell">
        <SectionHeader
          section={{
            eyebrow: locale === 'zh' ? '合作方式' : 'Working Style',
            title:
              locale === 'zh'
                ? '把长期配合说清楚，比堆品牌口号更重要'
                : 'Clarifying long-term collaboration matters more than slogans',
            description:
              locale === 'zh'
                ? '关于页更像一张合作方式说明页，帮助客户理解虹扬如何进入项目、如何组织沟通，以及为什么适合长期配合。'
                : 'The about page works as a collaboration brief, helping visitors understand how Hope Young enters projects, structures communication and supports longer partnerships.',
          }}
        />
        <div className="about-values-grid">
          {content.values.map((item) => (
            <FeaturePanel key={item.title} card={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutProofSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale]
  const proofHeader: SectionHeaderContent = {
    eyebrow: locale === 'zh' ? '公开资料层' : 'Public Proof Layer',
    title:
      locale === 'zh'
        ? '把品牌现场、证照与专利公开层放在同一页收口'
        : 'Bring brand presence, credentials and the patent layer into one closing section',
    description:
      locale === 'zh'
        ? '关于页现在不仅讲故事，也把真实品牌场景、营业主体、高新证明与专利积累放在一起，帮助客户更快判断这是一个可正式沟通的企业入口。'
        : 'The about page now combines real brand scenes with entity proof, high-tech certification and patent accumulation so visitors can judge the company as a formal business entry point faster.',
  }
  const proofNote =
    locale === 'zh'
      ? '当前正式公开层已覆盖营业执照、高新证书、17 项公开专利条目、9 个产品摘要、5 个匿名量化案例，以及附件 6 中的真实办公与实验场景。后续若补齐备案信息、产品实拍与实名授权案例，站点即可进一步进入最终上线状态。'
      : 'The current public layer now covers the business license, high-tech certificate, 17 public patent entries, 9 product summaries, 5 quantified anonymous cases, and the real office and lab scenes from the approved media pack. Filing details, product photography and approved named cases remain the main final-launch additions.'

  return (
    <section className="content-section about-proof-section">
      <SectionHeader section={proofHeader} />
      <div className="technology-proof-grid about-proof-grid">
        {content.technology.labCards.map((item) => (
          <CredentialPanel key={`about-${item.title}`} card={item} />
        ))}
      </div>
      <p className="section-inline-note">{proofNote}</p>
    </section>
  )
}

function AboutTimelineSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale].about

  return (
    <section className="content-section about-timeline-section">
      <SectionHeader
        section={{
          eyebrow: locale === 'zh' ? '发展节奏' : 'Timeline',
          title:
            locale === 'zh'
              ? '用公开节点概括企业发展节奏'
              : 'Map the company pace through public milestones',
          description:
            locale === 'zh'
              ? '时间线作为附属信息保留，用更轻的方式帮助客户快速理解企业阶段和业务方向。'
              : 'The timeline stays as a secondary layer, helping visitors understand stage, direction and company momentum in a lighter way.',
        }}
      />
      <div className="about-timeline-ribbon">
        {content.timeline.map((item) => (
          <article className="timeline-card" key={`${item.year}-${item.title}`}>
            <span className="timeline-year">{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function AboutPageCta({ locale }: { locale: Locale }) {
  const cta = siteContent[locale].about.pageCta

  return (
    <section className="content-section content-section-tight">
      <div className="page-cta page-cta-about">
        <div className="page-cta-header">
          <span className="eyebrow">{cta.eyebrow}</span>
          <h2>{cta.title}</h2>
          <p>{cta.description}</p>
        </div>
        <div className="page-cta-about-stack">
          {cta.items.map((item) => (
            <article className="page-cta-about-row" key={item.title}>
              <div className="page-cta-about-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {item.action && (
                <Link className="page-cta-inline-link" to={buildPath(locale, item.action.page)}>
                  <span>{item.action.label}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              )}
            </article>
          ))}
        </div>
        <div className="page-cta-actions">
          <ButtonLink locale={locale} action={cta.primary} tone="primary" />
          {cta.secondary && <ButtonLink locale={locale} action={cta.secondary} tone="secondary" />}
        </div>
      </div>
    </section>
  )
}

export function AboutPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale].about

  return (
    <>
      <EditorialBanner
        locale={locale}
        hero={content.hero}
        image={officeEntranceImage}
        alt={
          locale === 'zh'
            ? '公司入口与品牌标识场景'
            : 'Office entrance with brand signage'
        }
        theme="about"
        detailTitle={locale === 'zh' ? '品牌与合作' : 'Brand and Partnership'}
        detailCopy={content.hero.note}
      />

      <AboutBrandSection locale={locale} />
      <AboutGallerySection locale={locale} />
      <AboutValuesSection locale={locale} />
      <AboutProofSection locale={locale} />
      <AboutTimelineSection locale={locale} />
      <AboutPageCta locale={locale} />
    </>
  )
}
