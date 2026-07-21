// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Cart Functionality
    let cartCount = 0;
    const cartCountEl = document.getElementById('cart-count');
    const cartBtn = document.getElementById('cart-btn');
    
    document.querySelectorAll('.product-card button').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.textContent.includes('View Details')) {
                cartCount++;
                if (cartCountEl) cartCountEl.textContent = cartCount;
                
                // Visual feedback
                if (cartBtn) {
                    cartBtn.classList.add('scale-110');
                    setTimeout(() => cartBtn.classList.remove('scale-110'), 200);
                }
            }
        });
    });

    // Add to Cart buttons in shop page
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            cartCount++;
            if (cartCountEl) cartCountEl.textContent = cartCount;
            
            // Visual feedback
            if (cartBtn) {
                cartBtn.classList.add('scale-110');
                setTimeout(() => cartBtn.classList.remove('scale-110'), 200);
            }
            
            // Show feedback
            this.textContent = 'Added!';
            this.classList.add('bg-brand-light', 'text-brand-dark');
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.classList.remove('bg-brand-light', 'text-brand-dark');
            }, 1500);
        });
    });

    // Form validation feedback
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            if (this.querySelector('input[type="email"]')) {
                const email = this.querySelector('input[type="email"]');
                if (email.value && email.validity.valid) {
                    // Let the form submit naturally or handle via JS
                }
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
