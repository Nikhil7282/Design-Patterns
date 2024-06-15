class Iterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.items.length;
  }
  next() {
    return this.items[this.index++];
  }
  each(cb) {
    while (this.hasNext()) {
      cb(this.next());
    }
  }
  map(cb) {
    const result = [];
    this.index = 0;
    this.each((item) => result.push(cb(item)));
    return result;
  }
}

const items = [1, 3, "aqwe", true];

const it = new Iterator(items);

it.each((item) => console.log(item));

const arr = it.map((item) => (typeof item === "number" ? item * 2 : item));
console.log(arr);
