class Solution:
    def rotate(self, nums: list[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        k = k % len(nums) 
        start = len(nums) - k
        self.reverse_in_place(nums, start, len(nums) - 1)
        self.reverse_in_place(nums, 0, start - 1)
        self.reverse_in_place(nums, 0, len(nums) - 1)
    def reverse_in_place(self, nums, start, end):
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1


