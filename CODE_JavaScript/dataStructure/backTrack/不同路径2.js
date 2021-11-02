/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let sum = 0;
  let rows = obstacleGrid.length - 1;
  let cols = obstacleGrid[0].length - 1;
  function solve(row, col) {
    if (row > rows || col > cols || obstacleGrid[row][col]) {
      return;
    }
    if (row === rows && col === cols) {
      sum++;
      return;
    }
    solve(row+1, col);
    solve(row, col+1);
  }
  solve(0, 0);
  return sum;
};