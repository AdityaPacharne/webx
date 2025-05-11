import { createInterface } from 'readline';
import { Book } from './book';
import { User } from './user';
import { Library } from './library';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const library = new Library();
let nextBookId = 1;
let nextUserId = 1;

function ask(question: string): Promise<string> {
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
        library.addBook(new Book(nextBookId++, title, author));
        console.log("✅ Book added.");
        break;

      case '2':
        const name = await ask("Enter user name: ");
        library.addUser(new User(nextUserId++, name));
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
