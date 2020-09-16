# JavaScript Arrays

## What is a JavaScript array?

A JavaScript array is a type of data structure that can store multiple values in
a single variable. An example can be a list of car names. An array in JavaScript
can be represented as shown below;

```
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
```

You can also use the `new` keyword in JavaScript to create an array but it is
NOT advisable, instead stick to the first method above.

```
var cars = new Array("BMW", "Ford", "Volvo", "Ferrari");
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
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
var name = cars[1];
console.log(name);

// Output
Ford
```

## Changing the element in an array

You can change or replace an element in a JavaScript array, as shown below;

```
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
cars[1] = "Jeep";

// If we now try to access the second element in the array
var name = cars[1];
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
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
console.log(cars.length)

// Output
4
```

**NOTE:** The length property always return one more than the highest index number.
Example, from the above the highest index is `3` but the length property will return `4`.

#### How to access the last element of an array using the length property

```
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
var last = cars[cars.length - 1];
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
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
cars.push('Benz'); // returns 5

// if we display the entire elements in the array, we should see 'Benz' at the end of the array
console.log(cars);
```

### pop()

The `pop()` method remove the last element from an array. This method returns the
last element that was removed

**Example**

```
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
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
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
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
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
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
var fruits = ["Banana", "Orange", "Apple", "Mango"];
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
var fruits = ["Banana", "Orange", "Apple", "Mango", "Pear", "Pineapple"];
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
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var names = ["Jane", "Mary", "Larry"];
var mixedItems = cars.concat(fruits, names);

console.log(mixedItems);
// Returns ["BMW", "Ford", "Volvo", "Ferrari", "Banana", "Orange", "Apple", "Mango", "Jane", "Mary", "Larry"]
```

**NOTE:** The `concat()` method can also take strings as arguments

**Example**

```
var ages1 = [23, 35, 56];
var newAges = ages1.concat(78, 89, 16);

console.log(newAges); // returns [23, 35, 56, 78, 89, 16]
```

### slice()

The `slice()` method extracts a section of an array and returns a new array

**Example**

```
var fruits = ["Mango", "Orange", "Pear", "Apple", "Pineapple"];
var juice = fruits.slice(2);

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
var fruits = ["Mango", "Orange", "Pear", "Apple", "Pineapple"];
var juice = fruits.slice(1, 3);

console.log(juice); // returns ["Orange", "Pear"]
```

Remember that if the **second parameter** is not provided, the end point will be
the last element of the array whether the **first parameter** is positive or negative.

**Examples**

```
var fruits = ["Mango", "Orange", "Pear", "Apple", "Pineapple", "Cashew"];
var juice = fruits.slice(1);
console.log(juice);
// returns ["Orange", "Pear", "Apple", "Pineapple", "Cashew"]

var fruits = ["Mango", "Orange", "Pear", "Apple", "Pineapple", "Cashew"];
var juice = fruits.slice(-2);
console.log(juice);
// returns ["Pineapple", "Cashew"]

var fruits = ["Mango", "Orange", "Pear", "Apple", "Pineapple", "Cashew"];
var juice = fruits.slice(1, 3);
console.log(juice);
// returns ["Orange", "Pear"]

var fruits = ["Mango", "Orange", "Pear", "Apple", "Pineapple", "Cashew"];
var juice = fruits.slice(2, -1);
console.log(juice);
// returns ["Pear", "Apple", "Pineapple"]

var cars = ["BMW", "Ford", "Volvo", "Ferrari", "Benz", "Toyota", "Honda"];
var forSale = cars.slice(-4, -1);
console.log(forSale);
// returns ["Ferrari", "Benz", "Toyota"]

// This example is a bit tricky but not advised to be used
var cars = ["BMW", "Ford", "Volvo", "Ferrari", "Benz", "Toyota", "Honda"];
var forSale = cars.slice(-5, 6);
console.log(forSale);
// returns ["Volvo", "Ferrari", "Benz", "Toyota"]
/* Looks like the last example starts counting the endpoint from the beginning
and sees the first element as index 1 not 0, then it displays only the elements
from the start point and stops at where the end point stops (i.e. counting from
left to right and using the first element as 1 not 0) */
```

### toString()

It converts an array to a comma seperated string

```
var cars = ["BMW", "Ford", "Volvo", "Ferrari", "Benz", "Toyota", "Honda"];
var result = cars.toString();
console.log(result);
// The above will return BMW, Ford, Volvo, Ferrari, Benz, Toyota, Honda
```

**NOTE:** All JavaScript objects have a toString() method.

### sort()

The `sort()` method sorts an array in ascending order

```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
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
var nums = [4, 8, 1, 30, -1, -9, 8, 2];
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
var nums = [4, 8, 1, 30, -1, -9, 8, 2];
nums.sort(function (a, b) { return a - b }); // sort in ascending order
console.log("sort() example 2: ", nums);
// The above will return [-9, -1, 1, 2, 4, 8, 8, 30]

// sort in descending order
var nums = [4, 8, 1, 30, -1, -9, 8, 2];
nums.sort(function (a, b) { return b - a });
console.log("sort() example 2: ", nums);
// The above will return [30, 8, 8, 4, 2, 1, -1, -9]
```

**How the compare function works in sorting of array**
The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60), the sort function will sort 40 as a value lower than 100.

```
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
cars.sort();
cars.reverse();
console.log("reverse() example 1: ", cars);
// The above will return ["Volvo", "Ford", "Ferrari", "BMW"]
```

**Sorting a numeric array in random order using the Fisher Yates method**

```
var points = [40, 100, 1, 5, 25, 10];

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
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); // sorted in ascending order
var maxValue = points[points.length - 1];
var minValue = points[0];
console.log(maxValue);
console.log(minValue);
```

**Sorting an array of objests**
JavaScript arrays can also contain objects as elements of an array. To sort an
array with objects as it's elements, we will use the `compare function`.

```
var persons = [
	{name: "John", age: 26},
	{name: "Larry", age: 15},
	{name: "Peter", age: 30},
]

// sort by age
persons.sort(function (a, b) { return a.age - b.age });
console.log(persons);

// sort by name
persons.sort(function (a, b) {
	var firstParam = a.name.toLowerCase();
	var secondParam = b.name.toLowerCase();

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
var numbers = [7, 9, 2, 3, 6];

numbers.forEach(function (value) {
	console.log(value);
});

// Example 2:
var values = [1, 2, 3, 4, 5];
var squareOfValues = [];

values.forEach(function (element) {
	squareOfValues.push(element * element);
});

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
var numbers = [2, 5, 6, 10];
var newNumbers = numbers.map(function (element) {
	return element * 2;
});
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
var ages = [12, 21, 18, 17, 19, 25, 14];

var validAge = ages.filter(function (element) {
	return element >= 18;
});

console.log(validAge); // returns [21, 18, 19, 25]
```

### reduce()

The `reduce()` method runs a function on each array element to produce a single value.
The `reduce()` method works from left-to-right in the array and does not reduce the original array.

**Note** that the callback function in the `reduce()` method takes 4 arguments:

- The Accumulator (the initial value / previously returned value)
- The item value
- The item index
- The array itself

**Example**

```
var numbers = [2, 4, 6, 8];
var sum = numbers.reduce(function (accumulator, value) {
	return accumulator + value;
});
console.log(sum);

var numbers = [4, 2, 7, 1, 3];
var maximum = numbers.reduce(function (accumulator, value) {
	return Math.max(accumulator, value);
});
console.log(maximum);
```
