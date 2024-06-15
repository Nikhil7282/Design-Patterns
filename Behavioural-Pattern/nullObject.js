class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === "Admin";
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }
  hasAccess() {
    return false;
  }
}

const users = [
  new User(1, "name"),
  new User(2, "second"),
  new User(3, "Admin"),
];

function getUser(id) {
  const user = users.find((user) => user.id === id);
  if (user == null) {
    return new NullUser();
  } else {
    return user;
  }
}

function printUser(id) {
  const user = getUser(id);
  console.log("Hello " + user.name);

  if (user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed");
  }
  // let name = "Guest";
  // if (user != null && user.name != null) {
  //   name = user.name;
  // }

  // if (user != null && user.hasAccess != null && user.hasAccess()) {
  //   console.log("You have access");
  // } else {
  //   console.log("You are not allowed");
  // }
}

printUser(1);
printUser(2);
printUser(3);
printUser(4);
