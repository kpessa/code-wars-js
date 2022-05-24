function kangaroo(x1, v1, x2, v2) {
	return v1 > v2 && (x2 - x1) % (v1 - v2) === 0 ? 'YES' : 'NO';
}

module.exports.kangaroo = kangaroo;
