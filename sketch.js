function setup() {

  createCanvas(1600,400);
  //car = createSprite(100, 200, 40, 40);
  //car.shapeColor = color(255);
  speed=random(223, 321);
  weight=random(30, 52);
  wall = createSprite(1000, 200, thickness, height/2);
  wall.shapeColor= color(230, 230, 230);
  //car.velocityX = speed;
  thickness= random(22, 83);
  bullet = createSprite(50, 200, 15, 100);
  bullet.shapeColor = color(255);
  bullet.velocityX = speed;
  //bullet.speed=random(233, 321);
  //bullet.weight=random(30, 52);

  //wall.debug = true;
  //car.debug = true;

}

var bullet, wall, thickness;
var speed, weight;

function draw() {
  background(0);  
  //car.collide(wall);
  bullet.collide(wall);
  
 // if(wall.x-bullet.x < (bullet.width+wall.width)/2) 
  if (hascollided(bullet, wall))
  {
    bullet.velocityX = 0;
    //var deformation=0.5 * weight * speed * speed/22509;
    var damage=0.5 * weight *speed * speed/(thickness * thickness * thickness)
    //if(deformation>180)
    if(damage>10)
    {
      wall.shapeColor = color(255, 0, 0);
    }

    //if(deformation<180 && deformation>100)
    //{
      //bullet.shapeColor = color(230, 230, 0);
   //}
   //if(deformation< 100)
   if(damage<10)
    {
      wall.shapeColor = color(0, 255, 0);
    }

}
  drawSprites();
}

function hascollided(bullet1, wall1) 
{
  bulletRightEdge=bullet1.x + bullet1.width;
  wallLeftEdge=wall1.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}