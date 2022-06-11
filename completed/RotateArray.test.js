const assert = require('assert');

describe('rotateArray', function () {
	const rotateArray = require('./RotateArray').rotateArray;
	let i = 0;
	it(`Test #${i++}`, function () {
		assert.deepEqual(
			rotateArray([
				[1, 2],
				[3, 4],
			]),
			[
				[2, 4],
				[1, 3],
			]
		);
	});

	it(`Test #${i++}`, function () {
		assert.deepEqual(
			rotateArray([
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
			]),
			[
				[3, 6, 9],
				[2, 5, 8],
				[1, 4, 7],
			]
		);
	});

	it(`Test #${i++}`, function () {
		assert.equal(rotateArray(), true);
	});
});
