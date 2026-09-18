import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { FAQSection } from './FAQSection';
import { RelatedCalculators } from './RelatedCalculators';
import { AdPlaceholder } from './AdPlaceholder';
import { SeoHead } from './SeoHead';
import { CalculatorMeta } from '../types';
import { Info, HelpCircle, AlertTriangle } from 'lucide-react';

interface CalculatorLayoutProps {
  calc: CalculatorMeta;
  children: React.ReactNode;
}

export function CalculatorLayout({ calc, children }: CalculatorLayoutProps) {
  const breadcrumbs = [
    { label: 'Calculators', href: '/calculators' },
    { label: calc.name }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <SeoHead
        title={`${calc.name} – Free Creator Calculator`}
        description={calc.description}
        canonical={`https://creatorcalc.com${calc.slug}`}
        calculator={calc}
        breadcrumbs={breadcrumbs}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] text-xs font-semibold text-[#7C5CFC] mb-3">
          <span>{calc.category} Tool</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight">
          {calc.name}
        </h1>
        <p className="mt-2.5 text-sm sm:text-base text-slate-600 dark:text-[#A7B0BC] max-w-3xl leading-relaxed">
          {calc.shortIntro}
        </p>
      </div>

      {/* Main Interactive Calculator Area */}
      <div className="mb-10 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] p-6 sm:p-8 shadow-xl">
        {children}
      </div>

      {/* Quick Answer Callout */}
      {calc.quickAnswer && (
        <div className="mb-8 p-5 rounded-xl bg-slate-50 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] flex items-start gap-3.5">
          <div className="p-2 rounded-lg bg-[#7C5CFC]/15 text-[#7C5CFC] shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-[#F5F7FA] uppercase tracking-wide">
              Quick Answer
            </h3>
            <p className="text-sm text-slate-600 dark:text-[#A7B0BC] mt-1 leading-relaxed">
              {calc.quickAnswer}
            </p>
          </div>
        </div>
      )}

      {/* Reserved Sponsor Placement */}
      <AdPlaceholder slot="banner" />

      {/* Content Blocks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        
        {/* How it Works */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
          <h2 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] mb-4 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#7C5CFC]" />
            How It Works
          </h2>
          <ol className="space-y-3">
            {calc.howItWorks.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-[#A7B0BC]">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] text-[11px] font-bold text-[#7C5CFC] shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Formula & Variables */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
          <h2 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] mb-4 flex items-center gap-2">
            <span className="font-mono text-[#7C5CFC] font-black text-sm">fx</span>
            Calculation Formula
          </h2>
          <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] font-mono text-xs text-emerald-600 dark:text-[#3CCB8E] mb-3 overflow-x-auto whitespace-pre-wrap">
            {calc.formula.display}
          </div>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-[#A7B0BC]">
            {calc.formula.variables.map((v, i) => (
              <li key={i} className="leading-relaxed">
                <strong className="text-slate-900 dark:text-[#F5F7FA]">{v.name}:</strong> {v.description}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Worked Example */}
      {calc.workedExample && (
        <div className="my-8 p-6 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
          <h2 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] mb-3">
            Worked Example
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33]">
              <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider block mb-2">
                Example Inputs:
              </span>
              <ul className="space-y-1 text-xs text-slate-900 dark:text-[#F5F7FA]">
                {Object.entries(calc.workedExample.inputs).map(([k, val]) => (
                  <li key={k} className="flex justify-between py-0.5 border-b border-slate-200 dark:border-[#252B33]/50 last:border-0">
                    <span className="text-slate-500 dark:text-[#A7B0BC]">{k}:</span>
                    <span className="font-medium font-mono">{val}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33]">
              <span className="text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider block mb-2">
                Step-by-Step Resolution:
              </span>
              <ul className="space-y-1 text-xs text-slate-600 dark:text-[#A7B0BC]">
                {calc.workedExample.calculationSteps.map((step, idx) => (
                  <li key={idx} className="font-mono leading-relaxed">
                    • {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-[#7C5CFC]/10 border border-[#7C5CFC]/30 flex items-center justify-between text-xs sm:text-sm">
            <span className="font-medium text-slate-900 dark:text-[#F5F7FA]">Final Calculated Output:</span>
            <span className="font-bold text-emerald-600 dark:text-[#3CCB8E] font-mono">{calc.workedExample.result}</span>
          </div>
        </div>
      )}

      {/* Important Notes & Required Platform Disclaimers */}
      <div className="my-8 p-6 rounded-2xl bg-slate-50 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33]">
        <h2 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] mb-3 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-500 dark:text-amber-400" />
          Important Notes & Limitations
        </h2>
        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-[#A7B0BC]">
          {calc.importantNotes.map((note, idx) => (
            <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
              <span className="text-[#7C5CFC] mt-1">•</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>

        {/* Global Mandatory Disclaimer */}
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-[#252B33] text-xs text-slate-500 dark:text-[#A7B0BC]/70 italic leading-relaxed">
          Calculator results are estimates for informational and planning purposes only. Actual earnings, rates and performance can vary based on platform policies, audience, geography, monetization eligibility, market conditions and other factors.
        </div>
      </div>

      {/* FAQ Section */}
      {calc.faqs && calc.faqs.length > 0 && (
        <FAQSection faqs={calc.faqs} />
      )}

      {/* Related Calculators */}
      {calc.relatedSlugs && calc.relatedSlugs.length > 0 && (
        <RelatedCalculators slugs={calc.relatedSlugs} currentSlug={calc.slug} />
      )}
    </div>
  );
}
