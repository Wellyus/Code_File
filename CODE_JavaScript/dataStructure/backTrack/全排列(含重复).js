var permuteUnique = function(nums) {
    //记录已访问路径
    const track = [];
    const result = [];
    const flag = new Array(nums.length);
    flag.fill(0);
    function trackback(nums,track) {
        if(nums.length===track.length) {
            //引用型数据如何判断值相等?
            if(result.includes([...track])===false) {
                result.push([...track]);
            }
        } else {
            for(let i = 0; i < nums.length; i++) {
                //未访问节点，加入已选路径中
                if(flag[i]===0) {
                    track.push(nums[i]);
                    flag[i] = 1;
                    trackback(nums,track);
                    //遍历结束删除当前元素
                    track.pop();
                    flag[i] = 0;
                }
            }
        }
    }
    trackback(nums,track);
    const set = new Set(result);
    return [...set];
};
const arr = [1,1,2];
console.log(permuteUnique(arr));