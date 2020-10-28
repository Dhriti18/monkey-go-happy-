var monkey, monkey_running, ground;
var banana, bananaImage, obstacleImage;
var FoodGroup, obstaclesGroup;
var survivalTime = 0;
var score = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("monk", monkey_running);
  monkey.scale = 0.1;
  FoodGroup = createGroup();

  ground = createSprite(600, 350, 800, 50);
  ground.velocityX = -8;
  ground.x = ground.width / 2;
  console.log(ground.x);


}


function draw() {
  background("white");
  stroke("blue");
  textSize(20);
  fill("blue");
  text("Score:" + score, 250, 103);
  text("X" + mouseX + "Y" + mouseY, mouseX, mouseY);

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  if (keyDown("space")) {
    monkey.velocityY = -10;
  }

  monkey.velocityY = monkey.velocityY + 0.8;
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = survivalTime + Math.round(getFrameRate() / 60);
  text("SurvivalTime:" + survivalTime, 100, 50);

  monkey.collide(ground);

  bananac();
  obs();

  drawSprites();
}

function bananac() {
  if (frameCount % 60 === 0) {
    var banana1 = createSprite(100, Math.round(random(120, 200)), 10, 10);
    banana1.addImage("banana3", bananaImage);
    banana1.scale = 0.1;
    banana1.velocityX = -10;
    banana1.lifetime = 40;
    FoodGroup.add(banana1);


  }
}

function obs() {
  if (frameCount % 100 === 0) {
    var obstacle1 = createSprite(Math.round(random(20, 360)), 310, 10, 10);
    obstacle1.velocityX = -6;
    obstacle1.addImage("obst", obstacleImage);
    obstacle1.scale = 0.1;
    obstacle1.lifetime = 40;


  }
}