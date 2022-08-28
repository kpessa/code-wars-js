function maximumSegmentSum(nums, removeQueries) {
  // write your code here

  function produceSums() {
    let sums = [0];

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        if (sum !== 0) sums.push(sum);
        sum = 0;
      } else {
        sum += nums[i];
      }
    }
    if (sum !== 0) sums.push(sum);

    return sums;
  }

  let result = [];

  for (let idx of removeQueries) {
    nums[idx] = 0;
    result.push(Math.max(...produceSums()));
  }

  return result;
}

module.exports.maximumSegmentSum = maximumSegmentSum;
