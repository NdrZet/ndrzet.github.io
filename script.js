(function() {
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
        } else if (currentPage === 'contact.html') {
            document.querySelector('.menu-l1-item[data-menu="contact"]').dispatchEvent(new Event('mouseenter'));
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
                
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = menuHTML;
                const menuModal = tempDiv.firstElementChild;
                menuPlaceholder.replaceWith(menuModal);

                setupMenuEvents();
                if(menuButton) {
                    menuButton.disabled = false;
                }

            } catch (error) {
                console.error('Failed to load menu:', error);
                if(menuButton) {
                    menuButton.style.display = 'none';
                }
            }
        }
    }

    function setupRippleEffect() {
        document.querySelectorAll('.ripple-effect').forEach(button => {
            button.addEventListener('click', function (e) {
                const rect = this.getBoundingClientRect();
                const ripple = document.createElement('span');
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                ripple.classList.add('ripple');
                
                const existingRipple = this.querySelector('.ripple');
                if (existingRipple) {
                    existingRipple.remove();
                }
                
                this.appendChild(ripple);
            });
        });
    }

    function setupInteractiveCards() {
        const canvas = document.querySelector('.interactive-canvas');
        if (!canvas) return;

        const cards = document.querySelectorAll('.interactive-card');

        // Spotlight effect
        canvas.addEventListener('mousemove', (e) => {
            canvas.style.setProperty('--x', `${e.clientX}px`);
            canvas.style.setProperty('--y', `${e.clientY}px`);
        });

        // 3D card tilt effect
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const { width, height } = rect;
                const rotateX = (y / height - 0.5) * -15; // Reduced rotation
                const rotateY = (x / width - 0.5) * 15;  // Reduced rotation
                
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateX(0) rotateY(0)';
            });
        });
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
        loadMenu(); 

        const animatedElements = document.querySelectorAll('.tech-item, .interest-card, .project-card, .contact-card-3d');
        animatedElements.forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });

        setupRippleEffect();
        setupInteractiveCards();
    });

    // Make functions accessible from HTML
    window.toggleTheme = toggleTheme;
    window.toggleMenu = toggleMenu;
})();