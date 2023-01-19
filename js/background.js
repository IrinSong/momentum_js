const images = ["00.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg",]

const selectImage = images[Math.floor(Math.random() * images.length)]

const image = document.createElement("img");

image.src = `img/${selectImage}`;

document.body.appendChild(image);