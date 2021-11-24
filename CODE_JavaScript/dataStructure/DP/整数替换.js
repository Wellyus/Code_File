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
      result[i] = result[i-1] + 1
    }
  }
  return result[n]
};
const n = 65535 
console.log(integerReplacement(n))