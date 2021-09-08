//背包问题
function knapsack(capacity,size,value,n) {
    if((n===0)||capacity == 0) {
        return 0;
    }
    if(size[n-1]>capacity) {
        return knapsack(capacity,size,value,n-1);
    } else {
        return Math.max(value[n-1]+knapsack(capacity-size[n-1],size,value,n-1),knapsack(capacity,size,value,n-1));
    }
}
/*
var value = [4,5,10,11,13];
var size = [3,4,7,8,9];
var capacity = 16;
var n = 5;
console.log(knapsack(capacity,size,value,n));
*/
function reknapsack(capacity,size,value,n) {
    const arr = [];
    for(let i = 0; i <= n; i++) {
        arr[i] = [];
        for(let j = 0; j <= capacity; j++) {
            arr[i][j] = 0;
        }
    }
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= capacity; j++) {
            if(size[i-1]<=j) {
                arr[i][j] = Math.max(arr[i-1][j-size[i-1]]+value[i-1],arr[i-1][j]);
            } else {
                arr[i][j] = arr[i-1][j];
            }
        }
    }
    return arr[n][capacity];
}
var value = [4,5,10,11,13];
var size = [3,4,7,8,9];
var capacity = 16;
var n = 5;
console.log(reknapsack(capacity,size,value,n));
