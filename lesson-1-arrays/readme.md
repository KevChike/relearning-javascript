# JavaScript Arrays

## What is a JavaScript array?

A JavaScript array is a type of data structure that can store multiple values in
a single variable. An example can be a list of car names. An array in JavaScript
can be represented as shown below;

```
let cars = ["BMW", "Ford", "Volvo", "Ferrari"];
```

You can also use the `new` keyword in JavaScript to create an array but it is
NOT advisable, instead stick to the first method above.

```
let cars = new Array("BMW", "Ford", "Volvo", "Ferrari");
```

**NOTE**

The maximum length of a JavaScript array is 2^32 (i.e 4,294,967,296). The length
is always a non-negative integer.

## Accessing the elements of an array

To access the element of an array, you have to make reference to the **index number**.
The index number is the position of an element in an array.

In JavaScript, the index number of the first element in an array is 0. If we are
to access the second element in a JavaScript array, we will do that as shown below;

```
let cars = ["BMW", "Ford", "Volvo", "Ferrari"];
let name = cars[1];
console.log(name);

// Output
Ford
```

## Changing the element in an array

You can change or replace an element in a JavaScript array, as shown below;

```
let cars = ["BMW", "Ford", "Volvo", "Ferrari"];
cars[1] = "Jeep";

// If we now try to access the second element in the array
let name = cars[1];
console.log(name);

// Output
Jeep
```

## Arrays are Objects

In JavaScript, arrays are a special type of object. The `typeof` operator in
JavaScript returns `object` for arrays. But it is best we describe an array in
JavaScript as an array not object.

## Array Properties and Method

### The length property

The `length` property in JavaScript return the total number of elements in an array.

```
let cars = ["BMW", "Ford", "Volvo", "Ferrari"];
console.log(cars.length)

// Output
4
```

**NOTE:** The length property always return one more than the highest index number.
Example, from the above the highest index is `3` but the length property will return `4`.

#### How to access the last element of an array using the length property

```
let cars = ["BMW", "Ford", "Volvo", "Ferrari"];
let last = cars[cars.length - 1];
console.log(last)

// Output
Ferrari
```

### push()

The easiest way to add new elements to an array is by using the `push()` method.
The `push()` method add new elements to the end of the array and returns the
new length of the array.

**Example**

```
let cars = ["BMW", "Ford", "Volvo", "Ferrari"];
cars.push('Benz'); // returns 5

// if we display the entire elements in the array, we should see 'Benz' at the end of the array
console.log(cars);
```

### pop()

The `pop()` method remove the last element from an array. This method returns the
last element that was removed

**Example**

```
let cars = ["BMW", "Ford", "Volvo", "Ferrari"];
cars.pop(); // return "Ferrari"

// if we display the entire elements in the array, we will be unable to  should see "Ferrari"
console.log(cars);
```

**NOTE:** The `push()` and `pop()` methods performs all their functions at the
end of the array. If we are to build a stack (Last-in-first-out), both `pop()`
and `push()` will be used for that purpose.

### unshift()

The `unshift()` method add new elements at the beginning of an array. It returns
the new length of the array. The `unshift()` method works like the `push()` method
but it works at the beginning of an array unlike the `push()` method the works at
the end of an array.

**Example**

```
let cars = ["BMW", "Ford", "Volvo", "Ferrari"];
cars.unshift('Benz'); // returns 5

// if we display the entire elements in the array, we should see 'Benz' at the end of the array
console.log(cars);
```

### shift()

The `shift()` method removes an element from the beginning of an array. It returns
the element that was removed from the array. The `shift()` method works like the
`pop()` method but only works at the beginning of an array, unlike the `pop()`
method that works at the ending of an array.

**Example**

```
let cars = ["BMW", "Ford", "Volvo", "Ferrari"];
cars.shift(); // return "Ferrari"

// if we display the entire elements in the array, we will be unable to  should see "Ferrari"
console.log(cars);
```

### splice()

The `splice()` method is used to add and/or remove elements from an array. This
method add and/or remove elements from any position on the array, as specified
in the method. The splice method will return an array of the elements that were removed if any.
It will return an empty array `[]` if no element was removed.

**Using splice() method to add elements to an array**
_Example_

```
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Pear"); // returns empty array since no element was removed
```

- The first parameter defines the position (i.e. index) where the new elements should be added (i.e. **spliced in**)
  _(The counting starts from the left to right if the parameter is a positive number. In this case, the first element on the array is seen as 0 while counting towards the right. If the parameter is a negative number, it will start counting from the right to left of the array starting with the last element of the array as 0, while the next element to it on the left will be since as -1 and so on.)_
- The second parameter defines how many elements should be removed from the index that was stated. **Note:** The
  second parameter can **ONLY** be a positive number for it to work properly.
- The rest of the parameters define the new elements to be add.

From the above example, `('Lemon', 'Pear')` will be added before `'Apple'`

**Using splice() method to remove elements from an array**
_Example_

```
let fruits = ["Banana", "Orange", "Apple", "Mango", "Pear", "Pineapple"];
fruits.splice(1, 2); // returns the removed elements ['orange', 'apple']
```

From the above example, the array will have only 4 elements left in it, which are;
"Banana", "Mango", "Pear", "Pineapple".

The count starts from the left to the right of the array. The deletion starts from
the index that is stated as the **first parameter** and it removes 2 elements starting
from the index that is stated as the **first parameter**.
If the **first parameter** is a negative number, then the count as usual starts from
right to left of the array.

### concat()

The `concat()` method merges two or more arrays and returns it as a new array.
The `concat()` method does not change the existing arrays, it only returns them
merged as a new array. And it can take any number of array arguments.

**Example**

```
let cars = ["BMW", "Ford", "Volvo", "Ferrari"];
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let names = ["Jane", "Mary", "Larry"];
let mixedItems = cars.concat(fruits, names);

console.log(mixedItems);
// Returns ["BMW", "Ford", "Volvo", "Ferrari", "Banana", "Orange", "Apple", "Mango", "Jane", "Mary", "Larry"]
```

**NOTE:** The `concat()` method can also take strings as arguments

**Example**

```
let ages1 = [23, 35, 56];
let newAges = ages1.concat(78, 89, 16);

console.log(newAges); // returns [23, 35, 56, 78, 89, 16]
```

### slice()

The `slice()` method extracts a section of an array and returns a new array

**Example**

```
let fruits = ["Mango", "Orange", "Pear", "Apple", "Pineapple"];
let juice = fruits.slice(2);

console.log(juice); // returns ["Pear", "Apple", "Pineapple"]
```

The **first parameter** in the `slice()` method is the index where the array
should be sliced from. If the **first parameter** is a positive number, it starts
counting from _left to right_ of the array. If the **first parameter** is a
negative number, it starts counting from _right to left_.

The `slice()` method can also accept a **second parameter**. The **second parameter**
determines the number of elements that will be sliced out from the start point
(i.e. the **first parameter**). In this case the end argument is not included

**Example**

```
let fruits = ["Mango", "Orange", "Pear", "Apple", "Pineapple"];
let juice = fruits.slice(1, 3);

console.log(juice); // returns ["Orange", "Pear"]
```

Remember that if the **second parameter** is not provided, the end point will be
the last element of the array whether the **first parameter** is positive or negative.

**Examples**

```
let fruits1 = ["Mango", "Orange", "Pear", "Apple", "Pineapple", "Cashew"];
let juice1 = fruits1.slice(1);
console.log(juice1);
// returns ["Orange", "Pear", "Apple", "Pineapple", "Cashew"]

let fruits2 = ["Mango", "Orange", "Pear", "Apple", "Pineapple", "Cashew"];
let juice2 = fruits2.slice(-2);
console.log(juice2);
// returns ["Pineapple", "Cashew"]

let fruits3 = ["Mango", "Orange", "Pear", "Apple", "Pineapple", "Cashew"];
let juice3 = fruits3.slice(1, 3);
console.log(juice3);
// returns ["Orange", "Pear"]

let fruits4 = ["Mango", "Orange", "Pear", "Apple", "Pineapple", "Cashew"];
let juice4 = fruits4.slice(2, -1);
console.log(juice4);
// returns ["Pear", "Apple", "Pineapple"]

let cars1 = ["BMW", "Ford", "Volvo", "Ferrari", "Benz", "Toyota", "Honda"];
let forSale1 = cars1.slice(-4, -1);
console.log(forSale1);
// returns ["Ferrari", "Benz", "Toyota"]

// This example is a bit tricky but not advised to be used
let cars2 = ["BMW", "Ford", "Volvo", "Ferrari", "Benz", "Toyota", "Honda"];
let forSale2 = cars2.slice(-5, 6);
console.log(forSale2);
// returns ["Volvo", "Ferrari", "Benz", "Toyota"]
/* Looks like the last example starts counting the endpoint from the beginning
and sees the first element as index 1 not 0, then it displays only the elements
from the start point and stops at where the end point stops (i.e. counting from
left to right and using the first element as 1 not 0) */
```

### toString()

It converts an array to a comma seperated string

```
let cars = ["BMW", "Ford", "Volvo", "Ferrari", "Benz", "Toyota", "Honda"];
let result = cars.toString();
console.log(result);
// The above will return BMW, Ford, Volvo, Ferrari, Benz, Toyota, Honda
```

**NOTE:** All JavaScript objects have a toString() method.

### sort()

The `sort()` method sorts an array in ascending order

```
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
// The above should return ["Apple", "Banana", "Mango", "Orange"]
```

**Sorting numeric arrays**

**NOTE:** When sorting numbers, it becomes tricky most especially when you have
negative numbers in the array. This is because JavaScript converts the numbers to
strings before sorting. For further understanding of this, read more about **ASCII**
precisely the **ASCII Table**. You will notice that on the **ASCII Table**, numbers
that are in form of a string a assigned a certain **decimal value**.

```
// Wrong way of sorting a numeric array
let nums = [4, 8, 1, 30, -1, -9, 8, 2];
nums.sort();
console.log("sort() example 2: ", nums);
// The above will return [-1, -9, 1, 2, 30, 4, 8, 8] in stead of [-9, -1, 1, 2, 4, 8, 8, 30]
```

**The right way to sort numeric arrays**
By default, the `sort()` function sorts values as strings. This works well for
strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:

```
// The right way to sort numeric arrays
let nums1 = [4, 8, 1, 30, -1, -9, 8, 2];
nums1.sort((a, b) => a - b); // sort in ascending order
console.log(nums1);
// The above will return [-9, -1, 1, 2, 4, 8, 8, 30]

// sort in descending order
let nums2 = [4, 8, 1, 30, -1, -9, 8, 2];
nums2.sort((a, b) => b - a);
console.log(nums2);
// The above will return [30, 8, 8, 4, 2, 1, -1, -9]
```

**How the compare function works in sorting of array**
The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60), the sort function will sort 40 as a value lower than 100.

```
let cars = ["BMW", "Ford", "Volvo", "Ferrari"];
cars.sort();
cars.reverse();
console.log("reverse() example 1: ", cars);
// The above will return ["Volvo", "Ford", "Ferrari", "BMW"]
```

**Sorting a numeric array in random order using the Fisher Yates method**

```
let points = [40, 100, 1, 5, 25, 10];

for (i = points.length - 1; i > 0; i--) {
	j = Math.floor(Math.random() * i);
	k = points[i];
	points[i] = points[j];
	points[j] = k;
}

console.log(points);
```

**Find the highest or lowest value in an array**
JavaScript doesn't have a built-in function for finding the highest or lowest value in an array.
However, we can still achieve this by returning the highest and lowest index in a sorted array
in order to know the highest (max) and lowest (min) values respectively.

**Example**

```
let points2 = [40, 100, 1, 5, 25, 10];
points2.sort((a, b) => a - b); // sorted in ascending order
let maxValue = points2[points2.length - 1];
let minValue = points2[0];
console.log(maxValue);
console.log(minValue);
```

**Sorting an array of objests**
JavaScript arrays can also contain objects as elements of an array. To sort an
array with objects as it's elements, we will use the `compare function`.

```
let persons = [
	{name: "John", age: 26},
	{name: "Larry", age: 15},
	{name: "Peter", age: 30},
]

// sort by age
persons.sort((a, b) => a.age - b.age);
console.log(persons);

// sort by name
persons.sort((a, b) => {
	let firstParam = a.name.toLowerCase();
	let secondParam = b.name.toLowerCase();

	if (firstParam < secondParam) return -1;
	if (firstParam > secondParam) return 1;
	return 0;
});
console.log(persons);
```

### reverse()

The `reverse()` method reverses the elements in an array.

To order the elements in an array containing strings in descending order,
first of all sort the array in ascending order and then reverse it.

### forEach()

The `forEach()` method calls a function (a callback function) once for each element of the array.
The callback function in the `forEach()` method accepts three (3) parameters;
**value** of the element, the **index** of the element and the **array** itself.

**Example**

```
let numbers = [7, 9, 2, 3, 6];

numbers.forEach((value) => console.log(value));

// Example 2:
let values = [1, 2, 3, 4, 5];
let squareOfValues = [];

values.forEach((element) => squareOfValues.push(element * element));

console.log(squareOfValues); // returns [1, 4, 9, 16, 25]
```

**NOTE:** There is no way to stop or break a `forEach()` loop other than by throwing an exception.
If you need such behavior, the `forEach()` method is the **wrong** tool.

### map()

The `map()` method calls a provided callback function once for each element in an array,
and constructs a new array from the results. The callback function is not called for
missing elements of the array. The `map()` method does not change the original array.

Just like the callback function on the `forEach()` method, the `map()` method has three (3)
parameters in the callback function; **value** of the element, the **index** of the element
and the **array** itself.

**Example**

```
let numbers = [2, 5, 6, 10];
let newNumbers = numbers.map((element) => element * 2);
console.log(newNumbers); // returns [4, 10, 12, 20]
```

**When not to use map()**

You shouldn't be using `map()` if:

- you're not using the array it returns; and/or
- you're not returning a value from the callback.

### filter()

The `filter()` method creates a new array with all elements that passes a test
implemented by the provided function (callback function). If no elements pass the
test, an empty array will be returned. The `filter()` method does not change the original array.

The callback function returns `true` to keep the elements of the array that pass the
test and `false` for those that don't pass the test. Array elements which do not
pass the callback test are simply skipped, and are not included in the new array.

The callback function in the `filter()` method accepts three (3) parameters;
**value** of the element, the **index** of the element and the **array** itself.

**Example**

```
let ages = [12, 21, 18, 17, 19, 25, 14];

let validAge = ages.filter((element) => element >= 18);

console.log(validAge); // returns [21, 18, 19, 25]
```

### reduce()

The `reduce()` method runs a function on each array element to produce a single value.
The function is applied to all array elements one after another and “carries on”
its result to the next call. As function is applied, the result of the previous
function call is passed to the next one as the first argument.

The `reduce()` method works from left-to-right in the array and does not reduce the original array.
**Note** that the callback function in the `reduce()` method takes 4 arguments:

- The Accumulator (the initial value / previously returned value)
- The item value
- The item index
- The array itself

**Example**

```
let numbers1 = [2, 4, 6, 8];
let sum = numbers1.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
});
console.log(sum);

let numbers2 = [4, 2, 7, 1, 3];
let maximum = numbers2.reduce((accumulator, currentValue) => {
	return Math.max(accumulator, currentValue);
});
console.log(maximum);

let arrays1 = [
	[0, 1],
	[2, 3],
	[4, 5],
];
let flattened = arrays1.reduce((accumulator, currentValue) => {
	return accumulator.concat(currentValue);
});
console.log(flattened);
```

### reduceRight()

The `reduceRight()` method works same as the `reduce()` but works from
right-to-left in the array.

**Example**

```
let numbers1 = [2, 4, 6, 8];
let sum = numbers1.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
});
console.log(sum);
```

### every()

The `every()` method tests whether all elements in the array pass the test
implemented by the provided function. It returns a Boolean value.

**Example**

```
let maxSpeed = 120;
let speedRecords = [90, 60, 100, 80];
let isBelowMaxSpeed = speedRecords.every((value) => value < maxSpeed);
console.log(isBelowMaxSpeed); // returns true
```

The callback function in the `every()` method accepts three (3) parameters;
**value** of the element, the **index** of the element and the **array** itself.

### some()

The `some()` method tests whether at least one element in the array passes the
test implemented by the provided function. It returns a Boolean value.

**Example**

```
let numbers = [1, 2, 3, 4, 5];
let hasEvenNumber = numbers.some((value) => value % 2 === 0);
console.log(hasEvenNumber); // return true because an even number is in the array
```
