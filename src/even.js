function even (array) {
	let newArray = [];
	for (i=0; i<array.length; i++) {
		if (array[i] % 2 == 0) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}

console.log(even([54, 2, 3, 5, ,4, 6]))

module.exports = { even }