function longestConsec(strarr, k) {
	if (strarr.length === 0 || k > strarr.length || k <= 0) {
		return '';
	}
	let longest = '';
	for (let i = 0; i < strarr.length - k + 1; i++) {
		let temp = strarr.slice(i, i + k).join('');
		if (temp.length > longest.length) {
			longest = temp;
		}
	}
	return longest;
}

module.exports.longestConsec = longestConsec;
