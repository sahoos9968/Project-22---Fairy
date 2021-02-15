const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var fairy, fairyImage, starnightImage, starnight;

function preload()
{
   engine = Engine.create();
   world = engine.world;

   fairyImage = loadAnimation("images/fairy.png"," images/fairy1.png"," images/fairy2.png");

   starnightImage = loadImage("images/starnight.png");

}

function setup() {
	createCanvas(800, 750);

  engine = Engine.create();
  world = engine.world;

  fairy = createSprite(400,370,20,20);
  fairy.addAnimation("fairy", fairyImage);
}


function draw() {
  background("black");

  drawSprites();
}
