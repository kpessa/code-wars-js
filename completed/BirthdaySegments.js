Array.prototype.sum = function () {
	return this.reduce((a, b) => a + b, 0);
};

function birthdaySegments(s, m) {
	let segments = [];
	for (let i = 0; i <= s.length - m; i++) {
		segments.push(s.slice(i, i + m));
	}
	return segments;
}

function birthday(s, d, m) {
	let segments = birthdaySegments(s, m);
	return segments.reduce((p, c) => {
		if (c.sum() === d) return p + 1;
		return p;
	}, 0);
}

module.exports.birthdaySegments = birthdaySegments;
module.exports.birthday = birthday;
