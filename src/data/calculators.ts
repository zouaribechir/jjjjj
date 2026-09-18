import { CalculatorMeta, Category } from '../types';

export const CATEGORIES: Category[] = [
  'All',
  'YouTube',
  'TikTok',
  'Instagram',
  'Affiliate',
  'Business',
  'Social Media'
];

export const CALCULATORS: CalculatorMeta[] = [
  {
    id: 'youtube-money-calculator',
    name: 'YouTube Money Calculator',
    slug: '/youtube-money-calculator',
    category: 'YouTube',
    isPopular: true,
    icon: 'Youtube',
    description: 'Estimate YouTube earnings from views and RPM across daily, monthly, and annual timeframes.',
    keywords: ['youtube', 'money', 'revenue', 'earnings', 'rpm', 'views', 'ad revenue', 'creator income'],
    shortIntro: 'Estimate your projected YouTube channel earnings based on your monthly video views and RPM rate.',
    quickAnswer: 'A channel generating 500,000 monthly views with an RPM of $4.20 earns an estimated $2,100 per month or approximately $25,200 per year.',
    howItWorks: [
      'Enter your anticipated or historical monthly video views across all uploads.',
      'Provide your average RPM (Revenue Per Mille / 1,000 views) based on your YouTube Studio analytics.',
      'Review your calculated daily average, total monthly revenue, and projected annual earnings.'
    ],
    formula: {
      display: 'Estimated Monthly Revenue = (Monthly Views ÷ 1,000) × RPM',
      variables: [
        { name: 'Monthly Views', description: 'Total monetized playback views received during the month.' },
        { name: 'RPM', description: 'Revenue per 1,000 views calculated after YouTube\'s revenue share; can reflect multiple revenue sources.' },
        { name: 'Daily Average', description: 'Monthly Revenue divided by the days in the month (e.g. 30).' },
        { name: 'Yearly Estimate', description: 'Monthly Revenue multiplied by 12 months.' }
      ]
    },
    workedExample: {
      inputs: { 'Monthly Views': '500,000', 'RPM': '$4.20', 'Days per Month': '30' },
      calculationSteps: [
        'Views in thousands: 500,000 ÷ 1,000 = 500',
        'Monthly Revenue: 500 × $4.20 = $2,100.00',
        'Daily Average: $2,100.00 ÷ 30 = $70.00 / day',
        'Annual Projection: $2,100.00 × 12 = $25,200.00 / year'
      ],
      result: '$2,100.00 / month'
    },
    resultMeaning: 'This projection reflects your potential gross AdSense/ad revenue share. It excludes sponsorships, channel memberships, Super Chats, and affiliate marketing.',
    importantNotes: [
      'These figures are estimates, not guaranteed earnings. Actual creator revenue varies based on niche, viewer location, seasonality, and video length.',
      'RPM measures net revenue per 1,000 views after YouTube\'s revenue share. It differs from advertiser CPM and can reflect multiple channel revenue sources.',
      'We do not enforce fixed benchmark assumptions because RPM varies widely across audience geographies, niches, and seasonal advertiser demand.'
    ],
    faqs: [
      {
        question: 'What is the difference between YouTube RPM and CPM?',
        answer: 'CPM (Cost Per Mille) is what advertisers pay to show 1,000 ad impressions before YouTube takes its 45% cut. RPM (Revenue Per Mille) is the net revenue a creator earns per 1,000 total video views after YouTube\'s revenue share, and can encompass multiple revenue streams including ads, memberships, and YouTube Premium.'
      },
      {
        question: 'How do I find my real RPM in YouTube Studio?',
        answer: 'Open YouTube Studio, go to Analytics, click the Revenue tab, and look at the "RPM" metric card. You can filter by 28 days, 90 days, or specific videos.'
      },
      {
        question: 'Does YouTube pay for every single view?',
        answer: 'No. YouTube only monetizes playback sessions where an advertisement was actually served and viewed, or when a YouTube Premium member watches your content. Viewers with ad-blockers or unfilled ad inventories generate zero ad revenue.'
      }
    ],
    relatedSlugs: ['/youtube-rpm-calculator', '/youtube-cpm-calculator', '/ad-revenue-calculator', '/video-roi-calculator']
  },
  {
    id: 'youtube-rpm-calculator',
    name: 'YouTube RPM Calculator',
    slug: '/youtube-rpm-calculator',
    category: 'YouTube',
    isPopular: true,
    icon: 'BarChart2',
    description: 'Calculate your exact YouTube Revenue Per Mille (RPM) from total revenue and views.',
    keywords: ['rpm', 'youtube rpm', 'revenue per thousand', 'youtube analytics', 'youtube earnings formula'],
    shortIntro: 'Determine how much money your YouTube channel truly generates for every 1,000 views.',
    quickAnswer: 'If you earned $2,100 from 500,000 views, your YouTube RPM is exactly $4.20 per 1,000 views.',
    howItWorks: [
      'Input your total finalized YouTube earnings for the period.',
      'Input the total video views earned during that exact same timeframe.',
      'The calculator computes your exact take-home revenue per 1,000 views.'
    ],
    formula: {
      display: 'RPM = (Total Revenue ÷ Total Views) × 1,000',
      variables: [
        { name: 'Revenue', description: 'Total net earnings received (must be ≥ 0).' },
        { name: 'Views', description: 'Total views recorded in that period (must be > 0).' }
      ]
    },
    workedExample: {
      inputs: { 'Revenue': '$2,100.00', 'Views': '500,000' },
      calculationSteps: [
        'Divide revenue by views: $2,100 ÷ 500,000 = $0.0042 per view',
        'Multiply by 1,000: $0.0042 × 1,000 = $4.20'
      ],
      result: '$4.20 RPM'
    },
    resultMeaning: 'Your RPM represents your actual monetization efficiency. Increasing video length past 8 minutes (allowing mid-rolls) and targeting higher-paying geographic regions can increase your RPM.',
    importantNotes: [
      'Views must be greater than zero to avoid division errors.',
      'Revenue cannot be negative.',
      'RPM includes all YouTube revenue sources (AdSense, YouTube Premium, Super Thanks, Memberships) if tracked collectively in YouTube Studio.'
    ],
    faqs: [
      {
        question: 'Why is my RPM lower than my CPM?',
        answer: 'RPM measures revenue per 1,000 total views (including unmonetized views) and is calculated after YouTube\'s revenue share, encompassing ads and other channel revenue. CPM measures what advertisers pay per 1,000 ad impressions before platform splits and view filtering.'
      },
      {
        question: 'What is considered a good YouTube RPM?',
        answer: 'RPM varies widely based on content category, audience geography, viewer purchasing intent, video duration, and seasonal advertiser demand. Rather than relying on fixed ranges, creators should track their own historical RPM trends in YouTube Studio.'
      }
    ],
    relatedSlugs: ['/youtube-money-calculator', '/youtube-cpm-calculator', '/ad-revenue-calculator']
  },
  {
    id: 'youtube-cpm-calculator',
    name: 'YouTube CPM Calculator',
    slug: '/youtube-cpm-calculator',
    category: 'YouTube',
    isPopular: false,
    icon: 'TrendingUp',
    description: 'Calculate advertising Cost Per Mille (CPM) from total ad spend and ad impressions.',
    keywords: ['cpm', 'youtube cpm', 'cost per mille', 'advertising cost', 'ad impressions'],
    shortIntro: 'Compute the cost an advertiser pays for 1,000 commercial impressions on YouTube.',
    quickAnswer: 'An advertiser paying $1,500 for 250,000 ad impressions has a CPM of $6.00.',
    howItWorks: [
      'Enter the advertising cost or total ad budget.',
      'Enter the number of ad impressions delivered.',
      'Calculate the exact cost per 1,000 impressions.'
    ],
    formula: {
      display: 'CPM = (Advertising Cost ÷ Ad Impressions) × 1,000',
      variables: [
        { name: 'Advertising Cost', description: 'Total spend committed by the sponsor or advertiser.' },
        { name: 'Ad Impressions', description: 'Total times the advertisement was loaded/rendered.' }
      ]
    },
    workedExample: {
      inputs: { 'Advertising Cost': '$1,500.00', 'Ad Impressions': '250,000' },
      calculationSteps: [
        'Divide total cost by impressions: $1,500 ÷ 250,000 = $0.006 per impression',
        'Multiply by 1,000: $0.006 × 1,000 = $6.00 CPM'
      ],
      result: '$6.00 CPM'
    },
    resultMeaning: 'CPM is an advertiser-side metric showing purchase cost per 1,000 impressions. It should not be confused with creator take-home pay.',
    importantNotes: [
      'CPM does NOT represent creator take-home pay. YouTube deducts 45% for video ads and 30% for Shorts ads before distributing payouts.',
      'Ad impressions differ from video views because a single 15-minute video can serve multiple ad impressions (pre-roll, mid-roll), while a short video might serve zero.'
    ],
    faqs: [
      {
        question: 'How does CPM relate to my payout?',
        answer: 'YouTube pays creators 55% of the gross net ad revenue generated from long-form videos. If an advertiser pays a $10 CPM for 1,000 impressions, the creator payout for those impressions is roughly $5.50 before adjusting for unmonetized views.'
      }
    ],
    relatedSlugs: ['/youtube-rpm-calculator', '/youtube-money-calculator', '/ad-revenue-calculator']
  },
  {
    id: 'tiktok-money-calculator',
    name: 'TikTok Money Calculator',
    slug: '/tiktok-money-calculator',
    category: 'TikTok',
    isPopular: true,
    icon: 'Video',
    description: 'Estimate total monthly and annual TikTok earnings across platform rewards, sponsorships, and affiliate links.',
    keywords: ['tiktok', 'tiktok money', 'creator rewards program', 'tiktok earnings', 'tiktok views'],
    shortIntro: 'A flexible multi-revenue estimator for TikTok creators combining Creator Rewards, brand sponsorships, and affiliate commissions.',
    quickAnswer: 'A creator with 1,000,000 monthly views ($0.80 per 1k views), $1,500 in brand deals, and $400 in affiliate sales earns an estimated $2,700 per month ($32,400/year).',
    howItWorks: [
      'Enter your average monthly video views and your estimated platform payout rate per 1,000 views.',
      'Add your monthly brand deal sponsorships, affiliate commissions, and other monetization streams.',
      'Review your comprehensive monthly and annual breakdown.'
    ],
    formula: {
      display: 'Total Monthly Income = ((Views ÷ 1,000) × RPM) + Brand Deals + Affiliate + Other Income',
      variables: [
        { name: 'Views & Platform Rate', description: 'Qualified views multiplied by your Creator Rewards Program RPM.' },
        { name: 'Brand Deals', description: 'Average monthly sponsorship and partnership retainers.' },
        { name: 'Affiliate & Other', description: 'Commissions from TikTok Shop, bio links, and digital products.' }
      ]
    },
    workedExample: {
      inputs: { 'Monthly Views': '1,000,000', 'Rate per 1k Views': '$0.80', 'Brand Deals': '$1,500', 'Affiliate': '$400' },
      calculationSteps: [
        'Platform reward: (1,000,000 ÷ 1,000) × $0.80 = $800.00',
        'Brand deal revenue: $1,500.00',
        'Affiliate income: $400.00',
        'Total Monthly Income: $800 + $1,500 + $400 = $2,700.00',
        'Annualized: $2,700.00 × 12 = $32,400.00 / year'
      ],
      result: '$2,700.00 / month'
    },
    resultMeaning: 'Unlike YouTube where AdSense is often primary, top-earning TikTok creators often make 70%+ of their income through direct sponsorships and affiliate sales.',
    importantNotes: [
      'Platform payouts and creator monetization programs vary by eligibility, location, program terms, and content performance. Use your own historical earnings when available.',
      'Do not rely on unsupported fixed TikTok payout claims; videos under 60 seconds are generally not eligible for the Creator Rewards Program.',
      'Audience location and watch completion rates significantly influence platform reward rates.'
    ],
    faqs: [
      {
        question: 'How does TikTok Creator Rewards calculate eligible views?',
        answer: 'Only views longer than 5 seconds from unique users in the "For You" feed on original videos longer than 1 minute count toward payout calculations.'
      },
      {
        question: 'Why do most TikTok creators earn more from brand deals than views?',
        answer: 'Platform payouts for qualified video views are determined by dynamic program formulas that fluctuate based on viewer location, completion rates, and search relevance. Because view-based payouts can vary, many creators diversify their income with direct brand partnerships, affiliate programs, and creator commerce.'
      }
    ],
    relatedSlugs: ['/tiktok-engagement-rate-calculator', '/sponsorship-calculator', '/affiliate-commission-calculator']
  },
  {
    id: 'tiktok-engagement-rate-calculator',
    name: 'TikTok Engagement Rate Calculator',
    slug: '/tiktok-engagement-rate-calculator',
    category: 'TikTok',
    isPopular: false,
    icon: 'Heart',
    description: 'Calculate your TikTok engagement rate by views based on likes, comments, and shares.',
    keywords: ['tiktok engagement', 'engagement rate', 'tiktok likes', 'tiktok shares', 'tiktok performance'],
    shortIntro: 'Measure audience interaction on TikTok by comparing total interactions against video views.',
    quickAnswer: 'A video with 50,000 views, 4,000 likes, 300 comments, and 200 shares has an engagement rate of 9.00%.',
    howItWorks: [
      'Enter total likes, comments, and shares received on the video or across your profile.',
      'Enter total video views.',
      'Calculate total interactions and the exact engagement percentage.'
    ],
    formula: {
      display: 'Engagement Rate (%) = ((Likes + Comments + Shares) ÷ Views) × 100',
      variables: [
        { name: 'Total Engagements', description: 'Sum of Likes + Comments + Shares.' },
        { name: 'Views', description: 'Total video views (must be greater than zero).' }
      ]
    },
    workedExample: {
      inputs: { 'Likes': '4,000', 'Comments': '300', 'Shares': '200', 'Views': '50,000' },
      calculationSteps: [
        'Sum engagements: 4,000 + 300 + 200 = 4,500 total interactions',
        'Divide by views: 4,500 ÷ 50,000 = 0.09',
        'Multiply by 100: 0.09 × 100 = 9.00%'
      ],
      result: '9.00% Engagement'
    },
    resultMeaning: 'Brands analyze TikTok engagement by views because the algorithm distributes videos primarily to non-followers via the For You Page.',
    importantNotes: [
      'Views must be greater than zero to avoid division by zero.',
      'Unlike Instagram where engagement is commonly calculated against follower counts, TikTok engagement is industry-standard measured against views.',
      'Saves can also be included in total engagements if your analytics report them.'
    ],
    faqs: [
      {
        question: 'What is a good TikTok engagement rate?',
        answer: 'Engagement rates vary based on account size, content style, and distribution. Because TikTok distributes content broadly to non-followers via the For You page, engagement rates on viral videos often differ from regular community posts.'
      }
    ],
    relatedSlugs: ['/tiktok-money-calculator', '/instagram-engagement-rate-calculator', '/sponsorship-calculator']
  },
  {
    id: 'instagram-engagement-rate-calculator',
    name: 'Instagram Engagement Rate Calculator',
    slug: '/instagram-engagement-rate-calculator',
    category: 'Instagram',
    isPopular: true,
    icon: 'Instagram',
    description: 'Calculate Instagram engagement rate based on likes, comments, saves, shares, and follower count.',
    keywords: ['instagram', 'instagram engagement rate', 'influencer rates', 'instagram likes', 'saves and shares'],
    shortIntro: 'Evaluate your true Instagram influence and community interaction rate per post.',
    quickAnswer: 'An account with 25,000 followers getting 1,200 likes, 80 comments, 150 saves, and 70 shares achieves a 6.00% engagement rate.',
    howItWorks: [
      'Input the interactions for a post or average across recent posts: likes, comments, saves, and shares.',
      'Input your total follower count.',
      'Calculate total interactions and the official engagement rate percentage.'
    ],
    formula: {
      display: 'Engagement Rate (%) = ((Likes + Comments + Saves + Shares) ÷ Followers) × 100',
      variables: [
        { name: 'Total Engagements', description: 'Likes + Comments + Saves + Shares.' },
        { name: 'Followers', description: 'Total account followers at post time.' }
      ]
    },
    workedExample: {
      inputs: { 'Likes': '1,200', 'Comments': '80', 'Saves': '150', 'Shares': '70', 'Followers': '25,000' },
      calculationSteps: [
        'Total engagements: 1,200 + 80 + 150 + 70 = 1,500',
        'Divide by followers: 1,500 ÷ 25,000 = 0.06',
        'Convert to percentage: 0.06 × 100 = 6.00%'
      ],
      result: '6.00% Engagement'
    },
    resultMeaning: 'High saves and shares signal high-value educational or entertaining content to Instagram\'s recommendation algorithm.',
    importantNotes: [
      'Different platforms and reporting agencies use different engagement-rate formulas (e.g., engagement by reach vs. engagement by follower count).',
      'Followers must be greater than zero.',
      'Saves and shares are private to creator Professional Dashboards but are highly valued by sponsoring brands.'
    ],
    faqs: [
      {
        question: 'Should I calculate engagement by followers or by reach?',
        answer: 'Calculating by Followers is the most common convention for public media kits because follower counts are publicly visible. Calculating by Reach is used internally by creators to assess how effectively a post engaged the accounts that actually viewed it.'
      },
      {
        question: 'What is an average Instagram engagement rate?',
        answer: 'Engagement rates depend on follower scale, niche, post format (Reels, carousels, or static photos), and audience relationship. Accounts with larger follower bases typically observe lower percentage engagement due to broader audience reach.'
      }
    ],
    relatedSlugs: ['/tiktok-engagement-rate-calculator', '/sponsorship-calculator', '/video-roi-calculator']
  },
  {
    id: 'affiliate-commission-calculator',
    name: 'Affiliate Commission Calculator',
    slug: '/affiliate-commission-calculator',
    category: 'Affiliate',
    isPopular: true,
    icon: 'Percent',
    description: 'Calculate gross sales revenue and net affiliate commissions based on conversion volumes and commission tiers.',
    keywords: ['affiliate', 'commission', 'affiliate marketing', 'average order value', 'gross sales'],
    shortIntro: 'Estimate affiliate marketing commissions from referred orders, average checkout value, and commission percentage.',
    quickAnswer: '100 referred sales with an average order value of $80 and a 15% commission rate yields $8,000 in gross sales and $1,200 in net commissions.',
    howItWorks: [
      'Enter the expected number of referred customer sales.',
      'Enter the store\'s Average Order Value (AOV).',
      'Enter your contracted affiliate commission rate percentage.',
      'Optionally specify duration to see annual earnings projection.'
    ],
    formula: {
      display: 'Gross Sales = Sales × AOV | Commission = Gross Sales × (Commission Rate ÷ 100)',
      variables: [
        { name: 'Sales', description: 'Total referred paying purchases.' },
        { name: 'AOV', description: 'Average monetary value per completed order.' },
        { name: 'Commission Rate', description: 'Agreed payout percentage per sale.' }
      ]
    },
    workedExample: {
      inputs: { 'Sales': '100', 'Average Order Value': '$80.00', 'Commission Rate': '15%' },
      calculationSteps: [
        'Gross Sales: 100 × $80.00 = $8,000.00',
        'Commission: $8,000.00 × 0.15 = $1,200.00',
        'Annual Projection: $1,200.00 × 12 = $14,400.00'
      ],
      result: '$1,200.00 Net Commission'
    },
    resultMeaning: 'Affiliate earnings depend on conversion rates, traffic volume, and agreed merchant commission terms. Rates vary considerably between physical retail goods, digital media, and subscription software.',
    importantNotes: [
      'Refund rates and payment processing fees may reduce finalized payouts depending on affiliate network terms.',
      'Calculations assume a percentage-based commission structure rather than flat pay-per-lead (CPL).'
    ],
    faqs: [
      {
        question: 'What is a typical affiliate commission rate?',
        answer: 'Commission structures depend on the merchant and product type. Physical retail products often have lower percentage margins, while digital products, courses, or recurring software subscriptions may offer different percentage tiers or recurring terms.'
      }
    ],
    relatedSlugs: ['/profit-margin-calculator', '/video-roi-calculator', '/ad-revenue-calculator']
  },
  {
    id: 'profit-margin-calculator',
    name: 'Profit Margin Calculator',
    slug: '/profit-margin-calculator',
    category: 'Business',
    isPopular: true,
    icon: 'DollarSign',
    description: 'Calculate net profit and profit margin percentage from total revenue and business operating costs.',
    keywords: ['profit margin', 'gross profit', 'net profit', 'business finance', 'creator business'],
    shortIntro: 'Determine your true profitability by measuring net profit and margin percentages against operational costs.',
    quickAnswer: 'On $10,000 in creator revenue with $3,500 in total expenses, your profit is $6,500 with a 65.00% profit margin.',
    howItWorks: [
      'Enter your total revenue earned from all business activities.',
      'Enter your total expenses (software, editing, equipment, advertising).',
      'The calculator computes your exact profit and profit margin.'
    ],
    formula: {
      display: 'Profit = Revenue − Cost | Profit Margin (%) = (Profit ÷ Revenue) × 100',
      variables: [
        { name: 'Revenue', description: 'Total gross income generated.' },
        { name: 'Cost', description: 'Total direct and operating costs.' },
        { name: 'Profit', description: 'Remaining cash after paying all costs.' }
      ]
    },
    workedExample: {
      inputs: { 'Revenue': '$10,000.00', 'Cost': '$3,500.00' },
      calculationSteps: [
        'Net Profit: $10,000 − $3,500 = $6,500.00',
        'Margin ratio: $6,500 ÷ $10,000 = 0.65',
        'Margin percentage: 0.65 × 100 = 65.00%'
      ],
      result: '$6,500.00 (65.00% Margin)'
    },
    resultMeaning: 'Profit margins vary depending on creator cost structures, such as team size, studio overhead, software subscriptions, and whether editing or thumbnail production is outsourced.',
    importantNotes: [
      'Gross Profit Margin deducts only Cost of Goods Sold (COGS). Net Profit Margin deducts all taxes, software, team wages, and overhead.',
      'Revenue must be greater than zero to compute margin percentage.'
    ],
    faqs: [
      {
        question: 'What is the difference between markup and margin?',
        answer: 'Margin is profit divided by revenue. Markup is profit divided by cost. If an item costs $50 and sells for $100, the margin is 50%, but the markup is 100%.'
      }
    ],
    relatedSlugs: ['/video-roi-calculator', '/affiliate-commission-calculator', '/sponsorship-calculator']
  },
  {
    id: 'ad-revenue-calculator',
    name: 'Ad Revenue Calculator',
    slug: '/ad-revenue-calculator',
    category: 'Business',
    isPopular: false,
    icon: 'Radio',
    description: 'Calculate expected advertising revenue from website impressions, podcast listens, or newsletter opens and CPM.',
    keywords: ['ad revenue', 'impressions', 'cpm calculator', 'website ads', 'newsletter ads'],
    shortIntro: 'Estimate digital ad earnings for blogs, podcasts, newsletters, and video portals from impressions and CPM rates.',
    quickAnswer: 'Delivering 200,000 ad impressions at a $12 CPM generates an estimated $2,400 in gross advertising revenue.',
    howItWorks: [
      'Enter expected total ad impressions or page views with ads.',
      'Enter the agreed or expected CPM (Cost Per 1,000 Impressions).',
      'Receive instant calculated advertising income.'
    ],
    formula: {
      display: 'Estimated Ad Revenue = (Ad Impressions ÷ 1,000) × CPM',
      variables: [
        { name: 'Ad Impressions', description: 'Total times the advertisement is rendered to users.' },
        { name: 'CPM', description: 'Cost or earnings per thousand impressions.' }
      ]
    },
    workedExample: {
      inputs: { 'Ad Impressions': '200,000', 'CPM': '$12.00' },
      calculationSteps: [
        'Impressions in thousands: 200,000 ÷ 1,000 = 200',
        'Revenue: 200 × $12.00 = $2,400.00'
      ],
      result: '$2,400.00'
    },
    resultMeaning: 'This model applies to programmatic networks (Google AdSense, Mediavine, Raptive), podcast host-read ad slots, and newsletter sponsorships.',
    importantNotes: [
      'Clearly state this is an estimate and actual advertising revenue can differ based on fill rates, geo-distribution, and ad blockers.',
      'Fill rate measures the percentage of available ad slots that actually get bought by advertisers.'
    ],
    faqs: [
      {
        question: 'Why does actual ad revenue differ from calculator output?',
        answer: 'Not all page visits or audio streams serve an ad. If your ad fill rate is only 80%, your actual impressions will be 20% lower than your raw traffic numbers.'
      }
    ],
    relatedSlugs: ['/youtube-cpm-calculator', '/youtube-money-calculator', '/video-roi-calculator']
  },
  {
    id: 'subscriber-growth-calculator',
    name: 'Subscriber Growth Calculator',
    slug: '/subscriber-growth-calculator',
    category: 'Social Media',
    isPopular: false,
    icon: 'Users',
    description: 'Forecast future follower or subscriber milestone dates based on current audience and monthly growth velocity.',
    keywords: ['subscriber growth', 'youtube subscribers', 'follower projection', 'growth calculator', 'audience growth'],
    shortIntro: 'Model realistic subscriber milestone projections based on your current audience and monthly net additions.',
    quickAnswer: 'Starting with 15,000 subscribers and adding 1,200 new subscribers per month reaches 29,400 subscribers in 12 months (14,400 new members).',
    howItWorks: [
      'Input your current channel or account subscriber count.',
      'Input your realistic average net subscriber growth per month.',
      'Specify the projection period in months.',
      'Calculate total projected subscribers and new additions.'
    ],
    formula: {
      display: 'Future Subscribers = Current Subscribers + (Average Monthly Growth × Months)',
      variables: [
        { name: 'Current Subscribers', description: 'Existing base of subscribers or followers.' },
        { name: 'Average Monthly Growth', description: 'Net additions minus unfollows/unsubscribes.' },
        { name: 'Months', description: 'Target projection timeframe.' }
      ]
    },
    workedExample: {
      inputs: { 'Current Subscribers': '15,000', 'Monthly Growth': '1,200', 'Months': '12' },
      calculationSteps: [
        'Total new subscribers: 1,200 × 12 = 14,400',
        'Future total: 15,000 + 14,400 = 29,400 subscribers'
      ],
      result: '29,400 Subscribers'
    },
    resultMeaning: 'Linear forecasting provides a grounded baseline. Real creator growth is often punctuated by viral breakout videos followed by steady compound momentum.',
    importantNotes: [
      'We do not use speculative or fake AI prediction models. This calculator provides transparent linear projection grounded strictly in your input velocity.',
      'Net growth must account for natural churn (people who unsubscribe).'
    ],
    faqs: [
      {
        question: 'How do I calculate my average monthly growth rate?',
        answer: 'Subtract your follower count from 3 months ago from your current count, then divide by 3. This smooths out short-term fluctuations.'
      }
    ],
    relatedSlugs: ['/youtube-money-calculator', '/tiktok-money-calculator', '/sponsorship-calculator']
  },
  {
    id: 'video-roi-calculator',
    name: 'Video ROI Calculator',
    slug: '/video-roi-calculator',
    category: 'Business',
    isPopular: false,
    icon: 'PlayCircle',
    description: 'Calculate net profit and Return on Investment (ROI %) for video productions, content campaigns, and equipment investments.',
    keywords: ['video roi', 'content roi', 'return on investment', 'production cost', 'creator profit'],
    shortIntro: 'Assess the commercial return of producing a video or content campaign against its direct production costs.',
    quickAnswer: 'A video generating $1,200 in combined revenue with $400 in production costs delivers $800 profit and a 200.00% ROI.',
    howItWorks: [
      'Input the total direct revenue attributed to the video (AdSense, sponsor fee, affiliate sales).',
      'Input the total video production expenses (editing fees, thumbnail design, props, gear rental).',
      'Calculate net profit and overall percentage Return on Investment.'
    ],
    formula: {
      display: 'Profit = Revenue − Cost | ROI (%) = ((Revenue − Cost) ÷ Cost) × 100',
      variables: [
        { name: 'Revenue', description: 'Total monetary returns generated by the video.' },
        { name: 'Cost', description: 'Total production and promotion expenses.' }
      ]
    },
    workedExample: {
      inputs: { 'Video Revenue': '$1,200.00', 'Video Cost': '$400.00' },
      calculationSteps: [
        'Net Profit: $1,200 − $400 = $800.00',
        'ROI fraction: $800 ÷ $400 = 2.0',
        'ROI percentage: 2.0 × 100 = 200.00%'
      ],
      result: '200.00% ROI ($800 Profit)'
    },
    resultMeaning: 'A positive ROI means the video paid for its production. Ever-green videos continue generating long-tail AdSense and affiliate clicks for years, expanding their lifetime ROI.',
    importantNotes: [
      'Zero cost is handled safely: if production costs are $0, ROI is represented cleanly as N/A (cannot mathematically compute percentage return on zero capital invested) without division by zero errors.',
      'Remember to include creator time or editing labor costs to measure true financial sustainability.'
    ],
    faqs: [
      {
        question: 'What is a good ROI for a content creator?',
        answer: 'An ROI of 100% means the video earned back its production costs plus an equivalent amount in profit. What constitutes a target ROI depends on production scale, creator objectives, and whether content generates long-tail evergreen returns.'
      }
    ],
    relatedSlugs: ['/profit-margin-calculator', '/sponsorship-calculator', '/affiliate-commission-calculator']
  },
  {
    id: 'sponsorship-calculator',
    name: 'Sponsorship Calculator',
    slug: '/sponsorship-calculator',
    category: 'Business',
    isPopular: false,
    icon: 'Award',
    description: 'Calculate transparent brand sponsorship rates factoring in viewership, engagement, usage rights, and exclusivity.',
    keywords: ['sponsorship rate', 'sponsorship calculator', 'brand deal calculator', 'influencer rates', 'sponsorship pricing', 'media kit rates'],
    shortIntro: 'Formulate defensible, professional sponsorship quotes based on reach, engagement bonus, usage rights, and exclusivity terms.',
    quickAnswer: 'A video averaging 50,000 views at a $30 base CPM with a 15% high-engagement bonus, $300 usage rights, and $250 exclusivity quotes at $2,275.',
    howItWorks: [
      'Enter average expected views for a sponsored integration.',
      'Set your base CPM rate based on your niche, audience profile, and deliverable format.',
      'Apply an engagement adjustment percentage.',
      'Add contractual line-items: commercial usage rights, competitive exclusivity, and secondary deliverables.'
    ],
    formula: {
      display: 'Total Sponsorship = [ (Views ÷ 1,000) × Base CPM × (1 + Engagement Adjustment %) ] + Rights + Exclusivity + Extras',
      variables: [
        { name: 'Base Fee', description: '(Average Views ÷ 1,000) × Base Rate per 1,000 Views.' },
        { name: 'Adjusted Base', description: 'Base Fee multiplied by (1 + Engagement Adjustment % ÷ 100).' },
        { name: 'Usage Rights & Exclusivity', description: 'Fees for brand ad whitelisting, commercial license, or category exclusivity.' }
      ]
    },
    workedExample: {
      inputs: {
        'Average Views': '50,000',
        'Base CPM': '$30.00',
        'Engagement Adjustment': '15%',
        'Usage Rights': '$300.00',
        'Exclusivity': '$250.00'
      },
      calculationSteps: [
        'Base fee: (50,000 ÷ 1,000) × $30 = $1,500.00',
        'Adjusted base: $1,500 × (1 + 0.15) = $1,725.00',
        'Add rights and exclusivity: $1,725 + $300 + $250 = $2,275.00'
      ],
      result: '$2,275.00 Quote'
    },
    resultMeaning: 'Itemizing usage rights, category exclusivity, and additional deliverables allows creators to structure clear, transparent proposals that account for commercial scope.',
    importantNotes: [
      'This calculator provides a customizable estimate. Actual sponsorship pricing depends on the audience, niche, deliverables, rights, exclusivity, campaign scope, and negotiation.',
      'Actual sponsorship pricing varies based on audience demographics, purchasing intent, deliverable requirements, campaign scope, and negotiation.'
    ],
    faqs: [
      {
        question: 'Why should I charge extra for usage rights?',
        answer: 'When a brand runs paid advertising behind your content, they leverage your creator likeness and creative asset. Creators often quote usage rights separately to cover the commercial license duration and platform scope.'
      },
      {
        question: 'What is a category exclusivity fee?',
        answer: 'Exclusivity prevents you from taking sponsorship money from competing brands in the same category (e.g. VPNs or meal kits) for 30 to 90 days. Because it limits your future earnings, you should charge an additional premium.'
      }
    ],
    relatedSlugs: ['/youtube-money-calculator', '/tiktok-money-calculator', '/video-roi-calculator']
  }
];

export function getCalculatorBySlug(slug: string): CalculatorMeta | undefined {
  const normalized = slug.startsWith('/') ? slug : `/${slug}`;
  return CALCULATORS.find(c => c.slug === normalized);
}

export function getCalculatorsByCategory(category: string): CalculatorMeta[] {
  if (category.toLowerCase() === 'all') return CALCULATORS;
  return CALCULATORS.filter(c => c.category.toLowerCase() === category.toLowerCase());
}

export function searchCalculators(query: string): CalculatorMeta[] {
  if (!query.trim()) return CALCULATORS;
  const q = query.toLowerCase().trim();
  return CALCULATORS.filter(c => 
    c.name.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.keywords.some(k => k.toLowerCase().includes(q))
  );
}
