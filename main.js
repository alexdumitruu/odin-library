// console.log('Hello World!');

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



