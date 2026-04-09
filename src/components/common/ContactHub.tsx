import { siteConfig, siteContent, type Locale } from '../../content/siteContent'
import { buildPhoneHref, buildMailtoHref } from '../../utils/links'
import LazyImage from './LazyImage'

export function ContactHub({ locale }: { locale: Locale }) {
  const content = siteContent[locale].contact
  const {
    featuredPhones,
    phones,
    email,
    officeAddress,
    labAddress,
  } = siteConfig.contacts

  return (
    <div className="contact-hub">
      <div className="section-header section-header-compact">
        <span className="eyebrow">{locale === 'zh' ? '联系信息' : 'Contact Details'}</span>
        <h2>{content.hubTitle}</h2>
        <p>{content.hubDescription}</p>
      </div>

      <div className="contact-hub-stack">
        <section className="contact-summary-section">
          <div className="contact-section-heading">
            <span className="contact-channel-label">
              {locale === 'zh' ? '首次联系' : 'First Contact'}
            </span>
            <h3>{content.summaryTitle}</h3>
            <p>{content.summaryDescription}</p>
          </div>
          <div className="contact-summary-grid">
            {featuredPhones.map((item) => (
              <article className="contact-channel contact-summary-card" key={`${item.name}-${item.number}`}>
                <span className="contact-channel-label">
                  {locale === 'zh' ? '主联系人' : 'Lead Contact'}
                </span>
                <a className="contact-phone-link contact-phone-link-featured" href={buildPhoneHref(item.number)}>
                  <strong>{item.name}</strong>
                  <span>{item.number}</span>
                </a>
              </article>
            ))}

            <article className="contact-channel contact-summary-card">
              <span className="contact-channel-label">
                {locale === 'zh' ? '商务邮箱' : 'Business Email'}
              </span>
              <a className="contact-email-link contact-email-link-summary" href={buildMailtoHref(email)}>
                {email}
              </a>
            </article>

            <article className="contact-channel contact-summary-card contact-summary-card-qr">
              <span className="contact-channel-label">{content.channelLabels.wechat}</span>
              <div className="contact-qr-shell">
                <LazyImage
                  className="contact-qr-image"
                  src={siteConfig.assets.wechatQr.src}
                  alt={siteConfig.assets.wechatQr.alt[locale]}
                />
              </div>
              <p>{content.qrcodeCaption}</p>
            </article>

            <article className="contact-channel contact-summary-card contact-summary-card-address">
              <span className="contact-channel-label">{content.channelLabels.address}</span>
              <div className="contact-address-list">
                <p className="contact-address">
                  <strong>{locale === 'zh' ? '办公室' : 'Office'}</strong>
                  <span>{officeAddress}</span>
                </p>
                <p className="contact-address">
                  <strong>{locale === 'zh' ? '实验室' : 'Lab'}</strong>
                  <span>{labAddress}</span>
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-detail-section">
          <div className="contact-section-heading">
            <span className="contact-channel-label">
              {locale === 'zh' ? '按角色分流' : 'Role-Based Routing'}
            </span>
            <h3>{content.detailTitle}</h3>
            <p>{content.detailDescription}</p>
          </div>
          <div className="contact-channel-grid contact-channel-grid-detailed">
            <article className="contact-channel contact-channel-wide">
              <span className="contact-channel-label">{content.channelLabels.phones}</span>
              <div className="contact-phone-list">
                {phones.map((item) => (
                  <a
                    key={`${item.name}-${item.number}`}
                    className="contact-phone-link"
                    href={buildPhoneHref(item.number)}
                  >
                    <strong>{item.name}</strong>
                    <span>{item.number}</span>
                  </a>
                ))}
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  )
}
