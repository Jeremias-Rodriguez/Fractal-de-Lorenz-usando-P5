/**
 Para ejecutar este codigo se necesitan la libreria de P5.js
*/

var x=1;
var y=1;
var z=1;

var G=10;
var R=28;
var B=8.0/3.0;

var points = [];

function setup() {
	createCanvas(800, 600, WEBGL);
	colorMode(HSB);
}


function draw() {
	background(0);

	orbitControl(5,5);

	dt = 0.01;
	dx = (G*y - G*x) * dt;
	dy = (R*x - y - x*z) * dt;
	dz = (x*y - B*z) * dt;
  
	x = x + dx;
	y = y + dy;
	z = z + dz;

//Activar rotacion automatica
/*
	rotateX(frameCount * 0.005);
	rotateZ(frameCount * 0.005);
*/
	points.push(createVector(x, y, z));
	
	translate(0,0,-80);
	scale(5);
	noFill();

	hu = 0.0;
	beginShape();
	points.forEach(v => {
		stroke(hu, 255, 255);
		vertex(v.x, v.y, v.z);
		hu += 0.1;
		if(hu > 255){
			hu = 0;
		}
	});
	endShape();
}