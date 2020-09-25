# JavaScript Objects

## What is a JavaScript Object

A JavaScript object is a collection of key-value pairs and these ke-value pairs
cann be referred to as properties. An object in JavaScript can be created using
the object literal `{}`. You can also created an object using the
**"object constructor"** syntax, that is, `new Object()` but it is not advisible.

The value of the properties of an `object` can be any data type or even a function.

**Example**

```
let person = {
	firstName: "John",
	lastName: "Doe",
	age: 28,
	isMarried: false,
	hobbies: ["football", "scrabble", "swimming"],
	shout: function() {
		console.log("ahhhh...");
	}
};
```
