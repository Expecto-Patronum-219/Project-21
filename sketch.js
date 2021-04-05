var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400, 1500)
  thickness=random(22, 100)
  bullet=createSprite(50, 200, 50, 10);
  wall=createSprite(1500, 200,thickness, height/2);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);
 

if(collided(bullet, wall)){

bullet.velocityX=0;
var D=0.5*weight*speed*speed/(thickness*thickness*thickness)

if(D>10){
wall.shapeColor="red";
}

if(D<10){
  wall.shapeColor="green";
  }

}

  drawSprites();
}

function collided(lbullet, lwall){

  bulletRightEdge=lbullet.x+lbullet.width
  wallLeftEdge=lwall.x
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
else {return false}

}