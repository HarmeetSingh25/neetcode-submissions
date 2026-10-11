class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let val = "";
        for (let i = 0; i < strs.length; i++) {
            val += strs[i].length + "#" + strs[i];
        }
        return val;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = []
        let i = 0
        while (i < str.length) {
            let j = i
            while (str[j] != "#") {
                j++
            }
            let len = Number(str.slice(i, j))
            let start = j + 1
            arr.push(str.slice(start, start + len))
i=start+len
        }
        return arr
    }
}
