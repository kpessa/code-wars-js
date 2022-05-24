const assert = require('assert');

describe('isAnagram', () => {
	const isAnagram = require('./WhereMyAnagramsAt').isAnagram;

	it('first test', () => {
		assert.equal(isAnagram('hello', 'olleh'), true);
	});

	it('second test', () => {
		assert.equal(isAnagram('abba', 'baab'), true);
	});

	it('third test', () => {
		assert.equal(isAnagram('abba', 'abbba'), false);
	});
});

describe('anagrams', function () {
	const anagrams = require('./WhereMyAnagramsAt').anagrams;
	it('should return a list of all anagrams', function () {
		assert.deepEqual(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
		assert.deepEqual(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']);
	});

	it('should return an empty array for no anagrams', function () {
		assert.deepEqual(anagrams('laser', ['lazing', 'lazy', 'lacer']), []);
	});
});
