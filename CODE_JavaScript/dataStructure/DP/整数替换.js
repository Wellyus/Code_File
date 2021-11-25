/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
  const result = new Array(n+1)
  result[0] = 0
  result[1] = 0
  for (let i = 2; i <=n; i++) {
    if (i%2 === 0) {
      result[i] = result[i/2] + 1
    }
    if (i%2 === 1) {
      result[i] = Math.min(result[i-1]+1, result[(i+1)/2]+2)
    }
  }
  return result[n]
};

var integerReplacement_ = function(n) {
  function solve(n) {
    if (n === 1) {
      return 0
    }
    if (n%2 === 0) {
      return solve(n/2)+1
    }
    return Math.min(solve(Math.floor(n/2)), solve(Math.ceil(n/2)))+2
  }
  return solve(n)
}

var integerReplace = function(n) {
  const map = new Map()
  function solve(n) {
    if (n === 1) {
      return 0
    }
    if (!map.has(n)) {
      if (n%2 === 0) {
        map.set(n, solve(n/2)+1)
      }
      if (n%2 === 1) {
        map.set(n, Math.min(solve(Math.floor(n/2)), solve(Math.ceil(n/2)))+2)
      }
    }
    return map.get(n)
  }
  return solve(n)
}
const n = 100000000
console.log(integerReplace(n))