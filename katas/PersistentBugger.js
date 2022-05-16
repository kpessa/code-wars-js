function persistence(num) {
	for (var count = 0; num > 9; count++)
		num = num
			.toString()
			.split('')
			.reduce((a, b) => a * b);
	return count;
}

module.exports.persistence = persistence;
