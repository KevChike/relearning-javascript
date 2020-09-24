/* 
Exercise:

Write the function camelize(str) that changes dash-separated words like 
“my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.
*/

function camelize(str) {
	return str
		.split("-")
		.map((word, index) => {
			return index !== 0 ? word[0].toUpperCase() + word.slice(1) : word;
		})
		.join("");
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
