function radixSort(arr,radixBase = 10) {
    if(arr.length<2) {
        return arr;
    }
    let significantDigit = 1;
    let max = arr[0];
    for(let item of arr) {
        max = Math.max(max,item);
    }
    //对每个位数进行排序，先排靠后的位数
    const arrSort = (arr,radixBase,significantDigit)=>{
        const queues = [];
        //通过计数排序来排列单个位数的元素
        for(let i = 0; i < radixBase; i++) {
            queues[i] = [];
        }
        let index;
        for(let i = 0; i < arr.length; i++) {
            //index获取当前位数上面的值，并放入对应的桶中
            index = Math.floor(arr[i]/significantDigit)%radixBase;
            queues[index].push(arr[i]);
        }
        let pos = 0;
        //将分好的元素进行输出，先进入的由于本位相同但后一位较小，必须先出
        for(let i = 0; i < radixBase; i++) {
            while(queues[i][0]!==void 0) {
                arr[pos++] = queues[i].shift();
            }
        }
        return arr;
    }
    //significantDigit为有效数字，通过最大值来控制排序次数
    while(max/significantDigit>=1) {
        arr = arrSort(arr,radixBase,significantDigit);
        significantDigit *= radixBase;
    }
    return arr;
}
let a = [];
for(let i = 0; i < 12; i++) {
    a.push(Math.floor(Math.random()*1000));
}
console.log(radixSort(a));