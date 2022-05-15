function moveZeros(a) {
	let nonZeros = a.filter(x => x !== 0);
	let zeros = a.filter(x => x === 0);
	return [...nonZeros, ...zeros];
}

module.exports = moveZeros;
