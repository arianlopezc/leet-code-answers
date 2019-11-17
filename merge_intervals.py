from typing import List

def merge_intervals(intervals: List[List[int]]) -> List[List[int]]:
    intervals.sort(key=lambda x: x[0])
    index = 0
    while index < (len(intervals) - 1):
        low, high = intervals[index], intervals[index + 1]
        if low[1] >= high[0]:
            intervals[index] = [min(intervals[index] + intervals[index + 1]), max(intervals[index] + intervals[index + 1])]
            intervals.pop(index + 1)
        else:
            index += 1
    return intervals
