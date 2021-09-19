//param:string s
//return number s
function longestPalindromeSubseq(s) {
    if(s===``) {
        return 0;
    }
    //定义子问题，s字符串索引i,j-1间隔的最长回文子序列为num[i][j],当前状态由num[i+1][j-1]+2,max(num[i+1][j],num[i][j-1])转移而来;
    //[..............]
    //[....(i.j).....]
    //[..............]      
    //[..............];
    //////////////////
    //定义基例，子串回文最小值为1,由于需要之前的状态转移而来，故多开辟一行一列的空间;
    //以数组num[i][j]记录当前状态，其中i<=j-1;
    // abcdcba; ab
    const num = new Array(s.length+1);
    for(let i = 0; i <= s.length; i++) {
        num[i] = new Array(s.length+1);
    }
    for(let i = s.length; i >= 0; i--) {
        for(let j = 0; j <= s.length; j++) {
            //重点，初值条件设置
            if(i>j-1) {
                num[i][j] = 0;
                continue;
            }
            if(i===j-1) {
                num[i][j] = 1;
                continue;
            }
            if(s[i]===s[j-1]) {
                //此种情况i+1<=j-1;
                num[i][j] = num[i+1][j-1]+2;
            } else {
                num[i][j] = Math.max(num[i+1][j],num[i][j-1]);
            }
        }
    }
    return num[0][s.length];
}
const s = "bbbab";
console.log(longestPalindromeSubseq(s));