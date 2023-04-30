//clock

const clock = document.querySelector(".clock");

function timeSet() {
  const currentDate = new Date();
  const nowHour = String(currentDate.getHours()).padStart(2, "0");
  const nowMin = String(currentDate.getMinutes()).padStart(2, "0");
  clock.innerText = `${nowHour}:${nowMin}`;
}

timeSet();

setInterval(timeSet, 1000);
