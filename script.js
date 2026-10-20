// ===================================
// MODAL FUNCTIONALITY
// ===================================

// Get DOM elements
const kandidatUtama = document.getElementById('kandidatUtama');
const modal = document.getElementById('modalVisiMisi');
const modalOverlay = document.getElementById('modalOverlay');
const btnCloseModal = document.getElementById('btnCloseModal');
const btnCloseModalFooter = document.getElementById('btnCloseModalFooter');

// Function to open modal
function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Function to close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Event Listeners
kandidatUtama.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
btnCloseModalFooter.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Prevent modal content click from closing modal
document.querySelector('.modal-content').addEventListener('click', function(event) {
    event.stopPropagation();
});

// ===================================
// SMOOTH SCROLL FOR MOBILE
// ===================================
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

// ===================================
// ADD LOADING ANIMATION FOR IMAGES
// ===================================
const images = document.querySelectorAll('.kandidat-image');

images.forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    // Set initial opacity
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe kandidat cards for entrance animation
const kandidatCards = document.querySelectorAll('.kandidat-card');
kandidatCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// ===================================
// WHATSAPP BUTTON TRACKING (Optional)
// ===================================
const whatsappButton = document.querySelector('.whatsapp-float');

whatsappButton.addEventListener('click', function() {
    console.log('WhatsApp button clicked - User wants to share aspiration');
    // You can add analytics tracking here if needed
});

// ===================================
// PERFORMANCE: Lazy Load Images
// ===================================
if ('loading' in HTMLImageElement.prototype) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===================================
// ADD PULSE EFFECT TO KANDIDAT UTAMA
// ===================================
function addPulseEffect() {
    const kandidatUtamaCard = document.getElementById('kandidatUtama');
    
    setInterval(() => {
        kandidatUtamaCard.style.transform = 'scale(1.02)';
        setTimeout(() => {
            kandidatUtamaCard.style.transform = 'scale(1)';
        }, 200);
    }, 3000); // Pulse every 3 seconds
}

// Initialize pulse effect after page load
window.addEventListener('load', () => {
    setTimeout(addPulseEffect, 1000);
});

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log('%c🗳️ Website Pilkades 2026', 'color: #1e3a8a; font-size: 20px; font-weight: bold;');
console.log('%cMari gunakan hak pilih dengan bijak!', 'color: #fbbf24; font-size: 14px;');
