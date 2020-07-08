function odd (array) {
	let newArray  = [];
	for (i = 0; i < array.length; i++) {
		if (array[i] % 2 == 1) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}

console.log(odd([23, 2, 13, 1, 3, 90, 5]))

module.exports = { odd }
