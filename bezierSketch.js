var mouse = 0;
var pointX;
var pointY;

function setup(){
	createCanvas(window.innerWidth, window.innerHeight*.75);
	background(255);
	stroke(0);
	noFill();
}

function draw(){
	mouse = false;
	var randomColor1 = random(255);
	var randomColor2 = random(255);
	var randomColor3 = random(255);
	textSize(40);

	fill(255);
	if(mouseX>innerWidth-140 && mouseY>innerHeight/5-30 && mouseY<innerHeight/5){
		fill(randomColor1, randomColor2, randomColor3);
	}
	text("github", innerWidth-140, innerHeight/5);

	fill(255);
	if(mouseX>innerWidth-150 && mouseY>2*(innerHeight/5)-30 && mouseY<2*(innerHeight/5)){
		fill(randomColor1, randomColor2, randomColor3);
	}
	text("photos", innerWidth-150, 2*(innerHeight/5));

	fill(255);
	if(mouseX>innerWidth-130 && mouseY>3*(innerHeight/5)-30 && mouseY<3*(innerHeight/5)){
		fill(randomColor1, randomColor2, randomColor3);
	}
	text("music", innerWidth-130, 3*(innerHeight/5));

	fill(255);
	if(mouseX>innerWidth-160 && mouseY>4*(innerHeight/5)-30 && mouseY<4*(innerHeight/5)){
		fill(randomColor1, randomColor2, randomColor3);
	}
	text("surprise", innerWidth-160, 4*(innerHeight/5));

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
	if(mouseX>innerWidth-140 && mouseY>innerHeight/5-30 && mouseY<innerHeight/5){
		link("https://github.com/azakro");
	}else if(mouseX>innerWidth-150 && mouseY>2*(innerHeight/5)-30 && mouseY<2*(innerHeight/5)){
		link("https://vsco.co/azakro");
	}else if(mouseX>innerWidth-130 && mouseY>3*(innerHeight/5)-30 && mouseY<3*(innerHeight/5)){
		link("https://open.spotify.com/user/azakro");
	}else if(mouseX>innerWidth-160 && mouseY>4*(innerHeight/5)-30 && mouseY<4*(innerHeight/5)){
		var randomSketch = random(3);
		if(randomSketch == 0 || randomSketch > 0 && randomSketch < 1){
			link("circLineSketch.html");
		} else if(randomSketch == 1 || randomSketch > 1 && randomSketch < 2){
			link("curveSketch.html");
		} else if(randomSketch == 2 || randomSketch > 2 && randomSketch < 3){
			link("orbitSketch.html");
		}
	}
}

function makeCurve(num1, num2){
	for (var i = 0; i < 20; i += 20) {
    	bezier(mouseX-(i/num1), mouseY, 410, 20, num2, 200,(i/num1), (i/num1));
  	}
}