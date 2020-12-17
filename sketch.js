
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,world,engine;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball=Bodies.circle(400,350,100,100)
ball.shapeColor="red";

	Engine.run(engine);
	
}



function draw() {
  rectMode(CENTER);
  background(100);
  ellipse=(ball.positionX,ball.positionY,100,100);
  drawSprites();
 
}



