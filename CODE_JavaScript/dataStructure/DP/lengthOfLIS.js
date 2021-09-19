function lengthOfLIS(nums) {
    if(nums.length===0) {
        return 0;
    }
    //nums[i]表示以nums[i]结尾的最长递增子序列的长度
    const num = new Array(nums.length);
    num[0] = 1;
    for(let i = 1; i <nums.length; i++) {
        let max = 0;
        let equal = 1;
        //1234; 444;  321;
        for(let j = 0; j < i; j++) {
            if(nums[j]===nums[i]) {
                equal = num[j];
            }
            if(nums[j]<nums[i]) {
                max = Math.max(max,num[j]);
            }
        }
        num[i] = max===0?equal:max+1;
    }
    let max = 1;
    for(let i = 0;i < num.length; i++) {
        max = Math.max(max,num[i]);
    }
    return max;
}
const nums = [1,3,6,7,9,4,10,5,6];
console.log(lengthOfLIS(nums));