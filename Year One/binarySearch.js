function binarySearch(list, target) {
    let min = 0;
    let max = list.length;
    while (min < max) {
        const pivot = min + Math.floor((max - min) / 2);
        if (list[pivot] === target)
            return true;
        else {
            if (list[pivot] < target) {
                min = pivot + 1;
            } else {
                max = pivot;
            }
        }
    }
    return false;
}