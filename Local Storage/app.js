// store data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', '50');

// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

// updating data
localStorage.setItem('name', 'luigi');
localStorage.age = '40';

// deleting data from local storage
localStorage.removeItem('name');
localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);

// storing array in local storage (needs to be strings)

const books = [
  {
    title: 'Another Adventure Day',
    author: 'Bmo',
    year: 2000,
  },
  {
    title: 'My days as a pet',
    author: 'Chopper',
    year: 2020,
  },
  {
    title: 'Honey Pot, huh',
    author: 'Winnie',
    year: 2006,
  },
];

// console.log(JSON.stringify(books));
localStorage.setItem('books', JSON.stringify(books));

const storedData = localStorage.getItem('books');
// console.log(stored);

console.log(JSON.parse(storedData));
