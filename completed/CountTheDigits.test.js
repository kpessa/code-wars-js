const assert = require('assert');

describe('nbDig', function () {
  const nbDig = require('./CountTheDigits').nbDig;
  let i = 0;
  it(`Test #${i++}`, function () {
    assert.strictEqual(nbDig(10, 1), 4, 'n = 5750, d = 0');
  });

  it(`Test #${i++}`, function () {
    assert.strictEqual(nbDig(25, 1), 11, 'n = 5750, d = 0');
  });

  it(`Test #${i++}`, function () {
    assert.strictEqual(nbDig(5750, 0), 4700, 'n = 5750, d = 0');
  });

  it(`Test #${i++}`, function () {
    assert.strictEqual(nbDig(11011, 2), 9481, 'n = 11011, d = 2');
  });

  it(`Test #${i++}`, function () {
    assert.strictEqual(nbDig(12224, 8), 7733, 'n = 12224, d = 8');
  });
});
