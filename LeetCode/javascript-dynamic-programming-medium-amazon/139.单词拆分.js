/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const memo = new Array(s.length);
    function solve(index) {
        if(memo[index]!==void 0) {
            return memo[index];
        }
        if(index === s.length) {
            return true;
        }
        for(let i = index+1; i <= s.length; i++) {
            let str = s.slice(index,i);
            if(str in wordDict) {
                if(solve(i)) {
                    memo[i] = true;
                    return true;
                }
            }
        }
        memo[index] = false;
        return false;
    }
    return solve(0);
};
// @lc code=end
//
var wordBreak = function(s,wordDict) {
    const arr = [];
    const memo = new Array(s.length);
    arr.push(0);
    while(arr[0]!==void 0) {
        let a = arr.shift();
        if(a===s.length) {
            return true;
        }
        for(let i = a+1; i <= s.length; i++) {
            let str = s.slice(a,i);
            if(wordDict.includes(str)) {
                if(memo[a]!==void 0) {
                    continue;
                }
                arr.push(i);
                memo[i] = 1;
            }
        }
    }
    return false;
}
//  DP-solution
var wordBreak = function(s,wordDict) {
    //定义子问题，当前串=一个单词+子串
    function solve(str) {
        //基线条件，当子串为空，说明匹配完全，返回为true
        if(str==="") {
            return true;
        }
        for(let i of wordDict) {
            if(i===str.slice(0,i.length)) {
                //匹配子串后，解决子问题 
                if(solve(s.slice(i.length))===true) {
                    return true;
                }
            }
        }
        //所有情况都不匹配时，返回false;
        return false;
    }
    return solve(s);
}
