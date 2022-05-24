const assert = require('assert');

describe('getSum', function () {
	const getSum = require('./SumOfNumbers3').getSum;

	let i = 0;

	it(`Test #${i++}`, function () {
		assert.strictEqual(getSum(0, -1), -1);
		assert.strictEqual(getSum(0, 1), 1);
	});

	it(`Test #${i++}`, function () {
		assert.equal(getSum(-1, 2), 2);
	});

	it(`Test #${i++}`, function () {
		assert.equal(getSum(0, 5), 15);
	});

	it(`Test #${i++}`, function () {
		assert.equal(getSum(2, 10), 54);
	});

	it(`Test #${i++}`, function () {
		assert.equal(getSum(1, 1), 1);
	});
});
