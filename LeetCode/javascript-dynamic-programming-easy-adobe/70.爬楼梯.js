/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n==1) {
        return 1;
    } else if(n==2) {
        return 2;
    } else {
        let p = 1;
        let q = 2;
        let num;
        for(let i = 3; i <= n; i++) {
            num = p + q;
            p = q;
            q = num;
        }
        return num;
    }
};
// @lc code=end

