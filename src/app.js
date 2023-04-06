import "bootstrap";
import "./style.css";

window.onload = () => {
  setInterval(generateCard, 10000);
  generateCard();

  const updateButton = document.querySelector(
    "button[onclick='updateCardSize();']"
  );
  const generateButton = document.getElementById("generate-card");

  updateButton.addEventListener("click", updateCardSize);
  generateButton.addEventListener("click", generateCard);
};

function generateCard() {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const suits = ["♥", "♠", "♣", "♦"];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  document.getElementById("value").innerHTML = randomValue;
  document.getElementById("top-left").innerHTML = randomSuit;
  document.getElementById("top-left").setAttribute("data-suit", randomSuit);
  document.getElementById("bottom-right").innerHTML = randomSuit;
  document.getElementById("bottom-right").setAttribute("data-suit", randomSuit);
}

function updateCardSize() {
  const widthInput = document.getElementById("width-input");
  const heightInput = document.getElementById("height-input");
  const card = document.getElementById("card");

  const width = parseInt(widthInput.value);
  const height = parseInt(heightInput.value);

  card.style.width = width + "px";
  card.style.height = height + "px";
}
