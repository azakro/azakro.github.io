
function setup(){
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);
	perspective(60 / 180 * PI, (width/2)/height*2, 0.5, 100);
	background(255, 0, 0);
}


function draw(){
	background(255);
	orbitControl();
	normalMaterial();
	for(var i = -50; i < 50; i++){
		for(var j = -50; j < 50; j++){
      		push();
      		translate(i*120, 300, j*100);
      		sphere(20, 20, 20);
      		pop();
    	}
  	}
}
