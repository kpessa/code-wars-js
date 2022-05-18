const assert = require('assert');

describe('birthdayCakeCandles', function () {
	const birthdayCakeCandles = require('../katas/TallestCandles').birthdayCakeCandles;

	it('1st Example', function () {
		assert.equal(birthdayCakeCandles([4, 4, 1, 3]), 2);
	});

	it('2nd Example', function () {
		assert.equal(birthdayCakeCandles([3, 2, 1, 3]), 2);
	});
});
