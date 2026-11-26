
var playerX = 50;
var playerY = 50;
var PlayerSize = 30;
var clickedObstacleX;
var clickedObstacleY;
var obstaclePlaced = false;
var obstacle1X = 90;
var obstacle1Y = 125;
var obstacle2X = 190;
var obstacle2Y = 400;

function setup() {
    createCanvas(600, 600);
}
function draw() {
    background(0);
//player move
if (keyIsDown(LEFT_ARROW)){
    playerX -= 5;
}
if (keyIsDown(RIGHT_ARROW)){
    playerX += 5;
}
if (keyIsDown(UP_ARROW)){
    playerY -= 5;
}
if (keyIsDown(DOWN_ARROW)){
    playerY += 5;
}
 playerX = constrain(playerX, 0, width);
 playerY = constrain(playerY, 0, height);
//movement of obi
  
    obstacle1X += random(-2,6);
    obstacle1Y += random(-2,4);
    obstacle2X += random(-2,9);
    obstacle2Y += random(-2,5);
    //wrappage
if (obstacle1X > width) {
    obstacle1X = 0;
}
if (obstacle1X < 0) {
    obstacle1X = width;
}
if (obstacle1Y > height) {
    obstacle1Y = 0;
}
if (obstacle1Y < 0) {
    obstacle1Y = height
}
if (obstacle2X > width) {
    obstacle2X = 0;
}
if (obstacle2X < 0) {
    obstacle2X = width;
}
if (obstacle2Y > height) {
    obstacle2Y = 0;
}
if (obstacle2Y < 0) {
    obstacle2Y = height;
}


    //exit
    fill(24,200,29);
    square(520, 520, 60);
    //obstacles
   fill (255, 0, 0);
    rect(obstacle1X, obstacle1Y, 80, 120);
    
    fill (0, 0, 250);
    circle(obstacle2X, obstacle2Y, 50);

    fill (255, 0, 255);
    triangle(200, 200, 250, 100, 300, 200);
    
    fill (0, 255,255);
    square(400, 400, 100);
    //movement



   if (obstaclePlaced) {
    fill (255, 150, 0);
    rect(clickedObstacleX, clickedObstacleY, 40, 40);
   }
//player
fill (255);
circle (playerX, playerY, PlayerSize);
//da win
if (playerX > 520 && playerX < 580 && playerY > 520 && playerY < 580)
{
    fill (255);
    textSize (40);
    text("winner", 200, 300);
}
else {
    fill(255);
    textSize(20);
    text("reach the exit", 10, 30);
}
//mouse obi
if (mouseIsPressed) {
    clickedObstacleX = mouseX;
    clickedObstacleY = mouseY;
    obstaclePlaced = true
}
}


  
  
