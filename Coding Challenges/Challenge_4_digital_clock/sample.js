const clock = document.querySelector('.clock');

const tick = () => {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  // console.log(h, m, s);

  // format
  const hour = twoDigitFormat(h);
  const minutes = twoDigitFormat(m);
  const seconds = twoDigitFormat(s);

  function twoDigitFormat(time) {
    return ('0' + time).slice(-2);
  }

  const html = `
    <span>${hour}</span>
    <span>${minutes}</span>
    <span>${seconds}</span>
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
