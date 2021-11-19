var bg,bg2,form,system,code,security;
var score=0;
var hint1, hint1Txt, hint2, hint2Txt, hint3, hint3Txt;
function preload() {
 
  
  bg= loadImage("aladdin_cave2.jpg")
  //load image for the treasure background
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  hint1 = ["V", "A", "R", "I", "A", "B", "L", "E"];
  hint1Txt = mix(hint1);
  hint2 = ["F", "U", "N", "C", "T", "I", "O", "N"];
  hint2Txt = mix(hint2);
  hint3 = ["D", "A", "T", "A", "B", "A", "S", "E"];
  hint3Txt = mix(hint3);
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}