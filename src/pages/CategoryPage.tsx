import { Link } from '../context/RouterContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CalculatorCard } from '../components/CalculatorCard';
import { FAQSection } from '../components/FAQSection';
import { SeoHead } from '../components/SeoHead';
import { CALCULATORS } from '../data/calculators';
import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface CategoryConfig {
  slug: string;
  categoryName: string;
  title: string;
  metaDesc: string;
  intro: string;
  seoArticleTitle: string;
  seoArticleContent: string[];
  benchmarks: { label: string; value: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

const CATEGORY_CONFIGS: Record<string, CategoryConfig> = {
  youtube: {
    slug: '/youtube',
    categoryName: 'YouTube',
    title: 'YouTube Calculators',
    metaDesc: 'Free YouTube calculators for estimated ad revenue, RPM, CPM, and channel earnings. Accurate, fast, and 100% free.',
    intro: 'Calculate your YouTube channel revenue, understand the difference between RPM and CPM, and model your video monetization potential.',
    seoArticleTitle: 'Understanding YouTube Monetization & Video Economics',
    seoArticleContent: [
      'YouTube remains the most established video monetization platform for creators worldwide, but understanding the underlying economics is critical for building a sustainable content business.',
      'Many creators confuse CPM (Cost Per Mille) with RPM (Revenue Per Mille). While CPM measures what advertisers pay for 1,000 ad impressions, RPM represents the creator\'s net revenue per 1,000 video views calculated after YouTube\'s revenue share. Furthermore, RPM can encompass multiple monetization sources beyond standard auction ads, including channel memberships, Super Chats, and YouTube Premium revenue.',
      'By monitoring your RPM across niches and seasonal cycles (such as high-budget Q4 advertising spikes), you can optimize video length, mid-roll ad placements, and topic selection to maximize revenue.'
    ],
    benchmarks: [
      { label: 'RPM Metric', value: 'Net Creator Payout', desc: 'Measures total earnings per 1,000 views after YouTube\'s revenue share.' },
      { label: 'CPM Metric', value: 'Gross Ad Cost', desc: 'Measures what advertisers pay per 1,000 impressions before platform revenue splits.' },
      { label: 'Monetization Drivers', value: 'Audience & Formats', desc: 'Earnings vary based on viewer geography, niche commercial intent, video length, and ad inventory.' }
    ],
    faqs: [
      {
        question: 'How do I know my actual YouTube RPM?',
        answer: 'You can find your channel and video-level RPM in YouTube Studio by navigating to Analytics > Revenue > Overview. RPM takes into account all views (including views where no ads were served).'
      },
      {
        question: 'What influences YouTube RPM rates the most?',
        answer: 'Viewer geography (US/UK/Canada command significantly higher CPMs than emerging markets), niche commercial intent (finance and tech pay more than gaming), viewer age, and seasonal advertising budgets.'
      },
      {
        question: 'Do YouTube Shorts pay the same as long-form videos?',
        answer: 'No. Shorts are monetized through the Shorts Revenue Sharing model, where ad revenue from the Shorts feed is pooled and distributed based on view share, which differs from long-form auction ad models.'
      }
    ]
  },
  tiktok: {
    slug: '/tiktok',
    categoryName: 'TikTok',
    title: 'TikTok Calculators',
    metaDesc: 'Free TikTok calculators for creator rewards, engagement rates, brand deals, and video performance. Fast and transparent.',
    intro: 'Forecast your earnings from TikTok Creator Rewards, compute engagement rates, and model multi-stream creator revenue.',
    seoArticleTitle: 'Maximizing Revenue on TikTok: Beyond the Payout Program',
    seoArticleContent: [
      'Monetizing short-form video on TikTok requires a diversified strategy. While the TikTok Creator Rewards Program pays for qualified views on videos over one minute long, top creators generate the vast majority of their income through brand partnerships, TikTok Shop affiliate commissions, and digital product sales.',
      'Tracking your Engagement Rate by Views is crucial for pitching sponsors. Because the TikTok FYP algorithm tests videos with small test cohorts before pushing them to wider audiences, high completion rates and shares are essential metrics.'
    ],
    benchmarks: [
      { label: 'Platform Program Rate', value: 'Dynamic RPM', desc: 'Rewards fluctuate based on qualified view percentage, viewer geography, and search relevance.' },
      { label: 'Engagement by Views', value: 'Interaction Ratio', desc: 'Standard calculation compares total interactions (likes, comments, shares) to total video views.' },
      { label: 'Sponsorship Valuation', value: 'Custom Scope', desc: 'Brand partnership rates depend on creator niche, deliverable format, usage rights, and exclusivity.' }
    ],
    faqs: [
      {
        question: 'What videos qualify for the TikTok Creator Rewards Program?',
        answer: 'Videos must be original, at least 1 minute long, adhere to community guidelines, and receive qualified views (views from the For You feed that watch at least 5 seconds without spam behavior).'
      },
      {
        question: 'How is TikTok engagement rate calculated?',
        answer: 'The standard formula is: ((Likes + Comments + Shares) / Total Views) * 100. This measures viewer interaction density relative to total algorithm impressions.'
      }
    ]
  },
  instagram: {
    slug: '/instagram',
    categoryName: 'Instagram',
    title: 'Instagram Calculators',
    metaDesc: 'Free Instagram calculators for engagement rates, media kits, and sponsorship pricing. Calculate interactions cleanly.',
    intro: 'Calculate your Instagram engagement rate across posts and Reels to craft compelling media kits for brand sponsors.',
    seoArticleTitle: 'Why Engagement Rate Matters Most on Instagram',
    seoArticleContent: [
      'In modern influencer marketing, follower counts are secondary to authentic engagement. Brands and media agencies evaluate potential creator partners based on engagement rate (ER)—measuring how active your audience truly is.',
      'Instagram engagement is typically measured either by followers ((Interactions / Followers) * 100) for standard media kit baselines, or by reach ((Interactions / Accounts Reached) * 100) for internal content evaluation.',
      'Saves and shares have become the highest-weighted signals in the Instagram algorithm, signaling content that delivers evergreen value or social resonance.'
    ],
    benchmarks: [
      { label: 'Engagement by Followers', value: 'Media Kit Metric', desc: 'Total interactions divided by total account followers, commonly cited in public media kits.' },
      { label: 'Engagement by Reach', value: 'Content Performance', desc: 'Total interactions divided by accounts reached, evaluating performance among active viewers.' },
      { label: 'High-Intent Signals', value: 'Saves & Shares', desc: 'Algorithmic signals indicating content with lasting reference value or strong sharing resonance.' }
    ],
    faqs: [
      {
        question: 'What influences engagement rates on Instagram?',
        answer: 'Engagement rates depend heavily on account size, audience niche, content format (Reels, carousels, or static photos), and posting cadence. Accounts with larger follower counts frequently observe lower percentage engagement due to broader audience reach.'
      },
      {
        question: 'Should I include Reels in my engagement rate calculation?',
        answer: 'Yes, but be aware that viral Reels can reach far beyond your follower count, which can artificially skew follower-based ER calculations. Many agencies evaluate feed posts and Reels separately.'
      }
    ]
  },
  affiliate: {
    slug: '/affiliate',
    categoryName: 'Affiliate',
    title: 'Affiliate Marketing Calculators',
    metaDesc: 'Free affiliate commission and sales calculators for creators and publishers. Model your affiliate marketing revenue.',
    intro: 'Calculate affiliate commissions, projected annual revenue, and conversion returns from your creator recommendation links.',
    seoArticleTitle: 'Building Passive Income with Affiliate Marketing for Creators',
    seoArticleContent: [
      'Affiliate marketing is one of the most reliable and scalable income streams for content creators. Unlike one-off brand sponsorships, an evergreen video or curated bio link page with affiliate recommendations generates ongoing passive commissions for months.',
      'Your affiliate revenue is a direct function of three variables: traffic volume, conversion rate, and average order value (AOV). By focusing on higher-ticket products or recurring software subscriptions, creators can earn significant revenue with modest traffic.'
    ],
    benchmarks: [
      { label: 'Commission Models', value: 'Percentage or Flat', desc: 'Programs may offer fixed bounty fees per lead or percentage commissions on completed checkout totals.' },
      { label: 'Recurring Subscriptions', value: 'SaaS Software', desc: 'Subscription products frequently provide ongoing recurring commissions for active subscriber lifespans.' },
      { label: 'Payout Clearances', value: 'Holdback Windows', desc: 'Networks hold transaction payouts for standard grace periods to reconcile returns and cancellations.' }
    ],
    faqs: [
      {
        question: 'What is the formula for affiliate commissions?',
        answer: 'Commission = (Referred Sales * Average Order Value) * (Commission Rate / 100).'
      },
      {
        question: 'How do return rates affect my affiliate earnings?',
        answer: 'Most affiliate programs hold payouts for 30 to 60 days to account for refunds and order cancellations before releasing funds.'
      }
    ]
  },
  business: {
    slug: '/business',
    categoryName: 'Business',
    title: 'Creator Business & Finance Calculators',
    metaDesc: 'Free business and financial calculators for content creators, agencies, and online brands. Calculate profit margins, ROI, and ad yields.',
    intro: 'Professional financial calculators to help you treat your content as a real business: monitor profit margins, video ROI, and advertising yields.',
    seoArticleTitle: 'Treating Your Content Creation as a High-Margin Business',
    seoArticleContent: [
      'The difference between a stressed creator and a thriving creator business is financial clarity. High top-line revenue from sponsors or AdSense can be misleading if production costs, editor retainers, and software subscriptions eat up all your profits.',
      'Using profit margin and ROI calculators allows you to evaluate which video formats, sponsorship deals, and merchandise runs generate actual net income, enabling you to invest wisely in your growth.'
    ],
    benchmarks: [
      { label: 'Gross Margin', value: 'Revenue − Direct Costs', desc: 'Measures content profitability after deducting direct filming, editing, and thumbnail expenses.' },
      { label: 'Net Profit Margin', value: 'Net Profit ÷ Revenue', desc: 'Measures overall creator business health after all overhead, software, taxes, and wages.' },
      { label: 'Video ROI', value: 'Capital Efficiency', desc: 'Compares total monetary return against total production expenditure for a specific piece of content.' }
    ],
    faqs: [
      {
        question: 'What is the difference between Gross Margin and Net Margin?',
        answer: 'Gross Margin subtracts only the direct costs of producing content (e.g. video editor, thumbnail design). Net Margin subtracts all operational overhead including software subscriptions, accounting fees, equipment depreciation, and studio rent.'
      },
      {
        question: 'How do I calculate Video ROI?',
        answer: 'Video ROI = ((Total Video Revenue - Video Cost) / Video Cost) * 100.'
      }
    ]
  },
  'social-media': {
    slug: '/social-media',
    categoryName: 'Social Media',
    title: 'Social Media Growth & Audience Calculators',
    metaDesc: 'Free social media calculators for subscriber growth velocity, audience milestone modeling, and channel trajectory.',
    intro: 'Forecast your channel and follower growth milestone dates based on current velocity and monthly net gains.',
    seoArticleTitle: 'Audience Growth Mechanics & Milestone Trajectories',
    seoArticleContent: [
      'Projecting long-term subscriber growth requires balancing linear baseline momentum with realistic retention rates. Most creators experience growth in punctuated cycles rather than perfectly constant linear slopes.',
      'Understanding your net monthly subscriber velocity enables you to set realistic milestones, plan sponsorship inventory months in advance, and benchmark content production cadence.'
    ],
    benchmarks: [
      { label: 'Net Growth Velocity', value: 'Monthly Additions', desc: 'Total new followers or subscribers added minus unsubscriptions.' },
      { label: 'Milestone Horizon', value: 'Target Projections', desc: 'Estimated months required to reach major milestone badges (100k, 1M).' },
      { label: 'Growth Momentum', value: 'Retention Ratio', desc: 'The proportion of viewers converting into committed subscribers.' }
    ],
    faqs: [
      {
        question: 'How accurate are subscriber growth projections?',
        answer: 'Linear projection models your baseline pace assuming current upload volume and audience discovery rates remain steady. Viral videos or major platform shifts can accelerate or alter these trends.'
      },
      {
        question: 'How can I increase my monthly subscriber velocity?',
        answer: 'Focus on content packaging (thumbnails and hooks), consistent scheduling, series-based content that encourages binge-watching, and clear calls-to-action.'
      }
    ]
  }
};

export function CategoryPage({ categoryKey }: { categoryKey: string }) {
  const normalizedKey = categoryKey.toLowerCase().replace(/\s+/g, '-');
  const config = CATEGORY_CONFIGS[normalizedKey];

  if (!config) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-[#F5F7FA]">Category Not Found</h1>
        <p className="text-xs text-slate-600 dark:text-[#A7B0BC] mt-2">The requested category does not exist.</p>
        <Link href="/calculators" className="mt-4 inline-block text-xs font-semibold text-[#7C5CFC]">
          Back to Calculators
        </Link>
      </div>
    );
  }

  const calcs = CALCULATORS.filter(
    c => c.category.toLowerCase() === config.categoryName.toLowerCase()
  );

  const breadcrumbs = [
    { label: 'Calculators', href: '/calculators' },
    { label: config.categoryName }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <SeoHead
        title={`${config.title} – Free Tools for Creators`}
        description={config.metaDesc}
        canonical={`https://creatorcalc.com${config.slug}`}
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] text-xs font-semibold text-[#7C5CFC] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{config.categoryName} Platform Tools</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight">
          {config.title}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-[#A7B0BC] max-w-3xl leading-relaxed">
          {config.intro}
        </p>
      </div>

      {/* Calculators Grid */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200 dark:border-[#252B33]">
          <h2 className="text-lg font-bold text-slate-900 dark:text-[#F5F7FA]">
            Available {config.categoryName} Calculators
          </h2>
          <span className="text-xs font-medium text-slate-500 dark:text-[#A7B0BC]">
            {calcs.length} {calcs.length === 1 ? 'tool' : 'tools'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {calcs.map(calc => (
            <CalculatorCard key={calc.id} calc={calc} />
          ))}
        </div>
      </div>

      {/* Key Platform Metrics & Concepts Block */}
      <div className="my-10 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
        <h2 className="text-xl font-bold text-slate-900 dark:text-[#F5F7FA] mb-2 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-[#3CCB8E]" />
          Key {config.categoryName} Metrics &amp; Concepts
        </h2>
        <p className="text-xs text-slate-600 dark:text-[#A7B0BC] mb-6">
          Essential variables, revenue drivers, and calculation principles for {config.categoryName.toLowerCase()} creators.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {config.benchmarks.map((b, i) => (
            <div key={i} className="p-4 rounded-xl bg-white dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33]">
              <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] block">{b.label}</span>
              <span className="text-lg font-black text-emerald-600 dark:text-[#3CCB8E] font-mono mt-1 block">{b.value}</span>
              <span className="text-[11px] text-slate-600 dark:text-[#A7B0BC]/80 mt-1 block leading-relaxed">{b.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Dive SEO Content */}
      <div className="my-10 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33]">
        <h2 className="text-xl font-bold text-slate-900 dark:text-[#F5F7FA] mb-4">
          {config.seoArticleTitle}
        </h2>
        <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-[#A7B0BC] leading-relaxed">
          {config.seoArticleContent.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Category FAQs */}
      <div className="my-10">
        <FAQSection faqs={config.faqs} title={`${config.categoryName} Frequently Asked Questions`} />
      </div>

      {/* Bottom Link Back to Hub */}
      <div className="mt-12 pt-6 border-t border-slate-200 dark:border-[#252B33] flex items-center justify-between">
        <Link
          href="/calculators"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#7C5CFC] hover:text-[#6847F5]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All 12 Creator Calculators</span>
        </Link>
      </div>
    </div>
  );
}
