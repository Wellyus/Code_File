//求字符串最长递增子串
//1234543
//arr[i][j]表示i,j子串的递增子串的最大长度
function lengthOfLIStr(nums) {
    if(nums.length===0) {
        return 0;
    }
    const arr = new Array(nums.length);
    for(let i = 0; i < nums.length; i++) {
        arr[i] = new Array(nums.length);
    }
    function LIStr(nums,i,j) {
        if(i>j) {
            return 0;
        } else if(i===j) {
            return 1;
        } else {
            var len = 1;
            while(nums[i]<nums[i+1]&&i>=0&&i<=nums.length-1) {
                len++;
                i++;
            }
        }
        return len;
    }
    let max = 1;
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            let res = LIStr(nums,i,j);
            arr[i][j] = res;
            max = Math.max(max,arr[i][j]);
        }
    }
    return max;
}   
const arr = [1,2,4,3,5,6,7];
console.log(relengthOfLIStr(arr));

//DP
function relengthOfLIStr(str) {
    if(str===``) {
        return 0;
    }
    const num = new Array(str.length);
    let max = 1;
    for(let i = 0; i < str.length; i++) {
        let res = 1;
        let j = i;
        while(str[j]<str[j+1]&&j<=str.length-1) {
            res++;
            j++;
        }
        num[i] = res;
        max = Math.max(max,num[i]);
    }
   return max;
}