import { Link } from 'react-router-dom'
import { siteConfig, siteContent, type Locale } from '../content/siteContent'
import { supportContent, type UtilityPageKey } from '../content/supportContent'
import { pageOrder, type PageKey } from '../content/siteContent'
import { EditorialBanner, SectionHeader } from '../components/common'
import { buildPath } from '../utils/navigation'
import { buildPhoneHref, buildMailtoHref } from '../utils/links'
import meetingRoomRealImage from '../assets/media/provided/meeting-room-real.jpg'
import companyBrandWall1Image from '../assets/media/provided/company-brand-wall-1.jpg'

export function DocumentUtilityPage({
  locale,
  page,
}: {
  locale: Locale
  page: Exclude<UtilityPageKey, 'sitemap'>
}) {
  const content = supportContent[locale][page]

  return (
    <>
      <EditorialBanner
        locale={locale}
        hero={content.hero}
        image={meetingRoomRealImage}
        alt={
          locale === 'zh'
            ? '会议室与正式沟通环境'
            : 'Meeting room and formal discussion setting'
        }
        theme="support"
        detailTitle={content.detailTitle}
        detailCopy={content.detailCopy}
      />

      <section className="content-section support-content-section">
        <SectionHeader section={content.intro} />
        <div className="support-document-stack">
          {content.sections.map((section) => (
            <article className="support-document-card" key={section.title}>
              <h3>{section.title}</h3>
              <div className="support-document-copy">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="support-bullet-list">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
        <p className="section-inline-note">{content.note}</p>
      </section>
    </>
  )
}

export function SitemapUtilityPage({ locale }: { locale: Locale }) {
  const content = supportContent[locale].sitemap
  const footer = siteContent[locale].footer

  const publicPages = pageOrder.map((pageKey) => ({
    label: siteContent[locale].nav[pageKey],
    href: buildPath(locale, pageKey),
    description: siteContent[locale].meta.pageDescriptions[pageKey],
  }))

  const utilityPageSlugs: Record<UtilityPageKey, string> = {
    privacy: 'privacy',
    terms: 'terms',
    copyright: 'copyright',
    sitemap: 'sitemap',
  }

  const utilityPageOrder: UtilityPageKey[] = ['sitemap', 'copyright', 'terms', 'privacy']

  const supportPages = utilityPageOrder.map((pageKey) => ({
    label:
      footer.legalLinks.find((item) => item.href === buildPath(locale, pageKey))?.label
      ?? supportContent[locale][pageKey].hero.eyebrow,
    href: buildPath(locale, pageKey),
    description: supportContent[locale][pageKey].intro.description,
  }))

  return (
    <>
      <EditorialBanner
        locale={locale}
        hero={content.hero}
        image={companyBrandWall1Image}
        alt={
          locale === 'zh'
            ? '公司品牌墙与前台接待区域'
            : 'Company brand wall and reception zone'
        }
        theme="support"
        detailTitle={content.detailTitle}
        detailCopy={content.detailCopy}
      />

      <section className="content-section support-content-section">
        <SectionHeader section={content.intro} />
        <div className="support-sitemap-grid">
          <article className="support-sitemap-card">
            <h3>{content.publicPagesTitle}</h3>
            <div className="support-sitemap-links">
              {publicPages.map((item) => (
                <Link className="support-sitemap-link" key={item.href} to={item.href}>
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.description}</p>
                  </div>
                  <span>{item.href}</span>
                </Link>
              ))}
            </div>
          </article>

          <article className="support-sitemap-card">
            <h3>{content.supportPagesTitle}</h3>
            <div className="support-sitemap-links">
              {supportPages.map((item) => (
                <Link className="support-sitemap-link" key={item.href} to={item.href}>
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.description}</p>
                  </div>
                  <span>{item.href}</span>
                </Link>
              ))}
            </div>
          </article>

          <article className="support-sitemap-card">
            <h3>{content.contactTitle}</h3>
            <div className="support-contact-list">
              <Link className="support-sitemap-link" to={buildPath(locale, 'contact')}>
                <div>
                  <strong>{locale === 'zh' ? '联系页' : 'Contact Page'}</strong>
                  <p>
                    {locale === 'zh'
                      ? '汇总公开电话、商务邮箱、业务微信二维码、办公室与实验室地址。'
                      : 'Includes the public phone list, business email, WeChat QR code and both office and lab addresses.'}
                  </p>
                </div>
                <span>{buildPath(locale, 'contact')}</span>
              </Link>
              {siteConfig.contacts.phones.map((item) => (
                <a
                  className="support-contact-item"
                  href={buildPhoneHref(item.number)}
                  key={`${item.name}-${item.number}`}
                >
                  <span>{item.name}</span>
                  <strong>{item.number}</strong>
                </a>
              ))}
              <a className="support-contact-item" href={buildMailtoHref(siteConfig.contacts.email)}>
                <span>{locale === 'zh' ? '商务邮箱' : 'Business Email'}</span>
                <strong>{siteConfig.contacts.email}</strong>
              </a>
              <div className="support-contact-item support-contact-item-static">
                <span>{locale === 'zh' ? '办公室地址' : 'Office Address'}</span>
                <strong>{siteConfig.contacts.officeAddress}</strong>
              </div>
              <div className="support-contact-item support-contact-item-static">
                <span>{locale === 'zh' ? '实验室地址' : 'Lab Address'}</span>
                <strong>{siteConfig.contacts.labAddress}</strong>
              </div>
            </div>
          </article>
        </div>
        <p className="section-inline-note">{content.note}</p>
      </section>
    </>
  )
}
