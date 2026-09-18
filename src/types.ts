export type Category = 
  | 'All'
  | 'YouTube'
  | 'TikTok'
  | 'Instagram'
  | 'Affiliate'
  | 'Business'
  | 'Social Media';

export type Currency = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD';

export interface CalculatorMeta {
  id: string;
  name: string;
  slug: string;
  category: Category;
  description: string;
  keywords: string[];
  icon: string;
  isPopular?: boolean;
  shortIntro: string;
  quickAnswer: string;
  howItWorks: string[];
  formula: {
    display: string;
    variables: { name: string; description: string }[];
  };
  workedExample: {
    inputs: Record<string, string | number>;
    calculationSteps: string[];
    result: string;
  };
  resultMeaning: string;
  importantNotes: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
