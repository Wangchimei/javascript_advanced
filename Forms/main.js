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

document.addEventListener('keydown', e => {
  console.log(e.code);
});

const content = document.querySelector('#username');
content.addEventListener('select', e => {
  alert('x');
  const selection = e.target.value.substring(
    e.target.selectionStart,
    e.target.selectionEnd,
  );
  console.log(`You selected: ${selection}`);
});

let scale = 1;
const box = document.querySelector('div');
box.addEventListener('wheel', e => {
  e.preventDefault();
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(0.125, scale), 4); // Restrict scale
  box.style.transform = `scale(${scale})`;
});
