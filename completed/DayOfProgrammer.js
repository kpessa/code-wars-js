function leapYearQ(year) {
	if (year >= 1700 && year <= 1917) return year % 4 === 0; // Julian calendar
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0; // Gregorian calendar
}

function dayOfProgrammer(year) {
	if (year === 1918) return '26.09.1918'; // Switch from Julian to Gregorian calendar
	return `${leapYearQ(year) ? '12' : '13'}.09.${year}`;
}

module.exports.dayOfProgrammer = dayOfProgrammer;
