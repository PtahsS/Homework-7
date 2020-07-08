
function flat (arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			newArr = newArr.concat(flat(arr[i]));
		} else {
		newArr.push(arr[i]);
		}

	}
	return newArr;
}



console.log(flat([
	[[[1, 2], [3, 4]], 5, 6], [7, 8, [9, 10]], [11, [12, 13]]
]));



module.exports = { flat }