// 2369. Check if There is a Valid Partition For The Array
// https://leetcode.com/contest/weekly-contest-305/problems/check-if-there-is-a-valid-partition-for-the-array/

function validPartition(nums) {
  for (let i = 2; i < nums.length; i++) {
    let cond1 = nums[i] - nums[i - 1] == 1 && nums[i - 1] - nums[i - 2] == 1;
    let cond2 = nums[i - 2] - nums[i - 1] == 1 && nums[i - 1] - nums[i] == 1;
    if (cond1 || cond2) {
      nums[i] = -1;
      nums[i - 1] = -1;
      nums[i - 2] = -1;
      i += 2;
    }
  }

  let i = 0,
    j = 1;
  let count = 1;
  while (j < nums.length) {
    if (nums[i] == nums[j]) {
      count++;
      j++;
    } else {
      if (count % 2 == 0 || count % 3 == 0 || count % 5 == 0) {
        for (let z = i; z < j; z++) {
          nums[z] = -1;
        }
      }
      count = 1;
      i = j;
      j++;
    }
    if (j === nums.length) {
      if (count % 2 == 0 || count % 3 == 0 || count % 5 == 0) {
        for (let z = i; z < j; z++) {
          nums[z] = -1;
        }
      }
      j++;
    }
  }

  return nums.every(d => d == -1);
}

validPartition([
  676575, 676575, 676575, 533985, 533985, 40495, 40495, 40495, 40495, 40495,
  40495, 40495, 782020, 782021, 782022, 782023, 782024, 782025, 782026, 782027,
  782028, 782029, 782030, 782031, 782032, 782033, 782034, 782035, 782036,
  782037, 782038, 782039, 782040, 378070, 378070, 378070, 378071, 378072,
  378073, 378074, 378075, 378076, 378077, 378078, 378079, 378080, 378081,
  378082, 378083, 378084, 378085, 378086, 378087, 378088, 378089, 378090,
  378091, 378092, 378093, 129959, 129959, 129959, 129959, 129959, 129959,
]);

module.exports.validPartition = validPartition;
