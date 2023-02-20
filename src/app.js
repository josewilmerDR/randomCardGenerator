/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateCard();
  console.log("Hello Rigo from the console!");
};

window.onload = () => {
  setInterval(generateCard, 10000); // hace que la página se actualice cada 10 segundos
  generateCard();
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
  /**Se agrega un atributo "data-suit" al elemento con id "top-left" y "buttom-right",
   * seguido se le da formato vía CSS para que
   * en caso de que que se genere una carta de corazón o diamanetes,
   * los íconos cambien a rojo" */
  document.getElementById("top-left").setAttribute("data-suit", randomSuit);
  document.getElementById("bottom-right").innerHTML = randomSuit;
  document.getElementById("bottom-right").setAttribute("data-suit", randomSuit);
}

function updateCardSize() {
  const widthInput = document.getElementById("width-input");
  const heightInput = document.getElementById("height-input");
  const card = document.getElementById("card");

  const width = widthInput.value;
  const height = heightInput.value;

  card.style.width = width + "px";
  card.style.height = height + "px";
}
