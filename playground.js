// //! practise arrow functions

// // const greet = function(){
// //   return 'hello, world';
// // }

// const greet = () => 'hello, world';

// // const bill = function(products, tax){
// //   let total = 0;
// //   for(let i = 0; i < products.length; i++){
// //     total += products[i] + products[i] * tax;
// //   }
// //   return total;
// // }

// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// console.log(greet());
// console.log(bill([10, 15, 30], 0.2));

// //! callback function

// let people = ['Luigi', 'Butter', 'Bimo', 'Chopper', 'Winnie'];

// // v1 - regular function
// people.forEach(function(person, index) {
//   console.log(`${index + 1} - ${person}`);
// });

// // v2 - arrow function
// people.forEach((person, index) => {
//   console.log(`${index + 1} - ${person}`);
// });

// // v3 - using callback function
// const logPeople = (person, index) => {
//   console.log(`${index + 1} - ${person}`);
// };

// people.forEach(logPeople);

// //! forEach - outputing on html
// const ul = document.querySelector('.people');
// let people = ['Luigi', 'Butter', 'Bimo', 'Chopper', 'Winnie'];
// let html = ``;
// people.forEach(person => {
//   html += `<li style="color:skyblue">${person}</li>`;
//   ul.innerHTML = html;
// });

//! object literals
// let user = {
//   name: 'luigi',
//   age: 30,
//   email: 'luigi@nintendo.jp',
//   blogs: ['The Haunted Mansion', 'Friendship with Boos'],
//   phrase: function() {
//     console.log('ma..ma..ma..mario..');
//   },
//   logBlogs: function() {
//     //console.log(this.blogs);
//     this.blogs.forEach(blog => console.log(blog));
//   },
// };

// user.phrase();
// user.logBlogs();

let user = {
  blogs: [
    { title: 'The Haunted Mansion', likes: 30 },
    { title: 'Friendship with Boos', likes: 30 },
  ],
  logBlog() {
    this.blogs.forEach(blog => console.log(blog.title, blog.likes));
  },
};

user.logBlogs();
