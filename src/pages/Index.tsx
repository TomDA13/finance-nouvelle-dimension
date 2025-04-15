
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Section: Hero */}
      <section className="hero">
        <div className="container">
          <h1>Bienvenue sur notre application</h1>
          <p>Une solution moderne pour gérer vos finances personnelles</p>
        </div>
      </section>

      {/* Section: Features */}
      <section className="features">
        <div className="container">
          <h2>Nos fonctionnalités</h2>
          <p>Des solutions adaptées à vos besoins</p>
        </div>
      </section>

      {/* Section: Testimonials with the improved gradient */}
      <section className="testimonials orange-gradient-section">
        <div className="testimonials-background"></div>
        <div className="container">
          <h2>Ce que disent nos utilisateurs</h2>
          <p>Rejoignez des milliers de clients satisfaits qui transforment leur gestion financière</p>
        </div>
      </section>

      {/* Section: Pricing */}
      <section className="pricing">
        <div className="container">
          <h2>Des formules adaptées à vos besoins</h2>
          <p>Choisissez l'offre qui correspond le mieux à votre situation financière</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
