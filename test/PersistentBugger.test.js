const assert = require('assert');

describe('persistence', function () {
	const persistence = require('../katas/PersistentBugger').persistence;
	it('Fixed tests', () => {
		assert.strictEqual(persistence(39), 3);
		assert.strictEqual(persistence(4), 0);
		assert.strictEqual(persistence(25), 2);
		assert.strictEqual(persistence(999), 4);
	});
});
