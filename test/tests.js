var assert = require('assert');

describe('validatePIN', function () {
	const validatePIN = require('../katas/ValidatePIN');
	it('first test', () => {
		assert.equal(validatePIN('1234'), true);
	});

	it('has non digit', () => {
		assert.equal(validatePIN('1.234'), false);
	});

	it('should return False for pins with length other than 4 or 6', function () {
		assert.equal(validatePIN('1'), false, "Wrong output for '1'");
		assert.equal(validatePIN('12'), false, "Wrong output for '12'");
		assert.equal(validatePIN('123'), false, "Wrong output for '123'");
		assert.equal(validatePIN('12345'), false, "Wrong output for '12345'");
		assert.equal(validatePIN('1234567'), false, "Wrong output for '1234567'");
		assert.equal(validatePIN('-1234'), false, "Wrong output for '-1234'");
		assert.equal(validatePIN('1.234'), false, "Wrong output for '1.234'");
		assert.equal(validatePIN('-1.234'), false, "Wrong output for '-1.234'");
		assert.equal(validatePIN('00000000'), false, "Wrong output for '00000000'");
	});

	it('should return False for pins which contain characters other than digits', function () {
		assert.equal(validatePIN('a234'), false, "Wrong output for 'a234'");
		assert.equal(validatePIN('.234'), false, "Wrong output for '.234'");
	});

	it('should return True for valid pins', function () {
		assert.equal(validatePIN('1234'), true, "Wrong output for '1234'");
		assert.equal(validatePIN('0000'), true, "Wrong output for '0000'");
		assert.equal(validatePIN('1111'), true, "Wrong output for '1111'");
		assert.equal(validatePIN('123456'), true, "Wrong output for '123456'");
		assert.equal(validatePIN('098765'), true, "Wrong output for '098765'");
		assert.equal(validatePIN('000000'), true, "Wrong output for '000000'");
		assert.equal(validatePIN('123456'), true, "Wrong output for '123456'");
		assert.equal(validatePIN('090909'), true, "Wrong output for '090909'");
	});
});

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
