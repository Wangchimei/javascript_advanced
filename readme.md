# JavaScript

## Table of Content

- [Data Types](https://github.com/Wangchimei/javascript_advanced#data-types)
  ( _[See Primitive Types vs Reference Types](https://github.com/Wangchimei/javascript_advanced#primitive-types-vs-reference-types)_ )

  - [String](https://github.com/Wangchimei/javascript_advanced#string)
  - [Number](https://github.com/Wangchimei/javascript_advanced#number)
  - [Null](https://github.com/Wangchimei/javascript_advanced#null-vs-undefined)
  - [Undefined](https://github.com/Wangchimei/javascript_advanced#null-vs-undefined)
  - [Boolean](https://github.com/Wangchimei/javascript_advanced#boolean)
  - [Object](https://github.com/Wangchimei/javascript_advanced#array)
    - [Array](https://github.com/Wangchimei/javascript_advanced#array)
      - [Methods](https://github.com/Wangchimei/javascript_advanced#methods-1)
      - [Methods with Callback Function](https://github.com/Wangchimei/javascript_advanced#methods-with-callback-function)
    - [Object literals](https://github.com/Wangchimei/javascript_advanced#object-literals)
      - [this keyword](https://github.com/Wangchimei/javascript_advanced#this-keyword)
    - [Math](https://github.com/Wangchimei/javascript_advanced#math)
    - [Date](https://github.com/Wangchimei/javascript_advanced#date)

- [Loops](https://github.com/Wangchimei/javascript_advanced#loops)

  - [For loop](https://github.com/Wangchimei/javascript_advanced#for-loop)
  - [While Loop](https://github.com/Wangchimei/javascript_advanced#while-loop)
  - [Do While Loop](https://github.com/Wangchimei/javascript_advanced#do-while-loop)

- [Conditionals](https://github.com/Wangchimei/javascript_advanced#conditionals)

  - [If / Else if / Else Statement](https://github.com/Wangchimei/javascript_advanced#if--else-if--else-statement)
  - [Switch Statement](https://github.com/Wangchimei/javascript_advanced#switch-statement)
  - [Break and Continue](https://github.com/Wangchimei/javascript_advanced#break-and-continue)

- [Functions](https://github.com/Wangchimei/javascript_advanced#functions)

  - [Block Scope](https://github.com/Wangchimei/javascript_advanced#block-scope)
  - [Regular Functions](https://github.com/Wangchimei/javascript_advanced#regular-functions)
  - [Arrow Functions](https://github.com/Wangchimei/javascript_advanced#arrow-functions)
  - [Callback Functions](https://github.com/Wangchimei/javascript_advanced#callback-functions)
  - [Functions vs Methods](https://github.com/Wangchimei/javascript_advanced#functions-vs-methods)

- [DOM](https://github.com/Wangchimei/javascript_advanced#document-object-model-dom)

  - [Query the DOM](https://github.com/Wangchimei/javascript_advanced#query-the-dom)
  - [DOM Manipulation](https://github.com/Wangchimei/javascript_advanced#dom-manipulation)

- [Events](https://github.com/Wangchimei/javascript_advanced#events)

  - [Event Bubbling](https://github.com/Wangchimei/javascript_advanced#event-bubbling)
  - [Event Delegation](https://github.com/Wangchimei/javascript_advanced#event-delegation)
  - [Event Reference](https://github.com/Wangchimei/javascript_advanced#event-reference)
    - [Form Event](https://github.com/Wangchimei/javascript_advanced#form-events)
    - [View Events](https://github.com/Wangchimei/javascript_advanced#view-events)
    - [Keyboard Events](https://github.com/Wangchimei/javascript_advanced#keyboard-events)
    - [Clipboard Events](https://github.com/Wangchimei/javascript_advanced#clipboard-events)
    - [Mouse Events](https://github.com/Wangchimei/javascript_advanced#mouse-events)
    - [Drag & Drop events](https://github.com/Wangchimei/javascript_advanced#drag--drop-events)

- [Regular Expression](https://github.com/Wangchimei/javascript_advanced#regular-expression-regex)

  - [Characters Sets](https://github.com/Wangchimei/javascript_advanced#characters-sets)
  - [Quantifiers](https://github.com/Wangchimei/javascript_advanced#quantifiers)
  - [Group Parenthesis](https://github.com/Wangchimei/javascript_advanced#group-parenthesis)
  - [Other](https://github.com/Wangchimei/javascript_advanced#other)
  - [Flags](https://github.com/Wangchimei/javascript_advanced#flags)
  - [Test a regular expression](https://github.com/Wangchimei/javascript_advanced#test-a-regular-expression)

- [Asynchronous JavaScript](https://github.com/Wangchimei/javascript_advanced#asynchronous-javascript)
  - [XMLHttpRequest](https://github.com/Wangchimei/javascript_advanced#promise)
  - [Promise](https://github.com/Wangchimei/javascript_advanced#promise)
  - [Fetch API](https://github.com/Wangchimei/javascript_advanced#fetch-api)
  - [Async Function & Await](https://github.com/Wangchimei/javascript_advanced#async--await)
  - [Throw & Catch Error](https://github.com/Wangchimei/javascript_advanced#throwing--catching-error)

## Data Types [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

| Types                                                                            | Brief definition                                      | Sections                                                                                                                                                                                                                                                                               |
| :------------------------------------------------------------------------------- | :---------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [String](https://github.com/Wangchimei/javascript_advanced#string)               | A constructor for strings or a sequence of characters | [Mathods](https://github.com/Wangchimei/javascript_advanced#methods), [Template Strings](https://github.com/Wangchimei/javascript_advanced#template-strings-template-literals)                                                                                                         |
| [Number](https://github.com/Wangchimei/javascript_advanced#number)               | Numerical values (1, 2, 100, 3.14)                    |                                                                                                                                                                                                                                                                                        |
| [Null](https://github.com/Wangchimei/javascript_advanced#null-vs-undefined)      | Explicitly set a variable with no value               |                                                                                                                                                                                                                                                                                        |
| [Undefined](https://github.com/Wangchimei/javascript_advanced#null-vs-undefined) | For variables that have not yet been defined          |                                                                                                                                                                                                                                                                                        |
| [Boolean](https://github.com/Wangchimei/javascript_advanced#boolean)             | true / false                                          |                                                                                                                                                                                                                                                                                        |
| [Object](https://github.com/Wangchimei/javascript_advanced#array)                | Complex data structures                               | [Array](https://github.com/Wangchimei/javascript_advanced#array), [Object literals](https://github.com/Wangchimei/javascript_advanced#object-literals), [Math](https://github.com/Wangchimei/javascript_advanced#math), [Date](https://github.com/Wangchimei/javascript_advanced#date) |
| Symbol                                                                           | Used with objects                                     |                                                                                                                                                                                                                                                                                        |

## Primitive Types vs Reference Types [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

| Primitive Types | Reference Type       |
| :-------------- | :------------------- |
| strings         | All types of objects |
| numbers         | arrays               |
| null            | object literals      |
| undefined       | functions            |
| booleans        | dates                |
| symbols         | all other objects    |

Differences are how they are stored and used in memory.

|              | Primitive Types | Reference Type      |
| :----------- | :-------------- | :------------------ |
| Store        | Stack           | Heap                |
| Access Speed | Very fast       | Slower (relatively) |
| Memory Size  | Limited         | No limit            |

When storing a primitive type in a variable, it adds the value to the **stack**, and locks the variable name to it as an accessor.  
When storing a reference type in a variable, it adds the object to the **heap**, and adds a **pointer** to the object in the stack. Therefore, when accessing the variable, the pointer will point to the object.

### Example - Primitive Types

When creating a copy of primitive types, the value will be copied and stored separately on the stack.

```
const scoreOne = 100;
const scoreTwo = scoreOne;
// create a copy of the number and store the number separately on the stack
console.log(scoreOne, scoreTwo);  // 100 100

const scoreOne = 50;
// only changed scoreOne, scoreTwo stays the same
console.log(scoreOne, scoreTwo);  // 50 100
```

### Example - Reference Types

When creating a copy of reference types, it does not create a new object on the heap.  
Instead, it copies the pointer which points to the same object on the heap.

```
const userOne = {name: 'John', score: 100};
const userTwo = userOne;
// create a copy of the pointer which is associated with the same object
console.log(userOne.score, userTwo.score);  // 100 100

userOne.score = 50;
// the change reflects to the object
console.log(userOne.score, userTwo.score);  // 50 50
```

## String [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

A sequence of characters, e.g. `let email = "chimei@example.com"`

### Methods

- `indexOf()` - returns the index of the first occurrence of the specified value, searching forwards and returning `-1` if the value is not found.

  ```
  email.indexOf('e');  // 4
  ```

- `lastIndexOf()` - returns the index of the last occurrence of the specified value, searching backwards and returning `-1` if the value is not found.

  ```
  email.indexOf('c');  // 13
  ```

- `split()` - turns a String into an array of strings, by separating the string at each instance of a specified separator string

  ```
  email.split("@")[0];  // "mei"
  ```

- `slice()` - extracts a section of a string and returns it as a new string, without modifying the original string

  ```
  email.slice(3, 6);  // "chimei"
  ```

- `substring()` - returns the part of the string between the start and end indexes, or to the end of the string

  ```
  email.substring(3, 6);  // "mei"
  ```

  #### Differences between substring() and slice()

  The `substring()` and `slice()` are almost identical, but there are a couple of subtle differences between the two, especially **in the way negative arguments are dealt with**.

  The `substring()` method swaps its two arguments if `indexStart` is **greater than** `indexEnd` ( a string is still returned).  
  The `slice()` method returns an empty string if this is the case.

  ```
    let text = 'Mario Kart'
    text.substring(5, 2); // "rio" (from index 2 to index 5-1)
    text.slice(5, 2); // ""

    //-- treat negative as 0 --
    text.substring(-5, 2); // "Ma" (from index 0 until index 2-1)
    text.substring(-5, -2); // ""

    //-- arguments cannot mix positive and negative--
    text.slice(-5, 2); // ""
    text.slice(-5, -2); // " Ka" (from index -5 until index -2-1)
  ```

- `substr()` - returns a portion of the string, starting at the specified index and extending for a given number of characters afterward

  ```
  email.substr(3, 6);  // "mei@ex"
  ```

- `replace()` - returns a new string with some or all matches of a pattern replaced by a replacement

  ```
  email.replace('i', 'o');  // "chomei@example.com"
  ```

- `includes()` - determines whether one string may be found within another string, returning `true` or `false`

  ```
  email.includes('i');  // true
  ```

## Template strings (Template literals) [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

Template literals are string literals allowing embedded expressions.  
You can use multi-line strings and string interpolation features with them.

### First, defining variables

```
const title = 'Harry Potter and the Philosopher's Stone';
const author = 'J.K. Rowling';
let likes = 300;
```

### Using concatenation way

```
let result = 'The book called ' + title + ' by ' + author + ' has ' + likes + ' likes';
```

### Using template strings way

```
let result = `The book called ${title} by ${author} has ${likes} likes`;
```

Template strings are often used for outputting contents into html.

```
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This book has ${likes} likes</span>
`;
```

## Number [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

Order of operation:

B - Brackets `()`  
I - Indices `**`  
D - Division `/`  
M - Multiplication `*`  
A - Addition `+`  
S - Subtraction `-`

## Null vs Undefined [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

- `Undefined` - For variables that have not yet been defined (automatically assigned)

  ```
  let age;

  console.log(age, age + 3, `the age is ${age}`);
  // undefined NaN "the age is undefined"
  ```

- `Null` - Explicitly set a variable with no value

  ```
  let age = null;

  console.log(age, age + 3, `the age is ${age}`);
  // null 3 "the age is null"
  ```

## Boolean [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

Using comparison operators(`==`, `!=`, `>`, `>=`, `<`, `<=`, `===`) will return Boolean.

```
let name = 'Luigi';

console.log(name == 'luigi'); // false
console.log(name > 'luigi'); // false (lowercase is greater than uppercase)
console.log(name > 'Mario'); // false (M comes after L)
```

### Difference between `===` and `==`

`===` / `!==` are also known as **strict comparison**,the value's types are considered in the comparison.  
`==` / `!=` are also known as **loose comparison**, which means different types can still be equal.

```
let age = 25;

// console.log(age == 25); // true
// console.log(age == '25'); // true

// console.log(age === 25); //true
// console.log(age === '25'); //false
```

### Type Conversion

Using `typeof` operator to check the type of something (variables), e.g. `typeof name`

```
Number('hello'); // NaN
String(50); // "50"

Boolean(0); // false
Boolean(-100); // ture
Boolean('0'); // ture
Boolean(''); // false
```

## Array [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

```
let likes = ['Bmo', 'Chopper', 'Winnie'];
likes[1];   //"Chopper"

likes[1] = "Psyduck";
likes[1];   //"Psyduck"
```

### Methods [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

- `includes()` - determines whether an array contains a specified element, returning `true` or `false`

  ```
  let likes = ['Bmo', 'Chopper', 'Winnie'];
  likes.includes('bmo'); // false
  ```

- `join()` - creates and returns the array as a string, separated by commas or a specified separator string

  ```
  let likes = ['Bmo', 'Chopper', 'Winnie'];
  likes.join(', ');  // "Bmo, Chopper, Winnie"
  ```

- `indexOf()` - returns the first index at which a given element can be found in the array, or `-1` if it is not present

  ```
  let likes = ['Bmo', 'Chopper', 'Winnie'];
  likes.indexOf('Bmo');  // 0
  ```

- `concat()` - merges two or more arrays. This method does not change the existing arrays, but instead returns a new array

  ```
  let likes = ['Bmo', 'Chopper', 'Winnie'];
  likes.concat(['Luigi', 'Butter']);
     // ["Bmo", "Chopper", "Winnie", "Luigi", "Butter"]
  ```

- `unshift()` - Destructive method. It adds one or more elements to the **beginning** of an array and returns the new length of the array.

  ```
  let likes = ['Bmo', 'Chopper', 'Winnie'];
  likes.unshift('Luigi', "Butter"); // 5
  console.log(likes); // ["Luigi","Butter", "Bmo", "Chopper", "Winnie"]
  ```

- `push()` - Destructive method. It adds one or more elements to the **end** of an array and returns the new length of the array.

  ```
  let likes = ['Bmo', 'Chopper', 'Winnie'];
  likes.push('Luigi'); // 4
  console.log(likes); // ["Bmo", "Chopper", "Winnie", "Luigi"]
  ```

- `shift()` - Destructive method. It removes the **first** element from an array and returns that removed element.

  ```
  let likes = ['Bmo', 'Chopper', 'Winnie'];
  likes.shift(); // "Bmo"
  console.log(likes); // ["Chopper", "Winnie"]
  ```

- `pop()` - Destructive method. It removes the **last** element from an array and returns that removed element.

  ```
  let likes = ['Bmo', 'Chopper', 'Winnie'];
  likes.pop(); // "Winnie"
  console.log(likes); // ["Bmo", "Chopper"]
  ```

- `slice()` - returns the selected elements in an array, as a new array object. Elements are selected from start index to end index (end index is not included).

  ```
  let likes = ["Bmo", "Chopper", "Winnie", "Luigi", "Butter"];
  likes.slice(2, 4); // ["Winnie", "Luigi"]   // select elements on index 2 and index 3
  ```

- `splice()` - changes the original array. It adds/removes items to/from an array, and returns the removed item(s).

  ```
  let likes = ["Bmo", "Chopper", "Winnie"];
  likes.splice(1, 0, 'Luigi') // [] (nothing's taken out)
  console.log(likes); // ["Bmo", "Luigi", "Chopper", "Winnie"]

  let likes = ["Bmo", "Chopper", "Winnie", "Luigi", "Butter"];
  likes.splice(3, 2, 'Toad'); // ["Luigi", "Butter"]
  console.log(likes); //  ["Bmo", "Chopper", "Winnie", "Toad"]
  ```

  `likes.splice(1, 0, "Luigi")` = remove 0 element from index 1 and insert "Luigi"  
  `likes.splice(3, 1, "Butter")` = remove 2 element from index 3 and insert "Toad"

- `flat()` - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth

  ```
  var arr1 = [1, 2, [3, 4]];
  arr1.flat();    // [1, 2, 3, 4]

  var arr2 = [1, 2, [3, 4, [5, 6]]];
  arr2.flat();    // [1, 2, 3, 4, [5, 6]]

  var arr3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
  arr3.flat(Infinity);    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // Flattening and array holes
  var arr4 = [1, 2, , 4, 5];
  arr4.flat(); // [1, 2, 4, 5]
  ```

### Methods with Callback Function [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

- `forEach()` - executes a provided function once for each array element

  **syntax:**

  ```
  array.forEach(function(currentValue, index, array), thisValue)
  ```

  The callback function takes 3 parameters:

  1. currentValue - The value of the current element.
  2. index - (optional) The array index of the current element.
  3. array - (optional) The array object the current element belongs to.

  `thisValue` - (optional) A value to be passed to the function to be used as its "this" value.

  #### Converting a for loop to forEach:

  ```
  const people = ["Chopper", "Luigi", "Bmo"];
  const copy = []

  // for loop
  for (let i = 0; i < people.length; i++) {
    copy.push(people[i])
  }

  // forEach loop
  people.forEach(item => copy.push(item))
  ```

- `filter()` - creates a new array with elements that pass the conditions in the function

  **syntax:**

  ```
  array.filter(function(currentValue, index, array), thisValue)
  ```

  The callback function takes 3 parameters:

  1. currentValue - The current element being processed in the array.
  2. index - (optional) The index currentValue in the array.
  3. array - (optional) The array object the current element belongs to.

  `thisValue` - (optional) A value to be passed to the function to be used as its "this" value.

  #### Filtering out non-premium users:

  ```
  const users = [
    {name: 'Bmo', premium: true},
    {name: 'Chopper', premium: false},
    {name: 'Winnie', premium: false},
    {name: 'Luigi', premium: true}
  ];
  const premiumUsers = users.filter(user => user.premium);   //only "true" will be kept
  console.log(premiumUsers);
  ```

- `map()` - creates a new array with the results of calling a function for every array element

  **syntax:**

  ```
  array.map(function(currentValue, index, array), thisValue)
  ```

  The callback function takes 3 parameters:

  1. currentValue - The current element being processed in the array.
  2. index - (optional) The index currentValue in the array.
  3. array - (optional) The array object the current element belongs to.

  `thisValue` - (optional) A value to be passed to the function to be used as its "this" value.

  #### Special prices only on those are over 30

  ```
  const products = [
    {name: 'product A', price: 20},
    {name: 'product B', price: 40},
    {name: 'product C', price: 30},
    {name: 'product D', price: 10},
    {name: 'product E', price: 50}
  ];

  const saleProducts = products.map(product => {
    if(product.price > 30){
      return {name: product.name, price: product.price / 2};    //returning a new object
    } else {
      return product;
    }
  });

  console.log(products, saleProducts);
  ```

  **Note**: the following will result in destructing the original array, because `product` that is iterating is an element from the original array.

  ```
  const saleProducts = products.map(product => {
    if(product.price > 30){
      product.price = product.price /2;
      return product;
    } else {
      return product;
    }
  });
  ```

- `reduce()` - executes a callback function on each element of the array, resulting in a single value

  **syntax:**

  ```
  array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)
  ```

  The callback function takes 4 parameters:

  1. accumulator - The initialValue, or the previously returned value of the function.
  2. currentValue - The value of the current element.
  3. currentIndex - (optional) The array index of the current element.
  4. array - (optional) The array object the current element belongs to.

  `initialValue` - (optional) A value to be passed to the function as the initial value.

  #### Returning the sum of an array

  ```
  let number = [1, 2, 3, 4];
  number.reduce((acc, cur) => acc + cur); // 10
  number.reduce((acc, cur) => acc + cur, 5); // 15
  ```

  #### Returning how many score are over 60

  ```
  const scores = [10, 20, 60, 40, 70, 90, 30, 80];
  const result = scores.reduce((acc, cur) => {
    if(cur > 50){
      acc++;
    }
    return acc;
  }, 0);

  console.log(result);    // 4
  ```

  #### Returning the sum of Bmo's score

  ```
  const students = [
    {name: 'Bmo', score: 50},
    {name: 'Chopper', score: 30},
    {name: 'Bmo', score: 70},
    {name: 'Winnie', score: 60},
    {name: 'Luigi', score: 60}
  ];

  const bmoTotal = students.reduce((acc, cur) => {
    if(cur.name === 'Bmo'){
      acc += cur.score;
    }
    return acc;
  }, 0);

  console.log(bmoTotal);   // 120
  ```

  #### Returning an array

  ```
  let flattened = [[0, 1], [2, 3], [4, 5]];
  flattened.reduce((acc, cur) => acc.concat(cur)); // [0, 1, 2, 3, 4, 5]
  ```

  #### Counting instances of values in an object

  ```
  let list = ['Alice', 'Bob', 'John', 'Bruce', 'Alice'];
  let nameCount = list.reduce((nameArr, name) => {
    if (name in nameArr) {
      nameArr[name]++;
    } else {
      nameArr[name] = 1;
    }
    return nameArr;
  }, {});

  console.log(nameCount);  // {Alice: 2, Bob: 1, John: 1, Bruce: 1}
  ```

- `find()` - returns the value of the first element in an array that pass the condition

  **syntax:**

  ```
  array.find(function(currentValue, index, array),thisValue)
  ```

  The callback function takes 3 parameters:

  1. currentValue - The current element being processed in the array.
  2. index - (optional) The index currentValue in the array.
  3. array - (optional) The array object the current element belongs to.

  `thisValue` - (optional) A value to be passed to the function to be used as its "this" value.

  ```
  const scores = [10, 5, 0, 40, 60, 10, 20, 70];

  const firstHighScore = scores.find(score => score > 50);
  console.log(firstHighScore);
  ```

- `sort()` - changes the original array. This sorts the items of an array in alphabetical and ascending order by default. However, it will produce an incorrect result when sorting numbers.

  **syntax:**

  ```
  array.sort(compareFunction)
  ```

  `compareFunction` - (optional) A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments.

  ```
  const name = ["Chopper", "Luigi", "Bmo"];
  name.sort(); //  ["Bmo", "Chopper", "Luigi"]
  ```

  #### Sorting numbers

  ```
  const scores = [10, 50, 20, 5, 35, 70, 45];

  scores.sort((a, b) => a - b)   // [5, 10, 20, 35, 45, 50, 70]
  scores.sort((a, b) => b - a)   // [70, 50, 45, 35, 20, 10, 5]
  ```

  #### Sorting objects

  ```
  const students = [
    {name: 'Bmo', score: 20},
    {name: 'Chopper', score: 10},
    {name: 'Bmo', score: 50},
    {name: 'Winnie', score: 30},
    {name: 'Luigi', score: 70}
  ];

  students.sort((a,b) => b.score - a.score);  // shorter version(descending order)
  console.log(players);
  ```

  `students.sort((a,b) => b.score - a.score);` is the shorter version of below.

  ```
  players.sort((a,b) => {
     if(a.score > b.score){
       return -1;  // a(bigger) should come first -> return negative
     } else if (b.score > a.score){
       return 1;   // b(bigger) should come first -> return positive
     } else {
       return 0;   // the same, no order is needed -> return zero
     }
  });
  ```

## Object literals [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

### Create an object literal with `key: value` pairs.

```
let user = {
  name: 'luigi',
  age: 30,
  email: 'luigi@nintendo.jp',
  blogs: ['The Haunted Mansion', 'Friendship with Boos']
}
```

### Access and update the properties - _dot notation_ or _square bracket notation_

1. dot notation `.` (used this most of the time)

```
console.log(user.name):
user.age = 35;
```

2. square bracket notation `['']` (useful when the property is a variable)

```
console.log(user['name']);
user['age'] = 35;

const works = 'blogs'
console.log(user[works]);
```

### Add methods

```
let user = {
  name: 'luigi',
  age: 30,
  email: 'luigi@nintendo.jp',
  blogs: ['The Haunted Mansion', 'Friendship with Boos'],
  phrase() {
    console.log('ma..ma..ma..mario..');
  },
  logBlogs: function() {
    //console.log(this.blogs);
    this.blogs.forEach(blog => console.log(blog));
  },
};

user.phrase();
user.logBlogs();
```

### Objects in Arrays

```
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
```

## `this` keyword [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

`this` keyword is an context object, and it represents the context in which the current code is executing.  
Depending on where and how `this` is used, the value is going to be different.  
When calling a method, JavaScript will set the value of `this` keyword to be the object that the method is used on.

**Caution:**  
When creating a method using arrow functions, `this` will **NOT** be the object that the method is used on.  
The value of `this` will be the point in the code the arrow function is invoked.

```
let user = {
  name: 'luigi',
  age: 30,
  email: 'luigi@nintendo.jp',

  //regular functions
  logName: function() {
    console.log(this);
  },

  // shorthand - work as a regular function
  logAge() {
    console.log(this);
  },

  // when using arrow functions
  logEmail() {
    console.log(this);
  },
};

console.log(this);   // Window {parent: Window, opener: null, top: Window, length: 4, frames: Window, …}

// regular functions - this keyword value will be the user object
user.logName();      // {name: "luigi", age: 30, email: "luigi@nintendo.jp", logName: ƒ}

// shorthand regular functions - this keyword value will be the user object
user.logAge();       // {name: "luigi", age: 30, email: "luigi@nintendo.jp", logName: ƒ}

// arrow function - when the method is invoked, this keyword is at global window object
user.logEmail();     // Window {parent: Window, opener: null, top: Window, length: 4, frames: Window, …}
```

## Math [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

Math is a built-in object that has properties and methods for mathematical constants and functions.  
Math works with the Number type. It does **NOT** work with BigInt.

### Methods

- `round()` - returns the value of a number rounded to the nearest integer

  ```
  console.log(Math.round(7.7));  // 8
  console.log(Math.round(7.4));  // 7
  ```

- `floor()` - returns the largest integer less than or equal to a given number

  ```
  const area = 7.7;
  console.log(Math.round(area));  // 7
  ```

- `ceil()` - always rounds a number up to the next largest whole number or integer

  ```
  const area = 7.1;
  console.log(Math.round(area));  // 8
  ```

- `trunc()` - returns the integer part of a number by removing any fractional digits

  ```
  console.log(Math.round(7.7));  // 7
  console.log(Math.round(7.4));  // 7
  ```

- `random()` - returns a float random number in the range 0 to less than 1 (inclusive of 0, but not 1)

  ```
  const random = Math.random();

  console.log(random);  // 0 <= n < 1
  console.log(Math.round(random ));  // 0 or 1
  console.log(Math.round(random * 100));  // 0 ~ 100
  ```

- `abs()` - returns the absolute value of a number

  ```
  function difference(a, b) {
    return Math.abs(a - b);
  }

  console.log(difference(3, 5));   // 2
  ```

## Date [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

```
const now = new Date();

console.log(now);  //
console.log(typeof now);  //object
```

### Common methods

#### years, months, days, times

```
const now = new Date();

console.log('now.getFullYear());

// (0-based) January - December : 0 - 11
console.log('now.getMonth());

console.log('now.getDate());

//(0-based) Sunday - Saturday : 0 - 6
console.log('now.getDay());

console.log(now.getHours());

console.log(now.getMinutes());

console.log(now.getSeconds());

```

#### Date strings

```
console.log(now.toDateString());    // Mon Feb 24 2020
console.log(now.toTimeString());    // 22:02:33 GMT+0900 (Japan Standard Time)
console.log(now.toLocaleString());  // 2/24/2020, 10:02:33 PM
```

### Timestamps

A number representing the milliseconds from 1 January 1970 00:00:00 UTC to the given date.

```
console.log(now.getTime());   // 1582550446028
```

##### Using for comparison

```
const before = new Date('02/01/2019 7:30:59');
const now = new Date();
const diff = now.getTime() - before.getTime();

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
```

##### Converting timestamps to date object

```
const timestamp = 1675938474990;
console.log(new Date(timestamp));
```

### Date Format

[Date-fns](https://date-fns.org/)

```
const now = new Date();

console.log(dateFns.isToday(now));

// formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd, Do MMMM, YYYY'));

// comparing dates
const before = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));
```

## Loops

### For Loop [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

#### Syntax

```
for ([initialization]; [condition]; [final-expression]) {
  statement
}
```

`initialization` - An expression (including assignment expressions) or variable declaration evaluated once before the loop begins.

`condition` - An expression to be evaluated before each loop iteration.

`final-expression` - A statement that is executed at the end of each loop as long as the condition evaluates to true.

**NOTE:**  
Variables declared with `var` are **not** local to the loop, i.e. they are in the same scope the for loop is in.  
Variables declared with `let` are local to the statement.

```
const name = ['Bmo', 'Luigi', 'Chopper', 'Butter'];
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}
```

### While Loop [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

#### Syntax

```
while (condition) {
  statement
}
```

```
const name = ['Bmo', 'Luigi', 'Chopper', 'Butter'];
let i = 0;
while (i < name.length) {
  console.log(name[i]);
  i++;
}
```

### Do While Loop [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

The condition is evaluated after executing the statement, resulting in the specified statement executing **at least once**.

#### Syntax

```
do {
  statement
} while (condition);
```

```
let i = 5;
do {
  console.log(i);
  i++;
} while (i < 5);
```

output: 5 (run at least once)

## Conditionals

### Logical Operator

`&&` - AND  
`||` - OR  
`!` - NOT (turn value into Boolean)

```
let list = ['Milk'];
if (!!list) {
  console.log('out of milk');
}
```

`!list` - turn array into Boolean (true)  
`!!list` - the opposite of true (false)

### If / Else if / Else Statement [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.

#### Syntax

```
if (condition) {
  statement1
  } else if {
  statement2
  } else {
  statement3
}
```

### Switch Statement [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

Best practice is to be used in evaluating multi-possible values of a single variable.
Note: switch statement is using **strict equality** to check values.

#### Syntax

```
switch (expression) {
  case value1:
    //Statements executed when the result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the result of expression matches value2
    [break;]
  default:
    //Statements executed when none of the values match the value of the expression
    [break;]]
}
```

If `break` is not added, when expression matches value1, it will run all the cases that come after.

`expression` - An expression whose result is matched against each case clause.
`default` - (optional) A default clause (executed none of value matches the expression)

```
const grade = 'D';

switch(grade){
  case 'A':
    console.log('you got an A!');
    break;
  case 'B':
    console.log('you got a B!');
    break;
  case 'C':
    console.log('you got a C!');
    break;
  case 'D':
    console.log('you got a D!');
    break;
  case 'E':
    console.log('you got an E!');
    break;
  default:
    console.log('not a valid grade');
}
```

### Break and Continue [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

`break` - terminates execution of the current loop  
`continue` - terminates execution of the current iteration of the loop, and continues execution of the loop with the next iteration

```
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

  if(scores[i] === 0){
    continue;
    // skip the following statements and continue the next iteration
  }

  console.log('your score:', scores[i]);

  if(scores[i] === 100){
    console.log('congrats, you got the top score!');
    break;
    // terminate the loop
  }

}
```

output:

```
your score: 50
your score: 25
your score: 30
your score: 100
congrats, you got the top score!
```

## Functions

### Terminology

```
const _variable_ = function (_parameters_) {
  ...
}

console.log(_variable_())
```

### Block Scope [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

Variables defined with `let` are in a block scope.
However, variables defined with `var` are at global level even if it is defined in a block level.

#### Example

```
let age = 30;

if (true) {
  let age = 40;
  let name = 'Mario';
  console.log('inside 1st code block:', age, name);

  if (true) {
  age = 50;
  var mood = 'happy!';
  console.log('inside 2nd code block:', age, name, mood);
  }
}

console.log('outside code block:', age, name, mood);
```

output:

```
inside 1st code block: 40 Mario
inside 2nd code block: 50 Mario happy!
outside code block: 30 happy!
```

### Regular Functions [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

#### Function declarations

Because of JavaScript's default behavior, _Hoisting_, it moves all declarations to the top of the current scope, which means you can call a function first and declare the function after.

```
function greet() {
  console.log('Hello!");
}

greet();
```

```
greet();

function greet() {
  console.log('Hello!");
}
```

#### Function expressions (store in variables)

Variables and constants declared with `let` or `const` are not hoisted!

```
const greeting = function() {
  console.log('Good day!");
}

greeting();
```

#### Default value in functions

```
const speak = function(name = 'Luigi', time = 'night'){
  console.log(`good ${time}, ${name}!`);
};

speak('Mario', 'morning'); // good morning Mario
speak(); // good night Luigi
speak('Bowser'); good night Bowser
```

### Arrow Functions [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

#### Syntax

```
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalent to: => { return expression; }

// The parameter list for a function with no parameters should be written with a pair of parentheses.
() => { statements }

// Parentheses are optional when there's only one parameter name
(singleParam) => { statements }
singleParam => { statements }
```

#### Example

```
const calcArea = function(radius){
  return 3.14 \* radius\*\*2;
}
```

**since there is only one parameters, `function`, `()`, `return`, `{}` can all be omitted.**

```
const calcArea = radius => 3.14 \* radius\*\*2;
```

### Callback Functions [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

#### General premise:

```

const myFunction = (callbackFunction) => {
  // do something
  let value = 50;
  callbackFunction(value);
}

myFunction(value => {
  //do something
  console.log(value); //50
})

```

#### Example

```

let people = ['Luigi', 'Butter', 'Bmo', 'Chopper', 'Winnie'];

// v1 - regular function
people.forEach(function(person, index) {
  console.log(`${index + 1} - ${person}`);
});

// v2 - arrow function
people.forEach((person, index) => {
  console.log(`${index + 1} - ${person}`);
});

// v3 - using callback function
const logPeople = (person, index) => {
  console.log(`${index + 1} - ${person}`);
};

people.forEach(logPeople);

```

### Functions vs Methods [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

Methods are functions but they are functions that are defined on **an object** and associated with **the object**.  
Even though they are both functions, the way to invoke a function and a method is different.  
To invoke functions: using by calling function name and parentheses, such as `greet()`.  
To invoke methods: using `.` (dot notation) on value itself, such as `name.toUpperCase()`.

## Document Object Model (DOM)

### Query the DOM [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

**[Single Element]**

1. `document.querySelector('#name')`
2. `document.getElementById('name')`

**[Multiple Elements]**

1. `document.querySelectorAll('.error')` -> NodeList(3) [div.error, div.error, div.error]
2. `document.getElementsByClassName('error')` -> HTMLCollection(3) [div.error, div.error, div.error]
3. `document.getElementsByTagName('h2')` -> HTMLCollection(3) [h2.text-normal, h2.text-normal, h2.mb-2]

**Note:**  
`querySelectorAll('.error')` returns a `NodeList`  
`getElementsByClassName('error')` & `getElementsByTagName('h2')` returns a `HTMLCollection`  
To literate `HTMLCollection`, you need to convert to array type using `Array.from()`.

| NoteList Methods | HTMLCollection Methods |
| :--------------- | :--------------------- |
| .item()          | .item()                |
| .entries()       | .namedItem()           |
| .forEach()       |                        |
| .keys()          |                        |
| .value()         |                        |

### DOM Manipulation [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

#### Adding and Changing Page Content

HTML :

```
<div>
  <h1>Hello</h1>
  <p class="error">Error!</p>
  <a href="https://www.google.com">Google</a>

 </div>

 <div class="content">
   <p>Users:</p>
</div>
```

- `document.querySelector(element).innerText = string;`

  The innerText property sets or returns the text content of the specified node, and all its descendants.

  ```
  greeting = document.querySelector('h1');

  // replace text -> <h1>Good day!</h1>
  greeting.innerText = 'Good day!';

  // append text -> <h1>Hello Good day!</h1>
  greeting.innerText += 'Good day!';
  ```

  #### Difference between `.textContent`

  HTML:

  ```
  <p>lorem <span style="display:none;">error</span> ipsum</p>
  ```

  Using `.innerText` will get all the **visible** text inside the element.  
  Using `.textContent` will get all the text regardless it's hidden or not.

- `document.querySelector(element).innerHTML = new HTML`

  The innerHTML property sets or returns the HTML content (inner HTML) of an element.

  ```
  greeting = document.querySelector('h1');

  // replace -> <h1>Good day!</h1>
  greeting.innerHTML = 'Good day!';

  // replace - <h1> <h3>Good day!<h3> </h1> (created under h1)
  greeting.innerHTML = '<h3>Good day!<h3>';

  // append - <h1> Hello <p>Good day!</p> </h1> (created under h1)
  greeting.innerHTML += '<p>Good day!</p>';
  ```

  **Loop through data and outputting to HTML**

  ```
  const people = ["Chopper", "Luigi", "Bmo"];

  people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
  });
  ```

#### Getting and Setting Attributes

- `element.setAttribute(attribute, value);`

  The setAttribute() method adds the specified attribute to an element, and gives it the specified value.  
  If the specified attribute already exists, only the value is set/changed.

  ```
  const message = document.querySelector('p');
  // console.log(message.getAttribute('class'));
  message.setAttribute('class', 'success');  //existing attribute
  message.setAttribute('style', 'color: green');  //non-existing attribute
  ```

- `element.removeAttribute(attribute_name)`

  The removeAttribute() method removes the specified attribute from an element.

  ```
  const link = document.querySelector('a');
  link.removeAttribute('href');
  ```

#### Changing CSS Styles

- `element.style.property = "value"`
  **Note**: Using `message.setAttribute('style', 'color: green')` will overwrite all of other styles.

  ```
  const title = document.querySelector('h1');
  title.style.margin = '15px';
  title.style.color = '#bef';     // add an extra style
  title.style.fontSize = '1rem';  //cannot use hyphen, only use camel case
  title.style.margin = '';        // remove margin
  title.setAttribute('style', 'background: #fafafa');   //overwrite other styles
  ```

#### Adding and Removing Classes

- `element.classList.add(class_name)`

  ```
  const message = document.querySelector('p');
  message.classList.add('error');
  ```

- `element.classList.remove(class_name)`

  ```
  message.classList.remove('error');
  ```

- `element.classList.toggle(class_name)`

  ```
  message.classList.toggle('show');
  ```

#### Parents, Children, Siblings

HTML:

```
<body>
  <h1>The DOM</h1>
  <article>
    <span>Lorem ipsum dolor</span>
    <h2>article title</h2>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    <div>written by the net ninja</div>
  </article>
</body>
```

```
const article = document.querySelector('article');

// HTMLCollection cannot use forEach(), so use Array.from() to convert into an array
Array.from(article.children).forEach(child => {
  child.classList.add('article-children');
});


const title = document.querySelector('h2');

// parent of h2 -> article
console.log(title.parentElement);

// parent's parent of h2 -> body
console.log(title.parentElement.parentElement);

// h2's next sibling -> p
console.log(title.nextElementSibling);

// h2's previous sibling -> span
console.log(title.previousElementSibling);

// chaining possibility
console.log(title.nextElementSibling.parentElement.children);
```

## Events [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

`EventTarget.addEventListener()` sets up a function that will be called whenever the specified event is delivered to the target.

### Syntax

```
target.addEventListener(event_type, callback_function);
```

#### Example

```
// single element
const btn = document.querySelector('button');
btn.addEventListener('click', e => {
  // console.log(e.target);
  e.target.style.backgroundColor = '#bef';
});

// multiple elements
const items = document.querySelectorAll('li');
items.forEach(item => {
  item.addEventListener('click', e => {
    // console.log(e.target);
    // console.log(item);
    e.target.style.textDecoration = 'line-through';
  });
});
```

### Use eventListener to create or remove elements

#### Remove

Using `target.remove()` to remove from the DOM

```
const items = document.querySelectorAll('li');
items.forEach(item => {
  item.addEventListener('click', e => {
    e.target.remove();
  });
});
```

#### Create

##### Using `textContent` to append

```
const btn = document.querySelector('button');
let ul = document.querySelector('ul');
btn.addEventListener('click', () => {
  ul.textContent += '<li>something new</li>';
});

```

##### Using `append()` & `prepend()`

- `ParentNode.append()` - inserts at the bottom of its parent

- `ParentNode.prepend()` - inserts at the top of its parent

```
const btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click', () => {
  // ul.innerHTML += '<li>something new</li>';
  const li = document.createElement('li');
  li.textContent = 'something new';

  // ul.append(li);
  ul.prepend(li);
});
```

### Event Bubbling [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

Event Bubbling is the event starts from the target element to its parents, then all its ancestors which are on the way to bottom to top.  
Event will first be triggered at the target element level, if its parents has the same event, it will be triggered as well.

```
let ul = document.querySelector('ul');
btn.addEventListener('click', () => {        //when being clicked, it bubbled up to its parent
  const li = document.createElement('li');
    e.target.remove();
});
ul.addEventListener('click', e => {
  alert('event bubbling');                   // event is triggered automatically
});
```

**Use `event.stopPropagation()` to stop event bubbling.**

```
const items = document.querySelectorAll('li');
items.forEach(item => {
  item.addEventListener('click', e => {
    e.stopPropagation()
    e.target.remove();
  });
});
```

### Event Delegation [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

Because of Event Bubbling, one of most powerful event handling patterns called Event Delegation can be implemented.  
The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

```
ul.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});
```

### Event Reference [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

#### Form events

- `submit`  
  The submit event fires when a `<form>` is submitted. (enter pressing enter works)  
  **NOTE**: The submit event fires on the `<form>` element itself, and not on any `<button>` or `<input type="submit">` inside it.

- `reset`  
  The reset event fires when a `<form>` is reset.

  #### Example: logging timestamp when submit or reset

  HTML

  ```
  <form id="form">
    <label>Test field: <input type="text"></label>
    <button type="submit">Submit form</button>
    <button type="reset">Reset form</button>
  </form>
  <p id="log"></p>
  ```

  JS

  ```
  const form = document.getElementById('form');
  const log = document.getElementById('log');

  form.addEventListener('submit', e => {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();    //preventing refreshing page
  });

  form.addEventListener('reset', e => {
    log.textContent = `Form reset! Time stamp: ${event.timeStamp}`;
  });
  ```

- `input`  
  The input event fires when the value of an `<input>`, `<select>`, or `<textarea>` element has been changed.

- `change`  
  The change event is fired for `<input>`, `<select>`, and `<textarea>` elements when an alteration to the element's value is committed by the user.  
  Unlike the input event, the change event fires at a different moment:

  - When the element is `:checked` for `<input type="radio">` and `<input type="checkbox">`;
  - When the user commits the change explicitly (e.g., by selecting a value from a `<select>`'s dropdown with a mouse click, by selecting a date from a date picker for `<input type="date">`, by selecting a file in the file picker for `<input type="file">`, etc.);
  - When the element loses focus after its value was changed, but not commited (e.g., after editing the value of `<textarea>` or `<input type="text">`).

  #### Difference between `input` and `change`

  `input` - Output text changes as soon as the input value changes.  
  `change` - The change event doesn't fire until the control loses focus.

  HTML

  ```
  <input placeholder="Enter some text" name="name"/>
  <p id="log"></p>
  ```

  JS

  ```
  const input = document.querySelector('input');
  const log = document.querySelector('#log');

  input.addEventListener('input', e => {
    log.textContent = e.target.value;
  });

  input.addEventListener('change', e => {
    log.textContent = e.target.value;
  });
  ```

#### View events

- `resize`  
  The resize event fires when the document view (window) has been resized.

  ```
  window.addEventListener('resize', () => {
    console.log(this.innerHeight);
    console.log(this.innerWidth);
  });
  ```

- `scroll`  
  The scroll event fires when the document view or an element has been scrolled.

  ##### Change nav background to white when scrolling down

  ```
  const navbar = document.querySelector('#nav')

  window.addEventListener('scroll', function(e) {
    const lastPosition = window.scrollY
    if (lastPosition > 50 ) {
      navbar.classList.add('white-bg')
    } else if (navbar.classList.contains('white-bg')) {
      navbar.classList.remove('white-bg')
    } else {
      navbar.classList.remove('white-bg')
    }
  })
  ```

#### Keyboard events

[Key Code](https://keycode.info/)

- `keydown`  
  The event is fired when **ANY** key is pressed.

- `keyup`  
  The event is fired when **ANY** key is released.

  ```
  document.addEventListener('keydown', e => {
    console.log(e.code);
  });
  ```

#### Clipboard events

- `copy`  
  The copy event fires when the user initiates a copy action through the browser's user interface.  
  The clipboard contents can be modified by calling `event.clipboardData.setData(format, data)`, and cancelling the event's default action using `event.preventDefault()`.

  ```
  const source = document.querySelector('div.source');

  source.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
  });
  ```

  Other clipboard events: `cut`, `paste`

#### Mouse events

- `click`  
  The element get clicked (both pressed and released) with a mouse's primary mouse button.  
  `dblclick` event fires when double-click the element.

- `contextmenu`  
  This event fires when the user attempts to open a context menu (by right-click or context menu key)

  ##### Cannot right-click on p tag

  ```
  context = document.getElementById('p');

  context.addEventListener('contextmenu', e => {
    e.preventDefault();
  });
  ```

- `mousedown` & `mouseup`  
  The mouseup event is fired when a button on a mouse or trackpad is **released** on the element.  
  The mousedown event is fired when a button on a mouse or trackpad is **pressed** on the element.

- `mousemove`  
  The mousemove event is fired when a mouse is moved while the cursor is inside the element.

- `mouseenter` & `mouseleave`  
  _No event bubbling_

  The mouseenter event is fired when a mouse is **moved onto** the element.  
  The mouseleave event is fired when a mouse is **moved off** the element.

- `mouseover` & `mouseout`  
  _Event Bubbling_

  The mouseover event is fired when a mouse is used to move the cursor onto the element or one of its child elements.  
  The mouseout event is fired when a mouse is used to move the cursor so that it is no longer in the element or one of its children.

- `wheel`  
   This event fires when the user rotates a wheel button on a mouse in any direction.

  ##### Scaling an element while wheeling

  HTML

  ```
  <div style="width: 100px; height: 100px; background: blue;"></div>
  ```

  JS

  ```
  let scale = 1;
  const box = document.querySelector('div');
  box.addEventListener('wheel', e => {
    e.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(0.125, scale), 4);   // Restrict scale
    box.style.transform = `scale(${scale})`;
  });
  ```

#### Drag & Drop events

- `drag`  
  The drag event is fired every few hundred milliseconds as an element or text selection is being dragged.

- `dragstart` & `dragend`  
  The dragstart event is fired when the user starts dragging an element or text selection.  
  The dragend event is fired when a drag operation is being ended.

- `dragenter` & `dragleave`  
  The dragenter event is fired when a dragged element or text selection enters a valid drop target.
  The dragleave event is fired when a dragged element or text selection leaves a valid drop target.

- `dragover`  
  The dragover event is fired when an element or text selection is being dragged over a valid drop target (Fired continuously).

- `drop`  
  The drop event is fired when an element or text selection is dropped on a valid drop target.

  **Simple drag and drop [DEMO](https://codepen.io/wangchimei/pen/JjdKyLZ)**

## Regular expression (RegEx)

### Define a regular expression [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

Two ways of defining a regular expression in JavaScript

- `const pattern = / regex goes here /` **(common way)**
- `const pattern = new RegExp(' regex goes here ')`

### Characters Sets [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

The following sequences can be used to match a specific set of characters.

- `\w` Matches any word character (equal to `[a-zA-Z0-9_]`)
- `\W` — Matches any non-word character (equal to `[^a-zA-Z0-9_]`, opposite to `\w`)
- `\d` — Matches a digit (equal to `[0-9]`)
- `\D` — Matches any character that\'s not a digit (equal to `[^0-9]` opposite to `\d`)
- `\s` — Matches whitespace characters. This includes spaces, tabs, and line breaks. (equal to `[\r\n\t\f\v ]`)
- `\S` — Matches all other characters except whitespace.(equal to `[^\r\n\t\f\v ]`)
- `.` — Matches any character except line breaks
- `[A-Z]` — Matches characters in a range. For example, [A-E] will match A, B, C, D, and E.
- `[ABC]` — Matches a character in the given set. For example, [AMT] will only match A, M, and T.
- `[^abc]` — Matches all the characters not present in the given set. For example, [^a-e] will match all other characters except A, B, C, D, and E.

### Quantifiers [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

All the expressions above will match a single character at a time.  
Quantifiers can be used to specify how many characters should be included in the match at once.

- `?` — Matches **zero or one** occurrences of the preceding character. For example, this can be useful when matching two variations of spelling for the same work.
- `*` — Matches **zero or more** occurrences of the preceding token. For example, `b\w*` matches zero or more word characters after 'b'.
- `+` — Matches **one or more** occurrences of the preceding token.
- `{m}` will match **exactly** m occurrences of the preceding token.
- `{m, n}` — Matches **at least m** and **at most n** occurrences of the previous token.
- `{m,}` - Match **at least m** occurrences with no upper limit to the match.
- `|` — Matches the expression either before or after the pipe character. For example, `/se(a|e)/` matches both see and sea.

### Group Parenthesis [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

- `(ABC)` — This will group multiple tokens together and remember the substring matched by them for later use. This is called a capturing group.  
  For example, using `(?:city)` to test "kaohsiung city" will capture "city".

- `(?:ABC)`  
  This will also group multiple tokens together but won't remember the match. It is a non-capturing group.  
  For example, using `(?:city)` to test "kaohsiung city" will capture "city".

- `\d+(?=FN)`  
  This will match the token(s) preceding the (?=FN) part only if it is followed by FN.  
  The part FN will not be included in the match.  
  For example, using `\w+(?=\scity)` to test "kaohsiung city" will capture "kaohsiung".

- `\d+(?!FN)`  
  This will match the token(s) preceding the (?!FN) part only if it is not followed by FN.  
  The part FN will be included in the match.  
  For example, using `\w+(?!city)` to test "kaohsiung city" will capture "kaohsiung", "city".

### Other [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

- `^` — Look for the regular expression at the **beginning** of the string (or the beginning of a line if the multiline flag is enabled).
- `$` — Look for the regular expression at the **end** of the string (or the end of a line if the multiline flag is enabled).

### Flags [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

Flags can be used to control how a regular expression should be interpreted.  
To specify, flags can be added to the end of a regular expression literal `/cat/i` or to the RegExp constructor `RegExp("cat", 'i')`.

- `g` — Global flag. Search the string for **all matches** of given expression. (instead of returning just the first one)
- `i` — Insensitive. Make the search case-insensitive.
- `m` — Multiline. This flag will make sure that the ^ and \$ tokens look for a match at the beginning or end of each line instead of the whole string.
- `u` — Unicode. This flag will enable you to use Unicode code point escapes in your regular expression.

### Test a regular expression [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

- `test()`  
  It returns `true` on successful match and `false` otherwise.

  ```
  regexOne.test(textA)   // Output example: true or false
  ```

- `search()`  
  It returns the _index_ of the match on success and `-1` otherwise.

  ```
  textA.search(regexOne)   // Output example: index or -1
  ```

- `match()`  
  If the g flag is enabled, multiple matches will be returned as an array.

  ```
  var textA = 'All I see here are apples, APPles and apPleS';
  var regexOne = /apples/gi;

  console.log(textA.match(regexOne));   // Output example : [ "apples", "APPles", "apPleS" ]
  ```

- `exec()`  
  The returned array will contain information about the match and capturing groups.

  ```
  var textA = 'Do you like apples?';
  var regexOne = /apples/;

  console.log(regexOne.exec(textA)[0]);      // Output : apples
  console.log(regexOne.exec(textA).input);   // Output : Do you like apples?
  ```

- `replace()`  
  Search for a substring matching the given pattern and replace it with the provided replacement string.

  ```
  var textA = 'Do you like aPPles?';
  var regexOne = /apples/i

  console.log(textA.replace(regexOne, 'mangoes'));   // Output : Do you like mangoes?
  ```

- `split()`  
  This method will allow you to split the main string into substrings based on the separator specified as a regular expression.

  ```
  var textA = 'Do you like 3 apples or 3apple3?';
  var regexOne = /\d+/g

  console.log(textA.split(regexOne))   // Output : ["Do you like ", " apples or ", "apple", "?"]
  ```

## Asynchronous JavaScript

### XMLHttpRequest (XHR) [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

#### Making a request

```
const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();
```

- `open()` - initializes a newly-created request, or re-initializes an existing one

  ```
  XMLHttpRequest.open(method, url, async)
  ```

  `method` - The HTTP request method to use, such as "GET", "POST", "PUT", "DELETE", etc.  
  `url` - The URL to send the request to  
  `async` - (optional) indicates whether or not to perform the operation asynchronously (true as default)

- `send()` - sends the request to the server.  
  send() accepts an optional parameter which lets you specify the request's body, which is primarily used for requests such as `PUT`.  
  If the request method is `GET` or `HEAD`, the body parameter is ignored and the request body is set to null.

  ```
  XMLHttpRequest.send(body)
  ```

  `body` - A body of data to be sent in the XHR request.

#### Checking Request State

The `XMLHttpRequest.readyState` returns the state an XMLHttpRequest client is in.  
An XHR client exists in one of the following states:

| Value | State            | Description                                                     |
| :---- | :--------------- | :-------------------------------------------------------------- |
| 0     | UNSENT           | Client has been created. `open()` not called yet.               |
| 1     | OPENED           | `open()` has been called.                                       |
| 2     | HEADERS_RECEIVED | `send()` has been called, and headers and status are available. |
| 3     | LOADING          | Downloading; _responseText_ holds partial data.                 |
| 4     | DONE             | The operation is complete.                                      |

```
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  console.log(request, request.readyState);
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();
```

#### Validating the Http Request

```
request.readyState === 4 && request.status === 200
```

#### Parsing JSON & Refactoring

- Creating a constance with callback function takes in two parameters
- Using `JSON.parse()` to convert JSON strings to JavaScript objects

```
const getTodos = callback => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback(request.status, undefined);
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
  request.send();
};

getTodos((error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
```

### Promise [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.  
This can be used to avoid nesting callbacks (so-called callback hell).

- `then()` - returns a Promise. It takes up to two optional arguments: callback functions for the success and failure cases of the Promise.

  ```
  const promise = new Promise((resolve, reject) => {
    resolve('Success!');
    // reject('Failed!');
  });

  promise.then(value => {
    console.log(value);
  }, error => {
    console.log(error);
  });
  ```

- `catch()` - returns a Promise and deals with rejected cases only

  ```
  const promise = new Promise((resolve, reject) => {
    throw 'Uh-oh!';
  });

  promise.catch(error => {
    console.log(error);
  });
  ```

  As the `then()` and `catch()` methods return promises, they can be chained — an operation called composition.

**Example using XHR and Promise**

```
const getBooks = resource => {
  return new Promise((resolve, reject) => {
    //making http requests
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.response);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('error');
      }
    });

    request.open('GET', resource);
    request.send();
  });
};

getBooks('bmo.json')
  .then(data => {
    console.log('promise resolved:', data);
  })
  .catch(error => {
    console.log('promise rejected:', error);
  });
```

#### Making Sequence of Http requests

Using callbacks for sending sequence of Http requests will result in "callback hell".

_example_

```
getBooks('bmo.json', (error, data) => {
  console.log(data);
  getBooks('winnie.json', (error, data) => {
    console.log(data);
    getBooks('chopper.json', (error, data) => {
      console.log(data);
    });
  });
});
```

Using promise is better in terms of method chaining.

_example_

```
getBooks('bmo.json')
  .then(data => {
    console.log('promise 1 resolved:', data);
    return getBooks('winnie.json');
  })
  .then(data => {
    console.log('promise 2 resolved:', data);
    return getBooks('chopper.json');
  })
  .then(data => {
    console.log('promise 3 resolved:', data);
  })
  .catch(error => {
    console.log('promise rejected:', error);
  });
```

`return getBooks('winnie.json')` will return a promise which allows to use `then` for resolved promise.  
`.catch()` will catch every error in all http requests.

### Fetch API [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

The Fetch API provides an interface for fetching resources (including across the network).  
It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

```
const fetchResponsePromise = fetch(resource [, init])
```

`resource` - This defines the resource that you wish to fetch.
`init` - (optional) e.g. `method` (GET, POST...etc)

The `fetch()` method takes one mandatory argument, the path to the resource you want to fetch.  
It returns a _promise_ which is fulfilled once the response is available.  
The promise resolves to the Response object representing the response to your request.

```
fetch('wrong.json')
  .then(response => {
    console.log(response);   // resolved, but it is error 404
  })
  .catch(error => {
    console.log(error);
  });
```

A `fetch()` promise **does not** reject on HTTP errors (404, etc.), it only rejects when a network error is encountered.  
Instead, a `then()` handler must check the Response.ok and/or Response.status properties.

#### Parsing JSON

- Using `response.json()` to return data, which returns a **promise**

```
fetch('bmo.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Differences from AJAX

The `fetch` specification differs from`jQuery.ajax()` in three main ways:

1. The Promise returned from `fetch()` will **NOT** reject on _HTTP error status_ even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false), and it will _only reject on network failure_ or if anything prevented the request from completing.
2. `fetch()` will **NOT** receive cross-site cookies. You can’t establish a cross site session using `fetch()`. Set-Cookie headers from other sites are silently ignored.
3. `fetch()` will **NOT** send cookies, unless you set the credentials init option.

### Async & Await [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

The `async function` declaration defines an asynchronous function — a function that returns an AsyncFunction object, an implicit Promise as its result.  
The `await` operator is used to wait for a Promise. It can only be used inside an async function.

Using `async` and `await` can chain promises together in a clean and readable way.

```
const getBooks = async () => {
  const response = await fetch('bmo.json');
  const data = await response.json();
  return data;
};

getBooks()
  .then(data => console.log(data));
```

**Note**: `getBook()` is a promise, therefore `then()` is needed to be used once outside of the async function.

### Throwing & Catching Error [&#916;](https://github.com/Wangchimei/javascript_advanced#table-of-content)

`.catch(error => console.log(error.message));` will catch rejected error from fetch.  
However, since fetch does not reject HTTP errors, we use if statement to check status.

```
const getBooks = async () => {
  const response = await fetch('bmo.json');

  if (response.status !== 200) {
    throw new Error('cannot fetch the data');
  }

  const data = await response.json();
  return data;
};

getBooks()
  .then(data => console.log(data))
  .catch(error => console.log(error.message));
```
