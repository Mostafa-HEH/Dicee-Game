// function random(){
// 	var rand= Math.random();
// 	return Math.floor((rand*6)+1);
// }

// var player1= random();

// if(player1===1){
// 	document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }else if(player1===2){
// 	document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }else if(player1===3){
// 	document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }else if(player1===4){
// 	document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }else if(player1===5){
// 	document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }else if(player1===6){
// 	document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }else{
// 	console.log("catch you cheater :D");
// }


// var player2= random();

// if(player2===1){
// 	document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }else if(player2===2){
// 	document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }else if(player2===3){
// 	document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }else if(player2===4){
// 	document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }else if(player2===5){
// 	document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }else if(player2===6){
// 	document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }else{
// 	console.log("catch you cheater :D");
// }



// if (player1 === player2) {
// 	document.querySelector("h1").textContent=("🍷 Draw 🍷");
// }else if(player1 > player2) {
// 	document.querySelector("h1").textContent=("🍷 player1 wins!");
// }else if(player1 < player2) {
// 	document.querySelector("h1").textContent=("player2 winS! 🍷");
// }else{
// 	document.querySelector("h1").textContent=("Something wrong, try again");
// }



// more clean ------------------------------------------------------------------------------

// var player1= Math.floor((Math.random() * 6) +1);
// var player1DiceImage= "images/dice" + player1 + ".png";
// document.querySelectorAll("img")[0].setAttribute("src", player1DiceImage);

// var player2= Math.floor((Math.random() * 6) +1);
// var player2DiceImage= "images/dice" + player2 + ".png";
// document.querySelectorAll("img")[1].setAttribute("src", player2DiceImage);

// if (player1 === player2) {
// 	document.querySelector("h1").textContent=("🍷 Draw 🍷");
// }else if(player1 > player2) {
// 	document.querySelector("h1").textContent=("🍷 player1 wins!");
// }else if(player1 < player2) {
// 	document.querySelector("h1").textContent=("player2 winS! 🍷");
// }else{
// 	document.querySelector("h1").textContent=("Something wrong, try again");
// }



// more and more clean------------------------------------------------------------------------

function randomGenerator(){
	return Math.floor((Math.random() * 6) +1);
}

function imgSelector(){
	return document.querySelectorAll("img");
}


function h1Selector(){
	return document.querySelector("h1");
}

function winner(){
	if (player1 === player2) {
		h1Selector().textContent=("🍷 Draw 🍷");
	}else if(player1 > player2) {
		h1Selector().textContent=("🍷 player1 wins!");
	}else if(player1 < player2) {
		h1Selector().textContent=("player2 winS! 🍷");
	}else{
		h1Selector().textContent=("Something wrong, try again");
	}
}

function playerOne(){
	var player1DiceImage= "images/dice" + player1 + ".png";
	return imgSelector()[0].setAttribute("src", player1DiceImage);
}

function playerTwo(){
	var player2DiceImage= "images/dice" + player2 + ".png";
	return imgSelector()[1].setAttribute("src", player2DiceImage);
}




var player1= randomGenerator();
playerOne();

var player2= randomGenerator();
playerTwo();

winner();