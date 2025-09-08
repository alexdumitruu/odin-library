// console.log('Hello World!');
const display = document.querySelector('.book-display');


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
    for(let i = 0; i < myLibrary.length; i++)
    {
        let card = document.createElement('div');
        card.classList.add('.card');
        
    }
}

