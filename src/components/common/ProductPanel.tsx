import type { ProductShowcase, Locale } from '../../content/siteContent'

export function ProductPanel({
  locale,
  sample,
}: {
  locale: Locale
  sample: ProductShowcase
}) {
  const labels =
    locale === 'zh'
      ? {
          application: '适用方向',
          highlights: '特点摘要',
          specs: '公开参数',
        }
      : {
          application: 'Application Fit',
          highlights: 'Highlights',
          specs: 'Public Specs',
        }

  return (
    <article className="product-panel">
      <div className="product-panel-header">
        <h3>{sample.name}</h3>
        <p>{sample.summary}</p>
      </div>
      <div className="product-copy-block">
        <span>{labels.application}</span>
        <p>{sample.application}</p>
      </div>
      <div className="product-copy-block">
        <span>{labels.highlights}</span>
        <div className="material-feature-list">
          {sample.highlights.map((item) => (
            <span className="material-chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="product-copy-block">
        <span>{labels.specs}</span>
        <div className="product-spec-grid">
          {sample.specs.map((item) => (
            <div className="product-spec" key={`${sample.name}-${item.label}`}>
              <strong>{item.label}</strong>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="product-note">{sample.note}</p>
    </article>
  )
}
