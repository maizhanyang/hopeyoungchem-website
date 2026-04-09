import { siteContent, type Locale } from '../content/siteContent'
import {
  EditorialBanner,
  SectionHeader,
  MaterialBand,
  ProductPanel,
  FeaturePanel,
  ButtonLink,
} from '../components/common'
import { Link } from 'react-router-dom'
import { buildPath } from '../utils'
import researchScene1Image from '../assets/media/provided/research-scene-1.jpg'

function SolutionsGuideSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale].solutions

  return (
    <section className="content-section solution-guide-section">
      <div className="solution-guide-shell">
        <SectionHeader section={content.guideHeader} />
        <div className="solution-guide-grid">
          {content.guideCards.map((item, index) => (
            <article className="solution-guide-card" key={item.title}>
              <span className="solution-guide-index">{String(index + 1).padStart(2, '0')}</span>
              <div className="solution-guide-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.detail}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionsMaterialSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale].solutions

  return (
    <section className="content-section solution-platform-section">
      <div className="solution-platform-shell">
        <SectionHeader section={content.platformHeader} />
        <div className="solution-platform-stack">
          {content.materials.map((material, index) => (
            <MaterialBand
              key={material.name}
              material={material}
              locale={locale}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionsShowcaseSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale].solutions

  return (
    <section className="content-section solution-showcase-section">
      <SectionHeader section={content.sampleHeader} />
      <div className="solution-showcase-grid">
        {content.samples.map((sample) => (
          <ProductPanel key={sample.name} locale={locale} sample={sample} />
        ))}
      </div>
    </section>
  )
}

function SolutionsProcessSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale].solutions

  return (
    <section className="content-section solution-flow-section">
      <SectionHeader section={content.processHeader} />
      <div className="solution-flow-grid">
        {content.process.map((item) => (
          <FeaturePanel key={item.title} card={item} />
        ))}
      </div>
      <div className="solution-document-band">
        <span className="eyebrow">
          {locale === 'zh' ? '资料开放' : 'Document Access'}
        </span>
        <h3>{content.dataRequest.title}</h3>
        <p>{content.dataRequest.description}</p>
        <div className="bullet-list">
          {content.dataRequest.items.map((item) => (
            <div className="bullet-item" key={item}>
              <span className="bullet-mark" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionsPageCta({ locale }: { locale: Locale }) {
  const cta = siteContent[locale].solutions.pageCta

  return (
    <section className="content-section content-section-tight">
      <div className="page-cta page-cta-solutions">
        <div className="page-cta-header">
          <span className="eyebrow">{cta.eyebrow}</span>
          <h2>{cta.title}</h2>
          <p>{cta.description}</p>
        </div>
        <div className="page-cta-solutions-grid">
          {cta.items.map((item) => (
            <article className="page-cta-solution-card" key={item.title}>
              {item.eyebrow && <span className="page-cta-chip">{item.eyebrow}</span>}
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
        <div className="page-cta-actions">
          <ButtonLink locale={locale} action={cta.primary} tone="primary" />
          {cta.secondary && <ButtonLink locale={locale} action={cta.secondary} tone="secondary" />}
        </div>
      </div>
    </section>
  )
}

export function SolutionsPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale].solutions

  return (
    <>
      <EditorialBanner
        locale={locale}
        hero={content.hero}
        image={researchScene1Image}
        alt={
          locale === 'zh'
            ? '实验室人物协作与材料开发场景'
            : 'Laboratory collaboration and material development scene'
        }
        theme="solutions"
        detailTitle={locale === 'zh' ? '材料平台' : 'Material Platforms'}
        detailCopy={content.hero.note}
      />

      <section className="content-section editorial-intro-section">
        <div className="page-editorial-lead">
          <SectionHeader
            section={{
              eyebrow: locale === 'zh' ? '材料路线' : 'Material Routes',
              title:
                locale === 'zh'
                  ? '把平台判断放在产品型号之前'
                  : 'Put platform judgment before product codes',
              description: content.intro,
            }}
          />
          <div className="page-editorial-side">
            <p>
              {locale === 'zh'
                ? '这页最适合用于首轮判断: 先用平台筛选可行路线,再看代表型号与公开资料边界,最后决定是否进入下一步沟通。'
                : 'This page works best as a first screening tool: use the platform to narrow the route, review the representative grade and public document boundary, and then decide whether the conversation should move forward.'}
            </p>
          </div>
        </div>
      </section>

      <SolutionsGuideSection locale={locale} />
      <SolutionsMaterialSection locale={locale} />
      <SolutionsShowcaseSection locale={locale} />
      <SolutionsProcessSection locale={locale} />
      <SolutionsPageCta locale={locale} />
    </>
  )
}
