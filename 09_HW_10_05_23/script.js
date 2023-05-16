//Реализовать возможность добавления в библиотеку книг, с проверкой на уникальность (isbn должен быть уникальным);
//Реализовать поиск книги в библиотеке;
//Реализовать возможность распечатки информации о нашей библиотеке;
function addDataToLibrary(inputDate) {
  const fields = inputDate.split(";");
  if (fields.length == 4) {
    const book = new Book(fields[0], fields[1], fields[2], fields[3]);
    library.push(book);
  }
}

const library = [];
let inputDate = prompt('Enter book data separate by ";"');

//TODO
while (inputDate) {//нажал cancel->null
  addDataToLibrary(inputDate);
  inputDate = prompt('Enter book data separate by ";"');
}

printLibrary();
//1;2;3;4 - 4 отрезка строки/борка информации, разделенные тремя символами ;

function printLibrary() {
  for (let i = 0; i < library.length; i++) {
    const element = library[i];
    console.log(element.toString());
  }
}

function findBook(library, isbn) {
  //TODO return index of book, if book not exists -1
}

function Book(isbn, title, author, year) {
  this.isbn = isbn;
  this.title = title;
  this.author = author;
  this.year = +year;
  this.toString = function () {
    return `ISBN: ${this.isbn}, Title: ${this.author},Author: ${this.author}, Year of publishing: ${this.year}`;
  };
}
