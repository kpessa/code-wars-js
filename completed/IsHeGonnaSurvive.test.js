const assert = require('assert');

describe('hero', function () {
	const hero = require('../katas/IsHeGonnaSurvive').hero;
	it('First test', function () {
		assert.strictEqual(hero(10, 5), true);
	});

	it('Second test', function () {
		assert.strictEqual(hero(7, 4), false);
	});

	it('Third test', function () {
		assert.strictEqual(hero(4, 5), false);
		assert.strictEqual(hero(100, 40), true);
		assert.strictEqual(hero(1500, 751), false);
		assert.strictEqual(hero(0, 1), false);
	});
});
