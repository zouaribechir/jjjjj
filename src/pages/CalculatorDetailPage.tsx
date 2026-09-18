import { CalculatorMeta } from '../types';
import { CalculatorLayout } from '../components/CalculatorLayout';
import { YouTubeMoneyCalculator } from '../calculators/YouTubeMoneyCalculator';
import { YouTubeRpmCalculator } from '../calculators/YouTubeRpmCalculator';
import { YouTubeCpmCalculator } from '../calculators/YouTubeCpmCalculator';
import { TikTokMoneyCalculator } from '../calculators/TikTokMoneyCalculator';
import { TikTokEngagementRateCalculator } from '../calculators/TikTokEngagementRateCalculator';
import { InstagramEngagementCalculator } from '../calculators/InstagramEngagementCalculator';
import { AffiliateCommissionCalculator } from '../calculators/AffiliateCommissionCalculator';
import { ProfitMarginCalculator } from '../calculators/ProfitMarginCalculator';
import { AdRevenueCalculator } from '../calculators/AdRevenueCalculator';
import { SubscriberGrowthCalculator } from '../calculators/SubscriberGrowthCalculator';
import { VideoRoiCalculator } from '../calculators/VideoRoiCalculator';
import { SponsorshipCalculator } from '../calculators/SponsorshipCalculator';

export function CalculatorDetailPage({ calc }: { calc: CalculatorMeta }) {
  const renderCalculatorComponent = () => {
    switch (calc.slug) {
      case '/youtube-money-calculator':
        return <YouTubeMoneyCalculator />;
      case '/youtube-rpm-calculator':
        return <YouTubeRpmCalculator />;
      case '/youtube-cpm-calculator':
        return <YouTubeCpmCalculator />;
      case '/tiktok-money-calculator':
        return <TikTokMoneyCalculator />;
      case '/tiktok-engagement-rate-calculator':
        return <TikTokEngagementRateCalculator />;
      case '/instagram-engagement-rate-calculator':
      case '/instagram-engagement-calculator':
        return <InstagramEngagementCalculator />;
      case '/affiliate-commission-calculator':
        return <AffiliateCommissionCalculator />;
      case '/profit-margin-calculator':
        return <ProfitMarginCalculator />;
      case '/ad-revenue-calculator':
        return <AdRevenueCalculator />;
      case '/subscriber-growth-calculator':
        return <SubscriberGrowthCalculator />;
      case '/video-roi-calculator':
        return <VideoRoiCalculator />;
      case '/sponsorship-rate-calculator':
      case '/sponsorship-calculator':
        return <SponsorshipCalculator />;
      default:
        return <div>Calculator component not found</div>;
    }
  };

  return (
    <CalculatorLayout calc={calc}>
      {renderCalculatorComponent()}
    </CalculatorLayout>
  );
}
