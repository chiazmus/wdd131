const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('lastmodified');
const hamButton = document.getElementById('menu')
const navMenu = document.getElementById('navigation');
const productContainer = document.querySelector('.products');

const today = new Date();

function generateProductName(unallowedProducts=null){
    const prefixes = ['Quantum ', 'Hyper-', 'Neural ', 'Bio-', 'Cyber ', 'Warp ', 'Probability ']
    const suffixes = ['Drive', 'Computer', 'Processor', 'Flux Capacitor', 'Networking Temporal Router', 'Phaser', 'Mechanical Interface', 'Linguistic Calculator']

    let newProductName = `${prefixes[Math.floor(Math.random() * prefixes.length)]}${suffixes[Math.floor(Math.random() * suffixes.length)]}`;

    if (unallowedProducts !== null) {
        while(unallowedProducts.includes(newProductName)){
            newProductName = newProductName = `${prefixes[Math.floor(Math.random() * prefixes.length)]}${suffixes[Math.floor(Math.random() * suffixes.length)]}`;
        }
    }

    return newProductName;
}

function generateProductDescription(productName){
    const introDescription = [`The ${productName} is a state of the art machine`, `Our ${productName} is a cutting edge machine`, 
        `Now affordable to all ages, Demiurgic Dynamics has released the ${productName}`, `We are proud to present our newest creation, the ${productName}`];

    const endDescription = [`that can change the very fabric of space time.  Each and every person needs to have one of these in their homes!`, 
    `that is capable of amazing things!  It is the most advanced machine we have released yet, with version 2.0 on its way!`, 
    `which in addition to being cost effective and easy to use, will make the world a better place!`, `which with 3 TB of storage, is capable of outclassing all its competitors!`];

    let description = `${introDescription[Math.floor(Math.random() * introDescription.length)]} ${endDescription[Math.floor(Math.random() * endDescription.length)]}`;

    return description;

}

function createProduct(products=null){
    const productName = generateProductName(products);
    const productDescription = generateProductDescription(productName);
    const price = Math.floor(Math.random() * 1000) + 0.99;
    let product = {name: productName, description: productDescription, price: price};
    return product;
}

function addProduct(product) {
    let name = document.createElement('h3');
    name.innerHTML = product.name;
    let description = document.createElement('p');
    description.innerHTML = product.description;
    let price = document.createElement('p');
    price.innerHTML = `$${product.price.toFixed(2)}`;
    let productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.appendChild(name);
    productCard.appendChild(description);
    productCard.appendChild(price);
    productContainer.appendChild(productCard);
}

function fillProducts(n){
    let products = [];

    products.push(createProduct());
    addProduct(products[products.length - 1])

    for(let i=0; i<n; i++){
        products.push(createProduct(products));
        addProduct(products[products.length - 1])
    }

}

hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamButton.classList.toggle('open');
});

fillProducts(7)
currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last modified ${document.lastModified} by Andrew Burnah`;