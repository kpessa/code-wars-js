function accum(s) {
	// write your code here
	return s.split``.map((x, i) => x.toUpperCase() + x.toLowerCase().repeat(i)).join`-`;
}

module.exports.accum = accum;
