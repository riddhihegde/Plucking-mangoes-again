
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
  stoneObj=new Stone(242,422,23);
	mango1=new mango(1100,100,23);
	mango2=new mango(1028,290,23);
	mango3=new mango(985,178,23);
	mango4=new mango(1202,218,23);
	mango5=new mango(908,223,23);
	mango6=new mango(1016,78,23);
  mango7=new mango(1127,208,23);
  mango8=new mango(984,264,23);
  mango9=new mango(1066,214,23);
  mango10=new mango(1099,184,23);
  mango11=new mango(979,118,23);
  mango12=new mango(1202,179,23);
  mango13=new mango(1110,46,23);


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  
  launcherObject = new Throw(stoneObj.body,{x:242,y:422});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  
  fill("black");
  textSize(25);
  text ("Press 'SPACE' to get second chance",314,68);


  image(boy ,200,340,200,300);

    detectCollision(stoneObj,mango1);
    detectCollision(stoneObj,mango2);
    detectCollision(stoneObj,mango3);
    detectCollision(stoneObj,mango4);
    detectCollision(stoneObj,mango5);
    detectCollision(stoneObj,mango6);
    detectCollision(stoneObj,mango7);

    drawSprites();

  
  
  treeObj.display();
  stoneObj.display();
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
  mango12.display();
  mango13.display();


  groundObject.display();
  
 
}


function mouseDragged(){

   Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

  launcherObject.fly();
}

function detectCollision(stoneObj,lmango){

  if(stoneObj.body.position.x - lmango.body.position.x < lmango.r + stoneObj.r
     && lmango.body.position.x - stoneObj.body.position.x < lmango.r + stoneObj.r
     && stoneObj.body.position.y - lmango.body.position.y < lmango.r + stoneObj.r
     && lmango.body.position.y - stoneObj.body.position.y < lmango.r + stoneObj.r){
       Matter.Body.setStatic(lmango.body,false);
     }
}

function keyPressed(){

     if(keyCode === 32){

      Matter.Body.setPosition(stoneObj.body,{x:242,y:422});
      launcherObject.Launch(stoneObj.body);

     }

}



