//归并排序
function mergeSort(arr) {
    if(arr.length>1) {
        const middle = Math.floor(arr.length/2);
        //分割
        const left = mergeSort(arr.slice(0,middle));                //分割，排序合并
        const right = mergeSort(arr.slice(middle,arr.length));      //分割，排序合并
        //排序合并
        arr = merge(left,right);
    }
    return arr;
}
function merge(left,right) {
    let i = 0;
    let j = 0;
    const arr = [];
    while(i<left.length&&j<right.length) {
        //left[i]<right[j]?arr.push[left[i++]]:arr.push[right[j++]];
        left[i]<right[j]?arr.push(left[i++]):arr.push(right[j++]);
        //arr.push(left[i]<right[j]?left[i++]:right[j++]);
    }
    return i<left.length?arr.concat(left.slice(i,left.length)):arr.concat(right.slice(j,right.length));
}
