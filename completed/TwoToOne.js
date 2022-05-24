function longest(s1, s2) {
	set = new Set([...s1.split(''), ...s2.split('')]);
	return [...set].sort().join('');
}

module.exports.longest = longest;
