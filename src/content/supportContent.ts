import type { HeroContent, Locale, SectionHeaderContent } from './siteContent'

export type UtilityPageKey = 'privacy' | 'terms' | 'copyright' | 'sitemap'

export const utilityPageOrder: UtilityPageKey[] = ['sitemap', 'copyright', 'terms', 'privacy']

export const utilityPageSlugs: Record<UtilityPageKey, string> = {
  privacy: 'privacy',
  terms: 'terms',
  copyright: 'copyright',
  sitemap: 'sitemap',
}

type SupportSection = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

type DocumentPageContent = {
  hero: HeroContent
  detailTitle: string
  detailCopy: string
  intro: SectionHeaderContent
  sections: SupportSection[]
  note: string
}

type SitemapPageContent = {
  hero: HeroContent
  detailTitle: string
  detailCopy: string
  intro: SectionHeaderContent
  publicPagesTitle: string
  supportPagesTitle: string
  contactTitle: string
  routeLabel: string
  note: string
}

export type SupportLocaleContent = {
  privacy: DocumentPageContent
  terms: DocumentPageContent
  copyright: DocumentPageContent
  sitemap: SitemapPageContent
}

export const supportContent: Record<Locale, SupportLocaleContent> = {
  zh: {
    privacy: {
      hero: {
        eyebrow: '隐私声明',
        title: '说明官网如何处理公开沟通信息',
        lead:
          '当前站点以品牌展示、公开资料浏览和联系引导为主，不提供账号注册、在线交易或自动提交到后台的业务系统。',
        supporting:
          '联系表单目前仅用于在本地整理咨询文本并复制到你的剪贴板；后续沟通通常通过电话、邮箱或业务微信继续进行。',
        primary: {
          label: '联系我们',
          page: 'contact',
        },
        secondary: {
          label: '查看研发协同',
          page: 'technology',
        },
        note: '若正式上线后接入备案信息、企业微信或新的数据系统，本页会按真实启用情况同步更新。',
      },
      detailTitle: '当前公开方式',
      detailCopy:
        '先把官网真实会做什么、不会做什么说明白，再逐步补齐更完整的上线合规模块。',
      intro: {
        eyebrow: '版本说明',
        title: '这一版官网的数据处理方式保持克制而明确',
        description:
          '我们优先公开品牌、产品摘要、匿名案例、证照与联系方式，不虚构在线业务流程，也不把不存在的系统能力写进声明。',
      },
      sections: [
        {
          title: '网站当前不会要求账号注册',
          paragraphs: [
            '目前站点不提供会员注册、在线下单、支付、投标或下载中心账号体系。浏览者访问公开页面时，不需要提交身份证号、营业执照扫描件或其他敏感个人信息。',
            '网站的静态访问会由浏览器和网络环境自然产生基础技术信息，例如页面请求、设备类型和访问时间。这类信息主要用于页面正常展示、基础安全和后续运维判断。',
          ],
          bullets: ['当前版本未部署独立会员系统', '当前版本未接入在线支付流程', '当前版本未声明使用广告追踪或营销画像系统'],
        },
        {
          title: '主动联系后，信息主要用于业务沟通',
          paragraphs: [
            '当你通过公开电话、商务邮箱或业务微信联系虹扬时，沟通中提供的姓名、公司、职位、项目方向、样品需求和资料需求，主要用于销售与技术团队跟进项目、安排资料和样品沟通。',
            '若后续项目进入更深层技术或商务流程，双方再根据实际需要通过邮件、会议或项目文件继续确认资料边界。',
          ],
        },
        {
          title: '联系表单当前只做本地整理，不自动入库',
          paragraphs: [
            '站内联系表单目前不会把内容自动发送到服务器，也不会直接写入在线数据库。它的作用是帮助访客在浏览器里整理咨询文本，并复制后自行发送给业务联系人。',
            '因此，是否继续通过邮件、微信或电话提交信息，仍由访客主动决定。建议只填写与当前项目判断相关的必要信息。',
          ],
        },
        {
          title: '更正、撤回或更新方式',
          paragraphs: [
            '如果你已经通过电话、邮箱或微信提交了资料，并希望更正联系人信息、补充项目信息或撤回明显填写错误的内容，可以继续通过公开商务邮箱或电话与我们联系。',
            '如有更新，本页会及时同步。',
          ],
        },
      ],
      note: '当前更需要你们后续补充的，不是模板式隐私条款，而是正式上线时的域名、备案号、企业微信公开方式，以及是否启用真正的资料申请系统。',
    },
    terms: {
      hero: {
        eyebrow: '使用条款',
        title: '说明公开资料的使用边界',
        lead:
          '官网当前提供的是品牌介绍、公开产品摘要、匿名案例、资质证明和正式联系入口，不替代项目协议、完整技术文件或正式报价。',
        supporting:
          '所有型号参数、应用结果和案例数据都以公开摘要形式呈现；具体批次、测试条件、供货条件和交付安排，以后续技术与商务确认结果为准。',
        primary: {
          label: '查看解决方案',
          page: 'solutions',
        },
        secondary: {
          label: '联系我们',
          page: 'contact',
        },
        note: '这一页优先把公开资料的使用规则说清楚，便于客户在正式沟通前建立一致预期。',
      },
      detailTitle: '公开资料规则',
      detailCopy:
        '官网更像一个正式公开入口，而不是替代销售、技术和法务流程的完整业务系统。',
      intro: {
        eyebrow: '使用范围',
        title: '先明确本网站适合做什么，再决定下一步如何沟通',
        description:
          '网站当前最适合承担品牌了解、材料方向初筛、资质查看、案例阅读和联系建立五类任务。',
      },
      sections: [
        {
          title: '公开页面只承担第一轮判断',
          paragraphs: [
            '首页、解决方案、行业应用、研发协同、关于、动态和联系页，均以公开可确认资料为基础，用于帮助访客建立第一轮理解。',
            '如果你需要更完整的 TDS、SDS、样品安排、项目排期、商务报价或联合开发计划，请直接通过正式联系渠道继续沟通。',
          ],
        },
        {
          title: '产品摘要与案例数据属于公开版表达',
          paragraphs: [
            '解决方案页中的参数、应用方向和产品特点，以及应用页中的案例结果，均为公开版摘要信息，旨在帮助判断路线是否匹配。',
            '具体产品性能可能因基材、施工方式、干燥条件、熟化条件、测试方法和批次差异而变化，最终请以双方确认的测试结果和交付文件为准。',
          ],
          bullets: ['公开参数用于前期筛选', '正式测试以项目条件为准', '供货安排以双方商务确认结果为准'],
        },
        {
          title: '访问者应合理使用公开内容',
          paragraphs: [
            '访客可以基于正常业务了解、技术初筛、合规尽调和合作评估浏览网站内容，但不应以任何方式进行误导性转载、恶意抓取、仿冒发布或制造与虹扬存在虚假合作关系的对外表达。',
            '若需要在市场材料、媒体稿件、投标文件或第三方平台中大规模引用官网内容，建议先与虹扬确认公开边界。',
          ],
        },
        {
          title: '网站内容会继续按授权更新',
          paragraphs: [
            '随着后续资料授权范围扩大，网站可能补充实名案例、更多证书、更多型号摘要、备案信息和正式下载资料。',
            '在这些内容正式公开前，当前版本不构成任何超出页面已写明范围的承诺。',
          ],
        },
      ],
      note: '如果后续你们确定要上线 PDF 下载、样品申请或客户案例授权，本页还可以再补一轮更细的下载、引用和项目约束条款。',
    },
    copyright: {
      hero: {
        eyebrow: '版权声明',
        title: '明确文字 图片 与资料的公开使用规则',
        lead:
          '官网中的文字、结构化产品摘要、实拍图片、品牌标识、证照图片和专利公开信息，均用于企业对外展示与业务沟通。',
        supporting:
          '部分证照、专利和数据来自已确认可公开的企业资料。公开浏览和尽调可引用事实信息，但不等于获得商业使用、再加工或商标许可。',
        primary: {
          label: '查看关于虹扬',
          page: 'about',
        },
        secondary: {
          label: '联系我们',
          page: 'contact',
        },
        note: '这份声明优先覆盖当前已上线的文字、图片与证照资料；后续增加下载中心后可继续补充文件级规则。',
      },
      detailTitle: '内容归属',
      detailCopy:
        '网站公开材料可以被看见，但不等于默认开放复制、商用或脱离上下文再发布。',
      intro: {
        eyebrow: '公开内容',
        title: '把品牌、图片、证照和产品摘要的使用边界统一说清楚',
        description:
          '正式公开版需要的不只是内容上线，还要说明哪些内容可以阅读，哪些内容仍然保留在正式沟通流程里。',
      },
      sections: [
        {
          title: '网站文字与结构内容',
          paragraphs: [
            '官网中的品牌介绍、栏目结构、产品摘要、案例表达、合作方式说明和页面文案，由虹扬官网项目整理并用于当前站点展示。',
            '未经书面确认，不建议将整页文案、结构化摘要或专题内容直接复制到其他商业站点、招商页或第三方平台中再次发布。',
          ],
        },
        {
          title: '品牌标识与实拍图片',
          paragraphs: [
            'LOGO、品牌墙、办公室、会议室和实验室等图片素材均来自已确认可长期公开的企业资料，可用于虹扬官网及相关正式品牌展示场景。',
            '除正常业务沟通、媒体报道或经允许的合作材料外，任何第三方不得擅自将这些素材用于冒用品牌、二次售卖或伪造合作关系。',
          ],
        },
        {
          title: '证照、专利与公开参数',
          paragraphs: [
            '营业执照、高新技术企业证书、专利公开信息和产品公开参数，适合用于企业真实性、基础能力和技术方向的公开说明。',
            '这些资料的公开，不意味着专利许可转让、商标授权、配方开放或对项目结果的绝对保证。',
          ],
          bullets: ['公开证明适用于尽调与信任建立', '更深层文件仍应通过正式沟通获取', '涉及转载或引用时应保留来源与上下文'],
        },
        {
          title: '如需授权或反馈',
          paragraphs: [
            '如果你希望引用官网图片、转载部分内容、获取更完整的企业资料包，或发现网站存在内容归属疑问，可通过商务邮箱或公开电话联系虹扬。',
            '网站会在后续正式上线阶段继续补充备案信息、域名信息和更完整的合规说明。',
          ],
        },
      ],
      note: '这一页已经足够支撑当前公开版上线。若后续准备做新闻投放包、代理商素材包或下载中心，再补品牌素材授权细则会更稳。',
    },
    sitemap: {
      hero: {
        eyebrow: '网站地图',
        title: '把正式公开入口整理成一张清单',
        lead:
          '当前站点已经能同时承担品牌展示、材料判断、资质查看、案例阅读和正式联系五类任务。',
        supporting:
          '这张页面帮助首次来访者快速找到页面入口，也方便后续正式上线时补充备案与更多支持页。',
        primary: {
          label: '联系我们',
          page: 'contact',
        },
        secondary: {
          label: '返回首页',
          page: 'home',
        },
        note: '后续若新增下载中心、备案信息页或更多实名内容，这里会继续扩展。',
      },
      detailTitle: '公开入口总览',
      detailCopy:
        '网站地图汇总了所有页面与联系信息，方便快速导航。',
      intro: {
        eyebrow: '入口索引',
        title: '先看页面结构，再决定从哪里进入沟通',
        description:
          '如果你是第一次访问官网，这里可以快速定位品牌介绍、解决方案、案例、资质和联系入口。',
      },
      publicPagesTitle: '核心公开页面',
      supportPagesTitle: '上线支持页面',
      contactTitle: '正式联系入口',
      routeLabel: '页面路径',
      note: '正式上线前最后仍需要你们补充的，主要是域名/备案号、首页最终主副标题、公司关系标准文案，以及是否增加产品实拍与实名案例。',
    },
  },
  en: {
    privacy: {
      hero: {
        eyebrow: 'Privacy',
        title: 'Explain how the site handles public communication data',
        lead:
          'The current website is primarily a public-facing brand, proof and contact portal. It does not provide account registration, online transactions or a backend business system for automatic submissions.',
        supporting:
          'The inquiry form currently only helps visitors assemble inquiry text locally and copy it to the clipboard. Follow-up communication usually continues through phone, email or the business WeChat channel.',
        primary: {
          label: 'Contact us',
          page: 'contact',
        },
        secondary: {
          label: 'View technology',
          page: 'technology',
        },
        note: 'This page will be updated as new information becomes available.',
      },
      detailTitle: 'Current Public Handling',
      detailCopy:
        'It is better to describe the website honestly as it works today than to paste a generic policy that assumes systems that do not exist yet.',
      intro: {
        eyebrow: 'Current Version',
        title: 'The current site keeps data handling simple and explicit',
        description:
          'The website presents brand information, product summaries, case studies, qualifications and direct contact paths.',
      },
      sections: [
        {
          title: 'No account system is required in this version',
          paragraphs: [
            'The site does not currently offer member registration, online ordering, payment, tender workflows or an authenticated download-center account system. Visitors do not need to submit sensitive identity documents to browse the public pages.',
            'Routine website access may still generate basic technical information through the browser and network environment, such as request timing, device type and page access data, mainly so the pages can render normally and be maintained safely.',
          ],
          bullets: ['No member system is currently deployed', 'No online payment flow is currently connected', 'No dedicated ad-tracking or profiling system is declared in this version'],
        },
        {
          title: 'Contact information is mainly used for project follow-up',
          paragraphs: [
            'If a visitor reaches Hope Young through the public phone numbers, business email or business WeChat, the name, company, role, application background, sample need and document request shared in that discussion are mainly used for sales and technical follow-up.',
            'If the discussion moves into deeper technical or commercial work, the parties can then confirm a more detailed document boundary through email, meetings or project files as needed.',
          ],
        },
        {
          title: 'The inquiry form only prepares text locally',
          paragraphs: [
            'The current contact form does not automatically send content to a server and does not directly write into an online database. Its current purpose is to help the visitor structure inquiry text inside the browser and copy it for manual sending.',
            'That means the visitor still decides whether to continue through phone, email or WeChat. Only the minimum business information needed for the current discussion should be shared.',
          ],
        },
        {
          title: 'Corrections and updates',
          paragraphs: [
            'If information has already been shared through phone, email or WeChat and needs to be corrected, supplemented or clarified, visitors can continue through the public business email or phone channels.',
            'This page is updated as new features and data sources are added.',
          ],
        },
      ],
      note: 'The biggest missing launch inputs are still the real domain and filing details, the final public WeChat setup and whether a true document-request workflow will be activated later.',
    },
    terms: {
      hero: {
        eyebrow: 'Terms',
        title: 'Set the usage boundary for the public materials',
        lead:
          'The website provides brand introduction, product summaries, case studies, qualifications and contact information. Detailed technical documents and quotations are provided through direct communication.',
        supporting:
          'All grade data, outcomes and case metrics appear here as public summaries only. Batch-specific values, testing conditions, supply terms and delivery arrangements still depend on later technical and commercial confirmation.',
        primary: {
          label: 'Explore solutions',
          page: 'solutions',
        },
        secondary: {
          label: 'Contact us',
          page: 'contact',
        },
        note: 'This page mainly aligns expectations before deeper project communication starts.',
      },
      detailTitle: 'Public Use Rules',
      detailCopy:
        'The website serves as the company online presence and does not replace formal business agreements.',
      intro: {
        eyebrow: 'Use Scope',
        title: 'First define what the site is for, then move into deeper discussion',
        description:
          'At the current stage the website is best used for brand understanding, early route screening, proof review, case reading and direct contact building.',
      },
      sections: [
        {
          title: 'Public pages support the first round only',
          paragraphs: [
            'The homepage, solutions, applications, technology, about, updates and contact pages are built on materials that are already confirmed for public release and are meant to support first-round understanding.',
            'For TDS, SDS, samples, quotations or joint development plans, please contact us directly.',
          ],
        },
        {
          title: 'Product and case data are public-summary expressions',
          paragraphs: [
            'The parameters, application direction and highlights shown on the solutions page, together with the case outcomes shown on the applications page, are public-summary expressions meant to help route judgement.',
            'Actual product performance may vary with substrate, coating method, drying conditions, curing conditions, test methods and batch differences, so final judgement should follow mutually confirmed project files and testing results.',
          ],
          bullets: ['Public parameters support early screening', 'Formal testing follows real project conditions', 'Supply commitments depend on later commercial confirmation'],
        },
        {
          title: 'Visitors should use the materials reasonably',
          paragraphs: [
            'Visitors may browse the public information for normal business understanding, technical pre-screening, compliance review and cooperation evaluation, but should not use the content for misleading republication, malicious scraping, impersonation or false association with Hope Young.',
            'If large portions of the site need to be quoted inside marketing materials, media stories, bidding files or third-party platforms, it is better to confirm the public boundary with Hope Young first.',
          ],
        },
        {
          title: 'The site will continue to change with approval scope',
          paragraphs: [
            'As the approval scope expands, the website may later add named cases, more certifications, more product summaries, filing information and downloadable documents.',
            'The content shown represents currently available information.',
          ],
        },
      ],
      note: 'If downloadable PDFs, sample-request tools or approved named cases are added later, this page can be extended with tighter rules around downloads, quotations and project use.',
    },
    copyright: {
      hero: {
        eyebrow: 'Copyright',
        title: 'Clarify the use rules for text, images and public files',
        lead:
          'The text, structured product summaries, photography, brand marks, credential images and patent information on the site are published for public company presentation and business communication.',
        supporting:
          'Some certificates, patent records and data points come from company materials that have already been cleared for public release. Public viewing and due diligence do not mean commercial reuse, derivative reuse or trademark permission.',
        primary: {
          label: 'View about',
          page: 'about',
        },
        secondary: {
          label: 'Contact us',
          page: 'contact',
        },
        note: 'This statement is designed for the current public site. A later download center or media kit can add more detailed file-level rules.',
      },
      detailTitle: 'Ownership Boundary',
      detailCopy:
        'Public visibility does not mean the materials are automatically open for copying, resale or out-of-context republication.',
      intro: {
        eyebrow: 'Public Materials',
        title: 'Unify the usage boundary for brand, imagery, proof files and product summaries',
        description:
          'The website clearly presents publicly available information and guides visitors to direct contact for detailed technical discussions.',
      },
      sections: [
        {
          title: 'Website writing and structured content',
          paragraphs: [
            'The brand introduction, page structure, product summaries, case expression and collaboration copy shown on the website were prepared for the Hope Young public portal.',
            'Without written confirmation, it is not recommended to copy full-page text, structured summaries or themed content into other commercial websites, campaign pages or third-party platforms for republication.',
          ],
        },
        {
          title: 'Brand marks and company imagery',
          paragraphs: [
            'The logo, brand-wall imagery, office photos, meeting-room scenes and laboratory scenes all come from company materials that were confirmed as safe for long-term public use on the website and related official presentation scenarios.',
            'Except for normal business communication, reporting or approved collaboration materials, third parties should not use them for brand impersonation, resale or false claims of partnership.',
          ],
        },
        {
          title: 'Credentials, patents and public technical parameters',
          paragraphs: [
            'The business license, high-tech certificate, public patent information and public technical parameters are appropriate for explaining entity authenticity, baseline capability and technical direction.',
            'Their publication does not imply patent licensing, trademark transfer, formulation disclosure or an absolute guarantee of project outcomes.',
          ],
          bullets: ['Public proof is suitable for due diligence and trust building', 'Deeper files should still be requested through direct communication', 'Quoted or reposted facts should keep their source and context'],
        },
        {
          title: 'Requests and feedback',
          paragraphs: [
            'If someone wants to quote website imagery, republish part of the content, request a fuller company profile pack or raise a question about ownership, the recommended path is the public business email or phone line.',
            'The website will continue to add filing, domain and broader compliance information as the launch version matures.',
          ],
        },
      ],
      note: 'Sufficient for current launch. Additional media and download resources may be added in the future.',
    },
    sitemap: {
      hero: {
        eyebrow: 'Sitemap',
        title: 'Organize the public site into one browsable index',
        lead:
          'The current site can already support brand presentation, material judgement, proof review, case reading and direct business contact in one public structure.',
        supporting:
          'This page helps visitors navigate the website and find the information they need.',
        primary: {
          label: 'Contact us',
          page: 'contact',
        },
        secondary: {
          label: 'Back to home',
          page: 'home',
        },
        note: 'If the launch later adds filing records, download pages or more approved named content, this index should expand with them.',
      },
      detailTitle: 'Public Entry Index',
      detailCopy:
        'The sitemap gathers all pages and contact information for easy navigation.',
      intro: {
        eyebrow: 'Index',
        title: 'See the structure first, then choose the best entry point',
        description:
          'For a first visit, this page quickly points to brand introduction, solutions, cases, proof modules and direct contact routes.',
      },
      publicPagesTitle: 'Core Public Pages',
      supportPagesTitle: 'Launch Support Pages',
      contactTitle: 'Direct Contact Entry',
      routeLabel: 'Route',
      note: 'The main missing launch inputs are still the real domain and filing details, the final homepage slogan, the standardized company-relationship wording, and whether more product photography or named cases will be added.',
    },
  },
}
