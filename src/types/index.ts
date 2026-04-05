// Re-export types from content files
export type { PageKey, Locale } from '../content/siteContent'
export type { UtilityPageKey } from '../content/supportContent'

// Route types
export type RouteKey = import('../content/siteContent').PageKey | import('../content/supportContent').UtilityPageKey

// Re-export all content types from siteContent
export type {
  ActionLink,
  HeroContent,
  SectionHeaderContent,
  FeatureCard,
  MaterialCard,
  ProductShowcase,
  CaseStudy,
  PhotoCard,
  CredentialCard,
  PortalEntry,
  NewsStory,
  ContactOption,
  PageCtaItem,
  PageCtaContent,
  SiteConfig,
  LocaleContent,
} from '../content/siteContent'

// Form types
export type InquiryDraft = {
  company: string
  contactPerson: string
  phone: string
  application: string
  material: string
  message: string
}

export const emptyInquiryDraft: InquiryDraft = {
  company: '',
  contactPerson: '',
  phone: '',
  application: '',
  material: '',
  message: '',
}
