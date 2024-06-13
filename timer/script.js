const display = document.querySelector(".container");
const reset = document.querySelector("#reset");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const startBtn = document.querySelector("#startBtns");
const pauseBtn = document.querySelector("#pauseBtns");
const resetBtn = document.querySelector("#resetBtns");

let timer = null;
let newTimer = null;
let [hours, minutes, seconds] = [0, 0, 0];

function watchStart() {
  seconds++;
  if (seconds > 60) {
    seconds = 0;
    minutes++;
    if (minutes > 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerHTML = `${h} : ${m} : ${s}`;
}

start.addEventListener("click", () => {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(watchStart, 1000);
});

pause.addEventListener("click", () => {
  clearInterval(timer);
});

reset.addEventListener("click", () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  display.innerHTML = "00:00:00";
});

let time = 2;
let totalTime = time * 60;

const countDown = () => {
  let hour = Math.floor(totalTime / 3600);
  let minute = Math.floor(totalTime / 60);
  let second = totalTime % 60;

  let h = hour < 10 ? "0" + hour : hour;
  let m = minute < 10 ? "0" + minute : minute;
  let s = second < 10 ? "0" + second : second;
  document.querySelector("#timeShow").innerHTML = `${h} : ${m} : ${s}`;
  totalTime--;
};
startBtn.addEventListener("click", () => {
  if (newTimer !== null) {
    clearInterval(newTimer);
  }

  newTimer = setInterval(countDown, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(newTimer);
});
