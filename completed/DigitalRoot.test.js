const assert = require('assert');

describe('sumOfDigits', function () {
	const sumOfDigits = require('./DigitalRoot').sumOfDigits;
	let i = 0;
	it(`Test #${i++}`, function () {
		assert.equal(sumOfDigits(16), 7);
	});

	it(`Test #${i++}`, function () {
		assert.equal(sumOfDigits(942), 15);
	});

	it(`Test #${i++}`, function () {
		assert.equal(sumOfDigits(15), 6);
	});
});

describe('digital_root', function () {
	const digital_root = require('./DigitalRoot').digital_root;
	let i = 0;
	it(`Test #${i++}`, function () {
		assert.equal(digital_root(16), 7);
	});

	it(`Test #${i++}`, function () {
		assert.equal(digital_root(456), 6);
	});

	it(`Test #${i++}`, function () {
		assert.equal(digital_root(132189), 6);
	});
});
