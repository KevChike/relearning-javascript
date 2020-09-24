/* 
Exercise:

Write a function filterRange(arr, a, b) that gets an array arr, looks for 
elements between a and b in it and returns an array of them.

The function should not modify the array. It should return the new array.
*/

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
	return arr.filter((value) => value >= a && value <= b);
}

let filtered = filterRange(arr, 1, 4);

console.log("Filtered array: ", filtered);
console.log("Original array: ", arr);
