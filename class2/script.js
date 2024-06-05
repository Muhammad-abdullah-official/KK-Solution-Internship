//Question no 01
// swap two numbers
let a = 5,
  b = 4,
  c;

// swapping numbers using third variable

c = a;
a = b;
b = c;

console.log('\n---------- Solution of question 1 ----------\n');

console.log('Before swap a = 5', 'After swap a = ', a);
console.log('Before swap b = 4', 'After swap b = ', b);

// -----------End of Question 01 ---------------

//Question no 02
// // swap single character using ascii code

let letter1 = 'a';
let letter2 = 'z';

console.log('\n---------- Solution of question 2 ----------\n');

console.log('Before swap letters are, char1: ', letter1);
console.log('Before swap letters are, char2: ', letter2);

let asciiLet1 = letter1.charCodeAt(0);
console.log(asciiLet1);
let asciiLet2 = letter2.charCodeAt(0);

asciiLet1 = asciiLet1 + asciiLet2;
asciiLet2 = asciiLet1 - asciiLet2;
asciiLet1 = asciiLet1 - asciiLet2;

console.log('After swap letters are: ');
console.log(
  'char1: ',
  String.fromCharCode(asciiLet1),
  'char2: ',
  String.fromCharCode(asciiLet2)
);

// -----------End of Question 02 ---------------

// Question no 03
// swap two numbers without using third variable
let num1 = 5;
let num2 = 4;

console.log('\n---------- Solution of question 3 ----------\n ');

console.log(`Before swap Num1 = ${num1}`);
console.log(`Before swap Num2 = ${num2}`);

// swapping numbers with addition and subtraction logic
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log('After swap num1 = ', num1);
console.log('After swap num2 = ', num2);

// -----------End of Question 03 ---------------

// Question no 04
class Item {
  constructor(name, quantity, price) {
    if (name === '' || !name) {
      console.log('Invalid name');
      name = 'Empty';
    }
    if (quantity < 0 || !quantity) {
      console.log('Invalid quantity entered!');
      quantity = 0;
    }
    if (price < 0) {
      console.log('Invalid price');
      price = 0;
    }
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  // method add addStock
  add_stock(amount) {
    this.quantity += amount;
  }
  // method to remove stock amount
  remove_stock(amount) {
    if (amount <= this.quantity) {
      this.quantity -= amount;
    } else {
      console.log(
        `Invalid quantity enetered! Available quantity is ${this.quantity}`
      );
      return;
    }
  }

  // method to calculate value
  calculate_value() {
    if (this.quantity <= 0) {
      console.log('Invalid Quantity enetered');
      return 0;
    } else {
      return (this.quantity * this.price).toFixed(2);
    }
  }
}

console.log('\n ---------- Solution of question 4 ----------\n ');

// obj1 for laptop
const obj1 = new Item('Laptop', 0, 57000.0);
console.log('obj1', obj1);
// obj2 for phone
const obj2 = new Item('Phone', 2, 25000.6);
// obj3 for headphones
const obj3 = new Item('HeadPhones', 240, 350.0);

// obj1.add_stock(5);
obj2.remove_stock(8);
obj3.remove_stock(30);

// Inventory status
console.log('\nInventory After Updates:');
console.log(
  `${obj1.quantity} ${
    obj1.name
  } in stock, total price: ${obj1.calculate_value()}/Rs`
);
console.log(
  `${obj2.quantity} ${
    obj2.name
  } in stock, total price: ${obj2.calculate_value()}/Rs`
);
console.log(
  `${obj3.quantity} ${
    obj3.name
  } in stock, total price: ${obj3.calculate_value()}/Rs`
);
