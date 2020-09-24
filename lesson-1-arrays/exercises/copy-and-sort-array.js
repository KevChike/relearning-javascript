/* 
Exercise:

We have an array of strings arr. We’d like to have a sorted copy of it, but keep 
arr unmodified.

Create a function copySorted(arr) that returns such a copy.
*/

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
	return arr.map((value) => value).sort();
}

/*
// Alternative function:
function copySorted(arr) {
  return arr.slice().sort();
}
*/

let sorted = copySorted(arr);

console.log("Original array: ", arr);
console.log("Sorted array: ", sorted);
