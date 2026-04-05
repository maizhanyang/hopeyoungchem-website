import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { siteConfig, siteContent, type Locale } from '../content/siteContent'
import { ensureHeadTag, removeHeadTag, buildPath, type RouteKey } from '../utils'

function getOpenGraphLocale(locale: Locale): string {
  return locale === 'zh' ? 'zh_CN' : 'en_US'
}

function getOpenGraphLocale(locale: Locale): string {
  return locale === 'zh' ? 'zh_CN' : 'en_US'
}

export function usePageMetadata({
  locale,
  page,
  title,
  description,
}: {
  locale: Locale
  page: RouteKey
  title: string
  description: string
}) {
  const content = siteContent[locale]
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.title = title
    document.documentElement.lang = content.meta.localeCode

    const descriptionTag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    descriptionTag?.setAttribute('content', description)

    ensureHeadTag('meta', 'meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })
    ensureHeadTag('meta', 'meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: content.brand.fullName,
    })
    ensureHeadTag('meta', 'meta[property="og:title"]', {
      property: 'og:title',
      content: title,
    })
    ensureHeadTag('meta', 'meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    ensureHeadTag('meta', 'meta[property="og:locale"]', {
      property: 'og:locale',
      content: getOpenGraphLocale(locale),
    })
    ensureHeadTag('meta', 'meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary',
    })
    ensureHeadTag('meta', 'meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title,
    })
    ensureHeadTag('meta', 'meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })
    ensureHeadTag('meta', 'meta[name="apple-mobile-web-app-title"]', {
      name: 'apple-mobile-web-app-title',
      content: content.brand.shortName,
    })

    const websiteUrl = siteConfig.legal.websiteUrl

    if (websiteUrl) {
      const pageUrl = new URL(buildPath(locale, page), websiteUrl).toString()
      ensureHeadTag('link', 'link[rel="canonical"]', {
        rel: 'canonical',
        href: pageUrl,
      })
      ensureHeadTag('meta', 'meta[property="og:url"]', {
        property: 'og:url',
        content: pageUrl,
      })
    } else {
      removeHeadTag('link[rel="canonical"]')
      removeHeadTag('meta[property="og:url"]')
    }
  }, [
    content.brand.fullName,
    content.brand.shortName,
    content.meta.localeCode,
    description,
    locale,
    location.pathname,
    page,
    title,
  ])
}
