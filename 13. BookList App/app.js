// book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class : Handle UR tasks
class UI {
    static displayBooks() {
        const storedBooks = [{
                title: "Book 1",
                author: "Author 1",
                isbn: "23893874"
            },
            {
                title: "Book 2",
                author: "Author 2",
                isbn: "9879987"
            },

        ];
        console.log("Working?");

        const books = storedBooks;
        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
        console.log("Working?");
        const list = document.querySelector("#book-list");

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

}

// Store class: Handles storage


// Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
console.log("Working?")
// Event: Add a book

// Event : Remove a book