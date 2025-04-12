const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('lastmodified');
const hamButton = document.getElementById('menu')
const navMenu = document.getElementById('navigation');

const today = new Date();

hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamButton.classList.toggle('open');
});


currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last modified ${document.lastModified} by Andrew Burnah`;