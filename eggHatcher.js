import egg from "./eggClass.js";
import pokemonPicker from "./pokemonClass-Object-Array.js";

const titleFunction = () => {
  const newHeader = document.createElement("header");
  const newDiv = document.createElement("div");
  newDiv.classList.add("siteTitle");
  newDiv.innerHTML = "Egg Hatcher";
  newHeader.append(newDiv);
  document.querySelector("body").append(newHeader);
};
titleFunction();

const colorPicker = (randomNumber) => {
  const color = [
    "Green with Dark Green Spots",
    "Brown with Pink Spots",
    "Blue",
    "Purple",
    "Red with Purple Spots",
    "Red",
    "Gold",
    "Gold with Orange Spots",
    "Legendary",
    "Dark",
    "Pink",
  ];

  return color[randomNumber];
};

const eggImageFinder = (color) => {
  const eggImages = [
    "../assets/images/GreenEgg.png",
    "../assets/images/BrownEgg.png",
    "../assets/images/BlueEgg.png",
    "../assets/images/PurpleEgg.png",
    "../assets/images/RedEgg.png",
    "../assets/images/RedEggNoSpots.png",
    "../assets/images/GoldEgg.png",
    "../assets/images/GoldEggSpots.png",
    "../assets/images/LegendEgg.png",
    "../assets/images/DarkEggSpots.png",
    "../assets/images/PinkEgg.png",
  ];

  return eggImages[color];
};

const spotPicker = (randomNumber) => {
  let spots;

  if (randomNumber <= 5) {
    spots = true;
  } else {
    spots = false;
  }

  return spots;
};

const eggTimer = (randomNumber) => {
  // create 1min timer for hatch
  let spots;

  if (randomNumber <= 5) {
    spots = true;
  } else {
    spots = false;
  }

  return spots;
};

const eggImageAdder = (object) => {
  const newArticle = document.createElement("article");
  newArticle.classList.add("eggContainer");
  const eggImage = document.createElement("img");
  eggImage.classList.add("figure");
  eggImage.setAttribute("src", object.image);
  eggImage.style.height = newEgg.height; //put in function instead
  eggImage.style.width = newEgg.width; // ptt in funtion instead
  newArticle.append(eggImage);
  return newArticle;
};

const eggHeightFunction = (height) => {
  const heightArray = ["8in", "7in", "6in", "5in"];

  switch (height) {
    case 0:
      height === 0;
      return heightArray[0];
      break;
    case 1:
      height === 1;
      return heightArray[1];
      break;
    case 2:
      height === 2;
      return heightArray[2];
      break;
    case 3:
      height === 3;
      return heightArray[3];
      break;
  }
};

const eggWidthFunction = (width) => {
  const widthArray = ["8in", "7in", "6in", "5in"];

  switch (width) {
    case 0:
      width === 0;
      return widthArray[0];
      break;
    case 1:
      width === 1;
      return widthArray[1];
      break;
    case 2:
      width === 2;
      return widthArray[2];
      break;
    case 3:
      width === 3;
      return widthArray[3];
      break;
  }
};

const colorNumber = Math.floor(Math.random() * 10); // so both the eggColor and eggImage match the number picked
const eggSize = Math.floor(Math.random() * 4); // gives a number that will define the size of the egg

const newEgg = new egg(
  (egg.weight = Math.floor(Math.random() * 10)), // done, and displayed
  (egg.color = colorPicker(colorNumber)), // done, and displayed
  (egg.height = eggHeightFunction(eggSize)), // done, and displayed
  (egg.width = eggWidthFunction(eggSize)), // done, and displayed
  (egg.spots = spotPicker(Math.floor(Math.random() * 10))), // all egg images currently have spots
  (egg.hatched = eggTimer(Math.floor(Math.random() * 10))), // create 1min timer for hatch
  (egg.image = eggImageFinder(colorNumber)) // done, and displayed
);

document.querySelector("body").append(eggImageAdder(newEgg));

const articleFunction = () => {
  const newArticle = document.createElement("article");
  newArticle.classList.add("eggInformation");
  newArticle.innerHTML = `

  <li>Weight: ${egg.weight} lbs </li>
  <li>Color: ${egg.color} </li>
  <li>Height: ${egg.height} </li>
  <li>Width: ${egg.width} </li>
  <li>Hatching Status: ${egg.hatched} </li>

  `;
  document.querySelector("body").append(newArticle);
};
articleFunction();
