var combinationSum4 = function(nums, target) {
    let result = 0;
    const arr = [];
    const path = [];
    for (let i = 0; i < nums.length; i++) {
        arr[i] = nums[i];
    }
    quickSort(arr, 0, arr.length-1);
    function quickSort(arr, left, right) {
        if (left > right) {
            return;
        }
        let l = left;
        let r = right;
        while (l < r) {
            while (l < r && arr[r] >= arr[l]) {
                r--;
            }
            while (l < r && arr[l] <= arr[l]) {
                l++;
            }
            if (l < r) {
                [arr[l], arr[r]] = [arr[r], arr[l]];
            }
        }
        [arr[l], arr[left]] = [arr[left], arr[l]];
        quickSort(arr, left, l-1);
        quickSort(arr, l+1, right);
    }
    function solve(sum) {
        if (sum === target) {
            result++;
            console.log([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (sum+nums[i] > target) {
                return;
            }
            path.push(nums[i]);
            solve(sum+nums[i]);
            path.pop();
        }
    }
    solve(0);
    return result;
};
console.log(combinationSum4([2,1,3],35));