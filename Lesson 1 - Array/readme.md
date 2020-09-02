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
