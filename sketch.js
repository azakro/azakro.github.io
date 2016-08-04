var rgbArray = [new RGB(255, 0, 0), new RGB(255, 255, 0), 
new RGB(0, 255, 255), new RGB(255, 0, 255), new RGB( 0, 255, 0),
new RGB(0, 0, 255), new RGB(255, 255, 255)];
var mouseClicked;
var spotArray = [20, 40, 60, 80, 100];
var picSpotArrayX = [20, 90, 160];
var picSpotArrayY = [20, 70];
var sklyine, part1, part2, part3, part4, part5, part6;

function setup() {
	skyline = loadImage("nyc.jpg");
	part1 = loadImage("nyc1.jpg");
	part2 = loadImage("nyc2.jpg");
	part3 = loadImage("nyc3.jpg");
	part4 = loadImage("nyc4.jpg");
	part5 = loadImage("nyc5.jpg");
	part6 = loadImage("nyc6.jpg");
	background(255);
	console.log("done");
	createCanvas(window.innerWidth, window.innerHeight);
	frameRate(6);	

}

function draw() {
	
	background(255);
	image(skyline, 20, 20); //this image is 210x100
	//for the nyc puzzle thing
	if(mouseX > 20 && mouseX < 230 && mouseY > 20 && mouseY < 120){
		image(part1, randomPicSpotX(), randomPicSpotY());
		image(part2, randomPicSpotX(), randomPicSpotY());
		image(part3, randomPicSpotX(), randomPicSpotY());
		image(part4, randomPicSpotX(), randomPicSpotY());
		image(part5, randomPicSpotX(), randomPicSpotY());
		image(part6, randomPicSpotX(), randomPicSpotY());
	}

	//part for the b&w checkered portion
	/*stroke(0);
	fill(0);
	rect( 20, 20, 100, 100);

	if(mouseX > 20 && mouseX < 120 && mouseY > 20 && mouseY < 120){
		console.log("yes");
		fill(255);
		stroke(255);
		rect( 20, 20, 100, 100);
		fill(0);
		frameRate(10);
		rect(randomSpot(), randomSpot(), 20, 20);
		rect(randomSpot(), randomSpot(), 20, 20);
		rect(randomSpot(), randomSpot(), 20, 20);
		rect(randomSpot(), randomSpot(), 20, 20);
		
	}else{
		frameRate(6);
	}*/

	//for the cursor line
	stroke(randomColor().r, randomColor().g, randomColor().b);
	line(mouseX, mouseY, pmouseX, pmouseY);

}

function mouseClicked(){
	mouseClicked++;
}

function randomSpot(){
	var randomSpotNum = floor(random(spotArray.length));
	var theSpot = spotArray[randomSpotNum];
	return theSpot;
}

function randomPicSpotX(){
	var randomSpotNum = floor( random(picSpotArrayX.length));
	var theSpot = picSpotArrayX[randomSpotNum];
	return theSpot;
}
function randomPicSpotY(){
	var randomSpotNum = floor( random(picSpotArrayY.length));
	var theSpot = picSpotArrayY[randomSpotNum];
	return theSpot;
}

function randomColor(){
	var randNum = floor(random(rgbArray.length));
	var theRandColor = rgbArray[randNum];
	return theRandColor;
}

function RGB(r, g, b){
	this.r = r;
	this.g = g;
	this.b = b;
}