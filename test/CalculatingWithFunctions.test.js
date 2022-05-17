const assert = require('assert');
const zero = require('../katas/CalculatingWithFunctions').zero;
const one = require('../katas/CalculatingWithFunctions').one;
const two = require('../katas/CalculatingWithFunctions').two;
const three = require('../katas/CalculatingWithFunctions').three;
const four = require('../katas/CalculatingWithFunctions').four;
const five = require('../katas/CalculatingWithFunctions').five;
const six = require('../katas/CalculatingWithFunctions').six;
const seven = require('../katas/CalculatingWithFunctions').seven;
const eight = require('../katas/CalculatingWithFunctions').eight;
const nine = require('../katas/CalculatingWithFunctions').nine;
const plus = require('../katas/CalculatingWithFunctions').plus;
const minus = require('../katas/CalculatingWithFunctions').minus;
const times = require('../katas/CalculatingWithFunctions').times;
const dividedBy = require('../katas/CalculatingWithFunctions').dividedBy;

describe('zero', function () {
	it('test', () => {
		assert.equal(seven(times(five())), 35);
		assert.equal(four(plus(nine())), 13);
		assert.equal(eight(minus(three())), 5);
		assert.equal(six(dividedBy(two())), 3);
	});
});
