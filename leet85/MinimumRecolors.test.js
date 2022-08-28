const assert = require('assert');

describe('minimumRecolors', function () {
  const minimumRecolors = require('./MinimumRecolors').minimumRecolors;
  let i = 0;
  it(`Test #${i++}`, function () {
    assert.equal(minimumRecolors('WBBWWBBWBW', 7), 3);
  });

  it(`Test #${i++}`, function () {
    assert.equal(minimumRecolors('WBWBBBW'), 2);
  });

  //   it(`Test #${i++}`, function () {
  //     assert.equal(minimumRecolors(), true);
  //   });
});
