function Minheap() {
    this.heap = [];
    this.getLeftIndex = (index)=>{      //左节点索引为2*x+1
        return 2*index+1;
    }
    this.getRightIndex = (index)=>{     //右节点索引为2*x+2
        return 2*index+2;
    }
    this.getParentIndex = (index)=>{    //父节点索引为(x-1)/2
        return Math.floor((index-1)/2);
    }
    this.insert = (value)=>{            //插入元素，返回布尔值
        if(value!=null) {
            this.heap.push(value);
            this.siftUp(this.heap.length-1);    //插入至数组末尾，向上进行调整
            return true;
        }
        return false;
    }
    this.siftUp = (index)=>{
        if(index>0&&this.heap[index]<this.heap[this.getParentIndex(index)]) {
            this.swap(this.heap,index,this.getParentIndex(index));
            var current = this.getParentIndex(index);
            this.siftUp(current);
        }
    }
    this.swap = (arr,pos1,pos2)=>{
        var cache = arr[pos1];
        arr[pos1] = arr[pos2];
        arr[pos2] = cache;
    }
    this.getMin = ()=>{
        return (this.heap.length==0)?undefined:this.heap[0];
    }
    this.extract = ()=>{        //提取最小堆的最小值并删除
        if(this.heap.length==0) {
            return undefined;
        }
        if(this.heap.length==1) {
            return this.heap[0];
        } else {
            var min = this.heap[0];
            this.heap[0] = this.heap[this.heap.length-1];
            this.heap.length--;
            this.siftDown(0);
            return min;
        }
    }   
    this.siftDown = (index)=>{      //向下调整堆
        var left = this.getLeftIndex(index);
        var right = this.getRightIndex(index);
        var size = this.heap.length;
        var pos;
        if(left<size&&this.heap[index]>this.heap[left]&&(right>=size||this.heap[left]<this.heap[right])) {
            pos = left;
        }
        if(right<size&&this.heap[index]>this.heap[right]&&this.heap[right]<this.heap[left]) {
            pos = right;
        }
        if(pos!=index) {
            this.swap(this.heap,index,left);
            this.siftDown(pos);
        }
    }
}
var heap1 = new Minheap();
heap1.insert(5);
heap1.insert(4);
heap1.insert(77);
heap1.insert(34);
heap1.insert(16);
console.log(heap1.extract());
console.log(heap1.getMin());
for(var i=0;i<heap1.heap.length;i++){
    console.log(heap1.heap[i]);
}