// Relearning Arrays

// Creating and accessing a JavaScript array
let cars1 = ["BMW", "Ford", "Volvo", "Ferrari"];
console.log("The second element is: ", cars1[1]);

// Arrays are special type of object in JavaScript
let persons1 = ["John", "Doe", "23", "Male"];
console.log("What type is an array in JavaScript: ", typeof persons1);

// Length of an array
let cars2 = ["BMW", "Ford", "Volvo", "Ferrari"];
console.log("The length of the car array is: ", cars2.length);

// How to access the last element of an array using the length property
let cars3 = ["BMW", "Ford", "Volvo", "Ferrari"];
let last = cars3[cars3.length - 1];
console.log("The last element of the array is: ", last);

// push() method: Adding new element to the end of an array
let people1 = ["Mary", "Ben", "Lisa"];
people1.push("Jenny"); // returns the new length of the array
console.log("push() example 1: ", people1);

// pop() method: Removes the last element from an array
let persons2 = ["Josh", "Kelly", "Ann", "Moses"];
persons2.pop(); // returns "Moses"
console.log("pop() example 1: ", persons2);

// unshift() method: Add a new element to the beginning of an array
let fruits1 = ["Orange", "Mango", "Pear"];
fruits1.unshift("Apple"); // returns the new length of the array
console.log("unshift() example 1: ", fruits1);

// splice() method: Adding new elements to an array using the splice() method
let items1 = ["Banana", "Orange", "Apple", "Mango"];
items1.splice(2, 0, "Lemon", "Pear");
console.log("splice() example 1: ", items1);

let items2 = ["Banana", "Orange", "Apple", "Mango"];
items2.splice(-1, 0, "Kiwi");
console.log("splice() example 2: ", items2);

// splice() method: Removing elements from an array using the splice() method
let itemsSold1 = ["Butter", "Chocolate", "Milk", "Bread", "Oil", "Rice"];
itemsSold1.splice(1, 2); // returns the removed items ["Chocolate", "Milk"]
console.log("splice() example 3: ", itemsSold1);

let itemsSold2 = ["Butter", "Chocolate", "Milk", "Bread", "Oil", "Rice"];
itemsSold2.splice(-3, 2); // returns the removed item ["Bread", "Oil"]
console.log("splice() example 4: ", itemsSold2);

// concat() method: Merge two or more existing arrays together and return a new array
let cars4 = ["BMW", "Ford", "Volvo", "Ferrari"];
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let names1 = ["Jane", "Mary", "Larry"];
let mixedItems = cars4.concat(fruits2, names1);
console.log("concat() example 1: ", mixedItems);

let ages1 = [23, 35, 56];
let newAges = ages1.concat(78, 89, 16);
console.log("concat() example 2: ", newAges);

// slice() method: Extract a section of an array and returns a new array
let fruits3 = ["Mango", "Orange", "Pear", "Apple", "Pineapple", "Cashew"];
let juice1 = fruits3.slice(1);
console.log("slice() example 1: ", juice1);

let fruits4 = ["Mango", "Orange", "Pear", "Apple", "Pineapple", "Cashew"];
let juice2 = fruits4.slice(-2);
console.log("slice() example 2: ", juice2);

let fruits5 = ["Mango", "Orange", "Pear", "Apple", "Pineapple", "Cashew"];
let juice3 = fruits5.slice(1, 3);
console.log("slice() example 3: ", juice3);

let fruits6 = ["Mango", "Orange", "Pear", "Apple", "Pineapple", "Cashew"];
let juice4 = fruits6.slice(2, -1);
console.log("slice() example 4: ", juice4);

var cars5 = ["BMW", "Ford", "Volvo", "Ferrari", "Benz", "Toyota", "Honda"];
var forSale1 = cars5.slice(-4, -1);
console.log("slice() example 5: ", forSale1);

// This example is a bit tricky but not advised to be used
let cars6 = ["BMW", "Ford", "Volvo", "Ferrari", "Benz", "Toyota", "Honda"];
let forSale2 = cars6.slice(-5, 6);
console.log("slice() example 6: ", forSale2);
/* Looks like the last example starts counting the endpoint from the beginning
and sees the first element as index 1 not 0, then it displays only the elements
from the start point and stops at where the end point stops (i.e. counting from
left to right and using the first element as 1 not 0) */

// toString() method: Converts an array to a comman seperated string
let cars7 = ["BMW", "Ford", "Volvo", "Ferrari", "Benz", "Toyota", "Honda"];
let result1 = cars7.toString();
console.log("toString() example 1: ", result1);

// sort() method: Sorts an array in ascending order
let fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7.sort();
console.log("sort() example 1: ", fruits7);

// Sorting numeric arrays (Ascending order)
let nums1 = [4, 8, 1, 30, -1, -9, 8, 2];
nums1.sort((a, b) => a - b);
console.log("sort() example 2: ", nums1);

// Sorting numeric arrays (Descending order)
let nums2 = [4, 8, 1, 30, -1, -9, 8, 2];
nums2.sort((a, b) => b - a);
console.log("sort() example 3: ", nums2);

// Sorting a numeric array in random order using the  Fisher Yates method
let points1 = [40, 100, 1, 5, 25, 10];

for (i = points1.length - 1; i > 0; i--) {
	j = Math.floor(Math.random() * i);
	k = points1[i];
	points1[i] = points1[j];
	points1[j] = k;
}

console.log("sort() example 4: ", points1);

// Highest (max) and lowest (min) values in an array
let points2 = [40, 100, 1, 5, 25, 10];
points2.sort((a, b) => a - b); // sorted in ascending order
let maxValue = points2[points2.length - 1];
let minValue = points2[0];
console.log("max value in an array: ", maxValue);
console.log("min value in an array: ", minValue);

// Sorting an array of objects
let persons3 = [
	{ name: "John", age: 26 },
	{ name: "Larry", age: 15 },
	{ name: "Peter", age: 30 },
	{ name: "Banks", age: 56 },
];

//sort by age
persons3.sort((a, b) => a.age - b.age);
console.log("sort() example 5: ", persons3);

//sort by name
persons3.sort((a, b) => {
	let firstParam = a.name.toLowerCase();
	let secondParam = b.name.toLowerCase();

	if (firstParam < secondParam) return -1;
	if (firstParam > secondParam) return 1;
	return 0;
});
console.log("sort() example 6: ", persons3);

// reverse() method: This method reverses the elements in an array
let cars8 = ["BMW", "Ford", "Volvo", "Ferrari"];
cars8.sort();
cars8.reverse();
console.log("reverse() example 1: ", cars8);

// forEach() method: This method calls a callback function once for each element of the array
let numbers1 = [7, 9, 2, 3, 6];

numbers1.forEach((value) => console.log("forEach() example 1: ", value));

let values1 = [1, 2, 3, 4, 5];
let squareOfValues = [];

values1.forEach((element) => squareOfValues.push(element * element));

console.log("forEach() example 2: ", squareOfValues);

// map() method: This method returns a new array by performing a function on each elements of the array
let numbers2 = [2, 5, 6, 10];
let newNumbers = numbers2.map((element) => element * 2);
console.log("map() example 1: ", newNumbers);

// filter() method: It returns the array of elements that passes a test.
let ages2 = [12, 21, 18, 17, 19, 25, 14];

let validAge = ages2.filter((element) => element >= 18);

console.log("filter() example 1: ", validAge);

// filter the prime numbers
let numbers3 = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let primeNumbers = numbers3.filter((element) => {
	for (let i = 2; element > i; i++) {
		if (element % i == 0) {
			return false;
		}
	}
	return element > 1;
});

console.log("filter() example 2: ", primeNumbers);

// reduce() method: runs a function on each array element to produce a single value.
let numbers4 = [2, 4, 6, 8];
let sum = numbers4.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
});
console.log("reduce() example 1: ", sum);

// Joining words using the reduce() method
let words = ["Hello", "and", "how", "are", "you"];
let reduced = words.reduce((accumulator, currentValue) => {
	return accumulator + " " + currentValue;
});
console.log("reduce() example 2: ", reduced);

// Get the maximum number
let numbers5 = [4, 2, 7, 1, 3];
let maximum = numbers5.reduce((accumulator, currentValue) => {
	return Math.max(accumulator, currentValue);
});
console.log("reduce() example 3: ", maximum);

// Flatten an array of arrays
let arrays1 = [
	[0, 1],
	[2, 3],
	[4, 5],
];
let flattened = arrays1.reduce((accumulator, currentValue) => {
	return accumulator.concat(currentValue);
});
console.log("reduce() example 4: ", flattened);

// every() method: tests whether all elements in the array pass a test
let maxSpeed = 120;
let speedRecords = [90, 60, 100, 80];
let isBelowMaxSpeed = speedRecords.every((value) => value < maxSpeed);
console.log("every() example 1: ", isBelowMaxSpeed);

// some() method: check if some array values pass a test.
let numbers6 = [1, 2, 3, 4, 5];
let hasEvenNumber = numbers6.some((value) => value % 2 === 0);
console.log("some() example 1: ", hasEvenNumber);

// indexOf() method
let fruits8 = ["Apple", "Orange", "Apple", "Mango"];
let selectedFruit = fruits8.indexOf("Orange");
console.log("indexOf() example 1: ", selectedFruit);

let beasts = ["ant", "bison", "camel", "duck", "bison"];
// start searching from index 2
console.log("indexOf() example 1: ", beasts.indexOf("bison", 2));

// lastIndexOf() method
let fruits9 = ["Apple", "Orange", "Apple", "Mango"];
let lastAppearance = fruits9.lastIndexOf("Apple");
console.log("lastIndexOf() example 1: ", lastAppearance);

// includes() method
let arr1 = [1, 0, 7, 3, 9, 2];
console.log("includes() example 1: ", arr1.includes(3));
