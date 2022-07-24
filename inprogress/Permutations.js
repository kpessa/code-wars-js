function permutations(arr) {
	if (arr.length === 1) {
		return [arr];
	}
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		const first = arr[i];
		const rest = arr.slice(0, i).concat(arr.slice(i + 1));
		const restPermutations = permutations(rest);
		for (let j = 0; j < restPermutations.length; j++) {
			result.push([first].concat(restPermutations[j]));
		}
	}
	return result;
}

module.exports.permutations = permutations;
