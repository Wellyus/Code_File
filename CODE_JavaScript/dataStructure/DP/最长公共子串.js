//param:str1,str2
//return str
var sameSubStr = function(str1,str2) {
    //res[i][j] = res[i-1][j-1]+2(str[i]==str[j]);
    const res = new Array(str1.length+1);
    for(let i = 0; i < str1.length+1; i++) {
        res[i] = new Array(str2.length+1);
    }
    let max = 0;
    let index = -1;
    for(let i = 0; i < str1.length+1; i++) {
        for(let j = 0; j < str2.length+1; j++) {
            if(i===0||j===0) {
                res[i][j] = 0;
                continue;
            }
            if(str1[i-1]===str2[j-1]) {
                res[i][j] = res[i-1][j-1] + 1;
            } else {
                res[i][j] = 0;
            }
            if(res[i][j]>max) {
                max = res[i][j];
                index = i;
            }
        }
    }
    console.log(max);
    let str = ``;
    while(max>0) {
        str = str1[index]+str;
        index--;
        max--;
    }
    return str;
}
let str1 = `asdfghjkl`;
let str2 = `ghjms`;
console.log(sameSubStr(str1,str2));