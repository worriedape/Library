// Book constructor
function Book(title, author, pages, alreadyRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.alreadyRead = alreadyRead ? "Yes" : "Not yet";
}

const myLibrary = [
  {
    title: "Cuentos completos",
    author: "Jorge Luis Borges",
    pages: 955,
    alreadyRead: "Yes",
  },
  {
    title: "Ulysess",
    author: "James Joyce",
    pages: 1500,
    alreadyRead: "Yes",
  },
  {
    title: "Bible",
    author: "Moses",
    pages: 2001,
    alreadyRead: "Not yet",
  },
];

// Function to display all books
function displayBooks() {
  const bookTable = document.getElementById("book-list");
  // Clear existing rows except headers
  while (bookTable.rows.length > 1) {
    bookTable.deleteRow(1);
  }

  myLibrary.forEach((book, index) => {
    let newRow = bookTable.insertRow(-1);

    // Add book details
    newRow.insertCell(0).textContent = book.title;
    newRow.insertCell(1).textContent = book.author;
    newRow.insertCell(2).textContent = book.pages;

    // Add read status checkbox
    let readCell = newRow.insertCell(3);
    let readCheckbox = document.createElement("input");
    readCheckbox.type = "checkbox";
    readCheckbox.checked = book.alreadyRead === "Yes";
    readCheckbox.addEventListener("change", () => {
      book.alreadyRead = readCheckbox.checked ? "Yes" : "Not yet";
    });
    readCell.appendChild(readCheckbox);

    // Add delete button
    let deleteCell = newRow.insertCell(4);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayBooks();
    });
    deleteCell.appendChild(deleteButton);
  });
}

// Function to add new book
function addBookToLibrary() {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const read = document.getElementById("read");

  // Basic validation
  if (!title.value || !author.value || !pages.value) {
    alert("Please fill in all fields");
    return;
  }

  // Create and add new book
  const newBook = new Book(
    title.value,
    author.value,
    parseInt(pages.value),
    read.checked
  );
  myLibrary.push(newBook);

  // Reset form
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;

  // Refresh display
  displayBooks();
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  displayBooks();
  document
    .getElementById("add-book")
    .addEventListener("click", addBookToLibrary);
});

/* const myLibrary = [
  {
    title: "Cuentos completos",
    author: "Jorge Luis Borges",
    pages: 955,
    alreadyRead: "Yes",
  },
  {
    title: "Ulysess",
    author: "James Joyce",
    pages: 1500,
    alreadyRead: "Yes",
  },
  {
    title: "Bible",
    author: "Moses",
    pages: 2001,
    alreadyRead: "Not yet",
  },
];

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const addBook = document.getElementById("add-book");

function Book() {
  this.title = title.value;
  this.author = author.value;
  this.pages = pages.value;
  this.alreadyRead = function () {
    read.checked ? "Yes" : "Not yet";
  };
}

function addRow() {
  const bookTable = document.getElementById("book-list"); 
  for (let i = 0; i < myLibrary.length; i++) {
    let newRow = bookTable.insertRow(i);
    newRow.insertCell(0).textContent = myLibrary[i].title;
    newRow.insertCell(1).textContent = myLibrary[i].author;
    newRow.insertCell(2).textContent = myLibrary[i].pages;
  }
}

function addBookToLibrary() {
  addBook.addEventListener(
    "click",
    () => {
      myLibrary.push(
        new Book(title.value, author.value, pages.value, read.checked)
      );
    },
    addRow()
  );
}
 */
