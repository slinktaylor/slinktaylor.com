// Smooth page transitions
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to container
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '1';
    }
    
    // Handle navigation clicks for smooth transitions
    const navLinks = document.querySelectorAll('a[href$=".html"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Fade out current page
            container.style.opacity = '0';
            
            // Navigate to new page after fade
            setTimeout(() => {
                window.location.href = href;
            }, 250);
        });
    });
    
    // Enhanced hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.nav-link, .streaming-link, .social-link, .logo a, .dpk-logo, .book-me-btn');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('logo') ? 'scale(1.05)' : 'scale(1.1)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add click animations
    interactiveElements.forEach(element => {
        element.addEventListener('mousedown', function() {
            this.style.transform = this.classList.contains('logo') ? 'scale(0.98)' : 'scale(1.05)';
        });
        
        element.addEventListener('mouseup', function() {
            this.style.transform = this.classList.contains('logo') ? 'scale(1.05)' : 'scale(1.1)';
        });
    });
    
    // Handle logo clicks for homepage navigation
    const logoLinks = document.querySelectorAll('.logo a');
    logoLinks.forEach(logo => {
        logo.addEventListener('click', function(e) {
            if (window.location.pathname.includes('index.html') || 
                window.location.pathname === '/' || 
                window.location.pathname.endsWith('/')) {
                e.preventDefault();
                // Scroll to top if already on homepage
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
    
    // Add subtle parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.logo');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Return to homepage on Escape key
            if (!window.location.pathname.includes('index.html') &&
                window.location.pathname !== '/' &&
                !window.location.pathname.endsWith('/')) {
                window.location.href = 'index.html';
            }
        }
    });

    // =====================================================
    // DPK Video Gallery - Pause other videos when one plays
    // Works with masonry layout
    // =====================================================
    const galleryVideos = document.querySelectorAll('.masonry-item video');

    // When a video starts playing, pause all others
    galleryVideos.forEach(video => {
        video.addEventListener('play', () => {
            galleryVideos.forEach(otherVideo => {
                if (otherVideo !== video && !otherVideo.paused) {
                    otherVideo.pause();
                }
            });
        });
    });
});

// Preload pages for faster navigation
function preloadPages() {
    const pages = ['index.html', 'listen.html', 'follow.html', 'dpk.html'];
    pages.forEach(page => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = page;
        document.head.appendChild(link);
    });
}

// Initialize preloading after page load
window.addEventListener('load', preloadPages);