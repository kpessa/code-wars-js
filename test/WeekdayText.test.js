const assert = require('assert');

describe('weekdayText', function () {
	const weekdayText = require('../katas/WeekdayText').weekdayText;
	it('First Test', function () {
		let getText = weekdayText(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
		assert.equal(getText(5), 'Sat');
	});

	it('Second Test', function () {
		let getText = weekdayText('M T W T F'.split(' '));
		assert.deepEqual(getText(10), new Error('Invalid weekday number'));
	});
});
