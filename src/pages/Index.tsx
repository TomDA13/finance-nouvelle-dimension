
import React from 'react';
import { Button } from '@/components/ui/button';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { DashboardPreview } from './components/DashboardPreview';
import { Testimonials } from './components/Testimonials';
import { PricingSection } from './components/PricingSection';
import { CTASection } from './components/CTASection';
import { Logo } from './components/Logo';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Logo />
          <div className="flex items-center space-x-4">
            <a href="#features" className="text-gray-700 hover:text-primary transition">Fonctionnalités</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary transition">Tarifs</a>
            <Button variant="outline">Connexion</Button>
            <Button>Essai Gratuit</Button>
          </div>
        </div>
      </nav>

      <HeroSection />
      <FeaturesSection />
      <DashboardPreview />
      <Testimonials />
      <PricingSection />
      <CTASection />
      
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="text-gray-600 mt-4">Donnez une nouvelle dimension à votre argent</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Produit</h4>
            <nav className="space-y-2">
              <a href="#features" className="block text-gray-600 hover:text-primary">Fonctionnalités</a>
              <a href="#pricing" className="block text-gray-600 hover:text-primary">Tarifs</a>
            </nav>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ressources</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-primary">Blog</a>
              <a href="#" className="block text-gray-600 hover:text-primary">Support</a>
            </nav>
          </div>
          <div>
            <h4 className="font-bold mb-4">Légal</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-primary">CGV</a>
              <a href="#" className="block text-gray-600 hover:text-primary">Confidentialité</a>
            </nav>
          </div>
        </div>
        <div className="container mx-auto mt-8 text-center text-gray-500">
          © {new Date().getFullYear()} Finsya. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
};

export default Index;
