/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const result = [];
    const path = [];
    function solve(index) {
        if (index === s.length) {
            result.push(path.join(" "))
            return;
        }
        if (index > s.length) {
          return;
        }
        for (let word of wordDict) {
            if (word === s.slice(index, index+word.length)) {
                path.push(word)
                solve(index + word.length)
                path.pop()
            }
        }
    }
    solve(0);
    return result;
};

const s = "catsanddog";
const wordDict = ["cat", "cats", "and", "sand", "dog"];
console.log(wordBreak(s, wordDict));