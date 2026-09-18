import { useState, useId } from 'react';
import { CalculatorInput } from '../components/CalculatorInput';
import { CurrencySelector } from '../components/CurrencySelector';
import { Currency } from '../types';
import { formatCurrency, safeNumber, CURRENCY_SYMBOLS } from '../lib/formatters';
import { RotateCcw, Copy, Check } from 'lucide-react';

export function TikTokMoneyCalculator() {
  const viewsId = useId();
  const rpmId = useId();
  const brandId = useId();
  const affiliateId = useId();
  const otherId = useId();

  const [monthlyViews, setMonthlyViews] = useState<number>(1000000);
  const [ratePer1k, setRatePer1k] = useState<number>(0.80);
  const [brandDeals, setBrandDeals] = useState<number>(1500);
  const [affiliate, setAffiliate] = useState<number>(400);
  const [otherIncome, setOtherIncome] = useState<number>(100);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [copied, setCopied] = useState(false);

  // Calculations
  const safeViews = Math.max(0, safeNumber(monthlyViews, 0));
  const safeRate = Math.max(0, safeNumber(ratePer1k, 0));
  const safeBrand = Math.max(0, safeNumber(brandDeals, 0));
  const safeAffiliate = Math.max(0, safeNumber(affiliate, 0));
  const safeOther = Math.max(0, safeNumber(otherIncome, 0));

  const platformEstimate = (safeViews / 1000) * safeRate;
  const totalMonthlyIncome = platformEstimate + safeBrand + safeAffiliate + safeOther;
  const totalYearlyIncome = totalMonthlyIncome * 12;

  const handleReset = () => {
    setMonthlyViews(1000000);
    setRatePer1k(0.80);
    setBrandDeals(1500);
    setAffiliate(400);
    setOtherIncome(100);
  };

  const handleCopy = () => {
    const text = `TikTok Total Income Projection:\n• Total Monthly: ${formatCurrency(totalMonthlyIncome, currency)}\n• Total Yearly: ${formatCurrency(totalYearlyIncome, currency)}\nBreakdown:\n- Platform Payout: ${formatCurrency(platformEstimate, currency)}\n- Brand Deals: ${formatCurrency(safeBrand, currency)}\n- Affiliate Earnings: ${formatCurrency(safeAffiliate, currency)}\n- Other: ${formatCurrency(safeOther, currency)}\n(Via CREATORCALC)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-6 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-[#252B33]">
          <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
            TikTok Revenue Streams
          </span>
          <CurrencySelector value={currency} onChange={setCurrency} />
        </div>

        <CalculatorInput
          id={viewsId}
          label="Estimated Monthly Views"
          value={monthlyViews}
          onChange={setMonthlyViews}
          min={0}
          step={50000}
          suffix="views"
          helperText="Eligible >60s FYP views for Creator Rewards"
        />

        <CalculatorInput
          id={rpmId}
          label="Estimated Earnings per 1,000 Views"
          value={ratePer1k}
          onChange={setRatePer1k}
          min={0}
          step={0.05}
          prefix={CURRENCY_SYMBOLS[currency]}
          helperText="Your average Creator Rewards Program RPM"
        />

        <CalculatorInput
          id={brandId}
          label="Brand Deals & Sponsorships (Monthly)"
          value={brandDeals}
          onChange={setBrandDeals}
          min={0}
          step={100}
          prefix={CURRENCY_SYMBOLS[currency]}
          helperText="Monthly earnings from sponsored videos"
        />

        <CalculatorInput
          id={affiliateId}
          label="Affiliate Earnings (Monthly)"
          value={affiliate}
          onChange={setAffiliate}
          min={0}
          step={50}
          prefix={CURRENCY_SYMBOLS[currency]}
          helperText="TikTok Shop commissions and bio link sales"
        />

        <CalculatorInput
          id={otherId}
          label="Other Monthly Income"
          value={otherIncome}
          onChange={setOtherIncome}
          min={0}
          step={50}
          prefix={CURRENCY_SYMBOLS[currency]}
          helperText="Live gifts, digital products, consulting, subscriptions"
        />

        <div className="pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-[#A7B0BC] hover:text-slate-900 dark:hover:text-[#F5F7FA] bg-slate-100 dark:bg-[#181D23] hover:bg-slate-200 dark:hover:bg-[#252B33] transition-colors border border-slate-200 dark:border-[#252B33]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>
      </div>

      <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] min-h-[420px]">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-[#252B33]">
            <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
              Total TikTok Earnings Breakdown
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1 text-xs text-[#7C5CFC] hover:text-[#6847F5] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-[#3CCB8E]" />
                  <span className="text-emerald-600 dark:text-[#3CCB8E]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="py-5">
            <span className="text-xs font-medium text-slate-500 dark:text-[#A7B0BC] block">
              Estimated Total Monthly Income
            </span>
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-[#3CCB8E] tracking-tight mt-1 font-mono">
              {formatCurrency(totalMonthlyIncome, currency)}
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-[#F5F7FA] mt-1 font-mono">
              Estimated Annual: {formatCurrency(totalYearlyIncome, currency)} / year
            </div>
          </div>

          {/* Detailed Stream Breakdown */}
          <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-[#252B33]">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] text-xs">
              <span className="text-slate-600 dark:text-[#A7B0BC]">Platform Rewards Program</span>
              <span className="font-semibold text-slate-900 dark:text-[#F5F7FA] font-mono">{formatCurrency(platformEstimate, currency)}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] text-xs">
              <span className="text-slate-600 dark:text-[#A7B0BC]">Brand Deal Sponsorships</span>
              <span className="font-semibold text-slate-900 dark:text-[#F5F7FA] font-mono">{formatCurrency(safeBrand, currency)}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] text-xs">
              <span className="text-slate-600 dark:text-[#A7B0BC]">Affiliate & Shop Commissions</span>
              <span className="font-semibold text-slate-900 dark:text-[#F5F7FA] font-mono">{formatCurrency(safeAffiliate, currency)}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] text-xs">
              <span className="text-slate-600 dark:text-[#A7B0BC]">Other Income (Gifts/Courses)</span>
              <span className="font-semibold text-slate-900 dark:text-[#F5F7FA] font-mono">{formatCurrency(safeOther, currency)}</span>
            </div>
          </div>
        </div>

        {/* Required prominent note */}
        <div className="mt-5 p-3 rounded-xl bg-slate-100 dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] text-[11px] text-slate-600 dark:text-[#A7B0BC] leading-relaxed">
          <strong className="text-slate-900 dark:text-[#F5F7FA]">Important Note:</strong> Platform payouts and creator monetization programs vary by eligibility, location, program terms and content performance. Use your own historical earnings when available.
        </div>
      </div>
    </div>
  );
}
