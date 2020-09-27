# JavaScript Objects

## What is a JavaScript Object

A JavaScript object is a collection of key-value pairs and these ke-value pairs
cann be referred to as properties. An object in JavaScript can be created using
the **object literal** syntax `{}`. You can also created an object using the
**"object constructor"** syntax, that is, `new Object()` but it is not advisible.

The value of the properties of an `object` can be any data type or even a function.
In this case, functions that are found inside an object are referred to as a **methods**.

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

We can access the value of a property in an object by using the **dot notation**.

```
// Considering the person object in the above example

console.log(person.age); // returns 28
```

To add a property to an object, we do the following;

```
// Considering the person object in the above example

person.height = 5.3; // adds the height property to the person object
```

We can also replace the value of a property in an object.

```
// Considering the person object in the above example

person.age = 30 // replaces the age with 30
```

We can also remove a property from an object using the `delete` operator.

```
// Considering the person object in the above example

delete person.lastName; // removes the lastName property from the object
```

**NOTES:**

- We can also use multiword property names, but then they must be quoted.
  Example; `"full name" : "John Doe"`
- For multiword properties, the dot access doesn’t work. You can use square brackets.
  Example; `person["full name"]`
- The last property in the list may end with a trailing comma.
- An object declared as const can be modified.

## Computed properties

We can use square brackets in an object literal, when creating an object.
That’s called computed properties.

**Example**

```
let prop = "car";

let person = {
	name: "James",
	[prop]: "Volvo",
	age: 37,
}
console.log(person.car) // returns Volvo
```

### Property value shorthand

When a property has the same name as a variable, it can be made shorter. Let's
consider the example below.

**Example**

```
function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

// The above can be shorten to
function makeUser(name, age) {
  return {
    name,
    age,
  };
}
```

### Using the “for…in” loop

With the `for...in` loop, we can iterate over all the keys of an object.

**Example**

```
let country = {
	name: "JavaScript Republic",
	population: 300000,
	states: 450,
}

// Loop over the keys
for (let key in country) {
	console.log(key);
}

// You can also loop over the values of the key
for (let key in country) {
	console.log(country[key]);
}
```

### in operator

This operator checks for the existence of a given key in an object. There will
be no error if the property doesn’t exist!

**Example**

```
let car = {
	color: "black",
	doors: 4,
	price: 2000,
}

if ('price' in car) console.log('Car is for sale');
```

### Object copying, references

One of the fundamental differences of objects vs primitives is that they are
stored and copied “by reference”.

Primitive values: strings, numbers, booleans – are assigned/copied “as a whole value”.

For instance:

```
let message = "Hello!";
let phrase = message;
```
