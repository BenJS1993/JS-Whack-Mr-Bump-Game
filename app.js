const fields = document.querySelectorAll(".field");
const scoreBoard = document.querySelector(".score");
const mrBumps = document.querySelectorAll(".mrbump");
let lastField;
let timeUp;
let score = 0;

function timer(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomField(fields) {
  const idx = Math.floor(Math.random() * fields.length);
  const field = fields[idx];
  if (field === lastField) {
    return randomField(fields);
  }
  lastField = field;
  return field;
}

function surprise() {
  const time = timer(300, 1000);
  const field = randomField(fields);
  field.classList.add("up");
  setTimeout(() => {
    field.classList.remove("up");
    if (!timeUp) surprise();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  surprise();
  setTimeout(() => (timeUp = true), 15000);
}

function hit(e) {
  if (!e.isTrusted) return;
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
}

mrBumps.forEach(mrbump => mrbump.addEventListener("click", hit));

function countdown() {
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

function buttonDisable() {
  document.getElementById("startBtn").disabled = true;
  setTimeout(function() {
    document.getElementById("startBtn").disabled = false;
  }, 15000)
}

document.getElementById("startBtn").addEventListener("click", buttonDisable);