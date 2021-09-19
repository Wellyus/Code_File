/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
var recoverTree = (root)=>{
    const stack = [];
    let current = root;
    let previous = null;
    let x = null;
    let y;
    while(current!==null||stack.length>0) {
        while(current!==null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        if(previous&&current.val<=previous.val) {
            if(x === null) {
                x = previous;
                y = current;
            } else {
                y = current;
                break;
            }
           
        }
        previous = current;
        current = current.right;
    }
    [x.val,y.val] = [y.val,x.val];
}
var recoverTree = function(root) {
    const arr = [];
    const inOrder = (v)=>{
        if(v!=null) {
            inOrder(v.left);
            arr.push(v);
            inOrder(v.right);
        }
    }
    inOrder(root);
    var num = [];
    let x = 0;
    let y;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i].val<arr[i-1].val) {
            if(x===0) {
                x = i-1;
                y = i;
            } else {
                y = i;
                break;
            }   
        }
    }
    [num[x].val,num[y].val] = [num[y].val,num[x].val];
};
// @lc code=end

