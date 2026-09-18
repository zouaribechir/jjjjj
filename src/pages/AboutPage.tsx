import { Link } from '../context/RouterContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';
import { ShieldCheck, Zap, Lock, Sparkles, ArrowRight } from 'lucide-react';

export function AboutPage() {
  const breadcrumbs = [{ label: 'About' }];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <SeoHead
        title="About CREATORCALC – Transparent Creator Calculators"
        description="Learn about the mission, values, and client-side architecture powering CREATORCALC: the free mathematical utility platform for digital creators."
        canonical="https://creatorcalc.com/about"
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] text-xs font-semibold text-[#7C5CFC] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Mission</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight">
          Empowering Creators with Clear Mathematical Decision Tools
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-[#A7B0BC] leading-relaxed">
          CREATORCALC was built to provide creators, influencers, and digital businesses with fast, transparent financial and performance estimators—free of paywalls, spam, and bloated dashboards.
        </p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-slate-600 dark:text-[#A7B0BC] leading-relaxed">
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
          <h2 className="text-lg font-bold text-slate-900 dark:text-[#F5F7FA] mb-3">
            The Problem with Modern Creator Tools
          </h2>
          <p className="mb-3">
            In recent years, the creator economy has exploded with software claiming to give insights, but almost all of them come with frustrating barriers: forced account creation, mandatory credit cards, aggressive sales funnels, or black-box algorithms that hide their basic math.
          </p>
          <p>
            When a creator simply needs to know: <em>"What is my YouTube RPM based on this month's revenue?"</em> or <em>"How much should I charge for commercial usage rights on a sponsored video?"</em>, they shouldn't have to surrender their email or sign a monthly contract.
          </p>
        </section>

        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
          <h2 className="text-lg font-bold text-slate-900 dark:text-[#F5F7FA] mb-6">
            Our Core Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33]">
              <div className="w-8 h-8 rounded-lg bg-[#7C5CFC]/15 text-[#7C5CFC] flex items-center justify-center mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-[#F5F7FA] mb-1">Instant Execution</h3>
              <p className="text-xs text-slate-600 dark:text-[#A7B0BC]">
                All logic runs directly in your web browser. Zero server latency, instantaneous recalculations, and no spinners.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33]">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-[#3CCB8E] flex items-center justify-center mb-3">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-[#F5F7FA] mb-1">Total Privacy</h3>
              <p className="text-xs text-slate-600 dark:text-[#A7B0BC]">
                We do not log your numbers, record financial data, or require an account. Your private business metrics stay on your device.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33]">
              <div className="w-8 h-8 rounded-lg bg-[#7C5CFC]/15 text-[#7C5CFC] flex items-center justify-center mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-[#F5F7FA] mb-1">Transparent Formulas</h3>
              <p className="text-xs text-slate-600 dark:text-[#A7B0BC]">
                Every tool prominently displays its underlying mathematical formula, variables, and step-by-step worked example.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33]">
          <h2 className="text-lg font-bold text-slate-900 dark:text-[#F5F7FA] mb-3">
            Editorial Integrity &amp; Financial Disclaimers
          </h2>
          <p className="mb-3">
            The calculators provided on CREATORCALC are designed for informational, educational, and preliminary planning purposes. Platform payout rates (such as YouTube AdSense, TikTok Creator Rewards, and Instagram bonuses) fluctuate constantly based on seasonal advertiser demand, viewer geography, audience age demographics, and platform policy revisions.
          </p>
          <p>
            We do not provide personalized financial, legal, or tax advice. For binding financial decisions, creators should consult qualified certified accountants or business advisors.
          </p>
        </section>
      </div>

      <div className="mt-10 pt-6 border-t border-slate-200 dark:border-[#252B33] flex items-center justify-between">
        <Link
          href="/calculators"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#7C5CFC] hover:text-[#6847F5]"
        >
          <span>Explore All Calculators</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
