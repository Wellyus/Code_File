var generateParenthesis = function(n) {
    const res = new Map();
    res.set("left",0);
    res.set("right",0);
    const result = [];
    const cache = [];
    let solve = function() {
        if(cache.length===2*n) {
            let str = ``;
            for(let i of cache) {
                str+=i;
            }
            result.push(str);
            return ;
        }
        const arr = ["(",")"];
        for(let i = 0; i < 2; i++) {
            cache.push(arr[i]);
            arr[i]==="("?res.set("left",res.get("left")+1):res.set("right",res.get("right")+1);
            if(res.get("right")>res.get("left")||res.get("right")>n||res.get("left")>n) {
                cache.pop();
                arr[i]==="("?res.set("left",res.get("left")-1):res.set("right",res.get("right")-1);
                continue;
            }
            solve();
            cache.pop();
            arr[i]==="("?res.set("left",res.get("left")-1):res.set("right",res.get("right")-1);
        }
    }
    solve();
    return result;
};
console.log(generateParenthesis(7));