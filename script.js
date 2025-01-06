const myLibrary = [];

const booksDisplay = document.querySelector(".books");

function display() {
  const oneBook = document.createElement("p");
  myLibrary.map((i) => (oneBook.textContent = i));
  booksDisplay.appendChild(oneBook);
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

function Book() {
  this.title = title.value;
  this.author = author.value;
  this.pages = pages.value;
  this.alreadyRead = function () {
    read.checked ? "Yes" : "Not yet";
  };
}

const addBook = document.getElementById("add-book");

function addBookToLibrary() {
  addBook.addEventListener("click", () => {
    myLibrary.push(new Book());
    display();
  });
}
