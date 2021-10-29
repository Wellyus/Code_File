/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
  const color = [];
  const visited = [];
  const arr = [];
  for (let i = 1; i <= n; i++) {
    color[i] = false;
    visited[i] = false;
    arr[i] = [];
  }
  for (let i = 0; i < dislikes.length; i++) {
    let first = dislikes[i][0];
    let second = dislikes[i][1];
    arr[first].push(second);
    arr[second].push(first);
  }
  let res = true;
  function traverse(cur) {
    for (let next of arr[cur]) {
      if (!visited[next]) {
        visited[next] = true;
        color[next] = !color[cur];
        traverse(next);
      } else {
        if (color[next] === color[cur]) {
          res = false;
          break;
        }
      }
    }
  }
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      traverse(i);
    }
    if (!res) {
      return res;
    }
  }
  return res;
};