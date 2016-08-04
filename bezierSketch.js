var mouse = 0;
var pointX;
var pointY;


function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	background(255);
	stroke(0);
	noFill();
}

function draw(){
	if(mouse%5 == 0){
		makeCurve(15.0, 20);
		stroke(255, 0, 0);
	}else if(mouse%5 == 1){
		makeCurve(1000.0, 110);
		stroke(0, 255, 0);
	}else if(mouse%5 == 2){
		makeCurve(45.0, 100);
		stroke(0, 0, 255);
	}else if(mouse%5 == 3){
		makeCurve(1.0, 1000);
		stroke(255, 255, 255);
	}else if(mouse%5 == 4){
		makeCurve(3.0, 65);
		stroke(0, 0, 0);
	}
}

function mouseClicked(){
	mouse++;
	console.log(mouse);
}

function makeCurve(num1, num2){
	for (var i = 0; i < 20; i += 20) {
    	bezier(mouseX-(i/num1), mouseY, 410, 20, num2, 200,(i/num1), (i/num1));
  	}
}