# JavaScript Arrays

## What is a JavaScript array?

A JavaScript array is a type of data structure that can store multiple values in a single variable.
An example can be a list of car names. An array in JavaScript can be represented as shown below;

```
var cars = ["BMW", "Ford", "Volvo", "Ferrari"];
```

You can also use the new keyword in JavaScript to create an array but it is advisable to use the first
method above

```
var cars = new Array("BMW", "Ford", "Volvo", "Ferrari");
```

## Accessing the elements of an array

To access the element of an array, you have to refer to the index number. The index number is the position
of an element in an array.
In JavaScript, the index number of the first element in an array is 0. If we are to access the second
element in a JavaScript array, we will do that as shown below;

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
