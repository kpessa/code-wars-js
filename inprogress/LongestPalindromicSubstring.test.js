const assert = require('assert');

describe('longestPalindrome', function () {
	const longestPalindrome = require('./LongestPalindromicSubstring').longestPalindrome;
	let i = 0;
	it(`Test #${i++}`, function () {
		assert.equal(longestPalindrome('babad'), 'bab');
	});

	it(`Test #${i++}`, function () {
		assert.equal(longestPalindrome('cbbd'), 'bb');
	});

	xit(`Test #${i++}`, function () {
		assert.equal(longestPalindrome(), true);
	});
});
