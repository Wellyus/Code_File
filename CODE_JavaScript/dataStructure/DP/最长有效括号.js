/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if (s.length === 0) {
    return 0;
  }
  let max = 0;
  const res = [];
  res[0] = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === '(') {
      res[i] = 0;
    } else {
      if (s[i-1] === '(') {
        res[i] = i-2>=0 ? res[i-2]+2 : 2;
      } else {
        if (i-res[i-1]-1 >= 0) {
          if (s[i-res[i-1]-1] === '(') {
            res[i] = i -res[i-1]-2>=0 ? res[i-1]+res[i-res[i-1]-2]+2 : res[i-1]+2;
          } else {
            res[i] = 0;
          }
        } else {
          res[i] = 0;
        }
      }
    }
    max = Math.max(max, res[i]);
  }
  console.log(res);
  return max;
};
console.log(longestValidParentheses(`)()())`));