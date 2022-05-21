function hurdleRace(k, height) {
	let max = Math.max(...height);
	return k >= max ? 0 : max - k;
}

module.exports.hurdleRace = hurdleRace;
