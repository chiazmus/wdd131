const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('lastmodified');
const mainElement = document.getElementById('reviewBox');

const today = new Date();

let reviews = Number(localStorage.getItem('reviews')) || 0;

reviews += 1;
localStorage.setItem('reviews', reviews);

const reviewText = document.createElement('p');
let rmod =  reviews > 3 ? rmodifier = 'th' : reviews === 1 ? rmodifier = 'st' : reviews === 2 ? rmodifier = 'nd' : rmodifier = 'rd';

reviewText.textContent = `You are the ${reviews}${rmod} person to review this product.`;
mainElement.appendChild(reviewText);

currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last modified ${document.lastModified} by Andrew Burnah`;