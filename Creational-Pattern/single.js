// class Single {
//   constructor() {
//     if (Single.instance == null) {
//       this.arr = [];
//       Single.instance = this;
//     }
//     return Single.instance;
//   }
//   add(val) {
//     this.arr.push(val);
//   }
//   size() {
//     console.log(this.arr.length);
//   }
// }

// export function getInstance() {
//   const arr = new Single();
//   Object.freeze(arr);
//   return arr;
// }

let count = 0;

export const increment = () => {
  count++;
  return count;
};
