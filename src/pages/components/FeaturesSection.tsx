
import React from 'react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: '📊',
    title: 'Agrégation de Comptes',
    description: 'Synchronisez tous vos comptes bancaires et investissements.'
  },
  {
    icon: '💰',
    title: 'Suivi Patrimonial',
    description: 'Visualisez l'évolution de votre patrimoine net.'
  },
  {
    icon: '🤖',
    title: 'Conseils Personnalisés',
    description: 'Recevez des recommandations adaptées à votre profil.'
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Nos Fonctionnalités Clés</h2>
        <div className="grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white rounded-lg p-6 shadow-md transform transition-all",
                "hover:scale-105 hover:shadow-lg"
              )}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
