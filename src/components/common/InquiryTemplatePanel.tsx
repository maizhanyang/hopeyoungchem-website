import { siteContent, type Locale } from '../../content/siteContent'
import { SectionHeader } from './SectionHeader'

export function InquiryTemplatePanel({ locale }: { locale: Locale }) {
  const content = siteContent[locale].contact

  return (
    <div className="info-panel contact-guide-panel">
      <SectionHeader
        section={{
          eyebrow: locale === 'zh' ? '沟通建议' : 'Preparation',
          title: content.guideTitle,
          description: content.guideDescription,
        }}
      />
      <div className="template-list">
        {content.guideItems.map((item) => (
          <div className="template-item" key={item}>
            <span className="bullet-mark" />
            <p>{item}</p>
          </div>
        ))}
      </div>
      <p className="template-note">{content.guideNote}</p>
    </div>
  )
}
