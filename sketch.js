const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var balls = [];



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();
  cannonBall.display()
 
for(var e = 0; e- balls.length; e++){
  showCannonBalls(balls[e],e);
}

}






function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    balls[balls.length-1].shoot();
  }
}

function keyPressed() {
if (keyCode === DOWN_ARROW) {
cannonBall = new CannonBall (cannon.x,cannon.y);
balls.push(cannonBall)

}




}

function showCannonBalls(ball,index) 
ball.display();
if (ball.bodie.position.x >= width || ball.bodie.position.y <= height -50) {
Matter.World.remove(world,ball.bodie);
balls.splice(index)

}
