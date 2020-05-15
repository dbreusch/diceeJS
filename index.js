var imageFiles = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

var images = document.querySelectorAll("img");

var randomNumber1 = Math.floor(Math.random() * 6);
images[0].setAttribute("src", "images/" + imageFiles[randomNumber1]);

var randomNumber2 = Math.floor(Math.random() * 6);
images[1].setAttribute("src", "images/" + imageFiles[randomNumber2]);

var heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  heading.innerHTML = "Player 2 Wins! 🚩";
} else {
  heading.innerHTML = "Draw!";
};
