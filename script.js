// ====== MOBILE MENU TOGGLE ======
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '&#9776;'; // Hamburger icon
    document.querySelector('.navbar').appendChild(menuToggle);

    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });
});

// ====== SCROLL ANIMATION EFFECTS ======
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.hero-content, .hero-image, .card, .testimonial, .final-cta')
    .forEach(el => observer.observe(el));

// ====== PAYSTACK PAYMENT FUNCTION (for future course page) ======
function payWithPaystack(amount, email) {
    let handler = PaystackPop.setup({
        key: 'pk_live_4c1b8a520c665191d48666564fd19e11feadb30e', // Your live public key
        email: email,
        amount: amount * 100, // Amount in Kobo
        currency: 'NGN', // Can be changed to 'USD' if you enable multi-currency
        callback: function(response) {
            alert('Payment successful. Reference: ' + response.reference);
        },
        onClose: function() {
            alert('Payment window closed.');
        }
    });
    handler.openIframe();
}
