function sortedSum(a) {
	let result = [];

	for (let i = 0; i < a.length; i++) {
		let arr = a.slice(0, i + 1).sort((a, b) => a - b);
		let sum = arr.reduce((p, c, i) => p + c * (i + 1), 0);
		console.log('Sum:', sum);
		result.push(sum);
	}

	return result.reduce((p, c) => p + c, 0) % 1000000007;
}

module.exports.sortedSum = sortedSum;
