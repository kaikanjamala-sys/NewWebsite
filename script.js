fetch('header.html').then(r => r.text()).then(h => {
    document.getElementById('header-placeholder').innerHTML = h;
});

fetch('nav.html').then(r => r.text()).then(n => {
    document.getElementById('nav-placeholder').innerHTML = n;
});

fetch('nav.html').then(r => r.text()).then(n => {
    document.getElementById('nav-placeholder').innerHTML = n;
    // Highlight active nav link
    const links = document.querySelectorAll('.topbar nav a');
    links.forEach(link => {
        if (link.getAttribute('href') === window.location.pathname.split('/').pop()) {
            link.style.textDecoration = 'underline';
            link.style.background = 'rgba(255,255,255,0.12)';
        }
    });
});

fetch('footer.html').then(r => r.text()).then(f => {
    document.getElementById('footer-placeholder').innerHTML = f;
});

(function(){
    const cards = document.querySelectorAll('.card');
    if (!cards.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Retriggers animation: entry.target.classList.remove('visible');
            }
        });
    }, {
        root: null, 
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12
    });
    cards.forEach(c => observer.observe(c));
})();