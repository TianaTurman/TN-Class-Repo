function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

  }

  Book.prototype.getSummary = function() {
    console.log(`hey ${this.title} was written by ${this.author} in ${this.year}`)
  };


const myBook = new Book('green eggs and ham', 'Dr. Suess', 1983)
const yourBook = new Book('the shack', 'William P, Young', 2015)
myBook.getSummary();
yourBook.getSummary();
console.log(myBook)