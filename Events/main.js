// const btn = document.querySelector('button');
// btn.addEventListener('click', e => {
//   // console.log(e.target);
//   e.target.style.backgroundColor = '#bef';
// });

const items = document.querySelectorAll('li');
items.forEach(item => {
  item.addEventListener('click', e => {
    // console.log(e.target);
    // console.log(item);
    // e.target.style.textDecoration = 'line-through';
    e.target.remove();
  });
});

const btn = document.querySelector('button');
let ul = document.querySelector('ul');
btn.addEventListener('click', () => {
  // ul.innerHTML += '<li>something new</li>';
  const li = document.createElement('li');
  li.textContent = 'something new';
  // ul.append(li);
  ul.prepend(li);
});
