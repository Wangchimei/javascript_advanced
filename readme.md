# JavaScript

data that is not an object and has no methods.

| Types                                                                | Brief                                                                                                                 |
| :------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| [String](https://github.com/Wangchimei/javascript_advanced#string)   | 'hello', [template strings](https://github.com/Wangchimei/javascript_advanced#template-strings-template-literals)     |
| [Number](https://github.com/Wangchimei/javascript_advanced#number)   | 1, 2, 100, 3.14                                                                                                       |
| [Null](https://github.com/Wangchimei/javascript_advanced#array)      | Explicitly set a variable with no value                                                                               |
| [Undefined](https://github.com/Wangchimei/javascript_advanced#array) | For variables that have not yet been defined                                                                          |
| [Boolean](https://github.com/Wangchimei/javascript_advanced#boolean) | true / false                                                                                                          |
| Object                                                               | Complex data structures - [Array](https://github.com/Wangchimei/javascript_advanced#array), Dates, [Literals](), etc. |
| Symbol                                                               | Used with objects                                                                                                     |

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

## Number

Order of operation:  
B - Brackets `()`  
I - Indices `**`  
D - Division `/`  
M - Multiplication `*`  
A - Addition `+`  
S - Subtraction `-`

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

Template strings is often used for outputing contents into html.

```
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This book has ${likes} likes</span>
`;
```

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

Using comparison operators(`==`, `!=`, `>`, `>=`, `<`, `<=`, `===`) will returm Boolean.

```
let name = 'Luigi';

console.log(name == 'luigi'); // false
console.log(name > 'luigi'); // false (lowercase is greater than uppercase)
console.log(name > 'Mario'); // false (M comes after L)
```

##### Difference between `===` and `==`

`===` / `!==` are also known as **strict comparison**,the value's types is considered in the comparison.
`==` / `!=` are also known as **loose comparison**, which means different types can still be euqal.

```
let age = 25;

// console.log(age == 25); // true
// console.log(age == '25'); // true

// console.log(age === 25); //true
// console.log(age === '25'); //false
```

## Array

```
let likes = ['Bimo', 'Chopper', 'Winnie'];
likes[1];   //"Chopper"

likes[1] = "Psyduck";
likes[1];   //"Psyduck"
```

### Methods

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

##### create an object literal with `key: value` pairs.

```
let user = {
  name = 'luigi',
  age = 30,
  email = 'luigi@nintendo.jp'
  blogs = ['The Haunted Mansion', 'Friendship with Boos']
}
```

##### access properties from the object literal with `.` (dot notation)

```
console.log(user.name)
```

##### access and update the properties - dot notation or square bracket notation

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

`final-expression` - A statement that is executed in the end of each loop as long as the condition evaluates to true.

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

### if / else if / else statement

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

### switch statement

Best practice is be use in evaluating multi possible value of a single variable.
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

### break and continue

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
    // terminate the whole loop
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

## Block Scope

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

## Functions

### Terminology

```
const _variable_ = function (_parameters_) {
  ...
}

cnosole.log(_variable_())
```

### Regular functions

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

### Arrow functions

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

### Functions vs Methods

Methods are functions but they are functions that are associated with Objects.
Even though, they are both functions but the way to invoke a function and a method is different.  
To invoke functions: using by calling function name and parentheses, such as `greet()`  
To invoke methods: using `.` (dot notation) on value itself, such as `name.toUpperCase()`

### Callback functions

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
