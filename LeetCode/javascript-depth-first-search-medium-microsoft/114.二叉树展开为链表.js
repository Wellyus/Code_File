/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 */

// @lc code=start
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(root===null) {
        return ;
    }
    let current = root;
    while(current!==null) {
        let child = current.left;
        if(child!==null) {
            while(child.right!==null) {
                child = child.right;
            }
            child.right = current.right;
            current.right = current.left;
            current.left = null;
        }
        current = current.right;
    }
};
// @lc code=end

