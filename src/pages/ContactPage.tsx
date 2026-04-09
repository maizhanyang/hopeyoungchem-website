import { siteContent, type Locale } from '../content/siteContent'
import {
  EditorialBanner,
  SectionHeader,
  ContactHub,
  ContactFormPanel,
  InquiryTemplatePanel,
} from '../components/common'
import officeEntranceImage from '../assets/media/provided/office-entry-real.jpg'

function ContactDirectSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale]

  return (
    <section className="content-section contact-direct-section">
      <div className="contact-direct-shell">
        <div className="contact-direct-copy">
          <SectionHeader
            section={{
              eyebrow: locale === 'zh' ? '官方渠道' : 'Official Channels',
              title:
                locale === 'zh'
                  ? '把电话、企业微信和双地址放进同一个正式联系入口'
                  : 'Use one formal page for phone, enterprise WeChat and both addresses',
              description: content.contact.note,
            }}
          />
        </div>
        <ContactHub locale={locale} />
      </div>
    </section>
  )
}

function ContactOptionsSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale].contact

  return (
    <section className="content-section contact-options-section">
      <SectionHeader
        section={{
          eyebrow: locale === 'zh' ? '沟通方式' : 'Contact Paths',
          title:
            locale === 'zh'
              ? '根据项目阶段选择更合适的沟通方式'
              : 'Choose the right route for the project stage',
          description:
            locale === 'zh'
              ? '不同阶段对资料、样品和响应速度的要求不同。联系页先把路径分清楚，让沟通更像正式项目配合。'
              : 'Different project stages ask for different levels of document support, samples and response speed. The page clarifies those paths before the discussion starts.',
        }}
      />
      <div className="contact-option-ribbon">
        {content.options.map((item) => (
          <article className="contact-option" key={item.title}>
            <h3>{item.title}</h3>
            <strong>{item.emphasis}</strong>
            <p>{item.body}</p>
            <span>{item.note}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactPreparationSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale].contact

  return (
    <section className="content-section contact-preparation-section">
      <div className="contact-preparation-grid">
        <SectionHeader
          section={{
            eyebrow: locale === 'zh' ? '表单与沟通模板' : 'Form and Brief',
            title:
              locale === 'zh'
                ? '让项目要点整理和继续沟通保持一致'
                : 'Keep project preparation and follow-up aligned',
            description:
              locale === 'zh'
                ? '把留资表单和沟通建议放在同一层级，既方便内部收集，也方便客户直接复制使用'
                : 'The inquiry form and preparation notes stay at the same level so the brief can be collected and reused directly.',
          }}
        />
        <ContactFormPanel locale={locale} />
        <InquiryTemplatePanel locale={locale} />
      </div>
    </section>
  )
}

export function ContactPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale]

  return (
    <>
      <EditorialBanner
        locale={locale}
        hero={content.contact.hero}
        image={officeEntranceImage}
        alt={
          locale === 'zh'
            ? '办公室入口与来访识别场景'
            : 'Office entrance and visit identification scene'
        }
        theme="contact"
        detailTitle={locale === 'zh' ? '正式联系' : 'Official Contact'}
        detailCopy={content.contact.note}
      />

      <ContactDirectSection locale={locale} />
      <ContactOptionsSection locale={locale} />
      <ContactPreparationSection locale={locale} />
    </>
  )
}
