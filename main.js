// console.log('Hello World!');
const display = document.querySelector('.book-display');
const form = document.querySelector('.form');

const myLibrary = [];

function Book(name, author) {
    this.name = name;
    this.author = author;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(name, author) {
    let b = new Book(name, author);
    myLibrary.push(b);
}

// addBookToLibrary("Alex", "Dumitru");
// console.log(myLibrary);

function displayBooks() {
    display.innerHTML = '';

    for(let i = 0; i < myLibrary.length; i++)
    {
        let card = document.createElement('div');
        card.classList.add('card');
        let bookName = document.createElement('h3');
        let bookAuthor = document.createElement('h3');

        bookName.classList.add("book-name");
        bookAuthor.classList.add("book-author");

        bookName.textContent = myLibrary[i].name;
        bookAuthor.textContent = "by " + myLibrary[i].author;

        card.appendChild(bookName);
        card.appendChild(bookAuthor);

        display.appendChild(card);
    }
}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee");
addBookToLibrary("Pride and Prejudice", "Jane Austen");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald");
addBookToLibrary("Moby-Dick", "Herman Melville");
addBookToLibrary("War and Peace", "Leo Tolstoy");

displayBooks();

form.addEventListener('submit', (e) =>
{
    e.preventDefault();
    const bookName = document.getElementById('book-name').value.trim();
    const bookAuthor = document.getElementById('book-author').value.trim();

    if (bookName === '') {
        alert('Book name must be filled out.');
        return;
    }
    if (bookAuthor === '') {
        alert('Author must be filled out.');
        return;
    }

    addBookToLibrary(bookName, bookAuthor);
    displayBooks();
    form.reset();
})