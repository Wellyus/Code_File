/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    /*
    function isSame(p,q) {
        //先对当前节点操作
        if(p===null&&q===null) {
            return true;
        } else if(p===null||q===null) {
            return false;
        } else if(p.val!==q.val) {
            return false;
        } else {
            return isSame(p.left,q.left)&&isSame(p.right,q.right);
        }
    }
    return isSame(p,q);
    */
   if(p===null&&q===null) {
       return true;
   }
   if(p===null||q===null) {
       return false;
   }
   if(p.val!==q.val) {
       return false;
   }
   const a = [];
   const b = [];
   a.push(p);
   b.push(q);
   while(a[0]!==void 0||b[0]!==void 0) {

        let x = a.shift();
        let y = b.shift();
        //1左为空
        if(x.left===null) {
            if(y.left!==null) {
                return false;
            }
        }
        //1左不为空
        if(x.left!==null) {
            if(y.left===null) {
                return false;
            } else {
                if(x.left.val!==y.left.val) {
                    return false;
                }
                a.push(x.left);
                b.push(y.left);
            }
        }
        //1右为空
        if(x.right===null) {
            if(y.right!==null) {
                return false;
            }
        }
        //1右不为空
        if(x.right!==null) {
            if(y.right===null) {
                return false;
            } else {
                if(x.right.val!==y.right.val) {
                    return false;
                }
                a.push(x.right);
                b.push(y.right);
            } 
        }
   }
   return true;
};
// @lc code=end

