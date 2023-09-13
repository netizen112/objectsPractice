const myLibrary = [];

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
    const newBookDialog = document.querySelector('#addNewBook');
    newBookDialog.showModal();
    //TODO add closing button
    //TODO add prevent default
    //Can close atm by pressing ESC
}

const btnAddNewBookSubmit = document.querySelector('#btnAddNewBookSubmit');
btnAddNewBookSubmit.addEventListener('click', addNewBook);

function addNewBook() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const numPages = document.querySelector('#numPages').value;
    const radioYes = document.querySelector('#readStatusYes');
    let readStatus;

    if (radioYes.checked){
        readStatus = true;
    } else {
        readStatus = false;
    }

    addBookToLibrary(title, author, numPages, readStatus);
    displayBooks();
}

function addBookToLibrary(title, author, numPages, readStatus) {
    const bookObj = new Book(title, author, numPages, readStatus);
    myLibrary.push(bookObj);
}

function displayBooks() {
    let bookbox = document.getElementById('bookbox');
    bookbox.innerHTML = "";
    for (book of myLibrary) {
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(JSON.stringify(book)));
        bookbox.appendChild(p);
    }
}
