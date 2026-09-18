import { Currency } from '../types';

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  CAD: 'CA$',
  AUD: 'AU$',
};

export function formatCurrency(
  value: number,
  currency: Currency = 'USD',
  options?: { maximumFractionDigits?: number; minimumFractionDigits?: number }
): string {
  if (isNaN(value) || !isFinite(value)) return `${CURRENCY_SYMBOLS[currency]}0.00`;
  
  const minDigits = options?.minimumFractionDigits ?? (Number.isInteger(value) ? 0 : 2);
  const maxDigits = options?.maximumFractionDigits ?? 2;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits,
  }).format(value);
}

export function formatNumber(
  value: number,
  decimals: number = 0
): string {
  if (isNaN(value) || !isFinite(value)) return '0';
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function formatPercent(
  value: number,
  decimals: number = 2
): string {
  if (isNaN(value) || !isFinite(value)) return '0.00%';
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value) + '%';
}

export function safeNumber(val: any, fallback: number = 0): number {
  if (typeof val === 'number') {
    return isNaN(val) || !isFinite(val) ? fallback : val;
  }
  if (typeof val === 'string') {
    const cleaned = val.replace(/,/g, '').trim();
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) || !isFinite(parsed) ? fallback : parsed;
  }
  return fallback;
}
