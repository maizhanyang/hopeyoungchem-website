import { type FormEvent, useState } from 'react'
import { siteConfig, type Locale } from '../../content/siteContent'
import { buildPhoneHref } from '../../utils/links'
import { copyTextToClipboard } from '../../utils/clipboard'
import type { InquiryDraft } from '../../types'

const emptyInquiryDraft: InquiryDraft = {
  company: '',
  contactPerson: '',
  phone: '',
  application: '',
  material: '',
  message: '',
}

export function ContactFormPanel({ locale }: { locale: Locale }) {
  const [draft, setDraft] = useState<InquiryDraft>(emptyInquiryDraft)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const isZh = locale === 'zh'
  const { primaryPhone } = siteConfig.contacts

  const submitInquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID

    // 未配置 Formspree 时，回退到复制到剪贴板
    if (!formId) {
      const inquiryText = [
        isZh ? '虹扬官网咨询信息' : 'Hope Young Website Inquiry',
        `${isZh ? '公司名称' : 'Company'}: ${draft.company}`,
        `${isZh ? '联系人' : 'Contact'}: ${draft.contactPerson}`,
        `${isZh ? '联系电话' : 'Phone'}: ${draft.phone}`,
        `${isZh ? '应用场景' : 'Application'}: ${draft.application}`,
        `${isZh ? '关注材料' : 'Material Focus'}: ${draft.material || (isZh ? '待沟通' : 'To be discussed')}`,
        `${isZh ? '项目说明' : 'Project Notes'}: ${draft.message}`,
      ].join('\n')

      const copied = await copyTextToClipboard(inquiryText)
      setStatus(copied ? 'success' : 'error')
      return
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...draft,
          language: locale,
          submittedAt: new Date().toISOString(),
        }),
      })

      if (!response.ok) throw new Error('Form submission failed')

      setStatus('success')
      setDraft(emptyInquiryDraft)
    } catch {
      setStatus('error')
    }
  }

  const updateField = (field: keyof InquiryDraft, value: string) => {
    setDraft((current) => ({
      ...current,
      [field]: value,
    }))
    if (status !== 'idle') {
      setStatus('idle')
    }
  }

  return (
    <div className="contact-form-panel">
      <div className="section-header section-header-compact">
        <span className="eyebrow">{isZh ? '咨询摘要' : 'Inquiry Summary'}</span>
        <h2>{isZh ? '先整理项目要点，再通过主联系人或企业微信继续沟通' : 'Prepare the project brief, then continue with the lead contact or enterprise WeChat'}</h2>
        <p>
          {isZh
            ? '当前表单用于整理一份结构化咨询摘要。填写后可直接复制，并发送给主联系人或企业微信入口，方便更快进入正式沟通。'
            : 'This form prepares a structured inquiry summary for formal follow-up. Complete it, copy it, and send it to the lead contact or enterprise WeChat entry to speed up the next discussion.'}
        </p>
      </div>
      <form className="contact-form" onSubmit={submitInquiry}>
        <label>
          <span>{isZh ? '公司名称' : 'Company'}</span>
          <input
            type="text"
            required
            value={draft.company}
            onChange={(event) => updateField('company', event.target.value)}
            placeholder={isZh ? '例如：某某材料科技有限公司' : 'Example: Example Materials Co., Ltd.'}
          />
        </label>
        <label>
          <span>{isZh ? '联系人' : 'Contact Person'}</span>
          <input
            type="text"
            required
            value={draft.contactPerson}
            onChange={(event) => updateField('contactPerson', event.target.value)}
            placeholder={isZh ? '姓名 / 职位' : 'Name / role'}
          />
        </label>
        <label>
          <span>{isZh ? '联系电话' : 'Phone Number'}</span>
          <input
            type="tel"
            required
            value={draft.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            placeholder={isZh ? '便于回电或微信确认' : 'For call-back or WeChat follow-up'}
          />
        </label>
        <label>
          <span>{isZh ? '应用场景' : 'Application Scenario'}</span>
          <input
            type="text"
            required
            value={draft.application}
            onChange={(event) => updateField('application', event.target.value)}
            placeholder={isZh ? '如：涂布、标签、电池封装、复合加工' : 'Coating, labels, battery packaging, lamination, etc.'}
          />
        </label>
        <label className="contact-form-full">
          <span>{isZh ? '关注材料方向' : 'Material Focus'}</span>
          <input
            type="text"
            value={draft.material}
            onChange={(event) => updateField('material', event.target.value)}
            placeholder={
              isZh
                ? '可填写永久强粘 / 可移除 / 标签包装 / 功能特种或待建议'
                : 'Permanent bonding / removable / label and packaging / specialty functional, or open for advice'
            }
          />
        </label>
        <label className="contact-form-full">
          <span>{isZh ? '项目说明' : 'Project Notes'}</span>
          <textarea
            rows={6}
            required
            value={draft.message}
            onChange={(event) => updateField('message', event.target.value)}
            placeholder={
              isZh
                ? '建议说明基材、工艺方式、关键性能目标、当前问题和预计验证时间。'
                : 'Describe substrate, process, target properties, current issue and expected validation timing.'
            }
          />
        </label>
        <div className="form-actions">
          <button type="submit">
            {isZh ? '生成并复制咨询摘要' : 'Generate and Copy Summary'}
          </button>
          <a
            className="button-link button-link-secondary button-link-inline"
            href={buildPhoneHref(primaryPhone.number)}
          >
            {isZh ? '直接联系销售' : 'Call Sales'}
          </a>
          <p className="form-status" role="status" aria-live="polite">
            {status === 'success' &&
              (isZh
                ? '咨询摘要已复制，可直接粘贴发送给主联系人或企业微信。'
                : 'The inquiry summary has been copied and can now be sent to the lead contact or enterprise WeChat entry.')}
            {status === 'error' &&
              (isZh
                ? '当前浏览器未能完成复制，请直接通过电话或企业微信继续联系。'
                : 'Copying was not available in this browser, so please continue by phone or enterprise WeChat directly.')}
            {status === 'idle' &&
              (isZh
                ? '该按钮不会公开发送数据，只会整理并复制一份结构化咨询摘要。'
                : 'This button does not submit public data. It only prepares and copies a structured inquiry summary.')}
          </p>
        </div>
      </form>
    </div>
  )
}
