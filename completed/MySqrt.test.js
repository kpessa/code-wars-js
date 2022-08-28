const assert = require('assert');

describe('mySqrt', function () {
  const mySqrt = require('./MySqrt').mySqrt;
  let i = 0;
  it(`Test #${i++}`, function () {
    assert.equal(mySqrt(4), 2);
  });

  it(`Test #${i++}`, function () {
    assert.equal(mySqrt(8), 2);
  });

  it(`Test #${i++}`, function () {
    assert.equal(mySqrt(2 ** 16 - 1), 255);
  });
});
