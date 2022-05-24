function pigIt(str) {
	return str
		.split(' ')
		.map(word => (/[^a-z]/i.test(word) ? word : word.slice(1) + word[0] + 'ay'))
		.join(' ');
}

module.exports.pigIt = pigIt;
