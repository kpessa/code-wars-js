const assert = require('assert');

describe('DNAtoRNA', function () {
	const DNAtoRNA = require('../katas/DNAtoRNA').DNAtoRNA;
	it('Basic tests', function () {
		assert.equal(DNAtoRNA('GCAT'), 'GCAU');
	});

	it('Testing for fixed tests', () => {
		assert.strictEqual(DNAtoRNA('TTTT'), 'UUUU');
		assert.strictEqual(DNAtoRNA('GCAT'), 'GCAU');
		assert.strictEqual(DNAtoRNA('GACCGCCGCC'), 'GACCGCCGCC');
	});
});
