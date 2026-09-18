import { useState, useId } from 'react';
import { CalculatorInput } from '../components/CalculatorInput';
import { CurrencySelector } from '../components/CurrencySelector';
import { Currency } from '../types';
import { formatCurrency, safeNumber, CURRENCY_SYMBOLS } from '../lib/formatters';
import { RotateCcw, Copy, Check } from 'lucide-react';

export function YouTubeRpmCalculator() {
  const revId = useId();
  const viewsId = useId();

  const [revenue, setRevenue] = useState<number>(2100);
  const [views, setViews] = useState<number>(500000);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [copied, setCopied] = useState(false);

  let validationError: string | null = null;
  if (views <= 0) {
    validationError = 'Views must be greater than zero.';
  } else if (revenue < 0) {
    validationError = 'Revenue cannot be negative.';
  }

  const safeRevenue = Math.max(0, safeNumber(revenue, 0));
  const safeViews = safeNumber(views, 0);

  const rpm = safeViews > 0 ? (safeRevenue / safeViews) * 1000 : 0;
  const revPerSingleView = safeViews > 0 ? safeRevenue / safeViews : 0;

  const handleReset = () => {
    setRevenue(2100);
    setViews(500000);
  };

  const handleCopy = () => {
    const text = `YouTube Calculated RPM: ${formatCurrency(rpm, currency, { maximumFractionDigits: 3 })} per 1,000 views (Revenue: ${formatCurrency(safeRevenue, currency)}, Views: ${safeViews.toLocaleString()})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-6 space-y-5">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-[#252B33]">
          <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
            Calculator Inputs
          </span>
          <CurrencySelector value={currency} onChange={setCurrency} />
        </div>

        <CalculatorInput
          id={revId}
          label="Total Revenue Earned"
          value={revenue}
          onChange={setRevenue}
          min={0}
          step={50}
          prefix={CURRENCY_SYMBOLS[currency]}
          helperText="Total income recorded in YouTube Studio"
          error={revenue < 0 ? 'Revenue cannot be negative.' : undefined}
        />

        <CalculatorInput
          id={viewsId}
          label="Total Video Views"
          value={views}
          onChange={setViews}
          min={1}
          step={10000}
          suffix="views"
          helperText="Total views recorded in the same period"
          error={views <= 0 ? 'Views must be greater than zero.' : undefined}
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
              Resulting YouTube RPM
            </span>
            <button
              type="button"
              onClick={handleCopy}
              disabled={!!validationError}
              className="inline-flex items-center gap-1 text-xs text-[#7C5CFC] hover:text-[#6847F5] disabled:opacity-40 transition-colors"
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
              Calculated RPM (Revenue Per 1,000 Views)
            </span>
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-[#3CCB8E] tracking-tight mt-1 font-mono">
              {validationError ? '—' : formatCurrency(rpm, currency, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            {validationError ? (
              <p className="text-xs text-rose-500 mt-1.5">{validationError}</p>
            ) : (
              <p className="text-[11px] text-slate-600 dark:text-[#A7B0BC] mt-1.5">
                Exact take-home earnings for every thousand views
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-[#252B33]">
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Revenue Per Single View</span>
              <span className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] font-mono mt-0.5 block">
                {validationError ? '—' : formatCurrency(revPerSingleView, currency, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Total Views Counted</span>
              <span className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] font-mono mt-0.5 block">
                {safeViews.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#252B33] text-[11px] text-slate-500 dark:text-[#A7B0BC]/80 leading-relaxed">
          💡 YouTube Studio calculates RPM across all monetized and unmonetized views within the selected timeframe.
        </div>
      </div>
    </div>
  );
}
