function heapSort(arr) {
    if(arr.length<2) {
        return arr;
    }
    //构建最大堆
    function heapify(arr,tail) {
        for(let i = Math.floor((tail-1)/2);i>=0;i--) {
            let left = 2*i+1;
            let right = 2*i+2;
            if(arr[i]<arr[left]) {
                [arr[i],arr[left]] = [arr[left],arr[i]];
            }
            if(right<=tail) {
                if(arr[i]<arr[right]) {
                    [arr[i],arr[right]] = [arr[right],arr[i]];
                }
            }
        }
        console.log(arr.toString());
    }
    let tail = arr.length-1;
    while(tail>0) {
        heapify(arr,tail);
        [arr[0],arr[tail]] = [arr[tail],arr[0]];
        tail--;
    }
    return arr;
}
const arr = [];
for(let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random()*100));
}
console.log(arr.toString());
console.log(heapSort(arr).toString());