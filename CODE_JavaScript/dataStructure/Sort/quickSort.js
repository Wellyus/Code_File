function quickSort(arr, left, right) {	
	if (left > right) {
		return;
	}
	let l = left;
	let r = right;
	let pivot = arr[left];
	while (l < r) {
		while (arr[r] >= pivot && l < r) {
			r--;
		}
		while (arr[l] <= pivot && l < r) {
			l++;
		}
		if (l < r) {
			[arr[l], arr[r]] = [arr[r], arr[l]];
		}
	}
	[arr[left], arr[l]] = [arr[l], arr[left]];
	quickSort(arr, left, l-1);
	quickSort(arr, l+1, right);
}
const arr = [6,1,14,2,7,9,3,4,5,11,15,13,12,10,8];
quickSort(arr, 0, arr.length-1);
console.log(arr);
/*
function quickSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    let pivot = arr[0];
    const lesser = [];
    const greater = [];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i]<pivot) {
            lesser.push(arr[i]);
            //console.log(`基准值${pivot},当前值${arr[i]}左移`);
        } else {
            greater.push(arr[i]);
            //console.log(`基准值${pivot},当前值${arr[i]}右移`);
        }
    }
    return quickSort(lesser).concat(pivot,quickSort(greater));
}
if (left > right) {
		
	}
console.log(arr);
console.log(quickSort(arr));
 */