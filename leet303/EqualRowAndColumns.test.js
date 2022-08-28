const assert = require('assert');

describe('equalRC', function () {
  const equalRC = require('./EqualRowAndColumns').equalRC;
  let i = 0;
  it(`Test #${i++}`, function () {
    assert.equal(
      equalRC([
        [3, 2, 1],
        [1, 7, 6],
        [2, 7, 7],
      ]),
      1
    );
  });

  it(`Test #${i++}`, function () {
    assert.equal(
      equalRC([
        [3, 1, 2, 2],
        [1, 4, 4, 5],
        [2, 4, 2, 2],
        [2, 4, 2, 2],
      ]),
      3
    );
  });

  //   it(`Test #${i++}`, function () {
  // 		assert.equal(equalRC(),true);
  // 	});
});
