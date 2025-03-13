const openButton = document.querySelector("#openButton");
const navigation = document.querySelector("nav");

openButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	openButton.classList.toggle("open");
});
