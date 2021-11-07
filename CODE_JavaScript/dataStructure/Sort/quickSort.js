function quickSort(arr, left, right) {
	if (arr.length < 2) {
		return arr;
	}
  let middle = Math.floor((left + right) / 2);
	let l = left;
	let r = right;
	while(l <= r) {
		while(arr[l] < arr[middle]) {
			l++;
		}
		while(arr[r] > arr[middle]) {
			r--;
		}
		if (l <= r) {
			[arr[l], arr[r]] = [arr[r], arr[l]];
			l++;
			r--;
		}
	}
	if (left < l-1) {
		quickSort(arr, left, l-1);
	}
	if (l < right) {
		quickSort(arr, l, right);
	}
	return arr;
}
const arr = [];
for(let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random()*15));
}
console.log(arr);
console.log(quickSort(arr, 0, arr.length-1));
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
const arr = [];
for(let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random()*15));
}
console.log(arr);
console.log(quickSort(arr));
 */