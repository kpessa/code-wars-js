const assert = require('assert');

describe('kangaroo', function () {
	const kangaroo = require('../katas/Kangaroo').kangaroo;
	it('First test', function () {
		assert.equal(kangaroo(2, 1, 1, 2), 'YES');
	});

	it('Second test', function () {
		assert.equal(kangaroo(0, 3, 4, 2), 'YES');
	});

	it('Third test', function () {
		assert.equal(kangaroo(0, 2, 5, 3), 'NO');
	});
});
