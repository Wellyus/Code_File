/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = []
  const path = []
  const can = []
  for (let i = 0; i < candidates.length; i++) {
    can[i] = candidates[i]
  }
  quick_sort(can, 0, can.length)

  function solve(index, sum) {
    if (index >= can.length) {
      return 
    }
    if (sum === target) {
      result.push([...path])
      return
    }
    for (let i = index; i < can.length; i++) {
      if (sum+can[i] > target) {
        return
      }
      if (sum+can[i] <= target) {
        path.push(can[i])
        solve(i, sum+can[i])
        path.pop()
      }
    }
  }

  function quick_sort(arr, index_left, index_right) {
    if (index_left > index_right) {
      return
    }
    let left = index_left
    let right = index_right
    while (left < right) {
      while (left < right && arr[right] >= arr[index_left]) {
        right--
      }
      while (left < right && arr[left] <= arr[index_left]) {
        left++
      }
      if (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
      }
    }
    [arr[index_left], arr[left]] = [arr[left], arr[index_left]]
    quick_sort(arr, index_left, left-1)
    quick_sort(arr, left+1, index_right)
  }
  solve(0, 0)
  return result
};
