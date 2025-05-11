"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(id, title, author, available = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.available = available;
    }
}
exports.Book = Book;
