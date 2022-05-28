const assert = require('assert');

describe('breakingRecords', function () {
	const breakingRecords = require('./BreakingRecords').breakingRecords;
	let i = 0;
	it(`Test #${i++}`, function () {
		assert.deepEqual(breakingRecords([12, 24, 10, 24]), [1, 1]);
	});

	it(`Test #${i++}`, function () {
		assert.deepEqual(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]), [2, 4]);
	});

	it(`Test #${i++}`, function () {
		assert.deepEqual(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]), [4, 0]);
	});
});
