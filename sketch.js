var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  
  speed=random(55,90)
  weight=random(400,1500)

  car=createSprite(50,200,50,50);
  wall=createSprite(600,200,30,400);
  wall.shapeColor=80,80,80;
}

function draw() {
  background(0,0,0); 
  
  car.velocityX=speed;

  if(car.x>550){
    car.velocityX=0;
  }
  
  if(0.5*weight*speed*speed/22500<100){
    car.shapeColor="green";
  }

  if(0.5*weight*speed*speed/22500>100  &&  0.5*weight*speed*speed/22500<180){
    car.shapeColor="yellow";
  }

  if(0.5*weight*speed*speed/22500>180){
    car.shapeColor="red";
  }
  drawSprites();
}
