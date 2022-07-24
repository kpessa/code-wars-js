const assert = require('assert');

describe('permutations', function () {
	const permutations = require('./Permutations').permutations;
	let i = 0;
	it(`Test #${i++}`, function () {
		assert.deepEqual(permutations(['aba', 'bbb', 'bab']), [
			['aba', 'bbb', 'bab'],
			['aba', 'bab', 'bbb'],
			['bbb', 'aba', 'bab'],
			['bbb', 'bab', 'aba'],
			['bab', 'aba', 'bbb'],
			['bab', 'bbb', 'aba'],
		]);
	});
});
