const daysValue = document.getElementById("days");
const hoursValue = document.getElementById("hours");
const minutesValue = document.getElementById("minutes");
const secondsValue = document.getElementById("seconds");

const newYears = "1 Jan 2022";

function countDown() {
  const newYearDate = new Date(newYears);
  const currentYear = new Date();

  const totalseconds = (newYearDate - currentYear) / 1000;

  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const minutes = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds) % 60;

  daysValue.innerHTML = days;
  hoursValue.innerHTML = formatTime(hours);
  minutesValue.innerHTML = formatTime(minutes);
  secondsValue.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
// initial call
countDown();
setInterval(countDown, 1000);
