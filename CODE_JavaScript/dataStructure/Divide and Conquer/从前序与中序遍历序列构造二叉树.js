/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  function solve(left, right) {
      if (left > right) {
          return null;
      }
      let index = preorder.length;
      for (let i = left; i <= right; i++) {
          index = Math.min(index, preorder.indexOf(inorder[i]));
      }
      let index_;
      for (let i = left; i <= right; i++) {
          if (inorder[i] === preorder[index]) {
              index_ = i;
              break;
          }
      }
      let node = new TreeNode(inorder[index_], null, null);
      node.left = solve(left, index_ - 1);
      node.right = solve(index_ + 1, right);
      return node;
  }
  return solve(0, inorder.length - 1);
  };