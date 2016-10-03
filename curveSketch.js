function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
}

function draw(){
	noFill();
	//maroon
	stroke(128, 0, 0);
	curve(mouseX, 100, mouseX, mouseY, 73, 24, 73, 61);
	//dark golden rod
	stroke(184, 134, 11);
	curve(100, 400, 300, mouseY, 50, 80, 500, 30, mouseY);
	//saddle brown
	stroke(139, 69, 19);
	curve(100, mouseY, 500, mouseY, 100, 450, mouseX, 300, mouseY);
	//pale green
	stroke(84, 139, 84);
	curve(mouseX, 500, mouseX, 500, mouseX, 100, window.innerHeight, 100);
	//dark olive green
	stroke(85, 107, 47);
	curve(window.innerWidth, 400, mouseX, 600, window.innerHeight, mouseX, 500, 30, 100);
	//melon
	stroke(227, 168, 105);
	curve(100, mouseY, mouseX, 60, window.innerHeight, window.innerWidth, 400, mouseY, 30);
	//dark brown
	stroke(101, 67, 33);
	curve(400, window.innerHeight, 100, window.innerHeight, mouseX, mouseY, 600, window.innerHeight, 30);

}