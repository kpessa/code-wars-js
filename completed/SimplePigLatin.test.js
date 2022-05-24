const assert = require('assert');

describe('pigIt', function () {
	const pigIt = require('../katas/SimplePigLatin').pigIt;
	it('First test', function () {
		assert.equal(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
	});

	it('Second test', function () {
		assert.equal(pigIt('This is my string'), 'hisTay siay ymay tringsay');
	});

	it('Third test', function () {
		assert.equal(pigIt('Hello world !'), 'elloHay orldway !');
	});
});
