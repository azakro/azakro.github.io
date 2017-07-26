function rainbowTri(sketch){

	var R = 255;
	var G = 0;
	var B = 0;
	var state = 1;

	sketch.setup = function() {
		sketch.createCanvas(window.innerWidth, window.innerHeight*.75);
		sketch.background(255);
	}

	sketch.draw = function(){
		sketch.stroke(R, G, B);
		sketch.triangle(0, 0, sketch.mouseX, sketch.mouseY, innerWidth, innerHeight);
		
		if(G < 255 && state == 1){
	    	G++;
	    	R--;
	    	if(G == 255)
	        	state = 2;
		}
		
		if(B < 255 && state == 2){
	    	B++;
	    	G--;
	    	if(B == 255)
	        	state = 3;
		}

		if(state == 3){
	    	R++;
	    	B--;
	    	if(B == 0)
	        	state = 1;
		}
	}

}
