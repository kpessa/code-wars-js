const assert = require('assert');

describe('hurdleRace', function () {
	const hurdleRace = require('../katas/HurdleRace').hurdleRace;
	it('First test', function () {
		let args = [1, [1, 2, 3, 3, 2]];
		let x = hurdleRace(...args);
		assert.equal(x, 2);
	});

	it('Second test', function () {
		let args = [4, [1, 6, 3, 5, 2]];
		let x = hurdleRace(...args);
		assert.equal(x, 2);
	});

	it('Third test', function () {
		let args = [7, [2, 5, 4, 5, 2]];
		let x = hurdleRace(...args);
		assert.equal(x, 0);
	});
});
