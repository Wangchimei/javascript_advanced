let age = 30;

if (true) {
  let age = 40;
  let name = 'Mario';
  console.log('inside 1st code block:', age, name, mood);

  if (true) {
    age = 50;
    var mood = 'happy!';
    console.log('inside 2nd code block:', age, name, mood);
  }
}

console.log('outside code block:', age, name, mood);
