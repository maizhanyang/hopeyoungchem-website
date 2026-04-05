import { siteContent, type Locale } from '../content/siteContent'
import {
  EditorialBanner,
  SectionHeader,
  CaseFeatureBand,
  FeaturePanel,
  ButtonLink,
} from '../components/common'
import { Link } from 'react-router-dom'
import { buildPath } from '../utils'
import researchScene1Image from '../assets/media/provided/research-scene-1.jpg'
import labReactorImage from '../assets/media/provided/lab-person-1.jpg'
import meetingRoomRealImage from '../assets/media/provided/meeting-room-real.jpg'
import researchScene2Image from '../assets/media/provided/research-scene-2.jpg'
import officePersonImage from '../assets/media/provided/office-person-1.jpg'

function ApplicationsCasesSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale].applications
  const caseImages = [
    officePersonImage,
    labReactorImage,
    meetingRoomRealImage,
    researchScene1Image,
    researchScene2Image,
  ]

  return (
    <section className="content-section case-river-section">
      <div className="case-river">
        {content.cases.map((item, index) => (
          <CaseFeatureBand
            key={item.title}
            caseStudy={item}
            locale={locale}
            image={caseImages[index % caseImages.length]}
            reverse={false}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

function ApplicationsFocusSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale].applications

  return (
    <section className="content-section applications-focus-section">
      <div className="applications-focus-shell">
        <SectionHeader section={content.focusHeader} />
        <div className="applications-focus-grid">
          {content.focusAreas.map((item) => (
            <FeaturePanel key={item.title} card={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ApplicationsPageCta({ locale }: { locale: Locale }) {
  const cta = siteContent[locale].applications.pageCta

  return (
    <section className="content-section content-section-tight">
      <div className="page-cta page-cta-applications">
        <div className="page-cta-header">
          <span className="eyebrow">{cta.eyebrow}</span>
          <h2>{cta.title}</h2>
          <p>{cta.description}</p>
        </div>
        <div className="page-cta-application-stack">
          {cta.items.map((item, index) => (
            <article className="page-cta-application-row" key={item.title}>
              <span className="page-cta-row-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="page-cta-row-copy">
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
      </div>
    </section>
  )
}

export function ApplicationsPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale].applications

  return (
    <>
      <EditorialBanner
        locale={locale}
        hero={content.hero}
        image={researchScene1Image}
        alt={
          locale === 'zh'
            ? '实验室中的材料开发与项目验证场景'
            : 'Laboratory material development and project validation scene'
        }
        theme="applications"
        detailTitle={locale === 'zh' ? '案例结构' : 'Case Format'}
        detailCopy={content.hero.note}
      />

      <section className="content-section editorial-intro-section">
        <div className="page-editorial-lead">
          <SectionHeader
            section={{
              eyebrow: locale === 'zh' ? '案例与场景' : 'Cases and Scenarios',
              title:
                locale === 'zh'
                  ? '先让客户看到我们理解的问题'
                  : 'Show the problem understanding first',
              description: content.overview,
            }}
          />
          <div className="page-editorial-side">
            <p>
              {locale === 'zh'
                ? '行业应用页不堆客户名称，而是用更适合商务沟通的方式，把痛点、方案路径和交付结果串成一条阅读线。'
                : 'Instead of listing customer names, the applications page keeps a business-ready reading flow that connects challenge, approach and delivery outcome.'}
            </p>
          </div>
        </div>
      </section>

      <ApplicationsCasesSection locale={locale} />
      <ApplicationsFocusSection locale={locale} />
      <ApplicationsPageCta locale={locale} />
    </>
  )
}
