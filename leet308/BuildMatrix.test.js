const assert = require('assert');

describe('buildMatrix', function () {
  const buildMatrix = require('./BuildMatrix').buildMatrix;
  let i = 0;
  it(`Test #${i++}`, function () {
    assert.deepEqual(
      buildMatrix(
        3,
        [
          [1, 2],
          [3, 2],
        ],
        [
          [2, 1],
          [3, 2],
        ]
      ),
      [
        [3, 0, 0],
        [0, 0, 1],
        [0, 2, 0],
      ]
    );
  });

  it(`Test #${i++}`, function () {
    assert.deepEqual(
      buildMatrix(
        3,
        [
          [1, 2],
          [2, 3],
          [3, 1],
          [2, 3],
        ],
        [[2, 1]]
      ),
      []
    );
  });

  //   it(`Test #${i++}`, function () {
  //     assert.equal(buildMatrix(), true);
  //   });
});
