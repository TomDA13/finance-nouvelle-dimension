document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    // Close menu when a link is clicked (optional, for single-page navigation)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });

    // Form popup functionality
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginFormPopup = document.getElementById('loginFormPopup');
    const signupFormPopup = document.getElementById('signupFormPopup');
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');
    const closeButtons = document.querySelectorAll('.close-button');
    const heroSignupButton = document.getElementById('hero-signup-button');
    const ctaSignupButton = document.getElementById('cta-signup-button');

    // Function to open a form popup
    function openFormPopup(formPopup) {
        formPopup.style.display = 'flex';
        document.body.classList.add('popup-active'); // Prevent scrolling
    }

    // Function to close a form popup
    function closeFormPopup(formPopup) {
        formPopup.style.display = 'none';
        document.body.classList.remove('popup-active'); // Allow scrolling
    }

    // Event listeners for opening the form popups
    if (loginBtn) {
        loginBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            openFormPopup(loginFormPopup);
        });
    }

    if (signupBtn || heroSignupButton || ctaSignupButton) {
        const signupButtons = [signupBtn, heroSignupButton, ctaSignupButton].filter(button => button !== null);
        signupButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default anchor behavior
                openFormPopup(signupFormPopup);
            });
        });
    }

    // Event listeners for switching between forms
    if (switchToSignup) {
        switchToSignup.addEventListener('click', function(event) {
            event.preventDefault();
            closeFormPopup(loginFormPopup);
            openFormPopup(signupFormPopup);
        });
    }

    if (switchToLogin) {
        switchToLogin.addEventListener('click', function(event) {
            event.preventDefault();
            closeFormPopup(signupFormPopup);
            openFormPopup(loginFormPopup);
        });
    }

    // Event listeners for closing the form popups
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formPopup = button.closest('.form-popup-overlay');
            closeFormPopup(formPopup);
        });
    });

    // Close popup if clicked outside the form
    window.addEventListener('click', function(event) {
        if (event.target === loginFormPopup) {
            closeFormPopup(loginFormPopup);
        }
        if (event.target === signupFormPopup) {
            closeFormPopup(signupFormPopup);
        }
    });

    // Prevent scrolling when popup is open
    document.addEventListener('DOMContentLoaded', function() {
        const pricingToggle = document.getElementById('pricingToggle');
        const monthlyPrices = document.querySelectorAll('.price.monthly');
        const annualPrices = document.querySelectorAll('.price.annual');

        if (pricingToggle) {
            pricingToggle.addEventListener('change', function() {
                if (this.checked) {
                    // Show annual prices, hide monthly prices
                    monthlyPrices.forEach(price => price.style.display = 'none');
                    annualPrices.forEach(price => price.style.display = 'inline');
                } else {
                    // Show monthly prices, hide annual prices
                    monthlyPrices.forEach(price => price.style.display = 'inline');
                    annualPrices.forEach(price => price.style.display = 'none');
                }
            });
        }
    });

    // FAQ items functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon i');

        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('open')) {
                    otherItem.classList.remove('open');
                    otherItem.querySelector('.faq-answer').style.display = 'none';
                    otherItem.querySelector('.faq-icon i').classList.remove('fa-minus');
                    otherItem.querySelector('.faq-icon i').classList.add('fa-plus');
                }
            });

            item.classList.toggle('open');
            if (item.classList.contains('open')) {
                answer.style.display = 'block';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                answer.style.display = 'none';
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });
});

// Testimonials slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.testimonials-slider');
    const cards = document.querySelectorAll('.testimonial-card');
    const dotsContainer = document.querySelector('.testimonial-dots');
    let currentCard = 0;

    // Create dots
    cards.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToCard(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentCard) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function showCard(index) {
        cards.forEach(card => card.classList.remove('active'));
        cards[index].classList.add('active');
    }

    function goToCard(index) {
        currentCard = index;
        showCard(currentCard);
        updateDots();
    }

    function nextCard() {
        currentCard = (currentCard + 1) % cards.length;
        goToCard(currentCard);
    }

    // Initialize
    showCard(currentCard);
    updateDots();

    // Set interval for auto sliding
    setInterval(nextCard, 5000);
});

// Pricing toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const pricingToggle = document.getElementById('pricingToggle');
    const monthlyPrices = document.querySelectorAll('.price.monthly');
    const annualPrices = document.querySelectorAll('.price.annual');

    if (pricingToggle) {
        pricingToggle.addEventListener('change', function() {
            if (this.checked) {
                // Show annual prices, hide monthly prices
                monthlyPrices.forEach(price => price.style.display = 'none');
                annualPrices.forEach(price => price.style.display = 'inline');
            } else {
                // Show monthly prices, hide annual prices
                monthlyPrices.forEach(price => price.style.display = 'inline');
                annualPrices.forEach(price => price.style.display = 'none');
            }
        });
    }
});

// Données des produits pour le carrousel
const productData = {
    actions: [
        { name: "Apple", symbol: "AAPL", value: "62 230 €", change: "+7 815 €", percent: "+14,36%", logo: "🍎" },
        { name: "Tesla", symbol: "TSLA", value: "18 230 €", change: "+3 686 €", percent: "+25,34%", logo: "🚗" },
        { name: "Microsoft", symbol: "MSFT", value: "8 750 €", change: "+1 340 €", percent: "+18,08%", logo: "💻" }
    ],
    immobilier: [
        { name: "Studio Paris", value: "280 000 €", change: "+15 000 €", percent: "+5,66%", logo: "🏠" },
        { name: "Appart Lyon", value: "320 000 €", change: "+18 000 €", percent: "+5,94%", logo: "🏢" }
    ],
    crypto: [
        { name: "Bitcoin", symbol: "BTC", value: "42 230 €", change: "+3 815 €", percent: "+9,93%", logo: "₿" },
        { name: "Ethereum", symbol: "ETH", value: "2 950 €", change: "+210 €", percent: "+7,66%", logo: "Ξ" }
    ],
    epargne: [
        { name: "Livret A", value: "12 500 €", change: "+250 €", percent: "+2,04%", logo: "🏦" },
        { name: "PEL", value: "45 000 €", change: "+900 €", percent: "+2,04%", logo: "💰" }
    ],
    startup: [
        { name: "StartupA", value: "50 000 €", change: "+5 000 €", percent: "+11,11%", logo: "🚀" },
        { name: "StartupB", value: "75 000 €", change: "+8 000 €", percent: "+11,94%", logo: "💡" }
    ],
    exotique: [
        { name: "Vin", value: "15 000 €", change: "+1 500 €", percent: "+11,11%", logo: "🍷" },
        { name: "Art", value: "25 000 €", change: "+2 000 €", percent: "+8,70%", logo: "🎨" }
    ]
};

// Initialisation du carrousel de produits
function initProductCarousel() {
    const productButtons = document.querySelectorAll('.product-button');
    const cardContainer = document.getElementById('product-cards');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    function updateCards(productType) {
        const products = productData[productType];
        cardContainer.innerHTML = products.map(product => `
            <div class="product-card">
                <div class="product-card-header">
                    <div class="product-logo">${product.logo}</div>
                    <div>
                        <h3>${product.name}</h3>
                        ${product.symbol ? `<span class="product-symbol">${product.symbol}</span>` : ''}
                    </div>
                </div>
                <div class="product-value">${product.value}</div>
                <div class="product-change">
                    ${product.change} (${product.percent})
                </div>
            </div>
        `).join('');
    }

    productButtons.forEach(button => {
        button.addEventListener('click', () => {
            productButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const productType = button.getAttribute('data-product');
            updateCards(productType);
        });
    });

    // Initialiser avec le premier type de produit
    updateCards('actions');

    let scrollAmount = 0;
    const scrollStep = 300;

    prevBtn.addEventListener('click', () => {
        scrollAmount = Math.max(scrollAmount - scrollStep, 0);
        cardContainer.scroll({ left: scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        scrollAmount = Math.min(scrollAmount + scrollStep, cardContainer.scrollWidth - cardContainer.clientWidth);
        cardContainer.scroll({ left: scrollAmount, behavior: 'smooth' });
    });
}

// Appeler l'initialisation une fois le DOM chargé
document.addEventListener('DOMContentLoaded', () => {
    initProductCarousel();
});
