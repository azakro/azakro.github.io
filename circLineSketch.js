var theSize = 75;
var theSizeBoolean = true;

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	
}

function draw(){

	var r = random(255);
	var g = random(255);
	var b = random(255);

	var x = random(window.innerWidth);
	
	stroke(r, g, b);
	line(x, 0, x, window.innerHeight);

	stroke(0);
	noFill();
	ellipse(mouseX, mouseY, theSize, theSize);

	console.log(theSize);
	
	if(theSize >= 75){
		theSizeBoolean = true
	}else if(theSize <= 0){
		theSizeBoolean = false;
	}

	if(theSizeBoolean == true){
		theSize--;
	}else if(theSizeBoolean == false){
		theSize++;
	}

}
