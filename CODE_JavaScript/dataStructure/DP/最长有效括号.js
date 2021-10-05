/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    if(s===``) {
        return 0;
    }
    const res = new Array(s.length);
    res[0] = 0;
    res[1] = s[0]==`(`&&s[1]==`)`?2:0;
    res[2] = s[1]==`(`&&s[2]==`)`?2:0;
    let max = Math.max(res[1],res[2]);
    for(let i = 2; i < s.length; i++) {
        let max1 = s[i-1-res[i-1]]==`(`&&s[i]==`)`?res[i-1]+2:0;
        let max2 = s[i-1]==`(`&&s[i]==`)`?res[i-2]+2:0;
        res[i] = Math.max(max1,max2);
        max = Math.max(max,res[i]);
    }
    return max;
};
console.log(longestValidParentheses(`()(())`));