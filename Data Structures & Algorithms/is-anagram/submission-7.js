class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false
        let Sset = {}
        let Tset = {}
        for (let i = 0; i < s.length; i++) {
            if (Object.hasOwn(Sset, s[i])) {
                Sset[s[i]]++
            }
            else Sset[s[i]] = 1
        }
        for (let j = 0; j < t.length; j++) {
            if (Object.hasOwn(Tset, t[j])) {
                Tset[t[j]]++
            } else Tset[t[j]] = 1
        }
        // console.log(Object.keys(Sset).length, Object.keys(Tset).length)
        console.log(Sset, Tset)
        if (Object.keys(Sset).length == Object.keys(Tset).length) {
            for (let k = 0; k < s.length; k++) {
                if (Sset[s[k]] != Tset[s[k]]) {
                    return false
                }
            }
        }else{
            return false
        }
        return true
    }
}
