/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  // [2,5,1,2,2], target = 5
    const result = [];
    const path = [];
    const candidates_ = [];
    for (let i = 0; i < candidates.length; i++) {
        candidates_[i] = candidates[i];
    }
    quickSort(candidates_,0 , candidates_.length);
    function solve(left, target) {
        if (target === 0) {
            result.push([...path]);
        }
        if (target < 0) {
          return;
        }
        for (let i = left; i < candidates_.length; i++) {
            if (i === left) {
                path.push(candidates_[i]);
                solve(i+1, target-candidates_[i]);
                path.pop();
            }
            if (candidates_[i] !== candidates_[i-1] && i >= left+1) {
                path.push(candidates_[i]);
                solve(i+1, target-candidates_[i]);
                path.pop();
            }
        }
    }
    function quickSort(arr, left, right) {
        if (left > right) {
            return;
        }
        let l = left;
        let r = right;
        while (l < r) {
            while (l < r && arr[r] >= arr[left]) {
                r--;
            }
            while (l < r && arr[l] <= arr[left]) {
                l++;
            }
            if (l < r) {
                [arr[l], arr[r]] = [arr[r], arr[l]];
            }
        }
        [arr[left], arr[l]] = [arr[l], arr[left]];
        quickSort(arr, left, l-1);
        quickSort(arr, l+1, right);
    }
    solve(0, target);
    return result;
  };