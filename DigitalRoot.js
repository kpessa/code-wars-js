function sumOfDigits(n) {
	for (var sum = 0; n > 0; sum += n % 10, n = Math.floor(n / 10));
	return sum;
}

function digital_root(n) {
	while (n > 9) n = sumOfDigits(n);
	return n;
}

module.exports.digital_root = digital_root;
module.exports.sumOfDigits = sumOfDigits;
