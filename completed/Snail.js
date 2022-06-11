function rotateArray(arr) {
	if (arr.length == 0) return [];
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

function snail(snailMap) {
	let res = [];

	while (snailMap.length > 0) {
		res = res.concat(snailMap.shift());
		snailMap = rotateArray(snailMap);
	}

	return res;
}

module.exports.snail = snail;
