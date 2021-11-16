/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const result = new Array(target+1);
  result.fill(0);
  result[0] = 1;
  for (let sum = 1; sum <= target; sum++) {
    for (let num of nums) {
      if (sum - num >= 0) {
        result[sum] += result[sum-num];
      }
    }
  }
  return result[target];
};
console.log(combinationSum4([1, 2, 3], 4));