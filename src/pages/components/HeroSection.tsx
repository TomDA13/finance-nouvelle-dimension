
import React from 'react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-[#FEC6A1]/20 to-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Donnez une nouvelle dimension à votre argent
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Gérez votre patrimoine, agrégez vos comptes, et recevez des conseils financiers 
            personnalisés, tout en un seul endroit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#demo">Commencer Gratuitement</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto flex items-center gap-2" 
              asChild
            >
              <a href="#demo-video">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <i className="fas fa-play text-white text-sm"></i>
                </span>
                <span>Voir la démo</span>
              </a>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <span className="block text-2xl font-bold text-gray-900">30K+</span>
              <span className="text-gray-600">Utilisateurs actifs</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-gray-900">€2B+</span>
              <span className="text-gray-600">Actifs suivis</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-gray-900">95%</span>
              <span className="text-gray-600">Satisfaction client</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
            <p className="text-gray-500 text-center">
              Ici, une capture du tableau de bord principal avec vue d'ensemble du patrimoine
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
