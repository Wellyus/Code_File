var checkSubarraySum = function(nums, k) {
    const prefix = [];
    let cache = 0;
    prefix[0] = 0;
    const map = new Map();
    map.set(0,0);
    for(let i = 0; i < nums.length; i++) {
        cache+=nums[i];
        prefix[i+1] = cache%k;
        console.log(prefix[i+1]);
        if(map.has(prefix[i+1])) {
            if(i+1-map.get(prefix[i+1])>=2) {
                return true;
            }
        } else {
            map.set(prefix[i+1],i+1);
        }
    }
    return false;
};
checkSubarraySum([23,2,4,6,6],7);