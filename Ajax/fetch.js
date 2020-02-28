// async & await

const getBooks = async () => {
  // stops js from assigning the variable until the promise has resolved
  const response = await fetch('bmo.json');

  if (response.status !== 200) {
    throw new Error('cannot fetch the data');
  }

  const data = await response.json();
  return data;
};

// use then here for promise
getBooks()
  .then(data => console.log(data))
  .catch(error => console.log(error.message));

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
