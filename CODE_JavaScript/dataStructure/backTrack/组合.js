const arr = [1,2,2,2,3,3,4,5];
const result = [];
const path = [];
function solve(left) {
  if (left === arr.length) {
    result.push([...path]);
    return;
  }
  for (let i = left; i < arr.length; i++) {
    if (i === left) {
      path.push(arr[i]);
      solve(i+1);
      path.pop(arr[i]);
    } else {
      // 剪搜索树的枝叶,除去相同元素
      if (arr[left] !== arr[left-1]) {
        path.push(arr[i]);
        solve(i+1);
        path.pop(arr[i]);
      }
    }
  }
}
const book = new Array(arr.length);
book.fill(false);

function solve_pailie() {
  if (path.length === arr.length) {
    result.push([...path]);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!book[i]) {
      book[i] = true;
      path.push(arr[i]);
      solve_pailie();
      path.pop();
      book[i] = false;
    }
  }
}
function solve2(left) {
  if (left === arr.length) {
    result.push([...path]);
    return;
  }
  path.push(arr[left]);
  solve2(left+1);
  path.pop();

  solve2(left+1);
}
solve_pailie();
console.log(result);



