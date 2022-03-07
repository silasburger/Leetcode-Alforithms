class Solution:
    def sortedSquares(self, nums):
        out = [None] * len(nums)
        counter = len(nums)
        hi = len(nums) - 1
        lo = 0

        while counter > 0:
            if nums[lo] ** 2 > nums[hi] ** 2:
                out[counter - 1] = nums[lo] ** 2
                lo += 1
            else: 
                out[counter - 1] = nums[hi] ** 2
                hi -= 1
            counter -= 1

        return out


        


# Input: nums = [-4,-1,0,3,10]
# Output: [0,1,9,16,100]
