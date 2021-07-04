/**
 * 1. Two Sum
 * 
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
 var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(i != j) {
                if(nums[i] + nums[j] == target) return [i, j];
            }
        }
    }
};