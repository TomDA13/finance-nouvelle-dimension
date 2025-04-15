document.addEventListener('DOMContentLoaded', function() {
    // Gestion du dégradé de fond en fonction du défilement
    const gradientOverlay = document.querySelector('.page-gradient-overlay');
    const useCasesSection = document.getElementById('pourquoi');
    const testimonialsSection = document.getElementById('temoignages');
    const pricingSection = document.getElementById('tarifs');
    
    if (gradientOverlay) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.scrollHeight;
            
            // Calculer la position relative dans la page (0 à 100%)
            const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
            
            // Ajuster la position du dégradé en fonction du défilement
            gradientOverlay.style.backgroundPosition = `0 ${scrollPercentage * 1.5}%`;
            
            // Adapter l'opacité en fonction des sections spécifiques
            if (useCasesSection && testimonialsSection) {
                const useCasesPosition = useCasesSection.getBoundingClientRect().top;
                const testimonialsPosition = testimonialsSection.getBoundingClientRect().top;
                
                // Ajuster l'opacité pour la transition use-cases -> testimonials
                if (useCasesPosition < windowHeight/2 && testimonialsPosition > 0) {
                    const fadeProgress = 1 - (testimonialsPosition / windowHeight);
                    gradientOverlay.style.opacity = Math.min(0.9, 0.6 + fadeProgress * 0.3);
                }
                // Réajuster pour la section tarifs
                else if (testimonialsPosition < 0 && pricingSection && pricingSection.getBoundingClientRect().top > 0) {
                    gradientOverlay.style.opacity = 0.9;
                }
            }
        });
    }

    // Code existant pour les onglets de la section "Dashboard Preview"
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Code existant pour les questions de la FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Toggle active class on the clicked item
            item.classList.toggle('active');
        });
    });

    // Code existant pour le toggle de tarification
    const pricingToggle = document.getElementById('pricingToggle');
    const monthlyPrices = document.querySelectorAll('.price.monthly');
    const annualPrices = document.querySelectorAll('.price.annual');
    
    if (pricingToggle) {
        pricingToggle.addEventListener('change', function() {
            if (this.checked) {
                // Show annual prices
                monthlyPrices.forEach(price => price.style.display = 'none');
                annualPrices.forEach(price => price.style.display = 'inline-block');
            } else {
                // Show monthly prices
                monthlyPrices.forEach(price => price.style.display = 'inline-block');
                annualPrices.forEach(price => price.style.display = 'none');
            }
        });
    }

    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});
