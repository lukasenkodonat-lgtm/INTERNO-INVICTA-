const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');
const heroImg = document.getElementById('heroImg');
const heroCenter = document.getElementById('heroCenter');
const navLinks = document.querySelectorAll('.n-link');
const pages = document.querySelectorAll('.content-page');

// Відкриття/закриття меню з розмиттям фону
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    sideNav.classList.toggle('open');
    
    // Розмиваємо тільки фон головної сторінки
    if(document.getElementById('main-page').classList.contains('active')) {
        heroImg.classList.toggle('blurred');
        heroCenter.classList.toggle('fade');
    }
});

// Перемикання сторінок
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');
        
        // Видаляємо активні класи
        navLinks.forEach(l => l.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));
        
        // Активуємо вибрану сторінку
        link.classList.add('active');
        document.getElementById(`${targetPage}-page`).classList.add('active');
        
        // Закриваємо меню і прибираємо розмиття
        menuBtn.classList.remove('active');
        sideNav.classList.remove('open');
        heroImg.classList.remove('blurred');
        heroCenter.classList.remove('fade');
    });
});

// Закриття меню при кліку поза ним
document.addEventListener('click', (e) => {
    if (!sideNav.contains(e.target) && !menuBtn.contains(e.target) && sideNav.classList.contains('open')) {
        menuBtn.classList.remove('active');
        sideNav.classList.remove('open');
        heroImg.classList.remove('blurred');
        heroCenter.classList.remove('fade');
    }
});