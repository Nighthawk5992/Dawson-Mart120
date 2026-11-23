let tileSize = 80;
let maze = [
 [1,1,1,1,1,1,1,1,0,1],
 [1,0,2,2,2,2,2,2,0,1],
 [1,2,1,1,2,1,1,1,0,1],
 [0,2,2,2,2,2,2,1,0,0],
 [1,1,1,2,1,1,2,1,1,1],
 [1,2,2,2,2,1,2,2,0,1],
 [1,2,1,1,2,1,1,1,0,1],
 [1,2,2,1,2,2,2,1,0,1],
 [1,2,2,2,2,1,2,2,0,1],
 [1,1,1,1,1,1,1,1,0,1]
];
let ghosts = [
    { x:4 , y:3, size: 30, color: 'red' },
    { x:6 , y:5, size: 50, color: 'pink' },
    { x:4, y:5, size: 20, color: 'cyan' },
    { x:5, y:3, size: 40, color: 'orange' },
    { x:3, y:5, size: 35, color: 'purple' }
];
// 1 = wall
// 2 = pellet
// 0 = empty space
function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(220);
    drawMaze();
    drawPlayer();
    drawGhosts();
    checkGhostCollision();

    // Move ghosts every second
    if (frameCount % 30 === 0) {
    moveGhosts();
    }
}
    // Draw maze
  function drawMaze() {
  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[row].length; col++) {

      if (maze[row][col] === 1) {
        fill(0, 0, 255);
        rect(
          col * tileSize, row * tileSize, tileSize, tileSize );
      }
     //draw pellet
      if (maze[row][col] === 2) {
        fill(255, 255, 0);
        circle(col * tileSize + tileSize / 2, row * tileSize + tileSize / 2, 10 );
      }
    }
  }
}
    
    // Draw player
   function drawPlayer() {
     fill(200,200,100);
    circle(player.x * tileSize + tileSize / 2, player.y * tileSize + tileSize / 2, tileSize / 2);
   }
    //draw ghosts
    function drawGhosts() {
    for (let i = 0; i < ghosts.length; i++) {
        fill(ghosts[i].color);
        circle(ghosts[i].x * tileSize + tileSize / 2, ghosts[i].y * tileSize + tileSize / 2, ghosts[i].size);
    }
}
   
//player movement
 let player = { x: 1, y: 1 };
 function keyPressed() {
  let nextX = player.x;
  let nextY = player.y;
   //keys
  if (key === 'ArrowUp') nextY--;
    if (key === 'ArrowDown') nextY++;
    if (key === 'ArrowLeft') nextX--;
    if (key === 'ArrowRight') nextX++;
    //wrap around
    let wrapped = wrapAround(nextX, nextY);
      nextX = wrapped.x;
      nextY = wrapped.y;
    
    
    // Check for wall collision
    if (maze[nextY][nextX] !== 1) {
        player.x = nextX;
        player.y = nextY;
    }   
    
    // Check for pellet collection
    if (maze[player.y][player.x] === 2) {
        maze[player.y][player.x] =0;
    }
   
    function wrapAround(x, y) {

  // Horizontal tunnel
  if (x < 0) {
    x = maze[0].length - 1;
  }

  if (x >= maze[0].length) {
    x = 0;
  }

  // Vertical tunnel
  if (y < 0) {
    y = maze.length - 1;
  }

  if (y >= maze.length) {
    y = 0;
  }

  return { x, y };
}
}
//ghost movement
function moveGhosts() {
    for (let i = 0; i < ghosts.length; i++) {
        let direction = floor(random(4));
        let nextX = ghosts[i].x;
        let nextY = ghosts[i].y;
        if (direction === 0) nextY--;
        if (direction === 1) nextY++;
        if (direction === 2) nextX--;
        if (direction === 3) nextX++;
        // ghost wall collision 
         if (maze[nextY] && maze[nextY][nextX] !== 1) {
            ghosts[i].x = nextX;
            ghosts[i].y = nextY;
        }
        //wrap around
        let wrapped = wrapAround(ghosts[i].x, ghosts[i].y);
        ghosts[i].x = wrapped.x;
        ghosts[i].y = wrapped.y;
    }
} 
function wrapAround(nextX, nextY) {
    let x = nextX;
    let y = nextY;
   //horizontal wrap
    if (x < 0) {
        x = maze[0].length - 1;
    }
    if (x >= maze[0].length) {
        x = 0;
    }
    //vertical wrap
    if (y < 0) {
        y = maze.length - 1;
    }
    if (y >= maze.length) {
        y = 0;
    }
    return { x,y };
}   
function checkGhostCollision() {

  for (let i = 0; i < ghosts.length; i++) {

    if (
      player.x === ghosts[i].x &&
      player.y === ghosts[i].y
    ) {
      restartGame();
    }
  }
}
function restartGame() {

  // Resets player
  player.x = 1;
  player.y = 1;

  // Resets ghosts
  ghosts = [
    { x:4, y:3, size:30, color:'red' },
    { x:6, y:5, size:50, color:'pink' },
    { x:4, y:5, size:20, color:'cyan' },
    { x:5, y:3, size:40, color:'orange' },
    { x:3, y:5, size:35, color:'purple' }
  ];
}