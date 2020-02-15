# JavaScript

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

- map() - creates a new array populated with the results of calling a provided function on every element in the calling array

  ```
  let newArr = [2, 4, 6, 8];
  newArr.map(x => x ** 2); //[4, 16, 36, 64]
  ```

- reduce() - executes a reducer function (that you provide) on each element of the array, resulting in a single output value
  syntax: `arr.reduce(callback(params), initialValue)`  
   callback takes four parameters:

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

## Null vs Undefined

- Undefined - For variables that have not yet been defined (Automatically assigned)

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

## Type Conversion

Using `typeof` operator to check the type of something (variables). e.g. `typeof name`

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

#### Syntax

```
for ([initialization]; [condition]; [final-expression]) {
  statement
}
```

`initialization` - An expression (including assignment expressions) or variable declaration evaluated once before the loop begins.
New variables can be declared with `var` or `let` keywords.
Variables declared with `var` are **not** local to the loop, i.e. they are in the same scope the for loop is in.
Variables declared with `let` are local to the statement.

`condition` - An expression to be evaluated before each loop iteration.

`final-expression` - A statement that is executed in the end of each loop as long as the condition evaluates to true.

```

const name = ['Bimo', 'Luigi', 'Chopper', 'Butter'];
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}
```

### While Loop

#### Syntax

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

#### Syntax

```
do
  statement
while (condition);
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

### if / else if / else statement

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

### break and continue
