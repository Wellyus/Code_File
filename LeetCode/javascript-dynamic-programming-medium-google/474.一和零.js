/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    var array1 = [];
    var i = 0, j = 0;
    var numOne = 0, numZero = 0;
    for(i = 0; i < strs.length; i ++) {
        while(numOne <= n && numZero <= m) {
            for(var k = 0; k < strs[i].length; k ++) {
                if(strs[i][k]==1) {
                    numOne ++;
                } else {
                    numZero ++;
                }
            }
        }
        j ++;
        
    }
};
// @lc code=end

