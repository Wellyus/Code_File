function node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}
const arr = [];
for (let i = 0; i <= 6; i++) {
  arr[i] = new node(i, null ,null);
}
arr[0].left = arr[1];
arr[0].right = arr[2];
arr[1].left = arr[3];
arr[1].right = arr[4];
arr[2].left = arr[5];
arr[2].right = arr[6];
var connect = function(root) {
  const arr1 = [];
  if (root === null) {
    return root;
  }
  arr1.push(root);
  let len = 0;
  while (arr1.length > 0) {
    len = arr1.length;
    for (let i = 0; i < len; i++) {
      let cur = arr1.shift();
      if (i < len - 1) {
        cur.next = arr1[0];
      } else {
        cur.next = null;
      }
      if (cur.left !== null) {
        arr1.push(cur.left);
      } 
      if (cur.right !== null) {
        arr1.push(cur.right);
      }
    }
  }
  return root;
}
connect(arr[0]);

