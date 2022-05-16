const assert = require('assert');

describe('barista', function () {
	const barista = require('../katas/BaristaManager').barista;
	it('given [0,0,1], 1', function () {
		assert.deepEqual(barista([0, 0, 1], 1), 1);
	});
	it('given [2,3,4], 1', function () {
		assert.deepEqual(barista([2, 3, 4], 1), 22);
	});
	it('given [2,3,4], 2', function () {
		assert.deepEqual(barista([2, 3, 4], 2), 13);
	});
	it('given [2,3,4], 3', function () {
		assert.deepEqual(barista([2, 3, 4], 3), 9);
	});
	it('given [2,4,1,8,3], 3', function () {
		assert.deepEqual(barista([1, 2, 3, 4, 8], 3), 25);
	});
});
