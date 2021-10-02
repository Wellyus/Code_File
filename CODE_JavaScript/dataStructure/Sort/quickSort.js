/*function quickSort(arr) {
    //快速排序并返回索引
    const partition = (arr,left,right)=>{
        const middle = Math.floor((left+right)/2);
        let i = left;
        let j = right;
        while(i<=j) {
            while(arr[i]<arr[middle]) {
                i++;
            }
            while(arr[j]>arr[middle]) {
                j--;
            }
            if(i<=j) {
                [arr[i],arr[j]] = [arr[j],arr[i]];
                i++;
                j--;
            }
        }
        return i;
    }
    const quick = (arr,left,right)=>{
        if(arr.length>1) {
            let i = partition(arr,left,right);
            if(left<i-1) {
                quick(arr,left,i-1);
            }
            if(i<right) {
                quick(arr,i,right);
            }
        }
        return arr;
    }
    return quick(arr,0,arr.length-1);
}*/
function quickSort(arr) {
    if(arr.length<=1) {
        return arr;
    }
    let pivot = arr[0];
    const lesser = [];
    const greater = [];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i]<pivot) {
            lesser.push(arr[i]);
            //console.log(`基准值${pivot},当前值${arr[i]}左移`);
        } else {
            greater.push(arr[i]);
            //console.log(`基准值${pivot},当前值${arr[i]}右移`);
        }
    }
    return quickSort(lesser).concat(pivot,[...quickSort(greater)]);
}
const arr = [];
for(let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random()*15));
}
console.log(arr);
console.log(quickSort(arr));