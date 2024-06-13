// Q1: Extract and return the 'firstName' and 'lastName' properties as a single string from the 'person' object.
const person1 = { firstName: 'John', lastName: 'Doe', age: 30 };
const fullName1 = `${person1.firstName} ${person1.lastName}`;
console.log(fullName1); // Expected output: 'John Doe'

// Q2: Create a new object by merging the 'details1' and 'details2' objects.
const details1 = { name: 'John', age: 25 };
const details2 = { city: 'New York', hobby: 'Soccer' };
const mergedDetails = { ...details1, ...details2 };
console.log(mergedDetails); // Expected output: { name: 'John', age: 25, city: 'New York', hobby: 'Soccer' }

// Q3: Add a new property 'quantity' with the value 10 to the 'product' object, if it doesn't already exist.
const product3 = { name: 'Laptop', price: 800 };
if (!product3.hasOwnProperty('quantity')) {
  product3.quantity = 10;
}
console.log(product3); // Expected output: { name: 'Laptop', price: 800, quantity: 10 }

// Q4: Check if all properties ('make', 'model', 'year') exist in the 'car' object.
const car4 = { make: 'Toyota', year: 2021 };
const hasAllProperties = ['make', 'model', 'year'].every(prop => prop in car4);
console.log(hasAllProperties); // Expected output: false

// Q5: Create a copy of the 'student' object without modifying the original object.
const student5 = { name: 'Alice', age: 20, grade: 'A' };
const studentCopy = { ...student5 };
console.log(studentCopy); // Expected output: { name: 'Alice', age: 20, grade: 'A' }

// Q6: Check if the 'address' property in the 'user' object is a string.
const user6 = { name: 'John', age: 30, address: '123 Main St' };
const isAddressString = typeof user6.address === 'string';
console.log(isAddressString); // Expected output: true

// Q7: Retrieve the keys of the 'inventory' object as an array.
const inventory7 = { apples: 10, bananas: 5, oranges: 8 };
const inventoryKeys = Object.keys(inventory7);
console.log(inventoryKeys); // Expected output: ['apples', 'bananas', 'oranges']

// Q8: Create an array of all the property values from the 'data' object.
const data8 = { name: 'John', age: 25, city: 'New York' };
const dataValues = Object.values(data8);
console.log(dataValues); // Expected output: ['John', 25, 'New York']

// Q9: Check if any property in the 'book' object has a value of null.
const book9 = { title: 'JavaScript Basics', author: 'John Smith', year: 2020 };
const hasNullValue = Object.values(book9).some(value => value === null);
console.log(hasNullValue); // Expected output: false

// Q10: Reverse the 'fullName' property value in the 'person' object.
const person10 = { fullName: 'John doe' };
const reversedFullName = person10.fullName.split(' ').reverse().join(' ');
console.log(reversedFullName); // Expected output: 'doe John'
