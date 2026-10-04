class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
let numsset = new Set()
        for(let i =0 ; i<nums.length; i++){
if(numsset.has(nums[i])) return true
else numsset.add(nums[i])
        }
        return false
    }
}
