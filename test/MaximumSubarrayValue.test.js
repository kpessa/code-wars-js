const assert = require('assert');

describe('subArrayValue', function () {
	const subarrayValue = require('../katas/MaximumSubarrayValue').subarrayValue;
	it('First test', function () {
		let args = [2, -1, -4, 5];
		let x = subarrayValue(args);
		assert.deepEqual(x, 36);
	});

	it('Second test', function () {
		let x = subarrayValue([-1, -4, 2]);
		assert.deepEqual(x, 25);
	});

	it('Third test', function () {
		let x = subarrayValue([1, -1, 1, -1, 1]);
		assert.deepEqual(x, 25);
	});
});

describe('maxSubarrayValue', function () {
	const maxSubarrayValue = require('../katas/MaximumSubarrayValue').maxSubarrayValue;

	it('Fourth test', function () {
		let x = maxSubarrayValue([-1, 2, 3, 4, -5]);
		assert.equal(x, 81);
	});

	it('First test', function () {
		let x = maxSubarrayValue([2, -1, -4, 5]);
		assert.equal(x, 36);
	});

	it('Second test', function () {
		let x = maxSubarrayValue([-1, -4, 2]);
		assert.equal(x, 36);
	});

	it('Third test', function () {
		let x = maxSubarrayValue([1, -1, 1, -1, 1]);
		assert.equal(x, 25);
	});
});
