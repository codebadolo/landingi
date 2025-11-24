/* =========================================
   HEADER SCROLL EFFECT
========================================= */
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


/* =========================================
   HERO CAROUSEL - 2 secondes
========================================= */
let heroIndex = 0;
const heroScreens = document.querySelectorAll(".hero-screen");

setInterval(() => {
    heroScreens.forEach(screen => screen.classList.remove("active"));
    heroIndex = (heroIndex + 1) % heroScreens.length;
    heroScreens[heroIndex].classList.add("active");
}, 2000);


/* =========================================
   FONCTIONNALITÉS CAROUSEL - 5 secondes
========================================= */
let fonctionIndex = 0;
const fonctionScreens = document.querySelectorAll(".fonction-screen");

const titles = [
    "Recherche rapide de prestataires",
    "Chat intégré et prise de contact instantanée",
    "Notation et avis pour garantir la qualité"
];

const descriptions = [
    "Trouvez en quelques secondes le professionnel qu'il vous faut près de chez vous.",
    "Discutez directement avec les prestataires avant d'accepter une prestation.",
    "Consultez les avis, les notes et choisissez les meilleurs prestataires."
];

const titleElement = document.getElementById("fonction-title");
const desElement = document.getElementById("fonction-description");

setInterval(() => {
    fonctionScreens.forEach(screen => screen.classList.remove("active"));
    fonctionIndex = (fonctionIndex + 1) % fonctionScreens.length;

    fonctionScreens[fonctionIndex].classList.add("active");
    titleElement.textContent = titles[fonctionIndex];
    desElement.textContent = descriptions[fonctionIndex];
}, 5000);


/* =========================================
   ANIMATION DES STATISTIQUES
========================================= */
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 secondes
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target.toLocaleString() + (target === 98 ? '%' : '+');
            }
        };
        
        updateCounter();
    });
};

// Déclencher l'animation au scroll
const statsSection = document.querySelector('.stats');
let statsAnimated = false;

window.addEventListener('scroll', () => {
    if (!statsAnimated && statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            animateStats();
            statsAnimated = true;
        }
    }
});


/* =========================================
   BOUTON SCROLL TO TOP
========================================= */
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


/* =========================================
   SMOOTH SCROLL POUR NAVIGATION
========================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


/* =========================================
   ANIMATION AU SCROLL (OPTIONNEL)
   Ajoute des animations aux éléments quand ils deviennent visibles
========================================= */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les cartes de témoignages
document.querySelectorAll('.temoignage-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});


/* =========================================
   PRÉCHARGEMENT DES IMAGES (OPTIONNEL)
   Pour éviter les saccades lors du changement d'images
========================================= */
window.addEventListener('load', () => {
    const imagesToPreload = [
        'screen1.jpg',
        'screen2.jpg',
        'screen3.jpg',
        'feature1.jpg',
        'feature2.jpg',
        'feature3.jpg'
    ];

    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});


// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const isOpen = item.classList.contains('active');

        // fermer tous les items
        faqItems.forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-answer').style.display = 'none';
        });

        // ouvrir l'item cliqué si fermé
        if (!isOpen) {
            item.classList.add('active');
            answer.style.display = 'block';
        }
    });
});
