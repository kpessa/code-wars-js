const assert = require('assert');

describe('getTotalX', function () {
	const getTotalX = require('../katas/GetTotalX').getTotalX;
	it('First test', function () {
		assert.equal(getTotalX([2, 6], [24, 36]), 2);
	});

	it('Second test', function () {
		assert.equal(getTotalX([2, 4], [16, 32, 96]), 3);
	});
});
