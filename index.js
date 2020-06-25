//index.js - dice logic (fairly simple)

//roll 2 dice from 1-6
var dice1Roll = Math.floor(Math.random()*6)+1;
var dice2Roll = Math.floor(Math.random()*6)+1;

//concatenate results of dice roll to path
var dice1ImagePath = "images/dice" + dice1Roll + ".png";
var dice2ImagePath = "images/dice" + dice2Roll + ".png";

//set src attribute of elements with .img1 and .img2 class to the dice image
document.querySelector(".img1").setAttribute("src", dice1ImagePath);
document.querySelector(".img2").setAttribute("src", dice2ImagePath);

if (dice1Roll > dice2Roll) {
   document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (dice2Roll > dice1Roll) {
   document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}
else {
   document.querySelector("h1").innerHTML = "Draw!";
}



