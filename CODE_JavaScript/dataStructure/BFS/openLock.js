function openLock(deadends,target) {
    function up(str,index) {
        if(str[index]===`9`) {
            return str.slice(0,index)+`0`+str.slice(index+1);
        } else {
            return str.slice(0,index)+(parseInt(str[index])+1)+str.slice(index+1);
        }
    }
    function down(str,index) {
        if(str[index]===`0`) {
            return str.slice(0,index)+`9`+str.slice(index+1);
        } else {
            return str.slice(0,index)+(parseInt(str[index])-1)+str.slice(index+1);
        }
    }
    const cache = [];
    const result = new Map();
    let min = 0;
    cache.push(`0000`);
    result.set(`1000`,true);
    while(cache[0]!==void 0) {
        let num = cache.length;
        for(let i = 0; i < num; i++) {
            let str = cache.shift();
            if(str===target) {
                return min;
            }
            //包含锁定选项，跳过
            if(deadends.includes(str)===true) {
                continue;
            }
            for(let j = 0; j < 4; j++) {
                let nextStr = up(str,j);
                if(result.get(nextStr)===undefined) {
                    cache.push(nextStr);
                    result.set(nextStr,true);
                }
                nextStr = down(str,j);
                if(result.get(nextStr)===undefined) {
                    cache.push(nextStr);
                    result.set(nextStr,true);
                }
            }
        }
        min++;
    }
    return -1;
}
const deadends = [`0201`,`0101`,`0102`,`1212`,`2002`];
const target = `0202`;
console.log(openLock(deadends,target));