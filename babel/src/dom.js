console.log('dom.js file');

const body = document.querySelector('body');

const styleBody = () => {
  body.style.background = 'lightblue';
};

const outputTitle = text => {
  const title = document.createElement('h1');
  title.textContent = text;
  body.appendChild(title);
};

const mainContact = {
  name: 'Bmo',
  location: 'Japan',
};

export { styleBody, outputTitle, mainContact };
