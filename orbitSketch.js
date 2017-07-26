function orbitSketch(sketch){

	sketch.setup = function(){
		sketch.createCanvas(window.innerWidth, window.innerHeight, sketch.WEBGL);
		sketch.perspective(60 / 180 * sketch.PI, (sketch.width/2)/sketch.height*2, 0.5, 100);
		sketch.background(255, 0, 0);
	}


	sketch.draw = function(){
		sketch.background(255);
		sketch.orbitControl();
		sketch.normalMaterial();
		for(var i = -50; i < 50; i++){
			for(var j = -50; j < 50; j++){
	      		sketch.push();
	      		sketch.translate(i*120, 300, j*100);
	      		sketch.sphere(20, 20, 20);
	      		sketch.pop();
	    	}
	  	}
	}

}
