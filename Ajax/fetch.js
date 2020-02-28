// async & await

const getTodos = async () => {
  // stops js from assigning the variable until the promise has resolved
  const response = await fetch('bmo.json');
  const data = await response.json();
  return data;
};

// use then here for promise
getTodos().then(data => console.log(data));

//? return promise
// const test = getTodos();
// console.log(test);

//Fetch API
fetch('bmo.json')
  .then(response => {
    // console.log(response);
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
