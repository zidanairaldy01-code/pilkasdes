// ===================================
// MODAL FUNCTIONALITY
// ===================================

// Get DOM elements
const kandidatUtama = document.getElementById('kandidatUtama');
const modal = document.getElementById('modalVisiMisi');
const modalOverlay = document.getElementById('modalOverlay');
const btnCloseModal = document.getElementById('btnCloseModal');
const btnCloseModalFooter = document.getElementById('btnCloseModalFooter');

// Simulasi elements
const btnSimulasiPemilihan = document.getElementById('btnSimulasiPemilihan');
const modalSimulasi = document.getElementById('modalSimulasi');
const modalSimulasiOverlay = document.getElementById('modalSimulasiOverlay');
const btnCloseSimulasi = document.getElementById('btnCloseSimulasi');

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

// Function to open simulasi modal
function openSimulasiModal() {
    modalSimulasi.classList.add('active');
    document.body.style.overflow = 'hidden';
    resetSimulasi();
    updateProgress(1);
}

// Function to close simulasi modal
function closeSimulasi() {
    modalSimulasi.classList.remove('active');
    document.body.style.overflow = '';
}

// Event Listeners
kandidatUtama.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
btnCloseModalFooter.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

btnSimulasiPemilihan.addEventListener('click', openSimulasiModal);
btnCloseSimulasi.addEventListener('click', closeSimulasi);
modalSimulasiOverlay.addEventListener('click', closeSimulasi);

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        if (modal.classList.contains('active')) {
            closeModal();
        }
        if (modalSimulasi.classList.contains('active')) {
            closeSimulasi();
        }
    }
});

// Prevent modal content click from closing modal
document.querySelector('.modal-content').addEventListener('click', function(event) {
    event.stopPropagation();
});

if (document.querySelector('.modal-simulasi-content')) {
    document.querySelector('.modal-simulasi-content').addEventListener('click', function(event) {
        event.stopPropagation();
    });
}

// ===================================
// SIMULASI PEMILIHAN FUNCTIONS
// ===================================

let selectedKandidat = '02'; // Default selected
let currentStep = 1;

function updateProgress(step) {
    currentStep = step;
    const progressFill = document.getElementById('progressFill');
    const progressStep = document.getElementById('progressStep');
    const progressPercent = document.getElementById('progressPercent');
    
    const totalSteps = 5;
    const percent = (step / totalSteps) * 100;
    
    progressFill.style.width = percent + '%';
    progressStep.textContent = `Langkah ${step} dari ${totalSteps}`;
    progressPercent.textContent = Math.round(percent) + '%';
}

function showStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.simulasi-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Show target step
    const targetStep = document.getElementById('step' + stepNumber);
    if (targetStep) {
        targetStep.classList.add('active');
    }
    
    updateProgress(stepNumber);
}

function nextStep(stepNumber) {
    // Validate current step before proceeding
    if (currentStep === 1) {
        const nik = document.getElementById('nikInput').value;
        const token = document.getElementById('tokenInput').value;
        
        if (!nik || nik.length < 16) {
            alert('⚠️ Mohon masukkan NIK yang valid (16 digit)');
            return;
        }
        
        if (!token || token.length < 3) {
            alert('⚠️ Mohon masukkan Token Voting');
            return;
        }
        
        // Update confirmation
        document.getElementById('confirmNIK').textContent = nik;
        document.getElementById('confirmToken').textContent = token;
    }
    
    if (currentStep === 2) {
        // Update preview kandidat terpilih
        const kandidatName = selectedKandidat === '01' ? 'Calon Nomor 01' : 
                             selectedKandidat === '02' ? 'Kandidat Utama (Nomor 02)' : 
                             'Calon Nomor 03';
        document.getElementById('previewNama').textContent = kandidatName;
        document.getElementById('previewBadge').textContent = selectedKandidat;
    }
    
    if (currentStep === 3 && stepNumber === 4) {
        // Simulate processing
        showStep(4);
        setTimeout(() => {
            nextStep(5);
        }, 2000); // 2 seconds loading
        return;
    }
    
    if (stepNumber === 5) {
        // Generate random transaction ID
        const transactionId = 'VOTE-2026-' + Math.random().toString(36).substr(2, 8).toUpperCase();
        document.getElementById('transactionId').textContent = transactionId;
        
        // Set current time
        const now = new Date();
        const dateStr = now.toLocaleDateString('id-ID', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        });
        const timeStr = now.toLocaleTimeString('id-ID', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        document.getElementById('votingTime').textContent = `${dateStr}, ${timeStr} WIB`;
    }
    
    showStep(stepNumber);
}

function prevStep(stepNumber) {
    showStep(stepNumber);
}

function selectKandidat(element, kandidatNumber) {
    // Remove active from all
    document.querySelectorAll('.kandidat-simulasi-card').forEach(card => {
        card.classList.remove('active');
        card.querySelector('.checkbox-sim').classList.remove('checked');
    });
    
    // Add active to selected
    element.classList.add('active');
    element.querySelector('.checkbox-sim').classList.add('checked');
    
    selectedKandidat = kandidatNumber;
}

function resetSimulasi() {
    currentStep = 1;
    selectedKandidat = '02';
    
    // Reset form
    document.getElementById('nikInput').value = '';
    document.getElementById('tokenInput').value = '';
    
    // Reset selection
    document.querySelectorAll('.kandidat-simulasi-card').forEach(card => {
        card.classList.remove('active');
        card.querySelector('.checkbox-sim').classList.remove('checked');
    });
    
    // Set default selection to kandidat 02
    const defaultCard = document.querySelector('[data-kandidat="02"]');
    if (defaultCard) {
        defaultCard.classList.add('active');
        defaultCard.querySelector('.checkbox-sim').classList.add('checked');
    }
    
    // Show first step
    showStep(1);
}

function restartSimulasi() {
    resetSimulasi();
}

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
