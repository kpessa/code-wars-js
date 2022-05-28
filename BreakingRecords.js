function breakingRecords(scores) {
	let min = (max = scores[0]);
	let minCount = (maxCount = 0);
	scores.slice(1).forEach(score => {
		if (score > max) (max = score), maxCount++;
		if (score < min) (min = score), minCount++;
	});
	return [maxCount, minCount];
}

module.exports.breakingRecords = breakingRecords;
