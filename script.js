// Bemob Conversion Tracking
function trackBemobConversion(clickUrl) {
    // Create pixel image to track conversion
    const img = new Image();
    img.src = clickUrl;
    img.style.display = 'none';
    document.body.appendChild(img);
}

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');

    // Track CTA button clicks
    const headerCtaBtn = document.getElementById('header-cta-btn');
    const mainCtaBtn = document.getElementById('main-cta-btn');
    
    if (headerCtaBtn) {
        headerCtaBtn.addEventListener('click', (e) => {
            trackBemobConversion('https://vpobl.bemobtrcks.com/conversion.gif?cid=OPTIONAL');
        });
    }
    
    if (mainCtaBtn) {
        mainCtaBtn.addEventListener('click', (e) => {
            trackBemobConversion('https://vpobl.bemobtrcks.com/conversion.gif?cid=OPTIONAL');
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 15, 44, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        } else {
            header.style.background = 'rgba(10, 15, 44, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
