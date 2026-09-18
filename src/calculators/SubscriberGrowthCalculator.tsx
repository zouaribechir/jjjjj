import { useState, useId } from 'react';
import { CalculatorInput } from '../components/CalculatorInput';
import { safeNumber } from '../lib/formatters';
import { RotateCcw, Copy, Check } from 'lucide-react';

export function SubscriberGrowthCalculator() {
  const currentId = useId();
  const growthId = useId();
  const monthsId = useId();

  const [currentSubs, setCurrentSubs] = useState<number>(15000);
  const [monthlyGrowth, setMonthlyGrowth] = useState<number>(1200);
  const [months, setMonths] = useState<number>(12);
  const [copied, setCopied] = useState(false);

  const safeCurrent = Math.max(0, safeNumber(currentSubs, 0));
  const safeGrowth = safeNumber(monthlyGrowth, 0);
  const safeMonths = Math.max(1, safeNumber(months, 1));

  const totalNewSubs = safeGrowth * safeMonths;
  const futureSubs = Math.max(0, safeCurrent + totalNewSubs);
  const percentageGrowth = safeCurrent > 0 ? (totalNewSubs / safeCurrent) * 100 : 0;

  const handleReset = () => {
    setCurrentSubs(15000);
    setMonthlyGrowth(1200);
    setMonths(12);
  };

  const handleCopy = () => {
    const text = `Subscriber Growth Projection:\n• Projected Total: ${futureSubs.toLocaleString()} subscribers\n• Total New Additions: +${totalNewSubs.toLocaleString()} subscribers\n• Growth Rate: +${percentageGrowth.toFixed(1)}%\n(Starting from ${safeCurrent.toLocaleString()} at +${safeGrowth.toLocaleString()}/month across ${safeMonths} months via CREATORCALC)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-6 space-y-4">
        <div className="pb-2 border-b border-slate-200 dark:border-[#252B33]">
          <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
            Audience Trajectory Inputs
          </span>
        </div>

        <CalculatorInput
          id={currentId}
          label="Current Subscribers / Followers"
          value={currentSubs}
          onChange={setCurrentSubs}
          min={0}
          step={500}
          suffix="members"
          helperText="Current count on YouTube, TikTok, or newsletter"
        />

        <CalculatorInput
          id={growthId}
          label="Average Net New Subscribers / Month"
          value={monthlyGrowth}
          onChange={setMonthlyGrowth}
          min={0}
          step={100}
          suffix="/ month"
          helperText="New subscribers minus unsubscribes"
        />

        <CalculatorInput
          id={monthsId}
          label="Forecast Timeframe (Months)"
          value={months}
          onChange={setMonths}
          min={1}
          max={120}
          step={1}
          suffix="months"
          helperText="Standard 6, 12, or 24-month horizon"
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

      <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] min-h-[360px]">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-[#252B33]">
            <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
              Projected Audience Total
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
              Projected Subscribers (in {safeMonths} months)
            </span>
            <div className="text-4xl sm:text-5xl font-black text-emerald-600 dark:text-[#3CCB8E] tracking-tight mt-1 font-mono">
              {futureSubs.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-600 dark:text-[#A7B0BC] mt-1.5">
              Net growth: {percentageGrowth >= 0 ? `+${percentageGrowth.toFixed(1)}%` : `${percentageGrowth.toFixed(1)}%`} audience expansion
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-[#252B33]">
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Total New Additions</span>
              <span className="text-lg font-bold text-slate-900 dark:text-[#F5F7FA] font-mono mt-0.5 block">
                +{totalNewSubs.toLocaleString()}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Daily Velocity</span>
              <span className="text-lg font-bold text-[#7C5CFC] font-mono mt-0.5 block">
                +{(safeGrowth / 30).toFixed(1)} / day
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#252B33] text-[11px] text-slate-500 dark:text-[#A7B0BC]/80 leading-relaxed">
          📈 <strong>Grounded Linear Projection:</strong> This tool uses linear mathematical projection based on your historical pace. Real YouTube and TikTok growth is punctuated by breakout hits and compound distribution.
        </div>
      </div>
    </div>
  );
}
