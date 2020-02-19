const inputs = document.querySelectorAll('input');
const patterns = {
  username: /^[a-z\d]{5,12}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  //yourname @ domain.com (.uk )
  password: /^[\w@-]{8,20}$/,
  telephone: /^[\d]{11}$/,
  slug: /^[a-z\d-]{8,20}$/,
};

inputs.forEach(input => {
  input.addEventListener('keyup', e => {
    // console.log(e.target.attributes);
    // console.log(e.target.attributes.name.value);
    // console.log(e.target.name);
    validate(e.target, patterns[e.target.name]);
  });
});

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
}

//? version 1
// inputs.forEach(input => {
//   input.addEventListener('keyup', e => {
//     console.log(e.target.attributes.name.value);
//     console.log(e.target.name, e.target.value);
//     if (patterns[e.target.name].test(e.target.value)) {
//       input.className = 'valid';
//     } else {
//       input.className = 'invalid';
//     }
//   });
// });
