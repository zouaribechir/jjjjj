import { Link } from '../context/RouterContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';

export function PrivacyPage() {
  const breadcrumbs = [{ label: 'Privacy Policy' }];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <SeoHead
        title="Privacy Policy – CREATORCALC"
        description="Read the CREATORCALC Privacy Policy. We respect your privacy: all calculations execute client-side in your browser with zero data collection."
        canonical="https://creatorcalc.com/privacy"
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs text-slate-500 dark:text-[#A7B0BC]">
          Effective Date: January 1, 2026 • Last Updated: September 2026
        </p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-slate-600 dark:text-[#A7B0BC] leading-relaxed">
        <div className="p-6 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
          <h2 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] mb-2">1. Client-Side Calculation Guarantee</h2>
          <p>
            At CREATORCALC, our fundamental technical design is client-side execution. When you type numbers into any calculator (such as view counts, RPM rates, revenue figures, or sponsorship rates), those calculations are computed entirely inside your web browser’s JavaScript engine.
          </p>
          <p className="mt-2 text-emerald-600 dark:text-[#3CCB8E] font-medium">
            Your inputs, calculations, and financial numbers are NEVER transmitted to our servers or stored in any database.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
          <h2 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] mb-2">2. No Account or Registration Required</h2>
          <p>
            We do not ask for your name, email address, physical location, or credit card details. You can use all 12 calculators anonymously.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
          <h2 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] mb-2">3. Local Storage Preferences</h2>
          <p>
            We may use your browser’s local storage (localStorage) strictly to remember client-side preferences, such as your chosen light or dark display theme. This preference data remains solely on your personal device.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
          <h2 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] mb-2">4. Analytics, Advertising &amp; External Links</h2>
          <p>
            CREATORCALC may utilize privacy-conscious web analytics tools to measure aggregate website performance and technical health, and may display partner advertisements or contextual sponsorships. Third-party advertising networks or analytics partners may set standard cookies or technical identifiers in accordance with their respective privacy policies to deliver relevant advertising or track aggregate anonymous site traffic.
          </p>
          <p className="mt-2">
            If you click on any third-party link, sponsor placement, or external partner site, you will be directed to an external service subject to their independent privacy terms and conditions.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
          <h2 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] mb-2">5. Updates to This Policy</h2>
          <p>
            If our privacy practices change, we will update the effective date at the top of this page. Any changes will continue to honor our commitment to client-side data privacy.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-[#252B33] flex items-center justify-between text-xs">
          <span className="text-slate-500 dark:text-[#A7B0BC]">Questions about our privacy architecture?</span>
          <Link href="/about" className="font-semibold text-[#7C5CFC] hover:text-[#6847F5]">
            Learn more about CREATORCALC
          </Link>
        </div>
      </div>
    </div>
  );
}
