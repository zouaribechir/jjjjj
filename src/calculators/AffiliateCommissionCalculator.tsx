import { useState, useId } from 'react';
import { CalculatorInput } from '../components/CalculatorInput';
import { CurrencySelector } from '../components/CurrencySelector';
import { Currency } from '../types';
import { formatCurrency, safeNumber, CURRENCY_SYMBOLS } from '../lib/formatters';
import { RotateCcw, Copy, Check } from 'lucide-react';

export function AffiliateCommissionCalculator() {
  const salesId = useId();
  const aovId = useId();
  const rateId = useId();
  const monthsId = useId();

  const [sales, setSales] = useState<number>(100);
  const [aov, setAov] = useState<number>(80);
  const [rate, setRate] = useState<number>(15);
  const [months, setMonths] = useState<number>(1);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [copied, setCopied] = useState(false);

  const safeSales = Math.max(0, safeNumber(sales, 0));
  const safeAov = Math.max(0, safeNumber(aov, 0));
  const safeRate = Math.max(0, safeNumber(rate, 0));
  const safeMonths = Math.max(1, safeNumber(months, 1));

  const grossSales = safeSales * safeAov;
  const commission = (grossSales * safeRate) / 100;
  const annualCommission = (commission / safeMonths) * 12;

  const handleReset = () => {
    setSales(100);
    setAov(80);
    setRate(15);
    setMonths(1);
  };

  const handleCopy = () => {
    const text = `Affiliate Commission Projection:\n• Net Commission: ${formatCurrency(commission, currency)}\n• Gross Sales Generated: ${formatCurrency(grossSales, currency)}\n• Annualized Commission: ${formatCurrency(annualCommission, currency)}\n(Based on ${safeSales} sales, ${formatCurrency(safeAov, currency)} AOV, and ${safeRate}% commission via CREATORCALC)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-6 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-[#252B33]">
          <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
            Affiliate Campaign Inputs
          </span>
          <CurrencySelector value={currency} onChange={setCurrency} />
        </div>

        <CalculatorInput
          id={salesId}
          label="Number of Referred Sales"
          value={sales}
          onChange={setSales}
          min={0}
          step={5}
          suffix="orders"
          helperText="Completed paying customer purchases"
        />

        <CalculatorInput
          id={aovId}
          label="Average Order Value (AOV)"
          value={aov}
          onChange={setAov}
          min={0}
          step={5}
          prefix={CURRENCY_SYMBOLS[currency]}
          helperText="Average basket checkout total"
        />

        <CalculatorInput
          id={rateId}
          label="Commission Rate %"
          value={rate}
          onChange={setRate}
          min={0}
          max={100}
          step={0.5}
          suffix="%"
          helperText="Contracted affiliate commission tier"
        />

        <CalculatorInput
          id={monthsId}
          label="Calculation Timeframe (Months)"
          value={months}
          onChange={setMonths}
          min={1}
          max={60}
          step={1}
          suffix="months"
          helperText="Used to compute annualized revenue"
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
              Commission Output
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
              Estimated Net Affiliate Commission
            </span>
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-[#3CCB8E] tracking-tight mt-1 font-mono">
              {formatCurrency(commission, currency)}
            </div>
            <p className="text-[11px] text-slate-600 dark:text-[#A7B0BC] mt-1.5">
              Net earnings from {safeSales.toLocaleString()} orders at {safeRate}% commission
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-[#252B33]">
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Gross Sales Value</span>
              <span className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] font-mono mt-0.5 block">
                {formatCurrency(grossSales, currency)}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
              <span className="text-[11px] font-medium text-slate-500 dark:text-[#A7B0BC] block">Estimated Annualized</span>
              <span className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] font-mono mt-0.5 block">
                {formatCurrency(annualCommission, currency)}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#252B33] text-[11px] text-slate-500 dark:text-[#A7B0BC]/80 leading-relaxed">
          💼 Some affiliate networks deduct customer return/refund allowances before depositing final monthly creator payouts.
        </div>
      </div>
    </div>
  );
}
