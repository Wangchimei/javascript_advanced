// const btn = document.querySelector('button');
// btn.addEventListener('click', e => {
//   // console.log(e.target);
//   e.target.style.backgroundColor = '#bef';
// });

//! remove li after clicked
const items = document.querySelectorAll('li');
items.forEach(item => {
  item.addEventListener('click', e => {
    // console.log(e.target);
    // console.log(item);
    // e.target.style.textDecoration = 'line-through';
    e.stopPropagation();
    e.target.remove();
  });
});

//! add new item after clicked
const btn = document.querySelector('button');
let ul = document.querySelector('ul');
btn.addEventListener('click', () => {
  // ul.innerHTML += '<li>something new</li>';
  const li = document.createElement('li');
  li.textContent = 'something new';
  // ul.append(li);
  ul.prepend(li);
});

//! testing event bubbling
// ul.addEventListener('click', e => {
//   alert('event bubbling');
// });

//! event delegation - newly added li will also work
ul.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

//? DIFFERENT HTML
// copy event
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
  console.log('OI! my content is copyrighted!!');
});

//mousemove
const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
  // console.log(e);
  // console.log(e.offsetX, e.offsetY);
  box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
});

// scroll down
document.addEventListener('wheel', e => {
  console.log(e.pageX, e.pageY);
});
