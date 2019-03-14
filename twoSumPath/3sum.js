/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a,b) => a-b);
  let sum;
  let results = [];
  for(let i = 0; i < nums.length-1; i++) {
      if(nums[i] === nums[i-1]) continue;
      let p1 = i + 1;
      let p2 = nums.length - 1;
      while (p1 < p2) {
          sum = nums[i] + nums[p1] + nums[p2];
          if(sum === 0) {
              results.push([nums[i], nums[p1], nums[p2]]);
              while (nums[p1] === nums[p1+1] ) {
                  p1++;    
              }
              while (nums[p2] === nums[p2-1] ) {
                  p2--;    
              }
              p2--;
              p1++;
              
          } else if(nums[i] + nums[p1] + nums[p2] < 0) {
              p1++;
          } else {
              p2--;
          }
      }
  }
  return results;
};

//time: O(n^2) but could be N * logn
//space: O(n)