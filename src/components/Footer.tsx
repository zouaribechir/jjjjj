import { Link } from '../context/RouterContext';
import { Calculator, ShieldCheck, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-[#252B33] bg-slate-50 dark:bg-[#0B0D10] transition-colors mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C5CFC] to-[#6847F5] flex items-center justify-center text-white shadow-sm">
                <Calculator className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-[#F5F7FA]">
                CREATOR<span className="text-[#7C5CFC]">CALC</span>
              </span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-[#A7B0BC] max-w-md leading-relaxed">
              Calculate your creator income, growth & performance. Free calculators for YouTube, TikTok, Instagram, affiliate marketing, and online creator businesses.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-[#A7B0BC]/80 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-[#3CCB8E]" />
              <span>Free, private & client-side calculations. No registration required.</span>
            </div>
          </div>

          {/* Calculator Categories */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-[#F5F7FA] mb-3">
              Calculators
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-[#A7B0BC]">
              <li>
                <Link href="/calculators" className="hover:text-slate-900 dark:hover:text-[#F5F7FA] transition-colors">
                  All Calculators Directory
                </Link>
              </li>
              <li>
                <Link href="/youtube" className="hover:text-slate-900 dark:hover:text-[#F5F7FA] transition-colors">
                  YouTube Tools
                </Link>
              </li>
              <li>
                <Link href="/tiktok" className="hover:text-slate-900 dark:hover:text-[#F5F7FA] transition-colors">
                  TikTok Tools
                </Link>
              </li>
              <li>
                <Link href="/instagram" className="hover:text-slate-900 dark:hover:text-[#F5F7FA] transition-colors">
                  Instagram Tools
                </Link>
              </li>
              <li>
                <Link href="/social-media" className="hover:text-slate-900 dark:hover:text-[#F5F7FA] transition-colors">
                  Social Media Tools
                </Link>
              </li>
              <li>
                <Link href="/affiliate" className="hover:text-slate-900 dark:hover:text-[#F5F7FA] transition-colors">
                  Affiliate Tools
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:text-slate-900 dark:hover:text-[#F5F7FA] transition-colors">
                  Business & Finance Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & About */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-[#F5F7FA] mb-3">
              Company & Legal
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-[#A7B0BC]">
              <li>
                <Link href="/about" className="hover:text-slate-900 dark:hover:text-[#F5F7FA] transition-colors">
                  About CREATORCALC
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-[#F5F7FA] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-900 dark:hover:text-[#F5F7FA] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-slate-900 dark:hover:text-[#F5F7FA] transition-colors">
                  HTML Sitemap
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-[#252B33] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-[#A7B0BC]">
          <p>© 2026 CREATORCALC. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built for creators with precision <Heart className="w-3.5 h-3.5 text-[#7C5CFC] fill-[#7C5CFC]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
