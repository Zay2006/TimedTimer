let timer;
let isRunning = false;
let elapsedTime = 0;

const display = document.getElementById("timer-display");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

startButton.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      elapsedTime += 1;
      display.textContent = formatTime(elapsedTime);
    }, 1000);
  }
});

stopButton.addEventListener("click", () => {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
});

resetButton.addEventListener("click", () => {
  isRunning = false;
  clearInterval(timer);
  elapsedTime = 0;
  display.textContent = formatTime(elapsedTime);
});

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(num) {
  return num.toString().padStart(2, "0");
}
