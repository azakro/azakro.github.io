function circLineSketch(sketch){

	var theSize = 75;
	var theSizeBoolean = true;

	sketch.setup = function() {
		sketch.createCanvas(window.innerWidth, window.innerHeight);
		sketch.background(255);
		
	}

	sketch.draw = function() {

		var r = sketch.random(255);
		var g = sketch.random(255);
		var b = sketch.random(255);

		var x = sketch.random(window.innerWidth);
		
		sketch.stroke(r, g, b);
		sketch.line(x, 0, x, window.innerHeight);

		sketch.stroke(0);
		sketch.noFill();
		sketch.ellipse(sketch.mouseX, sketch.mouseY, theSize, theSize);

		
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
}
