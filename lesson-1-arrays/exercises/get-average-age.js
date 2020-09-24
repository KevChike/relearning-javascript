let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

function getAverageAge(users) {
	let totalAge = users.reduce((accum, value) => {
		return accum + value.age;
	}, 0);

	return totalAge / arr.length;
}

console.log(getAverageAge(arr));
