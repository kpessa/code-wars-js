function mySqrt(n) {
  if (n < 2) return n;
  let l = 2;
  let r = n;
  let getMid = function () {
    return Math.floor((l + r) / 2);
  };
  mid = getMid();

  // let count = 0;
  while (l < r) {
    // console.log({ count, l, mid, r });
    if (mid * mid === n) return mid;
    else if (mid * mid < n && (mid + 1) * (mid + 1) > n) return mid;
    if (mid * mid > n) {
      r = mid;
      mid = getMid();
    } else if (mid * mid < n) {
      l = mid;
      mid = getMid();
    }
  }

  return 0;
}

module.exports.mySqrt = mySqrt;
