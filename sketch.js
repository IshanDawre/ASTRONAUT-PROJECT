var astronaut;

function preload() {
bg = loadImage ("images/iss.png");
sleep = loadAnimation("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym21.png","images/gym22.png");
eat = loadAnimation("add image urls here");
move = loadAnimation("add image urls here");
  
}




function setup() {
  createCanvas(400, 400);
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

  createEdgeSprites();
}

function draw() {
  background(220);

  if(keyDown("UP_ARROW")){
   astronaut.addAnimation("brushing",brush);
   astronaut.changeAnimation("brushing");
   astronaut.y = 350;
   astronaut.velocityX = 0;
   astronaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m key")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  astronaut.bounceOff(topEdge);
  astronaut.bounceOff(leftEdge);
  astronaut.bounceOff(downEdge);
  astronaut.bounceOff(rightEdge);
  
}