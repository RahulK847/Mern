// List of programming languages
// const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach to iterate over the array
// const values = coding.forEach((item) => {
//     return item;
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter numbers greater than 4 using filter method
// const newNums = myNums.filter((num) => num > 4);

// Same filtering logic using forEach instead of filter
// const newNums = [];
// myNums.forEach((num) => { 
//     if (num > 4) newNums.push(num); 
// });

// console.log(newNums);

// List of books with details
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filtering books belonging to the "History" genre
let userBooks = books.filter((bk) => bk.genre === 'History');

// Further filtering history books that were published after 1995
userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === "History");

console.log(userBooks);
