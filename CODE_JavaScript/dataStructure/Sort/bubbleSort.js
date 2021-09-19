function bubbleSort(arr) {
    let len = arr.length;
    for(let i = 1; i <= len-1; i++) {
        for(let j = 1; j <=len-i; j++ ) {
            if(arr[j]<arr[j-1]) {
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
            }
        }
    }
    return arr;
}
const a = [3,4,5,1,2];
console.log(bubbleSort(a));