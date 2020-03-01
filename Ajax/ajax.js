// XHR
// const getBooks = (resource, callback) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4 && request.status === 200) {
//       // callback(undefined, request.responseText);
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState === 4) {
//       callback(request.status, undefined);
//     }
//   });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// request.open('GET', resource);
// request.send();
// };

//! Callback Hell
// getBooks('bmo.json', (error, data) => {
//   console.log(data);
//   getBooks('winnie.json', (error, data) => {
//     console.log(data);
//     getBooks('chopper.json', (error, data) => {
//       console.log(data);
//     });
//   });
// });

//? promise example
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // do something (fetch data)
//     // resolve('some data');
//     reject('some error');
//   });
// };

// getSomething().then(data => {
//   console.log('promise resolved:', data);
// }, err => {
//   console.log('promise rejected:', err);
// });

// getSomething().then(data => {
//   console.log('promise resolved:', data);
// }).catch(err => {
//   console.log('promise rejected:', err);
// });

// ! Using Promise

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

//! Using Promise (different writing)
const getBooks = resource => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', resource);
    request.onload = () => {
      if (request.status === 200) {
        resolve(JSON.parse(request.response));
      } else {
        reject(request.statusText);
      }
    };
    request.onerror = () => {
      reject(request.statusText);
    };
    request.send();
  });
};

let promise = getBooks('bmo.json');
promise
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

//! jquery
$.get('bmo.json')
  .then(data => {
    console.log('promise 1 resolved:', data);
    return $.get('winnie.json');
  })
  .then(data => {
    console.log('promise 2 resolved:', data);
    return $.get('chopper.json');
  })
  .then(data => {
    console.log('promise 3 resolved:', data);
  })
  .catch(error => {
    console.log('promise rejected:', error);
  });

//! Generator
window.onload = function() {
  genwrap(function*() {
    var bmoBooks = yield $.get('bmo.json');
    console.log(bmoBooks);
    var winnieBooks = yield $.get('winnie.json');
    console.log(winnieBooks);
    var chopperBooks = yield $.get('chopper.json');
    console.log(chopperBooks);
  });

  function genwrap(generator) {
    var gen = generator();

    function handle(yielded) {
      if (!yielded.done) {
        yielded.value.then(data => {
          return handle(gen.next(data));
        });
      }
    }
    return handle(gen.next());
  }
};
