'use strict';

let inGuess = document.querySelector('.guess');
let randomNumber = document.querySelector('.number');
let message = document.querySelector(`.message`);
let back = document.querySelector(`body`);
let score = document.querySelector(`.score`);
score.value = 20;
let highScore = document.querySelector(`.highscore`);
highScore.value = 0;
randomNumber.value = Math.trunc(Math.random() * 20) + 1;

let guess = document.querySelector('.check');
guess.addEventListener('click', function() {
  if (inGuess.value === ``) {
    message.textContent = `No Number!`;
  } else if (inGuess.value == randomNumber.value) {
    randomNumber.textContent = inGuess.value;
    message.textContent = `Correct Number!`;
    back.style.backgroundColor = 'rgb(96, 179, 71)';

    if (score.value > highScore.value) {
      highScore.value = score.value;
      highScore.textContent = highScore.value;
    }
    guess.addEventListener(`click`, function() {});
  } else if (score.value > 0) {
    score.value = score.value - 1;
    score.textContent = score.value;
    if (score.value > 0) {
      message.textContent =
        inGuess.value < randomNumber.value ? `Too low!` : `Too High!`;
    } else {
      message.textContent = `You Lost The Game`;
    }
  }
});
let again = document.querySelector(`.again`);
again.addEventListener(`click`, function() {
  randomNumber.textContent = `?`;

  back.style.backgroundColor = `#222`;
  message.textContent = `Start guessing...`;
  score.value = 20;
  score.textContent = `20`;
  inGuess.value = null;
  randomNumber.value = Math.trunc(Math.random() * 20) + 1;
});
