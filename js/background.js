// const images = ["0.jpg", "1.jpg", "2.jpg"];
// const body = document.querySelector("body");

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// // document.body.appendChild(bgImage);
// document.body.style.background = `img/${chosenImage}`;

const images = ["0.jpg", "1.jpg", "2.jpg"];
const body = document.querySelector("body");

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImage");
body.prepend(bgImage);
