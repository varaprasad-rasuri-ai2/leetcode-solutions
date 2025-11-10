var isSubsequence = function (s, t) {
    // If s is empty, it’s always a subsequence of t
    if (s === '') return true

    let m = s.length
    let n = t.length
    let i = 0  // pointer for s

    // Loop through t with pointer j
    for (let j = 0; j < n; j++) {
        // When characters match, move i to next char in s
        if (t[j] === s[i]) {
            i++
            // If we've matched all of s, return true
            if (i === m) {
                return true
            }
        }
    }

    // If loop finishes and we haven't matched all of s, return false
    return false
};

var isSubsequence = function (s, t) {
    let i = 0, j = 0
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) i++
        j++
    }
    return i === s.length
}

var isSubsequence = function (s, t) {
    // Base cases
    if (s.length === 0) return true
    if (t.length === 0) return false

    // If first chars match, move both pointers
    if (s[0] === t[0]) {
        return isSubsequence(s.slice(1), t.slice(1))
    } else {
        // Otherwise, move only t’s pointer
        return isSubsequence(s, t.slice(1))
    }
}



