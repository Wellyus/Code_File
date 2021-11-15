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
    quickSort(candidates_,0 , candidates_.length-1);
    console.log([...candidates_]);
    function solve(left, target) {
        if (target === 0) {
            result.push([...path]);
            return;
        }
        for (let i = left; i < candidates_.length; i++) {
            if (i === left) {
                if (target < candidates_[i]) {
                    return;
                }
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
}
const arr = [32,33,5,32,12,7,17,33,29,13,18,16,23,28,26,26,12,6,23,19,22,12,9,6,5,34,22,27,11,33,27,30,24,27,27,31,29,32,21,24,32,5,27,21,20,10,12,28,11,31,12,20,30,17,21,30,8,8];
const target = 27;
console.log(combinationSum2(arr, target));
