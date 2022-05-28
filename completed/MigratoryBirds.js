function migratoryBirds(arr) {
	let counts = [];
	for (let id of arr) counts[id] = (counts[id] || 0) + 1;

	let max = 0;
	let maxId = 0;
	for (let id in counts) {
		if (counts[id] > max) {
			max = counts[id];
			maxId = id;
		}
	}
	return maxId;
}

module.exports.migratoryBirds = migratoryBirds;
