
var box
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50)
}

function draw() 
{
  background("blue");
 if (keyDown("up")){
  box.y = box.y-5
 
 }
  if (keyDown("down")){
box.y = box.y + 5
  }
 
  drawSprites()

}




