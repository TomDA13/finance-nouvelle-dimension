
import React from 'react';
import { Layout } from '@/components/Layout';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { DashboardPreview } from './components/DashboardPreview';
import { Testimonials } from './components/Testimonials';
import { PricingSection } from './components/PricingSection';
import { CTASection } from './components/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl text-gray-600 mb-8">Ils nous font confiance</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <span className="text-xl text-gray-400">BNP Paribas</span>
            <span className="text-xl text-gray-400">Société Générale</span>
            <span className="text-xl text-gray-400">Crédit Agricole</span>
            <span className="text-xl text-gray-400">AXA</span>
            <span className="text-xl text-gray-400">Boursorama</span>
          </div>
        </div>
      </section>
      <FeaturesSection />
      <DashboardPreview />
      <Testimonials />
      <PricingSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
