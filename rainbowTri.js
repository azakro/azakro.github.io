var R = 255;
var G = 0;
var B = 0;
var state = 1;

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	background(255);
}

function draw(){
	stroke(R, G, B);
	triangle(0, 0, mouseX, mouseY, innerWidth, innerHeight);
	
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
