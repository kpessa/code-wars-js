const assert = require('assert');

describe('barista', function () {
	const barista = require('../katas/BaristaProblem').barista;
	it('No Orders Test Case', function () {
		assert.strictEqual(barista([]), 0);
	});

	it('One Order Test Case', function () {
		assert.strictEqual(barista([1]), 1);
	});

	it('Two Orders Test Case', function () {
		assert.strictEqual(barista([1, 2]), 6);
	});

	it('First test case', function () {
		assert.strictEqual(barista([2, 10, 5, 3, 9]), 85);
	});

	it('Small Test Cases', function () {
		assert.strictEqual(barista([2, 10, 5, 3, 9]), 85);
		assert.strictEqual(barista([4, 3, 2]), 22);
		assert.strictEqual(barista([20, 5]), 32);
		assert.strictEqual(barista([20, 5, 4, 3, 1, 5, 7, 8]), 211);
		assert.strictEqual(barista([5, 4, 3, 2, 1]), 55);
	});
});
