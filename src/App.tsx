import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CalculatorsIndexPage } from './pages/CalculatorsIndexPage';
import { CategoryPage } from './pages/CategoryPage';
import { CalculatorDetailPage } from './pages/CalculatorDetailPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { SitemapPage } from './pages/SitemapPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CALCULATORS } from './data/calculators';

function AppContent() {
  const { pathname, navigate } = useRouter();

  // Normalize path (strip trailing slash if not root)
  const normalizedPath = pathname.length > 1 && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname;

  // Canonical redirect handling
  useEffect(() => {
    if (normalizedPath === '/sponsorship-rate-calculator') {
      navigate('/sponsorship-calculator', { replace: true });
    } else if (normalizedPath === '/instagram-engagement-calculator') {
      navigate('/instagram-engagement-rate-calculator', { replace: true });
    }
  }, [normalizedPath, navigate]);

  const renderRoute = () => {
    // Home
    if (normalizedPath === '' || normalizedPath === '/') {
      return <HomePage />;
    }

    // All Calculators Hub
    if (normalizedPath === '/calculators') {
      return <CalculatorsIndexPage />;
    }

    // Category Pages
    if (normalizedPath === '/youtube') {
      return <CategoryPage categoryKey="youtube" />;
    }
    if (normalizedPath === '/tiktok') {
      return <CategoryPage categoryKey="tiktok" />;
    }
    if (normalizedPath === '/instagram') {
      return <CategoryPage categoryKey="instagram" />;
    }
    if (normalizedPath === '/affiliate') {
      return <CategoryPage categoryKey="affiliate" />;
    }
    if (normalizedPath === '/business') {
      return <CategoryPage categoryKey="business" />;
    }
    if (normalizedPath === '/social-media') {
      return <CategoryPage categoryKey="social-media" />;
    }

    // Static Pages
    if (normalizedPath === '/about') {
      return <AboutPage />;
    }
    if (normalizedPath === '/privacy') {
      return <PrivacyPage />;
    }
    if (normalizedPath === '/terms') {
      return <TermsPage />;
    }
    if (normalizedPath === '/sitemap') {
      return <SitemapPage />;
    }

    // Backward compatibility aliases for legacy calculator routes
    if (normalizedPath === '/instagram-engagement-calculator') {
      const matched = CALCULATORS.find(c => c.slug === '/instagram-engagement-rate-calculator');
      if (matched) return <CalculatorDetailPage calc={matched} />;
    }
    if (normalizedPath === '/sponsorship-rate-calculator') {
      const matched = CALCULATORS.find(c => c.slug === '/sponsorship-calculator');
      if (matched) return <CalculatorDetailPage calc={matched} />;
    }

    // Check individual calculator routes
    const matchedCalc = CALCULATORS.find(c => c.slug === normalizedPath);
    if (matchedCalc) {
      return <CalculatorDetailPage calc={matchedCalc} />;
    }

    // 404
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0B0D10] text-slate-900 dark:text-[#F5F7FA] font-sans antialiased selection:bg-[#7C5CFC]/30 selection:text-slate-900 dark:selection:text-[#F5F7FA] transition-colors duration-200">
      <Header />
      <main className="flex-1 w-full" id="main-content">
        {renderRoute()}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
}
