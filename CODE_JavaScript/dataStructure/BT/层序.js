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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = []
  const arr = []
  arr.push(root)
  while (arr.length > 0) {
    let len = arr.length
    let path = []
    for (let i = 0; i < len; i++) {
      let current = arr.shift()
      path.push(current.val)
      if (current.left !== null) {
        arr.push(current.left)
      }
      if (current.right !== null) {
        arr.push(current.right)
      }
    }
    result.push([...path])
  }
  return result
};