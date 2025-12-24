function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.classList.add('theme-transition');
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    setTimeout(() => {
        body.classList.remove('theme-transition');
    }, 300);
}

function toggleMenu() {
    const menu = document.getElementById('menuModal');
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.body.setAttribute('data-theme', theme);
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const menu = document.getElementById('menuModal');
        if (menu.classList.contains('active')) {
            toggleMenu();
        }
    }
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!localStorage.getItem('theme')) {
        const theme = e.matches ? 'dark' : 'light';
        document.body.setAttribute('data-theme', theme);
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    loadTheme();

    const animatedElements = document.querySelectorAll('.tech-item, .interest-card, .project-card');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
});