
function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
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

	push();
  	star(mouseX, mouseY, 5, 35, 10); 
  	pop();

  	fill(255);
	if(mouseX>innerWidth/4-50 && mouseX<innerWidth/4+120 && mouseY>innerHeight/3-30 && mouseY<innerHeight/3){
		fill(randomColor1, randomColor2, randomColor3);
	}
	text("sculpture", innerWidth/4-50, innerHeight/3);

	fill(255);
	if(mouseX>innerWidth/4-75 && mouseX<innerWidth/4+180 && mouseY>2*(innerHeight/3)-30 && mouseY<2*(innerHeight/3)){
		fill(randomColor1, randomColor2, randomColor3);
	}
	text("graphic design", innerWidth/4-75, 2*(innerHeight/3));

	fill(255);
	if(mouseX>2*(innerWidth/4)-55 && mouseX<2*(innerWidth/4)+75 && mouseY>innerHeight/2-30 && mouseY<innerHeight/2){
		fill(randomColor1, randomColor2, randomColor3);
	}
	text("drawing", 2*(innerWidth/4)-55, innerHeight/2);

	fill(255);
	if(mouseX>3*(innerWidth/4)-110 && mouseX<3*(innerWidth/4)+110 && mouseY>innerHeight/3-30 && mouseY<innerHeight/3){
		fill(randomColor1, randomColor2, randomColor3);
	}
	text("printmaking", 3*(innerWidth/4)-110, innerHeight/3);

	fill(255);
	if(mouseX>3*(innerWidth/4)-70 && mouseX<3*(innerWidth/4)+70 && mouseY>2*(innerHeight/3)-30 && mouseY<2*(innerHeight/3)){
		fill(randomColor1, randomColor2, randomColor3);
	}
	text("painting", 3*(innerWidth/4)-70, 2*(innerHeight/3));
	
}

function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function mouseClicked(){
	if(mouseX>innerWidth/4-50 && mouseX<innerWidth/4+120 && mouseY>innerHeight/3-30 && mouseY<innerHeight/3){
		link("sculpture.html");
	}else if(mouseX>innerWidth/4-75 && mouseX<innerWidth/4+180 && mouseY>2*(innerHeight/3)-30 && mouseY<2*(innerHeight/3)){
		link("graphicDesign.html");
	}else if(mouseX>2*(innerWidth/4)-55 && mouseX<2*(innerWidth/4)+75 && mouseY>innerHeight/2-30 && mouseY<innerHeight/2){
		link("drawing.html");
	}else if(mouseX>3*(innerWidth/4)-110 && mouseX<3*(innerWidth/4)+110 && mouseY>innerHeight/3-30 && mouseY<innerHeight/3){
		link("printmaking.html");
	}else if(mouseX>3*(innerWidth/4)-70 && mouseX<3*(innerWidth/4)+70 && mouseY>2*(innerHeight/3)-30 && mouseY<2*(innerHeight/3)){
		link("painting.html");
	}
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
