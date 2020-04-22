const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;
var ground;
var falling1,falling2,falling3;
function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(50,200,100,10);
    box2=new Box(50,100,100,10);
    box3=new Box(50,300,50,50);
    falling1=new Falling (500,20,40,40);
     falling2=new Falling  (500,10,40,40);
     falling3=new Falling  (500,10,40,40);
    ground=new Ground(200,380,400,20);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
     box2.display();
    box3.display();
    falling1.display();
    falling2.display();
    falling3.display();
     ground.display();
}






















