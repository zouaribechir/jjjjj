import { Link } from '../context/RouterContext';
import { SearchBar } from '../components/SearchBar';
import { CalculatorCard } from '../components/CalculatorCard';
import { FAQSection } from '../components/FAQSection';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { SeoHead } from '../components/SeoHead';
import { CALCULATORS } from '../data/calculators';
import { Icon } from '../components/Icon';
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export function HomePage() {
  const popularCalculators = CALCULATORS.filter(c => c.isPopular);

  const categories = [
    { name: 'YouTube', icon: 'Youtube', desc: 'Money, RPM, CPM & channel growth', href: '/youtube', count: CALCULATORS.filter(c => c.category === 'YouTube').length },
    { name: 'TikTok', icon: 'Video', desc: 'Creator rewards & video engagement', href: '/tiktok', count: CALCULATORS.filter(c => c.category === 'TikTok').length },
    { name: 'Instagram', icon: 'Instagram', desc: 'Post interactions & media kit metrics', href: '/instagram', count: CALCULATORS.filter(c => c.category === 'Instagram').length },
    { name: 'Affiliate', icon: 'Percent', desc: 'Commissions & checkout volume', href: '/affiliate', count: CALCULATORS.filter(c => c.category === 'Affiliate').length },
    { name: 'Business', icon: 'DollarSign', desc: 'Margins, ad revenue & video ROI', href: '/business', count: CALCULATORS.filter(c => c.category === 'Business').length },
    { name: 'Social Media', icon: 'Users', desc: 'Audience & follower forecasting', href: '/social-media', count: CALCULATORS.filter(c => c.category === 'Social Media').length },
  ];

  const faqs = [
    {
      question: 'What is CREATORCALC?',
      answer: 'CREATORCALC is a free, transparent calculator platform engineered for content creators, influencers, social media managers, affiliate marketers, and digital entrepreneurs. We provide mathematical estimation tools to forecast ad revenue, RPM, engagement percentages, sponsorships, and business margins without requiring logins or paywalls.'
    },
    {
      question: 'Are the calculator results exact?',
      answer: 'Calculator results are mathematical estimates based on the exact numbers you input and standard platform payout mechanisms. Actual revenue varies according to viewer geographic location, audience demographics, season (such as Q4 ad spikes), ad blockers, and individual platform partner terms.'
    },
    {
      question: 'Do I need an account to use CREATORCALC?',
      answer: 'No. CREATORCALC is 100% free and requires no account, sign-up, credit card, or email address. All calculations execute directly in your browser with complete privacy.'
    },
    {
      question: 'Are the calculators free?',
      answer: 'Yes, all 12 calculators on CREATORCALC are completely free to use without limits.'
    }
  ];

  return (
    <div className="w-full">
      <SeoHead
        title="CREATORCALC – Calculate Your Creator Income, Growth & Performance"
        description="Fast, free calculators for YouTube, TikTok, Instagram, affiliate marketing and online creator businesses. Calculate RPM, CPM, engagement rates, profit margins, and sponsorships."
        canonical="https://creatorcalc.com"
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] text-xs font-semibold text-[#7C5CFC] mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Free creator calculators</span>
        </div>

        {/* Main H1 */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Calculate your creator income, growth &amp; performance.
        </h1>

        {/* Supporting text */}
        <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-[#A7B0BC] max-w-2xl mx-auto leading-relaxed">
          Fast, simple tools for YouTube, TikTok, Instagram, affiliate marketing and creator businesses.
        </p>

        {/* Global Hero Search Bar */}
        <div className="mt-8 max-w-xl mx-auto">
          <SearchBar placeholder="Search a calculator (e.g. YouTube RPM, TikTok money, sponsorship)..." />
        </div>

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/calculators"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#7C5CFC] hover:bg-[#6847F5] shadow-lg shadow-[#7C5CFC]/25 transition-all duration-150 hover:-translate-y-0.5"
          >
            <span>Explore Calculators</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#popular-tools"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-[#F5F7FA] bg-slate-100 dark:bg-[#12161B] hover:bg-slate-200 dark:hover:bg-[#181D23] border border-slate-200 dark:border-[#252B33] transition-colors"
          >
            <span>Popular Tools</span>
          </a>
        </div>
      </section>

      {/* SECTION: Popular Calculators */}
      <section id="popular-tools" className="py-12 border-t border-slate-200 dark:border-[#252B33] bg-slate-50/70 dark:bg-[#0B0D10]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <div className="text-xs font-semibold text-[#7C5CFC] uppercase tracking-wider mb-1">
                Most Utilized
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#F5F7FA]">
                Popular Calculators
              </h2>
            </div>
            <Link
              href="/calculators"
              className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold text-[#7C5CFC] hover:text-[#6847F5]"
            >
              <span>View all 12 calculators</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCalculators.map((calc) => (
              <CalculatorCard key={calc.id} calc={calc} />
            ))}
          </div>
        </div>
      </section>

      {/* Reserved Sponsor Placement */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AdPlaceholder slot="banner" />
      </div>

      {/* SECTION: Creator Tools by Category */}
      <section className="py-14 border-t border-slate-200 dark:border-[#252B33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#F5F7FA]">
              Creator Tools by Platform
            </h2>
            <p className="text-sm text-slate-600 dark:text-[#A7B0BC] mt-2">
              Explore purpose-built calculators categorized by your monetization channel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group p-6 rounded-2xl bg-white dark:bg-[#12161B] hover:bg-slate-50 dark:hover:bg-[#181D23] border border-slate-200 dark:border-[#252B33] hover:border-[#7C5CFC]/40 transition-all duration-150 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-purple-50 dark:bg-[#181D23] text-[#7C5CFC] border border-purple-100 dark:border-[#252B33] group-hover:border-[#7C5CFC]/30 transition-colors">
                    <Icon name={cat.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 dark:text-[#A7B0BC] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33]">
                    {cat.count} {cat.count === 1 ? 'tool' : 'tools'}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-[#A7B0BC] mt-1.5 leading-relaxed">
                  {cat.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#7C5CFC] pt-2 border-t border-slate-100 dark:border-[#252B33]/50">
                  <span>Explore {cat.name} tools</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Why CREATORCALC? */}
      <section className="py-14 border-t border-slate-200 dark:border-[#252B33] bg-slate-50/60 dark:bg-[#12161B]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#F5F7FA]">
              Why CREATORCALC?
            </h2>
            <p className="text-sm text-slate-600 dark:text-[#A7B0BC] mt-2">
              Designed for creators who need quick, clear answers without the bloat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1: Fast */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <div className="w-10 h-10 rounded-xl bg-[#7C5CFC]/15 text-[#7C5CFC] flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] mb-2">Fast</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A7B0BC] leading-relaxed">
                Instant calculations directly in your browser. No server delays, loading spinners, or page redirects.
              </p>
            </div>

            {/* Feature 2: Free */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-[#3CCB8E] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] mb-2">Free</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A7B0BC] leading-relaxed">
                No account required. Use every calculator as often as you want with zero tracking, paywalls, or registrations.
              </p>
            </div>

            {/* Feature 3: Simple */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <div className="w-10 h-10 rounded-xl bg-[#7C5CFC]/15 text-[#7C5CFC] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] mb-2">Simple</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A7B0BC] leading-relaxed">
                Clear formulas without unnecessary complexity. Fully transparent step-by-step logic you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: How It Works */}
      <section className="py-14 border-t border-slate-200 dark:border-[#252B33]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#F5F7FA]">
              How It Works
            </h2>
            <p className="text-sm text-slate-600 dark:text-[#A7B0BC] mt-2">
              Three streamlined steps to evaluate your creator metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] flex flex-col">
              <span className="text-3xl font-black text-[#7C5CFC] font-mono mb-2">01</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] mb-2">Enter your numbers</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A7B0BC] leading-relaxed">
                Input your view counts, platform RPM, engagement stats, or deal deliverables.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] flex flex-col">
              <span className="text-3xl font-black text-[#7C5CFC] font-mono mb-2">02</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] mb-2">Calculate instantly</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A7B0BC] leading-relaxed">
                Results update live as you type with automatic currency formatting and input validation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] flex flex-col">
              <span className="text-3xl font-black text-[#7C5CFC] font-mono mb-2">03</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] mb-2">Understand the result</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A7B0BC] leading-relaxed">
                Review plain-English explanations, step-by-step worked formulas, and contextual guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Frequently Asked Questions */}
      <section className="py-14 border-t border-slate-200 dark:border-[#252B33] bg-slate-50/70 dark:bg-[#0B0D10]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection faqs={faqs} title="Frequently Asked Questions" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 border-t border-slate-200 dark:border-[#252B33] bg-gradient-to-b from-slate-100 to-white dark:from-[#12161B] dark:to-[#0B0D10]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight">
            Find the right calculator for your next decision.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-[#A7B0BC] max-w-xl mx-auto">
            Explore our complete suite of 12 free calculators covering video monetization, engagement rates, brand deals, and business margins.
          </p>
          <div className="mt-7">
            <Link
              href="/calculators"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#7C5CFC] hover:bg-[#6847F5] shadow-lg shadow-[#7C5CFC]/25 transition-all duration-150"
            >
              <span>Browse All Calculators</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
