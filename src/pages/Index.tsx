
import React, { useEffect } from 'react';
import DashboardTabs from '../components/DashboardTabs';

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
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <div className="logo-container">
              <span className="logo">FinDash</span>
            </div>
            
            <div className="nav-links">
              <a href="#features" className="nav-link">Fonctionnalités</a>
              <a href="#how-it-works" className="nav-link">Comment ça marche</a>
              <a href="#pricing" className="nav-link">Tarifs</a>
              <a href="#faq" className="nav-link">FAQ</a>
            </div>
            
            <div className="nav-auth">
              <a href="/login" className="btn-outline">Se connecter</a>
              <a href="/signup" className="btn-primary">S'inscrire</a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Donnez une nouvelle dimension à votre argent</h1>
            <p>Gérez votre patrimoine, agrégez vos comptes, et recevez des conseils financiers personnalisés, tout en un seul endroit.</p>
            <div className="hero-cta">
              <a href="#features" className="btn-primary">Commencer Gratuitement</a>
              <a href="#how-it-works" className="btn-outline">Voir la démo</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="dashboard-placeholder">
              <p className="placeholder-text">Ici, une capture du tableau de bord principal avec vue d'ensemble du patrimoine</p>
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
      
      {/* Dashboard Preview Section */}
      <section className="dashboard-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Une interface intuitive et puissante</h2>
            <p className="section-description">Naviguez facilement à travers nos tableaux de bord conçus pour vous donner un contrôle total sur vos finances.</p>
          </div>
          
          <DashboardTabs />
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
