const assert = require('assert');

describe('findMedianSortedArrays', function () {
	const findMedianSortedArrays = require('./FindMedianSortedArrays').findMedianSortedArrays;
	let i = 0;
	it(`Test #${i++}`, function () {
		assert.equal(findMedianSortedArrays([1, 3], [2]), 2);
	});

	it(`Test #${i++}`, function () {
		assert.equal(findMedianSortedArrays([1, 2], [3, 4]), 2.5);
	});

	xit(`Test #${i++}`, function () {
		assert.equal(findMedianSortedArrays(), true);
	});
});
