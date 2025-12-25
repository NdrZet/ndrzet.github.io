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
    if (menu) {
        menu.classList.toggle('active');
        if (menu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.body.setAttribute('data-theme', theme);
}

function setupMenuEvents() {
    const menuItemsL1 = document.querySelectorAll('.menu-l1-item');
    const menuItemsL2 = document.querySelectorAll('.menu-l2-items');
    const menuContainer = document.querySelector('.menu-container');

    if (!menuContainer) return;

    menuItemsL1.forEach(item => {
        item.addEventListener('mouseenter', () => {
            menuItemsL1.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            menuItemsL2.forEach(submenu => submenu.classList.remove('active'));

            const menuId = item.getAttribute('data-menu');
            const submenuToShow = document.getElementById(`menu-${menuId}`);
            if (submenuToShow) {
                submenuToShow.classList.add('active');
            }
        });
    });

    // Set a default active item based on the current page
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'index.html' || currentPage === '') {
        document.querySelector('.menu-l1-item[data-menu="about"]').dispatchEvent(new Event('mouseenter'));
    } else if (currentPage === 'tools.html') {
        document.querySelector('.menu-l1-item[data-menu="tools"]').dispatchEvent(new Event('mouseenter'));
    }
}

async function loadMenu() {
    const menuPlaceholder = document.getElementById('menu-placeholder');
    const menuButton = document.querySelector('.menu-btn');

    if (menuPlaceholder) {
        try {
            const response = await fetch('menu.html');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const menuHTML = await response.text();

            // Replace placeholder with the actual menu
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = menuHTML;
            const menuModal = tempDiv.firstElementChild;
            menuPlaceholder.replaceWith(menuModal);

            // Now that the menu is loaded, set up its events and enable the button
            setupMenuEvents();
            if(menuButton) {
                menuButton.disabled = false;
            }

        } catch (error) {
            console.error('Failed to load menu:', error);
            if(menuButton) {
                menuButton.style.display = 'none'; // Hide button if menu fails to load
            }
        }
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const menu = document.getElementById('menuModal');
        if (menu && menu.classList.contains('active')) {
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
    loadMenu(); // Load the menu dynamically

    const animatedElements = document.querySelectorAll('.tech-item, .interest-card, .project-card');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
});