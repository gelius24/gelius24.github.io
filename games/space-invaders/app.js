const grid = document.querySelector(".grid");
const WIDTH = 15;
const results = document.querySelector(".results");
let result = 0;
const aliensKilled = [];
let shooterIndex = 202;
let intervalId;
let isGoingRight = true;
let direction = 1;

for (let i = 0; i < WIDTH * WIDTH; i++) {
  const square = document.createElement("div");
  grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll(".grid div"));
console.log(squares);

const aliens = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39,
];

function draw() {
  for (let i = 0; i < aliens.length; i++) {
    if (!aliensKilled.includes(i)) squares[aliens[i]].classList.add("alien");
  }
}
draw();

squares[shooterIndex].classList.add("shooter");

function move(e) {
  squares[shooterIndex].classList.remove("shooter");
  switch (e.key) {
    case "ArrowLeft":
      if (shooterIndex % WIDTH !== 0) {
        shooterIndex -= 1;
      }
      break;
    case "ArrowRight":
      if (shooterIndex % WIDTH < WIDTH - 1) {
        shooterIndex += 1;
      }
  }
  squares[shooterIndex].classList.add("shooter");
}

document.addEventListener("keydown", move);

function removeAliens() {
  for (let i = 0; i < aliens.length; i++) {
    squares[aliens[i]].classList.remove("alien");
  }
}

function moveAliens() {
  const leftEdge = aliens[0] % WIDTH === 0;
  const rightEdge = aliens[aliens.length - 1] % WIDTH === WIDTH - 1;
  removeAliens();

  if (rightEdge && isGoingRight) {
    for (let i = 0; i < aliens.length; i++) {
      aliens[i] += WIDTH + 1;
      direction = -1;
      isGoingRight = false;
    }
  }

  if (leftEdge && !isGoingRight) {
    for (let i = 0; i < aliens.length; i++) {
      aliens[i] += WIDTH - 1;
      direction = 1;
      isGoingRight = true;
    }
  }

  for (let i = 0; i < aliens.length; i++) {
    aliens[i] += direction;
  }

  draw();

  if (squares[shooterIndex].classList.contains("alien")) {
    results.textContent = "GAME OVER";
    clearInterval(intervalId);
  }

  if (aliensKilled.length === aliens.length) {
    results.textContent = "YOU WIN";
    clearInterval(intervalId);
  }
}

intervalId = setInterval(moveAliens, 600);

function shoot(e) {
  let laserId;
  let laserIndex = shooterIndex;

  function moveLaser() {
    squares[laserIndex].classList.remove("laser");

    laserIndex -= WIDTH;

    squares[laserIndex].classList.add("laser");

    if (squares[laserIndex].classList.contains("alien")) {
    
      squares[laserIndex].classList.remove("laser");
      squares[laserIndex].classList.remove("alien");
      squares[laserIndex].classList.add("boom");
      setTimeout(() => squares[laserIndex].classList.remove("boom"), 300);
      clearInterval(laserId);
      const alienKilled = aliens.indexOf(laserIndex)
      aliensKilled.push(alienKilled);
      result++;
      results.textContent = result
    }
  }

  if (e.key === " ") laserId = setInterval(moveLaser, 100);
  
}

document.addEventListener("keydown", shoot);
