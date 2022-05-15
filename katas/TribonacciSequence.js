function tribonacci(signature, n) {
	let result = signature.slice(0, n);
	for (let i = 3; i < n; i++) result.push(result[i - 3] + result[i - 2] + result[i - 1]);
	return result;
}

module.exports.tribonacci = tribonacci;
