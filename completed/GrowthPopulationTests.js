const assert = require('assert');

describe('nbYear', function () {
	const nbYear = require('../katas/GrowthPopulation');
	it('Basic tests', function () {
		assert.equal(nbYear(1500, 5, 100, 5000), 15);
		assert.equal(nbYear(1500000, 2.5, 10000, 2000000), 10);
		assert.equal(nbYear(1500000, 0.25, 1000, 2000000), 94);
	});
});
