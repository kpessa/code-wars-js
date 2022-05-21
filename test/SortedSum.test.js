const assert = require('assert');

describe('sortedSum', function () {
	const sortedSum = require('../katas/SortedSum').sortedSum;
	it('First test', function () {
		let x = sortedSum([4, 3, 2, 1]);
		assert.equal(x, 65);
	});

	it('Second test', function () {
		let x = sortedSum([9, 5, 8]);
		assert.equal(x, 80);
	});

	it('Third test', function () {
		let x = sortedSum([5, 9]);
		assert.equal(x, 28);
	});
});
