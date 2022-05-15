const assert = require('assert');

describe('likes', function () {
	const likes = require('../katas/WhoLikesIt').likes;
	it('no likes', function () {
		assert.equal(likes([]), 'no one likes this');
	});

	it('one like', function () {
		assert.equal(likes(['Peter']), 'Peter likes this');
	});

	it('two likes', function () {
		assert.equal(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
	});

	it('three likes', function () {
		assert.equal(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
	});

	it('four likes', function () {
		assert.equal(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
	});
});
