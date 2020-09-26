// Creating an object
let person1 = {
	firstName: "John",
	lastName: "Doe",
	age: 28,
	isMarried: false,
	hobbies: ["football", "scrabble", "swimming"],
	shout: function () {
		console.log("ahhhh...");
	},
};

console.log("display object: ", person1);

// Access property in an object
console.log("Access property: ", person1.age);

// Add property to an object
person1.height = 5.3;

// Replace the value of a property
person1.age = 30;

// Remove property of an object
delete person1.lastName;

// Computed properties
let prop = "car";

let person2 = {
	name: "James",
	[prop]: "Volvo",
	age: 37,
};
console.log("Computed properties: ", person2.car);

let country = {
	name: "JavaScript Republic",
	population: 300000,
	states: 450,
};

// for..in loop
// Loop over the keys
for (let key in country) {
	console.log("iterate over keys of object: ", key);
}

// You can also loop over the values of the key
for (let key in country) {
	console.log("iterate over values of keys of object: ", country[key]);
}

// in operator
let car = {
	color: "black",
	doors: 4,
	price: 2000,
};

if ("price" in car) console.log("Car is for sale");
