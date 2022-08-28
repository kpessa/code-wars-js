const assert = require('assert');

describe('reachableNodes', function () {
  const reachableNodes = require('./ReachableNodes').reachableNodes;
  let i = 0;
  it(`Test #${i++}`, function () {
    assert.equal(
      reachableNodes(
        7,
        [
          [0, 1],
          [1, 2],
          [3, 1],
          [4, 0],
          [0, 5],
          [5, 6],
        ],
        [4, 5]
      ),
      4
    );
  });

  //   it(`Test #${i++}`, function () {
  //     assert.equal(reachableNodes(), true);
  //   });

  //   it(`Test #${i++}`, function () {
  //     assert.equal(reachableNodes(), true);
  //   });
});
