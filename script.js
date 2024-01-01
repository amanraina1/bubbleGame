var timer = 10;
var score = 0;
var hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}
function makeBubble() {
  var clutter = "";

  for (var i = 0; i <= 111; i++) {
    const num = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${num}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pbtm").innerHTML = `
      <h1>GAME OVER !!!!</h1>
      <h1>YOUR SCORE IS : ${score}</h1>
      `;
    }
  }, 1000);
}
document.querySelector("#pbtm").addEventListener("click", (e) => {
  var clickedNum = Number(e.target.textContent);
  if (clickedNum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

makeBubble();
runTimer();
getNewHit();
