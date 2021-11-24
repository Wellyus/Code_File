/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  const result = []
  if (root === null) {
    return result
  }
  const queue = []
  queue.push(root)
  while (queue.length > 0) {
    let len = queue.length
    result.push(queue[len-1].val)
    for (let i = 0; i < len; i++) {
      let current = queue.shift()
      if (current.left !== null) {
        queue.push(current.left)
      }
      if (current.right !== null) {
        queue.push(current.right)
      }
    }
  }
  return result
};