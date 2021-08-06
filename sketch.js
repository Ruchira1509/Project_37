var form,system,code,security;
var win, winImg

function preload() {
  winImg = loadImage("winImg.jpeg");
}

function setup() {
  createCanvas(500, 500);
  security = new Security();
  system = new System();
  
  
}

function draw() {
  background("pink");
  clues();
  security.display();

  textSize(30);
  strokeWeight(10)
  fill("black");
  text("My Quiz Game", 150, 50);

  

  drawSprites()
}