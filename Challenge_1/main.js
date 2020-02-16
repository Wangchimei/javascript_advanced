const contents = document.querySelectorAll('p');
contents.forEach(content => {
  if (content.innerHTML.includes('error')) {
    content.classList.add('error');
  } else if (content.innerHTML.includes('success')) {
    content.classList.add('success');
  }
});

const title = document.querySelector('.title');
title.classList.toggle('test');
