const today = document.querySelector('.date');
const clock = document.querySelector('.clock');

function getTime() {
  const date = new Date();
  const Y = date.getFullYear();
  const M = String(date.getMonth() + 1).padStart(2,'0');
  const D = String(date.getDate()).padStart(2,'0');
  const h = String(date.getHours()).padStart(2,'0');
  const m = String(date.getMinutes()).padStart(2,'0');
  const s = String(date.getSeconds()).padStart(2,'0');
  today.innerHTML = `${Y} . ${M} . ${D}`
  clock.innerHTML = `${h} : ${m} : ${s}`
}

getTime();
setInterval(getTime, 1000);

