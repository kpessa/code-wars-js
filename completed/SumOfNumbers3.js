const getSum = (a, b, diff = Math.abs(a - b), avg = (a + b) / 2) => (diff + 1) * avg;

// function getSum(a, b) {
// 	if (a === b) return a;
// 	let diff = Math.abs(a - b) + 1;
// 	return Array(diff)
// 		.fill(0)
// 		.map((_, i) => i + Math.min(a, b))
// 		.reduce((acc, curr) => acc + curr);
// }

module.exports.getSum = getSum;
