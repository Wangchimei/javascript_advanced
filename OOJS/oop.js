class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.points = 0;
  }

  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }

  logout() {
    console.log(`${this.username} just logged out`);
  }

  purchase() {
    this.points += 10;
    console.log(`current points: ${this.points}`);
    return this;
  }
}

class Admin extends User {
  constructor(username, email, account) {
    super(username, email);
    this.account = account;
  }

  deleteUser(targetUser) {
    users = users.filter(user => user.email !== targetUser.email);
    return this;
  }
  logUsers() {
    console.log(users);
  }
}

const userOne = new User('Bmo', 'bmo@example.com');
const userTwo = new User('Test', 'test@example.com');
const userAdmin = new Admin('Admin', 'admin@example.com', 'AS-0122');

let users = [userOne, userTwo, userAdmin];

userAdmin
  .login()
  .deleteUser(userTwo)
  .logUsers();

// userOne
//   .login()
//   .purchase()
//   .purchase();
