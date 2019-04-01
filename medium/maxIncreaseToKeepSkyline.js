/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let rowsMax = {};
  let colsMax = {};
  let count = 0;
  for(let i = 0; i < grid.length; i++) {
      rowsMax[i] = Math.max(...grid[i]);
      for(let j = 0; j < grid[0].length; j++) {
          let currMax = (colsMax[j] || 0);
          colsMax[j] = Math.max(grid[i][j], currMax);
      }
  }
  for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[0].length; j++) {
          count += Math.min(rowsMax[i], colsMax[j]) - grid[i][j];
      }
  }
  
  return count;
};

// every row has a max
// every col has a max
// pick the smaller of the two and add the difference up


// approach one:
// make hashmap for both the columns, top bottom,
// and rows, left right maxes.

// go through and for each cell record difference between lowest of two
// add it to count

// time: O(r * c)
// space O(n) r + c