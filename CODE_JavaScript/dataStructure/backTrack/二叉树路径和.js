var sumNumbers = function(root) {
  let sum = 0;
  const arr = [];
  function solve(node) {
  if (node.left === null && node.right === null) {
      let i = 1;
      for (let j = arr.length - 1 ; j >= 0; j--) {
          sum += i * arr[j];
          i *= 10;
      }
      return;
    }
    if (node.left !== null) {
      arr.push(node.left.val);
      solve(node.left);
      arr.pop();
    }
    if (node.right !== null) {
      arr.push(node.right.val);
      solve(node.right);
      arr.pop();
    }
  }
  arr.push(root.val);
  solve(root);
  return sum;
};