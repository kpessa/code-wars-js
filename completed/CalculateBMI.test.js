const assert = require('assert');

describe('bmi', function () {
	const bmi = require('../katas/CalculateBMI').bmi;
	it('Basic tests', function () {
		assert.equal(bmi(80, 1.8), 'Normal');
	});
});
