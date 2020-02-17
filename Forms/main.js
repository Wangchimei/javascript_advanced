const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
  //prevent default
  e.preventDefault();
  // console.log(username.value);

  //look at 'id' or 'name' on the input
  console.log(form.username.value);
});

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

window.addEventListener('resize', () => {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
});

window.addEventListener('scroll', e => {
  console.log(window.scrollY);
});
