//3,0,0,3,0,0,3;
function shellSort(arr) {
    //在做最后一次处理时，大部分元素都已经在正确的位置，不用过多移动
    const gaps = [5,2,1];
    for(let i = 0; i <= gaps.length-1; i++) {
        //第一个元素为起始位置，就为0+gaps[i]即gaps[i];
        for(let outer = gaps[i]; outer<=arr.length-1; outer++) {
            //记录要向前插入的元素
            let inner = outer;
            let temp = arr[outer];
            while(arr[inner]<arr[inner-gaps[i]]&&inner>=gaps[i]) {
                //大的元素向后移动，这里间隔为gaps[i];
                arr[inner] = arr[inner-gaps[i]];
                inner = inner - gaps[i];
            }
            //向前插入元素
            arr[inner] = temp;
        }
        //输出一定间隔的排序效果
        console.log(`间隔为${gaps[i]},排序后的效果为:${arr.toString()}`);
    }
    return arr;
}
const a = [1,2,5,2,3,5,6,7,6,9];
console.log(shellSort(a));