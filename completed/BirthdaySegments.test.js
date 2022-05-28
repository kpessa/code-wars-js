const assert = require('assert');

describe('birthdaySegments', function () {
	const birthdaySegments = require('./BirthdaySegments').birthdaySegments;
	let i = 0;
	it(`Test #${i++}`, function () {
		assert.deepEqual(birthdaySegments([2, 2, 1, 3, 2], 2), [
			[2, 2],
			[2, 1],
			[1, 3],
			[3, 2],
		]);
	});

	it(`Test #${i++}`, function () {
		assert.deepEqual(birthdaySegments([1, 2, 1, 3, 2], 2), [
			[1, 2],
			[2, 1],
			[1, 3],
			[3, 2],
		]);
	});

	it(`Test #${i++}`, function () {
		assert.deepEqual(birthdaySegments([1, 1, 1, 1, 1, 1], 2), [
			[1, 1],
			[1, 1],
			[1, 1],
			[1, 1],
			[1, 1],
		]);
	});

	it(`Test #${i++}`, function () {
		assert.deepEqual(birthdaySegments([4], 1), [[4]]);
	});
});

describe('birthday', function () {
	const birthday = require('./BirthdaySegments').birthday;
	let i = 0;
	it(`Test #${i++}`, function () {
		assert.equal(birthday([2, 2, 1, 3, 2], 4, 2), 2);
	});

	it(`Test #${i++}`, function () {
		assert.equal(birthday([1, 2, 1, 3, 2], 3, 2), 2);
	});

	it(`Test #${i++}`, function () {
		assert.equal(birthday([1, 1, 1, 1, 1, 1], 3, 2), 0);
	});

	it(`Test #${i++}`, function () {
		assert.equal(birthday([4], 4, 1), 1);
	});
});
