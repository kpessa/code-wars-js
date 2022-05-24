const assert = require('assert');

describe('boolToWord', function () {
	const boolToWord = require('../katas/BoolToYesNo').boolToWord;
	it('Basic tests', function () {
		assert.strictEqual(boolToWord(true), 'Yes');
		assert.strictEqual(boolToWord(false), 'No');
	});
});
