function insertSort(arr) {
    let len = arr.length;
    for(let outer = 1; outer <= len-1; outer++) {
        let inner = outer;
        let temp = arr[outer];
        //若前一个元素比当前元素大，则向后移一位，为当前元素腾出位置
        while(arr[inner-1]>temp&&inner>=1) {
            arr[inner] = arr[inner-1];
            inner--;
        }
        arr[inner] = temp;
    }
    return arr;
}
const a = [3,5,2,1,6,8,7];
console.log(insertSort(a));