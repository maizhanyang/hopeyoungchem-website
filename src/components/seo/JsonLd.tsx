import { useEffect } from 'react'

type PostalAddress = {
  streetAddress?: string
  addressLocality?: string
  addressRegion?: string
  postalCode?: string
  addressCountry?: string
}

type ContactPoint = {
  telephone?: string
  contactType?: string
  email?: string
  areaServed?: string | string[]
  availableLanguage?: string | string[]
}

type OrganizationJsonLdProps = {
  name: string
  description: string
  url: string
  logo: string
  address?: PostalAddress
  contactPoint?: ContactPoint | ContactPoint[]
  sameAs?: string[]
}

const SCRIPT_ID = 'organization-json-ld'

export function OrganizationJsonLd({
  name,
  description,
  url,
  logo,
  address,
  contactPoint,
  sameAs,
}: OrganizationJsonLdProps) {
  useEffect(() => {
    const points = contactPoint
      ? (Array.isArray(contactPoint) ? contactPoint : [contactPoint]).map((item) => ({
          '@type': 'ContactPoint' as const,
          ...item,
        }))
      : undefined

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name,
      description,
      url,
      logo,
      address: address ? { '@type': 'PostalAddress', ...address } : undefined,
      contactPoint: points,
      sameAs,
    }

    let script = document.head.querySelector<HTMLScriptElement>(`#${SCRIPT_ID}`)

    if (!script) {
      script = document.createElement('script')
      script.id = SCRIPT_ID
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }

    script.textContent = JSON.stringify(schema)

    return () => {
      script?.remove()
    }
  }, [address, contactPoint, description, logo, name, sameAs, url])

  return null
}
