import { useState, useId } from 'react';
import { CalculatorInput } from '../components/CalculatorInput';
import { CurrencySelector } from '../components/CurrencySelector';
import { Currency } from '../types';
import { formatCurrency, formatPercent, safeNumber, CURRENCY_SYMBOLS } from '../lib/formatters';
import { RotateCcw, Copy, Check } from 'lucide-react';

export function VideoRoiCalculator() {
  const revId = useId();
  const costId = useId();

  const [revenue, setRevenue] = useState<number>(1200);
  const [cost, setCost] = useState<number>(400);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [copied, setCopied] = useState(false);

  const safeRevenue = safeNumber(revenue, 0);
  const safeCost = Math.max(0, safeNumber(cost, 0));

  const profit = safeRevenue - safeCost;
  // Handle zero cost safely: if cost = 0, ROI is undefined (N/A)
  const roi = safeCost > 0 ? (profit / safeCost) * 100 : 0;

  const handleReset = () => {
    setRevenue(1200);
    setCost(400);
  };

  const handleCopy = () => {
    const text = `Video Production ROI: ${safeCost > 0 ? formatPercent(roi) : 'N/A (Cost is 0)'} (Net Profit: ${formatCurrency(profit, currency)}, Revenue: ${formatCurrency(safeRevenue, currency)}, Cost: ${formatCurrency(safeCost, currency)} via CREATORCALC)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-6 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-[#252B33]">
          <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
            Video Commercial Data
          </span>
          <CurrencySelector value={currency} onChange={setCurrency} />
        </div>

        <CalculatorInput
          id={revId}
          label="Total Video Revenue"
          value={revenue}
          onChange={setRevenue}
          min={0}
          step={50}
          prefix={CURRENCY_SYMBOLS[currency]}
          helperText="AdSense + Sponsor segment + Affiliate links"
        />

        <CalculatorInput
          id={costId}
          label="Total Production Cost"
          value={cost}
          onChange={setCost}
          min={0}
          step={25}
          prefix={CURRENCY_SYMBOLS[currency]}
          helperText="Editor fees, thumbnail artist, props, gear rental"
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
              Return on Investment
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
              Return on Investment (ROI)
            </span>
            <div className={`text-4xl sm:text-5xl font-black tracking-tight mt-1 font-mono ${safeCost === 0 ? 'text-slate-400 dark:text-[#A7B0BC]' : roi >= 0 ? 'text-emerald-600 dark:text-[#3CCB8E]' : 'text-rose-500 dark:text-rose-400'}`}>
              {safeCost === 0 ? 'N/A' : formatPercent(roi)}
            </div>
            <p className="text-[11px] text-slate-600 dark:text-[#A7B0BC] mt-1.5">
              {safeCost === 0
                ? 'ROI cannot be calculated when production cost is zero (no capital invested)'
                : profit >= 0
                ? `Earned back 100% of production costs plus ${formatPercent(roi)} extra return`
                : 'Video operated at a net deficit'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-[#252B33]">
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Net Video Profit</span>
              <span className={`text-lg font-bold font-mono mt-0.5 block ${profit >= 0 ? 'text-slate-900 dark:text-[#F5F7FA]' : 'text-rose-500 dark:text-rose-400'}`}>
                {formatCurrency(profit, currency)}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Cost Recovery</span>
              <span className="text-lg font-bold text-[#7C5CFC] font-mono mt-0.5 block">
                {safeCost > 0 ? `${((safeRevenue / safeCost) * 100).toFixed(0)}%` : 'N/A'}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#252B33] text-[11px] text-slate-500 dark:text-[#A7B0BC]/80 leading-relaxed">
          🎥 <strong>Long-Tail Value:</strong> Evergreen videos continue accruing views and ad revenue for months or years after publishing, boosting lifetime ROI over time.
        </div>
      </div>
    </div>
  );
}
