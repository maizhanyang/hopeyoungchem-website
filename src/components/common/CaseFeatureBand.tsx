import type { CaseStudy, Locale } from '../../content/siteContent'
import LazyImage from './LazyImage'

export function CaseFeatureBand({
  caseStudy,
  locale,
  image,
  reverse,
  index,
}: {
  caseStudy: CaseStudy
  locale: Locale
  image: string
  reverse: boolean
  index: number
}) {
  const labels =
    locale === 'zh'
      ? {
          challenge: '客户痛点',
          solution: '方案思路',
          material: '材料方向',
          outcome: '交付结果',
        }
      : {
          challenge: 'Challenge',
          solution: 'Approach',
          material: 'Material Direction',
          outcome: 'Outcome',
        }

  return (
    <article className={reverse ? 'case-feature-band case-feature-band-reverse' : 'case-feature-band'}>
      <div className="case-feature-media">
        <LazyImage src={image} alt={caseStudy.title} />
      </div>
      <div className="case-feature-copy">
        <span className="eyebrow">
          {locale === 'zh' ? `案例 0${index + 1}` : `Case 0${index + 1}`}
        </span>
        <h2>{caseStudy.title}</h2>
        <div className="case-feature-rows">
          <div className="case-row">
            <span>{labels.challenge}</span>
            <p>{caseStudy.challenge}</p>
          </div>
          <div className="case-row">
            <span>{labels.solution}</span>
            <p>{caseStudy.solution}</p>
          </div>
          <div className="case-row">
            <span>{labels.material}</span>
            <p>{caseStudy.material}</p>
          </div>
          <div className="case-row">
            <span>{labels.outcome}</span>
            <p>{caseStudy.outcome}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
