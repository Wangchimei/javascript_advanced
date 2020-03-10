const correctAnswer = ['A', 'B', 'B', 'B', 'B'];
const form = document.querySelector('form');
const result = document.querySelector('.result');
let output = result.querySelector('span');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswer = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  //check answer
  userAnswer.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 20;
    }
  });

  //auto scroll up
  scrollTo(0, 0);

  result.classList.remove('d-none');

  //output score
  // output.textContent = `${score}%`;
  let currentOutput = 0;
  const timer = setInterval(() => {
    output.textContent = `${currentOutput}%`;
    if (currentOutput === score) {
      clearInterval(timer);
    } else {
      currentOutput++;
    }
  }, 10);

  //? fire function once
  // setTimeout(() => {
  //   alert('3s passed');
  // }, 3000);

  //? fire every specific time
  // setInterval(() => {
  //   alert('evert 3s');
  // }, 3000);

  //? how to stop setInterval
  //? assign the function to a variable & adding counter
  // let i = 0;
  // const timer = setInterval(() => {
  //   if (i === 5) {
  //     clearInterval(timer);
  //   }
  //   currentOutput++;
  // }, 10);
});
