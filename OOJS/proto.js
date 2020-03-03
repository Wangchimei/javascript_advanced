// work as a constructor function in class
function User(username, email) {
  this.username = username;
  this.email = email;
}

// methods
User.prototype.login = function() {
  console.log(`${this.username} just logged in`);
  return this;
};

User.prototype.logout = function() {
  console.log(`${this.username} just logged out`);
};

// Prototype-based inheritance
// call(what this keyword should refer, params, params)
function Admin(username, email, title) {
  User.call(this, username, email);
  this.title = title;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(targetUser) {
  users = users.filter(user => user.email !== targetUser.email);
  return this;
};
Admin.prototype.logUsers = function() {
  console.log(users);
};

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
