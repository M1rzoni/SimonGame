let btnCollors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let gameStart = false;
let allButtons = document.querySelectorAll(".btn");
let userClickedPattern = [];
let level = 0;

function startGame() {
  let gameStart = document.querySelector("body");
  gameStart.addEventListener("keydown", function () {
    nextSequence();
    document.querySelector("h1").textContent = "Level" + level;
  });
}

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChoosenColor = btnCollors[randomNumber];
  gamePattern.push(randomChoosenColor);
  $(`#${randomChoosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChoosenColor);

  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function () {
      let userChosenColor = this.id;
      animatePress(allButtons[i]);
      userClickedPattern.push(userChosenColor);
    });
  }
  level++;
}
function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  currentColor.classList.add("pressed");

  setTimeout(function () {
    currentColor.classList.remove("pressed");
  }, 100);
}

startGame();
