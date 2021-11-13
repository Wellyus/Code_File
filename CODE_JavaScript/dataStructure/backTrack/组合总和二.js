/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  // [2,5,1,2,2], target = 5
  const result = [];
  const res_ = [];
  const book = new Array(candidates.length);
  book.fill(false);
  let tar = 0;
  function solve() {
    if (tar === target) {
      result.push([...res_]);
      return;
    }
    const map = new Map();
    for (let i = 0; i < candidates.length; i++) {
      if (!book[i] && !map.has(candidates[i])) {
        tar += candidates[i];
        res_.push(candidates[i]);
        book[i] = true;
        map.set(candidates[i], 1);
        solve(candidates[i]);
        tar -= candidates[i];
        res_.pop();
        book[i] = false;
      }
    }
  }
  solve();
  return result;
};