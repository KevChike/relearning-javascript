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
console.log("push() example 1: ", people);

// pop() method: Removes the last element from an array
var persons = ["Josh", "Kelly", "Ann", "Moses"];
persons.pop(); // returns "Moses"
console.log("pop() example 1: ", persons);

// unshift() method: Add a new element to the beginning of an array
var fruits = ["Orange", "Mango", "Pear"];
fruits.unshift("Apple"); // returns the new length of the array
console.log("unshift() example 1: ", fruits);

// splice() method: Adding new elements to an array using the splice() method
var items = ["Banana", "Orange", "Apple", "Mango"];
items.splice(2, 0, "Lemon", "Pear");
console.log("splice() example 1: ", items);

var items = ["Banana", "Orange", "Apple", "Mango"];
items.splice(-1, 0, "Kiwi");
console.log("splice() example 2: ", items);

// splice() method: Removing elements from an array using the splice() method
var itemsSold = ["Butter", "Chocolate", "Milk", "Bread", "Oil", "Rice"];
itemsSold.splice(1, 2); // returns the removed items ["Chocolate", "Milk"]
console.log("splice() example 3: ", itemsSold);

var itemsSold = ["Butter", "Chocolate", "Milk", "Bread", "Oil", "Rice"];
itemsSold.splice(-3, 2); // returns the removed item ["Bread", "Oil"]
console.log("splice() example 4: ", itemsSold);

// concat() method: Merge two or more existing arrays together and return a new array
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var names = ["Jane", "Mary", "Larry"];
var mixedItems = cars.concat(fruits, names);
console.log("concat() example 1: ", mixedItems);

var ages1 = [23, 35, 56];
var newAges = ages1.concat(78, 89, 16);
console.log("concat() example 2: ", newAges);

// slice() method: Extract a section of an array and returns a new array
var fruits = ["Mango", "Orange", "Pear", "Apple", "Pineapple", "Cashew"];
var juice = fruits.slice(1);
console.log("slice() example 1: ", juice);

var fruits = ["Mango", "Orange", "Pear", "Apple", "Pineapple", "Cashew"];
var juice = fruits.slice(-2);
console.log("slice() example 2: ", juice);

var fruits = ["Mango", "Orange", "Pear", "Apple", "Pineapple", "Cashew"];
var juice = fruits.slice(1, 3);
console.log("slice() example 3: ", juice);

var fruits = ["Mango", "Orange", "Pear", "Apple", "Pineapple", "Cashew"];
var juice = fruits.slice(2, -1);
console.log("slice() example 4: ", juice);

var cars = ["BMW", "Ford", "Volvo", "Ferrari", "Benz", "Toyota", "Honda"];
var forSale = cars.slice(-4, -1);
console.log("slice() example 5: ", forSale);

// This example is a bit tricky but not advised to be used
var cars = ["BMW", "Ford", "Volvo", "Ferrari", "Benz", "Toyota", "Honda"];
var forSale = cars.slice(-5, 6);
console.log("slice() example 6: ", forSale);
/* Looks like the last example starts counting the endpoint from the beginning
and sees the first element as index 1 not 0, then it displays only the elements
from the start point and stops at where the end point stops (i.e. counting from
left to right and using the first element as 1 not 0) */

// toString() method: Converts an array to a comman seperated string
var cars = ["BMW", "Ford", "Volvo", "Ferrari", "Benz", "Toyota", "Honda"];
var result = cars.toString();
console.log("toString() example 1: ", result);

// sort() method: Sorts an array in ascending order
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log("sort() example 1: ", fruits);

// Sorting numeric arrays (Ascending order)
var nums = [4, 8, 1, 30, -1, -9, 8, 2];
nums.sort(function(a, b) {
	return a - b;
});
console.log("sort() example 2: ", nums);

// Sorting numeric arrays (Ascending order)
var nums = [4, 8, 1, 30, -1, -9, 8, 2];
nums.sort(function(a, b) {
	return b - a;
});
console.log("sort() example 3: ", nums);
