const assert = require('assert');

describe('secondsToRemoveOccurences', function () {
  const secondsToRemoveOccurences =
    require('./SecondsToRemoveOccurences').secondsToRemoveOccurences;
  let i = 0;
  it(`Test #${i++}`, function () {
    assert.equal(secondsToRemoveOccurences('0110101'), 4);
  });

  it(`Test #${i++}`, function () {
    assert.equal(secondsToRemoveOccurences('11100'), 0);
  });

  //   it(`Test #${i++}`, function () {
  // 		assert.equal(secondsToRemoveOccurences(),true);
  // 	});
});
