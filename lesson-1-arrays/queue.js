let queue = [];

function enqueue(array, element) {
	if (element == "") return array;

	array.push(element);
	return array;
}

function dequeue(array) {
	array.shift();
	return array;
}

queue = enqueue(queue, 2);
queue = enqueue(queue, 5);
queue = enqueue(queue, 7);

queue = dequeue(queue);

console.log(queue);
