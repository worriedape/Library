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

function displayBooks() {
  const bookTable = document.getElementById("book-list");
  while (bookTable.rows.length > 1) {
    bookTable.deleteRow(1);
  }

  myLibrary.forEach((book, index) => {
    let newRow = bookTable.insertRow(-1);

    newRow.insertCell(0).textContent = book.title;
    newRow.insertCell(1).textContent = book.author;
    newRow.insertCell(2).textContent = book.pages;

    let readCell = newRow.insertCell(3);
    let readCheckbox = document.createElement("input");
    readCheckbox.type = "checkbox";
    readCheckbox.checked = book.alreadyRead === "Yes";
    readCheckbox.addEventListener("change", () => {
      book.alreadyRead = readCheckbox.checked ? "Yes" : "Not yet";
    });
    readCell.appendChild(readCheckbox);

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

function addBookToLibrary() {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const read = document.getElementById("read");

  if (!title.value || !author.value || !pages.value) {
    alert("Please fill in all fields");
    return;
  }

  const newBook = new Book(
    title.value,
    author.value,
    parseInt(pages.value),
    read.checked
  );
  myLibrary.push(newBook);

  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;

  displayBooks();
}

document.addEventListener("DOMContentLoaded", () => {
  displayBooks();
  document
    .getElementById("add-book")
    .addEventListener("click", addBookToLibrary);
});
