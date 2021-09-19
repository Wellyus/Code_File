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
                if(solve(str.slice(i.length))===true) {
                    return true;
                }
            }
        }
        //所有情况都不匹配时，返回false;
        return false;
    }
    return solve(s);
}
//console.log(wordBreak("leetcode",["leet","code"]));
var reWordBreak = function(s,wordDict) {
    //定义子问题,当前串 = 子串+单词
    const memo = [];
    
    function solve(str) {
        if(str==="") {
            return true;
        }
        if(memo[str.length]!==void 0) {
            return memo[str.length];
        }
        for(let word of wordDict) {
            let index = str.length - word.length;
            if(str.slice(index)===word) {
                if(solve(str.slice(0,index))===true) {
                    //记录前面的子串为true
                    memo[index] = true;
                    return true;
                }
            }
        }
        //记录该子串无匹配
        memo[s.length] = false;
        return false;
    }
    return solve(s);
}
console.log(reWordBreak("frida",["fri","da"]));
