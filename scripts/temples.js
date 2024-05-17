document.addEventListener("DOMContentLoaded", function() {
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('year').textContent = year;
    document.getElementById('lastModified').textContent = lastModified;

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});