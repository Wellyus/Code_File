const heapsort = (arr)=>{
    var pos = arr.length-1;
    while(pos>0) {
        buildMaxHeap(arr,pos);      //建立0到arr下标pos的最大堆
        swap(arr,0,pos);            //获取最大值
        --pos;
    }
    return arr;
}
const buildMaxHeap = (arr,pos)=>{
    for(var i = Math.floor((pos-1)/2);i>=0;i--) {
        var left = 2*i+1;
        var right = 2*i+2;
        var current = i;
        if((arr[left]>arr[i]&&right>pos)||(right<=pos&&arr[left]>arr[i]&&arr[left]>arr[right])) {
            current = left;
        } 
        if(right<=pos&&arr[right]>arr[i]&&arr[right]>arr[left]) {
            current = right;
        }
        if(current!=i) {
            swap(arr,i,current);
            console.log("swap !");
        }
    }
}
const swap = (arr,pos1,pos2)=>{
    var cache = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = cache;
}
var nums = [6,4,11,2,3,4,5,1,12,8,333,89,1,100,78];
console.log(heapsort(nums));