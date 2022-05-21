function subarrayValue(arr) {
	let evens = arr.filter((_, i) => i % 2 === 0);
	let odds = arr.filter((_, i) => i % 2 !== 0);
	let evensSum = evens.reduce((a, b) => a + b, 0);
	let oddsSum = odds.reduce((a, b) => a + b, 0);
	return (evensSum - oddsSum) ** 2;
}

function maxSubarrayValue(arr) {
	let max = 0;
	for (let i = 0; i < arr.length; i++)
		for (let j = i + 1; j < arr.length + 1; j++) {
			max = Math.max(max, subarrayValue(arr.slice(i, j)));
		}
	return max;
}

maxSubarrayValue([-1, 2, 3, 4, -5]);

module.exports.maxSubarrayValue = maxSubarrayValue;
module.exports.subarrayValue = subarrayValue;
