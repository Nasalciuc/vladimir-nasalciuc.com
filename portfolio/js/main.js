/**
 * VLADIMIR NASALCIUC PORTFOLIO - MAIN JAVASCRIPT
 * Enhanced with navigation highlighting and advanced features
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Vladimir Nasalciuc Portfolio - Loaded');
    
    // Initialize all features
    initNavigation();
    initSmoothScrolling();
    initAnimations();
    initTechTags();
    initScrollToTop();
    initContactTracking();
});

// === NAVIGATION HIGHLIGHTING ===
function initNavigation() {
    // Get current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    console.log('Current page:', currentPage);
    
    // Get all navigation items
    const navItems = document.querySelectorAll('.nav-item');
    console.log('Nav items found:', navItems.length);
    
    // Remove active class from all items first
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to current page
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        console.log('Checking:', href, 'against:', currentPage);
        
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')) {
            item.classList.add('active');
            console.log('Active set for:', href);
        }
    });
    
    // Add hover effects
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateX(5px)';
                this.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateX(0)';
            }
        });
    });
}

// === SMOOTH SCROLLING ===
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// === ANIMATIONS ===
function initAnimations() {
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

    // Observe all content sections
    const sections = document.querySelectorAll('.content-section, .experience-item, .project-item, .article-item, .achievement-item');
    sections.forEach(section => {
        // Set initial state
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Start observing
        observer.observe(section);
    });
}

// === TECH TAGS HOVER EFFECTS ===
function initTechTags() {
    const techTags = document.querySelectorAll('.tech-tag, .focus-tag');
    
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// === SCROLL TO TOP ===
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #3498db;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
        } else {
            scrollBtn.style.opacity = '0';
        }
    });
    
    // Scroll to top when clicked
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// === CONTACT TRACKING ===
function initContactTracking() {
    const contactLinks = document.querySelectorAll('.contact-link, .github-link a');
    
    contactLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Log contact interaction
            const linkType = this.textContent.trim();
            console.log(`Contact link clicked: ${linkType}`);
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}