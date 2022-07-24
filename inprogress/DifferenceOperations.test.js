const assert = require('assert');

describe('differenceOperations', function () {
  const differenceOperations =
    require('./DifferenceOperations').differenceOperations;
  let i = 0;
  it(`Test #${i++}`, function () {
    assert.equal(differenceOperations('5 10'), 'YES');
  });

  it(`Test #${i++}`, function () {
    assert.equal(differenceOperations('1 2 3'), 'YES');
  });

  it(`Test #${i++}`, function () {
    assert.equal(differenceOperations('1 1 1 1'), 'YES');
  });

  it(`Test #${i++}`, function () {
    assert.equal(differenceOperations('9 9 8 2 4 4 3 5 3'), 'NO');
  });
});
