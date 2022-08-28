function removeStars(s) {
  while (s.indexOf('*') !== -1) {
    let a = Array(s.length).fill(true);
    let ri = s.lastIndexOf('*');
    let count = 1;
    for (let i = ri; i >= 0; i--) {
      if (s[i] === '*') count++;
      else count--;
      if (count == 0) break;
      a[i] = false;
    }
    console.log(a, s);
    s = a.map((el, i) => (el ? s[i] : '')).join('');
  }

  return s;
}

module.exports.removeStars = removeStars;
