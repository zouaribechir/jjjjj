import React from 'react';
import { AlertCircle } from 'lucide-react';

interface CalculatorInputProps {
  id: string;
  label: string;
  value: number | string;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  helperText?: string;
  error?: string | null;
  placeholder?: string;
}

export function CalculatorInput({
  id,
  label,
  value,
  onChange,
  min = 0,
  max,
  step = 1,
  prefix,
  suffix,
  helperText,
  error,
  placeholder
}: CalculatorInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valStr = e.target.value;
    if (valStr === '') {
      onChange(0);
      return;
    }
    const parsed = parseFloat(valStr);
    if (!isNaN(parsed)) {
      onChange(parsed);
    }
  };

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-[#F5F7FA]">
          {label}
        </label>
        {helperText && (
          <span className="text-[11px] text-slate-500 dark:text-[#A7B0BC]">{helperText}</span>
        )}
      </div>

      <div className="relative flex items-center rounded-xl bg-slate-100 dark:bg-[#181D23] border border-slate-300 dark:border-[#252B33] focus-within:border-[#7C5CFC] focus-within:ring-2 focus-within:ring-[#7C5CFC]/30 transition-all">
        {prefix && (
          <span className="pl-3.5 pr-1 text-sm font-medium text-slate-500 dark:text-[#A7B0BC] select-none">
            {prefix}
          </span>
        )}

        <input
          id={id}
          type="number"
          value={value === 0 && placeholder ? '' : value}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          placeholder={placeholder}
          className={`w-full py-2.5 text-sm sm:text-base font-semibold text-slate-900 dark:text-[#F5F7FA] bg-transparent focus:outline-none ${
            prefix ? 'pl-1' : 'pl-3.5'
          } ${suffix ? 'pr-1' : 'pr-3.5'}`}
        />

        {suffix && (
          <span className="pr-3.5 pl-1 text-xs font-medium text-slate-500 dark:text-[#A7B0BC] select-none">
            {suffix}
          </span>
        )}
      </div>

      {error && (
        <p className="flex items-center gap-1 text-xs text-rose-400 mt-1">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
