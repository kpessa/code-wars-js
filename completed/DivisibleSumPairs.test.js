const assert = require('assert');

describe('divisibleSumPairs', function () {
	const divisibleSumPairs = require('./DivisibleSumPairs').divisibleSumPairs;
	let i = 0;
	it(`Test #${i++}`, function () {
		assert.equal(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]), 3);
	});

	it(`Test #${i++}`, function () {
		assert.equal(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]), 5);
	});

	xit(`Test #${i++}`, function () {
		assert.equal(divisibleSumPairs(), true);
	});
});
