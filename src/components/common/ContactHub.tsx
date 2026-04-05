import { Link } from 'react-router-dom'
import { siteConfig, siteContent, type Locale } from '../../content/siteContent'
import { buildPath } from '../../utils/navigation'
import { buildPhoneHref, buildMailtoHref } from '../../utils/links'

export function ContactHub({ locale }: { locale: Locale }) {
  const content = siteContent[locale].contact
  const { phones, email, officeAddress, labAddress } = siteConfig.contacts

  return (
    <div className="contact-hub">
      <div className="section-header section-header-compact">
        <span className="eyebrow">{locale === 'zh' ? '联系信息' : 'Contact Details'}</span>
        <h2>{content.hubTitle}</h2>
        <p>{content.hubDescription}</p>
      </div>
      <div className="contact-channel-grid">
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
          <a className="contact-email-link" href={buildMailtoHref(email)}>
            {email}
          </a>
        </article>

        <article className="contact-channel">
          <span className="contact-channel-label">{content.channelLabels.wechat}</span>
          <div className="contact-qr-shell">
            <img
              className="contact-qr-image"
              src={siteConfig.assets.wechatQr.src}
              alt={siteConfig.assets.wechatQr.alt[locale]}
            />
          </div>
          <p>{content.qrcodeCaption}</p>
        </article>

        <article className="contact-channel">
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
    </div>
  )
}
