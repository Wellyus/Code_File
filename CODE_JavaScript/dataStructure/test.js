/*function minCoinChange(coins,amount) {
    const  cache = [];
    const makeChange = (value) => {
        if(!value) {
            return [];
        }
        if(cache[value]) {
            return cache[value];
        }
        let min = [];
        let newMin;
        let newAmount;
        for(let i = 0; i < coins.length; ++i) {
            const coin = coins[i];
            newAmount = value - coin;
            if(newAmount > 0) {
                newMin = makeChange(newAmount);
            }
            if(newAmount >= 0 && (newMin.length < min.length-1) && (newMin.length || !newAmount)) {
                min = [coin].concat(newMin);
            console.log('new Min '+min+' for '+amount);
            }
        }
        return (cache[value] = min);
    }
    return makeChange(amount);
}
console.log(minCoinChange([1,5,10,25],36));
*/
//递归写法，自顶向下
/*
const coinChange = (coins,amount)=>{
    var cache = [];
    const dp = (n)=>{
        if(n==0) {
          return 0;
        }
        if(cache[n]!=void 0) {
            return cache[n];
        }
        var min = amount+1;
        for(let coin of coins) {
          let newAmount = n-coin;
          if(newAmount<0) {
            continue;
          }
          min = Math.min(min,dp(newAmount)+1);
        }
        cache[n] = min;
        return min;
    }
    return dp(amount)===amount+1?-1:dp(amount);
  }
  let a = coinChange([1,2,3,4,5],10);
  console.log(a);
  */
//迭代写法，自底向上
/*
const coinChange1 = (coins,amount)=>{
    const dp = new Array(amount+1);
    dp.fill(amount+1);
    dp[0] = 0;
    for(let i = 1; i < dp.length; ++i) {
        for(let coin of coins) {
            var newAmount = i - coin;
            if(newAmount<0) {
                continue;
            } else {
                dp[i] = Math.min(dp[i-coin]+1,dp[i]);
            }
        }
    }
    return dp[amount]==amount+1?-1:dp[amount];
}
let b = coinChange1([1,2],10);
console.log(b);*/
class Book {
    constructor(name) {
        this.name = name;
    }
    set h1(name) {
        this.name = name;
    }
    get h2() {
        return this.name;
    }
}
let book = new Book(`hobby`);
console.log(book.name);
console.log(book.h2);
book.h1 = `alogorithm`;
console.log(book.h2);