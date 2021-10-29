/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  function generateTree(start, end) {
    if (start > end) {
      return [null];
    }
    const res = [];
    for (let i = start; i <= end; i++) {
      //假设为真
      let left = generateTree(start, i-1);
      let right = generateTree(i+1, end);
      for (let l of left) {
        for (let r of right) {
          //结果为真
          let cache = new TreeNode(i, l, r);
          res.push(cache);
        }
      }
    }
    return res;
  }
  if (!n) {
    return [];
  } else {
    return generateTree(1, n);
  }
};