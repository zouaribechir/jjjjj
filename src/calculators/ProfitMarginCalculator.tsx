import { useState, useId } from 'react';
import { CalculatorInput } from '../components/CalculatorInput';
import { CurrencySelector } from '../components/CurrencySelector';
import { Currency } from '../types';
import { formatCurrency, formatPercent, safeNumber, CURRENCY_SYMBOLS } from '../lib/formatters';
import { RotateCcw, Copy, Check } from 'lucide-react';

export function ProfitMarginCalculator() {
  const revId = useId();
  const costId = useId();

  const [revenue, setRevenue] = useState<number>(10000);
  const [cost, setCost] = useState<number>(3500);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [copied, setCopied] = useState(false);

  const safeRevenue = safeNumber(revenue, 0);
  const safeCost = Math.max(0, safeNumber(cost, 0));

  const profit = safeRevenue - safeCost;
  const margin = safeRevenue > 0 ? (profit / safeRevenue) * 100 : 0;
  const markup = safeCost > 0 ? (profit / safeCost) * 100 : 0;

  const error = safeRevenue <= 0 ? 'Revenue must be greater than zero.' : null;

  const handleReset = () => {
    setRevenue(10000);
    setCost(3500);
  };

  const handleCopy = () => {
    const text = `Creator Profit Margin: ${formatPercent(margin)} (Profit: ${formatCurrency(profit, currency)}, Revenue: ${formatCurrency(safeRevenue, currency)}, Costs: ${formatCurrency(safeCost, currency)} via CREATORCALC)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-6 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-[#252B33]">
          <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
            Financial Inputs
          </span>
          <CurrencySelector value={currency} onChange={setCurrency} />
        </div>

        <CalculatorInput
          id={revId}
          label="Total Business / Content Revenue"
          value={revenue}
          onChange={setRevenue}
          min={0}
          step={250}
          prefix={CURRENCY_SYMBOLS[currency]}
          helperText="Gross income before any expenses"
          error={error || undefined}
        />

        <CalculatorInput
          id={costId}
          label="Total Operating Costs / Expenses"
          value={cost}
          onChange={setCost}
          min={0}
          step={100}
          prefix={CURRENCY_SYMBOLS[currency]}
          helperText="Software, contractors, gear, ads, hosting"
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
              Profitability Breakdown
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
              Net Profit
            </span>
            <div className={`text-3xl sm:text-4xl font-black tracking-tight mt-1 font-mono ${profit >= 0 ? 'text-emerald-600 dark:text-[#3CCB8E]' : 'text-rose-500 dark:text-rose-400'}`}>
              {formatCurrency(profit, currency)}
            </div>
            <p className="text-[11px] text-slate-600 dark:text-[#A7B0BC] mt-1.5">
              Net cash retained after all expense deductions
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-[#252B33]">
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Profit Margin</span>
              <span className="text-xl font-bold text-slate-900 dark:text-[#F5F7FA] font-mono mt-0.5 block">
                {error ? '—' : formatPercent(margin)}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Cost Markup</span>
              <span className="text-xl font-bold text-[#7C5CFC] font-mono mt-0.5 block">
                {safeCost > 0 ? formatPercent(markup) : 'N/A'}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#252B33] text-[11px] text-slate-500 dark:text-[#A7B0BC]/80 leading-relaxed">
          📊 <strong>Gross vs Net Margin:</strong> Gross profit margin subtracts only direct costs (COGS / editors). Net profit margin subtracts all overhead, subscriptions, tax allocations, and operational tools.
        </div>
      </div>
    </div>
  );
}
