// const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'Test';

const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//   console.log(p.innerText);
//   p.innerText = 'new text!';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = '<h2>this is a new h2</h2>';

// content.innerHTML += '<h2>this is an h2 added to the content</h2>';

const people = ['Chopper', 'Luigi', 'Bimo'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
});

//! change attributes
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.removeAttribute('href');
link.innerText = 'Yahoo';

const message = document.querySelector('p');
console.log(message.getAttribute('class'));
message.setAttribute('class', 'success');
message.setAttribute('style', 'color: green');
// message.setAttribute('style', 'margin: 15px');
// message.style.color = 'green';

const title = document.querySelector('h1');
title.style.margin = '15px';
title.style.color = '#bef';
title.style.fontSize = '1rem';
// title.setAttribute('style', 'background: #fafafa');

const message = document.querySelector('p');
message.classList.add('error');
message.classList.remove('error');
