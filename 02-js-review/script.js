const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

const book = getBook(3);

const {
  title,
  author,
  pages,
  publicationDate,
  hasMovieAdaptation,
  translations,
} = book;

console.log(title, author);

// Destructuring/Rest operator  --> Can only be placed at the end of the operation
const [primary, secondary, ...otherGenres] = book.genres;
const genres = book.genres;
console.log(primary, secondary, otherGenres);

// Destructuring/Spread operator
const newGenres = [...genres, "nice"];
console.log(newGenres);

// Arrow functions
function getYear(str) {
  return str.split("-")[0];
}
const getYearArrow = (str) => str.split("-")[0];

//If we have multiple lines, we have to use {} and return
console.log(getYearArrow(publicationDate));

//Adding a new property to an object                               //Overriding a property the pages)
const updatedBook = { ...book, moviePublicationDate: "2022-01-01", pages: 300 };
updatedBook;
//=======================================================

//Template literals
const summary = `${title}, a ${pages}-page long book is a book published in ${getYearArrow(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

//=======================================================
// Ternary operator
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;
//=======================================================

//Short-circuit evaluation means in a logical operation, if the first condition is true, the second condition is not evaluated
console.log(true && "Hello");
console.log(false && "Hello");
console.log(hasMovieAdaptation && "This book has a movie");

//Thrusty and Falsy values
//falsy values: 0, "", null, undefined, NaN, false
console.log("jonas" && "test");
console.log(0 && "test");

console.log(true || "Test");
console.log(false || "Test"); //can use to our advantage to set default values

console.log(book.translations.spanish || "No translation available");

//Consequence of short-circuit evaluation for faulty values
console.log(book.reviews.librarything?.reviewsCount);
const countWrong = book.reviews.librarything?.reviewsCount || "no data";
console.log(countWrong);

//Another operator
const count = book.reviews.librarything?.reviewsCount ?? "no data";
console.log(count);

//Optional chaining, if the property is not available, it will return undefined (before the ?)
function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads.reviewsCount;
  // ?? is used to set a default value if the property is not available also known as nullish coalescing operator
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;

  return goodread + librarything;
}

console.log(getTotalReviewCount(book));

//=============================================
//Need to be a master of the 3 functional array methods, maps, filter, reduce
//THey don't mutate the original array, they return a new array
//Map

const books = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2);

x;

const titles = books.map((book) => book.title);
titles;

const essentialData1 = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});

//or this way without return
const essentialData2 = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialData2;

//Filter
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log("number of longbooks", longBooks.length);

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);

//Reduce
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

//Sort

const arr = [3, 7, 1, 8];
//const sorted = arr.sort((a, b) => a - b); //not necessary to store it in another array because sort mutates
const sorted2 = arr.slice().sort((a, b) => a - b); //not good to mutate in react front end so better to use slice
sorted2;
arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

//Immutable arrays
//how to delete elements, add, update of an array without changing the original one

//1) add book object to array, spread
const newBook = {
  id: 6,
  title: "The Hobbit",
  author: "J. R. R. Tolkien",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

//2) delete book object from array, filter
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

//3) //update book object in array, map
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 2000 } : book
);
booksAfterUpdate;
