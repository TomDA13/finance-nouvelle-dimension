document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner les éléments
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const loginFormPopup = document.getElementById('loginFormPopup');
  const signupFormPopup = document.getElementById('signupFormPopup');
  const closeButtons = document.querySelectorAll('.close-button');
  const switchToSignup = document.getElementById('switchToSignup');
  const switchToLogin = document.getElementById('switchToLogin');
  const ctaSignupButton = document.getElementById('cta-signup-button');
  const heroSignupButton = document.querySelector('.hero-cta .btn-primary');

  // Fonction pour ouvrir le formulaire de connexion
  function openLoginForm(e) {
    if (e) e.preventDefault();
    loginFormPopup.classList.add('active');
    signupFormPopup.classList.remove('active');
  }

  // Fonction pour ouvrir le formulaire d'inscription
  function openSignupForm(e) {
    if (e) e.preventDefault();
    signupFormPopup.classList.add('active');
    loginFormPopup.classList.remove('active');
  }

  // Fonction pour fermer tous les formulaires
  function closeAllForms() {
    loginFormPopup.classList.remove('active');
    signupFormPopup.classList.remove('active');
  }

  // Gestion des clics
  loginBtn.addEventListener('click', openLoginForm);
  signupBtn.addEventListener('click', openSignupForm);
  
  // Fermer les formulaires quand on clique sur le bouton de fermeture
  closeButtons.forEach(button => {
    button.addEventListener('click', closeAllForms);
  });

  // Basculer entre les formulaires
  switchToSignup.addEventListener('click', function(e) {
    e.preventDefault();
    openSignupForm();
  });

  switchToLogin.addEventListener('click', function(e) {
    e.preventDefault();
    openLoginForm();
  });

  // Fermer les formulaires quand on clique en dehors
  window.addEventListener('click', function(e) {
    if (e.target === loginFormPopup) {
      closeAllForms();
    }
    if (e.target === signupFormPopup) {
      closeAllForms();
    }
  });

  // Gestion des soumissions de formulaires (pour éviter le rechargement de la page)
  const authForms = document.querySelectorAll('.auth-form');
  authForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Ici vous pourriez ajouter la logique de validation ou d'envoi des données
      alert('Formulaire soumis avec succès!');
      closeAllForms();
    });
  });

  // Add event listeners for the new CTA and hero buttons to open signup form
  if (ctaSignupButton) {
    ctaSignupButton.addEventListener('click', function(e) {
      e.preventDefault();
      openSignupForm();
    });
  }

  if (heroSignupButton) {
    heroSignupButton.addEventListener('click', function(e) {
      e.preventDefault();
      openSignupForm();
    });
  }

  // Initialisation du menu mobile et autres fonctionnalités
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const dropdownToggle = document.querySelectorAll('.dropdown-toggle');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Make sure dropdown menus work correctly
  if (dropdownToggle.length > 0) {
    dropdownToggle.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the # link from scrolling to top
        const parent = this.parentElement;
        parent.classList.toggle('active');
      });
    });
  }

  // Allow clicking outside to close dropdowns
  document.addEventListener('click', function(e) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  }, true);

  // Gestion des onglets du dashboard
  const tabButtons = document.querySelectorAll('.tab-button');
  
  if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Enlever la classe active de tous les boutons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Afficher le contenu de l'onglet correspondant
        const tabId = this.getAttribute('data-tab');
        document.querySelectorAll('.tab-pane').forEach(tab => {
          tab.classList.remove('active');
        });
        document.getElementById(tabId).classList.add('active');
      });
    });
  }

  // Gestion des dots pour les témoignages
  const dots = document.querySelectorAll('.dot');
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  
  if (dots.length > 0) {
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        // Enlever la classe active de tous les dots et témoignages
        dots.forEach(d => d.classList.remove('active'));
        testimonialCards.forEach(card => card.classList.remove('active'));
        
        // Ajouter la classe active au dot et au témoignage correspondant
        this.classList.add('active');
        testimonialCards[index].classList.add('active');
      });
    });
  }

  // Gestion du toggle de tarification
  const pricingToggle = document.getElementById('pricingToggle');
  const monthlyPrices = document.querySelectorAll('.price.monthly');
  const annualPrices = document.querySelectorAll('.price.annual');
  
  if (pricingToggle) {
    pricingToggle.addEventListener('change', function() {
      if (this.checked) {
        // Afficher les prix annuels
        monthlyPrices.forEach(price => price.style.display = 'none');
        annualPrices.forEach(price => price.style.display = 'inline');
      } else {
        // Afficher les prix mensuels
        annualPrices.forEach(price => price.style.display = 'none');
        monthlyPrices.forEach(price => price.style.display = 'inline');
      }
    });
  }

  // Gestion des FAQ accordéons
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const faqItem = this.parentNode;
        faqItem.classList.toggle('active');
      });
    });
  }
});
