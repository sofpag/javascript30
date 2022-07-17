const secondsHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsToDegrees = timeToDegrees(seconds, 60);
  secondsHand.style.transform = `rotate(${secondsToDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesToDegrees = timeToDegrees(minutes, 60);
  minHand.style.transform = `rotate(${minutesToDegrees}deg)`;

  const hours = now.getHours();
  const hoursToDegrees = timeToDegrees(hours, 12);
  hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;
}

setInterval(setDate, 1000);

function timeToDegrees(timeUnit, timeTotal) {
  return (timeUnit / timeTotal) * 360 + 90;
}
