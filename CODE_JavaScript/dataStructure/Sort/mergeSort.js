//归并排序
/*
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
*/
function mergeSort(arr) {
    if (arr.length < 2) {
        return;
    }
    let step = 1;
    let left, right;
    while (step < arr.length) {
        left = 0;
        right = step;
        while (right + step <= arr.length) {
            mergeArray(arr, left, left+step, right, right+step);
            left = right+step;
            right = left+step;
        }
        if (right < arr.length) {
            mergeArray(arr, left, left+step, right, arr.length);
        }
        step *= 2;
    }
}
function mergeArray(arr, start_left, stop_left, start_right, stop_right) {
    let right_arr = new Array(stop_right - start_right + 1);
    let left_arr = new Array(stop_left - start_left + 1);
    let k = start_right;
    for (let i = 0; i < (right_arr.length-1); i++) {
        right_arr[i] = arr[k++];
    }
    k = start_left;
    for (let i = 0; i < (left_arr.length-1); i++) {
        left_arr[i] = arr[k++];
    }
    right_arr[right_arr.length-1] = Infinity;
    left_arr[left_arr.length-1] = Infinity;
    let m = 0;
    let n = 0;
    for (let k = start_left; k < stop_right; k++) {
        if (left_arr[m] <= right_arr[n]) {
            arr[k] = left_arr[m++];
        } else {
            arr[k] = right_arr[n++];
        }
    }
}
function is_sorted(arr) {
    if (arr.length < 2) {
        return true;
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            return false;
        }
    }
    return true;
}
let nums = [];
for (let i = 0; i < 20; i++) {
    nums.push(Math.floor(Math.random()*50) + 50);
}
console.log(nums);
mergeSort(nums);
console.log(is_sorted(nums));