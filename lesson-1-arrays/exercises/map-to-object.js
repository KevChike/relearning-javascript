let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((value) => {
	return {
		fullName: `${value.name} ${value.surname}`,
		id: value.id,
	};
});

console.log(usersMapped);
