function shiftingLetters(s, shifts) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  function getNextCharacter(c) {
    let idx = alphabet.indexOf(c);
    return alphabet[(idx + 1) % 26];
  }
  function getPreviousCharacter(c) {
    let idx = alphabet.indexOf(c);
    return idx === 0 ? 'z' : alphabet[idx - 1];
  }

  let a = s.split('');
  for (let shift of shifts) {
    let [startIdx, endIdx, direction] = shift;
    a = a.map((el, i) => {
      if (i < startIdx || i > endIdx) return el;
      if (direction === 1) return getNextCharacter(el);
      return getPreviousCharacter(el);
    });
  }

  return a.join('');
}

module.exports.shiftingLetters = shiftingLetters;
