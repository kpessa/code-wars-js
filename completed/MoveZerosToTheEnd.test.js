const assert = require('assert');

describe('moveZeros', function () {
	const moveZeros = require('../katas/MoveZerosToTheEnd');
	it('test', () => {
		assert.deepEqual(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
	});

	it('with strings', () => {
		assert.deepEqual(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']), [false, 1, 1, 2, 1, 3, 'a', 0, 0]);
	});
});
