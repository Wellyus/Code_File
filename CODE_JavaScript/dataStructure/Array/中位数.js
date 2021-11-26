/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let i = 0
  let j = 0
  let num = nums1.length+nums2.length
  let current = 0
  let previous = current
  while (i < nums1.length && j < nums2.length) {
    previous = current
    current = Math.min(nums1[i], nums2[j])
    current === nums1[i] ? i++ : j++
    if (i+j-1 === Math.floor(num/2)) {
      return num%2===0 ? (previous+current)/2 : current
    }
  }
  while (i < nums1.length) {
    previous = current
    current = nums1[i++]
    if (i+j-1 === Math.floor(num/2)) {
      return num%2===0 ? (previous+current)/2 : current
    }
  }
  while (j < nums2.length) {
    previous = current
    current = nums2[j++]
    if (i+j-1 === Math.floor(num/2)) {
      return num%2===0 ? (previous+current)/2 : current
    }
  }
};
console.log(findMedianSortedArrays([1,2], [3,4]))