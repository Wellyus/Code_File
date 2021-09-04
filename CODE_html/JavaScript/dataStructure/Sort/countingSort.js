function countingSort(arr) {
    if(arr.length<2) {
        return arr;
    }
    //一维数组存放元素出现的次数
    const findMax = (arr)=>{
        let max = arr[0];
        for(let i = 1; i < arr.length; i++) {
            max = Math.max(max,arr[i]);
        }
        return max;
    }
    const max = findMax(arr);
    const counts = new Array(max+1);
    counts.fill(0);
    arr.forEach((item)=>{
        counts[item]++;
    })
    //pos为arr数组中的下标位置
    let pos = 0;
    counts.forEach((item,index)=>{
        while(item>0) {
            arr[pos++] = index;
            item--;
        }
    })
    return arr;
}
const arr = [4,1,4,3,6,7];
console.log(countingSort(arr));