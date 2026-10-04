class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = {}
        for (let i = 0; i < nums.length; i++) {
        // console.log(Object.hasOwn( obj ,target - nums[i]))
            if (Object.hasOwn(obj,target - nums[i])) {
                return [obj[target - nums[i]], i]
            } else obj[nums[i]] = i
        }
    }

}
