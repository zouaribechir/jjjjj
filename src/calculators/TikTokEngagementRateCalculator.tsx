import { useState, useId } from 'react';
import { CalculatorInput } from '../components/CalculatorInput';
import { formatPercent, safeNumber } from '../lib/formatters';
import { RotateCcw, Copy, Check } from 'lucide-react';

export function TikTokEngagementRateCalculator() {
  const likesId = useId();
  const commentsId = useId();
  const sharesId = useId();
  const viewsId = useId();

  const [likes, setLikes] = useState<number>(4000);
  const [comments, setComments] = useState<number>(300);
  const [shares, setShares] = useState<number>(200);
  const [views, setViews] = useState<number>(50000);
  const [copied, setCopied] = useState(false);

  const safeLikes = Math.max(0, safeNumber(likes, 0));
  const safeComments = Math.max(0, safeNumber(comments, 0));
  const safeShares = Math.max(0, safeNumber(shares, 0));
  const safeViews = safeNumber(views, 0);

  const totalEngagements = safeLikes + safeComments + safeShares;
  const engagementRate = safeViews > 0 ? (totalEngagements / safeViews) * 100 : 0;

  const error = views <= 0 ? 'Views must be greater than zero.' : null;

  const handleReset = () => {
    setLikes(4000);
    setComments(300);
    setShares(200);
    setViews(50000);
  };

  const handleCopy = () => {
    const text = `TikTok Engagement Rate: ${formatPercent(engagementRate)} (${totalEngagements.toLocaleString()} total engagements on ${safeViews.toLocaleString()} views via CREATORCALC)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-6 space-y-4">
        <div className="pb-2 border-b border-slate-200 dark:border-[#252B33]">
          <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
            Video Performance Metrics
          </span>
        </div>

        <CalculatorInput
          id={likesId}
          label="Total Likes"
          value={likes}
          onChange={setLikes}
          min={0}
          step={50}
          suffix="likes"
        />

        <CalculatorInput
          id={commentsId}
          label="Total Comments"
          value={comments}
          onChange={setComments}
          min={0}
          step={10}
          suffix="comments"
        />

        <CalculatorInput
          id={sharesId}
          label="Total Shares"
          value={shares}
          onChange={setShares}
          min={0}
          step={10}
          suffix="shares"
        />

        <CalculatorInput
          id={viewsId}
          label="Total Video Views"
          value={views}
          onChange={setViews}
          min={1}
          step={500}
          suffix="views"
          error={error || undefined}
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
              Engagement Rate Output
            </span>
            <button
              type="button"
              onClick={handleCopy}
              disabled={!!error}
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
              Engagement Rate (by Views)
            </span>
            <div className="text-4xl sm:text-5xl font-black text-emerald-600 dark:text-[#3CCB8E] tracking-tight mt-1 font-mono">
              {error ? '—' : formatPercent(engagementRate)}
            </div>
            {error ? (
              <p className="text-xs text-rose-500 mt-1.5">{error}</p>
            ) : (
              <p className="text-[11px] text-slate-600 dark:text-[#A7B0BC] mt-1.5">
                Calculated as (Total Interactions ÷ Total Views) × 100
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-[#252B33]">
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Total Interactions</span>
              <span className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] font-mono mt-0.5 block">
                {totalEngagements.toLocaleString()}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Interactions Per 1k Views</span>
              <span className="text-base font-bold text-[#7C5CFC] font-mono mt-0.5 block">
                {safeViews > 0 ? ((totalEngagements / safeViews) * 1000).toFixed(1) : '0'}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#252B33] text-[11px] text-slate-500 dark:text-[#A7B0BC]/80 leading-relaxed">
          TikTok algorithms prioritize watch completion rate and shares when distributing videos to new FYP audiences.
        </div>
      </div>
    </div>
  );
}
