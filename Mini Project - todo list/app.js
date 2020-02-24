const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
// const deleteBtn = document.querySelectorAll('.delete');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html;
};

//? ADD TODOS

addForm.addEventListener('submit', e => {
  e.preventDefault();
  // const todo = addForm.add.value.trim();
  const todo = e.target.add.value.trim();

  // console.log(todo);

  //check empty content
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  } else {
    alert('Please enter a todo!');
  }
});

//? DELETE TODOS
//! The following will not be able to delete new items
// deleteBtn.forEach(btn => {
//   btn.addEventListener('click', e => {
//     e.target.parentElement.remove();
//   });
// });

//! Event Delegation: work on new items
list.addEventListener('click', e => {
  console.log(e.target.className);
  console.log(e.target.classList);

  // if (e.target.classList.contains('delete')) {
  //   e.target.parentElement.remove();
  // }

  if (e.target.className.includes('delete')) {
    e.target.parentElement.remove();
  }
});

//? FLITER
const filterTodos = term => {
  // console.log(term);

  //? convert HTML collection to an array
  // console.log(Array.from(list.children));

  //? take unmatched ones and hide them
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  //? reverse filtered class if they matched again
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
  // const term = e.target.value.trim();
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
