class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        for (let str of strs) {
            let sortedkey = str.split("").sort().join("")
            if (map[sortedkey]) {
                map[sortedkey].push(str)
            } else {
                map[sortedkey]=[str]
            }
        }
        return Object.values(map)
    }
}
