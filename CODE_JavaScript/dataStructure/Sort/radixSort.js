function radixSort(arr,radixBase = 10) {
    if(arr.length<2) {
        return arr;
    }
    let min = arr[0];
    let max = arr[0];
    for(let item of arr) {
        min = Math.min(min,item);
        max = Math.max(max,item);
    }
    let significantDigit = 1;
    while((max-min)/significantDigit>=1) {
        arr = countingSortForRadix(arr,radixBase,significantDigit,min);
        significantDigit *= radixBase;
    }
    return arr;
}
function countingSortForRadix(arr,radixBase,significantDigit,min) {
    let bucketsIndex;
    const buckets = [];
    const aux = [];
    for(let i = 0; i < radixBase; i++) {
        buckets[i] = 0;
    }
    for(let i = 0; i < arr.length; i++) {
        bucketsIndex = Math.floor(((arr[i]-min)/significantDigit)%radixBase);
        buckets[bucketsIndex]++;
    }
    for(let i = 1; i < radixBase; i++) {
        buckets[i] += buckets[i-1];
    }
    for(let i = arr.length-1; i >= 0; i--) {
        bucketsIndex = Math.floor(((arr[i]-min)/significantDigit)%radixBase);
        aux[--buckets[bucketsIndex]] = arr[i];
    }
    for(let i = 0; i < arr.length; i++) {
        arr[i] = aux[i];
    }
    return arr;
}
const a = [2,1,6,34,89,3,56,32];
console.log(radixSort(a));