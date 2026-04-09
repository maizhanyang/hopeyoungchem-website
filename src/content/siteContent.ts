import headerMark from '../assets/media/header-mark.png'
import logo from '../assets/media/provided/logo-transparent.png'
import wechatQr from '../assets/media/wechat-qr.png'
import companyBrandWall1 from '../assets/media/provided/company-brand-wall-1.jpg'
import officeEntryReal from '../assets/media/provided/office-entry-real.jpg'
import researchScene2 from '../assets/media/provided/research-scene-2.jpg'
import labBench from '../assets/media/provided/lab-bench.jpg'
import labHood from '../assets/media/provided/lab-hood.jpg'
import labPerson1 from '../assets/media/provided/lab-person-1.jpg'
import meetingRoomReal from '../assets/media/provided/meeting-room-real.jpg'
import officePerson1 from '../assets/media/provided/office-person-1.jpg'
import officeWorkspace from '../assets/media/provided/office-workspace.jpg'
import patentStorageDevice from '../assets/media/provided/patent-storage-device.jpg'
import researchScene1 from '../assets/media/provided/research-scene-1.jpg'
import businessLicense from '../assets/media/provided/business-license.jpg'
import factoryWorkshopDetail from '../assets/media/provided/factory-workshop-detail.jpg'
import factoryWorkshopWide from '../assets/media/provided/factory-workshop-wide.jpg'
import highTechCertificate from '../assets/media/provided/high-tech-certificate.jpg'
import validationScene7068 from '../assets/media/provided/validation-scene-7068.png'
import validationScene7088 from '../assets/media/provided/validation-scene-7088.png'
import validationScene7098 from '../assets/media/provided/validation-scene-7098.png'
import validationScene9 from '../assets/media/provided/validation-scene-9.png'

export type Locale = 'zh' | 'en'
export type PageKey =
  | 'home'
  | 'solutions'
  | 'applications'
  | 'technology'
  | 'about'
  | 'news'
  | 'contact'

export type ActionLink = {
  label: string
  page: PageKey
}

export type HeroContent = {
  eyebrow: string
  title: string
  lead: string
  supporting: string
  primary: ActionLink
  secondary: ActionLink
  note: string
}

export type SectionHeaderContent = {
  eyebrow: string
  title: string
  description: string
}

export type FeatureCard = {
  title: string
  description: string
  detail: string
}

export type MaterialCard = {
  name: string
  useFor: string
  features: string[]
  representativeGrades?: string[]
  customization: string
}

export type ProductShowcase = {
  name: string
  summary: string
  application: string
  highlights: string[]
  specs: Array<{
    label: string
    value: string
  }>
  note: string
}

export type CaseStudy = {
  title: string
  challenge: string
  solution: string
  material: string
  outcome: string
  fitSignal?: string
}

export type PhotoCard = {
  src: string
  alt: string
  title: string
  description: string
}

export type CredentialCard = {
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
  imageCaption?: string
}

export type PortalEntry = {
  eyebrow: string
  title: string
  description: string
  page: PageKey
  image: string
  alt: string
}

export type CapabilitySpotlight = {
  eyebrow: string
  title: string
  description: string
  supporting: string
  page: PageKey
}

export type NewsStory = {
  category: string
  date: string
  title: string
  summary: string
  detail: string
}

export type ContactOption = {
  title: string
  emphasis: string
  body: string
  note: string
}

export type ContactPhone = {
  name: string
  number: string
}

export type PageCtaItem = {
  eyebrow?: string
  title: string
  description: string
  action?: ActionLink
}

export type PageCtaContent = {
  eyebrow: string
  title: string
  description: string
  items: PageCtaItem[]
  primary: ActionLink
  secondary?: ActionLink
}

export type HomeStatementContent = {
  eyebrow: string
  title: string
  lead: string
  supporting: string
  note: string
  tags: string[]
  proofItems: Array<{
    value: string
    label: string
  }>
  primary: ActionLink
  secondary: ActionLink
  visual: {
    primaryFrames: Array<{
      label: string
      image: string
      alt: string
    }>
    secondaryFrames: Array<{
      label: string
      image: string
      alt: string
    }>
    captionEyebrow: string
    captionTitle: string
    captionDescription: string
  }
}

export type HomeResultItem = {
  value: string
  label: string
  detail: string
}

export type HomeResultStripContent = {
  eyebrow: string
  title: string
  description: string
  items: HomeResultItem[]
}

export type HomeProblemRoute = {
  eyebrow: string
  title: string
  description: string
  outcome: string
  page: PageKey
}

export type HomeProblemRoutesContent = {
  eyebrow: string
  title: string
  description: string
  items: HomeProblemRoute[]
}

export type HomeTrustPanel = {
  eyebrow: string
  title: string
  description: string
  image: string
  alt: string
}

export type HomeTrustShowcaseContent = {
  eyebrow: string
  title: string
  description: string
  quote: string
  panels: HomeTrustPanel[]
}

export type HomeConversionContent = {
  eyebrow: string
  title: string
  description: string
  quickPoints: string[]
  primary: ActionLink
  secondary: ActionLink
}

type LocalizedValue = Record<Locale, string>

type BrandCopy = {
  shortName: string
  fullName: string
  englishName: string
  tagline: string
  city: string
  headerPrimaryLatin: string
  headerSecondaryLatin: string
  logoAlt: string
}

type FooterNavItem = {
  label: string
  page: PageKey
}

type FooterLegalItem = {
  label: string
  href?: string
}

type MetaContent = {
  siteTitle: string
  defaultDescription: string
  pageDescriptions: Record<PageKey, string>
  languageSwitch: string
  languageSwitchShort: string
  localeCode: string
}

type MetricCard = {
  value: string
  label: string
  detail: string
}

type InquiryAction = {
  title: string
  description: string
}

type ContactLabels = {
  phones: string
  wechat: string
  address: string
}

type ContactPageContent = {
  hero: HeroContent
  note: string
  options: ContactOption[]
  summaryTitle: string
  summaryDescription: string
  detailTitle: string
  detailDescription: string
  hubTitle: string
  hubDescription: string
  channelLabels: ContactLabels
  qrcodeCaption: string
  guideTitle: string
  guideDescription: string
  guideItems: string[]
  guideNote: string
}

type AboutCollaborationContent = {
  header: SectionHeaderContent
  narrative: string
  valueCards: FeatureCard[]
}

type TechnologyValidationContent = {
  header: SectionHeaderContent
  photos: PhotoCard[]
}

export type LocaleContent = {
  meta: MetaContent
  brand: BrandCopy
  nav: Record<PageKey, string>
  footer: {
    statement: string
    note: string
    topUtilityLabel: string
    companyTitle: string
    businessTitle: string
    quickTitle: string
    contactTitle: string
    companyLinks: FooterNavItem[]
    businessLinks: FooterNavItem[]
    quickLinks: FooterNavItem[]
    contactCtaLabel: string
    contactChannelLabels: {
      phone: string
      wechat: string
      address: string
    }
    legalLinks: FooterLegalItem[]
  }
  common: {
    metrics: MetricCard[]
    inquiryBand: {
      title: string
      description: string
      actions: InquiryAction[]
      primary: ActionLink
      secondary: ActionLink
    }
  }
  home: {
    statement: HomeStatementContent
    resultStrip: HomeResultStripContent
    problemRoutes: HomeProblemRoutesContent
    trustShowcase: HomeTrustShowcaseContent
    conversionCta: HomeConversionContent
    hero: HeroContent
    brandIntro: SectionHeaderContent
    portalHeader: SectionHeaderContent
    portalEntries: PortalEntry[]
    featuredHeader: SectionHeaderContent
    featuredCapabilities: CapabilitySpotlight[]
    coCreationHeader: SectionHeaderContent
    coCreationLead: string
    coCreationPoints: string[]
    coCreationGallery: PhotoCard[]
    newsHeader: SectionHeaderContent
    newsTeasers: NewsStory[]
    capabilityHeader: SectionHeaderContent
    capabilities: FeatureCard[]
    materialHeader: SectionHeaderContent
    materials: MaterialCard[]
    applicationHeader: SectionHeaderContent
    applicationCards: FeatureCard[]
    proofHeader: SectionHeaderContent
    credentials: CredentialCard[]
  }
  solutions: {
    hero: HeroContent
    intro: string
    guideHeader: SectionHeaderContent
    guideCards: FeatureCard[]
    platformHeader: SectionHeaderContent
    materials: MaterialCard[]
    sampleHeader: SectionHeaderContent
    samples: ProductShowcase[]
    processHeader: SectionHeaderContent
    process: FeatureCard[]
    dataRequest: {
      title: string
      description: string
      items: string[]
    }
    pageCta: PageCtaContent
  }
  applications: {
    hero: HeroContent
    overview: string
    proofHeader: SectionHeaderContent
    proofPoints: FeatureCard[]
    cases: CaseStudy[]
    focusHeader: SectionHeaderContent
    focusAreas: FeatureCard[]
    pageCta: PageCtaContent
  }
  technology: {
    hero: HeroContent
    overview: string
    pillars: FeatureCard[]
    galleryHeader: SectionHeaderContent
    gallery: PhotoCard[]
    validationSection: TechnologyValidationContent
    labHeader: SectionHeaderContent
    labCards: CredentialCard[]
    pageCta: PageCtaContent
  }
  about: {
    hero: HeroContent
    story: string
    collaborationSection: AboutCollaborationContent
    values: FeatureCard[]
    timeline: Array<{
      year: string
      title: string
      description: string
    }>
    pageCta: PageCtaContent
  }
  news: {
    hero: HeroContent
    intro: string
    featured: NewsStory
    latestHeader: SectionHeaderContent
    items: NewsStory[]
    archiveNote: string
    pageCta: PageCtaContent
  }
  contact: ContactPageContent
}

export type SiteConfig = {
  brand: {
    shortName: LocalizedValue
    fullName: LocalizedValue
    city: LocalizedValue
    tagline: string
    englishName: string
    headerPrimaryLatin: string
    headerSecondaryLatin: string
  }
  siteMeta: {
    defaultDescription: LocalizedValue
    pageDescriptions: Record<PageKey, LocalizedValue>
  }
  contacts: {
    primaryPhone: ContactPhone
    featuredPhones: ContactPhone[]
    phones: ContactPhone[]
    address: string
    officeAddress: string
    labAddress: string
    email: string
  }
  assets: {
    logo: {
      src: string
      alt: LocalizedValue
    }
    headerMark: {
      src: string
      alt: LocalizedValue
    }
    wechatQr: {
      src: string
      alt: LocalizedValue
    }
  }
  legal: {
    websiteUrl?: string
    icpNumber?: string
    publicSecurityNumber?: string
    publicSecurityUrl?: string
  }
}

export const pageOrder: PageKey[] = [
  'home',
  'solutions',
  'applications',
  'technology',
  'about',
  'news',
  'contact',
]

export const navOrder: PageKey[] = ['home', 'solutions', 'applications', 'technology', 'contact']

export const pageSlugs: Record<PageKey, string> = {
  home: '',
  solutions: 'solutions',
  applications: 'applications',
  technology: 'technology',
  about: 'about',
  news: 'news',
  contact: 'contact',
}

const pageDescriptions: Record<PageKey, LocalizedValue> = {
  home: {
    zh: '广州虹扬化工科技有限公司官网,聚焦高端材料粘接方案、项目协同开发与制造场景应用,服务电子、高端制造与新能源客户。',
    en: 'Official website of Guangzhou Hope Young Chemical Technology Co., Ltd., focused on advanced material bonding solutions, collaborative project development and industrial applications.',
  },
  solutions: {
    zh: '围绕永久强粘、可移除、标签包装与功能特种四大体系,展示虹扬的解决方案与代表产品。',
    en: 'Explore Hope Young solution systems across permanent bonding, removable bonding, label and packaging, and specialty functional adhesive routes.',
  },
  applications: {
    zh: '通过电子、高端制造与新能源等场景案例,展示虹扬对真实工况、材料路径与交付结果的理解。',
    en: 'See how Hope Young frames electronics, advanced manufacturing and new-energy scenarios through case-led application storytelling.',
  },
  technology: {
    zh: '了解虹扬的硕博团队、华工合作背景、自主知识产权体系以及实验到客户的双重验证逻辑。',
    en: 'Review Hope Young team depth, SCUT collaboration background, proprietary IP base and the validation logic that connects lab work to customer projects.',
  },
  about: {
    zh: '了解虹扬研发销售与置盈生产仓储协同运作的企业架构,以及面向工业客户的长期合作方式。',
    en: 'Learn how Hope Young combines front-end R&D and sales with Zhongshan Zhiying manufacturing and warehousing to support industrial customers.',
  },
  news: {
    zh: '查看虹扬官网公开的公司动态、资料更新和研发协同进展。',
    en: 'See public website updates, company notes and collaboration-related news from Hope Young.',
  },
  contact: {
    zh: '查看虹扬官网公开的业务电话、业务微信二维码和公司地址,快速建立项目联系。',
    en: 'Get the official business phones, WeChat QR code and address for launching a direct discussion with Hope Young.',
  },
}

export const siteConfig: SiteConfig = {
  brand: {
    shortName: {
      zh: '虹扬化工',
      en: 'Hope Young',
    },
    fullName: {
      zh: '广州虹扬化工科技有限公司',
      en: 'Guangzhou Hope Young Chemical Technology Co., Ltd.',
    },
    city: {
      zh: '广州',
      en: 'Guangzhou',
    },
    tagline: 'Advanced Material Bonding Solutions',
    englishName: 'Guangzhou Hope Young Chemical Technology Co., Ltd.',
    headerPrimaryLatin: 'HOPE YOUNG',
    headerSecondaryLatin: 'Advanced Material Bonding Solutions',
  },
  siteMeta: {
    defaultDescription: {
      zh: '广州虹扬化工科技有限公司官方网站,聚焦高端材料粘接方案、项目协同开发与工业场景应用。',
      en: 'Official website of Guangzhou Hope Young Chemical Technology Co., Ltd., focused on advanced material bonding solutions, collaborative development and industrial applications.',
    },
    pageDescriptions,
  },
  contacts: {
    primaryPhone: { name: '张俊(线下销售)', number: '13922297800' },
    featuredPhones: [
      { name: '张俊(线下销售)', number: '13922297800' },
      { name: '何永华(线下销售)', number: '18620031360' },
    ],
    phones: [
      { name: '吴润东(线上销售)', number: '18148928019' },
      { name: '张俊(线下销售)', number: '13922297800' },
      { name: '何永华(线下销售)', number: '18620031360' },
      { name: '麦展扬(项目统筹)', number: '15507697210' },
      { name: '袁锐(来访协调)', number: '18142899637' },
    ],
    address: '广州市天河区东莞庄路110号E栋308-2',
    officeAddress: '广州市天河区东莞庄路110号E栋308-2',
    labAddress: '广州市天河区东莞庄路110号E栋302',
    email: 'hopeyoung@hopeyoungchem.cn',
  },
  assets: {
    logo: {
      src: logo,
      alt: {
        zh: '虹扬化工品牌标识',
        en: 'Hope Young brand mark',
      },
    },
    headerMark: {
      src: headerMark,
      alt: {
        zh: '虹扬化工图标标识',
        en: 'Hope Young symbol mark',
      },
    },
    wechatQr: {
      src: wechatQr,
      alt: {
        zh: '虹扬化工业务微信二维码',
        en: 'Hope Young business WeChat QR code',
      },
    },
  },
  legal: {},
}

function localizeValue(source: LocalizedValue, locale: Locale): string {
  return source[locale]
}

function buildBrand(locale: Locale): BrandCopy {
  return {
    shortName: localizeValue(siteConfig.brand.shortName, locale),
    fullName: localizeValue(siteConfig.brand.fullName, locale),
    englishName: siteConfig.brand.englishName,
    tagline: siteConfig.brand.tagline,
    city: localizeValue(siteConfig.brand.city, locale),
    headerPrimaryLatin: siteConfig.brand.headerPrimaryLatin,
    headerSecondaryLatin: siteConfig.brand.headerSecondaryLatin,
    logoAlt: localizeValue(siteConfig.assets.logo.alt, locale),
  }
}

function buildMeta(locale: Locale): MetaContent {
  return {
    siteTitle: localizeValue(siteConfig.brand.fullName, locale),
    defaultDescription: localizeValue(siteConfig.siteMeta.defaultDescription, locale),
    pageDescriptions: Object.fromEntries(
      Object.entries(siteConfig.siteMeta.pageDescriptions).map(([page, description]) => [
        page,
        localizeValue(description, locale),
      ]),
    ) as Record<PageKey, string>,
    languageSwitch: locale === 'zh' ? 'English' : '中文',
    languageSwitchShort: locale === 'zh' ? 'EN' : '中',
    localeCode: locale === 'zh' ? 'zh-CN' : 'en',
  }
}

export const siteContent: Record<Locale, LocaleContent> = {
  zh: {
    meta: buildMeta('zh'),
    brand: buildBrand('zh'),
    nav: {
      home: '首页',
      solutions: '解决方案',
      applications: '行业应用',
      technology: '研发协同',
      about: '关于虹扬',
      news: '新闻动态',
      contact: '联系我们',
    },
    footer: {
      statement:
        '虹扬负责研发与销售,置盈负责生产与仓储,共同服务工业客户的高端材料粘接方案与项目协同开发需求',
      note:
        '服务电子、高端制造与新能源客户，提供高端材料粘接方案与项目协同开发',
      topUtilityLabel: '网站切换',
      companyTitle: '公司',
      businessTitle: '品牌及业务',
      quickTitle: '快速链接',
      contactTitle: '联系',
      companyLinks: [
        { label: '关于虹扬', page: 'about' },
        { label: '新闻动态', page: 'news' },
      ],
      businessLinks: [
        { label: '解决方案', page: 'solutions' },
        { label: '行业应用', page: 'applications' },
        { label: '研发协同', page: 'technology' },
      ],
      quickLinks: [
        { label: '首页', page: 'home' },
        { label: '联系我们', page: 'contact' },
        { label: '新闻动态', page: 'news' },
      ],
      contactCtaLabel: '联系',
      contactChannelLabels: {
        phone: '销售热线',
        wechat: '业务微信',
        address: '公司地址',
      },
      legalLinks: [
        { label: '网站地图', href: '/sitemap' },
        { label: '版权声明', href: '/copyright' },
        { label: '使用条款', href: '/terms' },
        { label: '隐私声明', href: '/privacy' },
      ],
    },
    common: {
      metrics: [
        {
          value: '4硕2博',
          label: '研发团队',
          detail: '覆盖化工新材料、材料科学、物理学与应用开发方向。',
        },
        {
          value: '4大',
          label: '材料平台',
          detail: '覆盖永久强粘、可移除、标签包装与功能特种四类公开路线。',
        },
        {
          value: '17项',
          label: '公开专利条目',
          detail: '已确认可公开的专利总表,覆盖生产、存储、上料、喷涂、温控与提纯等环节。',
        },
      ],
      inquiryBand: {
        title: '把项目背景说清楚,材料沟通才能更快进入有效区间。',
        description:
          '虹扬官网优先解决"理解场景、建立信任、快速联系"三件事。涉及资料申请、样品沟通和进一步验证时,可继续通过公开业务电话、商务邮箱与业务微信推进。',
        actions: [
          {
            title: '项目初询',
            description: '适合正在评估材料方向、工艺约束或方案可行性的客户。',
          },
          {
            title: '资料申请',
            description: '适合希望获取 TDS / SDS 或进一步技术说明的客户。',
          },
          {
            title: '样品沟通',
            description: '适合已经进入打样、验证或联合开发阶段的项目团队。',
          },
        ],
        primary: {
          label: '联系销售',
          page: 'contact',
        },
        secondary: {
          label: '查看解决方案',
          page: 'solutions',
        },
      },
    },
    home: {
      statement: {
        eyebrow: '关键技术伙伴',
        title: '粘接未来，赋能智造',
        lead:
          '以自主核心技术，为高端制造提供关键粘接解决方案',
        supporting:
          '虹扬围绕电子、高端制造与新能源项目，把材料判断、验证节奏、协同制造与正式交付放进同一条项目主线，让首次接触就更接近真实项目启动。',
        note: '先把协同能力说明白，再进入样品、资料与量产节奏沟通。',
        tags: ['电子装配', '标签与包装', '新能源功能层', '联合验证'],
        proofItems: [
          { value: '4 硕 + 2 博', label: '研发团队' },
          { value: '17 项', label: '公开专利条目' },
          { value: '双主体', label: '协同制造与交付' },
          { value: '4 组', label: '验证现场记录' },
        ],
        primary: {
          label: '发起项目沟通',
          page: 'contact',
        },
        secondary: {
          label: '先看材料体系',
          page: 'solutions',
        },
        visual: {
          primaryFrames: [
            {
              label: '研发现场',
              image: researchScene2,
              alt: '虹扬实验场景主视觉',
            },
            {
              label: '实验验证',
              image: researchScene1,
              alt: '研发实验操作与验证场景',
            },
            {
              label: '制造支撑',
              image: factoryWorkshopWide,
              alt: '车间全景与生产支撑环境',
            },
          ],
          secondaryFrames: [
            {
              label: '项目讨论',
              image: meetingRoomReal,
              alt: '会议室中的项目路线讨论场景',
            },
            {
              label: '日常协同',
              image: officeWorkspace,
              alt: '办公室中的项目协同与工作环境',
            },
            {
              label: '沟通界面',
              image: officePerson1,
              alt: '办公室中的客户沟通与业务协同场景',
            },
          ],
          captionEyebrow: 'Project Rhythm',
          captionTitle: '从需求判断到验证导入，先建立一条更顺的工业协同路线。',
          captionDescription: '同一支团队对齐应用场景、实验验证、资料沟通与量产节奏。',
        },
      },
      resultStrip: {
        eyebrow: '结果证据',
        title: '首页先把值得继续沟通的四层判断讲清楚。',
        description:
          '先建立方向判断、公开证明、协同关系与正式联系入口，再进入更深一层的技术资料沟通。',
        items: [
          {
            value: '4 大体系',
            label: '材料路线',
            detail: '永久强粘、可移除、标签包装与功能特种四条公开主线。',
          },
          {
            value: '9 个摘要',
            label: '公开型号',
            detail: '先判断代表产品方向，再进入更深层资料沟通。',
          },
          {
            value: '17 项专利',
            label: '公开技术基础',
            detail: '让研发与制造能力在进入联系前就有明确背书。',
          },
          {
            value: '5 条热线',
            label: '正式联系入口',
            detail: '业务电话、邮箱、微信与双地址都已经进入公开链路。',
          },
        ],
      },
      problemRoutes: {
        eyebrow: '典型需求入口',
        title: '先按问题进入，再决定从哪里往下看。',
        description:
          '把首页做成项目判断入口，而不是资料目录，让客户更快确认你们是否懂自己的场景。',
        items: [
          {
            eyebrow: 'Route 01',
            title: '先判断材料方向',
            description: '适合已经带着基材、性能目标或型号比较需求进站的团队。',
            outcome: '先缩小到正确的材料平台。',
            page: 'solutions',
          },
          {
            eyebrow: 'Route 02',
            title: '先了解主体与协同关系',
            description: '适合第一问题是“广州虹扬和中山置盈是什么关系、是否值得正式沟通”的访客。',
            outcome: '先看主体边界、协同逻辑和长期配合方式。',
            page: 'about',
          },
          {
            eyebrow: 'Route 03',
            title: '先对齐验证与交付节奏',
            description: '适合正在打样、联合开发或需要更快推进技术沟通的工业客户。',
            outcome: '看研发协同、实验方法与交付支撑。',
            page: 'technology',
          },
        ],
      },
      trustShowcase: {
        eyebrow: '能力证明',
        title: '先把四个最关键的信任点讲透，再决定要不要继续往下谈。',
        description:
          '首页承担的不是资料堆砌，而是让客户快速判断这家公司是否具备长期配合价值。',
        quote:
          '对工业客户来说，真正重要的不是一句“我们很专业”，而是能否看出这家公司具备稳定供应、技术协同、长期规划与制造支撑。',
        panels: [
          {
            eyebrow: 'Supply Chain',
            title: '供应链稳定保障',
            description: '通过产能协调与供应链联动，关键原料和交付节奏更稳定，也让订单承接能力更具抗风险韧性。',
            image: factoryWorkshopWide,
            alt: '协同制造车间与供应链支撑环境',
          },
          {
            eyebrow: 'Technical Linkage',
            title: '技术与研发联动',
            description: '共享行业洞察与研发资源，让技术判断、工艺优化和客户验证形成更有效的联动关系。',
            image: researchScene1,
            alt: '实验室中的研发验证与技术联动场景',
          },
          {
            eyebrow: 'Strategic Coordination',
            title: '战略发展协同',
            description: '广州虹扬与中山置盈保持独立法人、长期互信和协同规划，让前端市场判断与后端交付能力形成资源合力。',
            image: meetingRoomReal,
            alt: '项目讨论与战略协同沟通场景',
          },
          {
            eyebrow: 'Manufacturing Proof',
            title: '协同制造证明',
            description: '真实车间设备和制造现场进入首页信任层，让协同制造能力不只是文字说明，而是可被直接感知的支撑条件。',
            image: factoryWorkshopDetail,
            alt: '工厂设备层与制造现场',
          },
        ],
      },
      conversionCta: {
        eyebrow: '下一步',
        title: '给我们一个应用场景，我们先帮你判断材料方向。',
        description:
          '当首页已经让客户确认“你们懂我的问题”，最后一步就该是更轻的项目发起动作。',
        quickPoints: [
          '适合正在做样品评估、资料申请或验证计划的团队',
          '适合希望先判断路线，再决定是否深入拿 TDS / SDS 的客户',
          '适合需要提前对齐技术沟通与交付节奏的人',
        ],
        primary: {
          label: '进入联系页',
          page: 'contact',
        },
        secondary: {
          label: '查看解决方案',
          page: 'solutions',
        },
      },
      hero: {
        eyebrow: '关键技术伙伴',
        title: '粘接未来，赋能智造',
        lead:
          '以自主核心技术，为高端制造提供关键粘接解决方案',
        supporting:
          '虹扬围绕电子、高端制造与新能源项目，把材料判断、验证节奏、协同制造与正式交付放进同一条项目主线，让首次接触就更接近真实项目启动。',
        primary: {
          label: '发起项目沟通',
          page: 'contact',
        },
        secondary: {
          label: '先看材料体系',
          page: 'solutions',
        },
        note: '先把协同能力说明白，再进入样品、资料与量产节奏沟通。',
      },
      brandIntro: {
        eyebrow: '公司简介',
        title: '做方案导入,不只做单一材料供应',
        description:
          '聚焦高端材料粘接方案与项目协同开发,以自主研发、协同制造与项目化服务支撑工业客户导入与量产',
      },
      portalHeader: {
        eyebrow: '核心入口',
        title: '三个入口,先判断虹扬是否适合你的项目',
        description:
          '先看材料路线,再看行业理解与研发协同',
      },
      portalEntries: [
        {
          eyebrow: 'Solutions',
          title: '解决方案',
          description: '从四大体系和示例产品先判断路线',
          page: 'solutions',
          image: companyBrandWall1,
          alt: '虹扬化工前台品牌墙,展现企业形象',
        },
        {
          eyebrow: 'Applications',
          title: '行业应用',
          description: '看电子 高端制造与新能源中的项目逻辑',
          page: 'applications',
          image: officeEntryReal,
          alt: '虹扬化工公司入口标牌',
        },
        {
          eyebrow: 'R&D Collaboration',
          title: '研发协同',
          description: '看硕博团队 华工合作与验证方法',
          page: 'technology',
          image: researchScene2,
          alt: '实验室研发操作场景',
        },
      ],
      featuredHeader: {
        eyebrow: '核心能力',
        title: '把研发 销售与制造放进同一条项目链路',
        description:
          '从项目问题、材料平台与制造协同三方面建立更完整的首轮判断',
      },
      featuredCapabilities: [
        {
          eyebrow: 'Front-end Collaboration',
          title: '前端方案协同',
          description: '围绕基材、工艺、目标性能与导入节奏组织首轮沟通',
          supporting: '更适合处在方案评估、资料申请、打样或联合验证阶段的工业客户。',
          page: 'solutions',
        },
        {
          eyebrow: 'Manufacturing Support',
          title: '后端稳定交付',
          description: '以置盈的生产仓储能力承接批量验证、稳定供应与制造协同',
          supporting: '让前端技术判断和后端交付能力处在同一套对外表达中。',
          page: 'applications',
        },
      ],
      coCreationHeader: {
        eyebrow: '客户共创',
        title: '更有效的技术合作,来自一起判断 一起验证',
        description:
          '虹扬希望呈现的不只是技术实力,也是一种更适合工业项目长期配合的协同方式。',
      },
      coCreationLead:
        '虹扬把客户真实工况带进技术判断,让销售、研发、制造与项目团队围绕同一问题协同',
      coCreationPoints: [
        '把场景、工艺限制和验证节奏放进同一套沟通框架',
        '让一次资料咨询更快走向样品、验证与长期合作',
        '把销售表达、技术判断和制造配合放在同一条项目链路上',
      ],
      coCreationGallery: [
        {
          src: meetingRoomReal,
          alt: '会议室中的项目讨论与方案沟通场景',
          title: '方案讨论',
          description: '通过会议、资料对接与路线判断,把问题讲明白再进入验证。',
        },
        {
          src: officeWorkspace,
          alt: '真实办公空间与日常协同环境',
          title: '日常协同',
          description: '把销售、研发与客户沟通放进更顺畅的项目推进节奏里。',
        },
      ],
      newsHeader: {
        eyebrow: '新闻动态',
        title: '公司动态与资料更新',
        description:
          '首页先展示已经确认可公开的内容推进,包括产品摘要、匿名案例、资质证明、真实场景图片与正式联系入口。',
      },
      newsTeasers: [
        {
          category: '官网更新',
          date: '2026年4月',
          title: '官网内容持续更新',
          summary: '官网展示虹扬的材料平台、行业应用、技术实力与联系方式。',
          detail: '展示公司材料体系、行业应用与核心资质,详细技术资料请直接联系我们获取。',
        },
        {
          category: '案例表达',
          date: '2026年4月',
          title: '行业应用页已切换为匿名量化案例结构',
          summary: '应用页现在以 5 个匿名案例呈现消费电子、高端制造、新能源、规模化生产与高端标签方向的项目逻辑。',
          detail: '在未启用实名客户授权前,量化结果、验证指标与业务成果会先作为更稳妥的公开表达方式。',
        },
        {
          category: '联系渠道',
          date: '2026年4月',
          title: '正式联系页已整合公开电话、邮箱、微信与双地址',
          summary: '联系页现已同步 5 条公开业务电话、商务邮箱、业务微信二维码,以及办公室和实验室地址。',
          detail: '这让资料申请、样品沟通、技术会议与来访安排都可以在一个正式入口里完成。',
        },
      ],
      capabilityHeader: {
        eyebrow: '核心能力',
        title: '既懂材料平台,也懂工业客户真正关心的推进节奏',
        description:
          '不先堆型号,而是先讲清虹扬如何进入项目、判断路线并配合验证与交付。',
      },
      capabilities: [
        {
          title: '应用导向方案咨询',
          description: '从基材、工艺、性能目标与当前问题入手,组织更高效的首轮沟通。',
          detail: '帮助客户尽快判断方向,而不是被零散参数打断节奏。',
        },
        {
          title: '产品矩阵与定制开发',
          description: '从成熟型号到定制化路线,兼顾公开产品表达与后续深度协同开发。',
          detail: '更适合需要比较不同材料平台、逐步收敛方案的工业客户。',
        },
        {
          title: '验证逻辑与交付节奏对齐',
          description: '技术沟通不仅围绕实验数据,也关注产线约束、验证节点与后续交付。',
          detail: '让销售表达、技术判断和制造配合从一开始就在同一条链路上。',
        },
      ],
      materialHeader: {
        eyebrow: '材料平台',
        title: '四大体系围绕应用逻辑展开,而不是只列产品型号',
        description:
          '展示公司的材料体系、应用方向与代表产品,详细资料请联系我们获取。',
      },
      materials: [
        {
          name: '永久性强粘接体系',
          useFor: '适用于需要永久性、结构性粘接的高强度场景,如 EVA、海绵、橡塑、金属、玻璃及复合材料。',
          features: ['高初黏力', '高最终剥离强度', '耐候耐温湿', '抗蠕变'],
          customization: '可按基材极性、耐温耐化学腐蚀和涂布工艺要求定制,代表产品包括 7068# 与轮胎胶。',
        },
        {
          name: '可移除 / 临时固定体系',
          useFor: '适用于电子保护膜、广告标识、表面保护、临时固定、可移标签与封装胶带等场景。',
          features: ['高粘接力', '洁净可移除', '可控粘接寿命', '良好耐候性'],
          customization: '可定制剥离力曲线、特定基材的移除性与光学透明度,代表产品包括 7088#、7098#、9088#、9098#。',
        },
        {
          name: '标签与包装专用体系',
          useFor: '适用于纸质 / 薄膜标签、食品包装、化妆品包装、书籍封面、礼盒等应用方向。',
          features: ['快速润湿', '高速贴标适配', '耐水耐油耐刮擦', '高透明高光泽'],
          customization: '可按标签基材、被贴物与食品医药安全标准定制,代表产品包括 1088# 标签胶与 9# 上光膜胶。',
        },
        {
          name: '功能性特种胶粘剂体系',
          useFor: '适用于电子设备组装、汽车零部件固定、新能源电池模组封装、医疗用品与纺织粘合等复杂需求。',
          features: ['功能集成', '双面粘接', '高柔韧与抗冲击', '极端环境耐受'],
          customization: '可围绕复合基材、电气性能、耐电解液与极限温度联合开发,代表产品包括 V08# 与 Y05 等特种系列。',
        },
      ],
      applicationHeader: {
        eyebrow: '行业理解',
        title: '先讲工艺和问题,再讲材料和结果',
        description:
          '先让客户判断"你们懂不懂我的场景",再展开材料层面的表达。',
      },
      applicationCards: [
        {
          title: '涂布与复合加工',
          description: '围绕附着力、涂布稳定性、施工窗口与复合效果进行方案协同。',
          detail: '适合需要材料和工艺一起讨论的加工型客户。',
        },
        {
          title: '电池材料与功能层',
          description: '关注界面适配、一致性、环境适应性以及项目验证效率。',
          detail: '强调技术沟通速度与材料路径的可执行性。',
        },
        {
          title: '工业制造与结构装配',
          description: '服务更综合的强度、可靠性与长期稳定性目标。',
          detail: '把验证逻辑、材料建议与交付节奏同步纳入讨论。',
        },
      ],
      proofHeader: {
        eyebrow: '信任基础',
        title: '在客户联系销售前,先把主体、资质、专利与验证基础讲清楚',
        description:
          '首页先释放营业主体、高新技术企业证明、公开专利条目与实验验证基础,让客户更快形成"这家公司靠谱"的判断。',
      },
      credentials: [
        {
          title: '营业主体与协同架构',
          description: '广州虹扬负责研发与销售,中山置盈承担生产与仓储,形成前端方案判断与后端稳定交付的协同架构。',
          imageSrc: businessLicense,
          imageAlt: '广州虹扬化工科技有限公司营业执照',
          imageCaption: '广州虹扬化工科技有限公司营业执照',
        },
        {
          title: '高新技术企业证明',
          description: '协同制造主体已纳入高新技术企业证书公开展示,让技术型企业属性与制造背书更清晰。',
          imageSrc: highTechCertificate,
          imageAlt: '中山置盈化工科技有限公司高新技术企业证书',
          imageCaption: '协同制造主体 中山置盈高新技术企业证书',
        },
        {
          title: '17 项公开专利条目',
          description: '专利总表已确认可公开,覆盖胶粘材料生产、混合、上料、存储、喷涂、温控、输送与提纯等关键环节。',
          imageSrc: patentStorageDevice,
          imageAlt: '一种抗失效的胶水存放装置发明专利证书',
          imageCaption: '公开专利示例:一种抗失效的胶水存放装置',
        },
        {
          title: '实验验证与行业导入',
          description: '实验室验证、客户导入测试和量产场景反馈共同构成对外信任基础。',
        },
      ],
    },
    solutions: {
      hero: {
        eyebrow: '高端材料粘接方案',
        title: '先判断体系，再进入代表型号与验证',
        lead:
          '围绕四大材料平台、代表型号与项目进入方式组织公开解决方案',
        supporting:
          '网站先展示可公开的平台能力与型号边界; 当项目进入资料评估、样品验证或供货讨论阶段,再由销售与技术团队根据真实场景继续对接。',
        primary: {
          label: '联系销售',
          page: 'contact',
        },
        secondary: {
          label: '查看行业应用',
          page: 'applications',
        },
        note: '这一页的公开逻辑是: 先看平台适配,再看代表型号,最后决定进入哪一层沟通。',
      },
      intro:
        '虹扬把解决方案组织成更接近真实工业采购的阅读路径: 先判断体系适配,再看代表型号,最后决定是否进入资料、样品或供货沟通。',
      guideHeader: {
        eyebrow: '浏览方法',
        title: '让首次访问者在 30 秒内判断要不要继续进入沟通',
        description:
          '解决方案页不是完整产品目录,而是把公开判断顺序讲清楚: 先看体系,再看代表型号,最后进入对应阶段的商务与技术讨论。',
      },
      guideCards: [
        {
          title: '先看基材与工艺约束',
          description: '从被粘物、表面能、施工窗口和量产节奏出发,先排除明显不匹配的平台。',
          detail: '这比一开始逐个比较型号更接近工业项目的首轮筛选方式。',
        },
        {
          title: '再看代表型号与公开边界',
          description: '用公开型号理解典型性能方向、定制空间和资料开放边界。',
          detail: '让客户先判断是否值得继续索取更深层文件与样品。',
        },
        {
          title: '最后按项目阶段进入沟通',
          description: '资料申请、样品验证和供货讨论对应不同节奏,入口选对,推进会更快。',
          detail: '这也是销售与技术团队更高效接力的前提。',
        },
      ],
      platformHeader: {
        eyebrow: '四大平台',
        title: '四条公开进入路线,而不是一串分散型号',
        description:
          '先把项目放进更合适的平台语境,再看代表型号与验证重点,客户会更容易判断是否继续深入。',
      },
      sampleHeader: {
        eyebrow: '代表型号',
        title: '9 个代表型号,帮助客户判断是否值得继续拿资料',
        description:
          '7068#、7088#、1088#、7098#、9#、V08、9088#、9098# 与轮胎胶作为首批公开型号表达,用于帮助客户理解路线边界,而不是替代完整技术资料。',
      },
      samples: [
        {
          name: '7068# 高性能胶粘剂',
          summary: '面向高初黏与稳定粘接需求的代表型号,适合永久性强粘接体系中的高附着场景。',
          application: '适用于 EVA、海绵、橡塑、商标纸与双面胶粘带等对高粘结力要求较高的生产场景。',
          highlights: ['高初黏力', '高最终剥离强度', '耐候性强', '低 VOC 配方'],
          specs: [
            { label: '固含量', value: '37±2%' },
            { label: '粘度', value: '1000-3500 cps' },
            { label: '180°剥离', value: '>14 N/25mm' },
            { label: '持粘性', value: '>120 min' },
          ],
          note: '详细 TDS、批次指标与应用边界在明确项目场景后提供。',
        },
        {
          name: '轮胎胶 高初黏特种胶',
          summary: '面向超高初黏和强力快速粘接需求的公开型号,适合橡胶与低表面能材料上的高抓附场景。',
          application: '适用于轮胎标签、橡胶制品临时固定、汽车制造中的保护膜粘接、物流标签以及电子部件固定等需要高初黏性的应用。',
          highlights: ['超高初黏性', '低表面能基材适配', '持黏 140h+', '耐水耐候'],
          specs: [
            { label: '固含量', value: '45%' },
            { label: '粘度', value: '600 cps' },
            { label: '初黏性', value: '21# 钢球' },
            { label: '剥离强度', value: '25.000 N/cm' },
          ],
          note: '高抓附特种路线代表型号,具体参数请联系我们获取。',
        },
        {
          name: '7088# 高性能可移胶粘剂',
          summary: '面向高黏力且可移除需求的代表型号,适合临时固定与洁净移除并重的场景。',
          application: '适用于电子标签、广告装饰、保护膜、封装胶带以及需要不残胶可移除的应用。',
          highlights: ['高黏力可移除', '可控粘接寿命', '耐温耐湿', '环保安全'],
          specs: [
            { label: '适用基材', value: 'PVC / BOPP / PET / 金属箔' },
            { label: '干燥工艺', value: '80-100°C 热风烘干' },
            { label: '熟化建议', value: '12-24 小时' },
            { label: '包装形式', value: '180kg / 1000kg' },
          ],
          note: '首版只公开产品摘要和典型使用建议,完整参数按项目需求继续沟通。',
        },
        {
          name: '1088# 标签胶',
          summary: '面向标签与包装场景的公开型号,兼顾高初黏、持久性与多基材附着表现。',
          application: '适用于纸质标签、薄膜标签、电子标签、物流标签、食品与医药包装标签,以及玻璃、金属、PET、PP、PVC 等基材表面。',
          highlights: ['高初黏性', '优异持粘力', '耐候耐老化', '低 VOC 配方'],
          specs: [
            { label: '固含量', value: '48.292%' },
            { label: '粘度', value: '1826 cps' },
            { label: '初黏性', value: '8# 钢球' },
            { label: '持黏性', value: '48h' },
          ],
          note: '标签与包装方向典型指标,完整参数请按项目需求沟通。',
        },
        {
          name: '7098# 高黏可移胶',
          summary: '面向高黏力可移除场景的公开型号,强调强附着、洁净移除与长期稳定性之间的平衡。',
          application: '适用于软膜 PET、PVC、BOPP、金属箔等基材,以及电子标签、保护膜、广告装饰、临时粘附和封装胶带等应用。',
          highlights: ['高黏力可移除', '不残胶', '耐温耐湿', '长时稳定'],
          specs: [
            { label: '固含量', value: '50.595%' },
            { label: '粘度', value: '3184 cps' },
            { label: '初黏性', value: '6# 钢球' },
            { label: '持黏性', value: '>100h' },
          ],
          note: '更适合用于需要高黏着同时控制移除损伤与残胶风险的项目,完整窗口条件按项目沟通提供。',
        },
        {
          name: '9088# 可移胶',
          summary: '面向更广泛基材适配的公开可移型号,兼顾快速附着、洁净移除与环保安全要求。',
          application: '适用于玻璃、PET、PP、PVC、金属、橡胶、保护膜、临时固定、可移标签以及对环保和洁净移除要求较高的应用。',
          highlights: ['快速附着', '洁净可移除', '低 VOC 配方', '持黏 48h'],
          specs: [
            { label: '固含量', value: '42%' },
            { label: '粘度', value: '1800 cps' },
            { label: '初黏性', value: '6# 钢球' },
            { label: '剥离强度', value: '7.8 N/cm' },
          ],
          note: '广谱可移除路线代表型号,完整参数请联系我们。',
        },
        {
          name: '9098# 高剥离可移胶',
          summary: '面向同样要求可移除、但需要更高剥离强度的公开型号,适合临时固定与保护膜产品的更强附着版本。',
          application: '适用于玻璃、PET、PP、PVC、金属、橡胶、可移标签、保护膜、广告图文和临时粘附等需要更高剥离力又要求不残胶的场景。',
          highlights: ['更高剥离力', '洁净可移除', '低 VOC 配方', '持黏 48h'],
          specs: [
            { label: '固含量', value: '36%' },
            { label: '粘度', value: '1800 cps' },
            { label: '初黏性', value: '6# 钢球' },
            { label: '剥离强度', value: '10 N/cm' },
          ],
          note: '适合用于需要比 9088# 更高剥离强度的可移除项目,最终窗口仍需结合基材与产品结构进一步确认。',
        },
        {
          name: '9# 上光膜胶',
          summary: '面向印刷覆膜与包装上光的公开型号,突出高透明、高光泽与稳定覆膜效率。',
          application: '适用于书籍封面、食品包装、化妆品包装、高端海报、礼盒包装等纸张与 BOPP、PET、PVC 覆膜场景。',
          highlights: ['高透明高光泽', '覆膜牢固', '耐水耐候', '适配自动化涂布'],
          specs: [
            { label: '固含量', value: '34.705%' },
            { label: '粘度', value: '2583 cps' },
            { label: '初黏性', value: '4# 钢球' },
            { label: '剥离强度', value: '4.495 N/cm' },
          ],
          note: '公开信息聚焦覆膜工艺与典型性能,针对具体印刷结构、设备节奏与成品外观要求可再进一步匹配。',
        },
        {
          name: 'V08 功能性双面胶',
          summary: '面向功能性双面粘接需求的公开型号,兼顾高初黏、耐久性与复杂基材适配。',
          application: '适用于电子设备组装、汽车零部件固定、医疗用品、户外广告安装、家居装饰与纺织粘合等双面胶应用。',
          highlights: ['双面高粘接', '柔韧抗冲击', '耐候耐水油', '低 VOC 配方'],
          specs: [
            { label: '固含量', value: '49.150%' },
            { label: '粘度', value: '2213 cps' },
            { label: '初黏性', value: '5# 钢球' },
            { label: '持黏性', value: '48h' },
          ],
          note: '适合作为功能性特种胶粘剂的公开代表型号,完整复合基材与工艺参数按项目边界继续沟通。',
        },
      ],
      materials: [
        {
          name: '永久性强粘接体系',
          useFor: '专注于需要永久性、结构性粘接的高强度应用,适用于 EVA、海绵、橡塑、金属、玻璃及复合材料。',
          features: ['极高初黏力', '高最终剥离强度', '耐候耐温湿', '抗蠕变'],
          representativeGrades: ['7068#', '轮胎胶'],
          customization: '可按基材极性、附着力、耐高温、耐化学腐蚀与涂布工艺要求定制,适合先从强力永久粘接路线进入讨论。',
        },
        {
          name: '可移除 / 临时固定体系',
          useFor: '服务于需要强力临时粘接或使用后需干净移除的应用,广泛用于电子保护膜、广告标识、表面保护等。',
          features: ['高粘接力', '洁净可移除', '粘接寿命可控', '不残胶'],
          representativeGrades: ['7088#', '7098#', '9088#', '9098#'],
          customization: '可定制剥离力曲线、特定基材的移除性以及光学透明度,适合先从可移与临时固定的边界判断进入讨论。',
        },
        {
          name: '标签与包装专用胶粘剂体系',
          useFor: '专为标签行业和高端印刷包装的覆膜、上光工艺设计,适用于各类纸质 / 薄膜标签及包装场景。',
          features: ['快速润湿', '高速贴标适配', '耐水耐油', '高透明高光泽'],
          representativeGrades: ['1088#', '9#'],
          customization: '可按标签基材、被贴物和食品医药安全标准定制,适合先从标签与包装的工艺窗口进入讨论。',
        },
        {
          name: '功能性特种胶粘剂体系',
          useFor: '满足电子设备组装、汽车零部件固定、新能源电池模组封装等复杂粘接需求。',
          features: ['双面粘接', '高柔韧与抗冲击', '电气性能可定制', '极端环境耐受'],
          representativeGrades: ['V08'],
          customization: '可针对复合基材、电气性能、化学耐受性和复杂应力环境进行联合开发,适合先从功能性与多性能平衡需求进入讨论。',
        },
      ],
      processHeader: {
        eyebrow: '协同流程',
        title: '从首次咨询到样品导入,一条更清楚的协同节奏',
        description:
          '工业客户更关心"接下来会怎么推进"。这一页需要把咨询如何进入资料、打样和长期配合说清楚。',
      },
      process: [
        {
          title: '明确项目条件',
          description: '梳理基材、工艺、关键性能目标、量产节奏与验证边界。',
          detail: '为后续路线判断建立共同语言。',
        },
        {
          title: '判断优先路线',
          description: '从合适的材料平台出发,明确优先验证方向和关注重点。',
          detail: '避免一开始就陷入过细的型号层面比较。',
        },
        {
          title: '进入样品与验证',
          description: '围绕附着力、稳定性、环境适应性等关键指标推进打样。',
          detail: '帮助客户更快完成"能否进入下一步"的判断。',
        },
        {
          title: '继续交付与优化',
          description: '项目进入持续供货、反馈复盘与性能优化的长期协同阶段。',
          detail: '更适合需要稳定配合与持续改善的工业客户关系。',
        },
      ],
      dataRequest: {
        title: '公开资料边界',
        description:
          '网站先开放路线级理解,详细 TDS / SDS、批次参数与项目文件在明确场景后继续提供。',
        items: [
          '公开层: 材料平台、适用方向、代表型号与能力概览。',
          '咨询层: 根据需求进入 TDS / SDS、样品和技术答疑流程。',
          '项目层: 涉及定制路径或特殊工艺时,按项目边界继续沟通。',
        ],
      },
      pageCta: {
        eyebrow: '下一步',
        title: '现在更适合从哪一种方式进入',
        description: '先选最贴近当前阶段的入口,再进入销售与技术的下一步配合。',
        items: [
          {
            eyebrow: '资料',
            title: '资料申请',
            description: '适合先确认平台方向、公开资料边界和基础参数的项目。',
            action: {
              label: '进入资料沟通',
              page: 'contact',
            },
          },
          {
            eyebrow: '样品',
            title: '样品沟通',
            description: '适合已经明确基材、工艺或关键验证指标的项目团队。',
            action: {
              label: '进入样品沟通',
              page: 'contact',
            },
          },
          {
            eyebrow: '供货',
            title: '供货讨论',
            description: '适合进入导入、批量验证或长期稳定供货阶段的客户。',
            action: {
              label: '进入供货讨论',
              page: 'contact',
            },
          },
        ],
        primary: {
          label: '联系销售',
          page: 'contact',
        },
        secondary: {
          label: '查看行业应用',
          page: 'applications',
        },
      },
    },
    applications: {
      hero: {
        eyebrow: '行业应用表达',
        title: '用真实工况判断方案路径',
        lead:
          '以匿名行业案例呈现问题、方案逻辑、材料方向与交付结果',
        supporting:
          '当前版本优先证明我们是否理解电子、高端制造与新能源项目的真实约束; 如后续获得授权,再逐步增强实名案例证明。',
        primary: {
          label: '联系销售',
          page: 'contact',
        },
        secondary: {
          label: '查看技术实力',
          page: 'technology',
        },
        note: '案例结构统一为:痛点、方案、材料方向与交付结果。',
      },
      overview:
        '行业应用页不只是讲"做过什么",更重要的是让客户判断"你们是否理解我的工况、验证压力和导入节奏"。',
      proofHeader: {
        eyebrow: '阅读方法',
        title: '先看我们如何理解问题,再判断这些案例是否对你的项目有参考价值',
        description:
          '本页不依赖客户名称做背书,而是用更适合商务沟通的方式,把工况约束、方案路径、验证压力和结果表达串起来。',
      },
      proofPoints: [
        {
          title: '先看工况约束',
          description: '关注被粘物、环境压力、产线节奏和终端要求是否与你的项目相似。',
          detail: '相似工况比相似行业名称更有判断价值。',
        },
        {
          title: '再看验证与导入逻辑',
          description: '重点看我们如何处理可靠性、耐候性、洁净度或量产稳定性等验证节点。',
          detail: '这能更快判断协同深度是否匹配。',
        },
        {
          title: '最后决定下一页',
          description: '若你已经看到类似路径,就继续回到方案页、技术页或直接进入联系。',
          detail: '让每一次浏览都更接近真实项目推进。',
        },
      ],
      cases: [
        {
          title: '消费电子精密部件粘接',
          challenge: '某消费电子材料供应商需要满足一线品牌对精密结构件洁净度与长期可靠性的严苛要求,否则难以完成供应链准入。',
          solution: '虹扬定向开发高洁净、低挥发的精密电子粘接材料路线,并同步提供全套验证支持文件与导入协同。',
          material: '以高洁净、低挥发的精密电子粘接材料体系为核心,面向结构件导入场景。',
          outcome: '最终帮助客户通过终端品牌方全部 6 项可靠性验证,获得两款旗舰机型结构件订单,并形成该型号年度稳定采购量超过 50 吨。',
          fitSignal: '适合正在评估精密电子结构件、洁净要求和品牌验证门槛的项目。',
        },
        {
          title: '高端制造长效耐候粘接',
          challenge: '某高端制造领域客户需要提升产品在高温高湿与抗紫外老化方面的表现,以进入更高端的汽车等应用市场。',
          solution: '双方联合开发高性能耐候粘接材料系列,并重点优化长期服役稳定性与复杂环境适应性。',
          material: '以高耐候粘接材料体系为核心,面向更严苛长期服役环境。',
          outcome: '合作产品经第三方检测,在 1000 小时紫外老化后剥离强度保持率超过 85%,并带动客户次年相关高端应用销售额提升 35%。',
          fitSignal: '适合面临耐候、耐湿热和更高终端准入压力的制造项目。',
        },
        {
          title: '新能源电池模组封装场景',
          challenge: '项目需要兼顾绝缘、耐电解液、耐热和柔韧性的多重性能平衡,但市场上缺少成熟可直接导入的方案。',
          solution: '虹扬与客户围绕新能源电池应用边界联合攻关,开发满足多重性能平衡的特种弹性体胶粘剂路线。',
          material: '采用功能性特种胶粘剂体系,兼顾封装可靠性、耐受性与工艺可执行性。',
          outcome: '产品在 85°C 电解液中浸泡 30 天后,粘接强度保持率仍超过 90%,绝缘电阻率维持在 1012 Ω·cm 以上,并完成首批超过 5 吨的订单交付。',
          fitSignal: '适合需要同时平衡绝缘、耐介质、耐热与柔韧性的新能源封装项目。',
        },
        {
          title: '通用胶粘带规模化生产优化',
          challenge: '某大型胶粘制品制造商的核心诉求是提升胶水批次稳定性和工艺适应性,以保障连续化生产效率与良率。',
          solution: '虹扬提供高稳定性、宽工艺窗口的通用型粘接材料方案,并同步输出配套工艺参数包。',
          material: '以高稳定性通用型粘接材料体系为核心,面向大规模连续生产场景。',
          outcome: '使用后客户产线因胶水波动导致的调试停机时间减少 20%,与胶粘剂相关的季度平均客诉率从 0.5% 下降至 0.3%,支撑其每年数千万平方米的稳定产出。',
          fitSignal: '适合更关注批次稳定性、宽工艺窗口和连续化产线效率的规模化生产项目。',
        },
        {
          title: '高端标签材料性能升级',
          challenge: '某胶粘制品企业希望升级标签产品,但原有标签胶在高低表面能材质上附着力不足,也难以兼顾持久性与可移除性。',
          solution: '虹扬定制开发高附着力、可移型标签胶,并重点优化其对难粘基材的适应性。',
          material: '以高附着力可移型标签胶体系为核心,兼顾多基材适配与洁净移除表现。',
          outcome: '新标签产品在 HDPE 塑料瓶和涂层金属板上的初始剥离强度分别提升 150% 和 80%,帮助客户获得 3 家高端日化品牌供应商资质,并推动相关产品线年度毛利率提升 8 个百分点。',
          fitSignal: '适合需要兼顾难粘基材附着力、可移除性和标签终端升级的项目。',
        },
      ],
      focusHeader: {
        eyebrow: '适配信号',
        title: '如果你的项目也在关注这些问题,就值得继续往下谈',
        description:
          '客户通常不是被单一案例打动,而是被"这家公司理解我面临的取舍"说服。',
      },
      focusAreas: [
        {
          title: '产线适配',
          description: '关注施工窗口、涂布稳定性、反应节奏与量产可执行性。',
          detail: '适合需要先验证导入可行性的团队。',
        },
        {
          title: '性能平衡',
          description: '在强度、柔韧、耐候、耐介质与附着力之间寻找更可执行的平衡点。',
          detail: '适合存在多目标冲突的项目。',
        },
        {
          title: '协同节奏',
          description: '从验证支持、样品迭代到持续供货,说明合作是否能跟上项目节奏。',
          detail: '适合需要长期技术配合的工业客户。',
        },
      ],
      pageCta: {
        eyebrow: '继续进入',
        title: '确认方向后,让讨论进入更合适的下一页',
        description: '案例页负责建立问题理解; 下一步要么回到材料路线,要么补足技术信任,要么直接开启项目沟通。',
        items: [
          {
            title: '回到材料路线',
            description: '当你已经在比较平台适配、资料边界和样品方向时。',
            action: {
              label: '查看解决方案',
              page: 'solutions',
            },
          },
          {
            title: '查看研发协同',
            description: '当项目已进入验证节点,需要更强技术背书和协同方式说明时。',
            action: {
              label: '了解研发协同',
              page: 'technology',
            },
          },
          {
            title: '直接联系销售',
            description: '当真实工况、时间节点或验证目标已经明确,适合直接开始项目沟通时。',
            action: {
              label: '开始沟通',
              page: 'contact',
            },
          },
        ],
        primary: {
          label: '联系销售',
          page: 'contact',
        },
        secondary: {
          label: '查看解决方案',
          page: 'solutions',
        },
      },
    },
    technology: {
      hero: {
        eyebrow: '研发协同',
        title: '教授领衔，硕博协同',
        lead:
          '把团队、方法与验证能力讲清楚',
        supporting:
          '官网表达聚焦教授牵引的技术方向、博士协同的研究视角，以及把学术方法转化为工业验证效率的能力。',
        primary: {
          label: '联系销售',
          page: 'contact',
        },
        secondary: {
          label: '了解公司背景',
          page: 'about',
        },
        note: '这一页既服务品牌信任,也服务首轮项目沟通。',
      },
      overview:
        '虹扬的技术优势并不只是"有人做研发",而是具备 4 位硕士、2 位博士组成的研发团队、应用导向开发方法,以及与华南理工大学实验室协同的研究背景。技术页需要把这些优势转译成客户能理解的合作价值。',
      pillars: [
        {
          title: '硕博研发团队',
          description: '团队由 4 位硕士与 2 位博士组成,覆盖化工新材料、材料科学、物理学与应用开发方向。',
          detail: '让技术判断、产品优化和客户沟通具备更扎实的研究基础。',
        },
        {
          title: '华工合作背景',
          description: '与华南理工大学实验室达成战略合作,为技术研发提供持续指导与专业支持。',
          detail: '这类背景更能支撑客户对"长期可配合能力"的判断。',
        },
        {
          title: '实验室-客户双重验证',
          description: '研发不是停留在实验室结论,而是持续连接基材、工艺、性能目标和客户验证节奏。',
          detail: '这更符合工业客户对解决问题能力的期待。',
        },
      ],
      galleryHeader: {
        eyebrow: '研发环境',
        title: '让实验、办公与协同场景一起构成可感知的真实感',
        description:
          '首版不需要大面积铺图,但至少要让访客看到你们确实具备实验环境、办公条件和项目讨论空间,强化"真实在做研发"的观感。',
      },
      gallery: [
        {
          src: labPerson1,
          alt: '实验室中的人物协作场景',
          title: '实验室环境',
          description: '用于展示材料实验、配方验证和小试环境的真实基础。',
        },
        {
          src: labHood,
          alt: '真实实验设备与通风橱环境',
          title: '验证与测试',
          description: '配合技术页一起建立"能验证、能迭代、能落地"的信任感。',
        },
        {
          src: labBench,
          alt: '实验台与设备的真实场景',
          title: '实验台与设备',
          description: '补充展示日常研发设备与实验工位,让实验条件和操作场景更完整可见。',
        },
        {
          src: officePerson1,
          alt: '研发人员办公与日常协同场景',
          title: '日常研发协同',
          description: '体现团队的日常协作环境，弱化纯实验室或纯贸易公司的观感。',
        },
        {
          src: researchScene1,
          alt: '实验室研发操作与配方验证场景',
          title: '配方与验证',
          description: '配合"方案沟通、资料对接、联合开发"这类文案使用更合适。',
        },
      ],
      validationSection: {
        header: {
          eyebrow: '验证现场',
          title: '把真实样品测试与验证动作放进技术页',
          description:
            '这组照片展示的是样品测试、配方验证与导入前的小试现场，用来说明虹扬的技术判断并不是停留在纸面，而是进入了真实操作和验证流程。',
        },
        photos: [
          {
            src: validationScene7068,
            alt: '7068# 胶样在实验台上的测试准备现场',
            title: '验证现场',
            description: '7068# 胶样的现场测试记录，展示从样品准备到手工验证的真实过程。',
          },
          {
            src: validationScene7098,
            alt: '7098# 胶样在实验室中的样品测试场景',
            title: '样品测试',
            description: '7098# 胶样进入实验台验证阶段，用现场照片说明测试节奏与留样过程。',
          },
          {
            src: validationScene7088,
            alt: '7088# 胶样在实验室中的配方验证场景',
            title: '配方验证',
            description: '7088# 胶样的操作验证画面，用于支撑配方判断和验证流程的公开表达。',
          },
          {
            src: validationScene9,
            alt: '9# 胶样在实验室中的导入验证场景',
            title: '导入验证',
            description: '9# 胶样的小试验证记录，体现项目导入前对材料表现和操作路径的真实确认。',
          },
        ],
      },
      labHeader: {
        eyebrow: '公开证明模块',
        title: '把营业主体、高新证明、17 项专利条目与验证场景放进同一组公开证明',
        description:
          '这一轮先把营业执照、高新技术企业证书、发明专利与实验场景放进同一层公开证明,让技术与制造协同的可信度更完整。',
      },
      labCards: [
        {
          title: '营业主体与协同架构',
          description: '官网对外采用"广州虹扬负责研发、销售与项目协同沟通,中山置盈承接生产、仓储与协同制造交付,双方共同构成从前端技术判断到后端稳定交付的整体能力"这一标准表达,并以营业执照作为第一层公开主体证明。',
          imageSrc: businessLicense,
          imageAlt: '广州虹扬化工科技有限公司营业执照',
          imageCaption: '广州虹扬化工科技有限公司营业执照',
        },
        {
          title: '高新技术企业证明',
          description: '高新技术企业证书直接支撑协同制造端的技术型企业属性,让研发判断与制造交付之间的关系更容易被客户理解。',
          imageSrc: highTechCertificate,
          imageAlt: '中山置盈化工科技有限公司高新技术企业证书',
          imageCaption: '协同制造主体 中山置盈高新技术企业证书',
        },
        {
          title: '发明专利与工艺积累',
          description: '已确认可公开的专利总表收录 17 项条目,可用于说明协同制造端在胶粘材料生产、存储、喷涂、温控与提纯等环节上的持续积累。',
          imageSrc: patentStorageDevice,
          imageAlt: '一种抗失效的胶水存放装置发明专利证书',
          imageCaption: '公开专利示例:一种抗失效的胶水存放装置',
        },
        {
          title: '实验验证与行业导入',
          description: '产品可靠性建立在"实验室-客户"双重验证之上,并已在电子、新能源等方向形成导入经验。',
        },
      ],
      pageCta: {
        eyebrow: '沟通路径',
        title: '先建立技术信任,再进入验证配合',
        description: '技术页更适合承接方法理解、公开证明和后续项目讨论。',
        items: [
          {
            eyebrow: '沟通',
            title: '技术沟通',
            description: '围绕基材、性能目标和验证节奏快速对齐问题边界。',
          },
          {
            eyebrow: '验证',
            title: '验证方式',
            description: '把资料、样品与后续测试安排到同一条项目链路里。',
          },
          {
            eyebrow: '证明',
            title: '公开证明',
            description: '实验环境、资料规则与可公开证明模块会继续逐步补强。',
          },
        ],
        primary: {
          label: '联系销售',
          page: 'contact',
        },
        secondary: {
          label: '了解公司背景',
          page: 'about',
        },
      },
    },
    about: {
      hero: {
        eyebrow: '关于虹扬',
        title: '懂材料 也懂项目配合',
        lead:
          '让客户更快理解虹扬与协同方式',
        supporting:
          '首版官网采用更克制的企业表达方式,不堆砌口号,而是用结构化信息建立品牌印象和合作预期。',
        primary: {
          label: '联系我们',
          page: 'contact',
        },
        secondary: {
          label: '查看技术实力',
          page: 'technology',
        },
        note: '这一轮已经接入真实办公、实验与证照素材,后续只需继续补齐最终对外文案。',
      },
      story:
        '广州虹扬负责研发、销售与项目协同沟通,中山置盈承接生产、仓储与协同制造交付,双方共同构成从前端技术判断到后端稳定交付的整体能力。官网对外把虹扬定义为客户的"关键技术伙伴":从需求对接、路线判断、样品验证到工艺落地,用一套贯通研发、销售与制造的全周期支持方式服务电子、高端制造与新能源项目。',
      collaborationSection: {
        header: {
          eyebrow: '战略协同关系',
          title: '用正式口径说明广州虹扬与中山置盈的协同方式',
          description:
            '这部分不是模糊的一体化叙事，而是明确说明两家独立法人如何通过长期互信与协同运作，为客户提供更稳定、更高效、更具长期价值的支持。',
        },
        narrative:
          '广州虹扬化工科技有限公司与中山置盈化工科技有限公司均为独立运营、股权清晰的法人主体。基于深厚的产业渊源与长期互信，双方建立了紧密的战略协同关系。中山置盈化工在基础化工原料领域具备扎实的产业基础与生产管理经验，广州虹扬则专注于下游市场的深度开拓、产品应用创新与客户技术服务。这种协同并不模糊主体边界，而是在各自清晰分工的前提下，形成更适合工业客户长期配合的整体能力。',
        valueCards: [
          {
            title: '供应链稳定保障',
            description: '通过产能协调与供应链高效联动，确保关键原料的稳定供应与品质一致性。',
            detail: '这显著增强了订单交付的可靠性，也提高了项目推进中的抗风险能力。',
          },
          {
            title: '技术与研发联动',
            description: '共享行业洞察与技术资源，在研发方向与工艺优化上形成互补。',
            detail: '这让创新成果转化更快，也让客户获得更具竞争力的解决方案支持。',
          },
          {
            title: '战略发展协同',
            description: '在市场布局与长期规划上保持同步，让前端方案判断与后端交付能力形成资源合力。',
            detail: '这种协同是虹扬能够提供长期价值服务的重要基础，而不只是阶段性的业务配合。',
          },
        ],
      },
      values: [
        {
          title: '自主研发与知识产权体系',
          description: '围绕高端材料粘接、工业涂层与功能应用方向,持续沉淀自主技术平台、产品矩阵与公开专利基础。',
          detail: '这让材料判断、产品升级与后续定制开发具备更稳定的技术底座。',
        },
        {
          title: '硕博团队与产学研协同',
          description: '4 位硕士、2 位博士组成的团队,与华南理工大学实验室协同开展技术研究与应用转化。',
          detail: '让官网对外传达的不只是"有研发",而是具备持续研究、验证和工程转化能力。',
        },
        {
          title: '从需求对接到工艺落地',
          description: '合作并不止于供货,而是围绕需求澄清、配方判断、验证安排、量产导入和后续优化持续推进。',
          detail: '这也是"关键技术伙伴"在官网对外最需要讲清楚的合作方式。',
        },
      ],
      timeline: [
        {
          year: '2018',
          title: '研发团队与协同布局',
          description: '逐步形成由华工背景团队牵引、4 位硕士与 2 位博士参与的研发配置,并建立产学研协同基础。',
        },
        {
          year: '2020',
          title: '知识产权与产品矩阵',
          description: '围绕高端材料粘接与工业涂层方向形成自主知识产权体系,并逐步搭建覆盖多场景的产品矩阵。',
        },
        {
          year: '2022',
          title: '高端场景验证与交付',
          description: '产品逐步进入消费电子、高端制造与新能源方向的验证和交付节奏,形成更完整的项目协同经验。',
        },
      ],
      pageCta: {
        eyebrow: '合作方式',
        title: '选择下一步行动',
        description: '关于页更像品牌与合作说明页,帮助客户快速选择下一步。',
        items: [
          {
            title: '看解决方案',
            description: '如果你想先确认业务边界、材料平台和公开资料表达方式。',
            action: {
              label: '进入解决方案',
              page: 'solutions',
            },
          },
          {
            title: '看研发协同',
            description: '如果你更关心团队背景、验证方法和长期技术配合能力。',
            action: {
              label: '查看研发协同',
              page: 'technology',
            },
          },
          {
            title: '直接联系',
            description: '如果你已经希望进入正式项目沟通,公开业务电话和业务微信会更高效。',
            action: {
              label: '联系我们',
              page: 'contact',
            },
          },
        ],
        primary: {
          label: '联系我们',
          page: 'contact',
        },
        secondary: {
          label: '查看解决方案',
          page: 'solutions',
        },
      },
    },
    news: {
      hero: {
        eyebrow: '新闻动态',
        title: '官网内容更新进展',
        lead:
          '把产品摘要 资质证明 案例表达与联系入口持续补齐',
        supporting:
          '这一页展示公司的最新动态、产品更新与技术进展。',
        primary: {
          label: '联系销售',
          page: 'contact',
        },
        secondary: {
          label: '查看研发协同',
          page: 'technology',
        },
        note: '新闻动态将按公开授权范围持续扩充,不一次性做成完整媒体中心。',
      },
      intro:
        '这一页承担的不是传统企业新闻中心,而是把官网内容建设、资料开放与品牌公开进展持续讲清楚,让客户看到站点正在稳定变成一个正式可用的对外入口。',
      featured: {
        category: '置顶更新',
        date: '2026年4月',
        title: '官网产品与案例信息持续补充',
        summary: '这一轮已公开营业执照、高新证书、17 项专利条目、9 个产品摘要、5 个匿名量化案例、网站地图与基础声明页,以及更多真实办公和实验场景图片。',
        detail: '站点现在已经能同时承担品牌展示、材料判断、资质证明、案例表达、正式联系与上线支持六类任务。',
      },
      latestHeader: {
        eyebrow: '近期内容',
        title: '持续完善网站内容',
        description:
          '当前动态区以官网进展和公开资料更新为主,后续再按授权补入里程碑、活动和更丰富的品牌内容。',
      },
      items: [
        {
          category: '解决方案',
          date: '2026年4月',
          title: '公开产品摘要已扩展到 9 个代表型号',
          summary: '解决方案页现已覆盖 7068#、7088#、1088#、7098#、9#、V08,以及新增的 9088#、9098# 和轮胎胶。',
          detail: '帮助客户判断应用方向与产品边界,详细技术资料请联系获取。',
        },
        {
          category: '行业应用',
          date: '2026年4月',
          title: '应用页已切换为 5 个匿名量化案例',
          summary: '案例表达现在覆盖消费电子、高端制造、新能源封装、规模化生产优化和高端标签升级五类场景,并加入具体验证指标与结果。',
          detail: '在正式获得实名客户授权之前,这种匿名量化表达更适合作为官网长期公开版本。',
        },
        {
          category: '正式联系',
          date: '2026年4月',
          title: '公开联系页已同步 5 条电话与双地址',
          summary: '联系页现在已整合公开业务电话、商务邮箱、业务微信二维码、办公室地址和实验室地址,适合直接承接资料申请与项目沟通。',
          detail: '',
        },
      ],
      archiveNote:
        '持续更新公司动态与产品信息。',
      pageCta: {
        eyebrow: '继续浏览',
        title: '从公开更新进入正式沟通',
        description: '动态页更轻,下一步通常是继续看业务页面,或直接建立联系。',
        items: [
          {
            title: '查看解决方案',
            description: '继续了解材料平台、样品表达与资料开放逻辑。',
            action: {
              label: '进入解决方案',
              page: 'solutions',
            },
          },
          {
            title: '联系我们',
            description: '如果你希望围绕公开更新继续讨论具体项目,可直接进入联系页。',
            action: {
              label: '进入联系页',
              page: 'contact',
            },
          },
        ],
        primary: {
          label: '联系销售',
          page: 'contact',
        },
        secondary: {
          label: '查看研发协同',
          page: 'technology',
        },
      },
    },
    contact: {
      hero: {
        eyebrow: '联系我们',
        title: '把资料 样品与项目沟通放进同一个正式入口',
        lead:
          '主联系人、商务邮箱、企业微信与双地址一页直达',
        supporting:
          '无论是初步了解材料方向、申请技术资料，还是推进样品、验证和技术会议，都可以先从主联系人、商务邮箱、企业微信和双地址进入正式沟通。',
        primary: {
          label: '查看解决方案',
          page: 'solutions',
        },
        secondary: {
          label: '了解技术实力',
          page: 'technology',
        },
        note: '标准资料需求确认后 24 小时内可安排发送或寄出,首次问询原则上 1 个工作日内响应。',
      },
      note:
        '项目处于初评、打样、资料申请或技术会议筹备阶段,都可以通过公开业务电话、商务邮箱、业务微信二维码和办公 / 实验地址快速建立正式联系。',
      options: [
        {
          title: '样品申请',
          emphasis: '适合已有明确应用方向,需要验证具体产品匹配度的项目',
          body: '建议提供意向产品型号、基材类型、表面处理情况、工艺条件概览以及最终应用场景与核心性能要求。',
          note: '技术团队评估后将判断现有产品是否匹配或需定制开发,并确认样品发放事宜。',
        },
        {
          title: '技术资料申请',
          emphasis: '适合希望继续了解 TDS / SDS 或产品技术摘要的客户',
          body: '请结合感兴趣的产品系列或应用领域提出需求,便于销售与技术团队发送更匹配的资料库。',
          note: '资料开放仍遵循"公开摘要 + 咨询后深入沟通"的规则。',
        },
        {
          title: '技术会议与联合验证',
          emphasis: '适合已进入验证流程、需要更快推进的复杂项目',
          body: '对于复杂应用挑战,建议直接电话或邮件说明需求,并安排线上或线下技术会议,由硕博团队共同参与问题分析。',
          note: '这类项目更适合尽快进入更细的应用和验证讨论。',
        },
      ],
      summaryTitle: '官方联系摘要',
      summaryDescription:
        '首次联系建议先从两位主联系人、商务邮箱、企业微信入口以及办公室 / 实验室地址进入，便于更快建立正式沟通。',
      detailTitle: '全部公开联系人',
      detailDescription:
        '如需按具体协作角色继续分流，以下 5 个公开电话仍保留为官网正式联系渠道。',
      hubTitle: '正式联系信息',
      hubDescription:
        '以下信息用于官网公开对外联系，适用于销售咨询、资料申请、技术会议安排、来访沟通和项目跟进。',
      channelLabels: {
        phones: '业务电话',
        wechat: '企业微信入口',
        address: '办公 / 实验地址',
      },
      qrcodeCaption: '当前先保留正式企业微信入口展示位，可用于项目沟通、资料跟进与来访安排。',
      guideTitle: '首次联系建议准备',
      guideDescription:
        '为了让销售与技术沟通更高效,建议在首次来电或添加微信前先整理以下信息。',
      guideItems: [
        '公司名称与联系人信息',
        '意向产品型号或关注的材料方向',
        '基材类型、表面处理情况与当前工艺方式',
        '最终应用场景与核心性能要求',
        '当前遇到的问题与希望改善的重点',
        '是否需要 TDS / SDS、样品、技术会议或进一步验证支持',
        '项目所处阶段、预计验证时间节点,以及是否需要安排办公室 / 实验室来访',
      ],
      guideNote:
        '如果信息尚不完整,也可以先通过电话、邮件或微信建立联系,再逐步补充细节。',
    },
  },
  en: {
    meta: buildMeta('en'),
    brand: buildBrand('en'),
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      applications: 'Applications',
      technology: 'R&D Collaboration',
      about: 'About',
      news: 'News',
      contact: 'Contact',
    },
    footer: {
      statement:
        'Hope Young leads R&D and sales while Zhongshan Zhiying handles manufacturing and warehousing, creating one coordinated path for advanced material bonding solutions and stable delivery',
      note:
        'Hope Young Chemical Technology serves electronics, advanced manufacturing and new energy clients with advanced material bonding solutions and collaborative development.',
      topUtilityLabel: 'Website switch',
      companyTitle: 'Company',
      businessTitle: 'Brands & Business',
      quickTitle: 'Quick Links',
      contactTitle: 'Contact',
      companyLinks: [
        { label: 'About', page: 'about' },
        { label: 'News', page: 'news' },
      ],
      businessLinks: [
        { label: 'Solutions', page: 'solutions' },
        { label: 'Applications', page: 'applications' },
        { label: 'R&D Collaboration', page: 'technology' },
      ],
      quickLinks: [
        { label: 'Home', page: 'home' },
        { label: 'Contact', page: 'contact' },
        { label: 'News', page: 'news' },
      ],
      contactCtaLabel: 'Contact',
      contactChannelLabels: {
        phone: 'Sales Phone',
        wechat: 'Business WeChat',
        address: 'Address',
      },
      legalLinks: [
        { label: 'Sitemap', href: '/en/sitemap' },
        { label: 'Copyright', href: '/en/copyright' },
        { label: 'Terms', href: '/en/terms' },
        { label: 'Privacy', href: '/en/privacy' },
      ],
    },
    common: {
      metrics: [
        {
          value: '4 masters / 2 PhDs',
          label: 'R&D team',
          detail: 'Covering chemical materials, materials science, physics and application development.',
        },
        {
          value: '4 platforms',
          label: 'Material systems',
          detail: 'Covering permanent bonding, removable, label and packaging, and specialty functional routes.',
        },
        {
          value: '17 entries',
          label: 'Public patent file',
          detail: 'Covering production, storage, feeding, spraying, temperature control, transport and purification-related steps.',
        },
      ],
      inquiryBand: {
        title: 'Clear project context makes material discussions productive much faster.',
        description:
          'The site is designed to help visitors explain their scenario, understand Hope Young and move into direct business communication without friction. Sample, document and deeper technical discussions can continue through the public business phones, business email and WeChat channel after that.',
        actions: [
          {
            title: 'Project inquiry',
            description: 'For customers evaluating material direction, process constraints or feasibility.',
          },
          {
            title: 'Document request',
            description: 'For customers asking for TDS / SDS or deeper technical explanations.',
          },
          {
            title: 'Sample discussion',
            description: 'For teams already entering sampling, validation or joint development.',
          },
        ],
        primary: {
          label: 'Contact sales',
          page: 'contact',
        },
        secondary: {
          label: 'Explore solutions',
          page: 'solutions',
        },
      },
    },
    home: {
      statement: {
        eyebrow: 'Key technical partner',
        title: 'Bonding the Future, Enabling Intelligent Manufacturing',
        lead:
          'Critical bonding solutions for advanced manufacturing, built on proprietary core technology',
        supporting:
          'Hope Young supports electronics, advanced manufacturing and new-energy projects by keeping route judgement, validation rhythm, coordinated manufacturing and formal delivery inside one connected project line.',
        note: 'Clarify the coordination model first, then move into samples, documents and production planning.',
        tags: ['Electronics assembly', 'Labels and packaging', 'New-energy layers', 'Joint validation'],
        proofItems: [
          { value: '4M + 2PhD', label: 'R&D team' },
          { value: '17', label: 'public patent entries' },
          { value: '2 entities', label: 'coordinated delivery model' },
          { value: '4 scenes', label: 'validation records' },
        ],
        primary: {
          label: 'Start a project discussion',
          page: 'contact',
        },
        secondary: {
          label: 'See material systems',
          page: 'solutions',
        },
        visual: {
          primaryFrames: [
            {
              label: 'R&D scene',
              image: researchScene2,
              alt: 'Hope Young laboratory hero visual',
            },
            {
              label: 'Validation',
              image: researchScene1,
              alt: 'Research and validation scene inside the lab',
            },
            {
              label: 'Manufacturing',
              image: factoryWorkshopWide,
              alt: 'Factory floor and production support environment',
            },
          ],
          secondaryFrames: [
            {
              label: 'Project room',
              image: meetingRoomReal,
              alt: 'Project route discussion inside the meeting room',
            },
            {
              label: 'Coordination',
              image: officeWorkspace,
              alt: 'Office coordination and daily workspace',
            },
            {
              label: 'Discussion',
              image: officePerson1,
              alt: 'Office communication and business coordination scene',
            },
          ],
          captionEyebrow: 'Project Rhythm',
          captionTitle: 'Move from requirement definition to validation through a smoother industrial collaboration path.',
          captionDescription: 'One team aligns application context, lab validation, document exchange and production timing together.',
        },
      },
      resultStrip: {
        eyebrow: 'Proof first',
        title: 'The homepage should clarify four trust layers before the deeper discussion begins.',
        description:
          'Establish route fit, public proof, coordinated structure and formal contact paths before moving into deeper technical detail.',
        items: [
          {
            value: '4 systems',
            label: 'Public routes',
            detail: 'Permanent bonding, removable systems, label-packaging and specialty functional directions.',
          },
          {
            value: '9 summaries',
            label: 'Public grades',
            detail: 'Enough to judge route fit before asking for deeper technical documents.',
          },
          {
            value: '17 patents',
            label: 'Technical base',
            detail: 'A clearer public signal that development and manufacturing are both real.',
          },
          {
            value: '5 contacts',
            label: 'Direct channels',
            detail: 'Phones, email, WeChat and both addresses already sit inside the public contact layer.',
          },
        ],
      },
      problemRoutes: {
        eyebrow: 'Entry Paths',
        title: 'Start with the right question, then choose the next page.',
        description:
          'The homepage should help industrial visitors find the right entry point rather than browse the site like a document index.',
        items: [
          {
            eyebrow: 'Route 01',
            title: 'Start with the material system',
            description: 'Best when the visitor is already comparing substrates, target properties or candidate grades.',
            outcome: 'Narrow the project to the right material platform first.',
            page: 'solutions',
          },
          {
            eyebrow: 'Route 02',
            title: 'Start with the company relationship',
            description: 'Best when the first question is who Hope Young is, how it works with Zhongshan Zhiying and whether that coordination model is credible.',
            outcome: 'Review the entity structure, role split and long-term support logic first.',
            page: 'about',
          },
          {
            eyebrow: 'Route 03',
            title: 'Start with validation and delivery rhythm',
            description: 'Best for industrial teams already preparing samples, joint validation or faster technical coordination.',
            outcome: 'Review the team, method and validation-support structure.',
            page: 'technology',
          },
        ],
      },
      trustShowcase: {
        eyebrow: 'Trust Signals',
        title: 'Show the four trust signals before asking for the next conversation.',
        description:
          'The homepage is not meant to act as a document center. Its role is to help industrial visitors decide whether Hope Young is worth engaging further.',
        quote:
          'Industrial buyers do not trust a company because it says it is professional. They trust what they can see: supply stability, technical coordination, strategic alignment and manufacturing support.',
        panels: [
          {
            eyebrow: 'Supply Chain',
            title: 'Stable supply-chain assurance',
            description: 'Capacity coordination and efficient supply linkage help keep key materials, quality consistency and delivery rhythm more dependable.',
            image: factoryWorkshopWide,
            alt: 'Coordinated workshop environment supporting supply stability',
          },
          {
            eyebrow: 'Technical Linkage',
            title: 'R&D and technical linkage',
            description: 'Shared insight and technical resources create a stronger connection between route judgement, process optimization and customer-side validation.',
            image: researchScene1,
            alt: 'Laboratory scene showing technical validation and R&D linkage',
          },
          {
            eyebrow: 'Strategic Coordination',
            title: 'Strategic development alignment',
            description: 'Hope Young and Zhongshan Zhiying remain independent legal entities while keeping long-term trust and coordinated planning across market and delivery decisions.',
            image: meetingRoomReal,
            alt: 'Project discussion scene representing strategic coordination',
          },
          {
            eyebrow: 'Manufacturing Proof',
            title: 'Coordinated manufacturing support',
            description: 'Real workshop equipment and production scenes make manufacturing capability tangible instead of leaving it as a text claim.',
            image: factoryWorkshopDetail,
            alt: 'Factory equipment platform and production scene',
          },
        ],
      },
      conversionCta: {
        eyebrow: 'Next step',
        title: 'Give us the application context first, and we will help narrow the right material direction.',
        description:
          'Once the homepage proves “they understand the problem”, the next action should feel lighter than a heavy lead form.',
        quickPoints: [
          'Useful for teams entering sampling, technical document requests or validation planning',
          'Useful for visitors who want to judge route fit before asking for TDS or SDS',
          'Useful when technical discussion and delivery rhythm need to be aligned early',
        ],
        primary: {
          label: 'Open contact page',
          page: 'contact',
        },
        secondary: {
          label: 'Explore solutions',
          page: 'solutions',
        },
      },
      hero: {
        eyebrow: 'Key technical partner',
        title: 'Bonding the Future, Enabling Intelligent Manufacturing',
        lead:
          'Critical bonding solutions for advanced manufacturing, built on proprietary core technology',
        supporting:
          'Hope Young supports electronics, advanced manufacturing and new-energy projects by keeping route judgement, validation rhythm, coordinated manufacturing and formal delivery inside one connected project line.',
        primary: {
          label: 'Start a project discussion',
          page: 'contact',
        },
        secondary: {
          label: 'See material systems',
          page: 'solutions',
        },
        note: 'Clarify the coordination model first, then move into samples, documents and production planning.',
      },
      brandIntro: {
        eyebrow: 'Company Summary',
        title: 'Built for solution introduction, not single-material supply only',
        description:
          'Focused on advanced material bonding solutions and collaborative project support with self-driven R&D, coordinated manufacturing and industrial delivery logic',
      },
      portalHeader: {
        eyebrow: 'Core Entry Points',
        title: 'Three ways to judge whether Hope Young fits the project',
        description:
          'Start with material routes, then industry understanding and R&D collaboration',
      },
      portalEntries: [
        {
          eyebrow: 'Solutions',
          title: 'Solutions',
          description: 'Judge the right system and route first',
          page: 'solutions',
          image: companyBrandWall1,
          alt: 'Hope Young reception brand wall showcasing company identity',
        },
        {
          eyebrow: 'Applications',
          title: 'Industry applications',
          description: 'See the project logic behind real scenarios',
          page: 'applications',
          image: officeEntryReal,
          alt: 'Hope Young company entrance sign',
        },
        {
          eyebrow: 'R&D Collaboration',
          title: 'R&D collaboration',
          description: 'Team depth validation method and SCUT background',
          page: 'technology',
          image: researchScene2,
          alt: 'Laboratory research and development scene',
        },
      ],
      featuredHeader: {
        eyebrow: 'Core Capability',
        title: 'Bring R&D sales and manufacturing into one project path',
        description:
          'Build a first project judgement through the problem, the adhesive system and the delivery structure together',
      },
      featuredCapabilities: [
        {
          eyebrow: 'Front-end Collaboration',
          title: 'Front-end route alignment',
          description: 'Start with substrate, process, target performance and the expected delivery rhythm',
          supporting: 'Useful for customers moving through route review, document requests, sampling or joint validation.',
          page: 'solutions',
        },
        {
          eyebrow: 'Manufacturing Support',
          title: 'Stable back-end delivery',
          description: 'Connect Zhongshan Zhiying manufacturing and warehousing to validation, scale-up and supply discussion',
          supporting: 'This keeps technical judgement and delivery capability inside one public-facing story.',
          page: 'applications',
        },
      ],
      coCreationHeader: {
        eyebrow: 'Co-Creation',
        title: 'Better technical cooperation starts with judging and validating together',
        description:
          'Hope Young wants to present not only technical strength, but also a more collaborative rhythm suited to long-term industrial work.',
      },
      coCreationLead:
        'Hope Young brings real customer conditions into technical judgement so sales, R&D, manufacturing and project teams can work on the same practical problem',
      coCreationPoints: [
        'Keep scenario process limits and validation rhythm in one shared conversation frame',
        'Help a first document exchange move faster toward samples validation and longer cooperation',
        'Keep business language and technical judgement on the same project track',
      ],
      coCreationGallery: [
        {
          src: meetingRoomReal,
          alt: 'Project discussion and route alignment',
          title: 'Project discussion',
          description: 'Use route discussion, document alignment and meeting space to frame the problem before validation begins.',
        },
        {
          src: officePerson1,
          alt: 'Office coordination and project management',
          title: 'Daily coordination',
          description: 'Keep sales, R&D and customer communication moving within a smoother project rhythm.',
        },
      ],
      newsHeader: {
        eyebrow: 'News & Updates',
        title: 'Company updates and milestones',
        description:
          'The homepage now highlights approved progress across product summaries, anonymous cases, proof modules, real photography and direct contact channels.',
      },
      newsTeasers: [
        {
          category: 'Website Update',
          date: 'April 2026',
          title: 'Website content continues to expand',
          summary: 'The website now presents the company material platform, industry applications and core qualifications.',
          detail: 'The site supports material screening, qualification review and direct business contact. Detailed TDS and SDS are available upon request.',
        },
        {
          category: 'Application Cases',
          date: 'April 2026',
          title: 'The applications page now uses quantified anonymous cases',
          summary: 'Five anonymous cases now cover consumer electronics, advanced manufacturing, new-energy packaging, scale-up optimization and premium label materials.',
          detail: 'Until named customer approval is available, quantified outcomes and validation metrics provide the safest long-term public expression.',
        },
        {
          category: 'Contact Channels',
          date: 'April 2026',
          title: 'The contact page now brings together direct phones, email, WeChat and both addresses',
          summary: 'The public contact layer now includes 5 direct phone lines, the business email, the WeChat QR code and both the office and laboratory addresses.',
          detail: 'That makes the site more ready for document requests, sampling discussion, technical meetings and visit planning.',
        },
      ],
      capabilityHeader: {
        eyebrow: 'Core Capabilities',
        title: 'Material expertise translated into a clearer industrial working rhythm',
        description:
          'Instead of leading with a dense product list, the homepage explains how Hope Young enters a project, frames a route and supports validation.',
      },
      capabilities: [
        {
          title: 'Application-led consulting',
          description: 'Discussions begin with substrate, process, target properties and current pain points.',
          detail: 'That helps customers reach a more useful first-round judgement.',
        },
        {
          title: 'Multi-platform material support',
          description: 'Different resin directions are matched against the actual use case, not pushed as a single answer.',
          detail: 'This is better for industrial buyers comparing several practical options.',
        },
        {
          title: 'Validation logic aligned with delivery',
          description: 'Technical communication also considers line constraints, timing and collaboration rhythm.',
          detail: 'That keeps sales and technical language connected from the start.',
        },
      ],
      materialHeader: {
        eyebrow: 'Material Platforms',
        title: 'Four adhesive systems presented through application logic',
        description:
          'The site presents system capabilities, representative grades and customization directions. Detailed documents are shared upon project engagement.',
      },
      materials: [
        {
          name: 'Permanent Bonding Systems',
          useFor: 'Suitable for high-strength permanent or structural bonding across EVA, sponge, rubber-plastic, metal, glass and composite substrates.',
          features: ['High initial tack', 'High final peel strength', 'Weatherability', 'Anti-creep performance'],
          customization: 'Can be tuned around substrate polarity, heat resistance, chemical resistance and coating process needs.',
        },
        {
          name: 'Removable or Temporary Bonding Systems',
          useFor: 'Suitable for protection films, temporary fixation, removable labels, advertising graphics and clean-removal applications.',
          features: ['High tack', 'Clean removability', 'Controllable bond life', 'No residue'],
          customization: 'Can be developed around peel-force curves, substrate-specific removability and optical transparency.',
        },
        {
          name: 'Label and Packaging Adhesive Systems',
          useFor: 'Designed for label stock, laminated print packaging, glossy films and other packaging applications.',
          features: ['Fast wetting', 'High-speed labeling fit', 'Water and oil resistance', 'High transparency'],
          customization: 'Can be adapted to different label facestocks, containers and higher food or medical safety requirements.',
        },
        {
          name: 'Special Functional Adhesive Systems',
          useFor: 'Suitable for electronics assembly, automotive components, battery-module packaging and other complex functional bonding needs.',
          features: ['Dual-side bonding', 'Flexibility and impact resistance', 'Electrical performance options', 'Extreme environment resistance'],
          customization: 'Can be jointly developed around composite substrates, electrical properties, chemical resistance and complex stress conditions.',
        },
      ],
      applicationHeader: {
        eyebrow: 'Industry Understanding',
        title: 'Process language first, material language second',
        description:
          'Industrial buyers first want to know whether a supplier understands their scenario, validation pressure and delivery rhythm.',
      },
      applicationCards: [
        {
          title: 'Coating and lamination',
          description: 'Focused on adhesion, coating stability, operating window and composite performance.',
          detail: 'Useful for customers who need process and material discussion together.',
        },
        {
          title: 'Battery materials and functional layers',
          description: 'Focused on interface fit, consistency, environmental demands and validation efficiency.',
          detail: 'Highlights the importance of fast technical communication and practical route logic.',
        },
        {
          title: 'Industrial manufacturing and assembly',
          description: 'Built for broader strength, reliability and long-term stability targets.',
          detail: 'Material choice, validation logic and delivery rhythm are discussed together.',
        },
      ],
      proofHeader: {
        eyebrow: 'Trust Foundation',
        title: 'Clarify the entity, certifications, patents and validation base before contact starts',
        description:
          'The homepage should already communicate the business entity, high-tech proof, public patent base and validation capability before contact begins.',
      },
      credentials: [
        {
          title: 'Entity structure and coordinated operation',
          description: 'Hope Young leads R&D and sales while Zhongshan Zhiying supports manufacturing and warehousing for a clearer front-end and back-end delivery structure.',
          imageSrc: businessLicense,
          imageAlt: 'Guangzhou Hope Young business license',
          imageCaption: 'Guangzhou Hope Young Chemical Technology Co., Ltd. business license',
        },
        {
          title: 'High-tech enterprise certification',
          description: 'The coordinated manufacturing side is now backed by a public high-tech enterprise certificate, making the technical-company identity easier to trust.',
          imageSrc: highTechCertificate,
          imageAlt: 'High-tech enterprise certificate of Zhongshan Zhiying',
          imageCaption: 'High-tech enterprise certificate of Zhongshan Zhiying',
        },
        {
          title: '17 public patent entries',
          description: 'The confirmed public patent file covers adhesive-material production, mixing, feeding, storage, spraying, temperature control, transport and purification-related processes.',
          imageSrc: patentStorageDevice,
          imageAlt: 'Invention patent certificate for an anti-failure adhesive storage device',
          imageCaption: 'Patent example: anti-failure adhesive storage device',
        },
        {
          title: 'Lab validation and project introduction',
          description: 'Lab work, customer-side validation and project introduction experience together form the first trust layer.',
        },
      ],
    },
    solutions: {
      hero: {
        eyebrow: 'Advanced Material Bonding Solutions',
        title: 'Judge the system before the grade',
        lead:
          'Public solution content is organized around four material platforms, representative grades and project entry logic',
        supporting:
          'The site shows the platform and grade boundary first. Once a project moves into document review, sampling or supply planning, sales and technical teams continue the route-specific discussion.',
        primary: {
          label: 'Contact sales',
          page: 'contact',
        },
        secondary: {
          label: 'See applications',
          page: 'applications',
        },
        note: 'The public logic is straightforward: judge platform fit first, review representative grades second, and choose the right next conversation third.',
      },
      intro:
        'Hope Young structures solutions in a sequence that is closer to real industrial buying behavior: judge system fit first, review representative grades second, and then decide whether the next step is documents, samples or supply discussion.',
      guideHeader: {
        eyebrow: 'How To Read',
        title: 'Help a first-time visitor decide within 30 seconds whether to move forward',
        description:
          'This page is not a full product catalog. It explains the public decision order clearly: review the system first, then the representative grade, then the right business and technical entry point.',
      },
      guideCards: [
        {
          title: 'Start with substrate and process constraints',
          description: 'Look at the bonded materials, surface energy, line window and production rhythm before comparing specific grades.',
          detail: 'That mirrors how industrial teams usually screen routes in the first conversation.',
        },
        {
          title: 'Then read the representative grades',
          description: 'Use the public grades to understand performance direction, customization range and document boundary.',
          detail: 'This helps visitors decide whether deeper files or samples are worth requesting.',
        },
        {
          title: 'Choose the next conversation by project stage',
          description: 'Document review, sample validation and supply planning belong to different commercial rhythms.',
          detail: 'Choosing the right entry point makes the sales and technical handoff more efficient.',
        },
      ],
      platformHeader: {
        eyebrow: 'Four Platforms',
        title: 'Four public entry routes instead of a scattered list of grades',
        description:
          'Once a project is framed inside the right platform logic, it becomes much easier to judge representative grades and validation priorities.',
      },
      sampleHeader: {
        eyebrow: 'Representative Grades',
        title: 'Nine representative grades that help visitors decide whether deeper files are worth requesting',
        description:
          'The first public set now includes 7068#, 7088#, 1088#, 7098#, 9#, V08, 9088#, 9098# and the tire-label grade. They are intended to explain route boundaries, not replace full technical documentation.',
      },
      samples: [
        {
          name: '7068# High-performance Adhesive',
          summary: 'A representative grade aimed at permanent high-strength bonding where high initial tack and stable long-term performance matter.',
          application: 'Suitable for EVA, sponge, rubber-plastic materials, label stock and double-sided tape production scenarios that require stronger adhesion.',
          highlights: ['High initial tack', 'High final peel strength', 'Weatherability', 'Low-VOC formulation'],
          specs: [
            { label: 'Solids', value: '37±2%' },
            { label: 'Viscosity', value: '1000-3500 cps' },
            { label: '180° peel', value: '>14 N/25mm' },
            { label: 'Holding power', value: '>120 min' },
          ],
          note: 'Detailed TDS data, batch indicators and use boundaries are shared after project context is confirmed.',
        },
        {
          name: 'Tire-label Grade High-tack Adhesive',
          summary: 'A specialty high-tack route built for fast grab, strong hold and better fit on rubber or other lower-surface-energy substrates.',
          application: 'Suitable for tire labels, temporary fixing on rubber goods, automotive protective-film bonding, logistics labels and electronics fixing scenarios that need very high initial tack.',
          highlights: ['Very high initial tack', 'Low-surface-energy substrate fit', '140h+ holding power', 'Water and weather resistance'],
          specs: [
            { label: 'Solids', value: '45%' },
            { label: 'Viscosity', value: '600 cps' },
            { label: 'Initial tack', value: '21# steel ball' },
            { label: 'Peel strength', value: '25.000 N/cm' },
          ],
          note: 'This public summary is positioned as a specialty route for high-grab applications, while exact substrate treatment and coating details stay inside project-based discussion.',
        },
        {
          name: '7088# Removable Adhesive',
          summary: 'A representative removable grade balancing strong tack with clean removal for temporary bonding and film applications.',
          application: 'Suitable for electronic labels, advertising decoration, protective films, sealing tapes and applications that require removable bonding without residue.',
          highlights: ['High tack with removability', 'Controllable bond life', 'Heat and humidity resistance', 'Safer environmental profile'],
          specs: [
            { label: 'Substrate fit', value: 'PVC / BOPP / PET / metal foil' },
            { label: 'Drying process', value: '80-100°C hot-air drying' },
            { label: 'Curing suggestion', value: '12-24 hours' },
            { label: 'Packaging', value: '180kg / 1000kg' },
          ],
          note: 'The first public release shows summary-level guidance only, with full parameters handled through direct business discussion.',
        },
        {
          name: '1088# Label Adhesive',
          summary: 'A public-facing grade for label and packaging work where fast tack, long holding power and broad substrate fit matter together.',
          application: 'Suitable for paper labels, film labels, electronic labels, logistics labels and food or pharma packaging labels across glass, metal, PET, PP and PVC surfaces.',
          highlights: ['High initial tack', 'Strong holding power', 'Weather and aging resistance', 'Low-VOC formula'],
          specs: [
            { label: 'Solids', value: '48.292%' },
            { label: 'Viscosity', value: '1826 cps' },
            { label: 'Initial tack', value: '8# steel ball' },
            { label: 'Holding power', value: '48h' },
          ],
          note: 'Label and packaging guidance at a summary level. Detailed specifications available upon request.',
        },
        {
          name: '7098# High-tack Removable Adhesive',
          summary: 'A public removable grade built for projects that need stronger tack while still controlling residue and removal risk.',
          application: 'Suitable for soft PET film, PVC, BOPP, metal foil, electronic labels, protective films, advertising graphics and temporary bonding products.',
          highlights: ['High tack with removability', 'No residue', 'Heat and humidity resistance', 'Long-term stability'],
          specs: [
            { label: 'Solids', value: '50.595%' },
            { label: 'Viscosity', value: '3184 cps' },
            { label: 'Initial tack', value: '6# steel ball' },
            { label: 'Holding power', value: '>100h' },
          ],
          note: 'This public summary is best for projects that need stronger adhesion together with controlled removal behavior, while exact process windows stay inside direct project discussion.',
        },
        {
          name: '9088# Removable Adhesive',
          summary: 'A public removable grade designed for broader substrate compatibility where fast tack, clean removal and environmental safety all matter together.',
          application: 'Suitable for glass, PET, PP, PVC, metal, rubber, protective films, temporary fixing, removable labels and cleaner-removal applications with stricter environmental expectations.',
          highlights: ['Fast tack', 'Clean removability', 'Low-VOC profile', '48h holding power'],
          specs: [
            { label: 'Solids', value: '42%' },
            { label: 'Viscosity', value: '1800 cps' },
            { label: 'Initial tack', value: '6# steel ball' },
            { label: 'Peel strength', value: '7.8 N/cm' },
          ],
          note: '9088# as a versatile clean-removal option. Full specifications available upon request.',
        },
        {
          name: '9098# Removable Adhesive',
          summary: 'A public removable grade for projects that need stronger peel under the same clean-removal logic used for temporary bonding and film products.',
          application: 'Suitable for glass, PET, PP, PVC, metal, rubber, removable labels, protection films, advertising graphics and temporary bonding where higher peel force is needed without residue.',
          highlights: ['Stronger removable peel', 'Clean removal', 'Low-VOC profile', '48h holding power'],
          specs: [
            { label: 'Solids', value: '36%' },
            { label: 'Viscosity', value: '1800 cps' },
            { label: 'Initial tack', value: '6# steel ball' },
            { label: 'Peel strength', value: '10 N/cm' },
          ],
          note: 'This summary is useful for projects that want a stronger removable route than 9088#, while final use windows still depend on the target substrate and product structure.',
        },
        {
          name: '9# Gloss Film Adhesive',
          summary: 'A public grade for print lamination and gloss-film work that emphasizes transparency, finish quality and stable converting efficiency.',
          application: 'Suitable for book covers, food packaging, cosmetics packaging, premium posters and gift-box work across paper and BOPP, PET or PVC lamination structures.',
          highlights: ['High transparency and gloss', 'Stable lamination bond', 'Water and weather resistance', 'Automation-friendly coating'],
          specs: [
            { label: 'Solids', value: '34.705%' },
            { label: 'Viscosity', value: '2583 cps' },
            { label: 'Initial tack', value: '4# steel ball' },
            { label: 'Peel strength', value: '4.495 N/cm' },
          ],
          note: 'The public summary focuses on lamination behavior and typical performance, with exact print structure and line-speed matching handled in later discussion.',
        },
        {
          name: 'V08 Functional Double-sided Adhesive',
          summary: 'A public-facing specialty grade for functional double-sided bonding where quick tack, durability and broad material fit all matter.',
          application: 'Suitable for electronics assembly, automotive components, medical products, outdoor advertising installation, home decoration and textile bonding scenarios.',
          highlights: ['Double-sided high tack', 'Flexibility and impact resistance', 'Weather and fluid resistance', 'Low-VOC formula'],
          specs: [
            { label: 'Solids', value: '49.150%' },
            { label: 'Viscosity', value: '2213 cps' },
            { label: 'Initial tack', value: '5# steel ball' },
            { label: 'Holding power', value: '48h' },
          ],
          note: 'This is positioned as a public specialty representative, while full composite-substrate and process details remain tied to the actual project boundary.',
        },
      ],
      materials: [
        {
          name: 'Permanent Bonding Systems',
          useFor: 'Designed for permanent or structural bonding across EVA, sponge, rubber-plastic, metal, glass and composite substrates.',
          features: ['Very high initial tack', 'High peel strength', 'Weatherability', 'Anti-creep performance'],
          representativeGrades: ['7068#', 'Tire-label grade'],
          customization: 'Can be tuned around substrate polarity, heat resistance, chemical resistance and coating-process requirements, making it the right route for stronger permanent-bonding discussions.',
        },
        {
          name: 'Removable or Temporary Bonding Systems',
          useFor: 'Suitable for protective films, temporary fixation, removable labels and clean-removal applications.',
          features: ['High tack', 'Clean removability', 'Controllable bond life', 'No residue'],
          representativeGrades: ['7088#', '7098#', '9088#', '9098#'],
          customization: 'Can be developed around peel-force curves, substrate-specific removability and optical transparency, making it suitable for projects that first need to define removable-bonding boundaries.',
        },
        {
          name: 'Label and Packaging Adhesive Systems',
          useFor: 'Designed for label stock, laminated print packaging, glossy films and other packaging applications.',
          features: ['Fast wetting', 'High-speed labeling fit', 'Water and oil resistance', 'High transparency'],
          representativeGrades: ['1088#', '9#'],
          customization: 'Can be adapted to different facestocks, containers and higher food or medical safety requirements, making it useful for labeling and packaging projects with tighter process windows.',
        },
        {
          name: 'Special Functional Adhesive Systems',
          useFor: 'Suitable for electronics assembly, automotive components, battery-module packaging and other complex functional bonding needs.',
          features: ['Dual-side bonding', 'Flexibility and impact resistance', 'Electrical performance options', 'Extreme environment resistance'],
          representativeGrades: ['V08'],
          customization: 'Can be jointly developed around composite substrates, electrical properties, chemical resistance and complex stress conditions, making it a stronger route when multiple performance targets must be balanced together.',
        },
      ],
      processHeader: {
        eyebrow: 'How We Work',
        title: 'A clearer working rhythm from the first inquiry to sample introduction',
        description:
          'Industrial customers do not only want a material claim. They want to see how a conversation moves into documents, sampling and stable cooperation.',
      },
      process: [
        {
          title: 'Clarify the requirement',
          description: 'Define substrate, process, property target, production rhythm and validation boundary.',
          detail: 'That creates a shared frame before discussing a route.',
        },
        {
          title: 'Judge the best route',
          description: 'Identify which material platform deserves priority and what should be evaluated first.',
          detail: 'This avoids jumping too quickly into model-level comparison.',
        },
        {
          title: 'Sample and validate',
          description: 'Move into focused evaluation around adhesion, stability and environmental fit.',
          detail: 'Customers can decide next-step feasibility more quickly.',
        },
        {
          title: 'Deliver and improve',
          description: 'Continue through supply, review and ongoing optimization.',
          detail: 'Best suited for customers who want stable technical cooperation.',
        },
      ],
      dataRequest: {
        title: 'Public Document Boundary',
        description:
          'The website opens route-level understanding first. Detailed TDS / SDS data, batch indicators and project files are shared once the application context is clear.',
        items: [
          'Public layer: platform overview, application fit, representative grades and summary capability.',
          'Inquiry layer: TDS / SDS, sample discussion and deeper technical Q&A.',
          'Project layer: route-specific documents and customized details managed case by case.',
        ],
      },
      pageCta: {
        eyebrow: 'Next Step',
        title: 'Choose the entry point that best matches the current project stage',
        description: 'The right conversation entry usually matters as much as the material route itself.',
        items: [
          {
            eyebrow: 'Docs',
            title: 'Document request',
            description: 'Best when the platform direction, public document boundary and basic parameters need to be clarified first.',
            action: {
              label: 'Open document discussion',
              page: 'contact',
            },
          },
          {
            eyebrow: 'Sample',
            title: 'Sample discussion',
            description: 'Best for teams that already know the substrate, process or critical validation target.',
            action: {
              label: 'Open sample discussion',
              page: 'contact',
            },
          },
          {
            eyebrow: 'Supply',
            title: 'Supply discussion',
            description: 'Best for customers moving into introduction, volume validation or stable recurring supply.',
            action: {
              label: 'Open supply discussion',
              page: 'contact',
            },
          },
        ],
        primary: {
          label: 'Contact sales',
          page: 'contact',
        },
        secondary: {
          label: 'See applications',
          page: 'applications',
        },
      },
    },
    applications: {
      hero: {
        eyebrow: 'Application Storytelling',
        title: 'Read routes through real operating conditions',
        lead:
          'Anonymous industry cases are used to show the problem, route logic, material direction and delivery result',
        supporting:
          'This version is designed to prove whether Hope Young understands the real constraints behind electronics, advanced manufacturing and new-energy projects. Named customer proof can be added later if approval becomes available.',
        primary: {
          label: 'Contact sales',
          page: 'contact',
        },
        secondary: {
          label: 'See technology',
          page: 'technology',
        },
        note: 'Each case follows the same structure: challenge, route, material direction and outcome.',
      },
      overview:
        'The applications page is not only about what has been done before. Its job is to help visitors judge whether Hope Young understands their operating conditions, validation pressure and introduction rhythm.',
      proofHeader: {
        eyebrow: 'How To Read',
        title: 'Start with how the problem is understood, then decide whether the case is relevant to your project',
        description:
          'The page does not depend on named customers as the main trust device. Instead it connects operating constraints, route logic, validation pressure and outcome in a form that is easier to use in business discussion.',
      },
      proofPoints: [
        {
          title: 'Read the operating constraints first',
          description: 'Check whether the substrate, environmental pressure, line rhythm and end-use requirements resemble your own project.',
          detail: 'Similarity of working conditions is usually more valuable than similarity of industry labels.',
        },
        {
          title: 'Then review the validation logic',
          description: 'Look at how reliability, weatherability, cleanliness or volume-stability checkpoints were handled.',
          detail: 'That is often the fastest way to judge whether the collaboration depth fits.',
        },
        {
          title: 'Choose the next page last',
          description: 'Once the path feels familiar, move forward to solutions, technology or direct contact.',
          detail: 'Each click should bring the visitor closer to a real project conversation.',
        },
      ],
      cases: [
        {
          title: 'Consumer-electronics precision bonding',
          challenge: 'A materials supplier needed a bonding route that could meet top-brand cleanliness and long-term reliability requirements for precision structural components.',
          solution: 'Hope Young developed an ultra-clean low-volatility bonding-material route for precision electronics and supported the project with a full validation-document package.',
          material: 'Ultra-clean low-volatility bonding systems designed for precision-electronics introduction.',
          outcome: 'The route passed all 6 reliability checks from the end brand, won structural-part orders for 2 flagship models and reached stable annual purchasing of more than 50 tons.',
          fitSignal: 'Relevant for projects that are screening precision-electronics parts against cleanliness demands and brand-level validation thresholds.',
        },
        {
          title: 'Long-weatherability bonding for advanced manufacturing',
          challenge: 'An industrial adhesive maker needed stronger heat, humidity and UV-aging resistance to move into higher-end automotive-facing applications.',
          solution: 'The two sides jointly developed a weather-resistant bonding-material series and optimized the structure behind long-term durability and environmental stability.',
          material: 'High-weatherability bonding systems built for harsher long-term service conditions.',
          outcome: 'After 1000 hours of UV aging, peel retention stayed above 85%, and the related product line increased next-year sales in higher-end applications by 35%.',
          fitSignal: 'Relevant for manufacturing programs facing stronger weatherability, damp-heat exposure and tougher end-market qualification pressure.',
        },
        {
          title: 'New-energy battery specialty packaging',
          challenge: 'The packaging route needed to balance insulation, electrolyte resistance, heat resistance and flexibility at the same time, with no mature off-the-shelf answer available.',
          solution: 'Hope Young jointly developed a specialty elastomer adhesive route designed around the real performance tradeoffs of battery-module packaging.',
          material: 'Special functional adhesive systems created for insulation, chemical resistance and practical manufacturability.',
          outcome: 'After 30 days in electrolyte at 85°C, bond-strength retention stayed above 90% and insulation resistance remained above 1012 Ω·cm, with the first delivery exceeding 5 tons.',
          fitSignal: 'Relevant for new-energy packaging work that must balance insulation, chemical resistance, heat tolerance and flexibility at the same time.',
        },
        {
          title: 'Scale-up optimization for industrial tape production',
          challenge: 'A large tape producer needed better batch stability and wider process tolerance to keep large-scale production efficient and consistent.',
          solution: 'Hope Young supplied a stable general-purpose bonding-material route together with a process-parameter package for line-side optimization.',
          material: 'High-stability bonding systems designed for wider process windows and continuous production.',
          outcome: 'Line stoppage caused by adhesive variation dropped by 20%, complaint rate fell from 0.5% to 0.3%, and the route supported tens of millions of square meters of annual output.',
          fitSignal: 'Relevant for scale-up programs where batch stability, wider process windows and continuous-line efficiency matter most.',
        },
        {
          title: 'Premium label-material performance upgrade',
          challenge: 'A customer wanted to upgrade label products for higher-end branded packaging, but the existing adhesive could not balance difficult-substrate adhesion with removable performance.',
          solution: 'Hope Young customized a higher-adhesion removable label adhesive and optimized fit across harder-to-bond substrates.',
          material: 'High-adhesion removable label adhesive systems tuned for difficult substrates and cleaner removal.',
          outcome: 'Initial peel strength increased by 150% on HDPE bottles and 80% on coated metal, helping the customer qualify with 3 premium personal-care suppliers and improve annual gross margin by 8 percentage points.',
          fitSignal: 'Relevant for label programs that must improve difficult-substrate adhesion without giving up removability or end-use upgrade potential.',
        },
      ],
      focusHeader: {
        eyebrow: 'Fit Signals',
        title: 'If your project is wrestling with these same questions, the conversation is worth continuing',
        description:
          'Industrial buyers are rarely persuaded by a single case alone. They are persuaded when a supplier clearly understands the tradeoffs they are trying to manage.',
      },
      focusAreas: [
        {
          title: 'Production fit',
          description: 'Covers process window, coating stability, reaction rhythm and manufacturability.',
          detail: 'Useful for teams that need to judge introduction feasibility first.',
        },
        {
          title: 'Property balance',
          description: 'Balances strength, flexibility, media resistance, weatherability and adhesion together.',
          detail: 'Useful when the project is constrained by multiple competing targets.',
        },
        {
          title: 'Collaboration rhythm',
          description: 'Covers validation support, sample iteration and the ability to stay with the project through supply.',
          detail: 'Useful for industrial customers that need longer-term technical cooperation.',
        },
      ],
      pageCta: {
        eyebrow: 'Continue',
        title: 'Once the direction is clearer, move the discussion into the right next page',
        description: 'The applications page builds problem understanding. The next step is usually route detail, technical trust or direct project contact.',
        items: [
          {
            title: 'Back to solutions',
            description: 'Useful when the next step is comparing material platforms, public documents and sample direction.',
            action: {
              label: 'Explore solutions',
              page: 'solutions',
            },
          },
          {
            title: 'Open R&D collaboration',
            description: 'Useful when the project is entering validation and needs stronger technical trust.',
            action: {
              label: 'View R&D collaboration',
              page: 'technology',
            },
          },
          {
            title: 'Start the discussion',
            description: 'Useful when operating conditions, timing or validation targets are already clear enough to talk directly.',
            action: {
              label: 'Contact us',
              page: 'contact',
            },
          },
        ],
        primary: {
          label: 'Contact sales',
          page: 'contact',
        },
        secondary: {
          label: 'Explore solutions',
          page: 'solutions',
        },
      },
    },
    technology: {
      hero: {
        eyebrow: 'R&D Collaboration',
        title: 'Professor-led, supported by a graduate research team',
        lead:
          'A clearer view of team depth, method and validation capability',
        supporting:
          'The public narrative centers on professor-led direction, doctoral collaboration and the ability to translate academic method into practical industrial value.',
        primary: {
          label: 'Contact sales',
          page: 'contact',
        },
        secondary: {
          label: 'Learn about Hope Young',
          page: 'about',
        },
        note: 'This page supports both brand trust and first-round project credibility.',
      },
      overview:
        'Hope Young does not simply "have R&D staff". It works with a team of four masters and two PhDs, an application-oriented development method and collaboration with South China University of Technology. The public site translates those strengths into clear customer-facing value.',
      pillars: [
        {
          title: 'Master and doctoral team',
          description: 'The team includes four masters and two PhDs across new chemical materials, material science, physics and application development.',
          detail: 'That gives product judgement, optimization and customer communication a stronger research foundation.',
        },
        {
          title: 'SCUT collaboration background',
          description: 'Strategic collaboration with South China University of Technology strengthens the credibility of technical support and long-term R&D coordination.',
          detail: 'This kind of background helps buyers judge long-term cooperation potential with more confidence.',
        },
        {
          title: 'Lab-to-customer validation',
          description: 'R&D stays connected to substrate, process, property targets and customer-side validation rhythm rather than stopping at lab conclusions.',
          detail: 'That better matches how industrial customers judge problem-solving ability.',
        },
      ],
      galleryHeader: {
        eyebrow: 'R&D Environment',
        title: 'Use real lab, office and meeting scenes to make the technical team tangible',
        description:
          'The public site does not need oversized imagery, but it should clearly show that Hope Young operates with real laboratory conditions, office coordination and project-discussion space.',
      },
      gallery: [
        {
          src: labPerson1,
          alt: 'Laboratory collaboration scene',
          title: 'Laboratory environment',
          description: 'Shows the real setting used for material experiments, formulation work and small-scale validation.',
        },
        {
          src: labHood,
          alt: 'Real lab equipment and hood environment',
          title: 'Testing and verification',
          description: 'Supports the message that Hope Young can validate, iterate and move toward practical delivery.',
        },
        {
          src: labBench,
          alt: 'Real laboratory bench and equipment scene',
          title: 'Bench and equipment',
          description: 'Adds a clearer view of the everyday experimental setup and working conditions behind formulation development.',
        },
        {
          src: officeWorkspace,
          alt: 'Real office workspace and daily coordination environment',
          title: 'Office coordination',
          description: 'Balances the site tone so the company reads as a working technical business rather than only a lab or trading office.',
        },
        {
          src: meetingRoomReal,
          alt: 'Project discussion space in the meeting room',
          title: 'Project discussion space',
          description: 'Fits naturally with messaging around route discussion, document alignment and joint development.',
        },
      ],
      validationSection: {
        header: {
          eyebrow: 'Validation In Practice',
          title: 'Bring real sample testing and validation activity onto the technology page',
          description:
            'These photos show sample testing, formulation verification and pre-introduction trial work. They demonstrate that Hope Young carries technical judgement into real operating and validation steps rather than leaving it on paper.',
        },
        photos: [
          {
            src: validationScene7068,
            alt: '7068# sample test setup in the laboratory',
            title: 'Validation scene',
            description: 'A real 7068# sample-testing record that shows how Hope Young moves from preparation into hands-on validation.',
          },
          {
            src: validationScene7098,
            alt: '7098# sample under laboratory testing',
            title: 'Sample testing',
            description: 'The 7098# sample enters bench-side testing, making the public validation rhythm and sample-handling process more visible.',
          },
          {
            src: validationScene7088,
            alt: '7088# sample during laboratory formulation verification',
            title: 'Formulation verification',
            description: 'An operation-stage record of the 7088# sample used to support formulation judgement and process verification.',
          },
          {
            src: validationScene9,
            alt: '9# sample during pre-introduction laboratory validation',
            title: 'Introduction validation',
            description: 'A pre-introduction validation record for the 9# sample, showing how route fit is checked before a project moves further.',
          },
        ],
      },
      labHeader: {
        eyebrow: 'Public Proof Modules',
        title: 'Qualifications, certifications and validation capability in one public proof layer',
        description:
          'This round brings the business license, high-tech certificate, patent example and lab scenes into one clearer proof structure for the public website.',
      },
      labCards: [
        {
          title: 'Entity structure and coordinated operation',
          description: 'The public site presents Hope Young as the R&D and sales front end while Zhongshan Zhiying supports manufacturing and warehousing, with the business license acting as the first public proof layer.',
          imageSrc: businessLicense,
          imageAlt: 'Guangzhou Hope Young business license',
          imageCaption: 'Guangzhou Hope Young Chemical Technology Co., Ltd. business license',
        },
        {
          title: 'High-tech enterprise certification',
          description: 'The high-tech enterprise certificate gives the coordinated manufacturing side a clearer technical identity inside the public-facing story.',
          imageSrc: highTechCertificate,
          imageAlt: 'High-tech enterprise certificate of Zhongshan Zhiying',
          imageCaption: 'High-tech enterprise certificate of Zhongshan Zhiying',
        },
        {
          title: 'Patent and process accumulation',
          description: 'The confirmed public patent file now covers 17 entries that help explain process accumulation across adhesive-material production, storage, spraying, temperature control and purification-related operations.',
          imageSrc: patentStorageDevice,
          imageAlt: 'Invention patent certificate for an anti-failure adhesive storage device',
          imageCaption: 'Patent example: anti-failure adhesive storage device',
        },
        {
          title: 'Validation and market introduction',
          description: 'Reliability is built through both lab-side work and customer-side validation in real industrial projects.',
        },
      ],
      pageCta: {
        eyebrow: 'Discussion Paths',
        title: 'Build technical trust before moving into project validation',
        description: 'This page translates team depth, method and proof logic into a credible next step for the project.',
        items: [
          {
            eyebrow: 'Talk',
            title: 'Technical discussion',
            description: 'Align the project boundary through substrate, target property and validation timing.',
          },
          {
            eyebrow: 'Validate',
            title: 'Validation logic',
            description: 'Keep documents, samples and later testing inside one connected project rhythm.',
          },
          {
            eyebrow: 'Prove',
            title: 'Public proof',
            description: 'Lab scenes, document rules and approved proof modules will continue to strengthen this layer.',
          },
        ],
        primary: {
          label: 'Contact sales',
          page: 'contact',
        },
        secondary: {
          label: 'Learn about Hope Young',
          page: 'about',
        },
      },
    },
    about: {
      hero: {
        eyebrow: 'About Hope Young',
        title: 'Material expertise with a clearer project working model',
        lead:
          'A clearer picture of who Hope Young is and how it works',
        supporting:
          'The public site avoids generic corporate language and instead builds a more stable business impression through structure, proof and clarity.',
        primary: {
          label: 'Contact us',
          page: 'contact',
        },
        secondary: {
          label: 'View technology',
          page: 'technology',
        },
        note: 'This round already introduces real office, laboratory and credential imagery, allowing later updates to focus on final public wording.',
      },
      story:
        'Guangzhou Hope Young leads R&D, sales and project coordination, while Zhongshan Zhiying supports manufacturing, warehousing and coordinated delivery. Together they form a connected capability from front-end technical judgement to stable back-end fulfillment. The public site positions Hope Young as a key technical partner that supports electronics, advanced manufacturing and new-energy projects from requirement alignment to route judgement, sample validation and process landing.',
      collaborationSection: {
        header: {
          eyebrow: 'Strategic Coordination',
          title: 'State clearly how Hope Young and Zhongshan Zhiying coordinate',
          description:
            'This section avoids vague one-company storytelling. Instead, it states how two independent legal entities coordinate over the long term to create more stable, efficient and durable value for customers.',
        },
        narrative:
          'Guangzhou Hope Young Chemical Technology Co., Ltd. and Zhongshan Zhiying Chemical Technology Co., Ltd. are both independently operated legal entities with clear ownership structures. Built on longstanding industrial ties and mutual trust, the two companies have established a close strategic coordination relationship. Zhongshan Zhiying brings solid manufacturing and process-management experience in upstream chemical materials, while Hope Young focuses on downstream market development, application innovation and customer-facing technical service. The value of this relationship does not come from blurring legal boundaries, but from keeping responsibilities clear while forming a more capable long-term support structure for industrial customers.',
        valueCards: [
          {
            title: 'Stable supply-chain assurance',
            description: 'Capacity coordination and supply-chain linkage help maintain material continuity and quality consistency.',
            detail: 'That improves delivery reliability and strengthens resilience when industrial projects face timing or supply risk.',
          },
          {
            title: 'R&D and technical linkage',
            description: 'Shared technical resources and market insight create a stronger bridge between development direction and process optimization.',
            detail: 'That helps convert innovation faster and gives customers more competitive route support.',
          },
          {
            title: 'Strategic development alignment',
            description: 'Market planning and long-term direction stay coordinated so front-end judgement and back-end delivery can reinforce each other.',
            detail: 'This coordinated structure is part of why Hope Young can support customers with longer-term value rather than only short-term transactions.',
          },
        ],
      },
      values: [
        {
          title: 'Proprietary R&D and IP foundation',
          description: 'Hope Young keeps building its own technology base, product matrix and patent-backed process accumulation around advanced bonding, coating and functional-material routes.',
          detail: 'That gives material judgement and later customization a more stable technical foundation.',
        },
        {
          title: 'Graduate-level team with SCUT collaboration',
          description: 'A team of four masters and two PhDs works with application-oriented development logic and collaboration with South China University of Technology.',
          detail: 'The message is not only that Hope Young "has R&D," but that it can keep researching, validating and translating work into industrial use.',
        },
        {
          title: 'Support from requirement to process landing',
          description: 'The company works through requirement alignment, route selection, validation planning, production introduction and later optimization instead of stopping at a quotation.',
          detail: 'That is the clearest public expression of its "key technical partner" role.',
        },
      ],
      timeline: [
        {
          year: '2018',
          title: 'Team and collaboration foundation',
          description: 'The R&D structure was built around self-driven development, graduate-level talent and industry-facing collaboration.',
        },
        {
          year: '2020',
          title: 'IP and product matrix',
          description: 'A proprietary technology base and a multi-scenario product matrix continued to take shape around advanced bonding and coating routes.',
        },
        {
          year: '2022',
          title: 'High-end scenario validation',
          description: 'Products moved into demanding validation and delivery rhythms in electronics, advanced manufacturing and new-energy related scenarios.',
        },
      ],
      pageCta: {
        eyebrow: 'Partnership',
        title: 'Choose the most useful next step',
        description: 'The about page works as a brand and working-model brief, helping visitors choose the next conversation.',
        items: [
          {
            title: 'See solutions',
            description: 'Best if the next need is business scope, material platforms and public product expression.',
            action: {
              label: 'Open solutions',
              page: 'solutions',
            },
          },
          {
            title: 'See R&D collaboration',
            description: 'Best if the next need is team background, validation logic and technical trust.',
            action: {
              label: 'View R&D collaboration',
              page: 'technology',
            },
          },
          {
            title: 'Contact directly',
            description: 'Best if the project is already ready for a formal first conversation.',
            action: {
              label: 'Contact us',
              page: 'contact',
            },
          },
        ],
        primary: {
          label: 'Contact us',
          page: 'contact',
        },
        secondary: {
          label: 'Explore solutions',
          page: 'solutions',
        },
      },
    },
    news: {
      hero: {
        eyebrow: 'News & Updates',
        title: 'Website updates and milestones',
        lead:
          'A running record of product summaries proof modules case expression and contact updates',
        supporting:
        'This page presents the latest company updates, product information and technical progress.',
        primary: {
          label: 'Contact sales',
          page: 'contact',
        },
        secondary: {
          label: 'View R&D collaboration',
          page: 'technology',
        },
        note: 'The news structure will expand gradually rather than being launched as a heavy content system all at once.',
      },
      intro:
        'This page works less like a classic corporate newsroom and more like a living public-update layer, showing how the brand portal keeps gaining stronger product, proof and contact content.',
      featured: {
        category: 'Featured Update',
        date: 'April 2026',
        title: 'Product and case study information continues to be added',
        summary: 'This round adds the business license, high-tech certificate, 17 patent entries, 9 product summaries, 5 quantified anonymous cases, the sitemap and the basic legal support pages, plus more real office and lab imagery.',
        detail: 'The site can now support brand introduction, route screening, proof review, case reading, direct business contact and launch-support information in one public structure.',
      },
      latestHeader: {
        eyebrow: 'Recent Items',
        title: 'Continuously improving website content',
        description:
          'The current stage focuses on website progress and public-information development, with room to add milestones, activities and more approved company news later.',
      },
      items: [
        {
          category: 'Solutions',
          date: 'April 2026',
          title: 'The public product layer now covers 9 representative grades',
          summary: 'The solutions page now includes 7068#, 7088#, 1088#, 7098#, 9#, V08, plus 9088#, 9098# and the tire-label grade.',
          detail: 'Public summaries help visitors judge route fit early, while full TDS, SDS and project files remain tied to direct business discussion.',
        },
        {
          category: 'Applications',
          date: 'April 2026',
          title: 'The applications page now uses 5 quantified anonymous cases',
          summary: 'Case coverage now spans consumer electronics, advanced manufacturing, new-energy packaging, scale-up optimization and premium label upgrades with measurable outcomes.',
          detail: 'Until named-customer approval arrives, quantified anonymous storytelling is the safer long-term public format.',
        },
        {
          category: 'Contact',
          date: 'April 2026',
          title: 'The formal contact page now consolidates the public channels',
          summary: 'The contact page now brings together 5 direct phone lines, the business email, the WeChat QR code and both the office and laboratory addresses.',
          detail: 'The biggest remaining public decisions are the final homepage slogan, the standardized company-relationship wording, and the live-domain and filing details for launch.',
        },
      ],
      archiveNote:
        'Continuously updating company dynamics and product information.',
      pageCta: {
        eyebrow: 'Keep Browsing',
        title: 'Move from public updates into direct discussion',
        description: 'The news page stays light. The next useful move is usually a business page or the contact page.',
        items: [
          {
            title: 'Explore solutions',
            description: 'Continue into material platforms, sample expression and document logic.',
            action: {
              label: 'Open solutions',
              page: 'solutions',
            },
          },
          {
            title: 'Contact us',
            description: 'Use the public contact channels to continue a discussion around any update shown here.',
            action: {
              label: 'Go to contact',
              page: 'contact',
            },
          },
        ],
        primary: {
          label: 'Contact sales',
          page: 'contact',
        },
        secondary: {
          label: 'View R&D collaboration',
          page: 'technology',
        },
      },
    },
    contact: {
      hero: {
        eyebrow: 'Contact',
        title: 'One formal contact point for documents, samples and project coordination',
        lead:
          'Lead contacts, business email, enterprise WeChat and both addresses in one place',
        supporting:
          'Whether the need is early-stage route review, document requests, sample validation or technical-meeting planning, the fastest next step is to begin with the lead contacts, business email, enterprise WeChat entry and both site addresses.',
        primary: {
          label: 'Review solutions',
          page: 'solutions',
        },
        secondary: {
          label: 'View technology',
          page: 'technology',
        },
        note: 'Standard document requests can usually be arranged within 24 hours after confirmation, with first contact normally answered within one working day.',
      },
      note:
        'Use the public business phone lines, business email, WeChat QR code and the office or laboratory addresses below to begin a formal business conversation.',
      options: [
        {
          title: 'Sample request',
          emphasis: 'Best when the application direction is clear and a specific grade needs validation',
          body: 'Please share the target grade, substrate, surface treatment, process conditions and key performance requirements before sampling is arranged.',
          note: 'The team will judge whether a mature grade fits or whether a more customized route should be discussed.',
        },
        {
          title: 'Technical document request',
          emphasis: 'Best for customers asking for TDS, SDS or a more structured technical summary',
          body: 'Requests work best when tied to a real use case or product family rather than material data in isolation.',
          note: 'Document sharing still follows the public-summary plus inquiry-based detail logic.',
        },
        {
          title: 'Technical meeting and joint validation',
          emphasis: 'Best for complex projects that need faster alignment and technical discussion',
          body: 'For more challenging use cases, a short email or phone summary followed by an online or in-person technical meeting is usually the most effective route.',
          note: 'These projects often benefit from early communication involving both business and technical participants.',
        },
      ],
      summaryTitle: 'Official contact summary',
      summaryDescription:
        'For the first contact, begin with the two lead contacts, the business email, the enterprise WeChat entry and the office or laboratory addresses.',
      detailTitle: 'Full public contact list',
      detailDescription:
        'If the discussion needs to be routed by role, the full set of five public phone numbers remains available below.',
      hubTitle: 'Official contact channels',
      hubDescription:
        'These public channels can be used for sales discussions, document requests, visit coordination and project follow-up.',
      channelLabels: {
        phones: 'Business phones',
        wechat: 'Enterprise WeChat entry',
        address: 'Office / Lab address',
      },
      qrcodeCaption: 'Use the enterprise WeChat entry for project communication, document follow-up and visit coordination.',
      guideTitle: 'Suggested Details for First Contact',
      guideDescription:
        'Preparing the points below helps sales and technical communication become productive more quickly.',
      guideItems: [
        'Company name and contact details',
        'Target product grade or material direction',
        'Substrate type, surface treatment and current process',
        'End-use scenario and the key performance target',
        'Current issue and the key improvement goal',
        'Whether you need TDS / SDS, samples, technical meetings or deeper validation support',
        'Current project stage, expected validation timeline and whether an office or lab visit is needed',
      ],
      guideNote:
        'If not all details are ready yet, a phone call, email or WeChat message can still begin the conversation and the rest can be filled in later.',
    },
  },
}
