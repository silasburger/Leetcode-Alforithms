/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let complementsMap = new Map();
  for(let i = 0; i < nums.length; i++) {
      if(complementsMap.has(nums[i])) {
          return [complementsMap.get(nums[i]), i];
      }
      complementsMap.set(target - nums[i], i);
  }
  return [];
};

//time: O(n) because we are iterating through n elements
//space: O(n) because at most we could store N elements in the hash table

