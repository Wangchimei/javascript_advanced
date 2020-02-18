# JavaScript

[See Primitive Types vs Reference Types](https://github.com/Wangchimei/javascript_advanced#primitive-types-vs-reference-types)

| Types                                                                            | Brief definition                                      | Sections                                                                                                                                                                       |
| :------------------------------------------------------------------------------- | :---------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [String](https://github.com/Wangchimei/javascript_advanced#string)               | A constructor for strings or a sequence of characters | [Mathods](https://github.com/Wangchimei/javascript_advanced#methods), [Template Strings](https://github.com/Wangchimei/javascript_advanced#template-strings-template-literals) |
| [Number](https://github.com/Wangchimei/javascript_advanced#number)               | Numerical values (1, 2, 100, 3.14)                    |                                                                                                                                                                                |
| [Null](https://github.com/Wangchimei/javascript_advanced#null-vs-undefined)      | Explicitly set a variable with no value               |                                                                                                                                                                                |
| [Undefined](https://github.com/Wangchimei/javascript_advanced#null-vs-undefined) | For variables that have not yet been defined          |                                                                                                                                                                                |
| [Boolean](https://github.com/Wangchimei/javascript_advanced#boolean)             | true / false                                          |                                                                                                                                                                                |
| Object                                                                           | Complex data structures                               | Array, Dates, Literals, Math, etc.                                                                                                                                             |
| Symbol                                                                           | Used with objects                                     |                                                                                                                                                                                |

- [Object](https://github.com/Wangchimei/javascript_advanced#array)

  - [Array](https://github.com/Wangchimei/javascript_advanced#array)
    - [Methods](https://github.com/Wangchimei/javascript_advanced#methods-1)
  - [Object literals](https://github.com/Wangchimei/javascript_advanced#object-literals)
    - [this keyword](https://github.com/Wangchimei/javascript_advanced#this-keyword)
  - [Math](https://github.com/Wangchimei/javascript_advanced#math)

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

## Primitive Types vs Reference Types

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

#### Example

##### Primitive Types

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

##### Reference Types

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

## String

A sequence of characters, e.g. `let email = "chimei@example.com"`

### Methods

- indexOf() - returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex
  Returns `-1` if the value is not found.
  ```
  email.indexOf('e');  // 4
  ```
- lastIndexOf() - returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex
  Returns `-1` if the value is not found.

  ```
  email.indexOf('c');  // 13
  ```

- split() - turns a String into an array of strings, by separating the string at each instance of a specified separator string
  ```
  email.split("@")[0];  // "mei"
  ```
- slice() - extracts a section of a string and returns it as a new string, without modifying the original string
  ```
  email.slice(3, 6);  // "chimei"
  ```
- substring() - returns the part of the string between the start and end indexes, or to the end of the string

  ```
  email.substring(3, 6);  // "mei"
  ```

  ##### Differences between substring() and slice()

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

- substr() - returns a portion of the string, starting at the specified index and extending for a given number of characters afterward
  ```
  email.substr(3, 6);  // "mei@ex"
  ```
- replace() - returns a new string with some or all matches of a pattern replaced by a replacement
  ```
  email.replace('i', 'o');  // "chomei@example.com"
  ```
- includes() - determines whether one string may be found within another string, returning `true` or `false`
  ```
  email.includes('i');  // true
  ```

## Template strings (Template literals)

Template literals are string literals allowing embedded expressions.
You can use multi-line strings and string interpolation features with them.

##### Define variables

```
const title = 'Harry Potter and the Philosopher's Stone';
const author = 'J.K. Rowling';
let likes = 300;
```

##### concatenation way

```
let result = 'The book called ' + title + ' by ' + author + ' has ' + likes + ' likes';

```

##### template strings way

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

## Number

Order of operation:  
B - Brackets `()`  
I - Indices `**`  
D - Division `/`  
M - Multiplication `*`  
A - Addition `+`  
S - Subtraction `-`

## Null vs Undefined

- Undefined - For variables that have not yet been defined (automatically assigned)

```
let age;

console.log(age, age + 3, `the age is ${age}`);
// undefined NaN "the age is undefined"
```

- Null - Explicitly set a variable with no value

```
let age = null;

console.log(age, age + 3, `the age is ${age}`);
// null 3 "the age is null"
```

## Boolean

Using comparison operators(`==`, `!=`, `>`, `>=`, `<`, `<=`, `===`) will return Boolean.

```
let name = 'Luigi';

console.log(name == 'luigi'); // false
console.log(name > 'luigi'); // false (lowercase is greater than uppercase)
console.log(name > 'Mario'); // false (M comes after L)
```

#### Difference between `===` and `==`

`===` / `!==` are also known as **strict comparison**,the value's types are considered in the comparison.
`==` / `!=` are also known as **loose comparison**, which means different types can still be equal.

```
let age = 25;

// console.log(age == 25); // true
// console.log(age == '25'); // true

// console.log(age === 25); //true
// console.log(age === '25'); //false
```

## Type Conversion

Using `typeof` operator to check the type of something (variables), e.g. `typeof name`

```
Number('hello'); // NaN
String(50); // "50"

Boolean(0); // false
Boolean(-100); // ture
Boolean('0'); // ture
Boolean(''); // false
```

## Array

```
let likes = ['Bimo', 'Chopper', 'Winnie'];
likes[1];   //"Chopper"

likes[1] = "Psyduck";
likes[1];   //"Psyduck"
```

### Methods

- forEach() - executes a provided function once for each array element
  **syntax:** `arr.forEach(callback(currentValue [, index [, array]])[, thisArg])`
  callback takes 3 parameters:

  1. currentValue - The current element being processed in the array.
  2. index - (optional) The index currentValue in the array.
  3. array - (optional) The array forEach() was called upon.

  `thisArg` - (optional) Value to use as this when executing callback.

  ##### Converting a for loop to forEach:

  ```
  const people = ["Chopper", "Luigi", "Bimo"];
  const copy = []

  // for loop
  for (let i = 0; i < people.length; i++) {
    copy.push(people[i])
  }

  // forEach loop
  people.forEach(item => copy.push(item))
  ```

- join() - creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string
  ```
  likes.join(', ');  // "Bimo, Chopper, Winnie"
  ```
- indexOf() - returns the first index at which a given element can be found in the array, or `-1` if it is not present
  ```
  likes.indexOf('Bimo');  // 0
  ```
- concat() - merges two or more arrays. This method does not change the existing arrays, but instead returns a new array

  ```
  likes.concat(['Luigi', 'Butter']);
     // ["Bimo", "Chopper", "Winnie", "Luigi", "Butter"]
  ```

- slice() - returns a shallow copy of a portion of an array into a new array object selected from begin index to end index (end not included)

  ```
  likes = ["Bimo", "Chopper", "Winnie", "Luigi", "Butter"];
  likes.slice(2, 4); // ["Winnie", "Luigi"]
  ```

- unshift() - adds one or more elements to the **beginning** of an array and returns the new length of the array **(destructive method)**

  ```
  likes.unshift('Luigi', "Butter"); // 5
  console.log(likes); // ["Luigi","Butter", "Bimo", "Chopper", "Winnie"]
  ```

- push() - adds one or more elements to the **end** of an array and returns the new length of the array **(destructive method)**

  ```
  likes.push('Luigi'); // 4
  console.log(likes); // ["Bimo", "Chopper", "Winnie", "Luigi"]
  ```

- shift() - removes the **first** element from an array and returns that removed element **(destructive method)**

  ```
  likes.unshift('Luigi', "Butter"); // 5
  console.log(likes); // ["Luigi","Butter", "Bimo", "Chopper", "Winnie"]
  ```

- pop() - removes the **last** element from an array and returns that element **(destructive method)**

  ```
  likes.pop(); // "Winnie" (return what's been taken out)
  console.log(likes); // ["Bimo", "Chopper"]
  ```

- splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

  ```
  likes.splice(1, 0, 'Luigi'); // [] (nothing's taken out)
  console.log(likes); // ["Bimo", "Luigi", "Chopper", "Winnie"]

  likes.splice(3, 1, 'Butter'); // "Winnie"
  console.log(likes); // ["Bimo", "Luigi", "Chopper", "Butter"]
  ```

  `likes.splice(1, 0, "Luigi")` = remove 0 element from index 1 and insert "Luigi"  
  `likes.splice(3, 1, "Butter")` = remove 1 element from index 3 and insert "Butter"  
  `likes.splice(2, 3)` = remove 3 elements from index 2

- sort() - sorts the elements of an array in place and returns the sorted array. The default sort order is ascending

  ```
  newArr = ["Chopper", "Luigi", "Bimo"];
  newArr.sort(); //  ["Bimo", "Chopper", "Luigi"]
  ```

- includes() - determines whether an array includes a certain value among its entries, returning `true` or `false`

  ```
  likes.includes('imo'); // false
  ```

- flat() - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth

  ```
  var arr1 = [1, 2, [3, 4]];
  arr1.flat();    // [1, 2, 3, 4]

  var arr2 = [1, 2, [3, 4, [5, 6]]];
  arr2.flat();    // [1, 2, 3, 4, [5, 6]]

  var arr3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
  arr3.flat(Infinity);    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // Flattening and array holes
  var arr5 = [1, 2, , 4, 5];
  arr5.flat(); // [1, 2, 4, 5]
  ```

- map() - creates a new array populated with the results of calling a provided function on every element in the calling array

  ```
  let newArr = [2, 4, 6, 8];
  newArr.map(x => x \*\* 2); //[4, 16, 36, 64]
  ```

- reduce() - executes a reducer function (that you provide) on each element of the array, resulting in a single output value
  **syntax:** `arr.reduce(callback(params), initialValue)`
  callback takes 4 parameters:

  1. Accumulator (acc) - The accumulator accumulates callback's return values.
  2. Current Value (cur) - The current element being processed in the array.
  3. Current Index (idx) - (optional) The index of the current element being processed in the array.
  4. Source Array (src) - (optional) The array reduce() was called upon.

  `initialValue` - (optional) A value to use as the first argument to the first call of the callback.

  ```
  let number = [1, 2, 3, 4];
  number.reduce((acc, cur) => acc + cur); // 10
  number.reduce((acc, cur) => acc + cur, 5); // 15

  let flattened = [[0, 1], [2, 3], [4, 5]];
  flattened.reduce((acc, cur) => acc.concat(cur)); // [0, 1, 2, 3, 4, 5]
  ```

  ##### Counting instances of values in an object

  ```
  let list = ['Alice', 'Bob', 'John', 'Bruce', 'Alice'];
  let nameCount = list.reduce(function(nameArr, name) {
    if (name in nameArr) {
    nameArr[name]++;
    } else {
    nameArr[name] = 1;
    }
    return nameArr;
  }, {});

  console.log(nameCount); // {Alice: 2, Bob: 1, John: 1, Bruce: 1}
  ```

## Object literals

#### Create an object literal with `key: value` pairs.

```
let user = {
  name: 'luigi',
  age: 30,
  email: 'luigi@nintendo.jp',
  blogs: ['The Haunted Mansion', 'Friendship with Boos']
}
```

#### Access and update the properties - dot notation or square bracket notation

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

#### Add methods

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

#### Objects in Arrays

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

### `this` keyword

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

## Math

Math is a built-in object that has properties and methods for mathematical constants and functions.  
Math works with the Number type. It does **NOT** work with BigInt.

### Methods

- round() - returns the value of a number rounded to the nearest integer

  ```
  console.log(Math.round(7.7));  // 8
  console.log(Math.round(7.4));  // 7
  ```

- floor() - returns the largest integer less than or equal to a given number

  ```
  const area = 7.7;
  console.log(Math.round(area));  // 7
  ```

- ceil() - always rounds a number up to the next largest whole number or integer

  ```
  const area = 7.1;
  console.log(Math.round(area));  // 8
  ```

- trunc() - returns the integer part of a number by removing any fractional digits

  ```
  console.log(Math.round(7.7));  // 7
  console.log(Math.round(7.4));  // 7
  ```

- random() - returns a float random number in the range 0 to less than 1 (inclusive of 0, but not 1)

  ```
  const random = Math.random();

  console.log(random);  // 0 <= n < 1
  console.log(Math.round(random ));  // 0 or 1
  console.log(Math.round(random * 100));  // 0 ~ 100
  ```

- abs() - returns the absolute value of a number

  ```
  function difference(a, b) {
    return Math.abs(a - b);
  }

  console.log(difference(3, 5));   // 2
  ```

## Loops

### For Loop

##### Syntax

```
for ([initialization]; [condition]; [final-expression]) {
  statement
}
```

`initialization` - An expression (including assignment expressions) or variable declaration evaluated once before the loop begins.

`condition` - An expression to be evaluated before each loop iteration.

`final-expression` - A statement that is executed at the end of each loop as long as the condition evaluates to true.

**NOTE**
Variables declared with `var` are **not** local to the loop, i.e. they are in the same scope the for loop is in.
Variables declared with `let` are local to the statement.

```
const name = ['Bimo', 'Luigi', 'Chopper', 'Butter'];
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}
```

### While Loop

##### Syntax

```

while (condition) {
  statement
}

```

```
const name = ['Bimo', 'Luigi', 'Chopper', 'Butter'];
let i = 0;
while (i < name.length) {
  console.log(name[i]);
  i++;
}
```

### Do While Loop

The condition is evaluated after executing the statement, resulting in the specified statement executing **at least once**.

##### Syntax

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

`!list` - turn array into Boolean (ture)  
`!!list` - the opposite of true (false)

### If / Else if / Else Statement

The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.

##### Syntax

```
if (condition) {
  statement1
  } else if {
  statement2
  } else {
  statement3
}
```

### Switch Statement

Best practice is to be used in evaluating multi-possible values of a single variable.
Note: switch statement is using **strict equality** to check values.

##### Syntax

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

### Break and Continue

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

cnosole.log(_variable_())
```

### Block Scope

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

### Regular Functions

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

##### Default value in functions

```
const speak = function(name = 'Luigi', time = 'night'){
  console.log(`good ${time}, ${name}!`);
};

speak('Mario', 'morning'); // good morning Mario
speak(); // good night Luigi
speak('Bowser'); good night Bowser
```

### Arrow Functions

##### Syntax

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

##### Example

```
const calcArea = function(radius){
  return 3.14 \* radius\*\*2;
}
```

**since there is only one parameters, `function`, `()`, `return`, `{}` can all be omitted.**

```
const calcArea = radius => 3.14 \* radius\*\*2;
```

### Callback Functions

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

##### Example

```

let people = ['Luigi', 'Butter', 'Bimo', 'Chopper', 'Winnie'];

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

### Functions vs Methods

Methods are functions but they are functions that are defined on **an object** and associated with **the object**.  
Even though they are both functions, the way to invoke a function and a method is different.  
To invoke functions: using by calling function name and parentheses, such as `greet()`  
To invoke methods: using `.` (dot notation) on value itself, such as `name.toUpperCase()`

## Document Object Model (DOM)

### Query the DOM

[Single Element]

1. `document.querySelector('#name')`
2. `document.getElementById('name')`

[Multiple Elements]

1. `document.querySelectorAll('.error')` -> NodeList(3) [div.error, div.error, div.error]
2. `document.getElementsByClassName('error')` -> HTMLCollection(3) [div.error, div.error, div.error]
3. `document.getElementsByTagName('h2')` -> HTMLCollection(3) [h2.text-normal, h2.text-normal, h2.mb-2]

**Note**:  
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

### DOM Manipulation

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

  ##### Difference between `.textContent`

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
  const people = ["Chopper", "Luigi", "Bimo"];

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

## Events

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
let ul = document.querySelector('ul');
const items = document.querySelectorAll('li');
items.forEach(item => {
  item.addEventListener('click', e => {
    e.target.remove();
  });
});
ul.addEventListener('click', e => {
      e.target.remove();
  });
});
```

### Event Bubbling

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

### Event Delegation

Because of Event Bubbling, one of most powerful event handling patterns called Event Delegation can be implemented.  
The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

```
ul.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});
```

### Event reference

#### Form events

- `submit`  
  The submit event fires when a `<form>` is submitted. (enter pressing enter works)  
  **NOTE**: The submit event fires on the `<form>` element itself, and not on any `<button>` or `<input type="submit">` inside it.

- `reset`  
  The reset event fires when a `<form>` is reset.

  ##### Example: logging timestamp when submit or reset

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

  ##### Difference between `input` and `change`

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
  **No event bubbling**
  The mouseenter event is fired when a mouse is **moved onto** the element.  
  The mouseleave event is fired when a mouse is **moved off** the element.

- `mouseover` & `mouseout`  
  **Event Bubbling**  
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
