//315
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  //元素去重
  const map = new Map();
  for (let item of nums) {
    if (!map.has(item)) {
      map.set(item, 1);
    }
  }
  const singleArray = [...map.keys()];

  //sort
  const sort_ = (arr)=>{
    if (arr.length < 2) {
      return arr;
    }
    let res_ = [];
    let middle = Math.floor(arr.length / 2);
    const left = sort_(arr.slice(0, middle));
    const right = sort_(arr.slice(middle));
    let l = 0;
    let r = 0;
    while(l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        res_.push(left[l++]);
      } else {
        res_.push(right[r++]);
      }
    }
    return res_ = l < left.length ? res_.concat(left.slice(l)) : res_.concat(right.slice(r));
  }
  const sortedArray = sort_(singleArray);
  const sortedArray_ = new Array(sortedArray.length);
  sortedArray_.fill(0);
  
  const result = [];

  const getSum = (index)=>{
    let pos = index - 1;
    let sum = 0;
    while(pos >= 0) {
      sum += sortedArray_[pos--];
    }
    return sum;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    let index = sortedArray.indexOf(nums[i]);
    sortedArray_[index]++;
    result.unshift(getSum(index));
  }
  return result;
};
console.log(countSmaller([5,2,6,1]));