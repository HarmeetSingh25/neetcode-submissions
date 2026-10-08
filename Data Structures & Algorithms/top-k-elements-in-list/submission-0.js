class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {}
        for (let i = 0; i < nums.length; i++) {
            if (Object.hasOwn(obj, nums[i])) {
                obj[nums[i]] += 1
            } else {
                obj[nums[i]] = 1
            }
        }
        let topk = Object.entries(obj).sort(([, a], [, b]) => b - a)
            .slice(0, k).map(([key]) => key);

        return topk
    }
}
