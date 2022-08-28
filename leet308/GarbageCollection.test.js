const assert = require('assert');

describe('garbageCollection', function () {
  const garbageCollection = require('./GarbageCollection').garbageCollection;
  let i = 0;
  it(`Test #${i++}`, function () {
    assert.equal(garbageCollection(['G', 'P', 'GP', 'GG'], [2, 4, 3]), 21);
  });

  it(`Test #${i++}`, function () {
    assert.equal(garbageCollection(['MMM', 'PGM', 'GP'], [3, 10]), 37);
  });

  //   it(`Test #${i++}`, function () {
  // 		assert.equal(garbageCollection(),true);
  // 	});
});
