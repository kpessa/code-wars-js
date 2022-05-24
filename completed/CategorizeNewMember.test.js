const assert = require('assert');

describe('openOrSenior', function () {
	const openOrSenior = require('../katas/CategorizeNewMember').openOrSenior;

	it('first test', () => {
		assert.deepEqual(openOrSenior([[45, 12]]), ['Open']);
	});

	it('second test', () => {
		assert.deepEqual(
			openOrSenior([
				[45, 12],
				[55, 21],
			]),
			['Open', 'Senior']
		);
	});

	it('Fixed tests', () => {
		assert.deepEqual(
			openOrSenior([
				[45, 12],
				[55, 21],
				[19, -2],
				[104, 20],
			]),
			['Open', 'Senior', 'Open', 'Senior']
		);
		assert.deepEqual(
			openOrSenior([
				[3, 12],
				[55, 1],
				[91, -2],
				[53, 23],
			]),
			['Open', 'Open', 'Open', 'Open']
		);
		assert.deepEqual(
			openOrSenior([
				[59, 12],
				[55, -1],
				[12, -2],
				[12, 12],
			]),
			['Senior', 'Open', 'Open', 'Open']
		);
	});
});
