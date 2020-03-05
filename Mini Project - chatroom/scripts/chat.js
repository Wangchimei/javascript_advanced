// adding new chat document
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
    this.unsub;
  }
  async addChat(message) {
    //format chat object
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    };

    //save document
    const response = await this.chats.add(chat);
    return response;
  }
  getChat(callback) {
    // where: 3 args (property name we want to access, compare operator, value you wanna check)
    // value of this.room will be determined on the first time calling getChat(), therefore we need to unsub first
    this.unsub = this.chats
      .where('room', '==', this.room)
      .orderBy('created_at')
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            // update the UI
            callback(change.doc.data());
          }
        });
      });
  }

  updateName(username) {
    this.username = username;
  }

  updateRoom(room) {
    // change the current room and unsub to changes
    this.room = room;
    console.log(`room updated to ${room}`);
    if (this.unsub) {
      this.unsub;
    }
    return this;
  }
}

const chatroom = new Chatroom('general', 'Kimmy');

chatroom.getChat(data => {
  console.log(data);
});

// Simulate
// setTimeout(() => {
//   chatroom.updateRoom('gaming').getChat(data => {
//     console.log(data);
//   });
//   chatroom.updateName('Butter');
//   chatroom.addChat('sure!!');
// }, 3000);
