# JavaScript

a sequence of characters

## String

A sequence of characters. e.g. `let email = "chimei@example.com"`

### Methods

- indexOf() -
  ```
  email.indexOf('e');  // 4
  ```
- lastIndexOf() -
  ```
  email.indexOf('c');  // 13
  ```
- split() -
  ```
  email.split("@")[0];  // "mei"
  ```
- slice() -
  ```
  email.slice(3, 6);  // "chimei"
  ```
- substring() -
  ```
  email.substring(3, 6);  // "mei"
  ```
- substr() -
  ```
  email.substr(3, 6);  // "mei@ex"
  ```
- replace() -
  ```
  email.replace('i', 'o');  // "chomei@example.com"
  ```
- includes() -
  ```
  email.includes('i')  // true
  ```

## Number

order of operation
B - Brackets `()`
I - Indices `**`
D - Division `/`
M - Multiplication `*`
A - Addition `+`
S - Subtraction `-`

## Template strings (Template literals)

Template literals are string literals allowing embedded expressions.
You can use multi-line strings and string interpolation features with them.

###### Define variables

```
const title = 'Harry Potter and the Philosopher's Stone';
const author = 'J.K. Rowling';
let likes = 300;
```

###### concatenation way

```
let result = 'The book called ' + title + ' by ' + author + ' has ' + likes + ' likes';

```

###### template strings way

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
let likes = ['Bimo', 'Chopper', 'Winnie']
likes[1]   //"Chopper"

likes[1] = "Psyduck"
likes[1]   //"Psyduck"
```

### Methods

- join() - creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
  ```
  likes.join(', ')  // "Bimo, Chopper, Winnie"
  ```
- indexOf() - returns the first index at which a given element can be found in the array, or `-1` if it is not present.
  ```
  likes.indexOf('Bimo')  // 0
  ```
- concat() - merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.

  ```
  likes.concat(['Luigi', 'Butter'])
     // ["Bimo", "Chopper", "Winnie", "Luigi", "Butter"]
  ```

- slice() - returns a shallow copy of a portion of an array into a new array object selected from begin index to end index (end not included).

  ```
  likes = ["Bimo", "Chopper", "Winnie", "Luigi", "Butter"]
  likes.slice(2, 4) // ["Winnie", "Luigi"]
  ```

- unshift() - adds one or more elements to the **beginning** of an array and returns the new length of the array. **(destructive method)**

  ```
  likes.unshift('Luigi', "Butter") // 5
  console.log(likes) // ["Luigi","Butter", "Bimo", "Chopper", "Winnie"]
  ```

- push() - adds one or more elements to the **end** of an array and returns the new length of the array. **(destructive method)**

  ```
  likes.push('Luigi') // 4
  console.log(likes) // ["Bimo", "Chopper", "Winnie", "Luigi"]
  ```

- shift() - removes the **first** element from an array and returns that removed element. **(destructive method)**

  ```
  likes.unshift('Luigi', "Butter") // 5
  console.log(likes) // ["Luigi","Butter", "Bimo", "Chopper", "Winnie"]
  ```

- pop() - removes the **last** element from an array and returns that element. **(destructive method)**

  ```
  likes.pop() // "Winnie" (return what's been taken out)
  console.log(likes) // ["Bimo", "Chopper"]
  ```

- splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

  ```
  likes.splice(1, 0, "Luigi")  // [] (nothing's taken out)
  console.log(likes) // ["Bimo", "Luigi", "Chopper", "Winnie"]

  likes.splice(3, 1, "Butter") // "Winnie"
  console.log(likes) // ["Bimo", "Luigi", "Chopper", "Butter"]
  ```

  `likes.splice(1, 0, "Luigi")` = remove 0 element from index 1 and insert "Luigi"  
  `likes.splice(3, 1, "Butter")` = remove 1 element from index 3 and insert "Butter"  
  `likes.splice(2, 3)` = remove 3 elements from index 2

- sort() - sorts the elements of an array in place and returns the sorted array. The default sort order is ascending.

  ```
  newArr = ["Chopper", "Luigi", "Bimo"]
  newArr.sort() //  ["Bimo", "Chopper", "Luigi"]
  ```

- includes() - determines whether an array includes a certain value among its entries, returning `true` or `false`

  ```
  likes.includes('imo') // false
  ```

- map() - creates a new array populated with the results of calling a provided function on every element in the calling array.

  ```
  let newArr = [2, 4, 6, 8]
  newArr.map(x => x ** 2) //[4, 16, 36, 64]
  ```

- reduce() - executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
  syntax: `arr.reduce(callback(params), initialValue)`  
  callback takes four parameters:

  1. Accumulator (acc) - The accumulator accumulates callback's return values.
  2. Current Value (cur) - The current element being processed in the array.
  3. Current Index (idx) - (optional) The index of the current element being processed in the array.
  4. Source Array (src) - (optional) The array reduce() was called upon.
     `initialValue` - (optional) A value to use as the first argument to the first call of the callback.

  ```
  let number = [1, 2, 3, 4]
  number.reduce( (acc, cur) => acc + cur )  // 10
  number.reduce( (acc, cur) => acc + cur, 5)  // 15

  let flattened =  [[0, 1], [2, 3], [4, 5]]
  flattened.reduce( (acc, cur) => acc.concat(cur)) // [0, 1, 2, 3, 4, 5]
  ```

  #### Counting instances of values in an object

  ```
  let list = ['Alice', 'Bob', 'John', 'Bruce', 'Alice']
  let nameCount = list.reduce(function(nameArr, name) {
    if (name in nameArr) {
      nameArr[name]++
    } else {
      nameArr[name] = 1
    }
    return nameArr }, {})

  console.log(nameCount) // {Alice: 2, Bob: 1, John: 1, Bruce: 1}
  ```
