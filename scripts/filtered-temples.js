const openButton = document.querySelector("#openButton");
const navigation = document.querySelector("nav");

const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('lastmodified');

const today = new Date();

const homeLink = document.getElementById('homeLink');
const oldLink = document.getElementById('oldLink');
const newLink = document.getElementById('newLink');
const largeLink = document.getElementById('largeLink');
const smallLink = document.getElementById('smallLink');

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Hamilton New Zealand Temple",
		location: "Hamilton, New Zealand",
		dedicated: "1958, April, 20",
		area: 45251,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hamilton-new-zealand/400x250/hamilton-new-zealand-lds-temple-942155-wallpaper.jpg"
	},
	{
		templeName: "Provo City Center Temple",
		location: "Provo, Utah",
		dedicated: "2016 March 20",
		area: 85084,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple08.jpg"
	},
	{
		templeName: "Laie Hawaii Temple",
		location: "Laie, Hawaii",
		dedicated: "1919, November, 27",
		area: 42100,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-772761-wallpaper.jpg"
	}
  ];


function createTempleCard(templeList){
	document.querySelector(".image-container").innerHTML = "";

	templeList.forEach(temple => {
		const card = document.createElement("section");
		const title = document.createElement("h3");
		const location = document.createElement("p");
		const dedicated = document.createElement("p");
		const area = document.createElement("p");
		const img = document.createElement("img");

		title.textContent = temple.templeName;
		location.textContent = `Location: ${temple.location}`;
		dedicated.textContent = `Dedicated: ${temple.dedicated}`;
		area.textContent = `Size: ${temple.area}`;

		img.setAttribute('src', temple.imageUrl);
		img.setAttribute('alt', temple.templeName);
		img.setAttribute('loading', 'lazy');
		img.setAttribute('width', '400px');
		img.setAttribute('height','250px');

		card.classList.add("templeCard");
		card.appendChild(title);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".image-container").appendChild(card);
	});
}

homeLink.addEventListener("click", () => {
	createTempleCard(temples);
});

oldLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) <= 1900));
});

newLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) >= 2000));
});

largeLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area >= 90000));
});

smallLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area < 10000));
});



openButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	openButton.classList.toggle("open");
});

createTempleCard(temples);
currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last modified ${document.lastModified} by Andrew Burnah`;