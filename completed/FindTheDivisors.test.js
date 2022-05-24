const assert = require('assert');

describe('divisors', function () {
	const divisors = require('./FindTheDivisors').divisors;
	it('First test', function () {
		assert.deepEqual(divisors(15), [3, 5]);
	});

	it('Second test', function () {
		assert.deepEqual(divisors(12), [2, 3, 4, 6]);
	});

	it('Third test', function () {
		assert.deepEqual(divisors(13), '13 is prime');
	});
});
