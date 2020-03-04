const lists = document.querySelector('ul');
const form = document.querySelector('form');

const btn = document.querySelector('button');

const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `
    <li data-id="${id}">
      <div>${recipe.title}</div>
      <div>${time}</div>
      <button class="btn btn-danger btn-sm my-2">Delete</button>
    </li>
  `;

  lists.innerHTML += html;
};

const deleteRecipe = id => {
  const recipes = document.querySelectorAll('li');
  recipes.forEach(recipe => {
    if (recipe.getAttribute('data-id') === id) {
      recipe.remove();
    }
  });
};

// get real time data from database
const unsub = db.collection('recipes').onSnapshot(snapshot => {
  // console.log(snapshot.docChanges());
  snapshot.docChanges().forEach(change => {
    // console.log(change.doc);
    const doc = change.doc;
    if (change.type === 'added') {
      addRecipe(doc.data(), doc.id);
    } else if (change.type === 'removed') {
      deleteRecipe(doc.id);
    }
  });
});

// add new documents
form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();

  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };
  // return a promise
  db.collection('recipes')
    .add(recipe)
    .then(() => {
      console.log('added');
    })
    .catch(err => {
      console.log(err);
    });
});

// delete documents
lists.addEventListener('click', e => {
  // console.log(e.target.tagName);
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.parentElement.getAttribute('data-id');
    // console.log(id);
    db.collection('recipes')
      .doc(id)
      .delete()
      .then(() => {
        console.log('deleted');
      });
  }
});

// unsub the real-time change
btn.addEventListener('click', () => {
  unsub();
  console.log('disabled real time changes');
});
