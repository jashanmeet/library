function setup() {
  createCanvas(800, 400);

  fixed = createSprite(600,200,50, 100);
  moving = createSprite(200,200,250, 100)
;

  fixed2   = createSprite(100, 200,  50, 100);
  fixed3   = createSprite(300, 200,  50, 100);
  fixed2.shapeColor = "green";
  fixed3.shapeColor = "green";

  }

function draw() {
  background(255, 255, 255);
  moving.x = World.mouseX
  moving.y = World.mouseY
  if (isTouching(fixed3,moving )) {
    fixed3.shapeColor = "red"; moving.shapeColor = "red";
  }
  else {
    fixed3.shapeColor = "green"; moving.shapeColor = "green";
  }
  drawSprites();
}
