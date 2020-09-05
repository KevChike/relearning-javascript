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
// returnsn ["Pear", "Apple", "Pineapple"]

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

**NOTE:** When sorting numbers, it becomes tricky when the array contains negative numbers.

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

### reverse()

The `reverse()` method reverses the elements in an array.

To order the elements in an array containing strings in descending order,
first of all sort the array in ascending order and then reverse it.

```
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
cars.sort();
cars.reverse();
console.log("reverse() example 1: ", cars);
// The above will return ["Volvo", "Ford", "Ferrari", "BMW"]
```
