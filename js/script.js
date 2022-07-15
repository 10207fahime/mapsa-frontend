// dice game script
let player1 = "player1";
let player2 = "player2";
let number1 = 0;
let number2 = 0;
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let count_score2 = document.getElementById("count-score2");
let count_score1 = document.getElementById("count-score1");
let result = document.getElementById("result");
document
  .getElementById("start-game")
  .addEventListener("click", function playDice() {
    number1 = Math.floor(Math.random() * 6 + 1);
    number2 = Math.floor(Math.random() * 6 + 1);
    img1.setAttribute("src", "img/" + number1 + ".jpg");
    img2.setAttribute("src", "img/" + number2 + ".jpg");
    if (number1 === number2) {
      result.innerHTML = "Award!";
      count_score1.innerHTML = number1;
      count_score2.innerHTML = number2;
    } else if (number1 > number2) {
      count_score1.innerHTML = number1 + number2;
      result.innerHTML = "player1 wins!";
    } else {
      count_score2.innerHTML = number1 + number2;
      result.innerHTML = "player2 wins!";
    }
  });
document
  .getElementById("restart-game")
  .addEventListener("click", function restartDice() {
    number1 = 0;
    number2 = 0;
    count_score1.innerHTML = "0";
    count_score2.innerHTML = "0";
    result.innerHTML = "";
  });
