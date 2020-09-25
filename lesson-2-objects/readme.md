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
