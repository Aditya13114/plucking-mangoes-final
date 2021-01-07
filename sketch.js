
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	boy = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(728,304);
	stone = new Stone(280,402,60);
	mango1 = new Mango(635,325,25);
	mango2 = new Mango(605,285,25); 
	mango3 = new Mango(715,305,25);
	slingshot = new Launcher(stone.body, {x:260,y:380})

	


	Engine.run(engine);
  
}


function draw() {
 
  background("white");
	image(boy, 240,350,250,250);
  text(mouseX+","+mouseY,mouseX,mouseY);
  
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  slingshot.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3)
 
}


function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingshot.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	slingshot.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
   
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

