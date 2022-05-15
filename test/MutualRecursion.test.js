const assert = require('assert');

describe('F', function () {
	const F = require('../katas/MutualRecursion').F;

	let solution = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 8, 8, 9, 9, 10];
	let test = Array(solution.length)
		.fill(0)
		.map((_, i) => F(i));

	it('Basic tests', function () {
		assert.deepEqual(test, solution);
	});
});

describe('M', function () {
	const M = require('../katas/MutualRecursion').M;

	let solution = [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9, 9, 10];
	let test = Array(solution.length)
		.fill(0)
		.map((_, i) => M(i));

	it('Basic tests', function () {
		assert.deepEqual(test, solution);
	});
});
