
import React from 'react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-[#FEC6A1]/20 to-white">
      <div className="container mx-auto flex items-center">
        <div className="w-1/2 pr-12">
          <h1 className="text-5xl font-bold text-black mb-6">Donnez une nouvelle dimension à votre argent</h1>
          <p className="text-xl text-gray-600 mb-8">Agrégez vos comptes, suivez votre patrimoine et recevez des conseils financiers personnalisés, le tout en un seul endroit.</p>
          <div className="flex space-x-4">
            <Button size="lg">Commencer gratuitement</Button>
            <Button variant="outline" size="lg">Voir la démo</Button>
          </div>
        </div>
        <div className="w-1/2">
          <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
            Dashboard Placeholder
          </div>
        </div>
      </div>
    </section>
  );
};
