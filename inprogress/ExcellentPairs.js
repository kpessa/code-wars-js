function excellentPairs(nums, k) {
  nums = [...new Set(nums)];

  function bitCount(n) {
    n = n - ((n >> 1) & 0x55555555);
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
    return (((n + (n >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24;
  }

  function* combine(array, length) {
    if (length < 1) yield [];
    else
      for (let element of array) {
        for (let combination of combine(array, length - 1)) {
          yield combination.concat(element);
        }
      }
  }

  let combinations = [...combine(nums, 2)];

  let count = 0;
  for (let combination of combinations) {
    let [x, y] = combination;
    if (bitCount(x & y) + bitCount(x | y) >= k) count++;
  }

  return count;
}

module.exports.excellentPairs = excellentPairs;
