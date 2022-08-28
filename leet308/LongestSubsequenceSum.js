function answerQueries(nums, queries) {
  let res = [];

  nums = nums.sort((a, b) => a - b);
  console.log(nums);
  for (let query of queries) {
    let n = query;
    var i = 0;
    for (; i < nums.length; i++) {
      n -= nums[i];
      if (n < 0) {
        break;
      }
    }
    res.push(i);
  }
  console.log(res);
  return res;
}

module.exports.answerQueries = answerQueries;
