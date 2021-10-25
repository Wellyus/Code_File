var connect = function(root) {
  const arr = [];
  let left = 0;
  let right = 0;
  arr[right++] = root;
  while (right > left) {
    let r = right;
    let l = left;
    for (let i = l; i < r; i++) {
      let p = arr[left++];
      if (p.left !== null) {
        arr[right++] = p.left;
        arr[right++] = p.right;
      }
      if (i === r-1) {
        arr[i].next = null;
      } else {
        arr[i].next = arr[i+1];
      }
    }
  }
}

//JavaScript数组迷惑行为大赏1
var connect = function(root) {
  const arr = [];
  arr.push(root);
  let len = 0;
  while (arr.length > 0) {
    len = arr.length;
    for (let i = 0; i < len; i++) {
      if (i === len - 1) {
        arr[i].next = null;
      } else {
        arr[i].next = arr[i+1];
      }
      if (arr[i].left !== null) {
        arr.push(arr[i].left);
      } 
      if (arr[i].right !== null) {
        arr.push(arr[i].right);
      }
    }
  }
  return arr;
}