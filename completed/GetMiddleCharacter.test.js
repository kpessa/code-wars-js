const assert = require('assert');

describe('getMiddle', function () {
	const getMiddle = require('../katas/GetMiddleCharacter');
	it('1 letter', () => {
		assert.equal(getMiddle('A'), 'A');
	});

	it('odd number of letters', function () {
		assert.equal(getMiddle('testing'), 't');
	});

	it('even number of letters', function () {
		assert.equal(getMiddle('test'), 'es');
		assert.equal(getMiddle('middle'), 'dd');
	});
});
