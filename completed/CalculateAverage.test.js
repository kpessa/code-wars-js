const assert = require('assert');

describe('find_average', function () {
	const find_average = require('../katas/CalculateAverage').find_average;
	it('Testing for fixed tests', () => {
		assert.strictEqual(find_average([1, 1, 1]), 1);
		assert.strictEqual(find_average([1, 2, 3]), 2);
		assert.strictEqual(find_average([1, 2, 3, 4]), 2.5);
	});
});
