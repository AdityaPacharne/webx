import { Book } from './book';
import { User } from './user';

export class Library {
  private books: Book[] = [];
  private users: User[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  borrowBook(bookId: number, userId: number): string {
    const book = this.books.find(b => b.id === bookId);
    const user = this.users.find(u => u.id === userId);

    if (!book) return "Book not found.";
    if (!user) return "User not found.";
    if (!book.available) return "Book already borrowed.";

    book.available = false;
    return `${user.name} borrowed "${book.title}"`;
  }

  returnBook(bookId: number): string {
    const book = this.books.find(b => b.id === bookId);
    if (!book) return "Book not found.";
    if (book.available) return "Book wasn't borrowed.";
    book.available = true;
    return `"${book.title}" has been returned.`;
  }

  listBooks(): string {
    return this.books
      .map(b => `${b.id}. ${b.title} by ${b.author} (${b.available ? "Available" : "Borrowed"})`)
      .join('\n') || "No books available.";
  }

  listUsers(): string {
    return this.users.map(u => `${u.id}. ${u.name}`).join('\n') || "No users registered.";
  }
}
