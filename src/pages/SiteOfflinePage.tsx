import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MailOutlineIcon, PhoneIcon } from '../components/common/Icons'
import { siteConfig } from '../content/siteContent'
import { buildMailtoHref, buildPhoneHref } from '../utils/links'

export function SiteOfflinePage() {
  const location = useLocation()
  const locale = location.pathname.startsWith('/en') ? 'en' : 'zh'
  const isZh = locale === 'zh'
  const { primaryPhone } = siteConfig.contacts
  const pageTitle = isZh ? '网站暂停访问 | 虹扬化工' : 'Site Temporarily Offline | Hope Young'
  const pageDescription = isZh
    ? '因备案与审核安排，虹扬官网当前暂停访问。审核完成后将恢复正常浏览。'
    : 'The Hope Young website is temporarily offline for filing and review. Access will resume once the review is complete.'

  useEffect(() => {
    document.title = pageTitle
    document.documentElement.lang = isZh ? 'zh-CN' : 'en'

    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    descriptionTag?.setAttribute('content', pageDescription)
  }, [isZh, pageDescription, pageTitle])

  return (
    <main className="offline-page">
      <div className="offline-page__veil" />
      <section className="offline-page__panel">
        <span className="offline-page__eyebrow">
          {isZh ? '网站审核中' : 'Website Under Review'}
        </span>
        <h1>{isZh ? '虹扬官网暂时下线' : 'The Hope Young website is temporarily offline'}</h1>
        <p className="offline-page__lead">
          {isZh
            ? '因备案与审核安排，当前网站已暂停公开访问。审核完成后会尽快恢复。'
            : 'The website is currently unavailable during filing and review. Access will be restored as soon as the review is complete.'}
        </p>
        <p className="offline-page__note">
          {isZh
            ? '如需业务咨询、样品沟通或来访确认，请直接通过电话或邮箱联系。'
            : 'For business inquiries, sample coordination or visit confirmation, please contact us by phone or email.'}
        </p>

        <div className="offline-page__actions">
          <a className="offline-page__action offline-page__action-primary" href={buildPhoneHref(primaryPhone.number)}>
            <PhoneIcon />
            <span>{isZh ? '致电联系' : 'Call us'}</span>
          </a>
          <a className="offline-page__action" href={buildMailtoHref(siteConfig.contacts.email)}>
            <MailOutlineIcon />
            <span>{isZh ? '发送邮件' : 'Send email'}</span>
          </a>
        </div>

        <div className="offline-page__contact-grid">
          <article className="offline-page__contact-card">
            <span>{isZh ? '联系电话' : 'Phone'}</span>
            <strong>{primaryPhone.number}</strong>
            <p>{primaryPhone.name}</p>
          </article>
          <article className="offline-page__contact-card">
            <span>{isZh ? '商务邮箱' : 'Email'}</span>
            <strong>{siteConfig.contacts.email}</strong>
            <p>{isZh ? '官网恢复前可继续邮件沟通' : 'Available while the website is offline'}</p>
          </article>
          <article className="offline-page__contact-card">
            <span>{isZh ? '办公地址' : 'Office'}</span>
            <strong>{siteConfig.contacts.officeAddress}</strong>
            <p>{isZh ? '来访请先电话确认' : 'Please confirm visits by phone in advance'}</p>
          </article>
        </div>
      </section>
    </main>
  )
}
