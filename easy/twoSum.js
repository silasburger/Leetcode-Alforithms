function twoSum(nums, target) {
  let complements = {};
  for (let i = 0; i < nums.length; i++) {
      if(complements[nums[i]] !== undefined) {
          return [complements[nums[i]], i];
      }
      complements[target-nums[i]] = i;
  }
  return [];
}

//time: O(n) because we are iterating through n elements
//space: O(n) because at most we could store N elements in the hash table