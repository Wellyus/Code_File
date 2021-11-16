# 硬币找零问题
**题目描述**:给定一组面值不同的硬币大小coins[]，和目标零钱amount，求最少硬币数
**分析**: 状态转移方程，coinChange(amount) = min(coinChange(amount-coin)+1)
* 暴力递归写法：
```JavaScript{.line-numbers, highlight=12}
function coinChange(coins,amount) {
    const dp = (n)=>{
        if(n===0) {
            return 0;
        }
        var min = amount+1;
        for(let coin of coins) {
            if(n-coin<0) {
                continue;
            } else {
                //找到上一个子问题的最小值
                min = Math.min(min,dp[n-coin]+1);
            }
        }
        return min;
    }
    return dp(amount)===amount+1?-1:dp(amount);
}
```
***
* 带备忘录的递归写法:
```JavaScript{.line-numbers, highlight=16}
function coinChange(coins,amount) {
    var cache = newArrayl(amount+1);
    const dp = (n)=>{
        if(n===0) {
            return 0;
        }
        if(cache[n]!=void 0) {
            return cache[n];
        }
        var min = amount+1;
        for(let coin of coins) {
            if(n-coin<0) {
                continue;
            } else {
                //找到上一个子问题的最小值
                min = Math.min(min,dp[n-coin]+1);
            }
        }
        cache[n] = min;
        return min;
    }
    return dp(amount)===amount+1?-1:dp(amount);
}
```
***
* 带备忘录的迭代写法:
```JavaScript{.line-numbers, highlight=12} 
function coinChange (coins,amount) {
    //dp数组记录已经计算的钱数
    var dp = new Array(amount + 1); 
    dp.fill(amount + 1);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin < 0) {
                continue;
            } else {
                //找到上一个子问题的最小值
                dp[i] = Math.min(dp[i-coin]+1, dp[i]);
            }
        }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount];
}
```
***


