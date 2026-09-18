import { useState, useId } from 'react';
import { CalculatorInput } from '../components/CalculatorInput';
import { formatPercent, safeNumber } from '../lib/formatters';
import { RotateCcw, Copy, Check } from 'lucide-react';

export function InstagramEngagementCalculator() {
  const likesId = useId();
  const commentsId = useId();
  const savesId = useId();
  const sharesId = useId();
  const followersId = useId();

  const [likes, setLikes] = useState<number>(1200);
  const [comments, setComments] = useState<number>(80);
  const [saves, setSaves] = useState<number>(150);
  const [shares, setShares] = useState<number>(70);
  const [followers, setFollowers] = useState<number>(25000);
  const [copied, setCopied] = useState(false);

  const safeLikes = Math.max(0, safeNumber(likes, 0));
  const safeComments = Math.max(0, safeNumber(comments, 0));
  const safeSaves = Math.max(0, safeNumber(saves, 0));
  const safeShares = Math.max(0, safeNumber(shares, 0));
  const safeFollowers = safeNumber(followers, 0);

  const totalEngagements = safeLikes + safeComments + safeSaves + safeShares;
  const engagementRate = safeFollowers > 0 ? (totalEngagements / safeFollowers) * 100 : 0;

  const error = followers <= 0 ? 'Followers must be greater than zero.' : null;

  const handleReset = () => {
    setLikes(1200);
    setComments(80);
    setSaves(150);
    setShares(70);
    setFollowers(25000);
  };

  const handleCopy = () => {
    const text = `Instagram Engagement Rate: ${formatPercent(engagementRate)} (${totalEngagements.toLocaleString()} engagements on ${safeFollowers.toLocaleString()} followers via CREATORCALC)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-6 space-y-3.5">
        <div className="pb-2 border-b border-slate-200 dark:border-[#252B33]">
          <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
            Post & Audience Stats
          </span>
        </div>

        <CalculatorInput
          id={likesId}
          label="Likes"
          value={likes}
          onChange={setLikes}
          min={0}
          step={20}
          suffix="likes"
        />

        <CalculatorInput
          id={commentsId}
          label="Comments"
          value={comments}
          onChange={setComments}
          min={0}
          step={5}
          suffix="comments"
        />

        <CalculatorInput
          id={savesId}
          label="Saves"
          value={saves}
          onChange={setSaves}
          min={0}
          step={5}
          suffix="saves"
          helperText="Found in Professional Dashboard"
        />

        <CalculatorInput
          id={sharesId}
          label="Shares"
          value={shares}
          onChange={setShares}
          min={0}
          step={5}
          suffix="shares"
        />

        <CalculatorInput
          id={followersId}
          label="Total Account Followers"
          value={followers}
          onChange={setFollowers}
          min={1}
          step={500}
          suffix="followers"
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

      <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] min-h-[380px]">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-[#252B33]">
            <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
              Instagram Engagement Output
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
              Engagement Rate (by Followers)
            </span>
            <div className="text-4xl sm:text-5xl font-black text-emerald-600 dark:text-[#3CCB8E] tracking-tight mt-1 font-mono">
              {error ? '—' : formatPercent(engagementRate)}
            </div>
            {error ? (
              <p className="text-xs text-rose-500 mt-1.5">{error}</p>
            ) : (
              <p className="text-[11px] text-slate-600 dark:text-[#A7B0BC] mt-1.5">
                Standard media kit formula: (Likes + Comments + Saves + Shares) ÷ Followers
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-[#252B33]">
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Total Post Engagements</span>
              <span className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] font-mono mt-0.5 block">
                {totalEngagements.toLocaleString()}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Interactions Per 1k Followers</span>
              <span className="text-base font-bold text-[#7C5CFC] font-mono mt-0.5 block">
                {safeFollowers > 0 ? ((totalEngagements / safeFollowers) * 1000).toFixed(1) : '0'}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#252B33] text-[11px] text-slate-500 dark:text-[#A7B0BC]/80 leading-relaxed">
          📌 <strong>Formula Note:</strong> Different platforms and reporting agencies calculate engagement differently (e.g. engagement by followers vs. engagement by post reach).
        </div>
      </div>
    </div>
  );
}
