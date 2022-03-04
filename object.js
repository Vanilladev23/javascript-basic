let emailKey = 'email';

let myInfo = {
  name: 'Lam Nguyen',
  age: '18',
  address: 'Ho Chi Minh City',
  [emailKey]: 'lam@gmail.com',
  getEmail: function () {
    return this[emailKey];
  },
};
// Function --> Phương thức / method
// Other --> Thuộc tính / property
console.log(myInfo.getEmail());

// Object constructor
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
let author = new User('Lam', 'Nguyen', 'Avatar');
let user = new User('John', 'Nguyen', 'Avatar');

author.title = 'JavaScript';
user.comment = 'Hello';

// Object prototype - Basic

User.prototype.className = 'F8';
User.prototype.getClassName = function () {
  return this.className;
};
console.log(author.className);
console.log(user.getClassName());
