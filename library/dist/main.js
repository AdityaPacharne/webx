"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("readline");
const book_1 = require("./book");
const user_1 = require("./user");
const library_1 = require("./library");
const rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
const library = new library_1.Library();
let nextBookId = 1;
let nextUserId = 1;
function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
}
async function main() {
    console.log("📚 Welcome to the Library System");
    while (true) {
        console.log(`
1. Add Book
2. Add User
3. List Books
4. List Users
5. Borrow Book
6. Return Book
7. Exit
`);
        const choice = await ask("Choose an option: ");
        switch (choice.trim()) {
            case '1':
                const title = await ask("Enter book title: ");
                const author = await ask("Enter author name: ");
                library.addBook(new book_1.Book(nextBookId++, title, author));
                console.log("✅ Book added.");
                break;
            case '2':
                const name = await ask("Enter user name: ");
                library.addUser(new user_1.User(nextUserId++, name));
                console.log("✅ User added.");
                break;
            case '3':
                console.log(library.listBooks());
                break;
            case '4':
                console.log(library.listUsers());
                break;
            case '5':
                const bId = parseInt(await ask("Enter book ID: "));
                const uId = parseInt(await ask("Enter user ID: "));
                console.log(library.borrowBook(bId, uId));
                break;
            case '6':
                const rId = parseInt(await ask("Enter book ID: "));
                console.log(library.returnBook(rId));
                break;
            case '7':
                rl.close();
                return;
            default:
                console.log("❌ Invalid choice. Try again.");
        }
    }
}
main();
