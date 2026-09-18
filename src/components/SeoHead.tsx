import { useEffect } from 'react';
import { CalculatorMeta } from '../types';

interface SeoHeadProps {
  title: string;
  description: string;
  canonical?: string;
  calculator?: CalculatorMeta;
  breadcrumbs?: { label: string; href?: string }[];
}

export function SeoHead({ title, description, canonical, calculator, breadcrumbs }: SeoHeadProps) {
  useEffect(() => {
    // Update Title
    document.title = title.includes('CREATORCALC') ? title : `${title} | CREATORCALC`;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', 'https://creatorcalc.com/og-image.svg');

    let twImage = document.querySelector('meta[name="twitter:image"]');
    if (!twImage) {
      twImage = document.createElement('meta');
      twImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twImage);
    }
    twImage.setAttribute('content', 'https://creatorcalc.com/og-image.svg');

    // Update Canonical
    const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://creatorcalc.com');
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', currentUrl);

    // JSON-LD structured data script
    const scriptId = 'jsonld-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData: any[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'CREATORCALC',
        'url': 'https://creatorcalc.com',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://creatorcalc.com/calculators?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': b.label,
          'item': b.href ? `https://creatorcalc.com${b.href}` : currentUrl
        }))
      });
    }

    if (calculator) {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        'name': calculator.name,
        'applicationCategory': 'BusinessApplication',
        'operatingSystem': 'All',
        'description': calculator.description,
        'url': `https://creatorcalc.com${calculator.slug}`,
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        }
      });

      if (calculator.faqs && calculator.faqs.length > 0) {
        structuredData.push({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': calculator.faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer
            }
          }))
        });
      }
    }

    scriptTag.textContent = JSON.stringify(structuredData);
  }, [title, description, canonical, calculator, breadcrumbs]);

  return null;
}
