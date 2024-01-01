var timer = 60;

function getNewHit() {
  var rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = rn;
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
    }
  }, 1000);
}

makeBubble();
runTimer();
getNewHit();
