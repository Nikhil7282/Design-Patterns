function Customer(first, last, status) {
  this.first = first;
  this.last = last;
  this.status = status;
}

function CustomerPrototype(proto) {
  this.clone = function () {
    let customer = new Customer();
    customer.first = proto.first;
    customer.last = proto.last;
    customer.status = proto.status;
    return customer;
  };
}
Customer.prototype.say = function () {
  console.log(`name: ${this.first} ${this.last}, status: ${this.status}`);
};

function run() {
  const proto = new Customer("n/a", "n/a", "pending");
  // const prototype = new CustomerPrototype(proto);
  const p = Object.create(proto);
  p.say();
  // let customer = prototype.clone();
  // customer.say();
}

run();
