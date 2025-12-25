# Project Documentation: Personal Portfolio - Tools & Technologies

This document provides an analysis of the project files for the "Tools & Technologies" page of Karim Sokolov's personal portfolio.

## 1. Project Overview

The project is a single-page web application that showcases the hardware, software, and workflow used by a developer/designer. It features a modern, clean design with support for both light and dark themes, responsive layouts for different screen sizes, and subtle animations to enhance user experience.

## 2. File Structure

The project consists of three core files:

- `tools.html`: The main HTML file containing the page structure and content.
- `styles.css`: The stylesheet responsible for the visual presentation, layout, and theming.
- `script.js`: The JavaScript file that handles user interactions, theme switching, and other dynamic behaviors.

## 3. HTML Analysis (`tools.html`)

### Purpose
This file serves as the entry point and skeleton of the web page. It defines the content and overall structure.

### Structure
The document uses semantic HTML5 tags to create a clear and accessible structure:
- `<nav>`: Contains the primary navigation controls (theme toggle and menu button).
- `<main>`: Wraps the main content of the page.
- `<section id="tools">`: A major section detailing the tools and technologies, categorized into:
    - Computer Specs
    - Operating Systems
    - Applications (Development, Design, Productivity)
    - Workflow
- `<div class="menu-modal">`: A modal window for site navigation, hidden by default.

### Dependencies
- It links to `styles.css` for styling.
- It links to `script.js` (with `defer`) for interactivity, ensuring the script is executed after the document is parsed.

## 4. CSS Analysis (`styles.css`)

### Design System
- The styling is inspired by Google's **Material You**, utilizing a predefined color palette stored in CSS variables (`:root`). This makes it easy to manage colors and maintain consistency.
- The typography is based on the 'Roboto' font from Google Fonts.

### Theming
- The project supports both **light and dark themes**.
- Theming is achieved by defining a default (light) color palette in `:root` and overriding specific variables within a `[data-theme="dark"]` attribute selector. JavaScript is used to toggle this attribute on the `<body>` element.

### Responsiveness
- The layout is fully responsive, adapting to different screen sizes using `flexbox`, `grid`, and a `@media` query for screens narrower than 768px. This ensures a good user experience on both desktop and mobile devices.

### Animations & Transitions
- The UI features several subtle animations (`fadeIn`, `fadeInUp`, etc.) to make the experience more dynamic.
- Animations on list items and cards are triggered on scroll using JavaScript's `IntersectionObserver`, which is a performance-friendly approach.
- Smooth transitions are applied to theme changes and hover effects.

### Potential Improvements
- The CSS file contains duplicate definitions for `@keyframes` rules (`fadeInSlideDown`, `fadeInSlideUp`, `fadeIn`, `fadeInUp`). These duplicates can be removed to make the code cleaner.

## 5. JavaScript Analysis (`script.js`)

### Functionality
The script provides the core interactivity for the page:
- **Theme Management:**
    - `toggleTheme()`: Switches between 'light' and 'dark' themes.
    - `loadTheme()`: On page load, it checks `localStorage` for a saved theme preference. If none is found, it respects the user's operating system preference via `prefers-color-scheme`.
    - The chosen theme is saved to `localStorage` to persist across sessions.
- **Modal Menu:**
    - `toggleMenu()`: Toggles the visibility of the navigation modal. It also controls body scrolling to prevent scrolling the page content when the menu is open.
    - An event listener is set up to close the menu when the `Escape` key is pressed.

### Performance
- The script uses the **`IntersectionObserver` API** to delay the start of CSS animations for elements until they enter the viewport. This is an excellent performance optimization that prevents the browser from doing unnecessary work on off-screen elements.

### Best Practices
- **`defer` attribute:** The `<script>` tag uses `defer`, which is a modern practice to load JavaScript without blocking HTML parsing.
- **Accessibility:** The script enhances accessibility by allowing keyboard navigation (closing the menu with `Escape`).
- **Progressive Enhancement:** The core content is accessible even if JavaScript is disabled. The script adds enhancements (theming, animations) on top.

---

# Документация по проекту: Персональное портфолио - Инструменты и технологии

Этот документ представляет собой анализ файлов проекта для страницы "Инструменты и технологии" личного портфолио Карима Соколова.

## 1. Обзор проекта

Проект представляет собой одностраничное веб-приложение, демонстрирующее аппаратное и программное обеспечение, а также рабочий процесс, используемый разработчиком/дизайнером. Он отличается современным, чистым дизайном с поддержкой светлой и темной тем, адаптивными макетами для разных размеров экрана и тонкими анимациями для улучшения пользовательского опыта.

## 2. Структура файлов

Проект состоит из трех основных файлов:

- `tools.html`: Основной HTML-файл, содержащий структуру и содержимое страницы.
- `styles.css`: Таблица стилей, отвечающая за визуальное представление, макет и темы.
- `script.js`: Файл JavaScript, который обрабатывает взаимодействие с пользователем, переключение тем и другое динамическое поведение.

## 3. Анализ HTML (`tools.html`)

### Назначение
Этот файл служит точкой входа и каркасом веб-страницы. Он определяет содержание и общую структуру.

### Структура
В документе используются семантические теги HTML5 для создания четкой и доступной структуры:
- `<nav>`: Содержит основные элементы управления навигацией (переключатель тем и кнопка меню).
- `<main>`: Обертывает основное содержимое страницы.
- `<section id="tools">`: Основной раздел, подробно описывающий инструменты и технологии, сгруппированные по категориям:
    - Характеристики компьютера
    - Операционные системы
    - Приложения (разработка, дизайн, производительность)
    - Рабочий процесс
- `<div class="menu-modal">`: Модальное окно для навигации по сайту, по умолчанию скрытое.

### Зависимости
- Он ссылается на `styles.css` для стилизации.
- Он ссылается на `script.js` (с атрибутом `defer`) для интерактивности, гарантируя, что скрипт будет выполнен после разбора документа.

## 4. Анализ CSS (`styles.css`)

### Система дизайна
- Стиль вдохновлен **Material You** от Google, с использованием предопределенной цветовой палитры, хранящейся в переменных CSS (`:root`). Это упрощает управление цветами и поддержание согласованности.
- Типографика основана на шрифте 'Roboto' из Google Fonts.

### Темы
- Проект поддерживает как **светлую, так и темную темы**.
- Темизация достигается путем определения палитры по умолчанию (светлой) в `:root` и переопределения определенных переменных в селекторе атрибута `[data-theme="dark"]`. JavaScript используется для переключения этого атрибута у элемента `<body>`.

### Адаптивность
- Макет полностью адаптивен, подстраиваясь под разные размеры экрана с помощью `flexbox`, `grid` и медиа-запроса `@media` для экранов шириной менее 768px. Это обеспечивает хороший пользовательский опыт как на настольных, так и на мобильных устройствах.

### Анимации и переходы
- Пользовательский интерфейс имеет несколько тонких анимаций (`fadeIn`, `fadeInUp` и т.д.), чтобы сделать опыт более динамичным.
- Анимации для элементов списка и карточек запускаются при прокрутке с помощью `IntersectionObserver` из JavaScript, что является подходом, дружественным к производительности.
- Плавные переходы применяются к смене тем и эффектам при наведении.

### Возможные улучшения
- Файл CSS содержит дублирующиеся определения для правил `@keyframes` (`fadeInSlideDown`, `fadeInSlideUp`, `fadeIn`, `fadeInUp`). Эти дубликаты можно удалить, чтобы сделать код чище.

## 5. Анализ JavaScript (`script.js`)

### Функциональность
Скрипт обеспечивает основную интерактивность страницы:
- **Управление темами:**
    - `toggleTheme()`: Переключает между 'светлой' и 'темной' темами.
    - `loadTheme()`: При загрузке страницы проверяет `localStorage` на наличие сохраненных предпочтений темы. Если ничего не найдено, он учитывает предпочтения операционной системы пользователя через `prefers-color-scheme`.
    - Выбранная тема сохраняется в `localStorage` для сохранения между сеансами.
- **Модальное меню:**
    - `toggleMenu()`: Переключает видимость навигационного модального окна. Он также управляет прокруткой тела, чтобы предотвратить прокрутку содержимого страницы, когда меню открыто.
    - Установлен прослушиватель событий для закрытия меню при нажатии клавиши `Escape`.

### Производительность
- Скрипт использует **API `IntersectionObserver`** для задержки начала анимаций CSS для элементов до тех пор, пока они не войдут в область просмотра. Это отличная оптимизация производительности, которая предотвращает выполнение браузером ненужной работы над элементами за пределами экрана.

### Лучшие практики
- **Атрибут `defer`:** Тег `<script>` использует `defer`, что является современной практикой для загрузки JavaScript без блокировки разбора HTML.
- **Доступность:** Скрипт улучшает доступность, позволяя навигацию с помощью клавиатуры (закрытие меню с помощью `Escape`).
- **Прогрессивное улучшение:** Основное содержимое доступно, даже если JavaScript отключен. Скрипт добавляет улучшения (темы, анимации) поверх.
