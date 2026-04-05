import { siteContent, type Locale, type PageKey } from '../content/siteContent'
import { supportContent, type UtilityPageKey } from '../content/supportContent'
import { pageSlugs } from '../content/siteContent'
import { utilityPageSlugs } from '../content/supportContent'

export type RouteKey = PageKey | UtilityPageKey

export function isUtilityPageKey(page: RouteKey): page is UtilityPageKey {
  return Object.prototype.hasOwnProperty.call(utilityPageSlugs, page)
}

export function buildPath(locale: Locale, page: RouteKey): string {
  const slug = isUtilityPageKey(page) ? utilityPageSlugs[page] : pageSlugs[page]

  if (locale === 'zh') {
    return slug ? `/${slug}` : '/'
  }

  return slug ? `/en/${slug}` : '/en'
}

export function getPageTitle(locale: Locale, page: RouteKey): string {
  const content = siteContent[locale]

  if (isUtilityPageKey(page)) {
    return `${supportContent[locale][page].hero.title} | ${content.meta.siteTitle}`
  }

  if (page === 'home') {
    return content.meta.siteTitle
  }

  return `${content.nav[page]} | ${content.meta.siteTitle}`
}
