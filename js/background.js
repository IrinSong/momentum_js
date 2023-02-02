const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg"]

const selectImage = images[Math.floor(Math.random() * images.length)]

const image = document.createElement("img");

image.src = `img/${selectImage}`;

document.body.appendChild(image);