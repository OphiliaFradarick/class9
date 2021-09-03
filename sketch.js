//global variable
var box;

function setup(){

  //local variable
  var canvas = createCanvas(800,600);

  box=createSprite(300,100,40,40);
  box.shapeColor= "orange";

}

function draw(){
  background(0);

  drawSprites();
}