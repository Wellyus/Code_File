/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  let len = graph.length;
  let res = true;
  const color = new Array(len);
  const visited = new Array(len);
  color.fill(false);
  visited.fill(false);
  function traverse(start) {
    for (let next of graph[start]) {
      if (!visited[next]) {
        visited[next] = true;
        color[next] = !color[start];
        traverse(next);
      } else {
        if (color[next] === color[start]) {
          res = false;
          break;
        }
      }
    }
  }
  for (let i = 0; i < len; i++) {
    if (!visited[i]) {
      visited[i] = true;
      traverse(i);
    }
    if (!res) {
      return false;
    }
  }
  return true;
};