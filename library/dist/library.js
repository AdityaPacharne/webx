"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addUser(user) {
        this.users.push(user);
    }
    borrowBook(bookId, userId) {
        const book = this.books.find(b => b.id === bookId);
        const user = this.users.find(u => u.id === userId);
        if (!book)
            return "Book not found.";
        if (!user)
            return "User not found.";
        if (!book.available)
            return "Book already borrowed.";
        book.available = false;
        return `${user.name} borrowed "${book.title}"`;
    }
    returnBook(bookId) {
        const book = this.books.find(b => b.id === bookId);
        if (!book)
            return "Book not found.";
        if (book.available)
            return "Book wasn't borrowed.";
        book.available = true;
        return `"${book.title}" has been returned.`;
    }
    listBooks() {
        return this.books
            .map(b => `${b.id}. ${b.title} by ${b.author} (${b.available ? "Available" : "Borrowed"})`)
            .join('\n') || "No books available.";
    }
    listUsers() {
        return this.users.map(u => `${u.id}. ${u.name}`).join('\n') || "No users registered.";
    }
}
exports.Library = Library;
