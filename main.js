// Mobile navigation toggle functionality
function toggleMobileNav() {
    const button = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    
    if (!button || !menu) return;
    
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    
    // Toggle aria-expanded attribute
    button.setAttribute('aria-expanded', (!isExpanded).toString());
    
    // Toggle menu visibility
    if (isExpanded) {
        menu.classList.add('hidden');
    } else {
        menu.classList.remove('hidden');
    }
}

// Smooth scrolling for anchor links with header offset
function smoothScrollToAnchor(targetId) {
    const targetElement = document.getElementById(targetId);
    const header = document.querySelector('header');
    
    if (!targetElement || !header) return;
    
    const headerHeight = header.offsetHeight;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; // Extra 20px padding
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Form submission handler stub
function handleFormSubmit(event) {
    event.preventDefault();
    console.info('Form submission prevented - placeholder functionality');
    
    // Get form data (if needed for future implementation)
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    console.info('Form data:', data);
    
    // Placeholder success message
    alert('Thank you for your interest! This is a demo - form submission is not yet implemented.');
}

// Dark mode toggle stub (non-persistent)
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    console.info('Dark mode toggled (non-persistent demo)');
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu button event listener
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileNav);
    }
    
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            if (targetId) {
                smoothScrollToAnchor(targetId);
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                const menuButton = document.getElementById('mobile-menu-button');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    toggleMobileNav();
                }
            }
        });
    });
    
    // Form submission handlers
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
    
    // Dark mode toggle button
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuButton = document.getElementById('mobile-menu-button');
        
        if (mobileMenu && menuButton && 
            !mobileMenu.classList.contains('hidden') &&
            !mobileMenu.contains(event.target) && 
            !menuButton.contains(event.target)) {
            toggleMobileNav();
        }
    });
    
    // Handle escape key to close mobile menu
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                toggleMobileNav();
            }
        }
    });
});

// Export functions for potential testing or external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleMobileNav,
        smoothScrollToAnchor,
        handleFormSubmit,
        toggleDarkMode
    };
}