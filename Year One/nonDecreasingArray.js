/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let oneErrorEncountered = false;
    for (let i = 0; i < nums.length; i++) {
        if (i + 1 < nums.length){
            if(nums[i] > nums[i + 1]) {
                if(oneErrorEncountered) {
                    return false;
                } else {
                    if(i - 1 >= 0 && i + 2 < nums.length){
                        let lowerBound = nums[i - 1];
                        let upperBound = nums[i + 2];
                        
                        if((nums[i] < lowerBound || nums[i] > upperBound)
                                && (nums[i + 1] < lowerBound || nums[i + 1] > upperBound)){
                            return false;
                        }
                    }
                    oneErrorEncountered = true;
                }
            }
        } 
    }
    return true;
};