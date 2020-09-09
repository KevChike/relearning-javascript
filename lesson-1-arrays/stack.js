let stack = [];

function add(array, element) {
	if (element == "") return array;

	array.push(element);
	return array;
}

function remove(array) {
	array.pop();
	return array;
}

stack = add(stack, 3);
stack = add(stack, 9);
stack = add(stack, 2);

stack = remove(stack);

console.log(stack);
