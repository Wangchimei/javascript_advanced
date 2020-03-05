// DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const channelBtn = document.querySelectorAll('.channel-btn');

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

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', 'Kimmy');

// get the chats and render
chatroom.getChat(data => chatUI.render(data));

channelBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    const id = e.target.id;
    chatroom.updateRoom(id).getChat(data => chatUI.render(data));
  });
});
