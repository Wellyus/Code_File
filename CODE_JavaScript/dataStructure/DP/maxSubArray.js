//parameter:nums:[]
//return num:max;
//[1,2,3,4,-8,5,999,-70];
//暴力枚举
function maxSubArray(nums) {
    if(nums.length===0) {
        return undefined;
    }
    //求以i为起点的最大子串和
    let max = -Infinity;
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        for(let j = i; j < nums.length; j++) {
            sum+=nums[j];
            max = Math.max(sum,max);
        }
    }
    return max;
}
function remaxSubArray(nums) {
    if(nums.length===0) {
        return undefined;
    }
    //定义子问题，由于是连续文字，故子问题应该保留连续的特性，子问题定义为以i为结尾的连续元素的最大和
    //res[i] = max(nums[i],res[i-1]+nums[i])
    const res = new Array(nums.length);
    res[0] = nums[0];
    let max = res[0];
    for(let i = 1; i < nums.length; i++) {
        res[i] = Math.max(nums[i],res[i-1]+nums[i]);
        max = Math.max(max,res[i]);
    }
    return max;
}
const arr = [1,2,-7,5];
console.log(remaxSubArray(arr));