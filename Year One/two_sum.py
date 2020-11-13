from typing import List

def two_sum(nums: List[int], target: int) -> List[int]:
    differences = {}
    for index in range(len(nums)):
        if target - nums[index] not in differences:
            differences[nums[index]]=index
        else:
            return [differences[target-nums[index]],index]
