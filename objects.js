const myLibrary = ["test1", "test2", "test3"];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.info = function () {
        let readStatus = this.read ? "read already." : "not read yet.";
        return `${this.title} by ${this.author}, ${numPages} pages, ${readStatus}`;
    };
}

const btnNewBook = document.querySelector("#btnNewBook");
btnNewBook.addEventListener("click", newBook);

function newBook() {
    const formNewBook = document.createElement("form");
    formNewBook.innerHTML =
        '<fieldset><legend>New Book Details</legend><label for="title">Title <input type="text" name="title" id="title"></label><label for="author">Author <input type="text" name="author" id="author"></label><label for="numPages">Number of Pages <input type="number" name="numPages" id="numPages"></label><p>Have you read this book?</p><label for="readStatusYes">Yes<input type="radio" name="readStatus" id="readStatusYes"></label><label for="readStatusNo">No<input type="radio" name="readStatus" id="readStatusNo"></label><input type="submit" value="Submit"></fieldset>';
    // TODO add prevent default
    const divNewBookForm = document.querySelector('.newBookForm');
    divNewBookForm.appendChild(formNewBook);
    }

function addBookToLibrary() {
    let inputBox = document.getElementById("book");
    let currentBook = inputBox.value;

    myLibrary.push(currentBook);
}

function displayBooks() {
    for (book of myLibrary) {
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(`${book}`));
        document.getElementById("bookbox").appendChild(p);
    }
}
