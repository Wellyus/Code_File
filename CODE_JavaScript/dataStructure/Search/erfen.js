//二分查找
//param:arr,val;
//return boolean;
function search(arr,val) {
    if(arr.length===0) {
        return false;
    }
    let left = 0;
    let right = arr.length-1;
    //查找区间为数组的闭区间
    //1,2,3,4,5,6,7
    while(left<=right) {
        //let mid = Math.floor((left+right)/2);   //中间或靠左边
        let mid = (left-right)/2;
        mid = Math.floor(mid+right);
        if(val===arr[mid]) {
            return true;
        } else if(val<arr[mid]) {
            right = mid-1;
        } else {
            left = mid+1;
        }
    }
    return false;
}
const arr = [1,2,3,4,5];
for(let i = 0; i < 7; i++) {
    console.log(search(arr,i));
}
