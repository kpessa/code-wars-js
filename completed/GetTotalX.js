function getTotalX(a, b) {
	const isDivisible = (x, arr) => arr.every(divisor => x % divisor === 0);
	const isFactor = (x, arr) => arr.every(numerator => numerator % x === 0);

	let count = 0;
	for (let i = a[0]; i <= b[b.length - 1]; i++) {
		if (isDivisible(i, a) && isFactor(i, b)) count++;
	}
	return count;
}

module.exports.getTotalX = getTotalX;
