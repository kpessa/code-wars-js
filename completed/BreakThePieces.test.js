const assert = require('assert');

describe('fromRectangleToASCIIArt', function () {
	const fromRectangleToASCIIArt = require('../katas/BreakThePieces').fromRectangleToASCIIArt;
	it('4x4', () => {
		let soln = ['+--+', '|  |', '|  |', '+--+'].join('\n');

		assert.equal(fromRectangleToASCIIArt({ height: 4, width: 4 }), soln);
	});
	it('2x2', () => {
		assert.equal(fromRectangleToASCIIArt({ height: 2, width: 2 }), '++\n++');
	});

	const returnShapes = require('../katas/BreakThePieces').returnShapes;
	it('test', () => {
		// prettier-ignore
		var shape = ['+------------+',
			'|            |',
			'|            |',
			'|            |',
			'+------+-----+']
			.join('\n');

		assert.deepEqual([{ height: 5, width: 14 }], returnShapes(shape));
	});

	it('test2', () => {
		// prettier-ignore
		var shape = ['+------------+',
			'|            |',
			'|            |',
			'|            |',
			'+------+-----+',
			'|      |     |',
			'|      |     |',
			'+------+-----+'].join('\n');

		assert.deepEqual(
			[
				{ height: 5, width: 14 },
				{ height: 4, width: 8 },
				{ height: 4, width: 7 },
			],
			returnShapes(shape)
		);
	});
});

describe('breakPieces', function () {
	const breakPieces = require('../katas/BreakThePieces').breakPieces;
	it('test', () => {
		// prettier-ignore
		var shape = ['+------------+',
			'|            |',
			'|            |',
			'|            |',
			'+------+-----+',
			'|      |     |',
			'|      |     |',
			'+------+-----+'].join('\n');

		// prettier-ignore
		var solution = [
			['+------------+',
			'|            |',
			'|            |',
			'|            |',
			'+------------+'].join('\n'),
			['+------+',
			'|      |',
			'|      |',
			'+------+'].join('\n'),
			['+-----+',
			'|     |',
			'|     |',
			'+-----+'].join('\n'),
		];

		assert.deepEqual(solution.sort(), breakPieces(shape).sort());
	});
});
