const assert = require('assert');

describe('excellentPairs', function () {
  const excellentPairs = require('./ExcellentPairs').excellentPairs;
  let i = 0;
  it(`Test #${i++}`, function () {
    assert.equal(excellentPairs([1, 2, 3, 1], 3), 5);
  });

  it(`Test #${i++}`, function () {
    assert.equal(excellentPairs([5, 1, 1], 10), 0);
  });

  //   it(`Test #${i++}`, function () {
  // 		assert.equal(excellentPairs(),true);
  // 	});
});
