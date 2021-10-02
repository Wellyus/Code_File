//param: string
//return number[];
//2+3-5*7;
var diffWaysToCompute = function(expression) {
    function solve(expression) {
        const result = [];
        for(let i = 0; i < expression.length; i++) {
            let left = [];
            let right = [];
            if(expression[i]===`+`) {
                left = solve(expression.slice(0,i));
                right = solve(expression.slice(i+1));
                for(let i = 0; i < left.length; i++) {
                    for(let j = 0; j < right.length; j++) {
                        result.push(left[i]+right[j]);
                    }
                }
            }
            if(expression[i]===`-`) {
                left = solve(expression.slice(0,i));
                right = solve(expression.slice(i+1));
                for(let i = 0; i < left.length; i++) {
                    for(let j = 0; j < right.length; j++) {
                        result.push(left[i]-right[j]);
                    }
                }
            }
            if(expression[i]===`*`) {
                left = solve(expression.slice(0,i));
                right = solve(expression.slice(i+1));
                for(let i = 0; i < left.length; i++) {
                    for(let j = 0; j < right.length; j++) {
                        result.push(left[i]*right[j]);
                    }
                }
            }
        }
        if(result.length===0) {
            return [parseInt(expression)];
        }
        return result;
    }
    return solve(expression);
};
console.log(diffWaysToCompute(`11+11`));