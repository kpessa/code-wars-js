const assert = require('assert');

describe('maximumSegmentSum', function () {
  const maximumSegmentSum = require('./MaximumSegmentSum').maximumSegmentSum;
  let i = 0;
  it(`Test #${i++}`, function () {
    assert.deepEqual(
      maximumSegmentSum([1, 2, 5, 6, 1], [0, 3, 2, 4, 1]),
      [14, 7, 2, 2, 0]
    );
  });

  it(`Test #${i++}`, function () {
    assert.deepEqual(
      maximumSegmentSum([3, 2, 11, 1], [3, 2, 1, 0]),
      [16, 5, 3, 0]
    );
  });

  //   it(`Test #${i++}`, function () {
  //     assert.equal(maximumSegmentSum(), true);
  //   });
});
