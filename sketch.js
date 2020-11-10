//Create variables here
var dog
var  happyDog
var  database
var  foodS
var foodStock


function preload()
{
  //load images here
  
  happyDog = loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(800,700);
  dog = createSprite(400,300,30,30)
  dog.addImage("happyDog")
  
}


function draw() {  

  drawSprites();
  //add styles here

}



