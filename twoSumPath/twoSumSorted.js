/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let min = 0;
    let max = nums.length - 1;
    let guess = Math.floor((min + max) / 2)
    let sum;
    while (p1 < p2) {
        sum = nums[p1] + nums[p2];
        if(sum === target) {
            return [p1+1, p2+1];
        } else if(sum < target) {
            p1++;
        } else {
            p2--;
        }
    }
};

//time: O(n)

//space: O(1)