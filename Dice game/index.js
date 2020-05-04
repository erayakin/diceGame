var randomNumber1 = Math.floor(Math.random()*6)+1;

var imgName = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", imgName);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var imgName = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", imgName);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins"
}  else if (randomNumber1 === randomNumber2)
{ document.querySelector("h1").innerHTML = "Draw"
  } else {
    document.querySelector("h1").innerHTML = "Player 2 wins"
  } ;
