function longestPalindrome(str) {
    if(str==='') {
        return str;
    }
    //返回以i,j为中心的回文串
    //基例有两种时，可以尝试用同一种表示，关键在于用不同的参数表示相同的变量，调用函数时可以向参数传递相同的值；
    function isPalindrome(str,i,j) {
        //abba中心相等   aba中心为一个字符
        while(i>=0&&j<str.length&&str[i]===str[j]) {
            i--;
            j++;
        }
        return str.slice(i+1,j)
    }
    //abcdcba;
    let result = '';
    for(let i = 0; i < str.length; i++) {
        //寻找以i为中心的回文，寻找以i和i+1为中心的回文;
        let res1 = isPalindrome(str,i,i);
        let res2 = isPalindrome(str,i,i+1);
        result = res1.length>result.length?res1:result;
        result = res2.length>result.length?res2:result;
    }
    return result;
}
const str = "aabba";
console.log(longestPalindrome(str));