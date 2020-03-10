const form = document.querySelector('.signup-form');
const input = document.querySelector('input');
const feedback = document.querySelector('.feedback');
const pattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
  //prevent default
  e.preventDefault();

  //look at 'id' or 'name' on the input
  console.log(form.username.value);

  //validate
  const username = form.username.value;

  // if (pattern.test(username)) {
  //   feedback.textContent = 'PASSED';
  // } else {
  //   feedback.textContent = '6-12 letters only';
  // }
});

// live feedback
form.username.addEventListener('keyup', e => {
  // same value
  console.log(e.target.value, form.username.value);

  if (pattern.test(e.target.value)) {
    input.className = 'valid';
  } else {
    input.className = 'invalid';
  }
});

// window.addEventListener('scroll', e => {
//   console.log(window.scrollY);
// });

// document.addEventListener('keydown', e => {
//   console.log(e.code);
// });

// const content = document.querySelector('#username');
// content.addEventListener('select', e => {
//   alert('x');
//   const selection = e.target.value.substring(
//     e.target.selectionStart,
//     e.target.selectionEnd,
//   );
//   console.log(`You selected: ${selection}`);
// });

// let scale = 1;
// const box = document.querySelector('div');
// box.addEventListener('wheel', e => {
//   e.preventDefault();
//   scale += event.deltaY * -0.01;
//   scale = Math.min(Math.max(0.125, scale), 4); // Restrict scale
//   box.style.transform = `scale(${scale})`;
// });

//! testing RegEx
// const username = 'kimmy';
// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);
// console.log(result);   //true/false

// let result2 = username.search(pattern);
// console.log(result2);   // -1 if no match, if matched result will be the matched position
