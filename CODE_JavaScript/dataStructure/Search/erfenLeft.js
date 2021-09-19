function erfen(arr,val) {
    if(arr.length===0) {
        return false;
    }
    let left = 0;
    let right = arr.length-1;
    //1,2,2,2,2,5;
    while(left<=right) {
        //更新中间节点
        let mid = (left-right)/2;
        mid = Math.floor(mid+right);
        if(arr[mid]===val) {
            right = mid;
            if(left===right) {
                return left;
            }
        } else if(arr[mid]<val) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}
const arr = [1,2,2,2,2,5];
console.log(erfen(arr,5));