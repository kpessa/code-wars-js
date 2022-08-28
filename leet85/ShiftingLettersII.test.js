const assert = require('assert');

describe('shiftingLetters', function () {
  const shiftingLetters = require('./ShiftingLettersII').shiftingLetters;
  let i = 0;
  it(`Test #${i++}`, function () {
    assert.equal(
      shiftingLetters('abc', [
        [0, 1, 0],
        [1, 2, 1],
        [0, 2, 1],
      ]),
      'ace'
    );
  });

  it(`Test #${i++}`, function () {
    assert.equal(
      shiftingLetters('dztz', [
        [0, 0, 0],
        [1, 1, 1],
      ]),
      'catz'
    );
  });

  //   it(`Test #${i++}`, function () {
  // 		assert.equal(shiftingLetters(),true);
  // 	});
});
