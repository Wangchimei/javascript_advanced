// render chat template to DOM
// clear the list of chats when room changes
class ChatUI {
  constructor(list) {
    this.list = list;
  }
  clear() {
    this.list.innerHTML = '';
  }
  render(data, id) {
    const time = dateFns.distanceInWordsToNow(data.created_at.toDate(), {
      addSuffix: true,
    });
    const html = `
    <li data-id="${id}" class="list-group-item">
      <span class="username"> ${data.username} </span>
      <span class="time text-right">${time}</span>
      <div class="message ml-2"> ${data.message} </div>
      <button class="deleteBtn"> X </button>
    </li>
    `;
    this.list.innerHTML += html;
  }
  deleteList(id) {
    const lists = document.querySelectorAll('li');
    lists.forEach(list => {
      if (list.getAttribute('data-id') === id) {
        list.remove();
      }
    });
  }
}
