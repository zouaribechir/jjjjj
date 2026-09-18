import { useState, useId } from 'react';
import { CalculatorInput } from '../components/CalculatorInput';
import { CurrencySelector } from '../components/CurrencySelector';
import { Currency } from '../types';
import { formatCurrency, safeNumber, CURRENCY_SYMBOLS } from '../lib/formatters';
import { RotateCcw, Copy, Check } from 'lucide-react';

export function YouTubeMoneyCalculator() {
  const viewsId = useId();
  const rpmId = useId();
  const daysId = useId();

  const [monthlyViews, setMonthlyViews] = useState<number>(500000);
  const [rpm, setRpm] = useState<number>(4.20);
  const [daysPerMonth, setDaysPerMonth] = useState<number>(30);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [copied, setCopied] = useState(false);

  // Math
  const safeViews = Math.max(0, safeNumber(monthlyViews, 0));
  const safeRpm = Math.max(0, safeNumber(rpm, 0));
  const safeDays = Math.max(1, safeNumber(daysPerMonth, 30));

  const monthlyRevenue = (safeViews / 1000) * safeRpm;
  const dailyRevenue = monthlyRevenue / safeDays;
  const yearlyRevenue = monthlyRevenue * 12;

  const handleReset = () => {
    setMonthlyViews(500000);
    setRpm(4.20);
    setDaysPerMonth(30);
  };

  const handleCopy = () => {
    const text = `YouTube Estimated Revenue:\n• Monthly: ${formatCurrency(monthlyRevenue, currency)}\n• Daily: ${formatCurrency(dailyRevenue, currency)}\n• Yearly: ${formatCurrency(yearlyRevenue, currency)}\n(Based on ${safeViews.toLocaleString()} monthly views at ${formatCurrency(safeRpm, currency)} RPM via CREATORCALC)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Inputs Column */}
      <div className="lg:col-span-6 space-y-5">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-[#252B33]">
          <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
            Calculator Inputs
          </span>
          <CurrencySelector value={currency} onChange={setCurrency} />
        </div>

        <CalculatorInput
          id={viewsId}
          label="Monthly Views"
          value={monthlyViews}
          onChange={setMonthlyViews}
          min={0}
          step={10000}
          suffix="views"
          helperText="Expected monetized monthly views"
        />

        <CalculatorInput
          id={rpmId}
          label="Estimated RPM"
          value={rpm}
          onChange={setRpm}
          min={0}
          step={0.10}
          prefix={CURRENCY_SYMBOLS[currency]}
          helperText="Revenue per 1,000 views after YouTube's revenue share"
        />

        <CalculatorInput
          id={daysId}
          label="Days Per Month (Optional)"
          value={daysPerMonth}
          onChange={setDaysPerMonth}
          min={1}
          max={31}
          step={1}
          suffix="days"
          helperText="Standard calculation base (typically 30 days)"
        />

        <div className="pt-2 flex items-center justify-between">
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

      {/* Results Column */}
      <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] min-h-[360px]">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-[#252B33]">
            <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
              Estimated YouTube Earnings
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1 text-xs text-[#7C5CFC] hover:text-[#6847F5] transition-colors"
              title="Copy results breakdown"
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

          {/* Primary Monthly Revenue */}
          <div className="py-6">
            <span className="text-xs font-medium text-slate-500 dark:text-[#A7B0BC] block">
              Estimated Monthly Revenue
            </span>
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-[#3CCB8E] tracking-tight mt-1 font-mono">
              {formatCurrency(monthlyRevenue, currency)}
            </div>
            <p className="text-[11px] text-slate-600 dark:text-[#A7B0BC] mt-1.5">
              Based on {safeViews.toLocaleString()} views at {formatCurrency(safeRpm, currency)} RPM
            </p>
          </div>

          {/* Secondary Breakdown */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-[#252B33]">
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Daily Average</span>
              <span className="text-lg font-bold text-slate-900 dark:text-[#F5F7FA] font-mono mt-0.5 block">
                {formatCurrency(dailyRevenue, currency)}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Estimated Yearly</span>
              <span className="text-lg font-bold text-slate-900 dark:text-[#F5F7FA] font-mono mt-0.5 block">
                {formatCurrency(yearlyRevenue, currency)}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#252B33] text-[11px] text-slate-500 dark:text-[#A7B0BC]/80 leading-relaxed">
          ⚠️ These are estimates, not guaranteed earnings. Actual creator revenue varies based on audience geography, watch time, and seasonality.
        </div>
      </div>
    </div>
  );
}
