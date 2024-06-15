class User {
  constructor(name, { age, address, phoneNumber } = {}) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
}

const user = new User("qwert");

console.log(user);
