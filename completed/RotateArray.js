function rotateArray(arr) {
	let res = [];
	for (let c = arr[0].length - 1; c >= 0; c--) {
		let row = [];
		for (let r = 0; r < arr.length; r++) {
			row.push(arr[r][c]);
		}
		res.push(row);
	}
	return res;
}

module.exports.rotateArray = rotateArray;
