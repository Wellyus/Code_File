/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  if (root === null) {
    return [];
  }
  const res = [];
  const arr = [];
  let target = root.val;
  arr.push(root.val);
  function solve(node) {
    if (node.left === null && node.right === null) {
      if (target === targetSum) {
        res.push([...arr]);
      }
      return;
    }
    if (node.left !== null) {
      arr.push(node.left.val);
      target += node.left.val;
      solve(node.left);
      target -= node.left.val;
      arr.pop();
    }
    if (node.right !== null) {
      arr.push(node.right.val);
      target += node.right.val;
      solve(node.right);
      target -= node.right.val;
      arr.pop();
    }
  }
  solve(root);
  return res;
};