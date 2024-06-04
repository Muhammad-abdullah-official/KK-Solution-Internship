//Question no 01
// swap two numbers
let a = 5,
  b = 4,
  c;

// swapping numbers using third variable

c = a;
a = b;
b = c;

console.log('Before swap a = 5', 'after swap a = ', a);
console.log('Before swap b = 4', 'after swap b = ', b);

//Question no 02
// swap single character using ascii code
function swapChars(str, index1, index2) {
  // Check for valid input
  if (
    str === '' ||
    str.length < 2 ||
    index1 < 0 ||
    index2 < 0 ||
    index1 >= str.length ||
    index2 >= str.length
  ) {
    console.log(
      'Invalid input: String must be non-empty, and indexes must be within string bounds.'
    );
  }

  // Get the ASCII codes of the characters at the given indexes
  const charCode1 = str.charCodeAt(index1);
  console.log('Ascii code for char 1: ', charCode1);
  const charCode2 = str.charCodeAt(index2);
  console.log('Ascii code for char 2: ', charCode2);
  // Create a new array of characters from the string
  const charArray = str.split('');

  // Swap the characters in the array using temporary variable
  let temp = charArray[index1];
  charArray[index1] = charArray[index2];
  charArray[index2] = temp;

  // Join the characters back into a string
  const swappedString = charArray.join('');

  return swappedString;
}

// Example usage
const originalString = 'KK, Solutions!';
const swappedString = swapChars(originalString, 0, 7);

console.log('Original string:', originalString);
console.log('Swapped string:', swappedString);

// Question no 03
// swap two numbers without using third variable
let num1 = 5,
  num2 = 4;

console.log(`Num1 before swap ${num1}`);
console.log(`Num2 before swap ${num2}`);

// swapping numbers with addition and subtraction logic
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log('After swap num1 = ', num1);
console.log('After swap num2 = ', num2);

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

// obj1 for laptop
const obj1 = new Item('', 0, 57000.0);
console.log('obj1', obj1);
// obj2 for phone
const obj2 = new Item('Phone', 80, 25000.0);
// obj3 for headphones
const obj3 = new Item('HeadPhones', 240, 350.0);

// Add and remove stock
// obj1.add_stock(5);
// obj2.remove_stock(8);
// obj3.remove_stock(30);

// Print updated inventory status
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
