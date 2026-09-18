import { Currency } from '../types';
import { CURRENCY_SYMBOLS } from '../lib/formatters';

interface CurrencySelectorProps {
  value: Currency;
  onChange: (currency: Currency) => void;
  className?: string;
}

export function CurrencySelector({ value, onChange, className = '' }: CurrencySelectorProps) {
  const currencies: Currency[] = ['USD', 'EUR', 'GBP', 'CAD', 'AUD'];

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <span className="text-xs text-slate-500 dark:text-[#A7B0BC] font-medium mr-1">Currency:</span>
      <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33]">
        {currencies.map((curr) => {
          const isSelected = value === curr;
          return (
            <button
              key={curr}
              type="button"
              onClick={() => onChange(curr)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                isSelected
                  ? 'bg-[#7C5CFC] text-white shadow-sm'
                  : 'text-slate-600 dark:text-[#A7B0BC] hover:text-slate-900 dark:hover:text-[#F5F7FA] hover:bg-white dark:hover:bg-[#12161B]'
              }`}
              title={`${curr} (${CURRENCY_SYMBOLS[curr]})`}
            >
              {curr}
            </button>
          );
        })}
      </div>
    </div>
  );
}
