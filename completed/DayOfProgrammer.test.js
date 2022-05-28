const assert = require('assert');

describe('dayOfProgrammer', function () {
	const dayOfProgrammer = require('./DayOfProgrammer').dayOfProgrammer;
	let i = 0;
	it(`Test #${i++}`, function () {
		assert.equal(dayOfProgrammer(1918), '26.09.1918');
	});

	it(`Test #${i++}`, function () {
		assert.equal(dayOfProgrammer(1984), '12.09.1984');
	});

	it(`Test #${i++}`, function () {
		assert.equal(dayOfProgrammer(2017), '13.09.2017');
	});

	it(`Test #${i++}`, function () {
		assert.equal(dayOfProgrammer(2016), '12.09.2016');
	});

	it(`Test #${i++}`, function () {
		assert.equal(dayOfProgrammer(1800), '12.09.1800');
	});
});
