function bucketSort(arr,bucketSize=5) {
    if(arr.length<2) {
        return arr;
    }
    //根据桶的容量创建桶，并把元素放在桶里面
    const createBuckets = (arr,bucketSize)=>{
        let min = arr[0];
        let max = arr[0];
        for(let item of arr) {
            min = Math.min(min,item);
            max = Math.max(max,item);
        }
        //计算桶的数目
        const bucketCount = Math.ceil((max-min+1)/bucketSize);
        const buckets = [];
        //对桶初始化
        for(let i = 0; i < bucketCount; i++) {
            buckets[i] = [];
        }
        //把元素放入桶中
        for(let i = 0; i < arr.length; i++) {
            let index = Math.floor((arr[i]-min)/bucketSize);
            buckets[index].push(arr[i]);
        }
        return buckets;
    }
    const insertSort = (arr)=>{
        if(arr.length<2) {
            return arr;
        }
        for(let outer = 1; outer < arr.length; outer++) {
            const item = arr[outer];
            let inner = outer;
            while(arr[inner-1]>item&&inner>=1) {
                arr[inner] = arr[inner-1];
                inner--;
            }
            arr[inner] = item;
        }
        return arr;
    }
    const sortBuckets = (arr)=>{
        const sortedArray = [];
        for(let i = 0; i < arr.length; i++) {
            if(arr[i]!=null) {
                insertSort(arr[i]);
                sortedArray.push(...arr[i]);
            }
        }
        return sortedArray;
    }
    const buckets = createBuckets(arr,bucketSize);
    return sortBuckets(buckets);
}
const a = [1,5,43,2,6,7,4,8,9,3,43,15,36,17];
console.log(bucketSort(a));

