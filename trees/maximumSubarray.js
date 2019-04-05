/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
  let sum = -Infinity;
  let curr; 
  let maxSum = -Infinity;
  for(let i = 0; i < nums.length; i++) {
      curr = nums[i];
      sum = Math.max(0, sum);
      sum += curr;
      maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

//variables
//sum: -infinity, curr: 0, maxsum: -infinity
//if sum is less than zero, then largest contiguous sum will all ready have passed because if the numbers are all negative, then it will be the largest negative number. If it ad previously been positive then that would already have been the max.

// 1. intialize variable and scan through array.
// 2. if sum is less than zero, then sum === 0, 
// 3. sum += curr
// 4. if sum is greater than max, then replace max