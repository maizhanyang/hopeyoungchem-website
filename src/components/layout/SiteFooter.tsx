import { Link } from 'react-router-dom'
import { siteConfig, siteContent, type Locale, type PageKey } from '../../content/siteContent'
import { buildPath, type RouteKey } from '../../utils/navigation'
import { buildPhoneHref } from '../../utils/links'
import { PhoneIcon, ChatIcon, PinIcon } from '../common/Icons'
import { LocaleSwitch } from '../common/LocaleSwitch'

function FooterLinkColumn({
  title,
  links,
  locale,
}: {
  title: string
  links: Array<{
    label: string
    page: PageKey
  }>
  locale: Locale
}) {
  return (
    <section className="footer-column">
      <h3>{title}</h3>
      <div className="footer-link-list">
        {links.map((item) => (
          <Link key={`${title}-${item.page}`} to={buildPath(locale, item.page)}>
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  )
}

export function SiteFooter({ locale, page }: { locale: Locale; page: RouteKey }) {
  const content = siteContent[locale]
  const { phones, address } = siteConfig.contacts
  const { icpNumber, publicSecurityNumber, publicSecurityUrl } = siteConfig.legal
  const primaryPhone = phones[0]
  const year = new Date().getFullYear()
  const registrationLine =
    locale === 'zh'
      ? `© ${year} ${content.brand.fullName}，${content.brand.city}，中国`
      : `© ${year} ${content.brand.fullName}, ${content.brand.city}, China`

  return (
    <footer className="site-footer">
      <div className="site-footer-shell">
        <div className="footer-topbar">
          <Link to={buildPath(locale, 'home')} className="footer-brand-link">
            <span className="footer-brand-logo-shell">
              <img
                className="footer-brand-logo-image"
                src={siteConfig.assets.logo.src}
                alt={siteConfig.assets.logo.alt[locale]}
              />
            </span>
            <span className="footer-brand-lockup">
              <strong>{content.brand.headerPrimaryLatin}</strong>
              <span>{content.brand.headerSecondaryLatin}</span>
            </span>
          </Link>
          <div className="footer-utility">
            <span className="footer-utility-label">{content.footer.topUtilityLabel}</span>
            <LocaleSwitch locale={locale} page={page} className="footer-language-switch" />
          </div>
        </div>

        <div className="footer-columns">
          <FooterLinkColumn
            title={content.footer.companyTitle}
            links={content.footer.companyLinks}
            locale={locale}
          />
          <FooterLinkColumn
            title={content.footer.businessTitle}
            links={content.footer.businessLinks}
            locale={locale}
          />
          <FooterLinkColumn
            title={content.footer.quickTitle}
            links={content.footer.quickLinks}
            locale={locale}
          />

          <section className="footer-column footer-column-contact">
            <h3>{content.footer.contactTitle}</h3>
            <Link className="footer-contact-button" to={buildPath(locale, 'contact')}>
              <span>{content.footer.contactCtaLabel}</span>
              <span aria-hidden="true">→</span>
            </Link>
            <div className="footer-channel-list">
              <a className="footer-channel-link" href={buildPhoneHref(primaryPhone.number)}>
                <PhoneIcon />
                <div>
                  <span>{content.footer.contactChannelLabels.phone}</span>
                  <strong>{primaryPhone.number}</strong>
                </div>
              </a>
              <Link className="footer-channel-link" to={buildPath(locale, 'contact')}>
                <ChatIcon />
                <div>
                  <span>{content.footer.contactChannelLabels.wechat}</span>
                  <strong>
                    {locale === 'zh' ? '查看二维码' : 'Open QR code'}
                  </strong>
                </div>
              </Link>
              <div className="footer-channel-link footer-channel-static">
                <PinIcon />
                <div>
                  <span>{content.footer.contactChannelLabels.address}</span>
                  <strong>{address}</strong>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="footer-bottombar">
          <p className="footer-disclaimer">{content.footer.note}</p>
          <div className="footer-legal-links">
            {content.footer.legalLinks.map((item) =>
              item.href ? (
                item.href.startsWith('/') ? (
                  <Link key={item.label} to={item.href}>
                    {item.label}
                  </Link>
                ) : (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                )
              ) : (
                <span key={item.label}>{item.label}</span>
              ),
            )}
          </div>
          <div className="footer-registration">
            <span>{registrationLine}</span>
            {icpNumber && <span>{icpNumber}</span>}
            {publicSecurityNumber &&
              (publicSecurityUrl ? (
                <a href={publicSecurityUrl} target="_blank" rel="noreferrer">
                  {publicSecurityNumber}
                </a>
              ) : (
                <span>{publicSecurityNumber}</span>
              ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
