const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('lastmodified');
const hamButton = document.getElementById('menu')
const navMenu = document.getElementById('navigation');
const secondHeader = document.querySelector('h2');
const today = new Date();

let applied = localStorage.getItem("applied") || false;

if (!applied) {
    localStorage.setItem("applied", true);
} else {
    secondHeader.textContent = "You have already submitted an Application!"
}

hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamButton.classList.toggle('open');
});


currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last modified ${document.lastModified} by Andrew Burnah`;