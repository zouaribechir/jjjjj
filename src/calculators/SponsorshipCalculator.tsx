import { useState, useId } from 'react';
import { CalculatorInput } from '../components/CalculatorInput';
import { CurrencySelector } from '../components/CurrencySelector';
import { Currency } from '../types';
import { formatCurrency, safeNumber, CURRENCY_SYMBOLS } from '../lib/formatters';
import { RotateCcw, Copy, Check } from 'lucide-react';

export function SponsorshipCalculator() {
  const viewsId = useId();
  const cpmId = useId();
  const engageId = useId();
  const rightsId = useId();
  const exclusivityId = useId();
  const extrasId = useId();

  const [views, setViews] = useState<number>(50000);
  const [baseCpm, setBaseCpm] = useState<number>(30);
  const [engagementAdj, setEngagementAdj] = useState<number>(15);
  const [usageRights, setUsageRights] = useState<number>(300);
  const [exclusivity, setExclusivity] = useState<number>(250);
  const [extraDeliverables, setExtraDeliverables] = useState<number>(0);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [copied, setCopied] = useState(false);

  // Formulas
  const safeViews = Math.max(0, safeNumber(views, 0));
  const safeBaseCpm = Math.max(0, safeNumber(baseCpm, 0));
  const safeEngageAdj = safeNumber(engagementAdj, 0);
  const safeRights = Math.max(0, safeNumber(usageRights, 0));
  const safeExclusivity = Math.max(0, safeNumber(exclusivity, 0));
  const safeExtras = Math.max(0, safeNumber(extraDeliverables, 0));

  const baseFee = (safeViews / 1000) * safeBaseCpm;
  const adjustedBaseFee = baseFee * (1 + safeEngageAdj / 100);
  const estimatedSponsorshipPrice = adjustedBaseFee + safeRights + safeExclusivity + safeExtras;

  const handleReset = () => {
    setViews(50000);
    setBaseCpm(30);
    setEngagementAdj(15);
    setUsageRights(300);
    setExclusivity(250);
    setExtraDeliverables(0);
  };

  const handleCopy = () => {
    const text = `Sponsorship Rate Quote: ${formatCurrency(estimatedSponsorshipPrice, currency)}\nBreakdown:\n- Adjusted Base: ${formatCurrency(adjustedBaseFee, currency)} (${safeViews.toLocaleString()} views @ ${formatCurrency(safeBaseCpm, currency)} CPM + ${safeEngageAdj}% engagement bonus)\n- Usage Rights: ${formatCurrency(safeRights, currency)}\n- Exclusivity: ${formatCurrency(safeExclusivity, currency)}\n- Extras: ${formatCurrency(safeExtras, currency)}\n(Via CREATORCALC)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-6 space-y-3.5">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-[#252B33]">
          <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
            Deal Parameters & Line Items
          </span>
          <CurrencySelector value={currency} onChange={setCurrency} />
        </div>

        <CalculatorInput
          id={viewsId}
          label="Average Views Per Sponsored Video"
          value={views}
          onChange={setViews}
          min={0}
          step={5000}
          suffix="views"
          helperText="Expected median viewership across recent videos"
        />

        <CalculatorInput
          id={cpmId}
          label="Base Rate Per 1,000 Views (CPM)"
          value={baseCpm}
          onChange={setBaseCpm}
          min={0}
          step={2.5}
          prefix={CURRENCY_SYMBOLS[currency]}
          helperText="Base rate per 1,000 views agreed with or quoted to sponsors"
        />

        <CalculatorInput
          id={engageId}
          label="Engagement Adjustment %"
          value={engagementAdj}
          onChange={setEngagementAdj}
          min={-50}
          max={100}
          step={1}
          suffix="%"
          helperText="+% for high comments/shares; 0% for baseline"
        />

        <CalculatorInput
          id={rightsId}
          label="Commercial Usage Rights Fee"
          value={usageRights}
          onChange={setUsageRights}
          min={0}
          step={50}
          prefix={CURRENCY_SYMBOLS[currency]}
          helperText="30–60 day paid ad whitelisting / website license"
        />

        <CalculatorInput
          id={exclusivityId}
          label="Category Exclusivity Fee"
          value={exclusivity}
          onChange={setExclusivity}
          min={0}
          step={50}
          prefix={CURRENCY_SYMBOLS[currency]}
          helperText="Non-compete premium against competing brands"
        />

        <CalculatorInput
          id={extrasId}
          label="Extra Deliverables Fee"
          value={extraDeliverables}
          onChange={setExtraDeliverables}
          min={0}
          step={50}
          prefix={CURRENCY_SYMBOLS[currency]}
          helperText="IG Story swipe-up, newsletter mention, community post"
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

      <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] min-h-[440px]">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-[#252B33]">
            <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
              Recommended Quote
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
              Estimated Sponsorship Price
            </span>
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-[#3CCB8E] tracking-tight mt-1 font-mono">
              {formatCurrency(estimatedSponsorshipPrice, currency)}
            </div>
            <p className="text-[11px] text-slate-600 dark:text-[#A7B0BC] mt-1.5">
              Comprehensive quote for integration, usage rights & exclusivity
            </p>
          </div>

          {/* Line Item Breakdown */}
          <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-[#252B33]">
            <div className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] text-xs">
              <span className="text-slate-600 dark:text-[#A7B0BC]">Base Deliverable Fee</span>
              <span className="font-semibold text-slate-900 dark:text-[#F5F7FA] font-mono">{formatCurrency(baseFee, currency)}</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] text-xs">
              <span className="text-slate-600 dark:text-[#A7B0BC]">Adjusted Base ({safeEngageAdj >= 0 ? `+${safeEngageAdj}%` : `${safeEngageAdj}%`})</span>
              <span className="font-semibold text-slate-900 dark:text-[#F5F7FA] font-mono">{formatCurrency(adjustedBaseFee, currency)}</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] text-xs">
              <span className="text-slate-600 dark:text-[#A7B0BC]">Usage Rights & Paid Ad License</span>
              <span className="font-semibold text-slate-900 dark:text-[#F5F7FA] font-mono">{formatCurrency(safeRights, currency)}</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] text-xs">
              <span className="text-slate-600 dark:text-[#A7B0BC]">Exclusivity & Extra Deliverables</span>
              <span className="font-semibold text-slate-900 dark:text-[#F5F7FA] font-mono">{formatCurrency(safeExclusivity + safeExtras, currency)}</span>
            </div>
          </div>
        </div>

        <div className="mt-5 p-3 rounded-xl bg-slate-100 dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] text-[11px] text-slate-600 dark:text-[#A7B0BC] leading-relaxed">
          <strong className="text-slate-900 dark:text-[#F5F7FA]">Transparency Note:</strong> This calculator provides a customizable estimate. Actual sponsorship pricing depends on the audience, niche, deliverables, rights, exclusivity, campaign scope and negotiation.
        </div>
      </div>
    </div>
  );
}
