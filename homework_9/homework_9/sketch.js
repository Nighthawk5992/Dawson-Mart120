// the lets
let xPos = 0;
let xSpeed = 5;
let yPos = 300;
let ySpeed = 2;
let triX = 100;
let triY = 100;
let triSpeedX = 4;
let triSpeedY = 3;
let titleSize = 30;
let titleChange = 5;
let count = 0;
let delay = 0;

function setup() {
    createCanvas(800, 600);
   // random speed for the shapes
    xSpeed = random(1, 5);
    ySpeed = random(1, 6);
    triSpeedX = random(2, 6);
    triSpeedY = random(1, 5);
}

function draw() {
    background(220);
 
    //title
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(titleSize);
  text("A face", width / 5, 50);
//changes size and changes
 
 
delay++;
if (delay >= 10) {
    titleSize += titleChange;
    count++
    delay = 0;
}
if (count >= 5 ) {
    titleChange *= -1;
    count = 0;
}
   

    //head 
    noStroke();
    fill(225, 224, 170);
    ellipse(400, 300, 350, 425);
 
    //eyes
    fill(255);
    ellipse(465, 250, 75, 50);
    ellipse(350, 250, 75, 50);

    //pupils
    fill(0, 178, 162);
    circle(465, 250, 25);
    circle(350, 250, 25);
    strokeWeight(5);
    point(465, 250);
    point(350, 250);




    //hair
    rect(300, 100, 200, 100);



    //eyebrows 
    line(400, 200, 350, 225);
    line(400, 200, 450, 225);



     //nose
     triangle(400, 250, 350, 320, 420, 320);
    
     // the y shape
     circle(750, yPos, 25); 
     //the movement of the y shape
    
        yPos += ySpeed;
     if (yPos > width - 50 || yPos < 0) {
        ySpeed *= -1;
        if (xPos > 400 || xPos < 250) {
            xSpeed *= -1;
        }
    }
        //the x shape
       fill(0, 178, 162);
        square(xPos, 550, 50, 50);
       
    //the movement of the x shape
        xPos += xSpeed;
        if (xPos > width - 50 || xPos < 0)
            xSpeed *= -1;
        if (yPos > 400 || yPos < 250) {
            ySpeed *= -1;
        }
        // the triangle that has the moves
        fill(0, 178, 162);
        triangle(triX, triY, triX - 25, triY + 50, triX + 25 , triY + 50);
        //the movement of the triangle
        triX += triSpeedX;
        triY += triSpeedY;
        if (triY > height - 50 || triY < 0) {
            triSpeedY *= -1;
        }
        if (triX > width - 50 || triX < 0) {
            triSpeedX *= -1;
        } }