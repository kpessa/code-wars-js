const assert = require('assert');

describe('appearTwice', function () {
  const appearTwice = require('./AppearTwice').appearTwice;
  let i = 0;
  it(`Test #${i++}`, function () {
    assert.equal(appearTwice('abccbaacz'), 'c');
  });

  it(`Test #${i++}`, function () {
    assert.equal(appearTwice('"abcdd"'), 'd');
  });

  //   it(`Test #${i++}`, function () {
  // 		assert.equal(appearTwice(),true);
  // 	});
});
