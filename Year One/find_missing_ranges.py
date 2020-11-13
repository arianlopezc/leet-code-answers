from typing import List

def find_missing_ranges(nums: List[int], lower: int, upper: int) -> List[str]:
    results, i = [], 1
    nums = [lower - 1] + nums + [upper+1]
    while i < len(nums):
        low = nums[i - 1]
        high = nums[i]
        if high - low == 2:
            results.append(str(low+1))
        elif high - low > 2:
            results.append(str(low+1)+ '->' + str(high - 1))
        i+=1
    return results
