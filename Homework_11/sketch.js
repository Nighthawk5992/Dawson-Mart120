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
    //funcs
    movePlayer();
    moveObstacle1();
    moveObstacle2();
    drawExit();
    drawObstacles();
    drawMouseObstacle();
    drawPlayer();
    drawBorder();
    displayWinMessage();
}
//player
function drawPlayer() {
fill (255);
circle (playerX, playerY, PlayerSize);
}
//player move
function movePlayer() {
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
}
//movement of obi
  function moveObstacle1 (){
    obstacle1X += random(-2,6);
    obstacle1Y += random(-2,4);
    wrapObstacle1 ();
  }
  function moveObstacle2 () {
    obstacle2X += random(-2,9);
    obstacle2Y += random(-2,5);
    wrapObstacle2 ();
  }
    //wrappage
    function wrapObstacle1() {
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
    }
    function wrapObstacle2 () {

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
    }

    //exit
    function drawExit() {
    fill(24,200,29);
    square(520, 520, 60);
    }
    //obstacles
function drawObstacles(){
   fill (255, 0, 0);
    rect(obstacle1X, obstacle1Y, 80, 120);
    
    fill (0, 0, 250);
    circle(obstacle2X, obstacle2Y, 50);

    fill (255, 0, 255);
    triangle(200, 200, 250, 100, 300, 200);
    
    fill (0, 255,255);
    square(400, 400, 100);
}
    //mouse place


 function drawMouseObstacle() {
   if (obstaclePlaced) {
    fill (255, 150, 0);
    rect(clickedObstacleX, clickedObstacleY, 40, 40);
   }
 }

 //mouse obi
function mousePressed () {
 if (mouseIsPressed) {
    clickedObstacleX = mouseX;
    clickedObstacleY = mouseY;
    obstaclePlaced = true
 }
}
//border
function drawBorder(){
    stroke (255); 
    strokeWeight(10);
    noFill ();
    rect(0,0, width, height);
    noStroke();
}



//da win
function displayWinMessage (){
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
}





  
  
