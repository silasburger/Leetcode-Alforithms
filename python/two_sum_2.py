class Solution():
    def twoSum(self, numbers: list[int], target: int) -> list[int]:
        hi = len(numbers) - 1
        lo = 0

        while hi > lo:
            s_val = numbers[hi] + numbers[lo]
            if s_val == target:
                return [lo + 1, hi + 1]
            elif s_val < target:
                lo += 1
            else:
                hi -= 1

        return [-1, -1]
