const products = [
    { id: "fc-1888", name: "flux capacitor", avgRating: 4.5 },
    { id: "fc-2050", name: "power laces", avgRating: 4.7 },
    { id: "fs-1987", name: "time circuits", avgRating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", avgRating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", avgRating: 5.0 }
];

document.addEventListener('DOMContentLoaded', () => {
    const productNameSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });

    if (localStorage.getItem('reviewCounter') === null) {
        localStorage.setItem('reviewCounter', '0');
    }

    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
});

window.addEventListener('load', () => {
    const reviewCounter = localStorage.getItem('reviewCounter');
    localStorage.setItem('reviewCounter', (parseInt(reviewCounter) + 1).toString());
});
 