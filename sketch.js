var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, boxWall1, boxWall2, boxWall3;
var boxWall1Sprite, boxWall2Sprite, boxWall3Sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	
	boxWall1Sprite = createSprite(400,650,200,20);
	boxWall1Sprite.shapeColor = "red";
    
	boxWall2Sprite = createSprite(310, 600, 20, 100);
	boxWall2Sprite.shapeColor = "red";
   
	boxWall3Sprite = createSprite(490, 600, 20, 100);
    boxWall3Sprite.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	boxWall1 = Bodies.rectangle(400,650,200,20, {isStatic:true});
	World.add(world, boxWall1);
	
	boxWall2 = Bodies.rectangle(310,600,20,100, {isStatic:true});
	World.add(world, boxWall2);
	
	boxWall3 = Bodies.rectangle(490,600,20,100, {isStatic:true});
	World.add(world, boxWall3);



   


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y; 
  keyPressed();
  if(packageBody.x > 620){
	Matter.Body.setStatic(packageBody, true);
}
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
}
}



