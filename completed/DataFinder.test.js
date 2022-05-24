const assert = require('assert');

describe('dataFinder', function () {
	const dataFinder = require('../katas/DataFinder').dataFinder;
	it('First test', function () {
		let find = dataFinder([1, 6, 3, 0, 2, 15, 10]);
		assert.equal(find(2, 4, 10), false);
	});

	it('Second test', function () {
		let find = dataFinder([15, 1, 10, 5, 4, 20]);
		assert.equal(find(1, 4, 4), true);
	});

	it('Third test', function () {
		let find = dataFinder([15, 1, 10, 5, 4, 20]);
		assert.equal(find(1, 10, 13), 'Error: Invalid range');
	});
});
