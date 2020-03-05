// DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');

// add a new chat
newChatForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom
    .addChat(message)
    .then(() => {
      newChatForm.reset();
    })
    .catch(err => console.log(err));
});

// update username
nameForm.addEventListener('submit', e => {
  e.preventDefault();
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  newNameForm.reset();
  // flash message
  updateMsg.classList.remove('d-none');
  updateMsg.innerHTML = `Your name is updated to <strong>${newName}</strong>`;
  setTimeout(() => {
    updateMsg.innerText = '';
    updateMsg.classList.add('d-none');
  }, 2000);
  // store in local storage
  localStorage.setItem('username', newName);
});

// update chat room
rooms.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    id = e.target.id;
    chatroom.updateRoom(id);
    chatUI.clear();
    chatroom.getChat(data => chatUI.render(data));
  }
});

// check local storage for username
const username = localStorage.username ? localStorage.username : 'Guest';

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

// get the chats and render
chatroom.getChat(data => chatUI.render(data));
