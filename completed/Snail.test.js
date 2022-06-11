const assert = require('assert');

describe('snail', function () {
	const snail = require('./Snail').snail;
	let i = 0;
	it(`Test #${i++}`, function () {
		assert.deepEqual(
			snail([
				[1, 2],
				[3, 4],
			]),
			[1, 2, 4, 3]
		);
	});

	it(`Test #${i++}`, function () {
		assert.deepEqual(
			snail([
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
			]),
			[1, 2, 3, 6, 9, 8, 7, 4, 5]
		);
	});
});
