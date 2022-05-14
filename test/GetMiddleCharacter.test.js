const assert = require('assert');

describe('getMiddle', function () {
	const getMiddle = require('../katas/GetMiddleCharacter');
	it('Basic tests', function () {
		assert.equal(getMiddle('test'), 'es');
		assert.equal(getMiddle('testing'), 't');
		assert.equal(getMiddle('middle'), 'dd');
		assert.equal(getMiddle('A'), 'A');
	});
});
