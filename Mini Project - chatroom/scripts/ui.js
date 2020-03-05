// render chat template to DOM
// clear the list of chats when room changes
class ChatUI {
  constructor(list) {
    this.list = list;
  }
  render(data) {
    const time = dateFns.distanceInWordsToNow(data.created_at.toDate(), {
      addSuffix: true,
    });
    const html = `
    <li class="list-group-item">
      <span class="username"> ${data.username} </span>
      <span class="time text-right">${time}</span>
      <div class="message ml-2"> ${data.message} </div>
    </li>
    `;
    this.list.innerHTML += html;
  }
}
