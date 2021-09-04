function selectionSort(arr) {
    let len = arr.length;
        //i从第一个位置开始，一直到倒数第二个位置
    for(let i = 0; i <= len-2; i++) {
        let index = i;
        let min = arr[i];
        //j从当前位置的下一个位置开始，一直到最后一个位置
        for(let j = i+1; j <= len-1; j++) {
            if(arr[j]<min) {
                index = j;
                min = arr[j];
            }
        }
        [arr[i],arr[index]] = [arr[index],arr[i]]; 
    }
    return arr;
}
const a = [3,25,5,3,6,7,2];
console.log(selectionSort(a));
