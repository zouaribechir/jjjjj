import { Link } from '../context/RouterContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';
import { CALCULATORS, CATEGORIES } from '../data/calculators';
import { Icon } from '../components/Icon';
import { ArrowRight, Compass, Shield, Layers } from 'lucide-react';

export function SitemapPage() {
  const breadcrumbs = [{ label: 'HTML Sitemap' }];

  const staticPages = [
    { name: 'Home Page', path: '/', desc: 'Platform landing page, popular creator calculators, and features overview.' },
    { name: 'All Calculators Index', path: '/calculators', desc: 'Complete searchable directory of all 12 creator calculators.' },
    { name: 'About CREATORCALC', path: '/about', desc: 'Mission, transparent client-side calculation philosophy, and architecture.' },
    { name: 'Privacy Policy', path: '/privacy', desc: 'Commitment to zero client data harvesting and privacy standards.' },
    { name: 'Terms of Service', path: '/terms', desc: 'Usage guidelines and transparent mathematical estimation disclaimers.' },
  ];

  const categoryPages = [
    { name: 'YouTube Calculators', path: '/youtube', desc: 'Ad revenue, RPM, CPM, and channel monetization estimators.' },
    { name: 'TikTok Calculators', path: '/tiktok', desc: 'Creator Rewards Program payouts and video engagement metrics.' },
    { name: 'Instagram Calculators', path: '/instagram', desc: 'Media kit metrics, post interactions, and engagement rates.' },
    { name: 'Affiliate Marketing Calculators', path: '/affiliate', desc: 'Commissions, checkout volume, and conversion projections.' },
    { name: 'Business & Finance Calculators', path: '/business', desc: 'Profit margins, ad revenue yields, video ROI, and sponsorships.' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <SeoHead
        title="HTML Sitemap – All Creator Calculators & Tools – CREATORCALC"
        description="Explore the complete HTML sitemap of CREATORCALC. Direct links to all 12 free creator calculators, category hubs, and legal resources."
        canonical="https://creatorcalc.com/sitemap"
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Page Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] text-xs font-semibold text-[#7C5CFC] mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Site Directory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight">
          HTML Sitemap
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-[#A7B0BC] leading-relaxed max-w-2xl">
          Quickly navigate all 12 free creator calculators, category portals, and platform resources.
        </p>
      </div>

      <div className="space-y-10">
        {/* Section: Calculator Tools by Category */}
        <section className="space-y-6">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200 dark:border-[#252B33]">
            <Layers className="w-5 h-5 text-[#7C5CFC]" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-[#F5F7FA]">
              All 12 Creator Calculators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CATEGORIES.filter(c => c !== 'All').map((category) => {
              const calcs = CALCULATORS.filter(c => c.category.toLowerCase() === category.toLowerCase());
              if (calcs.length === 0) return null;

              return (
                <div key={category} className="p-6 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-[#252B33]">
                      <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] flex items-center gap-2">
                        <span>{category} Tools</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] text-[#7C5CFC] font-semibold">
                          {calcs.length}
                        </span>
                      </h3>
                      <Link
                        href={category === 'Social Media' ? '/social-media' : `/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-xs font-semibold text-[#7C5CFC] hover:text-[#6847F5] flex items-center gap-1"
                      >
                        <span>Hub</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <ul className="space-y-3">
                      {calcs.map((calc) => (
                        <li key={calc.slug}>
                          <Link
                            href={calc.slug}
                            className="group block p-3 rounded-xl bg-slate-50 dark:bg-[#181D23] hover:bg-slate-100 dark:hover:bg-[#252B33]/80 border border-slate-200 dark:border-[#252B33] transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 font-semibold text-xs text-slate-900 dark:text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors">
                                <Icon name={calc.icon} className="w-3.5 h-3.5 text-[#7C5CFC]" />
                                <span>{calc.name}</span>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-[#A7B0BC] group-hover:text-[#7C5CFC] transition-colors" />
                            </div>
                            <p className="mt-1 text-[11px] text-slate-500 dark:text-[#A7B0BC] line-clamp-1">
                              {calc.description}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section: Category Landing Portals */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200 dark:border-[#252B33]">
            <Compass className="w-5 h-5 text-emerald-600 dark:text-[#3CCB8E]" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-[#F5F7FA]">
              Platform Category Hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryPages.map((hub) => (
              <Link
                key={hub.path}
                href={hub.path}
                className="group p-4 rounded-xl bg-white dark:bg-[#12161B] hover:bg-slate-50 dark:hover:bg-[#181D23] border border-slate-200 dark:border-[#252B33] hover:border-emerald-500/40 dark:hover:border-[#3CCB8E]/40 transition-all"
              >
                <div className="flex items-center justify-between font-semibold text-xs text-slate-900 dark:text-[#F5F7FA] group-hover:text-emerald-600 dark:group-hover:text-[#3CCB8E] transition-colors mb-1">
                  <span>{hub.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-[#A7B0BC]" />
                </div>
                <p className="text-[11px] text-slate-500 dark:text-[#A7B0BC] leading-relaxed">
                  {hub.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Section: Company & Legal */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200 dark:border-[#252B33]">
            <Shield className="w-5 h-5 text-slate-500 dark:text-[#A7B0BC]" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-[#F5F7FA]">
              Company &amp; Legal Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {staticPages.map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className="group p-4 rounded-xl bg-white dark:bg-[#12161B] hover:bg-slate-50 dark:hover:bg-[#181D23] border border-slate-200 dark:border-[#252B33] hover:border-[#7C5CFC]/40 transition-all"
              >
                <div className="flex items-center justify-between font-semibold text-xs text-slate-900 dark:text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors mb-1">
                  <span>{page.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-[#A7B0BC]" />
                </div>
                <p className="text-[11px] text-slate-500 dark:text-[#A7B0BC] leading-relaxed">
                  {page.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
