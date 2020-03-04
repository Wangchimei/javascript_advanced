const lists = document.querySelector('ul');
const form = document.querySelector('form');

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

// get data from database
db.collection('recipes')
  .get()
  .then(snapshot => {
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
      // console.log(doc.data());
      // console.log(doc.id);
      addRecipe(doc.data(), doc.id);
    });
  })
  .catch(error => {
    console.log(error);
  });

// add new documents
form.addEventListener('submit', e => {
  e.preventDefault();

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
