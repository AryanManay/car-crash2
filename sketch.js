var thickness,wall;

var bullet,seepd,weight;

function setup() {
  createCanvas(1600,400);
 bullet = createSprite(50, 200, 50, 20);
  speed = random(90,190);
  weight = random(30,52);
  thickness = random(22,83);
  wall = createSprite(1000,200,thickness,height/2);
  
}

function hasCollided(Lbullet , Lwall)
{
  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}

function draw() {
  background(255,255,255);  
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22509;
    if (deformation>180) {
      bullet.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      bullet.shapeColor = color(0,255,0);
    }

      if(deformation>100){
        bullet.shapeColor = color(100,22,0);
    }
    
    if(hasCollided(bullet,wall)){
      bullet.velocity=0;
      var damage=0.5 * weight * speed * speed/(thickness * thicknes *thickness);
    }
    if(damage>10 ){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10 ){
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}