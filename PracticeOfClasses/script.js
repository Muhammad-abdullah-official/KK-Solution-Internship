class Items {
  constructor(name, quantity, price) {
    this.p_name = name;
    this.p_quantity = quantity;
    this.p_price = price;
  }

  add_quantity(amount) {
    this.p_quantity += amount;
  }

  remove_quantity(amount) {
    this.p_quantity -= amount;
  }

  price_calculate() {
    return this.p_price * this.p_quantity;
  }
}

const obj1 = new Items('Phone', 20, 2500.0);

obj1.add_quantity(5);
console.log(
  `${obj1.p_quantity} ${
    obj1.p_name
  } in stock, with price: ${obj1.price_calculate()}`
);

// --------------------Classes practice
// Library system
class Book {
  constructor(title, author, ISBN, genre) {
    this.title = title;
    this.author = author;
    this.ISBN = Book.generateUniqueISBN(ISBN);
    this.genre = genre;
    this.isCheckedOut = false;
    this.dueDate = null;
  }

  static generateUniqueISBN(providedISBN) {
    return `LIB-${providedISBN}`;
  }

  getSummary() {
    return `${this.title} by ${this.author}, ISBN: ${this.ISBN}`;
  }

  checkOut() {
    if (!this.isCheckedOut) {
      this.isCheckedOut = true;
      const currentDate = new Date();
      this.dueDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
      console.log(
        `${this.title} is now checked out at:${
          currentDate.getMonth() + 1
        }/${currentDate.getDate()}/${currentDate.getFullYear()} Due date: ${this.dueDate.toLocaleDateString(
          'en-US'
        )}`
      );
    } else {
      console.log(`${this.title} is already checked out.`);
    }
  }

  checkIn() {
    if (this.isCheckedOut) {
      this.isCheckedOut = false;
      this.dueDate = null;
      const currentDate = new Date();
      console.log(
        `${this.title} is now checked in at: ${
          currentDate.getMonth() + 1
        }/${currentDate.getDate()}/${currentDate.getFullYear()} `
      );
    } else {
      console.log(`${this.title} is already checked in.`);
    }
  }
}

const book1 = new Book(
  'The Lord of the Rings',
  'J.R.R. Tolkien',
  '9780261102694',
  'Fantasy'
);
const book2 = new Book(
  'Pride and Prejudice',
  'Jane Austen',
  '9780140435225',
  'Romance'
);

console.log(book1.getSummary());
book1.checkOut();
console.log(book1.getSummary());
book1.checkIn();

book2.checkIn();
console.log(book2.getSummary());

// Practice question
// Banking System

// Create a BankAccount class that represents a bank account. The class should have the following properties and methods:

// Properties:

// accountNumber: a unique identifier for the account (generated automatically)
// owner: the name of the account owner
// balance: the current balance of the account (initially 0)
// transactions: an array of transaction objects (initially empty)
// Methods:

// deposit(amount): adds the specified amount to the balance and creates a new transaction object with the type "deposit"
// withdraw(amount): subtracts the specified amount from the balance and creates a new transaction object with the type "withdrawal" (only if the balance is sufficient)
// getBalance(): returns the current balance
// getTransactionHistory(): returns an array of all transaction objects
// toString(): returns a string representation of the account, including the account number, owner, and balance
// Transaction Object:

// type: either "deposit" or "withdrawal"
// amount: the amount of the transaction
// date: the date of the transaction (generated automatically)
// Example Usage:

// Open In Editor
// Edit
// Copy code
// const account = new BankAccount("John Doe");
// account.deposit(100);
// account.withdraw(50);
// console.log(account.getBalance()); // 50
// console.log(account.getTransactionHistory());
// // [
// //   { type: "deposit", amount: 100, date: <Date> },
// //   { type: "withdrawal", amount: 50, date: <Date> }
// // ]
// console.log(account.toString());
// // "Account #1234 (John Doe) - Balance: $50"
