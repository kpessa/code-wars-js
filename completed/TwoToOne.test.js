const assert = require('assert');

describe('longest', function () {
	const longest = require('../katas/TwoToOne').longest;
	it('Basic tests', function () {
		assert.equal(longest('aretheyhere', 'yestheyarehere'), 'aehrsty');
		assert.equal(longest('loopingisfunbutdangerous', 'lessdangerousthancoding'), 'abcdefghilnoprstu');
		assert.equal(longest('inmanylanguages', 'theresapairoffunctions'), 'acefghilmnoprstuy');
	});
});
