var assert = require('assert');

xdescribe('SumTwoSmallestNumbers', function () {
	const sumTwoSmallestNumbers = require('../katas/SumTwoSmallestNumbers');
	it('should work for basic tests', function () {
		assert.strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13, 'Sum should be 13');
		assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6, 'Sum should be 6');
		assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10, 'Sum should be 10');
		assert.strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24, 'Sum should be 24');
		assert.strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16, 'Sum should be 16');
	});
});

xdescribe('ReturnNegative', function () {
	const makeNegative = require('../katas/ReturnNegative.js');

	it('Normal Value', () => {
		assert.equal(makeNegative(42), -42);
	});

	// makeNegative(1); // return -1
	// makeNegative(-5); // return -5
	// makeNegative(0); // return 0
	// makeNegative(0.12); // return -0.12

	it('makeNegative(-5); // return -5', () => {
		assert.equal(makeNegative(-5), -5);
	});

	it('Edge case -> 0', () => {
		assert.equal(makeNegative(0), 0);
	});
});

xdescribe('Array', function () {
	describe('#indexOf()', function () {
		it('should return -1 when the value is not present', function () {
			assert.equal([1, 2, 3].indexOf(4), -1);
		});
	});
});
