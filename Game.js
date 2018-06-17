document.getElementById("Bug").style.left = window.innerWidth/2;
document.getElementById("Bug").style.top = window.innerHeight/3;
var speed = 4;
var direction = setInterval(Bug, 10);
var bugMove = "LeftUD";
var p1Move = "";
var player1 = setInterval(play1, 10);
var p2Move = "";
var player2 = setInterval(play2, 10);
var physics = setInterval(collision, 10);
var P1Score = 0;
var P2Score = 0;
var score = document.getElementById("Score");
score.innerText = P1Score + " | " + P2Score;

function play1() {
	var P1 = document.getElementById("Player1");
	if (p1Move === "up") {
		P1.style.top = Number(P1.style.top.replace("px", "")) - 5;
	}
	else if (p1Move === "down") {
		P1.style.top = Number(P1.style.top.replace("px", "")) + 5;
	}
	if (Number(P1.style.top.replace("px", "")) <= -5) {
		P1.style.top = -5;
	}
	else if (Number(P1.style.top.replace("px", "")) >= window.innerHeight-150) {
		P1.style.top = window.innerHeight-150;
	}
}

function play2() {
	var P2 = document.getElementById("Player2");
	P2.style.left = window.innerWidth -30;
	if (p2Move === "up") {
		P2.style.top = Number(P2.style.top.replace("px", "")) - 5;
	}
	else if (p2Move === "down") {
		P2.style.top = Number(P2.style.top.replace("px", "")) + 5;
	}
	if (Number(P2.style.top.replace("px", "")) <= -130) {
		P2.style.top = -130;
	}
	else if (Number(P2.style.top.replace("px", "")) >= window.innerHeight-270) {
		P2.style.top = window.innerHeight-270;
	}
}

function Bug() {
	var bug = document.getElementById("Bug");
	if (bugMove === "LeftUD") {
		bug.style.left = Number(bug.style.left.replace("px", "")) - speed;
		bug.style.top = Number(bug.style.top.replace("px", "")) - speed;
	}
	else if (bugMove === "RightUD") {
		bug.style.left = Number(bug.style.left.replace("px", "")) + speed;
		bug.style.top = Number(bug.style.top.replace("px", "")) - speed;
	}
	else if (bugMove === "LeftDD") {
		bug.style.left = Number(bug.style.left.replace("px", "")) - speed;
		bug.style.top = Number(bug.style.top.replace("px", "")) + speed;
	}
	else if (bugMove === "RightDD") {
		bug.style.left = Number(bug.style.left.replace("px", "")) + speed;
		bug.style.top = Number(bug.style.top.replace("px", "")) + speed;
	}
	
	if (Number(bug.style.top.replace("px", "")) >= window.innerHeight - 170) {
		opposite("Bottom");
	}
	else if (Number(bug.style.top.replace("px", "")) <= -115) {
		opposite("Top");
	}
	else if (Number(bug.style.left.replace("px", "")) <= -15) {
		P2Score++;
		bug.style.left = window.innerWidth/2;
		bug.style.top = window.innerHeight/3;
		Score.innerText = P1Score + " | " + P2Score;
	}
	else if (Number(bug.style.left.replace("px", "")) >= window.innerWidth-10) {
		P1Score++;
		bug.style.left = window.innerWidth/2;
		bug.style.top = window.innerHeight/3;
		Score.innerText = P1Score + " | " + P2Score;
	}
}

function collision() {
	var bug = document.getElementById("Bug");
	var Num1 = document.getElementById("Player1");
	var Num2 = document.getElementById("Player2");
	if (Number(bug.style.left.replace("px", "")) === 23 && Number(bug.style.top.replace("px", "")) <=  Number(Num1.style.top.replace("px", "")) && Number(bug.style.top.replace("px", "")) >=  Number(Num1.style.top.replace("px", ""))-110) {
		opposite("Player");
	}
	else if (Number(bug.style.left.replace("px", "")) === window.innerWidth-35 && Number(bug.style.top.replace("px", "")) <=  Number(Num2.style.top.replace("px", ""))+100 && Number(bug.style.top.replace("px", "")) >=  Number(Num2.style.top.replace("px", ""))) {
		opposite("Player");
	}
}

function opposite(side) {
	//sides (Top, Bottom, Player)
	if (bugMove === "LeftUD") {
		if (side === "Top") {
			bugMove = "LeftDD";
		}
		else if (side === "Player") {
			bugMove = "RightUD";
		}
	}
	else if (bugMove === "RightUD") {
		if (side === "Top") {
		bugMove = "RightDD";
		}
		else if (side === "Player") {
			bugMove = "LeftUD";
		}
	}
	else if (bugMove === "LeftDD") {
		if (side === "Bottom") {
			bugMove = "LeftUD";
		}
		else if (side === "Player") {
			bugMove = "RightDD";
		}
	}
	else if (bugMove === "RightDD") {
		if (side === "Bottom") {
			bugMove = "RightUD";
		}
		else if (side === "Player") {
			bugMove = "LeftDD";
		}
	}
}

document.onkeydown = function(event) {
	if (event.keyCode === 38) {
		if (p2Move === "up") return;
		p2Move = "up";
	}
	else if (event.keyCode === 40) {
		if (p2Move === "down") return;
		p2Move = "down";
	}
	if (event.keyCode === 87) {
		if (p1Move === "up") return;
		p1Move = "up";
	}
	else if (event.keyCode === 83) {
		if (p1Move === "down") return;
		p1Move = "down";
	}
	else if (event.keyCode === 32) {
		bugMove = "";
	}
}

document.onkeyup = function(event) {
	if (event.keyCode === 38) {
		p2Move = "";
	}
	else if (event.keyCode === 40) {
		p2Move = "";
	}
	if (event.keyCode === 87) {
		p1Move = "";
	}
	else if (event.keyCode === 83) {
		p1Move = "";
	}
}