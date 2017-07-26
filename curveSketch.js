function curveSketch(sketch){

	sketch.setup = function(){
		sketch.createCanvas(window.innerWidth, window.innerHeight);
		sketch.background(255);
	}

	sketch.draw = function(){
		sketch.noFill();
		//maroon
		sketch.stroke(128, 0, 0);
		sketch.curve(sketch.mouseX, 100, sketch.mouseX, sketch.mouseY, 73, 24, 73, 61);
		//dark golden rod
		sketch.stroke(184, 134, 11);
		sketch.curve(100, 400, 300, sketch.mouseY, 50, 80, 500, 30, sketch.mouseY);
		//saddle brown
		sketch.stroke(139, 69, 19);
		sketch.curve(100, sketch.mouseY, 500, sketch.mouseY, 100, 450, sketch.mouseX, 300, sketch.mouseY);
		//pale green
		sketch.stroke(84, 139, 84);
		sketch.curve(sketch.mouseX, 500, sketch.mouseX, 500, sketch.mouseX, 100, window.innerHeight, 100);
		//dark olive green
		sketch.stroke(85, 107, 47);
		sketch.curve(window.innerWidth, 400, sketch.mouseX, 600, window.innerHeight, sketch.mouseX, 500, 30, 100);
		//melon
		sketch.stroke(227, 168, 105);
		sketch.curve(100, sketch.mouseY, sketch.mouseX, 60, window.innerHeight, window.innerWidth, 400, sketch.mouseY, 30);
		//dark brown
		sketch.stroke(101, 67, 33);
		sketch.curve(400, window.innerHeight, 100, window.innerHeight, sketch.mouseX, sketch.mouseY, 600, window.innerHeight, 30);
	}
}