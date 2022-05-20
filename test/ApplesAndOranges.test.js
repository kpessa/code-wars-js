const assert = require('assert');

describe('countApplesAndOranges', function () {
	const countApplesAndOranges = require('../katas/ApplesAndOranges').countApplesAndOranges;
	it('First Test', function () {
		assert.deepEqual(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]), [1, 2]);
	});

	it('First Test', function () {
		assert.deepEqual(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]), [1, 1]);
	});
});
