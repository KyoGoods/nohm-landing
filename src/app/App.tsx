import { useEffect } from 'react';
import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/HeroSection';
import { FeaturesSection } from '@/app/components/FeaturesSection';
import { ServicesSection } from '@/app/components/ServicesSection';
import { HowItWorksSection } from '@/app/components/HowItWorksSection';
import { HomeIDSection } from '@/app/components/HomeIDSection';
import { ComparisonSection } from '@/app/components/ComparisonSection';
import { PricingSection } from '@/app/components/PricingSection';
import { TrustSection } from '@/app/components/TrustSection';
import { CTASection } from '@/app/components/CTASection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  useEffect(() => {
    // Set the page title
    document.title = 'NOHM - Private, Neutral Home Services';
  }, []);

  return (
    <div className="min-h-screen bg-[#050814]">
      <Header />
      <main>
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <ServicesSection />
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <HomeIDSection />
        <ComparisonSection />
        <div id="pricing">
          <PricingSection />
        </div>
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
