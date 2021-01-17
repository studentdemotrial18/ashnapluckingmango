var ground,boy,boyImg,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11
,stone,tree,slingShot;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//Added below line
const Constraint=Matter.Constraint;
// Added library files 
// added all the javascript files in index.html

function preload()
{
    //Modified the path as boy.png
	boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;
    //modified x position of boy in below line
	boy = createSprite(100,440,50,50);
	boy.addImage(boyImg);
	boy.scale=0.09;

    fill("grey");
	ground= Bodies.rectangle(500,490,1000,20, {isStatic:true});
	World.add(world,ground);
    //Increased width and height of the tree
    tree = new Tree(800,300,400,400);
    //increased width and height of stone to make stone little bigger
    stone = new Stone(100,400,20,20);
    
    //Ashna please Modify below mango positions so that they will be on the tree 
	mango1 =new Mango(700,50);
	mango2 =new Mango(750,50);
	mango3 =new Mango(800,50);
	mango4 =new Mango(850,50);
	mango5 =new Mango(900,50);
	mango6 =new Mango(700,100);
	mango7 =new Mango(750,100);
	mango8 =new Mango(800,100);
	mango9 =new Mango(850,100);
	mango10 =new Mango(700,150);
	mango11 =new Mango(800,150);

    slingShot = new Throw(stone.body,{x:50,y:400});


	Engine.run(engine);
  
}


function draw() {

  background("lightgrey");

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1000,20);

  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  slingShot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);

  
  drawSprites();
  text("x:"+mouseX+"y:"+mouseY,mouseX,mouseY);
  fill("black");
  textSize(25);
  text("Press Space to get a second chance",50,50);
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420});
	}
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

    slingShot.fly();
}

function detectCollision(lstone,lmango){
    //modified variable names below
    mangoBodyPosition=lmango.body.position;
    stoneBodyPosition=lstone.body.position;
    //Added below lines of code
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
    if(distance<=lmango.r+lstone.r)
    {
        	  Matter.Body.setStatic(lmango.body,false);
    }
}


