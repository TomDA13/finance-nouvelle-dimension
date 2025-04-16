
import React, { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const overlay = document.querySelector('.page-gradient-overlay') as HTMLElement;
      if (overlay) {
        const scrollPercentage = Math.min(100, (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        overlay.style.backgroundPosition = `0 ${scrollPercentage}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on initial load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      <div className="page-gradient-overlay" />
      
      {/* Hero Section - Redesigned for better layout */}
      <section className="hero">
        <div className="container mx-auto px-4">
          <div className="hero-content text-center max-w-4xl mx-auto pt-28">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Donnez une nouvelle dimension à votre argent
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Gérez votre patrimoine, agrégez vos comptes, et recevez des conseils financiers personnalisés, tout en un seul endroit.
            </p>
            
            <div className="hero-image mb-12">
              <img 
                src="lovable-uploads/7c109932-9a59-4d89-8b8c-ce48414a9ea6.png" 
                alt="Tableau de bord Finsya" 
                className="dashboard-image mx-auto"
              />
            </div>
            
            <div className="hero-cta flex flex-col sm:flex-row justify-center gap-4 mb-16 mx-auto">
              <a href="#features" className="btn-primary">Commencer Gratuitement</a>
              <a href="#demo-video" className="btn-video">
                <span className="play-icon"><i className="fas fa-play"></i></span>
                <span>Voir la démo</span>
              </a>
            </div>
          </div>
          
          <div className="hero-stats mb-12">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">30K+</span>
                <span className="stat-text">Utilisateurs actifs</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">€2B+</span>
                <span className="stat-text">Actifs suivis</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-text">Satisfaction client</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">30K+</span>
              <span className="stat-text">Utilisateurs actifs</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">€2B+</span>
              <span className="stat-text">Actifs suivis</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-text">Satisfaction client</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <h2>Fonctionnalités Principales</h2>
            <p className="section-description">Découvrez comment notre plateforme peut transformer votre gestion financière</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Agrégation de Comptes</h3>
              <p>Connectez tous vos comptes bancaires en un seul endroit</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analyse Financière</h3>
              <p>Obtenez des insights détaillés sur vos finances</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Sécurité Avancée</h3>
              <p>Vos données sont protégées par un chiffrement de niveau bancaire</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>Comment Ça Marche</h2>
            <p className="section-description">Trois étapes simples pour commencer</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Créez Votre Compte</h3>
                <p>Inscrivez-vous en quelques secondes et accédez à la plateforme</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Connectez Vos Comptes</h3>
                <p>Liez vos comptes bancaires et vos investissements en toute sécurité</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Explorez et Optimisez</h3>
                <p>Visualisez votre situation financière et recevez des conseils personnalisés</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
