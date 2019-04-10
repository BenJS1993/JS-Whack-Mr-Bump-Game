// const holes = document.querySelectorAll(".hole");
// const scoreBoard = document.querySelector(".score");
// const moles = document.querySelectorAll(".mole");

function timer(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(field) {
  const idx = Math.floor(Math.random() * field.length);
  const hole = field[idx];
  if (hole == lastHole) {
    return randomHole(field);
  }
  lastHole = hole;
  return hole;
}

function surprise() {
  const time = randomTime(500, 1200);
  const hole = randomHole(field);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) surprise();
  }, time);
}

function countDown() {
  seconds = document.getElementById("countdown").innerHTML;

  if (seconds == 0) {
    temp.innerHTML = "Buzzzz!!";
    if (score > highScore) {
      highest.textContent = score;
      localStorage.setItem("High Score", score);
      alert(
        `You've set a new high score! You whacked Mr. Bump ${score} times!`
      );
    }
    return;
  }
  seconds--;
  temp.innerHTML = seconds;
  setTimeout(countDown, 1000);
}
