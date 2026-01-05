let cl = console.log

var isIsomorphic = function (s, t) {
    // Log the input strings (useful for debugging)
    cl({ s, t })

    // objS will store the last index where each character in s appeared
    // objT will store the last index where each character in t appeared
    let objS = {}
    let objT = {}

    // Loop through each character of both strings
    for (let i = 0; i < s.length; i++) {

        // If the last seen index of s[i] is NOT the same as
        // the last seen index of t[i], the pattern breaks
        // → strings are NOT isomorphic
        if (objS[s[i]] !== objT[t[i]]) {
            return false
        }

        // Record/update the index of the current character in s
        objS[s[i]] = i

        // Record/update the index of the current character in t
        objT[t[i]] = i
    }

    // Log final character-to-index mappings (for debugging)
    cl({ objS, objT })

    // If no mismatches were found, the strings are isomorphic
    return true
};
