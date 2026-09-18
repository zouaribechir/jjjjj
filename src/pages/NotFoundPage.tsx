import { Link } from '../context/RouterContext';
import { SearchBar } from '../components/SearchBar';
import { SeoHead } from '../components/SeoHead';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

export function NotFoundPage() {
  const popularLinks = [
    { name: 'YouTube Money Calculator', slug: '/youtube-money-calculator' },
    { name: 'TikTok Money Calculator', slug: '/tiktok-money-calculator' },
    { name: 'YouTube RPM Calculator', slug: '/youtube-rpm-calculator' },
    { name: 'Instagram Engagement Calculator', slug: '/instagram-engagement-rate-calculator' },
    { name: 'Affiliate Commission Calculator', slug: '/affiliate-commission-calculator' },
    { name: 'Sponsorship Calculator', slug: '/sponsorship-calculator' }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <SeoHead
        title="Page Not Found – CREATORCALC"
        description="The requested page could not be found. Search or browse our 12 free creator calculators."
        canonical="https://creatorcalc.com/404"
      />

      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#7C5CFC]/10 border border-[#7C5CFC]/25 text-[#7C5CFC] font-mono text-2xl font-black mb-6">
        404
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight">
        Page Not Found
      </h1>
      <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-[#A7B0BC] max-w-md mx-auto leading-relaxed">
        The calculator or page you were looking for doesn't exist or may have been moved.
      </p>

      {/* Search Bar */}
      <div className="mt-8 max-w-md mx-auto">
        <SearchBar placeholder="Search for any creator calculator..." />
      </div>

      {/* Popular Links */}
      <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] text-left">
        <h2 className="text-sm font-bold text-slate-900 dark:text-[#F5F7FA] uppercase tracking-wider mb-4">
          Popular Creator Calculators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {popularLinks.map((item) => (
            <Link
              key={item.slug}
              href={item.slug}
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-[#181D23] hover:bg-slate-100 dark:hover:bg-[#252B33] border border-slate-200 dark:border-[#252B33] text-xs font-semibold text-slate-900 dark:text-[#F5F7FA] hover:text-[#7C5CFC] dark:hover:text-[#7C5CFC] transition-colors"
            >
              <span>{item.name}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-[#A7B0BC]" />
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#7C5CFC] hover:bg-[#6847F5] transition-colors shadow-sm"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <Link
          href="/calculators"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] bg-slate-100 dark:bg-[#181D23] hover:bg-slate-200 dark:hover:bg-[#252B33] border border-slate-200 dark:border-[#252B33] transition-colors"
        >
          <span>All 12 Calculators</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
