// Relearning Arrays

// Creating and accessing a JavaScript array
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
console.log("The second element is: ", cars[1]);

// Arrays are special type of object in JavaScript
var person = ["John", "Doe", "23", "Male"];
console.log("What type is an array in JavaScript: ", typeof person);

// Length of an array
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
console.log("The length of the car array is: ", cars.length);

// How to access the last element of an array using the length property
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
var last = cars[cars.length - 1];
console.log("The last element of the array is: ", last);

// push() method: Adding new element to the end of an array
var people = ["Mary", "Ben", "Lisa"];
people.push("Jenny"); // returns the new length of the array
console.log("Added a new element at the end of the array", people);

// pop() method: Removes the last element from an array
var persons = ["Josh", "Kelly", "Ann", "Moses"];
persons.pop(); // returns "Moses"
console.log("Removes the last element", persons);

// unshift() method: Add a new element to the beginning of an array
var fruits = ["Orange", "Mango", "Pear"];
fruits.unshift("Apple"); // returns the new length of the array
console.log("Add a new element at the beginning of the array", fruits);

// splice() method: Adding new elements to an array using the splice() method
var items = ["Banana", "Orange", "Apple", "Mango"];
items.splice(2, 0, "Lemon", "Pear");
console.log("Add new elements at index 2: ", items);

var items = ["Banana", "Orange", "Apple", "Mango"];
items.splice(-1, 0, "Kiwi");
console.log("Add new element at index -1 counting from right to left: ", items);

// splice() method: Removing elements from an array using the splice() method
var itemsSold = ["Butter", "Chocolate", "Milk", "Bread", "Oil", "Rice"];
itemsSold.splice(1, 2); // returns the removed items ["Chocolate", "Milk"]
console.log("Remove 2 items starting from index 1 (left to right):", itemsSold);

var itemsSold = ["Butter", "Chocolate", "Milk", "Bread", "Oil", "Rice"];
itemsSold.splice(-2, 1); // returns the removed item ["Oil"]
console.log("Remove second item from right to left", itemsSold);

// concat() method: Merge two or more existing arrays together and return a new array
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var names = ["Jane", "Mary", "Larry"];
var mixedItems = cars.concat(fruits, names);
console.log(mixedItems);

var ages1 = [23, 35, 56];
var newAges = ages1.concat(78, 89, 16);
console.log(newAges);
