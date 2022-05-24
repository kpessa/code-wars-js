function divisors(n) {
	for (var result = [], i = 2; i < n / 2 + 1; i++) if (n % i == 0) result.push(i);
	return result.length == 0 ? `${n} is prime` : result;
}

module.exports.divisors = divisors;
