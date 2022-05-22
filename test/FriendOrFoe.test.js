const assert = require('assert');

describe('friend', function () {
	const friend = require('../katas/FriendOrFoe').friend;
	it('First test', function () {
		assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
	});

  it('Second test', function () {
		assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
	});

  it('Third test', function () {
		assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
    assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
	});
});
