const assert = require('assert');

describe('validPartition', function () {
  const validPartition = require('./ValidPartition').validPartition;
  let i = 0;
  it(`Test #${i++}`, function () {
    assert.equal(validPartition([4, 4, 4, 5, 6]), true);
  });

  it(`Test #${i++}`, function () {
    assert.equal(validPartition([1, 1, 1, 2]), false);
  });

  it(`Test #${i++}`, function () {
    assert.equal(
      validPartition([
        579611, 579611, 579611, 731172, 731172, 496074, 496074, 496074, 151416,
        151416, 151416,
      ]),
      true
    );
  });

  it(`Test #${i++}`, function () {
    assert.equal(
      validPartition([
        676575, 676575, 676575, 533985, 533985, 40495, 40495, 40495, 40495,
        40495, 40495, 40495, 782020, 782021, 782022, 782023, 782024, 782025,
        782026, 782027, 782028, 782029, 782030, 782031, 782032, 782033, 782034,
        782035, 782036, 782037, 782038, 782039, 782040, 378070, 378070, 378070,
        378071, 378072, 378073, 378074, 378075, 378076, 378077, 378078, 378079,
        378080, 378081, 378082, 378083, 378084, 378085, 378086, 378087, 378088,
        378089, 378090, 378091, 378092, 378093, 129959, 129959, 129959, 129959,
        129959, 129959,
      ]),
      true
    );
  });
});
