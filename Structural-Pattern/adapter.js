function oldPayment() {
  this.processPayment = (amount, currency) => {
    return `Processed payment of ${amount} ${currency} with old processor.`;
  };
}

function newPayment() {
  this.login = function (credentials) {
    return true;
  };
  this.pay = (amount, currency) => {
    return `Processed payment of ${amount} ${currency} with new processor.`;
  };
}

let old = new oldPayment();
const oldPayStatus = old.processPayment(1000, "Rs");
console.log(oldPayStatus);

const citiesHabitantsInMillions = [
  { city: "London", habitants: 8.9 },
  { city: "Rome", habitants: 2.8 },
  { city: "New york", habitants: 8.8 },
  { city: "Paris", habitants: 2.1 },
];

// The new city we want to add
const mumbai = {
  city: "Mumbai",
  habitants: 123100000,
};

// Our adapter function takes our city and converts the habitants property
//to the same format all the other cities have
const toMillionsAdapter = (city) => {
  city.habitants = parseFloat((city.habitants / 1000000).toFixed(1));
};

toMillionsAdapter(BuenosAires);

// We add the new city to the array
citiesHabitantsInMillions.push(BuenosAires);

// And this function returns the largest habitants number
const MostHabitantsInMillions = () => {
  return Math.max(...citiesHabitantsInMillions.map((city) => city.habitants));
};

console.log(MostHabitantsInMillions());
