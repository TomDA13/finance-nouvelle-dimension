
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
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Build Your Amazing App</h1>
            <p>A beautiful landing page with smooth gradient transitions between sections</p>
            <div className="hero-cta">
              <a href="#features" className="btn-primary">Get Started</a>
              <a href="#how-it-works" className="btn-outline">Learn More</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="dashboard-placeholder">
              <p className="placeholder-text">Beautiful app dashboard visualization would appear here</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <h2>Awesome Features</h2>
            <p className="section-description">Discover what makes our platform special</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Easy Integration</h3>
              <p>Integrate with your favorite tools seamlessly</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast Performance</h3>
              <p>Lightning-fast loading times for your applications</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure Platform</h3>
              <p>Enterprise-grade security for all your data</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p className="section-description">Simple steps to get started with our platform</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Create Your Account</h3>
                <p>Sign up in seconds and get instant access to our platform</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Configure Your Project</h3>
                <p>Set up your project with our intuitive configuration wizard</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Launch & Scale</h3>
                <p>Deploy your project and scale it as your needs grow</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
