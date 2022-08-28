function appearTwice(s) {
  let m = new Set();
  for (let c of s) {
    if (m.has(c)) return c;
    else m.add(c);
  }
  return 0;
}

module.exports.appearTwice = appearTwice;
