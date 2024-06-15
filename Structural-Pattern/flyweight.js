const a = "This is a String";
const b = "This is a String";

console.log(a === b);

// class Book {
//   constructor(title, author, id) {
//     this.title = title;
//     this.author = author;
//     this.id = id;
//   }
// }

// const books = new Map();

// const createBook = (title, author, id) => {
//   const existingBook = books.has(id);

//   if (existingBook) {
//     return books.get(id);
//   }

//   const book = new Book(title, author, id);
//   books.set(id, book);

//   return book;
// };

// const bookList = [];

// const addBook = (title, author, id, availability, sales) => {
//   const book = {
//     ...createBook(title, author, id),
//     sales,
//     availability,
//     id,
//   };

//   bookList.push(book);
//   return book;
// };

// addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
// addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
// addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
// addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
// addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

// // const book1 = createBook("Harry Potter", "JK Rowling", "AB123");
// // const book2 = createBook("Harry Potter", "JK Rowling", "AB123");
// // console.log(book1 === book2);

// console.log(bookList);
