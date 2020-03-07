import { styleBody, outputTitle, mainContact } from './dom';
import users, { getPremUsers } from './data';

console.log('index.js file');

outputTitle('hello, world from index.js');
styleBody();

console.log(mainContact);

console.log(users);
console.log(getPremUsers(users));
