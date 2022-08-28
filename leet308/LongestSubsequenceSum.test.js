const assert = require('assert');

describe('answerQueries', function () {
  const answerQueries = require('./LongestSubsequenceSum').answerQueries;
  let i = 0;
  it(`Test #${i++}`, function () {
    assert.deepEqual(answerQueries([4, 5, 2, 1], [3, 10, 21]), [2, 3, 4]);
  });

  it(`Test #${i++}`, function () {
    assert.deepEqual(answerQueries([2, 3, 4, 5], [1]), [0]);
  });

  //   it(`Test #${i++}`, function () {
  //     assert.equal(answerQueries(), true);
  //   });
});
