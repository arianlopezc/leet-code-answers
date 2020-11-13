var permute = function(nums) {
    if(nums.length <= 1) return [nums];
    
    const container = [];
    
    for( let i = 0; i < nums.length; i++ ) { 
        const currElement = nums[i];
        const pref = nums.slice(0, i);
        const suff = nums.slice(i + 1, nums.length);
        
        const permutations = permute([...pref, ...suff])
        
        for (let j = 0; j < permutations.length; j++ ) {
            container.push([currElement, ...permutations[j]])
        }
    }
    
    return container;
};