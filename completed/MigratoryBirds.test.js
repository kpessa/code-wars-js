const assert = require('assert');

describe('migratoryBirds', function () {
	const migratoryBirds = require('./MigratoryBirds').migratoryBirds;
	let i = 0;
	it(`Test #${i++}`, function () {
		assert.equal(migratoryBirds([1, 1, 2, 2, 3]), 1);
	});

	it(`Test #${i++}`, function () {
		assert.equal(migratoryBirds([1, 4, 4, 4, 5, 3]), 4);
	});

	it(`Test #${i++}`, function () {
		assert.equal(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]), 3);
	});
});
