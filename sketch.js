var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,s1,s2,s3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var package1;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	package1 = new Package(200,300,50,50);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	s1=createSprite(390,690,20,100)
	s1.shapeColor="red";
	
	s2=createSprite(400,690,200,20)
	s2.shapeColor="red";
	
	s3=createSprite(410,690,20,100)
    s3.shapeColor="red";

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  Engine.update(engine);
  package1.x= packageBody.position.x 
  package1.y= packageBody.position.y 

  package1.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



