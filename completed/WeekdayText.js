function weekdayText(weekdays) {
	return function (weekday) {
		if (weekday < 0 || weekday > weekdays.length - 1) return new Error('Invalid weekday number');

		return weekdays[weekday];
	};
}

module.exports.weekdayText = weekdayText;
