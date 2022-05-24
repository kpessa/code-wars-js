const assert = require('assert');

describe('binaryArrayToNumber', function () {
	const binaryArrayToNumber = require('../katas/OnesAndZeros').binaryArrayToNumber;

	it('First test', function () {
		assert.equal(binaryArrayToNumber([0, 0, 0, 1]), 1);
	});

	it('Second test', function () {
		assert.equal(binaryArrayToNumber([0, 0, 1, 0]), 2);
	});

	it('Third test', function () {
		assert.equal(binaryArrayToNumber([1, 0, 0, 1]), 9);
	});
});
