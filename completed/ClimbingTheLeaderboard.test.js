const assert = require('assert');

describe('climbingLeaderboard', function () {
	const climbingLeaderboard = require('../katas/ClimbingTheLeaderboard').climbingLeaderboard;
	it('First test', function () {
		let args = [
			[100, 90, 90, 80],
			[70, 80, 105],
		];
		let input = climbingLeaderboard(...args);
		let ans = [4, 3, 1];
		assert.deepEqual(input, ans);
	});

	it('Second test', function () {
		let args = ['100 100 50 40 40 20 10'.split(' '), '5 25 50 120'.split(' ')];
		let input = climbingLeaderboard(...args);
		let ans = [6, 4, 2, 1];
		assert.deepEqual(input, ans);
	});

	it('Third test', function () {
		let args = ['100 90 90 80 75 60'.split(' '), '50 65 77 90 102'.split(' ')];
		let input = climbingLeaderboard(...args);
		let ans = [6, 5, 4, 2, 1];
		assert.deepEqual(input, ans);
	});
});
