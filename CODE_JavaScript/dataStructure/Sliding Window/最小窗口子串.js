//param: s,t;
//return string;|-1
var minWindow = function(s,t) {
    let left = 0;
    let right = 0;
    let valid = 0;
    let l = 0;
    let r = 0;
    let min = Infinity;
    const window = new Map();
    const needs = new Map();
    for(let i = 0; i < t.length; i++) {
        needs.get(t[i])===undefined?needs.set(t[i],1):needs.set(t[i],needs.get(t[i])+1);
        window.set(t[i],0);
    }
    //扩大窗口，直到包含t
    //AAAABC ABC
    while(right<=s.length-1) {
        if(window.get(s[right])!==undefined) {
            window.set(s[right],window.get(s[right])+1);
            if(window.get(s[right])===needs.get(s[right])) {
                valid++;
            }
        }
        //缩小窗口，直到不包含t
        while(valid===window.size) {
            console.log(s.slice(left,right+1));
            if(right-left<min) {
                l = left;
                r = right;
                min = right-left;
            }
            let char = s[left];
            left++;
            if(window.get(char)!==undefined) {
                if(window.get(char)===needs.get(char)) {
                    valid--;
                }
                window.set(char,window.get(char)-1);
            }
        }
        right++;
    }
    return min===Infinity?``:s.slice(l,r+1);
}
const s = `ADOBECODEBANC`;
const t = `ABC`;
console.log(minWindow(s,t));