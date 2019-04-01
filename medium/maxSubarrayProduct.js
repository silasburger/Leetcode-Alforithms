/**
 * @param {number[]} nums
 * @return {number}
//  */
var maxProduct = function(nums) {
  let productOne = 1;
  let productTwo = -Infinity;
  let maxProduct = -Infinity;
  for(let i = 0; i < nums.length; i++) {
         if(productTwo === -Infinity && productOne < 0) {
          productTwo = nums[i];
      } else if(productTwo !== -Infinity) {
          productTwo *= nums[i];
      }
      productOne *= nums[i];
      maxProduct = Math.max(maxProduct, productOne, productTwo);
      if(nums[i] === 0) {
          productOne = 1; 
          productTwo = -Infinity;
      }   
  }
  return maxProduct;
};

// time: O(n)
// space: O(1)