import type { MaterialCard, Locale } from '../../content/siteContent'

export function MaterialBand({
  material,
  locale,
  index,
}: {
  material: MaterialCard
  locale: Locale
  index: number
}) {
  const labels =
    locale === 'zh'
      ? {
          fit: '适用方向',
          features: '性能重点',
          custom: '可定制方向',
        }
      : {
          fit: 'Application Fit',
          features: 'Performance Focus',
          custom: 'Customization',
        }

  return (
    <article className={index % 2 === 1 ? 'material-band material-band-reverse' : 'material-band'}>
      <div className="material-band-heading">
        <span className="contact-channel-label">
          {locale === 'zh' ? `平台 0${index + 1}` : `Platform 0${index + 1}`}
        </span>
        <h3>{material.name}</h3>
      </div>
      <div className="material-band-body">
        <div className="material-band-block">
          <span>{labels.fit}</span>
          <p>{material.useFor}</p>
        </div>
        <div className="material-band-block">
          <span>{labels.features}</span>
          <div className="material-feature-list">
            {material.features.map((feature) => (
              <strong className="material-band-feature" key={feature}>
                {feature}
              </strong>
            ))}
          </div>
        </div>
        <div className="material-band-block">
          <span>{labels.custom}</span>
          <p>{material.customization}</p>
        </div>
      </div>
    </article>
  )
}
