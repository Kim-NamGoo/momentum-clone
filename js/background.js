const imageArr = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png",
];

const backImage = imageArr[Math.round(Math.random() * (imageArr.length - 1))];

const createImg = document.createElement("img");

createImg.src = `img/${backImage}`;

console.log(`img/${backImage}`);
document.body.appendChild(createImg);
