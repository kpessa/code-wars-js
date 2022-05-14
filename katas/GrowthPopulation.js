function nbYear(p0, percent, aug, p) {
	let people = p0;
	let years = 0;

	while (people < p) {
		people += Math.floor((people * percent) / 100 + aug);
		years++;
	}

	return years;
}

nbYear(1000, 2, 50, 1214);

module.exports = nbYear;
