function dataFinder(data) {
	return function (start, end, value) {
		if (start < 0 || end > data.length - 1 || start > end) return 'Error: Invalid range';
		return data.slice(start, end + 1).includes(value);
	};
}

module.exports.dataFinder = dataFinder;
