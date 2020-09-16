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
nums.sort(function (a, b) {
	return a - b;
});
console.log("sort() example 2: ", nums);

// Sorting numeric arrays (Descending order)
var nums = [4, 8, 1, 30, -1, -9, 8, 2];
nums.sort(function (a, b) {
	return b - a;
});
console.log("sort() example 3: ", nums);

// Sorting a numeric array in random order using the  Fisher Yates method
var points = [40, 100, 1, 5, 25, 10];

for (i = points.length - 1; i > 0; i--) {
	j = Math.floor(Math.random() * i);
	k = points[i];
	points[i] = points[j];
	points[j] = k;
}

console.log("sort() example 4: ", points);

// Highest (max) and lowest (min) values in an array
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
	return a - b;
}); // sorted in ascending order
var maxValue = points[points.length - 1];
var minValue = points[0];
console.log("max value in an array: ", maxValue);
console.log("min value in an array: ", minValue);

// Sorting an array of objects
var persons = [
	{ name: "John", age: 26 },
	{ name: "Larry", age: 15 },
	{ name: "Peter", age: 30 },
	{ name: "Banks", age: 56 },
];

//sort by age
persons.sort(function (a, b) {
	return a.age - b.age;
});
console.log("sort() example 5: ", persons);

//sort by name
persons.sort(function (a, b) {
	var firstParam = a.name.toLowerCase();
	var secondParam = b.name.toLowerCase();

	if (firstParam < secondParam) return -1;
	if (firstParam > secondParam) return 1;
	return 0;
});
console.log("sort() example 6: ", persons);

// reverse() method: This method reverses the elements in an array
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
cars.sort();
cars.reverse();
console.log("reverse() example 1: ", cars);

// forEach() method: This method calls a callback function once for each element of the array
var numbers = [7, 9, 2, 3, 6];

numbers.forEach(function (value) {
	console.log("forEach() example 1: ", value);
});

var values = [1, 2, 3, 4, 5];
var squareOfValues = [];

values.forEach(function (element) {
	squareOfValues.push(element * element);
});

console.log("forEach() example 2: ", squareOfValues);

// map() method: This method returns a new array by performing a function on each elements of the array
var numbers = [2, 5, 6, 10];
var newNumbers = numbers.map(function (element) {
	return element * 2;
});
console.log("map() example 1: ", newNumbers);

// filter() method: It returns the array of elements that passes a test.
var ages = [12, 21, 18, 17, 19, 25, 14];

var validAge = ages.filter(function (element) {
	return element >= 18;
});

console.log("filter() example 1: ", validAge);

// filter the prime numbers
var numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

var primeNumbers = numbers.filter(function (element) {
	for (let i = 2; element > i; i++) {
		if (element % i == 0) {
			return false;
		}
	}
	return element > 1;
});

console.log("filter() example 2: ", primeNumbers);

// reduce() method: runs a function on each array element to produce a single value.
var numbers = [2, 4, 6, 8];
var sum = numbers.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue;
});
console.log("reduce() example 1: ", sum);

// Join words
var words = ["Hello", "and", "how", "are", "you"];
var reduced = words.reduce(function (accumulator, currentValue) {
	return accumulator + " " + currentValue;
});
console.log("reduce() example 2: ", reduced);

// Get the maximu number
var numbers = [4, 2, 7, 1, 3];
var maximum = numbers.reduce(function (accumulator, currentValue) {
	return Math.max(accumulator, currentValue);
});
console.log("reduce() example 3: ", maximum);

// Flatten an array of arrays
var arrays = [
	[0, 1],
	[2, 3],
	[4, 5],
];
var flattened = arrays.reduce(function (accumulator, currentValue) {
	return accumulator.concat(currentValue);
});
console.log("reduce() example 4: ", flattened);
