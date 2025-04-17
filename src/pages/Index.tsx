import React, { useEffect, useState } from 'react';
import DashboardTabs from '../components/DashboardTabs';
import Features from '../components/Features';

const Index = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

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

  const openLoginForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const openSignupForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSignupForm(true);
    setShowLoginForm(false);
  };

  const closeAllForms = () => {
    setShowLoginForm(false);
    setShowSignupForm(false);
  };

  return (
    <div className="landing-page">
      <div className="page-gradient-overlay" />
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo-container">
            <img src="../assets/logo.svg" alt="Finsya Logo" className="logo-img" />
          </div>
          
          <ul className="nav-menu">
            <li><a href="#fonctionnalites">Fonctionnalités</a></li>
            
            <li className="dropdown">
              <a href="#" className="dropdown-toggle">
                Ressources <i className="fa fa-chevron-down"></i>
              </a>
              <div className="dropdown-menu">
                <a href="#guide">Guide gratuit</a>
                <a href="#blog">Blog</a>
                <a href="#communaute">Communauté</a>
              </div>
            </li>
            
            <li><a href="#tarifs">Tarifs</a></li>
            
            <li className="dropdown">
              <a href="#" className="dropdown-toggle">
                À propos <i className="fa fa-chevron-down"></i>
              </a>
              <div className="dropdown-menu">
                <a href="#notre-histoire">Notre histoire</a>
                <a href="#securite">Sécurité</a>
                <a href="#roadmap">Roadmap</a>
                <a href="#contact">Contact</a>
              </div>
            </li>
          </ul>
          
          <div className="nav-auth-buttons">
            <li className="auth-item"><a href="#" onClick={openLoginForm}>Se connecter</a></li>
            <li className="auth-item"><a href="#" onClick={openSignupForm}>S'inscrire</a></li>
          </div>
          
          <div className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      
      {/* Login Form Popup */}
      {showLoginForm && (
        <div className="form-popup-overlay">
          <div className="form-popup">
            <div className="form-header">
              <h2>Connexion</h2>
              <button className="close-button" onClick={closeAllForms}>&times;</button>
            </div>
            <form className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Votre adresse email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password" name="password" placeholder="Votre mot de passe" required />
              </div>
              <div className="form-group remember-forgot">
                <div className="remember-me">
                  <input type="checkbox" id="remember" name="remember" />
                  <label htmlFor="remember">Se souvenir de moi</label>
                </div>
                <a href="#" className="forgot-password">Mot de passe oublié?</a>
              </div>
              <button type="submit" className="form-submit-btn">Se connecter</button>
            </form>
            <div className="form-footer">
              <p>Vous n'avez pas de compte? <a href="#" onClick={(e) => {e.preventDefault(); setShowLoginForm(false); setShowSignupForm(true);}}>S'inscrire</a></p>
            </div>
          </div>
        </div>
      )}

      {/* Signup Form Popup */}
      {showSignupForm && (
        <div className="form-popup-overlay">
          <div className="form-popup">
            <div className="form-header">
              <h2>Créer un compte</h2>
              <button className="close-button" onClick={closeAllForms}>&times;</button>
            </div>
            <form className="auth-form">
              <div className="form-group">
                <label htmlFor="fullname">Nom complet</label>
                <input type="text" id="fullname" name="fullname" placeholder="Votre nom complet" required />
              </div>
              <div className="form-group">
                <label htmlFor="signup-email">Email</label>
                <input type="email" id="signup-email" name="email" placeholder="Votre adresse email" required />
              </div>
              <div className="form-group">
                <label htmlFor="signup-password">Mot de passe</label>
                <input type="password" id="signup-password" name="password" placeholder="Créez un mot de passe" required />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirmer le mot de passe</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirmez votre mot de passe" required />
              </div>
              <div className="form-group terms">
                <input type="checkbox" id="terms" name="terms" required />
                <label htmlFor="terms">J'accepte les <a href="#">conditions d'utilisation</a> et la <a href="#">politique de confidentialité</a></label>
              </div>
              <button type="submit" className="form-submit-btn">Créer mon compte</button>
            </form>
            <div className="form-footer">
              <p>Vous avez déjà un compte? <a href="#" onClick={(e) => {e.preventDefault(); setShowSignupForm(false); setShowLoginForm(true);}}>Se connecter</a></p>
            </div>
          </div>
        </div>
      )}
      
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
      <Features />
      
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
