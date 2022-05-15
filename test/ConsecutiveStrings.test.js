const assert = require('assert');

describe('longestConsec', function () {
	const longestConsec = require('../katas/ConsecutiveStrings').longestConsec;

	it('k=1', function () {
		assert.equal(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'], 1), 'abigail');
	});

	it('k=2', function () {
		assert.equal(longestConsec(['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'], 2), 'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck');
	});

	it('k=3', function () {
		assert.equal(longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 3), 'wlwsasphmxxowiaxujylentrklctozmymuwpgozvxxiu');
	});

	it('Basic tests', function () {
		assert.equal(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2), 'abigailtheta');
		assert.equal(longestConsec(['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'], 1), 'oocccffuucccjjjkkkjyyyeehh');
		assert.equal(longestConsec([], 3), '');
		assert.equal(longestConsec(['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'], 2), 'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck');
		assert.equal(longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2), 'wlwsasphmxxowiaxujylentrklctozmymu');
		assert.equal(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2), '');
		assert.equal(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3), 'ixoyx3452zzzzzzzzzzzz');
		assert.equal(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15), '');
		assert.equal(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0), '');
	});
});
