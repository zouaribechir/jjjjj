import { useState, useId } from 'react';
import { CalculatorInput } from '../components/CalculatorInput';
import { CurrencySelector } from '../components/CurrencySelector';
import { Currency } from '../types';
import { formatCurrency, safeNumber, CURRENCY_SYMBOLS } from '../lib/formatters';
import { RotateCcw, Copy, Check } from 'lucide-react';

export function AdRevenueCalculator() {
  const impId = useId();
  const cpmId = useId();

  const [impressions, setImpressions] = useState<number>(200000);
  const [cpm, setCpm] = useState<number>(12);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [copied, setCopied] = useState(false);

  const safeImpressions = Math.max(0, safeNumber(impressions, 0));
  const safeCpm = Math.max(0, safeNumber(cpm, 0));

  const estimatedRevenue = (safeImpressions / 1000) * safeCpm;
  const revPerImpression = safeImpressions > 0 ? estimatedRevenue / safeImpressions : 0;

  const handleReset = () => {
    setImpressions(200000);
    setCpm(12);
  };

  const handleCopy = () => {
    const text = `Estimated Ad Revenue: ${formatCurrency(estimatedRevenue, currency)} (${safeImpressions.toLocaleString()} ad impressions at ${formatCurrency(safeCpm, currency)} CPM via CREATORCALC)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-6 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-[#252B33]">
          <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
            Ad Campaign Settings
          </span>
          <CurrencySelector value={currency} onChange={setCurrency} />
        </div>

        <CalculatorInput
          id={impId}
          label="Ad Impressions"
          value={impressions}
          onChange={setImpressions}
          min={0}
          step={10000}
          suffix="impressions"
          helperText="Delivered banner, newsletter, or podcast impressions"
        />

        <CalculatorInput
          id={cpmId}
          label="Effective CPM"
          value={cpm}
          onChange={setCpm}
          min={0}
          step={0.50}
          prefix={CURRENCY_SYMBOLS[currency]}
          helperText="Contracted rate or network average per 1,000 impressions"
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

      <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] min-h-[340px]">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-[#252B33]">
            <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
              Projected Ad Revenue
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

          <div className="py-6">
            <span className="text-xs font-medium text-slate-500 dark:text-[#A7B0BC] block">
              Estimated Ad Revenue
            </span>
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-[#3CCB8E] tracking-tight mt-1 font-mono">
              {formatCurrency(estimatedRevenue, currency)}
            </div>
            <p className="text-[11px] text-slate-600 dark:text-[#A7B0BC] mt-1.5">
              Based on {safeImpressions.toLocaleString()} impressions at {formatCurrency(safeCpm, currency)} CPM
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-[#252B33]">
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Revenue Per Single View</span>
              <span className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] font-mono mt-0.5 block">
                {formatCurrency(revPerImpression, currency, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Gross Impressions</span>
              <span className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] font-mono mt-0.5 block">
                {safeImpressions.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#252B33] text-[11px] text-slate-500 dark:text-[#A7B0BC]/80 leading-relaxed">
          📢 <strong>Ad Network Fill Rates:</strong> This calculation represents gross theoretical ad revenue. Real web and audio publishers must account for fill rates (unserved inventory) and ad-blockers.
        </div>
      </div>
    </div>
  );
}
