var mouse = 0;
var pointX;
var pointY;
var randomColor;

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	background(255);
	stroke(0);
	noFill();
}

function draw(){
	mouse = false;
	randomColor1 = random(255);
	randomColor2 = random(255);
	randomColor3 = random(255);
	textSize(30);

	fill(255);
	if(mouseX>innerWidth-100 && mouseY>innerHeight/5-30 && mouseY<innerHeight/5){
		fill(randomColor1, randomColor2, randomColor3);
	}
	text("github", innerWidth-100, innerHeight/5);

	fill(255);
	if(mouseX>innerWidth-100 && mouseY>2*(innerHeight/5)-30 && mouseY<2*(innerHeight/5)){
		fill(randomColor1, randomColor2, randomColor3);
	}
	text("vsco", innerWidth-100, 2*(innerHeight/5));

	fill(255);
	if(mouseX>innerWidth-100 && mouseY>3*(innerHeight/5)-30 && mouseY<3*(innerHeight/5)){
		fill(randomColor1, randomColor2, randomColor3);
	}
	text("redbubb", innerWidth-100, 3*(innerHeight/5));

	noFill();

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

function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function mouseClicked(){
	if(mouseX>innerWidth-100 && mouseY>innerHeight/5-30 && mouseY<innerHeight/5){
		link("https://github.com/azakro");
	}else if(mouseX>innerWidth-100 && mouseY>2*(innerHeight/5)-30 && mouseY<2*(innerHeight/5)){
		link("https://vsco.co/azakro");
	}else if(mouseX>innerWidth-100 && mouseY>3*(innerHeight/5)-30 && mouseY<3*(innerHeight/5)){
		link("http://www.redbubble.com/people/azakro");
	}
}

function makeCurve(num1, num2){
	for (var i = 0; i < 20; i += 20) {
    	bezier(mouseX-(i/num1), mouseY, 410, 20, num2, 200,(i/num1), (i/num1));
  	}
}