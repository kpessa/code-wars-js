function differenceOperations(s) {
  let a = s.split` `.map(Number);

  function choose() {
    let b = a.map((c, i) => (a[i - 1] === 0 ? 0 : c));
    let max = Math.max(...b.slice(1));
    if (max === 0) return -1;
    let idx = b.lastIndexOf(max);
    // console.log(b, idx);
    a[idx] -= a[idx - 1];
    return 1;
  }

  for (let i = 0; i < 20; i++) {
    let result = choose();
    console.log(a);
    if (result === -1) break;
    if (a.slice(1).every(d => d === 0)) return 'YES';
    if (a.slice(1).filter(d => d < 0).length > 0) return 'NO';
  }
}

module.exports.differenceOperations = differenceOperations;
